// ====== DONNÉES : modifiez ici (noms, bio, projets...) ======
const BU={name:"BU5",slogan:["Nos idées ont un avenir. Nous le concevons.","Une équipe. Sept talents. Zéro limite.","Innovation · Rigueur · Impact."]};
const PJ=[["BU5 Digital Identity","Un site officiel : présentation de la BU, des membres, du BUM, des compétences et des projets.",["HTML","CSS","JavaScript"]],["Fablab in Motion","Une vidéo promotionnelle destinée à faire connaître le Fablab et à valoriser ses services.",["CapCut","Adobe Premier Pro "]],["UniConnect","Application pour connecter les étudiants et partager des événements.",["Flutter","Dart","Firebase"]],["TerraBot","Conception d'un robot adapté aux terrains difficiles.",["SolidWorks","ESP32","C++"]],["ServiceHub","Plateforme de demandes de services et de suivi des prestations.",["HTML","CSS","JS","PHP","MySQL"]],["Fablab Digital","Plateforme de présentation des équipements et services du Fablab.",["HTML","CSS","JS"]]];
const dp=[["2022","Admis à l'ENISO","Début du cycle ingénieur à l'École Nationale d'Ingénieurs de Sousse."],["2024","Rejoint la JEENISO","Participation aux projets et formations de la junior entreprise."],["2026","Membre de la BU","Contribution aux missions clients de la business unit."]];
const dpr=[["Projet Web","Application web responsive avec interface moderne et API.",["HTML","CSS","JS"]],["Projet Académique","Conception et réalisation d'un système d'information complet.",["UML","SQL","Java"]],["Mission JEE","Livraison d'une solution pour un client réel.",["Gestion","Agile"]]];
const df=[["Cycle ingénieur — ENISO","2022 – présent"],["Formation interne JEE","Soft skills & gestion de projet"],["Certification en ligne","À compléter"]];
const M=[
{n:"Roua Harrath ",r:"Business Unit Manager",b:"Pilote la BU, coordonne l'équipe et garantit la qualité de chaque livrable.",s:[["Web Development",70],["Programming",65],["Leadership",90],["Team Management",90],["Communication",85],["Problem-Solving",85],["Strategic Thinking",80]],photo:"photoRoua.jpg"},
{n:"Jawaher Gaaloul ",r:"Web Development Lead",b:"Passionnée par le développement web, je transforme des idées créatives en expériences numériques modernes, interactives et intuitives.",s:[["HTML/CSS",80],["JavaScript",60],["Python",40],["C/C++",55],["Arduino",80],["ESP32",60],["SQL/SQLite",40],["SolidWorks",40],["Travail en équipe",80],["Créativité",80],["Communication",70]],photo:"photoJaweher.jpg"},
{n:"Moulay Ali El Alaoui",r:"Mobile Development Lead",b:"Passionné par le développement mobile, il conçoit des applications intuitives et performantes pour offrir une expérience utilisateur fluide et innovante.",s:[["Node.js",88],["SQL",90],["Java",85],["API REST",92]],photo:"photoAli.jpeg"},
{n:"Amal EllEuch",r:"Designer UI/UX",b:"Passionné par le design et l’expérience utilisateur, il transforme les idées en interfaces modernes, intuitives et esthétiques, alliant créativité et fonctionnalité.",s:[["Figma",95],["Design system",85],["Prototypage",90],["Branding",80]],photo:"photoAmal.jpg"},
{n:"Baha Eddine Boulaares",r:"Technical & Innovation Lead",b:"Passionné par la technologie et l’innovation, il transforme les idées en solutions créatives et concrètes grâce à son expertise technique et son esprit d’ingénieur.",s:[["Python",92],["Machine Learning",85],["Pandas",88],["Power BI",80]],photo: "photoBaha.jpg"},
{n:"Ayoub Mahjoub",r:"DevOps & Cloud",b:"Passionné par le Cloud et l’automatisation, il optimise le déploiement des applications et garantit des infrastructures fiables, évolutives et performantes.",s:[["Docker",88],["Linux",90],["CI/CD",85],["Cloud",78]],photo:"photoAyoub.jpg"},
{n:"Ghofrane Soltani",r:"Business Development Lead",b:"Passionné par la stratégie et le développement, il identifie les opportunités, crée des partenariats et transforme les idées en projets à fort potentiel.",s:[["Réseaux sociaux",92],["Rédaction",88],["Canva",90],["SEO",80]],photo:"ghofrane.jpeg"},
{n:"Salma Khochtali",r:"Marketing & Communication Lead",b:"Creative mind behind our brand image, communication, and marketing strategies.",s:[["Flutter",90],["Android",85],["Firebase",84],["UX mobile",82]],photo:"photoSalma.jpeg"}];
const EMAILS = {
    "Roua Harrath": "rouaharrath123@gmail.com",
    "Jawaher Gaaloul": "gaalouljaweher18@gmail.com",
    "Moulay Ali El Alaoui": "ali.alaouiii123@gmail.com",
    "Amal EllEuch": "amalelleuch0@gmail.com",
    "Baha Eddine Boulaares": "bahadinneboularess@gmail.com",
    "Ayoub Mahjoub": "ayoubmhjb09@gmail.com",
    "Ghofrane Soltani": "sghofrane366@gmail.com",
    "Salma Khochtali": "khochsalma@gmail.com"
};
M.forEach((m,i)=>{
    m.id=i;
    m.ini=m.n.split(" ").map(w=>w[0]).slice(0,2).join("");
    m.p=dp;
    m.pr=dpr;
    m.f=df;
    m.mail = EMAILS[m.n.trim()] || "";
    });
    // Étudiant 1 (roua): M[0]
M[0].p = [
  ["2023", "Baccalauréat", "Baccalauréat en Mathématiques."],
  ["2024", "Entrée à l'IPEIS", "Début du cycle préparatoire."],
  ["2025", "Entrée à l'ENISO", "Début du cycle ingénieur."]
];

M[0].pr = [
  ["Bras robotique", "Conception et réalisation d’un bras robotique intégrant des composants électroniques et des systèmes de commande.", ["Embedded C", "STM32", "SolidWorks","Electronique embarquée"]],
  ["Système de pointage par RFID", "Développement d’un système de pointage permettant d’enregistrer les présences à l’aide de cartes RFID.", ["Embedded C", "RFID","STM32","STM32CubeIDE"]],
  ["Système de pointage par reconnaissance faciale","Réalisation d’un système de gestion des présences basé sur l’identification faciale.",["Python","OpenCV","Reconnaissance faciale","Computer Vision"]]
];

M[0].f = [
  ["Cycle préparatoire - IPEIS","2023 - 2025"] , 
  ["Cycle ingénieur — ENISO", "2025 – présent"]
];
// ===== ÉTUDIANT 2 Jaweher : M[1] =====

M[1].p = [
  ["Avant le Baccalauréat","Lycée — Parcours scientifique","Développement de mes bases scientifiques et de mon esprit logique, avec une spécialisation en Sciences Techniques."],  
  ["2024", "Baccalauréat", "Baccalauréat en Sciences Techniques.","Obtention du baccalauréat en Sciences Techniques avec mention Bien en 2024."],
  ["2024 — 2026", "Cycle préparatoire - IPEIN", "Développement des bases scientifiques, mathématiques et techniques nécessaires aux études d'ingénierie."],
  ["2026 — Aujourd'hui", "Cycle ingénieur — ENISO", "Première année en informatique appliquée, avec un intérêt pour le développement logiciel, les systèmes intelligents et l'innovation."]
];

M[1].pr = [
  ["Aurora — Robot tout-terrain", "Participation à un projet de robotique mobile dans le cadre d’ENISO Team, alliant programmation et systèmes embarqués.", ["ESP32", "C++"]],
  ["BU5 — Site web interactif", "Conception d’un site web pour présenter les membres de BU5, leurs parcours, leurs compétences et leurs projets.", ["HTML", "CSS","JavaScript"]],
  ["Interface intelligente de commande robotique","Développement d’une interface permettant de commander un robot à partir d’instructions en langage naturel grâce à un LLM.",["Python","LLM","Arduino","API"]],
  ["Smart Irrigation System","Réalisation d’un système capable de détecter la sécheresse du sol et de déclencher l’arrosage d’une plante.",["Arduino","Capteur d'humidité","Moteur/Pompe"]],
  ["ProTask — Application de gestion de tâches","Application visant à organiser les tâches, suivre leur avancement et faciliter la gestion des projets.",["HTML","CSS","JS","MySQL","SQLite"]],
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"]]
];

M[1].f = [
  ["Cycle ingénieur en informatique appliquée — ENISO", "2026 – présent"],
  ["Cycle préparatoire aux études d’ingénieur - IPEIN", "2024 – 2026"],
  ["Anglais — Niveau B2","Maîtrise de l’anglais de niveau B2, permettant de communiquer et de comprendre des contenus techniques."],
  ["Développement web","HTML / CSS / JS / React"],
  ["BMC — Business Model Canvas" ,"Apprentissage des fondamentaux du Business Model Canvas pour structurer et analyser un modèle économique."],
  ["Arduino & ESP32","Découverte de la programmation de microcontrôleurs et de l’interaction avec des composants électroniques."]
];
// ===== ÉTUDIANT 3 Moulay Ali El Alaoui : M[2] =====

M[2].p = [
  ["2023", "Baccalauréat", "Baccalauréat en sciences techniques."],
  ["2026", "Entrée à l'ENISO", "Début du parcours ingénieur.","Cycle ingénieur en GMP : Génie mécanique productique."],
];

M[2].pr = [
  ["Robot intelligent", "Conception d'un prototype robotique.", ["Arduino", "C++"]],
  ["Site vitrine", "Développement d'un site responsive.", ["HTML", "CSS"]],
  ["Systéme d'éclairage automobile intelligent","Développement d’un système d’éclairage qui s’adapte automatiquement aux conditions environnementales pour améliorer la sécurité routière.",["C/C++","Arduino"]],
  ["E-kart","Conception et développement d’un kart électrique basé sur la propulsion électrique et le contrôle du moteur.",["Arduino/ESP32"]],
  ["Quarter-car ride model","Modélisation et simulation du système de suspension d’un quart de véhicule afin d’étudier les vibrations, la tenue de route et le confort des passagers.",["MATLAB","Simulink"]],
  ["BU 5 — Site web interactif", "Conception d’un site web pour présenter les membres de BU5, leurs parcours, leurs compétences et leurs projets.", ["HTML", "CSS","JavaScript"]],
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"]],
];

M[2].f = [
  ["Cycle ingénieur — ENISO", "2026 – présent"],
  ["Matlab","Découverte de la programmation, au calcul numérique et à la simulation de systèmes."],
  ["SolidWorks","Apprentissage de l’utilisation de SolidWorks pour la conception 3D, la modélisation de pièces et l’assemblage mécanique"],
  ["Machine Learning et Deep Learning","Découverte des algorithmes d’apprentissage automatique, aux réseaux de neurones et à l’analyse des données"],
  ["vibe coding"," Découverte dudéveloppement assisté par l’intelligence artificielle pour concevoir, générer et améliorer du code"],
  ["Initiation en systémes embarqées ","Découverte des microcontrôleurs, des capteurs, des actionneurs et de la programmation des systèmes embarqu"]
];
// ===== ÉTUDIANT 4 Amal Elleuch : M[3] =====
M[3].p = [
  ["2024", "Baccalauréat", "Baccalauréat en mathématiques."],
  ["2024->2026","Cycle préparatoire  -FSS"],
  ["2026-Aujourd'hui", "Entrée à l'ENISO", "Cycle ingénieur en élèctronique industrielle avec un intérêt pour les systémes emnarquées et les cartes élèctroniques."]

];

M[3].pr = [
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"]],
  ["BU 5 — Site web interactif", "Conception d’un site web pour présenter les membres de BU5, leurs parcours, leurs compétences et leurs projets.", ["HTML", "CSS","JavaScript"]],
  ["Bus intelligent", "Conception d’un système de transport intelligent visant à améliorer la gestion des trajets, le suivi du bus et l’information des passagers", ["Arduino", "IOT","GPS"]],
  ["Robot tout terrain","Participation à la conception et au développement d’un robot capable de se déplacer sur différents types de terrains.",["Arduino"]],
  ["Parking intelligent", "Développement d’un système de stationnement intelligent permettant de détecter les places disponibles et de faciliter la gestion du parking.", ["Arduino/ESP32", "C/C++"]],
  ["Moteurmind AI","Une solution intelligente qui exploite l’IA pour surveiller les moteurs, détecter les anomalies et anticiper les pannes.",["Python","Gemini AI","Flask","JS","UiPath"]]
];
M[3].f = [
  ["Cycle ingénieur — ENISO", "2026 – présent"],
  ["2024->2026","Cycle préparatoire-FSS"],
  ["Développement Web","HTML/CSS/JS"],
  ["Programation C", "2026"],
  ["Arduino, ESP32 et montage de robots.","Acquisition de connaissances en programmation de microcontrôleurs et en systémes embarqués."]

];
// ===== ÉTUDIANT 5 Baha  : M[4] =====
M[4].p = [
  ["2024", "Baccalauréat", "Baccalauréat en sciences Techniques."],
  ["2024->2026","Cycle préparatoire-IPEIM","diplôme obtenu"],
  ["2026-Aujourd'hui", "Entrée à l'ENISO", "Cycle ingénieur en informatique appliquée ."]

];

M[4].pr = [
  ["robot tout terrain (ATLAS) ","Participation à la conception et au développement d’un robot capable de se déplacer sur différents types de terrains et Participation à la compétition interne Robocop ENISO, où l’équipe a atteint la demi-finale.",["Arduino"]],  ["Moteurmind ai","Une solution intelligente qui exploite l’IA pour surveiller les moteurs, détecter les anomalies et anticiper les pannes.",["Python","Gemini AI","Flask","JS","UiPath"]],
  ["Water rocket","Conception et réalisation d’une fusée à eau pour explorer les principes de propulsion et d’aérodynamique.",["SolidWorks"]],
  ["Planneur"," Conception d’un planeur pour étudier les principes du vol, de la portance et de la stabilité aérienne.",["SolidWorks"]],
  ["Suiveur de ligne","Réalisation d’un robot autonome capable de suivre une trajectoire à l’aide de capteurs.",["SolidWorks","C/C++"]],
  ["BU 5 — Site web interactif", "Conception d’un site web pour présenter les membres de BU5, leurs parcours, leurs compétences et leurs projets.", ["HTML", "CSS","JavaScript"]],
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"]]
];

M[4].f = [
  ["Cycle ingénieur — ENISO", "2026 – présent"],
  ["2024->2026","Cycle préparatoireIPEIM"],
  ["Développement Web","HTML/CSS/JS/React/Git/Github"],
  ["Formations en aérodynamique et SolidWorks", "Calculs, fabrication et assemblage d’un planeur présenté à une compétition interne."],
  ["Arduino, ESP32 et montage de robots."],
  ["Formations en découpe laser, CNC numérique et impression 3D."],
  ["Ateliers de prise de parole en public et de Business Model Canvas "],
  ["conception graphique, montage vidéo et création d’un site web"],
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"] ]
  
 
];
// ==== ÉTUDIANT 6 Ayoub Mahjoub  : M[5] ====
M[5].p = [
  ["2024", "Baccalauréat", "Baccalauréat en mathématiques."],
  ["2024->2026","Cycle préparatoire-IPEIM"],
  ["2026-Aujourd'hui", "Entrée à l'ENISO", "Cycle ingénieur en élèctronique industrielle "]

];

M[5].pr = [
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"]],
  ["BU 5 — Site web interactif", "Conception d’un site web pour présenter les membres de BU5, leurs parcours, leurs compétences et leurs projets.", ["HTML", "CSS","JavaScript"]],
  ["ThermoPower — Production d’énergie par effet Seebeck", "Étude et réalisation d’un système de production d’énergie électrique à partir d’un écart de température entre deux jonctions, basé sur l’effet Seebeck."],
  ["Gestion de stock pour une pharmacie à l'aide des agents AI","Développement d’un système intelligent de gestion des stocks pharmaceutiques utilisant des agents d’intelligence artificielle pour surveiller les médicaments, anticiper les ruptures de stock et optimiser les commandes.", ["agents ai", "SQL"]],
  ["Cloud Garden—Sécurité et gestion des accès","Développement d’une plateforme de surveillance et de sécurisation des applications d’un club, permettant de gérer les permissions, protéger les secrets, vérifier la configuration HTTPS, surveiller les sauvegardes et détecter les vulnérabilités sur les systèmes autorisés.",["JavaScript","Python"]]
];

M[5].f = [
  ["Cycle ingénieur — ENISO", "2026 – présent"],
  ["2024->2026","Cycle préparatoire  -FSS"],
  ["Développement Web","HTML/CSS/JS"],
  ["Programation C", "2026"],
  ["Arduino & ESP32 .","Acquisition de connaissances en programmation de microcontrôleurs et en systémes embarqués."],
  ["AI agents" ]

];
// ==== ÉTUDIANT 7 Ghofrane Soltani : M[6] ====
M[6].p = [
  ["2023", "Baccalauréat", "Baccalauréat en Sciences Techniques."],
  ["2024->2026","Cycle préparatoire-IPEIM","PT"],
  ["2026-Aujourd'hui", "Entrée à l'ENISO", "Cycle ingénieur en Génie Mécatronique passionée par les systémes embarqués ,la Robotique et l'IA."]

];

M[6].pr = [
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"]],
  ["BU 5 — Site web interactif", "Conception d’un site web pour présenter les membres de BU5, leurs parcours, leurs compétences et leurs projets.", ["HTML", "CSS","JavaScript"]],
  ["Poubelle Intelligente Connectée et Valorisation du Biogaz", "Conception d’une poubelle connectée permettant de surveiller le niveau de remplissage et d’explorer la valorisation des déchets organiques en biogaz.", ["Arduino", "IOT"]],
  ["Systéme d'arrosage intelligent","Développement d’un système d’irrigation automatisé qui adapte l’arrosage à l’humidité du sol afin d’optimiser la consommation d’eau.",["Arduino/ESP32"] ],
  ["Conception d’un Village Intelligent (Smart Village)","conception d’un village intelligent intégrant des solutions technologiques pour optimiser la gestion des ressources, l’énergie et les services urbains.",["IoT", "Arduino/ESP32"]]
];

M[6].f = [
  ["Cycle ingénieur — ENISO", "2026 – présent"],
  ["2024->2026","Cycle préparatoire-IPEIM","PT"],
  ["Développement Web","HTML/CSS/JS"],
  ["Formation en Communicaton et social speech skills","2026"],
  ["SolidWorks & python & language C & SQL"]

];


// ==== ÉTUDIANT 8 salma : M[7] ====
M[7].p = [ 
  ["2024", "Baccalauréat", "Baccalauréat en Mathématiques.","Obtention du bacalauréat en Mathématiques avec mention bien et la  moyenne=14.82 en 2024"],
  ["2024-2026", "Entrée à l'ESSTHS (École supérieure des Sciences et de la Technologie de Hammam Sousse ", "Début du cycle préparatoire en math-physique","Développement de l'esprit analytique et des méthodes de réesolution de problémes complexes."],
  ["2026","Councours nationale d'entrée aux écoles d'ingénieurs tunisie.","Admise au concours avec un rang de 428"],
  ["2026-Aujourd'hui", "Cycle d'ingénieur-ENISO", "Première année en informatique appliquée passionée par les nouvelles technologies et particulièrement intéressée par la cybersécurité."]
];

M[7].pr = [
  [" Password Strength Checker","Une application qui évalue la robustesse d'un mot de passe selon sa longueur, sa diversité de caractères et d'autres critères .",["JavaScript","Cybersécurité"]],
  ["BU 5 — Site web interactif", "Conception d’un site web pour présenter les membres de BU5, leurs parcours, leurs compétences et leurs projets.", ["HTML", "CSS","JavaScript"]],
  ["Fablab Promotion Video","Création d’une vidéo promotionnelle mettant en valeur les services et le potentiel du Fablab dans le cadre de JEENISO.",["Communication","Créativité","Travail en équipe"]],
  ["ProTask — Application de gestion de tâches","Application visant à organiser les tâches, suivre leur avancement et faciliter la gestion des projets.",["React","node.js","MYSQL"]],
  ["Application de gestion financière","Développement d’une application de suivi des dépenses, de gestion du budget et de visualisation des statistiques financières.",["Flutter","Dart","SQLite"]]

];

M[7].f = [ 
  ["Cycle ingénieur en informatique appliquée — ENISO", "2026 – présent"],
  ["Cycle préparatoire - ESSTHS","2024 - 2026"] , 
  ["Développement Web","HTML/CSS/JS/React/Git/GitHub"],
  ["Développement Mobile","Flutter"],
  ["Arduino & ESP32","Acquisition de connaissances en programmation de microcontrôleurs et en systémes embarqués."],
  ["Anglais-Niveau B2", ],
  ["Allemand et Espagnol-Niveau A2" ]
];

/* ===== BU5 PROJECT DATABASE ===== */

/* ===== IMAGES DES PROJETS ===== */
const PROJECT_IMAGES = {
    // collectifs
    "bu-0": "sitebu.png", "bu-1": "fab.png", "bu-2": "uniconnect.png",
    "bu-3": "terraBot.png", "bu-4": "servicehub.png", "bu-5": "fablab-digital.png",

    // Roua
    "m-0-0": "bras.png", "m-0-1": "pointage.png", "m-0-2": "facial.png",

    // Jaweher
    "m-1-0": "photoAurora.jpeg", "m-1-2": "llm.png", "m-1-3": "ts9i.png",

    // Moulay Ali
    "m-2-0": "robotint.png", "m-2-1": "vitrine.png",
    "m-2-2": "eclairage.png", "m-2-3": "fast.png", "m-2-4": "Capture .png",

    // Amal
    "m-3-2": "bus.jpeg",
    "m-3-3": "robotamal.jpeg",
    "m-3-4": "parking.jpeg",
    "m-3-5": "moteurmindai.png",

    // Baha
    "m-4-1": "moteurmindai.png", "m-4-2": "waterrocket.jpeg",
    "m-4-3": "planneur.jpeg", "m-4-4": "suiveur.jpeg","m-4-0": "robotatlas.jpeg",

    // Ayoub
    "m-5-2": "thermo.jpeg", "m-5-3": "pharmacie.jpeg", "m-5-4": "cloudgarden.jpeg",

    // Ghofrane
    "m-6-2": "poubelle.jpg", "m-6-3": "ts9i.png", "m-6-4": "village.jpg",

    // Salma
    "m-7-0": "password.jpeg", "m-7-4": "app gestion.jpeg"
};
const SHARED_IMAGES = {
  "site web interactif": "sitebu.png",
  "fablab promotion video": "fab.png",
  "atlas": "atlas.png",
  "protask": "pro.png"
};
function sharedImage(title){
  const t = title.toLowerCase();
  const key = Object.keys(SHARED_IMAGES).find(k => t.includes(k));
  return key ? SHARED_IMAGES[key] : "";
}
/* ===== BU5 PROJECT DATABASE ===== */
const ALL_PROJECTS = [
    ...PJ.map((p, i) => ({
        id: `bu-${i}`,
        title: p[0],
        description: p[1],
        tech: p[2] || [],
        owner: null,
        role: "Projet collectif BU5",
        objective: "Transformer une idée en une solution concrète.",
        features: [
            "Analyse du besoin",
            "Conception de la solution",
            "Réalisation et amélioration"
        ],
        image: PROJECT_IMAGES[`bu-${i}`] || ""
    })),

    ...M.flatMap((member, memberIndex) =>
        member.pr.map((p, projectIndex) => {
            const projectId = `m-${memberIndex}-${projectIndex}`;
            return {
                id: projectId,
                title: p[0],
                description: p[1],
                tech: p[2] || [],
                owner: memberIndex,
                role: member.r,
                objective: `Contribution de ${member.n.trim()} à la réalisation du projet.`,
                features: [
                    "Étude et conception",
                    "Développement de la solution",
                    "Tests et validation"
                ],
                image: PROJECT_IMAGES[projectId] || sharedImage(p[0]) || ""
            };
        })
    )
];

/* ===== BU5 PROJECT DATABASE ===== */



/* ===== BU5 SIGNATURE — IDENTITÉ DE CHAQUE MEMBRE ===== */

const SIGNATURES = [
    {
        title: "The Vision Architect",
        motto: "Voir loin. Construire avec sens.",
        strength: "Leadership & vision stratégique",
        contribution: "Transformer les objectifs en missions claires et coordonner les talents.",
        goal: "Piloter des projets innovants et faire grandir une équipe.",
        symbol: "◈",
        color: "#64caff"
    },
    {
        title: "The Digital Creator",
        motto: "Une idée mérite une expérience.",
        strength: "Créativité & développement web",
        contribution: "Donner vie aux idées grâce à des interfaces modernes et interactives.",
        goal: "Créer des expériences numériques utiles, accessibles et intelligentes.",
        symbol: "</>",
        color: "#7c9cff"
    },
    {
        title: "The Logic Builder",
        motto: "Chaque problème a sa logique.",
        strength: "Architecture & résolution de problèmes",
        contribution: "Structurer les données et concevoir une logique fiable.",
        goal: "Développer des systèmes robustes et évolutifs.",
        symbol: "{ }",
        color: "#a78bfa"
    },
    {
        title: "The Experience Designer",
        motto: "Le détail change toute l'expérience.",
        strength: "Design & empathie utilisateur",
        contribution: "Transformer les besoins des utilisateurs en interfaces intuitives.",
        goal: "Concevoir des expériences digitales mémorables.",
        symbol: "✳",
        color: "#ff91c8"
    },
    {
        title: "The Intelligence Explorer",
        motto: "Les données racontent une histoire.",
        strength: "Analyse & intelligence artificielle",
        contribution: "Extraire des informations utiles pour éclairer les décisions.",
        goal: "Créer des solutions intelligentes fondées sur les données.",
        symbol: "∑",
        color: "#7ce7c4"
    },
    {
        title: "The System Optimizer",
        motto: "Automatiser. Déployer. Améliorer.",
        strength: "Automatisation & fiabilité",
        contribution: "Faciliter le déploiement et améliorer la stabilité des solutions.",
        goal: "Construire des infrastructures fiables et performantes.",
        symbol: "⌘",
        color: "#ffc66d"
    },
    {
        title: "The Digital Storyteller",
        motto: "Une bonne idée mérite d'être connue.",
        strength: "Communication & créativité",
        contribution: "Valoriser les projets et transmettre leur valeur au public.",
        goal: "Créer des stratégies de communication qui génèrent de l'impact.",
        symbol: "✦",
        color: "#ff9b79"
    },
    {
        title: "The Mobile Innovator",
        motto: "L'innovation tient dans la main.",
        strength: "Développement mobile & expérience utilisateur",
        contribution: "Transformer les besoins quotidiens en applications pratiques.",
        goal: "Concevoir des applications mobiles utiles et performantes.",
        symbol: "▣",
        color: "#8fb5ff"
    }
];

// ====== RENDU ======
const app=document.getElementById("app");let raf,ang=0,paused=false;

function home() {
    app.innerHTML = `
    <section class="hero" id="home">
        <div>
            <span class="tag">● JEENISO — Business Unit</span>
            <h1>${BU.name}</h1>
            <p class="sub">
                <span id="ty"></span><span class="cur">&nbsp;</span>
            </p>
        </div>
        <div class="orbit" id="orb">
            <div class="ring"></div>
            <div class="ring r2"></div>
        </div>
        <p class="hint">Cliquez sur un membre pour découvrir son portfolio ↗</p>
    </section>

    <section class="rv dna-section" id="dna">
        <span class="eyebrow">01 — WHO WE ARE</span>
        <h2>Notre ADN<span>.</span></h2>
        <p class="dna-description">
            Sept talents complémentaires, une vision commune.
            Nous transformons les idées en solutions digitales
            grâce à l'innovation, la créativité et la collaboration.
        </p>

        <div class="dna-grid">
            <article class="dna-card">
                <span class="dna-number">01 / INNOVATION</span>
                <h3>Think differently.</h3>
                <p>Imaginer des idées nouvelles et concevoir des solutions utiles.</p>
            </article>

            <article class="dna-card">
                <span class="dna-number">02 / COLLABORATION</span>
                <h3>Build together.</h3>
                <p>Réunir nos compétences pour atteindre des objectifs communs.</p>
            </article>

            <article class="dna-card">
                <span class="dna-number">03 / EXCELLENCE</span>
                <h3>Raise the standard.</h3>
                <p>Apprendre, tester et améliorer continuellement nos réalisations.</p>
            </article>

            <article class="dna-card">
                <span class="dna-number">04 / IMPACT</span>
                <h3>Create value.</h3>
                <p>Transformer les besoins en projets concrets et performants.</p>
            </article>
        </div>

        <div class="dna-manifesto">
            THINK BOLDLY. BUILD SMART. MOVE TOGETHER.
        </div>

        <div class="stats">
            <div class="card"><b data-n="7" data-s="">0</b>talents</div>
            <div class="card"><b data-n="6">0</b>projets réalisés</div>
            <div class="card"><b data-n="8">0</b>profils présentés</div>
            <div class="card"><b data-n="100" data-s="%">0</b>engagement</div>
        </div>
    </section>
    
    <div class="mq">
        <div>${"HTML ✦ CSS ✦ JavaScript ✦ React ✦ Node.js ✦ Python ✦ Flutter ✦ Docker ✦ Figma ✦ SQL ✦ IA ✦ ".repeat(4)}</div>
    </div>

    <section class="rv mission-lab" id="missions">
        <span class="eyebrow">02 — MISSION CONTROL</span>
        <h2>Mission Lab<span>.</span></h2>
        <p class="dna-description">
            Sélectionnez une mission pour découvrir les profils
            qui peuvent unir leurs compétences et la réaliser.
        </p>

        <div class="mission-grid">
            <article class="mission-card" data-mission="web" tabindex="0" role="button">
                <span class="mission-number">MISSION 01</span>
                <div class="mission-icon">⌘</div>
                <h3>Digital Experience</h3>
                <p>Développer des plateformes web modernes et interactives.</p>
                <span class="mission-action">Lancer la mission ↗</span>
            </article>

            <article class="mission-card" data-mission="ai" tabindex="0" role="button">
                <span class="mission-number">MISSION 02</span>
                <div class="mission-icon">◈</div>
                <h3>AI & Data</h3>
                <p>Explorer les données et construire des solutions intelligentes.</p>
                <span class="mission-action">Lancer la mission ↗</span>
            </article>

            <article class="mission-card" data-mission="design" tabindex="0" role="button">
                <span class="mission-number">MISSION 03</span>
                <div class="mission-icon">✳</div>
                <h3>Creative Identity</h3>
                <p>Créer une identité visuelle cohérente et mémorable.</p>
                <span class="mission-action">Lancer la mission ↗</span>
            </article>

            <article class="mission-card" data-mission="mobile" tabindex="0" role="button">
                <span class="mission-number">MISSION 04</span>
                <div class="mission-icon">▣</div>
                <h3>Mobile Innovation</h3>
                <p>Concevoir des applications mobiles intuitives et performantes.</p>
                <span class="mission-action">Lancer la mission ↗</span>
            </article>
        </div>

        <div class="mission-output" id="missionOutput" aria-live="polite">
            <span class="mission-number">SYSTEM / READY</span>
            <h3>En attente d'une mission...</h3>
            <p>Sélectionnez une carte pour composer votre équipe.</p>
        </div>
    </section>
    
    <section class="rv BU5-architect" id="architect">
        <span class="eyebrow">03 — ENGINEERING PLAYGROUND</span>
        <h2>BU5 Architect<span>.</span></h2>

        <p class="dna-description">
        Chaque problème a une architecture.
        Choisissez un défi, activez vos modules et construisez
        votre propre solution digitale.
        </p>

        <div class="architect-console">
        <div class="architect-topbar">
            <span><i class="live-dot"></i> BU5 SYSTEM ONLINE</span>
            <span>BUILD MODE / 01</span>
        </div>

        <label class="architect-label" for="challengeSelect">
            01 — CHOISISSEZ VOTRE DÉFI
        </label>

        <select id="challengeSelect" class="architect-select">
            <option value="web">Créer une plateforme web</option>
            <option value="ai">Analyser des données avec l'IA</option>
            <option value="mobile">Développer une application mobile</option>
            <option value="design">Concevoir une expérience digitale</option>
        </select>

        <p class="architect-label">02 — ACTIVEZ LES MODULES</p>

        <div class="architect-modules">
            <button type="button" class="module-btn active" data-module="frontend">
                <span>01</span> Front-end
            </button>
            <button type="button" class="module-btn" data-module="backend">
                <span>02</span> Back-end & API
            </button>
            <button type="button" class="module-btn" data-module="data">
                <span>03</span> Data & IA
            </button>
            <button type="button" class="module-btn" data-module="design">
                <span>04</span> UI/UX Design
            </button>
            <button type="button" class="module-btn" data-module="mobile">
                <span>05</span> Mobile
            </button>
        </div>

        <button type="button" class="btn architect-build" id="buildArchitecture">
            Générer l'architecture ↗
        </button>

        <div class="architecture-result" id="architectureResult" aria-live="polite">
            <div class="architecture-placeholder">
                <span class="live-dot"></span>
                <p>EN ATTENTE DE CONFIGURATION...</p>
                <small>Activez vos modules puis lancez la génération.</small>
            </div>
        </div>

        <div class="architect-footer">
            <span>DESIGNED BY BU5</span>
            <span>IDEA → LOGIC → SOLUTION</span>
        </div>
        </div>
    </section>


   
    <section class="rv" id="projects">
        <span class="eyebrow">03 — SELECTED WORK</span>
        <h2>Nos projets<span>.</span></h2>

        <div class="grid">
        ${ALL_PROJECTS.filter(p => p.owner === null).map(p => `
            <article class="card project-card"
                role="link"
                tabindex="0"
                onclick="location.hash='#/project/${p.id}'"
                onkeydown="if(event.key==='Enter'||event.key===' '){
                    event.preventDefault();
                    location.hash='#/project/${p.id}';
                }">

                <span class="eyebrow">PROJECT / CASE STUDY</span>
                ${p.image ? `
    <div class="project-image">
        <img
            src="${p.image}"
            alt="Aperçu de ${p.title}"
            loading="lazy"
            onerror="this.parentElement.style.display='none'"
        >
    </div>
` : ""}
                <h3>${p.title}</h3>
                <p>${p.description}</p>

                <div class="chips">
                    ${p.tech.map(t => `<span>${t}</span>`).join("")}
                </div>

                <span class="mission-action">
                    Explorer le projet ↗
                </span>
            </article>
        `).join("")}
        </div>
    </section>

    
    <section class="rv" id="team">
        <span class="eyebrow">04 — THE PEOPLE BEHIND THE IDEAS</span>
        <h2>Meet the team<span>.</span></h2>

        <p class="dna-description">
        Huit talents, une seule vision. Découvrez les personnes
        derrière BU5.
         </p>

        <div class="team-window">
        <div class="member-track">
            ${[...M, ...M].map((m, i) => `
                <article class="member-card"
                    style="--i:${i}"
                    role="link"
                    tabindex="0"
                    onclick="location.hash='#/m/${m.id}'"
                    onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();location.hash='#/m/${m.id}'}">

                    <img
                        class="member-photo"
                        src="${m.photo || 'https://placehold.co/400x260/0b1830/64caff?text=' + encodeURIComponent(m.n)}"
                        alt="Photo de ${m.n}"
                    >

                    <span class="member-index">BU5 / 0${m.id + 1}</span>
                    <h3>${m.n}</h3>
                    <p class="member-role">${m.r}</p>
                    <p>${m.b}</p>
                    <span class="mission-action">Voir le portfolio ↗</span>
                </article>
            `).join("")}
        </div>
        </div>

        <p class="track-hint">DÉCOUVREZ LES 8 MEMBRES →</p>
    </section>



     
    <section class="rv" id="terminal">
        <span class="eyebrow">05 — BU5 SYSTEM</span>
        <h2>Terminal<span>.</span></h2>
        <p class="dna-description">
            Explorez BU5 avec quelques commandes.
        </p>

        <div class="term">
            <div class="hd"><i></i><i></i><i></i></div>
            <div id="tb">Bienvenue dans le terminal de ${BU.name}.
        Tapez help pour voir les commandes.
        </div>
            <input id="ti" placeholder="$ tapez une commande..." autocomplete="off">
        </div>
    </section>

    <section class="rv" id="contact">
        <span class="eyebrow">06 — LET'S BUILD SOMETHING</span>
        <h2>Contactez-nous<span>.</span></h2>
        <p class="dna-description">
            Une idée, un besoin ou un projet ? Parlons-en.
        </p>

        <form class="cf" id="cf">
            <input id="cn" placeholder="Votre nom" required>
            <input id="ce" type="email" placeholder="Votre email" required>

            <select id="cs">
                <option>Site web</option>
                <option>Application mobile</option>
                <option>Design UI/UX</option>
                <option>Data &amp; IA</option>
                <option>Autre</option>
            </select>

            <textarea id="cm" rows="5"
                placeholder="Parlez-nous de votre projet..." required></textarea>

            <button class="btn" type="submit">Envoyer ✈</button>
            <p id="ok"></p>
        </form>
    </section>
    
    <section class="rv contact-info" id="headquarters">
        <span class="eyebrow">07 — FIND US / GET IN TOUCH</span>
        <h2>Restons en contact<span>.</span></h2>
        <p class="dna-description">
            Une question ou une idée de collaboration ?
            Retrouvez JEENISO à travers nos coordonnées.
        </p>

        <div class="contact-info-grid">
            <a class="contact-info-card" href="tel:NUMERO_JEENISO">
                <span class="contact-info-icon">↗</span>
                <span class="contact-info-label"></span>
                <h3>Téléphone</h3>
                <p>+216 29 393 999</p>
                <span class="contact-info-action">Nous appeler ↗</span>
            </a>

            <a class="contact-info-card"
               href="https://www.google.com/maps/place/Ecole+Nationale+d'Ing%C3%A9nieurs+de+Sousse/data=!4m2!3m1!1s0x0:0x26a65273b05b6eff?sa=X&ved=1t:2428&hl=fr&ictx=111"
               target="_blank" rel="noopener noreferrer">
                <span class="contact-info-icon">⌖</span>
                <span class="contact-info-label">LOCATION / 02</span>
                <h3>Localisation</h3>
                <p>ENISO — École Nationale d'Ingénieurs de Sousse</p>
                <span class="contact-info-action">Ouvrir la carte ↗</span>
            </a>

            <a class="contact-info-card"
               href="mailto:EMAIL_JEENISO">
                <span class="contact-info-icon">✉</span>
                <span class="contact-info-label">EMAIL / 03</span>
                <h3>E-mail</h3>
                <p>business.unit.5.eniso@gmail.com</p>
                <span class="contact-info-action">Nous écrire ↗</span>
            </a>
        </div>
    </section>

   
    `;
app.insertAdjacentHTML("beforeend", `
  <section class="magazine-section" id="magazine-reader">
    <p class="magazine-eyebrow">BEYOND REALITY · DIGITAL EDITION</p>
    <h2>Turn the page. Explore the future.</h2>
    <p class="magazine-description">
      Découvrez notre magazine à travers une expérience de lecture immersive.
    </p>

    <div class="book-stage">
      <div id="book"></div>
    </div>

    <div class="book-controls">
      <button id="prev-page" type="button">← Précédente</button>
      <span id="page-counter">Page 1</span>
      <button id="next-page" type="button">Suivante →</button>
    </div>

    <p class="book-hint">Cliquez sur un coin ou utilisez les boutons pour tourner les pages.</p>
  </section>
`);

const bookElement = document.getElementById("book");

if (bookElement && window.St) {
  const totalPages = 14; // Remplace 10 par le nombre réel de tes images

  const pageImages = Array.from(
    { length: totalPages },
    (_, i) => `./magazine/${i + 1}.png`
  );

  const pageFlip = new St.PageFlip(bookElement, {
    width: 420,
    height: 594,
    size: "stretch",
    minWidth: 280,
    maxWidth: 840,
    minHeight: 396,
    maxHeight: 1188,
    showCover: true,
    usePortrait: true,
    drawShadow: true,
    maxShadowOpacity: 0.5,
    flippingTime: 1000,
    mobileScrollSupport: false,
    autoSize: true
  });

  pageFlip.loadFromImages(pageImages);

  const counter = document.getElementById("page-counter");

  pageFlip.on("flip", (event) => {
    counter.textContent =
      `Page ${event.data + 1} / ${totalPages}`;
  });

  document.getElementById("prev-page").onclick = () => {
    pageFlip.flipPrev();
  };

  document.getElementById("next-page").onclick = () => {
    pageFlip.flipNext();
  };
}
    
const o = document.getElementById("orb");

M.forEach(m => {
    const d = document.createElement("div");
    d.className = "node member-orbit";

    const photo = m.photo || "";

    d.innerHTML = `
        <img
            src="${photo}"
            alt="Photo de ${m.n.trim()}"
            class="orbit-photo"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        >
        <span class="orbit-fallback">${m.ini}</span>
        <b>${m.n.trim()} · ${m.r || "Membre BU5"}</b>
    `;

    d.onclick = () => location.hash = "#/m/" + m.id;
    d.onmouseenter = () => paused = true;
    d.onmouseleave = () => paused = false;

    m.el = d;
    o.appendChild(d);
});

(function loop() {
    const orbit = document.getElementById("orb");
    if (!orbit) return;

    const width = orbit.clientWidth;
    const height = orbit.clientHeight;

    if (!paused) ang += 0.0035;

    const radiusX = width * 0.38;
    const radiusY = height * 0.38;

    const bum = M.find(m => m.r.trim() === "Business Unit Manager");
    const members = M.filter(m => m.r.trim() !== "Business Unit Manager");

    M.forEach(m => {
        if (!m.el) return;

        if (m === bum) {
            m.el.style.left = "50%";
            m.el.style.top = "50%";
            m.el.style.zIndex = "20";
            return;
        }

        const i = members.indexOf(m);
        const angle = ang + i * 2 * Math.PI / members.length;

        m.el.style.left =
            (width / 2 + Math.cos(angle) * radiusX) + "px";
        m.el.style.top =
            (height / 2 + Math.sin(angle) * radiusY) + "px";
    });

    raf = requestAnimationFrame(loop);
})();


   

    typer(document.getElementById("ty"), BU.slogan);
    initExtras();
    initMissionLab();
    
/* ===== BU5 ARCHITECT ===== */

function initBU5Architect() {
    const select = document.getElementById("challengeSelect");
    const result = document.getElementById("architectureResult");
    const buildButton = document.getElementById("buildArchitecture");

    if (!select || !result || !buildButton) return;

    const modules = {
        frontend: {
            name: "Interface utilisateur",
            detail: "Écrans, navigation et interactions"
        },
        backend: {
            name: "Serveur & API",
            detail: "Logique métier et échanges de données"
        },
        data: {
            name: "Data & Intelligence",
            detail: "Traitement, analyse et prédictions"
        },
        design: {
            name: "Design system",
            detail: "Expérience utilisateur et prototypes"
        },
        mobile: {
            name: "Application mobile",
            detail: "Interface adaptée aux appareils mobiles"
        }
    };

    const challenges = {
        web: {
            title: "PLATEFORME WEB",
            recommended: ["design", "frontend", "backend"]
        },
        ai: {
            title: "SOLUTION DATA & IA",
            recommended: ["data", "backend", "frontend"]
        },
        mobile: {
            title: "APPLICATION MOBILE",
            recommended: ["mobile", "backend", "design"]
        },
        design: {
            title: "EXPÉRIENCE DIGITALE",
            recommended: ["design", "frontend"]
        }
    };

    const buttons = [...document.querySelectorAll(".module-btn")];

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            button.classList.toggle("active");
            result.innerHTML = `
                <div class="architecture-placeholder">
                    <span class="live-dot"></span>
                    <p>CONFIGURATION MODIFIÉE</p>
                    <small>Lancez la génération pour visualiser votre architecture.</small>
                </div>`;
        });
    });

    select.addEventListener("change", () => {
        const recommended = challenges[select.value].recommended;

        buttons.forEach(button => {
            button.classList.toggle(
                "active",
                recommended.includes(button.dataset.module)
            );
        });

        result.innerHTML = `
            <div class="architecture-placeholder">
                <span class="live-dot"></span>
                <p>NOUVEAU DÉFI SÉLECTIONNÉ</p>
                <small>Vous pouvez modifier les modules avant la génération.</small>
            </div>`;
    });

    buildButton.addEventListener("click", () => {
        const challenge = challenges[select.value];

        const selected = buttons
            .filter(button => button.classList.contains("active"))
            .map(button => button.dataset.module);

        if (selected.length === 0) {
            result.innerHTML = `
                <div class="architecture-placeholder">
                    <p>⚠ AUCUN MODULE ACTIVÉ</p>
                    <small>Choisissez au moins un module pour continuer.</small>
                </div>`;
            return;
        }

        const layers = selected.map((key, index) => `
            <div class="architecture-node" style="--node-index:${index}">
                <span class="node-number">MODULE 0${index + 1}</span>
                <strong>${modules[key].name}</strong>
                <small>${modules[key].detail}</small>
            </div>
        `).join('<div class="architecture-connector">↓</div>');

        result.innerHTML = `
            <div class="architecture-generated">
                <div class="architecture-heading">
                    <span class="live-dot"></span>
                    <span>ARCHITECTURE GÉNÉRÉE</span>
                </div>

                <h3>${challenge.title}</h3>
                <p class="architecture-summary">
                    ${selected.length} module(s) sélectionné(s).
                    Voici votre proposition d'architecture.
                </p>

                <div class="architecture-flow">
                    ${layers}
                </div>

                <p class="architecture-note">
                    CONCEPT SIMULÉ — À VALIDER SELON LES BESOINS DU PROJET.
                </p>
            </div>`;
    });
}

    initBU5Architect();
}

let tt;function typer(el,arr){let i=0,j=0,del=false;clearTimeout(tt);(function s(){if(!el.isConnected)return;const w=arr[i];el.textContent=w.slice(0,j);if(!del&&j==w.length){del=true;tt=setTimeout(s,1800);return}if(del&&j==0){del=false;i=(i+1)%arr.length}j+=del?-1:1;tt=setTimeout(s,del?25:55)})()}
function port(id){
const m=M[id],p=M[(id+M.length-1)%M.length],n=M[(id+1)%M.length];
app.innerHTML=`<section style="text-align:center"><img
    class="portfolio-photo"
    src="${m.photo || 'https://placehold.co/180x180?text=' + encodeURIComponent(m.ini)}"
    alt="Photo de ${m.n}">
<span class="tag">${m.r}</span><h1 style="font-size:clamp(2rem,6vw,3.6rem)">${m.n}</h1><p class="sub">${m.b}</p>
<div style="margin-top:20px">
<a class="btn" href="#contact-member"
   onclick="event.preventDefault();document.getElementById('contact-member')?.scrollIntoView({behavior:'smooth'});">
   ✉ Contact
</a>
<a class="btn" href="#/">← Retour à la BU</a></div></section>
<section class="rv"><h2>Parcours</h2><div class="tl">${m.p.map(x=>`<div><small>${x[0]}</small><h3>${x[1]}</h3><p>${x[2] ?? ""}</p>${x[3] ? `<p>${x[3]}</p>` : ""}</div>`).join("")}</div></section>
<section class="rv">
    <h2>Mes projets<span>.</span></h2>
    <div class="grid">
        ${m.pr.map((x, i) => {
            const projectId = `m-${id}-${i}`;
            return `
                <article class="card project-card"
                    role="link"
                    tabindex="0"
                    onclick="location.hash='#/project/${projectId}'"
                    onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault();location.hash='#/project/${projectId}'}">

                    <span class="eyebrow">PROJECT / CASE STUDY</span>
                    <h3>${x[0]}</h3>
                    <p>${x[1]}</p>

                    <div class="chips">
                        ${(x[2] || []).map(t => `<span>${t}</span>`).join("")}
                    </div>
                    <div class="project-image">
    <img
        src="${ALL_PROJECTS.find(p => p.id === projectId)?.image || ''}"
        alt="Aperçu de ${x[0]}"
        loading="lazy"
        onerror="this.parentElement.style.display='none'"
    >
</div>
                    <span class="mission-action">Découvrir le projet ↗</span>
                </article>
            `;
        }).join("")}
    </div>
</section>

<section class="rv"><h2>Formations</h2><div class="grid">${m.f.map(x=>`<div class="card"><h3>${x[0]}</h3><p>${x[1] ?? ""}</p></div>`).join("")}</div></section>
<section class="rv"><h2>Compétences</h2>${m.s.map(x=>`<div class="sk"><div class="l"><span>${x[0]}</span><span>${x[1]}%</span></div><div class="bar"><i data-w="${x[1]}"></i></div></div>`).join("")}</section>
<section class="rv">
<section class="rv member-contact" id="contact-member">
    <span class="eyebrow">LET'S CONNECT / 0${id + 1}</span>
    <h2>Construisons quelque chose<span>.</span></h2>

    <p class="dna-description">
        Une question, une idée ou une opportunité de collaboration ?
        Envoyez directement un message à ${m.n.trim()}.
    </p>

    <form class="member-contact-form" id="memberContactForm">
        <label for="memberSender">Votre nom</label>
        <input id="memberSender" name="sender"
               placeholder="Nom complet" required>

        <label for="memberEmail">Votre adresse email</label>
        <input id="memberEmail" name="email" type="email"
               placeholder="vous@exemple.com" required>

        <label for="memberSubject">Sujet</label>
        <input id="memberSubject" name="subject"
               placeholder="Objet du message" required>

        <label for="memberMessage">Votre message</label>
        <textarea id="memberMessage" name="message" rows="5"
                  placeholder="Écrivez votre message..." required></textarea>

        <button class="btn" type="submit">Envoyer le message ↗</button>

        <p class="contact-note">
            Votre application mail s'ouvrira pour envoyer le message.
        </p>
    </form>
</section>
<div class="pn"><a class="btn" href="#/m/${p.id}">← ${p.n}</a><a class="btn" href="#/m/${n.id}">${n.n} →</a></div></section>`;

const contactForm = document.getElementById("memberContactForm");

if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const sender = document.getElementById("memberSender").value.trim();
        const email = document.getElementById("memberEmail").value.trim();
        const subject = document.getElementById("memberSubject").value.trim();
        const message = document.getElementById("memberMessage").value.trim();

        if (!m.mail || !m.mail.includes("@")) {
            alert("L'adresse email de ce membre n'est pas configurée.");
            return;
        }

        const body =
            `Bonjour ${m.n.trim()},\n\n${message}\n\n` +
            `Nom : ${sender}\nEmail : ${email}`;

        const mailto =
            `mailto:${m.mail}?subject=${encodeURIComponent(subject)}` +
            `&body=${encodeURIComponent(body)}`;

        window.location.href = mailto;
    });
}

}

function projectPage(projectId) {
    const project = ALL_PROJECTS.find(p => p.id === projectId);

    if (!project) {
        app.innerHTML = `
            <section class="hero">
                <h1>Projet introuvable<span>.</span></h1>
                <p>Ce projet n'existe pas ou n'est plus disponible.</p>
                <a class="btn" href="#/">← Retour à l'accueil</a>
            </section>`;
        return;
    }

    const member = project.owner !== null
        ? M[project.owner]
        : null;

    app.innerHTML = `
        <section class="project-hero">
            <span class="eyebrow">BU5 / PROJECT DETAILS</span>
            <h1>${project.title}<span>.</span></h1>
            <p class="sub">${project.description}</p>

            <div class="chips">
                ${project.tech.map(t => `<span>${t}</span>`).join("")}
            </div>

            <div class="project-actions">
                <a class="btn" href="${member ? `#/m/${member.id}` : '#/'}">
                    ← ${member ? 'Voir le portfolio' : 'Retour à la BU'}
                </a>
                <a class="btn" href="#/" onclick="event.preventDefault();location.hash='#/';setTimeout(()=>document.getElementById('projects')?.scrollIntoView({behavior:'smooth'}),150)">
                    Tous les projets ↗
                </a>
            </div>
        </section>

        <section class="rv project-details">
            <span class="eyebrow">01 — PROJECT OVERVIEW</span>
            <h2>À propos<span>.</span></h2>
            <p>${project.description}</p>

            <h3>Objectif</h3>
            <p>${project.objective}</p>

            <h3>Étapes clés</h3>
            <div class="grid">
                ${project.features.map((feature, i) => `
                    <article class="card">
                        <span class="eyebrow">ÉTAPE 0${i + 1}</span>
                        <h3>${feature}</h3>
                    </article>
                `).join("")}
            </div>

            <h3>Technologies utilisées</h3>
            <div class="chips">
                ${project.tech.map(t => `<span>${t}</span>`).join("")}
            </div>

            ${member ? `
                <div class="card project-owner">
                    <span class="eyebrow">PROJECT CONTRIBUTOR</span>
                    <h3>${member.n}</h3>
                    <p>${member.r}</p>
                    <a class="btn" href="#/m/${member.id}">
                        Découvrir son portfolio ↗
                    </a>
                </div>
            ` : ''}
        </section>
    `;
}

const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("in");e.target.querySelectorAll("[data-w]").forEach(b=>b.style.width=b.dataset.w+"%")}}),{threshold:.15});

function route() {
    cancelAnimationFrame(raf);

    const hash = location.hash || "#/";
    const memberMatch = hash.match(/^#\/m\/(\d+)$/);
    const projectMatch = hash.match(/^#\/project\/([^/]+)$/);

    if (memberMatch && M[Number(memberMatch[1])]) {
        port(Number(memberMatch[1]));
    } else if (projectMatch) {
        projectPage(decodeURIComponent(projectMatch[1]));
    } else {
        home();
    }

    window.scrollTo(0, 0);

    app.querySelectorAll(".rv").forEach(section => {
        io.observe(section);
    });
}
window.addEventListener("hashchange", route);
route();
// tilt + glow
addEventListener("mousemove",e=>{const g=document.getElementById("glow");g.style.left=e.clientX+"px";g.style.top=e.clientY+"px";const c=e.target.closest&&e.target.closest(".card");if(c){const r=c.getBoundingClientRect();c.style.setProperty("--ry",((e.clientX-r.left)/r.width-.5)*10+"deg");c.style.setProperty("--rx",-((e.clientY-r.top)/r.height-.5)*10+"deg")}});
document.addEventListener("mouseout",e=>{const c=e.target.closest&&e.target.closest(".card");if(c){c.style.setProperty("--rx","0deg");c.style.setProperty("--ry","0deg")}});
// particules réseau
const cv=document.getElementById("bg"),x=cv.getContext("2d");let W,H,P=[],mx=-999,my=-999;
function rs(){W=cv.width=innerWidth;H=cv.height=innerHeight;P=Array.from({length:Math.min(80,W/16|0)},()=>({x:Math.random()*W,y:Math.random()*H,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5}))}
rs();addEventListener("resize",rs);addEventListener("mousemove",e=>{mx=e.clientX;my=e.clientY});
(function d(){x.clearRect(0,0,W,H);P.forEach((a,i)=>{a.x+=a.vx;a.y+=a.vy;if(a.x<0||a.x>W)a.vx*=-1;if(a.y<0||a.y>H)a.vy*=-1;x.fillStyle="#7aa8ff";x.beginPath();x.arc(a.x,a.y,1.6,0,7);x.fill();for(let j=i+1;j<P.length;j++){const b=P[j],k=Math.hypot(a.x-b.x,a.y-b.y);if(k<130){x.strokeStyle=`rgba(80,140,255,${.28*(1-k/130)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(b.x,b.y);x.stroke()}}const m=Math.hypot(a.x-mx,a.y-my);if(m<160){x.strokeStyle=`rgba(0,212,255,${.5*(1-m/160)})`;x.beginPath();x.moveTo(a.x,a.y);x.lineTo(mx,my);x.stroke()}});requestAnimationFrame(d)})();
// thème, appareil, progression, extras
const $b=document.body,root=document.documentElement;
function setTheme(t){root.dataset.theme=t;document.getElementById("th").textContent=t==="light"?"☀️":"🌙"}
function setDev(d){$b.classList.toggle("mob",d==="mob");document.getElementById("dv").textContent=d==="mob"?"📱 Mobile":"💻 PC";rs()}
setTheme(matchMedia("(prefers-color-scheme: light)").matches?"light":"dark");
setDev(innerWidth<760?"mob":"pc");
document.getElementById("th").onclick=()=>setTheme(root.dataset.theme==="light"?"dark":"light");
document.getElementById("dv").onclick=()=>setDev($b.classList.contains("mob")?"pc":"mob");
document.querySelectorAll("#ov [data-d]").forEach(b=>b.onclick=()=>{setDev(b.dataset.d);const o=document.getElementById("ov");o.style.transition="opacity .6s";o.style.opacity=0;setTimeout(()=>o.remove(),600)});
addEventListener("scroll",()=>{document.getElementById("pb").style.width=scrollY/Math.max(1,document.body.scrollHeight-innerHeight)*100+"%"});
function initExtras(){const $=i=>document.getElementById(i);
document.querySelectorAll("[data-n]").forEach(b=>new IntersectionObserver((es,ob)=>{if(es[0].isIntersecting){ob.disconnect();const t=+b.dataset.n;let v=0;const s=setInterval(()=>{v+=Math.ceil(t/40);if(v>=t){v=t;clearInterval(s)}b.textContent=v+(b.dataset.s??"+")},35)}}).observe(b));
$("cf").onsubmit=e=>{e.preventDefault();$("ok").textContent="✓ Merci "+$("cn").value+" ! Votre application mail s'ouvre…";location.href="mailto:contact@jeeniso.tn?subject="+encodeURIComponent("["+$("cs").value+"] "+$("cn").value)+"&body="+encodeURIComponent($("cm").value+"\n\n"+$("ce").value)};
const tb=$("tb"),ti=$("ti"),C={help:()=>"Commandes : help · team · projects · contact · whoami · clear",team:()=>M.map(m=>"• "+m.n+" — "+m.r).join("\n"),projects:()=>PJ.map(p=>"▸ "+p[0]).join("\n"),contact:()=>"✉ contact@jeeniso.tn",whoami:()=>BU.name+" · JEENISO"};
ti.onkeydown=e=>{if(e.key!=="Enter")return;const c=ti.value.trim().toLowerCase();ti.value="";if(c==="clear"){tb.textContent="";return}tb.textContent+="$ "+c+"\n"+(C[c]?C[c]():"commande inconnue : "+c)+"\n";tb.scrollTop=tb.scrollHeight}}

/* ===== BU5 NAVIGATION ===== */


/* ===== NAVIGATION BU5 : VERSION CORRIGÉE ===== */

const navLinks = document.querySelector(".nav-links");
const menuToggle = document.getElementById("menuToggle");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const opened = navLinks.classList.toggle("open");
        menuToggle.textContent = opened ? "✕" : "☰";
        menuToggle.setAttribute("aria-expanded", String(opened));
    });
}


function navigateToSection(id) {
    const goToSection = () => {
        const target = document.getElementById(id);

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

            navLinks?.classList.remove("open");

            if (menuToggle) {
                menuToggle.textContent = "☰";
                menuToggle.setAttribute("aria-expanded", "false");
            }
        }
    };

    // La section existe déjà sur la page actuelle.
    if (document.getElementById(id)) {
        goToSection();
        return;
    }

    // Sinon, revenir à l'accueil puis chercher la section.
    location.hash = "#/";

    setTimeout(goToSection, 300);
}


document.querySelectorAll(".nav-links [data-scroll]")
    .forEach(button => {
        button.addEventListener("click", () => {
            navigateToSection(button.dataset.scroll);
        });
    });


/* ===== BU5 MISSION SIMULATOR ===== */

const missionData = {
    web: {
        title: "MISSION WEB INITIALISÉE",
        description:
            "Une équipe orientée développement web, architecture et expérience utilisateur.",
        skills: ["Web Development Lead", "Technical & Innovation Lead", "Designer UI/UX"]
    },

    ai: {
        title: "MISSION DATA INITIALISÉE",
        description:
            "Une équipe orientée analyse des données, programmation et visualisation.",
        skills: ["Technical & Innovation Lead", "DevOps & Cloud", "Business Unit Manager"]
    },

    design: {
        title: "MISSION DESIGN INITIALISÉE",
        description:
            "Une équipe orientée identité visuelle, expérience utilisateur et communication.",
        skills: ["Designer UI/UX", "Marketing & Communication Lead", "Business Unit Manager"]
    },

    mobile: {
        title: "MISSION MOBILE INITIALISÉE",
        description:
            "Une équipe orientée développement mobile, API et expérience utilisateur.",
        skills: ["Mobile Development Lead", "DevOps & Cloud", "Designer UI/UX"]
    }
};

function initMissionLab() {
    const output = document.getElementById("missionOutput");
    if (!output) return;

    document.querySelectorAll(".mission-card").forEach(card => {
        card.addEventListener("click", () => {
            const mission = missionData[card.dataset.mission];
            if (!mission) return;

            document.querySelectorAll(".mission-card")
                .forEach(item => item.classList.remove("selected"));

            card.classList.add("selected");

            const members = mission.skills.map(role => {
                const member = M.find(m => m.r === role);

                if (!member) {
                    return `
                        <div class="team-chip">
                            <strong>${role}</strong>
                            Coordination
                        </div>`;
                }

                return `
                    <div class="team-chip">
                        <strong>${member.n}</strong>
                        ${member.r}
                    </div>`;
            }).join("");

            output.innerHTML = `
                <div class="output-status">
                    <span class="status-dot"></span>
                    ${mission.title}
                </div>

                <p>${mission.description}</p>

                <div class="team-result">
                    ${members}
                </div>

                <p style="margin-top:18px;font-size:.8rem">
                    SYSTEM STATUS: SIMULATION TERMINÉE ✓
                </p>
            `;
        });
    });
}

/* Le site étant rendu dynamiquement, on initialise
   les interactions après chaque affichage de la page. */

