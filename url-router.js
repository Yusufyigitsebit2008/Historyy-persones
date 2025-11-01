const urlRoutes = {
  404: {
    template: "404.html",
    title: "404 - Sayfa Bulunamadı",
    init: () => {}
  },
  "/": { // Bu artık "#/" anlamına gelecek
    template: "home.html",
    title: "Ana Sayfa - Echoes of History",
    init: "initHomePage", 
    navKey: "home",
  },
  "/history": { // "#/history"
    template: "history.html",
    title: "Sohbet Geçmişi",
    init: "initHistoryPage",
    navKey: "history",
  },
  "/settings": { // "#/settings"
    template: "settings.html",
    title: "Ayarlar",
    init: "initSettingsPage",
    navKey: "settings",
  },
  "/chat": { // "#/chat/ID"
    template: "chat.html",
    title: "Sohbet",
    init: "initChatPage",
    navKey: "home", 
  },
  "/login": { // "#/login"
    template: "login.html", 
    title: "Giriş Yap",
    init: "initLoginPage",
    navKey: "login",
  },
};

// --- HASH'İ OKUYAN YÖNLENDİRİCİ ---
const urlLocationHandler = async () => {
  // window.location.pathname yerine window.location.hash kullanılır.
  // örn: #/chat/curie -> "/chat/curie"
  let location = window.location.hash.substring(1) || "/"; 

  // Dinamik rota desteği (örn: /chat/curie)
  const pathSegments = location.split("/").filter((s) => s); 
  let routeKey = "/" + (pathSegments[0] || ""); // "/chat"
  let routeParams = pathSegments.slice(1); // ['curie']

  let route = urlRoutes[routeKey];

  if (!route) {
    // Statik rotayı (örn: /history) kontrol et
    routeKey = location;
    route = urlRoutes[routeKey];
    routeParams = [];
  }

  if (!route) {
    route = urlRoutes[404];
  }

  // HTML'i yükle
  try {
    const html = await fetch(route.template).then((res) => {
        if (!res.ok) throw new Error(`Dosya bulunamadı: ${route.template}`);
        return res.text();
    });
    
    document.getElementById("content").innerHTML = html;
    document.title = route.title;

    // Navbar'daki aktif linki ayarla
    document.querySelectorAll(".navbar .nav-links a").forEach((link) => {
        link.classList.remove("active");
        if (link.dataset.navKey === route.navKey) {
        link.classList.add("active");
        }
    });

    if (typeof window[route.init] === "function") {
      // (TypeError hatasını önlemek için 0ms gecikme hala geçerli)
      setTimeout(() => {
          window[route.init](routeParams); 
      }, 0); 
    }
    
    // Dil fonksiyonu globalde olduğu için direkt çağrılabilir
    if (typeof applyLanguage === "function") {
        applyLanguage(localStorage.getItem("lang") || "tr");
    }

  } catch (error) {
      console.error("Router Hatası:", error);
      const html_404 = await fetch(urlRoutes[404].template).then(res => res.text());
      document.getElementById("content").innerHTML = html_404;
      document.title = urlRoutes[404].title;
  }
};

// --- TIKLAMALAR ARTIK HASH'İ DEĞİŞTİRİYOR ---
document.addEventListener("click", (e) => {
  const target = e.target.closest("a"); 
  if (!target) return; 

  // Register butonu özel kuralı
  if (target.id === 'registerBtn') {
    e.preventDefault();
    window.location.hash = "/login"; // pushState yerine hash
    
    // Checkbox'ı tetiklemek için kısa bir gecikme
    setTimeout(() => {
       const chk = document.getElementById("authChk");
       if (chk) chk.checked = true;
    }, 100); // 100ms bekle
    return;
  }
  
  // Yeni sekme veya dış linkleri tarayıcıya bırak
  if (target.target === "_blank" || !target.href || !target.href.startsWith(window.location.origin)) {
    return;
  }

  const href = target.getAttribute("href");

  // Eğer link bir HASH linki ise (#/ ile başlıyorsa)
  if (href && href.startsWith("#")) {
    e.preventDefault(); // Sayfayı yenilemeyi engelle
    window.location.hash = href.substring(1); // Sadece hash'i değiştir (ilk '#' olmadan)
  }
});

// --- onpopstate YERİNE onhashchange ---
// Tarayıcıda geri/ileri basıldığında veya hash değiştiğinde tetiklenir
window.addEventListener("hashchange", urlLocationHandler);

// Sayfa ilk yüklendiğinde
window.addEventListener("DOMContentLoaded", () => {
  // Global dinleyicileri (tema, dil, profil menüsü) başlat
  if (typeof initializeGlobalListeners === "function") {
      initializeGlobalListeners(); 
  }
  
  // Eğer kullanıcı #/ olmadan girdiyse (örn: http://127.0.0.1:5501/),
  // onu ana sayfaya (#/) yönlendir.
  if (!window.location.hash) {
      window.location.hash = "/";
  }
  
  urlLocationHandler(); // URL'deki HASH'e göre doğru sayfayı yükle
});
// !!! BURAYA KENDİ GOOGLE AI API KEY'İNİ YAPIŞTIR !!!
const API_KEY = "AIzaSyBvNvEYKk5n5fu5SDFduJkhmmcHLqRmkEk";
// -----------------------------------------------------------------

// --- DÜZELTME: API_URL SENİN ÇALIŞAN KODUNDAN ALINDI ---
const API_URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-lite-preview-06-17:generateContent?key=${API_KEY}`;