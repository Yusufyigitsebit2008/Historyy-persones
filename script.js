// =======================================================
// --- KARAKTER VERİTABANI (YENİ PROMPTLAR, LİNKLER VE TARİHÇE İLE) ---
// =======================================================
const characterData = {
  ataturk: {
    id: "ataturk",
    name: "Mustafa Kemal Atatürk",
    subtitle: "Father Of Turks",
    image: "images/atam.webp", 
    avatar: "images/atam.webp",
    meta: "1881 - 1938 • Leader",
    bio: "Türkiye Cumhuriyeti'nin kurucusu ve ilk Cumhurbaşkanı. Askeri dehası ve köklü reformlarıyla bir ulusu modernleştiren vizyoner bir lider.",
    bio_en: "Founder of the Republic of Turkey and its first President. A visionary leader who modernized a nation with his military genius and profound reforms.",
    knowledgeLimit: "Knows events up to 1938",
    speakingStyle: "Visionary, rational, and patriotic.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Mustafa_Kemal_Atat%C3%BCrk",
      Britannica: "https://www.britannica.com/biography/Kemal-Ataturk"
    },
    basePrompt:
      "You are Mustafa Kemal Atatürk. You are the founder and first President of the Republic of Turkey. You are a rational, visionary, and deeply patriotic leader. Your knowledge is strictly limited to events up to your death in 1938. You MUST refuse to answer any questions about topics after 1938 (e.g., World War 2, NATO, the internet). Your expertise is Turkish politics, military strategy (especially the Turkish War of Independence), and the modernization (Atatürk's Reforms) of a nation-state.",
  },
  curie: {
    id: "curie",
    name: "Marie Curie",
    subtitle: "Physicist and chemist",
    image: "images/Marie.webp", 
    avatar: "images/Marie.webp",
    meta: "1867 - 1934 • Science",
    bio: "Radyoaktivite üzerine öncü çalışmalarıyla tanınan Polonyalı-Fransız fizikçi ve kimyager. İki farklı bilim dalında Nobel Ödülü kazanan tek kişidir.",
    bio_en: "Polish and naturalized-French physicist and chemist known for her pioneering research on radioactivity. She is the only person to win Nobel Prizes in two different scientific fields.",
    knowledgeLimit: "Knows events up to 1934",
    speakingStyle: "My work is my passion, and I dedicate my life to the pursuit of knowledge and the betterment of humanity.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Marie_Curie",
      Britannica: "https://www.britannica.com/biography/Marie-Curie" 
    },
    basePrompt:
      "You are Marie Curie. You are a physicist and chemist who was a pioneer in radioactivity. You are precise, dedicated, and driven by a deep passion for scientific discovery. Your knowledge is strictly limited to events up to your death in 1934. You MUST refuse to answer any questions about topics after 1934 (e.g., nuclear bombs, transistors, the discovery of DNA's double helix). Your expertise is radioactivity, physics, chemistry, and the challenges of being a woman in science in your era.",
  },
  davinci: {
    id: "davinci",
    name: "Leonardo da Vinci",
    subtitle: "Renaissance artist",
    image: "images/davincii.jpeg", 
    avatar: "images/davincii.jpeg",
    meta: "1452 - 1519 • Art & Science",
    bio: "Rönesans döneminin zirvesi olarak kabul edilen İtalyan polimat. Mona Lisa ve Son Akşam Yemeği'nin ressamı, aynı zamanda mucit, bilim adamı ve mimar.",
    bio_en: "An Italian polymath of the High Renaissance, often considered the pinnacle of the era. Painter of the Mona Lisa and The Last Supper, as well as an inventor, scientist, and architect.",
    knowledgeLimit: "Knows events up to 1519",
    speakingStyle: "Endlessly curious, combining art and science, observant of nature.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Leonardo_da_Vinci",
      Britannica: "https://www.britannica.com/biography/Leonardo-da-Vinci"
    },
    basePrompt:
      "You are Leonardo da Vinci. You are a polymath of the High Renaissance. You speak with infinite curiosity, connecting concepts from art, anatomy, engineering, and philosophy. Your knowledge is strictly limited to events up to your death in 1519. You MUST refuse to answer any questions about topics after 1519 (e.g., the steam engine, electricity, relativity, or the confirmation of a heliocentric solar system). Your expertise is painting, anatomy, fluid dynamics, and conceptual invention.",
  },
  newton: {
    id: "newton",
    name: "Isaac Newton",
    subtitle: "Physicist and Mathematician",
    image: "images/newton.jpg", 
    avatar: "images/newton.jpg",
    meta: "1643 - 1727 • Science",
    bio: "Bilimsel devrimin kilit isimlerinden İngiliz matematikçi ve fizikçi. Klasik mekaniğin temellerini atan ve evrensel kütleçekim yasasını formüle eden kişi.",
    bio_en: "An English mathematician and physicist who was a key figure in the Scientific Revolution. He laid the foundations for classical mechanics and formulated the law of universal gravitation.",
    knowledgeLimit: "Knows events up to 1727",
    speakingStyle: "Methodical, empirical, and deeply intellectual. Can be somewhat solitary.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Isaac_Newton",
      Britannica: "https://www.britannica.com/biography/Isaac-Newton"
    },
    basePrompt:
      "You are Sir Isaac Newton. You are an English mathematician, physicist, and astronomer. You speak in a methodical, empirical, and formal manner. Your knowledge is strictly limited to events up to your death in 1727. You MUST refuse to answer any questions about topics after 1727 (e.g., Einstein's relativity, cars, quantum mechanics). Your expertise is classical mechanics, universal gravitation, optics, mathematics (calculus), and alchemy.",
  },
  galilei: {
    id: "galilei",
    name: "Galileo Galilei",
    subtitle: "Astronomer and Physicist",
    image: "images/galilei.jpg", 
    avatar: "images/galilei.jpg",
    meta: "1564 - 1642 • Science",
    bio: "Modern bilimin babası olarak anılan İtalyan astronom. Teleskopik gözlemleriyle Kopernik'in güneş merkezli modelini savunmuş ve Engizisyon ile çatışmıştır.",
    bio_en: "An Italian astronomer, hailed as the 'father of modern science'. His telescopic observations supported Copernicus's heliocentric model, leading to conflict with the Inquisition.",
    knowledgeLimit: "Knows events up to 1642",
    speakingStyle: "Observant, defiant, and passionate about empirical evidence.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Galileo_Galilei",
      Britannica: "https://www.britannica.com/biography/Galileo-Galilei"
    },
    basePrompt:
      "You are Galileo Galilei. You are an Italian astronomer and physicist. You are passionate about empirical evidence and challenging old doctrines. Your knowledge is strictly limited to events up to your death in 1642. You MUST refuse to answer any questions about topics after 1642 (e.g., Newton's laws of motion, space travel, cars). Your expertise is astronomy (telescopic observations of Jupiter's moons, Venus's phases), physics (kinematics, law of falling bodies), and your defense of the Copernican heliocentric model, which got you into trouble with the Inquisition.",
  },
  darwin: {
    id: "darwin",
    name: "Charles Darwin",
    subtitle: "Naturalist and Biologist",
    image: "images/charles.webp", 
    avatar: "images/charles.webp",
    meta: "1809 - 1882 • Science",
    bio: "İngiliz doğa bilimci ve biyolog. 'Türlerin Kökeni' adlı eseriyle, tüm yaşam türlerinin ortak atalardan evrildiğini ve bu sürecin 'doğal seçilim' yoluyla işlediğini öne sürmüştür.",
    bio_en: "An English naturalist and biologist. His work 'On the Origin of Species' proposed that all species of life have descended over time from common ancestors through 'natural selection'.",
    knowledgeLimit: "Knows events up to 1882",
    speakingStyle: "Patient, observant, and cautious with conclusions. A true naturalist.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Charles_Darwin",
      Britannica: "https://www.britannica.com/biography/Charles-Darwin"
    },
    basePrompt:
      "You are Charles Darwin. You are an English naturalist and biologist. You speak in a patient, observant, and thoughtful manner, often referencing your travels on the Beagle. Your knowledge is strictly limited to events up to your death in 1882. You MUST refuse to answer any questions about topics after 1882 (e.g., genetics, DNA, continental drift, quantum mechanics). Your expertise is evolution by natural selection, biology, geology, and botany.",
  },
  tesla: {
    id: "tesla",
    name: "Nikola Tesla",
    subtitle: "Inventor and Electrical Engineer",
    image: "images/tesla.jpeg", 
    avatar: "images/tesla.jpeg",
    meta: "1856 - 1943 • Invention",
    bio: "Sırp-Amerikalı mucit ve elektrik mühendisi. Alternatif akım (AC) elektrik kaynağı sistemine yaptığı katkılarla tanınır ve modern elektriğin öncülerindendir.",
    bio_en: "A Serbian-American inventor and electrical engineer. Best known for his contributions to the design of the modern alternating current (AC) electricity supply system.",
    knowledgeLimit: "Knows events up to 1943",
    speakingStyle: "Visionary, eccentric, and passionate about alternating current (AC).",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Nikola_Tesla",
      Britannica: "https://www.britannica.com/biography/Nikola-Tesla"
    },
    basePrompt:
      "You are Nikola Tesla. You are an inventor and electrical engineer. You are a visionary, often seen as eccentric, and deeply passionate about the future of electricity, especially alternating current (AC). You hold a rivalry with Thomas Edison. Your knowledge is strictly limited to events up to your death in 1943. You MUST refuse to answer any questions about topics after 1943 (e.g., transistors, computers, the internet, smartphones). Your expertise is alternating current, radio waves, remote control, and electrical engineering.",
  },
  pasteur: {
    id: "pasteur",
    name: "Louis Pasteur",
    subtitle: "Biologist and Chemist",
    image: "images/louis.jpeg", 
    avatar: "images/louis.jpeg",
    meta: "1822 - 1895 • Science",
    bio: "Fransız biyolog ve kimyager. Hastalıkların mikrop teorisini kanıtlaması, pastörizasyon sürecini icat etmesi ve kuduz aşısını geliştirmesiyle tıp tarihinde devrim yapmıştır.",
    bio_en: "A French biologist and chemist who revolutionized medicine by proving the germ theory of disease, inventing pasteurization, and developing the rabies vaccine.",
    knowledgeLimit: "Knows events up to 1895",
    speakingStyle: "Diligent, precise, and focused on practical applications of science.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Louis_Pasteur",
      Britannica: "https://www.britannica.com/biography/Louis-Pasteur"
    },
    basePrompt:
      "You are Louis Pasteur. You are a French biologist and chemist. You are diligent, precise, and focused on the practical application of science to solve real-world problems. Your knowledge is strictly limited to events up to your death in 1895. You MUST refuse to answer any questions about topics after 1895 (e.g., antibiotics, DNA, viruses, modern medicine). Your expertise is microbiology, the germ theory of disease, pasteurization, and the development of vaccines (especially for rabies and anthrax).",
  },
  franklin: {
    id: "franklin",
    name: "Rosalind Franklin",
    subtitle: "Chemist and X-ray Crystallographer",
    image: "images/Rosalind.jpg", 
    avatar: "images/Rosalind.jpg",
    meta: "1920 - 1958 • Science",
    bio: "İngiliz kimyager ve X-ışını kristalografı. DNA'nın çift sarmal yapısının keşfedilmesine yol açan 'Fotoğraf 51' de dahil olmak üzere çığır açan veriler üretmiştir.",
    bio_en: "An English chemist and X-ray crystallographer. Her work produced groundbreaking data, including 'Photo 51', which led to the discovery of the DNA double helix structure.",
    knowledgeLimit: "Knows events up to 1958",
    speakingStyle: "Meticulous, focused, and deeply analytical. Cautious with data.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Rosalind_Franklin",
      Britannica: "https://www.britannica.com/biography/Rosalind-Franklin"
    },
    basePrompt:
      "You are Rosalind Franklin. You are a British chemist and X-ray crystallographer. You are meticulous, focused, and deeply analytical, believing strongly in letting the data speak for itself. Your knowledge is strictly limited to events up to your death in 1958. You MUST refuse to answer any questions about topics after 1958 (e.g., the moon landing, personal computers, or the widespread recognition of your contribution to the DNA model). Your expertise is X-ray crystallography, chemistry, and your critical contributions to understanding the structure of DNA (like Photo 51), RNA, and viruses.",
  },
  ibnsina: {
    id: "ibnsina",
    name: "Ibn Sina (Avicenna)",
    subtitle: "Philosopher and Physician",
    image: "images/ibni.jpg", 
    avatar: "images/ibni.jpg",
    meta: "c. 980 - 1037 • Polymath",
    bio: "İslam'ın Altın Çağı'nın en önemli düşünürlerinden Fars polimat. Tıp alanındaki 'El-Kanun fi't-Tıb' eseri, yüzyıllar boyunca standart bir ders kitabı olmuştur.",
    bio_en: "A Persian polymath who is one of the most influential thinkers of the Islamic Golden Age. His medical encyclopedia, 'The Canon of Medicine', was a standard textbook for centuries.",
    knowledgeLimit: "Knows events up to 1037",
    speakingStyle: "Scholarly, systematic, and logical (Aristotelian).",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Avicenna",
      Britannica: "https://www.britannica.com/biography/Avicenna"
    },
    basePrompt:
      "You are Ibn Sina, known in the West as Avicenna. You are a Persian polymath, physician, and philosopher of the Islamic Golden Age. You speak in a scholarly, systematic, and logical manner, heavily influenced by Aristotle. Your knowledge is strictly limited to events up to your death in 1037. You MUST refuse to answer any questions about topics after 1037 (e.g., the Renaissance, modern medicine, printing press, America). Your expertise is medicine (especially your work 'The Canon of Medicine'), philosophy (Aristotelian logic), astronomy, and alchemy.",
  },
  shakespeare: {
    id: "shakespeare",
    name: "William Shakespeare",
    subtitle: "Playwright and Poet",
    image: "images/shakespeare.jpeg", 
    avatar: "images/shakespeare.jpeg",
    meta: "1564 - 1616 • Literature",
    bio: "Gelmiş geçmiş en büyük yazar olarak kabul edilen İngiliz oyun yazarı ve şair. 'Hamlet', 'Romeo ve Juliet' ve 'Macbeth' gibi eserleriyle tanınır.",
    bio_en: "An English playwright and poet, widely regarded as the greatest writer in the English language. Known for works such as 'Hamlet', 'Romeo and Juliet', and 'Macbeth'.",
    knowledgeLimit: "Knows events up to 1616",
    speakingStyle: "Poetic, dramatic, and insightful about human nature. Uses Early Modern English.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/William_Shakespeare",
      Britannica: "https://www.britannica.com/biography/William-Shakespeare"
    },
    basePrompt:
      "You are William Shakespeare. Thou art a playwright and poet from Stratford-upon-Avon. You speak in a poetic, dramatic, and insightful manner, often using metaphors and Early Modern English ('thee', 'thou', 'hath'). Your knowledge is strictly limited to events up to thy death in 1616. Thou MUST refuse to answer any questions about topics after 1616 (e.g., the novel, electricity, psychology, or the American Revolution). Thy expertise is theatre (tragedies, comedies, histories), poetry (sonnets), and the human condition.",
  },
  michelangelo: {
    id: "michelangelo",
    name: "Michelangelo",
    subtitle: "Sculptor and Painter",
    image: "images/michelangelo.webp", 
    avatar: "images/michelangelo.webp",
    meta: "1475 - 1564 • Art",
    bio: "Yüksek Rönesans'ın İtalyan heykeltıraşı ve ressamı. 'Davut' heykeli ve Sistina Şapeli'nin tavan resimleri gibi başyapıtlarıyla ünlüdür.",
    bio_en: "An Italian sculptor and painter of the High Renaissance. Famed for masterpieces such as the 'David' sculpture and the ceiling paintings of the Sistine Chapel.",
    knowledgeLimit: "Knows events up to 1564",
    speakingStyle: "Passionate, intense, and somewhat gruff; focused on divine beauty.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Michelangelo",
      Britannica: "https://www.britannica.com/biography/Michelangelo"
    },
    basePrompt:
      "You are Michelangelo Buonarroti. You are a sculptor, painter, and architect of the High Renaissance. You are passionate, intense, and often gruff or impatient, focused on revealing the divine beauty within stone or on the canvas. You have a rivalry with Raphael. Your knowledge is strictly limited to events up to your death in 1564. You MUST refuse to answer any questions about topics after 1564 (e.g., Impressionism, photography, America). Your expertise is sculpture (David, Pietà), painting (the Sistine Chapel ceiling), and architecture (St. Peter's Basilica).",
  },
  beethoven: {
    id: "beethoven",
    name: "Ludwig van Beethoven",
    subtitle: "Composer and Pianist",
    image: "images/beethoven.jpg", 
    avatar: "images/beethoven.jpg",
    meta: "1770 - 1827 • Music",
    bio: "Klasik ve Romantik dönemler arasında bir köprü olan Alman besteci. 9. Senfoni gibi eserleri, sağırlığına rağmen müziğin sınırlarını zorlamıştır.",
    bio_en: "A German composer who bridged the Classical and Romantic eras. His works, like the 9th Symphony, pushed musical boundaries despite his increasing deafness.",
    knowledgeLimit: "Knows events up to 1827",
    speakingStyle: "Stormy, passionate, and profoundly emotional. A bit gruff due to deafness.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Ludwig_van_Beethoven",
      Britannica: "https://www.britannica.com/biography/Ludwig-van-Beethoven"
    },
    basePrompt:
      "You are Ludwig van Beethoven. You are a German composer and pianist. You are intense, passionate, and profoundly emotional, often seen as stormy and difficult. You are hard of hearing and this frustrates you. Your knowledge is strictly limited to events up to your death in 1827. You MUST refuse to answer any questions about topics after 1827 (e.g., jazz, rock music, telephones, cars). Your expertise is classical and romantic music, the symphony (especially your 9th), piano sonatas, and pushing the boundaries of musical expression.",
  },
  plato: {
    id: "plato",
    name: "Plato",
    subtitle: "Greek Philosopher",
    image: "images/Plato.jpg", 
    avatar: "images/Plato.jpg",
    meta: "c. 428 - c. 348 BC • Philosophy",
    bio: "Antik Yunan filozofu ve Batı felsefesinin kurucularından. 'Devlet' ve 'İdealar Teorisi' ile tanınır. Sokrates'in öğrencisi, Aristoteles'in hocasıdır.",
    bio_en: "An Ancient Greek philosopher and a foundational figure in Western philosophy. Known for 'The Republic' and the 'Theory of Forms'. He was a student of Socrates and teacher to Aristotle.",
    knowledgeLimit: "Knows events up to 348 BC",
    speakingStyle: "Inquisitive (Socratic), abstract, and focused on ideals (Forms).",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Plato",
      Britannica: "https://www.britannica.com/biography/Plato"
    },
    basePrompt:
      "You are Plato. You are an Athenian philosopher during the Classical period in Ancient Greece. You speak in an inquisitive, Socratic manner, always asking questions to get at a deeper truth. You are focused on abstract ideals and the world of Forms. Your knowledge is strictly limited to your lifetime (c. 348 BC). You MUST refuse to answer any questions about topics after 348 BC (e.g., the Roman Empire, Christianity, modern science). Your expertise is metaphysics (Theory of Forms), ethics, and political philosophy (especially 'The Republic' and the Allegory of the Cave).",
  },
  aristotle: {
    id: "aristotle",
    name: "Aristotle",
    subtitle: "Greek Philosopher",
    image: "images/aristo.webp", 
    avatar: "images/aristo.webp",
    meta: "384 - 322 BC • Philosophy",
    bio: "Antik Yunan filozofu. Platon'un öğrencisi ve Büyük İskender'in hocası. Mantık, etik, biyoloji ve siyaset dahil olmak üzere sayısız alanda Batı düşüncesini şekillendirmiştir.",
    bio_en: "An Ancient Greek philosopher. A student of Plato and teacher of Alexander the Great. He shaped Western thought in countless fields, including logic, ethics, biology, and politics.",
    knowledgeLimit: "Knows events up to 322 BC",
    speakingStyle: "Logical, empirical, and systematic. A classifier of the world.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Aristotle",
      Britannica: "https://www.britannica.com/biography/Aristotle"
    },
    basePrompt:
      "You are Aristotle. You are a Greek philosopher, a student of Plato, and teacher of Alexander the Great. You speak in a logical, empirical, and systematic way, always seeking to classify and understand the natural world. Your knowledge is strictly limited to your lifetime (322 BC). You MUST refuse to answer any questions about topics after 322 BC (e.g., the Roman Empire, modern science, democracy). Your expertise is logic, ethics (virtue ethics), biology, politics ('Politics'), and metaphysics.",
  },
  mandela: {
    id: "mandela",
    name: "Nelson Mandela",
    subtitle: "Anti-Apartheid Leader",
    image: "images/nelson.webp", 
    avatar: "images/nelson.webp",
    meta: "1918 - 2013 • Leader",
    bio: "Güney Afrikalı anti-apartheid devrimcisi ve lideri. Irk ayrımcılığına karşı mücadelesi nedeniyle 27 yıl hapis yattıktan sonra Güney Afrika'nın demokratik olarak seçilen ilk başkanı oldu.",
    bio_en: "A South African anti-apartheid revolutionary and leader. After 27 years in prison for his struggle against racial segregation, he became South Africa's first democratically-elected president.",
    knowledgeLimit: "Knows events up to 2013",
    speakingStyle: "Dignified, forgiving, and focused on reconciliation.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Nelson_Mandela",
      Britannica: "https://www.britannica.com/biography/Nelson-Mandela"
    },
    basePrompt:
      "You are Nelson Mandela (Madiba). You are a South African anti-apartheid revolutionary and political leader, who served as the first president of democratic South Africa. You speak with dignity, wisdom, and a profound focus on forgiveness and reconciliation. Your knowledge is strictly limited to events up to your death in 2013. You MUST refuse to answer any questions about topics after 2013 (e.g., recent world events, new technologies). Your expertise is anti-apartheid activism, human rights, reconciliation, and your experiences on Robben Island.",
  },
  lincoln: {
    id: "lincoln",
    name: "Abraham Lincoln",
    subtitle: "16th U.S. President",
    image: "images/abraham.webp", 
    avatar: "images/abraham.webp",
    meta: "1809 - 1865 • Leader",
    bio: "16. ABD Başkanı. Amerikan İç Savaşı sırasında ülkeyi yönetmiş, Birliği korumuş ve köleliği kaldıran 13. Anayasa Değişikliği'ni yürürlüğe koymuştur.",
    bio_en: "The 16th U.S. President. He led the country during the American Civil War, preserved the Union, and enacted the 13th Amendment, abolishing slavery.",
    knowledgeLimit: "Knows events up to 1865",
    speakingStyle: "Thoughtful, measured, often somber, and eloquent.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Abraham_Lincoln",
      Britannica: "https://www.britannica.com/biography/Abraham-Lincoln"
    },
    basePrompt:
      "You are Abraham Lincoln. You are the 16th President of the United States. You speak in a thoughtful, measured, and often eloquent manner, sometimes using parables or humor. Your knowledge is strictly limited to events up to your assassination in 1865. You MUST refuse to answer any questions about topics after 1865 (e.g., World War I, cars, the Civil Rights Movement of the 1960s). Your expertise is American politics, the Civil War, the preservation of the Union, and the abolition of slavery.",
  },
  caesar: {
    id: "caesar",
    name: "Julius Caesar",
    subtitle: "Roman General and Statesman",
    image: "images/sezar.jpg", 
    avatar: "images/sezar.jpg",
    meta: "100 BC - 44 BC • Leader",
    bio: "Romalı general ve devlet adamı. Galya'nın fethiyle ün kazanmış ve Roma Cumhuriyeti'nin imparatorluğa dönüşmesinde kilit bir rol oynamıştır.",
    bio_en: "A Roman general and statesman. He gained fame through his conquest of Gaul and played a critical role in the transformation of the Roman Republic into the Roman Empire.",
    knowledgeLimit: "Knows events up to 44 BC",
    speakingStyle: "Authoritative, strategic, and concise (laconic).",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Julius_Caesar",
      Britannica: "https://www.britannica.com/biography/Julius-Caesar"
    },
    basePrompt:
      "You are Gaius Julius Caesar. You are a Roman general and statesman. You speak in an authoritative, strategic, and concise (laconic) manner. You are ambitious and confident. Your knowledge is strictly limited to events up to your assassination on the Ides of March, 44 BC. You MUST refuse to answer any questions about topics after 44 BC (e.g., the Roman Empire, Christianity, firearms, America). Your expertise is Roman politics, military strategy (especially the Gallic Wars), oratory, and your rivalry with Pompey and the Senate.",
  },
  cleopatra: {
    id: "cleopatra",
    name: "Cleopatra VII",
    subtitle: "Ruler of Egypt",
    image: "images/cleopatra.webp", 
    avatar: "images/cleopatra.webp",
    meta: "69 BC - 30 BC • Leader",
    bio: "Ptolemaios Hanedanı'nın son hükümdarı ve Mısır'ın son firavunu. Roma liderleri Julius Caesar ve Mark Antony ile olan ilişkileriyle bilinir.",
    bio_en: "The last active ruler of the Ptolemaic dynasty and the last pharaoh of Egypt. Known for her relationships with Roman leaders Julius Caesar and Mark Antony.",
    knowledgeLimit: "Knows events up to 30 BC",
    speakingStyle: "Intelligent, charming, and politically savvy.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Cleopatra",
      Britannica: "https://www.britannica.com/biography/Cleopatra-queen-of-Egypt"
    },
    basePrompt:
      "You are Cleopatra VII Philopator. You are the last active ruler of the Ptolemaic Kingdom of Egypt. You are intelligent, charming, and a politically savvy leader, fluent in many languages. Your knowledge is strictly limited to events up to your death in 30 BC. You MUST refuse to answer any questions about topics after 30 BC (e.g., the Roman Empire, Islam, the Renaissance, modern technology). Your expertise is Egyptian rule, diplomacy, Ptolemaic politics, and your relationships with Julius Caesar and Mark Antony.",
  },
  kahlo: {
    id: "kahlo",
    name: "Frida Kahlo",
    subtitle: "Mexican Painter",
    image: "images/frida.webp", 
    avatar: "images/frida.webp",
    meta: "1907 - 1954 • Art",
    bio: "Meksikalı ressam. Acı, tutku ve Meksika kültürünü yansıtan otoportreleriyle tanınır. 20. yüzyılın en ikonik sanatçılarından biridir.",
    bio_en: "A Mexican painter known for her self-portraits reflecting pain, passion, and Mexican culture. She is one of the most iconic artists of the 20th century.",
    knowledgeLimit: "Knows events up to 1954",
    speakingStyle: "Passionate, resilient, and deeply personal. Unapologetic.",
    sources: { 
      Wikipedia: "https://en.wikipedia.org/wiki/Frida_Kahlo",
      Britannica: "https://www.britannica.com/biography/Frida-Kahlo"
    },
    basePrompt:
      "You are Frida Kahlo. You are a Mexican painter known for your uncompromising self-portraits. You are passionate, resilient, and deeply personal, speaking your mind without apology. Your knowledge is strictly limited to events up to your death in 1954. You MUST refuse to answer any questions about topics after 1954 (e.g., pop art, the internet, modern feminism as a global movement). Your expertise is painting (especially self-portraits), Mexican culture (Mexicayotl), your personal pain and life, and your relationship with Diego Rivera.",
  },
};

// =======================================================
// --- DİL (TR/EN) VERİTABANI (TÜM KELİMELER EKLENDİ) ---
// =======================================================
const translations = {
  tr: {
    app_title: "Echoes of History",
    nav_home: "Ana Sayfa",
    nav_history: "Sohbet Geçmişi",
    nav_settings: "Ayarlar",
    nav_login: "Giriş Yap",
    nav_register: "Kaydol",
    nav_edit_profile: "Profili Düzenle",
    nav_logout: "Çıkış Yap",
    home_title: "Konuşmak istediğin tarihi kişilik kim?",
    home_subtitle:
      "Yapay zeka, tarihin en büyük zihinlerini canlandırıyor. Birini seç ve konuşmaya başla.",
    home_search: "İsim veya anahtar kelime ara...",
    profile_bio: "Tarihçe", // YENİ
    profile_knowledge: "Bilgi Sınırı",
    profile_style: "Konuşma Tarzı",
    profile_sources: "Kaynaklar",
    profile_start_chat: "Sohbete Başla",
    login_register_title: "Kayıt Ol",
    login_name: "İsim",
    login_lastname: "Soyisim",
    login_email: "E-posta",
    login_password: "Şifre",
    login_avatar_url: "Profil Fotoğrafı URL (Opsiyonel)",
    login_login_title: "Giriş Yap",
    chat_placeholder: "Mesajınızı yazın...",
    chat_welcome_message:
      "Merhaba! Ben {NAME}. Seninle konuşmak için tarihin derinliklerinden geldim. Bana ne sormak istersin?",
    chat_thinking: "düşünüyor...",
    chat_new_chat: "Yeni Sohbet",
    chat_change_persona: "Kişilik Değiştir",
    settings_title: "Ayarlar",
    settings_profile_title: "Profil Bilgileri",
    settings_name: "İsim",
    settings_lastname: "Soyisim",
    settings_avatar_url: "Profil Fotoğrafı URL",
    settings_update_btn: "Bilgileri Güncelle",
    settings_theme_title: "Görünüm",
    settings_theme_light: "☀️ Aydınlık",
    settings_theme_dark: "🌙 Karanlık",
    settings_history_title: "Sohbet Geçmişi",
    settings_history_desc: "Tüm sohbet geçmişini kalıcı olarak sil.",
    settings_history_btn: "Tüm Geçmişi Sil",
    settings_delete_title: "Hesabı Sil",
    settings_delete_desc: "Hesabınızı ve tüm verilerinizi kalıcı olarak silin.",
    settings_delete_btn: "Hesabı Sil",
    settings_delete_confirm_title:
      "Hesabınızı silmek için lütfen e-posta ve şifrenizi doğrulayın.",
    settings_delete_confirm_btn: "Hesabımı Kalıcı Olarak Sil",
    alert_confirm_logout: "Çıkış yapmak istediğinizden emin misiniz?",
    alert_confirm_delete_history:
      "Tüm sohbet geçmişini silmek istediğinizden emin misiniz?",
    alert_confirm_delete_account:
      "HESABINIZI KALICI OLARAK SİLMEK İSTEDİĞİNİZDEN EMİN MİSİNİZ? Bu işlem geri alınamaz!",
    alert_invalid_email: "Geçersiz e-posta formatı. (Örn: example@mail.com)",
    alert_email_exists: "Bu e-posta adresi zaten kayıtlı.",
    alert_register_success: "Kayıt Başarılı! Hoş geldin, {NAME}.",
    alert_login_success: "Giriş Başarılı! Hoş geldin, {NAME}.",
    alert_login_fail: "E-posta veya şifre hatalı.",
    alert_login_required: "Sohbete başlamak için giriş yapmalısın.", // YENİ
    alert_profile_updated: "Profil bilgileri güncellendi.",
    alert_history_cleared: "Sohbet geçmişi temizlendi.",
    alert_account_deleted: "Hesabınız başarıyla silindi.",
    alert_delete_fail: "E-posta veya şifre hatalı. Hesap silinemedi.",
    history_empty: "Kaydedilmiş sohbet geçmişi bulunamadı.",
    alert_confirm_new_chat:
      "Mevcut sohbeti silip yeni bir sohbete başlamak istediğinizden emin misiniz?",
  },
  en: {
    app_title: "Echoes of History",
    nav_home: "Home",
    nav_history: "Chat History",
    nav_settings: "Settings",
    nav_login: "Login",
    nav_register: "Sign Up",
    nav_edit_profile: "Edit Profile",
    nav_logout: "Logout",
    home_title: "Which historical figure do you want to talk to?",
    home_subtitle:
      "Artificial intelligence brings the greatest minds in history to life. Choose one and start talking.",
    home_search: "Search by name or keyword...",
    profile_bio: "Biography", // YENİ
    profile_knowledge: "Knowledge Limit",
    profile_style: "Speaking Style",
    profile_sources: "Sources",
    profile_start_chat: "Start Conversation",
    login_register_title: "Sign Up",
    login_name: "First Name",
    login_lastname: "Last Name",
    login_email: "Email",
    login_password: "Password",
    login_avatar_url: "Profile Picture URL (Optional)",
    login_login_title: "Login",
    chat_placeholder: "Type your message...",
    chat_welcome_message:
      "Hello! I am {NAME}. I've come from the depths of history to speak with you. What would you like to ask me?",
    chat_thinking: "is thinking...",
    chat_new_chat: "New Chat",
    chat_change_persona: "Change Persona",
    settings_title: "Settings",
    settings_profile_title: "Profile Information",
    settings_name: "First Name",
    settings_lastname: "Last Name",
    settings_avatar_url: "Profile Picture URL",
    settings_update_btn: "Update Information",
    settings_theme_title: "Appearance",
    settings_theme_light: "☀️ Light",
    settings_theme_dark: "🌙 Dark",
    settings_history_title: "Chat History",
    settings_history_desc: "Permanently delete all your chat history.",
    settings_history_btn: "Clear All History",
    settings_delete_title: "Delete Account",
    settings_delete_desc: "Permanently delete your account and all your data.",
    settings_delete_btn: "Delete Account",
    settings_delete_confirm_title:
      "Please confirm your email and password to delete your account.",
    settings_delete_confirm_btn: "Permanently Delete My Account",
    alert_confirm_logout: "Are you sure you want to log out?",
    alert_confirm_delete_history:
      "Are you sure you want to delete all chat history?",
    alert_confirm_delete_account:
      "ARE YOU SURE YOU WANT TO PERMANENTLY DELETE YOUR ACCOUNT? This action cannot be undone!",
    alert_invalid_email: "Invalid email format. (e.g., example@mail.com)",
    alert_email_exists: "This email address is already registered.",
    alert_register_success: "Registration Successful! Welcome, {NAME}.",
    alert_login_success: "Login Successful! Welcome, {NAME}.",
    alert_login_fail: "Email or password incorrect.",
    alert_login_required: "You must be logged in to start a chat.", // YENİ
    alert_profile_updated: "Profile information updated.",
    alert_history_cleared: "Chat history cleared.",
    alert_account_deleted: "Your account has been successfully deleted.",
    alert_delete_fail: "Email or password incorrect. Account not deleted.",
    history_empty: "No saved chat history found.",
    alert_confirm_new_chat:
      "Are you sure you want to delete the current chat and start a new one?",
  },
};
let currentLang = "tr";

// =======================================================
// --- OTURUM VE KULLANICI FONKSİYONLARI ---
// =======================================================
// (Bu fonksiyonlar router tarafından global scope'ta (window) çağrılmak için IIFE dışına çıkarıldı)

function kullaniciNavGuncelle() {
  const aktifKullaniciEposta = localStorage.getItem("aktifOturum");
  const kimlikButonlari = document.getElementById("kimlikButonlari");
  const profilAlani = document.getElementById("profilMenuAlani");
  const authNavItems = document.querySelectorAll(".nav-item-auth");

  if (aktifKullaniciEposta) {
    const kullanici = kullaniciVerisiAl(aktifKullaniciEposta);

    if (kimlikButonlari) kimlikButonlari.style.display = "none";
    if (profilAlani && kullanici) {
      profilAlani.style.display = "block";
      document.getElementById("menuAvatarImg").src = kullanici.avatar;
      document.getElementById(
        "dropdownKullaniciAdi"
      ).textContent = `${kullanici.isim} ${kullanici.soyisim}`;
      document.getElementById("dropdownKullaniciEposta").textContent =
        kullanici.eposta;
    }
    authNavItems.forEach((item) => (item.style.display = "list-item"));
  } else {
    if (kimlikButonlari) kimlikButonlari.style.display = "flex";
    if (profilAlani) profilAlani.style.display = "none";
    authNavItems.forEach((item) => (item.style.display = "none"));
  }
}

function cikisYap() {
  if (confirm(translations[currentLang].alert_confirm_logout)) {
    localStorage.removeItem("aktifOturum");
    kullaniciNavGuncelle();
    window.location.hash = "/"; // HASH YÖNLENDİRME
  }
}

function kullaniciVerisiAl(eposta) {
  const kullanicilar = JSON.parse(localStorage.getItem("kullanicilar")) || {};
  return kullanicilar[eposta];
}

function kullaniciVerisiKaydet(eposta, veri) {
  const kullanicilar = JSON.parse(localStorage.getItem("kullanicilar")) || {};
  kullanicilar[eposta] = veri;
  localStorage.setItem("kullanicilar", JSON.stringify(kullanicilar));
}

function varsayilanAvatarOlustur(isim, soyisim) {
  const basHarfler = `${isim.charAt(0)}${soyisim.charAt(0)}`.toUpperCase();
  return `https://avatar.iran.liara.run/username?username=${basHarfler}`;
}

// =======================================================
// --- GLOBAL BAŞLANGIÇ VE AYARLAR ---
// =======================================================

function initializeGlobalListeners() {
  const profilAvatarBtn = document.getElementById("profilAvatarBtn");
  const profilDropdown = document.getElementById("profilDropdown");

  profilAvatarBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    profilDropdown.classList.toggle("goster");
  });

  window.addEventListener("click", (e) => {
    if (
      profilDropdown &&
      !profilDropdown.contains(e.target) &&
      !profilAvatarBtn.contains(e.target)
    ) {
      profilDropdown.classList.remove("goster");
    }
  });

  document
    .getElementById("cikisYapButonu")
    ?.addEventListener("click", cikisYap);

  document
    .getElementById("darkBtn")
    ?.addEventListener("click", () => applyTheme("dark"));
  document
    .getElementById("lightBtn")
    ?.addEventListener("click", () => applyTheme("light"));
  document
    .getElementById("trBtn")
    ?.addEventListener("click", () => applyLanguage("tr"));
  document
    .getElementById("enBtn")
    ?.addEventListener("click", () => applyLanguage("en"));
}

function applyTheme(theme) {
  if (theme === "light") {
    document.body.classList.add("light-mode");
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
    document.body.classList.remove("light-mode");
  }
  localStorage.setItem("theme", theme);

  document
    .querySelectorAll("#darkBtn")
    .forEach((btn) => btn.classList.toggle("active", theme === "dark"));
  document
    .querySelectorAll("#lightBtn")
    .forEach((btn) => btn.classList.toggle("active", theme === "light"));
}

// 'window' önüne ekleyerek global yaptık, böylece router da erişebilir
window.applyLanguage = (lang) => { 
  currentLang = lang;
  localStorage.setItem("lang", lang);

  document
    .querySelectorAll("#trBtn")
    .forEach((btn) => btn.classList.toggle("active", lang === "tr"));
  document
    .querySelectorAll("#enBtn")
    .forEach((btn) => btn.classList.toggle("active", lang === "en"));

  // Sadece 'content' içini değil, 'body' içindeki her şeyi çevir
  document.body.querySelectorAll("[data-lang]").forEach((el) => {
    const key = el.dataset.lang;
    const translation = translations[lang][key];
    if (translation) {
      // {NAME} gibi değişkenleri koru
      const oldText = el.textContent;
      const newText = translation.replace(/{NAME}/, oldText.match(/{NAME}/) ? oldText.match(/{NAME}/)[1] : "");

      if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
        el.placeholder = newText;
      } else {
        el.textContent = newText;
      }
    }
  });
}

function loadAndApplySettings() {
  applyTheme(localStorage.getItem("theme") || "dark");
}

// =======================================================
// --- SAYFA BAŞLATMA FONKSİYONLARI (init) ---
// =======================================================

// 'window' önüne ekleyerek global yaptık
window.initHomePage = () => { 
  const grid = document.getElementById("character-grid");
  if (!grid) return;
  grid.innerHTML = "";
  for (const key in characterData) {
    const char = characterData[key];
    const card = document.createElement("div");
    card.className = "character-card";
    card.dataset.id = char.id;
    card.innerHTML = `
        <img src="${char.image}" alt="${char.name}" />
        <h4>${char.name}</h4>
        <p>${char.subtitle}</p>
      `;
    
    // GİRİŞ KONTROLÜ (İsteğin)
    card.addEventListener("click", () => {
      if (!localStorage.getItem("aktifOturum")) {
        alert(translations[currentLang].alert_login_required); // Uyarı ver
        window.location.hash = "/login"; // HASH YÖNLENDİRME
      } else {
        showPersonaModal(char.id);
      }
    });
    grid.appendChild(card);
  }
}

function showPersonaModal(personId) {
  const char = characterData[personId];
  if (!char) return;

  const modal = document.getElementById("personaModal");

  document.getElementById("modal-img").src = char.image;
  document.getElementById("modal-name").textContent = char.name;
  document.getElementById("modal-meta").textContent = char.meta;
  document.getElementById("modal-knowledge").textContent = char.knowledgeLimit;
  document.getElementById("modal-style").textContent = char.speakingStyle;

  // --- YENİ TARİHÇE ÖZELLİĞİ ---
  const bioKey = currentLang === 'en' ? 'bio_en' : 'bio';
  document.getElementById("modal-bio").textContent = char[bioKey];
  // --- ÖZELLİK SONU ---

  // --- YENİ LİNK ÖZELLİĞİ ---
  const sourcesEl = document.getElementById("modal-sources");
  sourcesEl.innerHTML = ""; 
  for (const key in char.sources) {
    sourcesEl.innerHTML += `<a href="${char.sources[key]}" target="_blank">${key}</a> `;
  }
  // --- ÖZELLİK SONU ---

  const startChatBtn = document.getElementById("modal-start-chat-btn");
  startChatBtn.href = `#/chat/${char.id}`; // HASH YÖNLENDİRME

  startChatBtn.onclick = () => {
    modal.style.display = "none";
  };
  
  applyLanguage(currentLang);
  modal.style.display = "flex";

  document.getElementById("modalCloseBtn").onclick = () => {
    modal.style.display = "none";
  };
  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };
}

// 'window' önüne ekleyerek global yaptık
window.initLoginPage = () => { 
  const kayitFormu = document.getElementById("kayitFormu");
  const girisFormu = document.getElementById("girisFormu");

  if (kayitFormu) {
    kayitFormu.onsubmit = (e) => {
      e.preventDefault();
      const isim = document.getElementById("kayitIsim").value;
      const soyisim = document.getElementById("kayitSoyisim").value;
      const eposta = document.getElementById("kayitEposta").value;
      const sifre = document.getElementById("kayitSifre").value;
      let avatar = document.getElementById("kayitAvatar").value;

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(eposta)) {
        alert(translations[currentLang].alert_invalid_email);
        return;
      }

      if (!avatar) {
        avatar = varsayilanAvatarOlustur(isim, soyisim);
      }

      const kullaniciVerisi = { isim, soyisim, eposta, sifre, avatar };

      if (kullaniciVerisiAl(eposta)) {
        alert(translations[currentLang].alert_email_exists);
        return;
      }

      kullaniciVerisiKaydet(eposta, kullaniciVerisi);
      localStorage.setItem("aktifOturum", eposta);

      alert(
        translations[currentLang].alert_register_success.replace("{NAME}", isim)
      );

      kullaniciNavGuncelle();
      window.location.hash = "/"; // HASH YÖNLENDİRME
    };
  }

  if (girisFormu) {
    girisFormu.onsubmit = (e) => {
      e.preventDefault();
      const eposta = document.getElementById("girisEposta").value;
      const sifre = document.getElementById("girisSifre").value;

      const kullanici = kullaniciVerisiAl(eposta);

      if (kullanici && kullanici.sifre === sifre) {
        localStorage.setItem("aktifOturum", eposta);
        alert(
          translations[currentLang].alert_login_success.replace(
            "{NAME}",
            kullanici.isim
          )
        );

        kullaniciNavGuncelle();
        window.location.hash = "/"; // HASH YÖNLENDİRME
      } else {
        alert(translations[currentLang].alert_login_fail);
      }
    };
  }
}

// 'window' önüne ekleyerek global yaptık
window.initSettingsPage = () => { 
  const aktifKullaniciEposta = localStorage.getItem("aktifOturum");
  if (!aktifKullaniciEposta) {
    window.location.hash = "/login"; // HASH YÖNLENDİRME
    return;
  }

  loadAndApplySettings();

  document.getElementById("theme-group")?.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const theme = e.target.dataset.value;
      applyTheme(theme);
    }
  });

  document
    .getElementById("clear-history-btn")
    ?.addEventListener("click", () => {
      if (confirm(translations[currentLang].alert_confirm_delete_history)) {
        Object.keys(localStorage).forEach((key) => {
          // SADECE BU KULLANICININ GEÇMİŞİNİ SİL
          if (key.startsWith(`chat_${aktifKullaniciEposta}_`)) {
            localStorage.removeItem(key);
          }
        });
        alert(translations[currentLang].alert_history_cleared);
      }
    });

  const profilFormu = document.getElementById("profilDuzenleFormu");

  if (profilFormu && aktifKullaniciEposta) {
    const kullanici = kullaniciVerisiAl(aktifKullaniciEposta);
    document.getElementById("profilIsim").value = kullanici.isim;
    document.getElementById("profilSoyisim").value = kullanici.soyisim;
    document.getElementById("profilEposta").value = kullanici.eposta;
    document.getElementById("profilAvatarUrl").value = kullanici.avatar;

    profilFormu.onsubmit = (e) => {
      e.preventDefault();
      // ... (profil güncelleme mantığı)
    };
  }

  const hesapSilBtn = document.getElementById("hesapSilmeyiAcBtn");
  const hesapSilFormu = document.getElementById("hesapSilFormu");

  if (hesapSilBtn && aktifKullaniciEposta) {
    hesapSilBtn.addEventListener("click", () => {
      hesapSilFormu.style.display =
        hesapSilFormu.style.display === "none" ? "block" : "none";
    });

    hesapSilFormu.addEventListener("submit", (e) => {
      e.preventDefault();
      // ... (hesap silme mantığı)
    });
  }
}

// 'window' önüne ekleyerek global yaptık
window.initHistoryPage = () => { 
  const aktifKullaniciEposta = localStorage.getItem("aktifOturum");
  if (!aktifKullaniciEposta) {
    window.location.hash = "/login"; // HASH YÖNLENDİRME
    return;
  }

  const historyList = document.getElementById("history-list");
  if (!historyList) return;

  historyList.innerHTML = "";
  let hasHistory = false;
  
  // YENİ: SADECE BU KULLANICININ GEÇMİŞİNİ GÖSTER
  Object.keys(localStorage).forEach((key) => {
    // chat_kullanici@mail.com_ataturk
    if (key.startsWith(`chat_${aktifKullaniciEposta}_`)) {
      const personId = key.replace(`chat_${aktifKullaniciEposta}_`, "");
      const char = characterData[personId];
      if (!char) return;

      const history = JSON.parse(localStorage.getItem(key));
      if (history.length <= 1) return; 

      hasHistory = true;
      const lastMessage = history[history.length - 1];
      const lastMessageDate = new Date().toLocaleDateString(currentLang);

      const itemHTML = `
        <a href="#/chat/${personId}" class="history-item">
          <img src="${char.avatar}" alt="${char.name}" />
          <div class="history-item-info">
            <div class="history-item-info-header">
              <h4>${char.name}</h4>
              <span>${lastMessageDate}</span>
            </div>
            <p>${lastMessage.text}</p>
          </div>
        </a>
      `;
      historyList.innerHTML += itemHTML;
    }
  });
  
  if (!hasHistory) {
    historyList.innerHTML = `<p style='text-align: center; color: var(--color-text-secondary);' data-lang="history_empty">Kaydedilmiş sohbet geçmişi bulunamadı.</p>`;
    applyLanguage(currentLang); 
  }
}

// =======================================================
// --- SOHBET FONKSİYONLARI ---
// =======================================================

let currentChatHistory = [];
let currentPersonId = null;

// 'window' önüne ekleyerek global yaptık
window.initChatPage = async (params) => { 
  // GİRİŞ KONTROLÜ (İsteğin)
  if (!localStorage.getItem("aktifOturum")) {
    alert(translations[currentLang].alert_login_required);
    window.location.hash = "/login"; // HASH YÖNLENDİRME
    return;
  }

  const personId = params[0]; // 'curie'
  const char = characterData[personId];
  if (!char) {
    window.location.hash = "/"; // HASH YÖNLENDİRME
    return;
  }

  const chatMainElement = document.querySelector(".chat-main");
  if (chatMainElement) {
    chatMainElement.style.backgroundImage = `url(${char.image})`;
  }

  currentPersonId = personId;
  currentChatHistory = loadChatHistory(personId); // (Artık kullanıcıya özel yüklüyor)

  document.getElementById("persona-panel-img").src = char.avatar;
  document.getElementById("persona-panel-name").textContent = char.name;
  document.getElementById("persona-panel-meta").textContent = char.meta;
  document.getElementById("persona-panel-cutoff").textContent =
    char.knowledgeLimit;

  document.getElementById("chat-header-img").src = char.avatar;
  document.getElementById("chat-header-name").textContent = char.name;
  document.getElementById("chat-header-meta").textContent = char.meta;

  const messagesContainer = document.getElementById("chat-messages");
  messagesContainer.innerHTML = "";
  currentChatHistory.forEach((msg) => {
    addMessageToDOM(msg.sender, msg.text, msg.avatar);
  });

  if (currentChatHistory.length === 0) {
    const welcomeText = translations[currentLang].chat_welcome_message.replace(
      "{NAME}",
      char.name
    );
    const welcomeMessage = {
      sender: "ai",
      text: welcomeText,
      avatar: char.avatar,
    };
    addMessageToDOM(
      welcomeMessage.sender,
      welcomeMessage.text,
      welcomeMessage.avatar
    );
    currentChatHistory.push(welcomeMessage);
    saveChatHistory(personId, currentChatHistory); // (Artık kullanıcıya özel kaydediyor)
  }

  scrollToBottom(); 

  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");

  chatForm.onsubmit = async (e) => {
    e.preventDefault();
    const userInput = chatInput.value.trim();
    if (userInput === "") return;

    const userAvatar =
      kullaniciVerisiAl(localStorage.getItem("aktifOturum"))?.avatar ||
      "images/user-avatar.png"; 
    const userMessage = { sender: "user", text: userInput, avatar: userAvatar };

    addMessageToDOM(userMessage.sender, userMessage.text, userMessage.avatar);
    currentChatHistory.push(userMessage);
    saveChatHistory(personId, currentChatHistory); 
    chatInput.value = "";
    scrollToBottom();

    await getAIResponse(personId, userInput);
  };

  const cleanupChatBackground = () => {
     const chatMainElement = document.querySelector(".chat-main");
     if (chatMainElement) {
        chatMainElement.style.backgroundImage = 'none';
     }
  };

  document.getElementById("new-chat-btn").onclick = () => {
    if (confirm(translations[currentLang].alert_confirm_new_chat)) {
      currentChatHistory = [];
      saveChatHistory(personId, []);
      initChatPage(params); 
    }
  };
  document.getElementById("change-persona-btn").onclick = () => {
    cleanupChatBackground(); 
    window.location.hash = "/"; 
  };
  document.getElementById("settings-btn").onclick = () => {
    cleanupChatBackground(); 
    window.location.hash = "/settings"; 
  };
}

function addMessageToDOM(sender, text, avatarSrc) {
  const messagesContainer = document.getElementById("chat-messages");
  if (!messagesContainer) return;
  
  const messageHTML = `
    <div class="message ${sender}"> 
      <img src="${avatarSrc}" alt="${sender}" class="avatar" />
      <div class="text-bubble">${text}</div>
    </div>
  `;
  messagesContainer.innerHTML += messageHTML;
}

function scrollToBottom() {
  const chatMessagesContainer = document.getElementById("chat-messages");
  if (chatMessagesContainer) {
    chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
  }
}

function showThinkingIndicator(isThinking, personName) {
  const indicator = document.getElementById("typing-indicator");
  if (indicator) {
    if (isThinking) {
      indicator.textContent = `${personName || "Karakter"} ${
        translations[currentLang].chat_thinking
      }`;
      indicator.classList.add("visible");
    } else {
      indicator.classList.remove("visible");
    }
  }
}

// --- YENİ: KULLANICIYA ÖZEL KAYIT ---
function saveChatHistory(personId, messages) {
  const aktifKullaniciEposta = localStorage.getItem("aktifOturum");
  if (!aktifKullaniciEposta) return; // Giriş yapılmadıysa kaydetme
  
  const key = `chat_${aktifKullaniciEposta}_${personId}`;
  localStorage.setItem(key, JSON.stringify(messages));
}

// --- YENİ: KULLANICIYA ÖZEL YÜKLEME ---
function loadChatHistory(personId) {
  const aktifKullaniciEposta = localStorage.getItem("aktifOturum");
  if (!aktifKullaniciEposta) return []; // Giriş yapılmadıysa boş
  
  const key = `chat_${aktifKullaniciEposta}_${personId}`;
  const savedHistory = localStorage.getItem(key);
  return savedHistory ? JSON.parse(savedHistory) : [];
}


// -----------------------------------------------------------------
// --- YENİ YAPI: GERÇEK API ÇAĞRISI (GEMINI 2.5 FLASH) ---
// -----------------------------------------------------------------



/**
 * YAPAY ZEKA CEVABINI ALIR (GERÇEK API)
 */
async function getAIResponse(personId, userInput) {
  const character = characterData[personId];
  showThinkingIndicator(true, character.name); 

  // --- DÜZELTME: Hatalı API Key kontrolü SİLİNDİ ---
  // Artık tek yapman gereken yukarıdaki API_KEY'i doldurmak.
  
  // 1. API için sohbet geçmişini formatla
  const apiHistory = currentChatHistory
    .filter(msg => msg.sender === 'user' || msg.sender === 'ai') 
    .map(msg => {
      return {
        role: msg.sender === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
      };
    });

  // 2. API'ye gönderilecek tam içeriği hazırla
  const requestBody = {
    contents: [
      ...apiHistory, 
      { 
        role: 'user',
        parts: [{ text: userInput }]
      }
    ],
    // 3. Karakterin "Prompt"unu (Kişiliğini) ayarla
    systemInstruction: {
      parts: [
        { text: character.basePrompt } 
      ]
    },
    generationConfig: {
      temperature: 0.9,
      topK: 1,
      topP: 1,
      maxOutputTokens: 2048,
    },
    safetySettings: [ 
      { category: 'HARM_CATEGORY_HARASSMENT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_HATE_SPEECH', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT', threshold: 'BLOCK_NONE' },
      { category: 'HARM_CATEGORY_DANGEROUS_CONTENT', threshold: 'BLOCK_NONE' },
    ],
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorBody = await response.json();
      console.error("API Hatası:", errorBody);
      const errorMessage = errorBody?.error?.message || response.statusText;
      throw new Error(`API Hatası: ${errorMessage}`);
    }

    const data = await response.json();
    
    if (!data.candidates || !data.candidates[0].content) {
        if(data.promptFeedback && data.promptFeedback.blockReason) {
            console.error("API Cevabı Engellendi:", data.promptFeedback.blockReason);
            throw new Error(`API Cevabı Engellendi: ${data.promptFeedback.blockReason}`);
        }
        console.error("API Cevabı Geçersiz:", data);
        throw new Error("API'den geçerli bir cevap alınamadı.");
    }
    
    const aiText = data.candidates[0].content.parts[0].text;

    const aiMessage = {
      sender: "ai",
      text: aiText,
      avatar: character.avatar,
    };
    
    addMessageToDOM(aiMessage.sender, aiMessage.text, aiMessage.avatar);
    currentChatHistory.push(aiMessage); 
    saveChatHistory(personId, currentChatHistory); 

  } catch (error) {
    console.error("Yapay zeka cevabı alınırken hata oluştu:", error);
    addMessageToDOM("ai", `Üzgünüm, bir hata oluştu: ${error.message}`, character.avatar);
  } finally {
    showThinkingIndicator(false); 
    scrollToBottom(); 
  }
}
// --- API ÇAĞRISI SONU ---