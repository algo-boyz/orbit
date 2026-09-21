import { defaultLocale, type Locale } from './config';

export const ui = {
  en: {
    // Header
    'nav.capabilities': 'Capabilities',
    'nav.edge': 'Edge AI',
    'nav.contact': 'Contact',
    'nav.cta': 'Request briefing',
    'nav.homeAria': 'AgentJetson home',
    'nav.blog': 'Blog',

    // Blog
    'blog.title': 'Blog — AgentJetson',
    'blog.description': 'Insights on edge AI, officer safety, and real-time intelligence for public safety.',
    'blog.eyebrow': 'Insights',
    'blog.heading': 'From the edge',
    'blog.lede': 'Operational lessons, capability deep-dives, and how real-time intelligence changes outcomes for officers on the street.',
    'blog.back': '← All posts',
    'blog.empty': 'No posts yet.',

    // Hero
    'hero.eyebrow': 'Sovereign AI for the public good',
    'hero.title.1': 'Video records the past.',
    'hero.title.2': 'Agent Jetson',
    'hero.title.3': 'tells you what’s happening right now.',
    'hero.lede':
      'From passive cameras to active intelligence. Real-time detection with full agency control — at the edge of every encounter.',
    'hero.cta.primary': 'Request a briefing',
    'hero.cta.secondary': 'See capabilities',
    'hero.mantra': '“Intelligence at the edge of every encounter.”',
    'hero.liveLabel': 'LIVE EDGE · DETECTING',

    // Positioning
    'pos.label': 'Positioning',
    'pos.title': 'Defense-grade. Human-governed. Sovereign.',
    'pos.1.title': 'Sovereign AI for the public good',
    'pos.1.body':
      'Defense-grade models run under agency authority. Data, policies, and decisions stay inside your controlled boundary.',
    'pos.2.title': 'Edge intelligence for every officer',
    'pos.2.body':
      'Awareness travels with the patrol — body cams, dash cams, mobile devices, and fixed feeds become active sensors.',
    'pos.3.title': 'Awareness before encounter',
    'pos.3.body':
      'Detect, identify, correlate, and alert in real time so officers know what matters before contact is made.',

    // Features
    'feat.label': 'Capabilities',
    'feat.title': 'Built for the street, not the lab.',
    'feat.1.title': 'Real-time multi-modal detection',
    'feat.1.tag': 'Detection',
    'feat.1.body':
      'Vehicles, plates, persons of interest. All analyzed continuously from live streams against authorized watchlists.',
    'feat.2.title': 'Actionable real-time event streams',
    'feat.2.tag': 'Sources',
    'feat.2.body':
      'Every control-plane action is evaluated the moment it happens. Fixed cameras, ALPR, dash cams, body-worn cameras, drones & mobile sources become an active detection network.',
    'feat.3.title': 'Edge-first, cloud-optional',
    'feat.3.tag': 'Edge',
    'feat.3.body':
      'Process data where it is generated. Keep sensitive video on-prem or at the edge. Escalate when policy demands.',

    // Demo
    'demo.label': 'Demo',
    'demo.readMore': 'Read more…',
    'demo1.title': 'Traffic analysis',
    'demo1.body':
      'Agent Jetson turns ordinary camera feeds into continuous, real-time intelligence no human team can match in volume, speed, or consistency.',
    'demo1.1.title': 'Multi-class object detection',
    'demo1.1.body':
      'Detects vehicles, persons, and objects of interest simultaneously across cluttered scenes — at frame rates and with persistence that exceed sustained human attention.',
    'demo1.2.title': 'Live traffic analysis',
    'demo1.2.body':
      'Counts, classifies, and correlates movement across lanes and cameras in real time, surfacing anomalies a dispatcher would miss under load.',
    'demo1.3.title': 'Speed estimation from video',
    'demo1.3.body':
      'Estimates vehicle speed from monocular video alone — no radar or lidar required — solving a classic computer-vision problem at the edge.',
    'demo1.3.readMore': 'Read more…',
    'demo2.body':
      'Beyond detection: privacy, depth, identity persistence, and text recognition that run continuously where humans cannot scale.',
    'demo2.1.title': 'Real-time privacy blur',
    'demo2.1.body':
      'Automatically redacts faces and plates on live streams so agencies retain operational value while meeting privacy and retention constraints humans cannot enforce frame-by-frame.',
    'demo2.2.title': 'Monocular distance estimation',
    'demo2.2.body':
      'Infers range and relative depth from a single camera — giving officers spatial context before contact that pure 2-D video cannot provide.',
    'demo2.3.title': 'Persistent multi-object tracking',
    'demo2.3.body':
      'Maintains identity across occlusion, camera hand-off, and crowded scenes — a combinatorial problem that collapses under human cognitive load.',
    'demo2.4.title': 'Live OCR on moving targets',
    'demo2.4.body':
      'Reads plates and text from vehicles and scenes in motion at the edge, turning fleeting visual cues into structured, searchable intelligence.',

    // Edge
    'edge.label': 'Edge AI',
    'edge.title': 'Intelligence that travels with the mission.',
    'edge.body':
      'Agent Jetson runs on NVIDIA Jetson-class hardware and hardened edge nodes so detection stays local, low-latency, and under your control — even when the network does not.',

    // CTA / Contact
    'cta.label': 'Contact',
    'cta.title': 'Ready to bring active intelligence to the street?',
    'cta.lede':
      'Request a private briefing. We’ll map Agent Jetson to your existing cameras, policies, and operational requirements.',
    'cta.name': 'Name',
    'cta.namePlaceholder': 'Full name',
    'cta.email': 'Email',
    'cta.emailPlaceholder': 'you@agency.gov',
    'cta.org': 'Organization',
    'cta.orgPlaceholder': 'Agency or department',
    'cta.message': 'Message',
    'cta.messagePlaceholder': 'Brief context, cameras in use, timeline…',
    'cta.submit': 'Request briefing',

    // Investor materials
    'investor.label': 'Investors',
    'investor.title': 'Request investor materials',
    'investor.lede':
      'Tell us a little about yourself. We’ll review and send a secure link to the materials if there’s a fit.',
    'investor.name': 'Name',
    'investor.namePlaceholder': 'Full name',
    'investor.email': 'Email',
    'investor.emailPlaceholder': 'you@firm.com',
    'investor.org': 'Firm / organization',
    'investor.orgPlaceholder': 'Fund, family office, or company',
    'investor.role': 'Role',
    'investor.rolePlaceholder': 'Partner, associate, scout…',
    'investor.message': 'Note (optional)',
    'investor.messagePlaceholder': 'Stage of interest, intro context, or questions…',
    'investor.submit': 'Request materials',
    'investor.note': 'Or email',

    // Partners
    'partners.label': 'Trusted by',
    
    // Footer
    'footer.investors': 'Investors',
    'footer.tagline': 'Intelligence at the edge of every encounter.',
    'footer.rights': 'Defense-grade. Human-governed. Sovereign.',
  },

  es: {
    'nav.capabilities': 'Capacidades',
    'nav.edge': 'IA en el borde',
    'nav.contact': 'Contacto',
    'nav.cta': 'Solicitar briefing',
    'nav.homeAria': 'Inicio AgentJetson',

    'blog.title': 'Blog — AgentJetson',
    'blog.description': 'Información sobre IA en el edge, la seguridad de los agentes y la inteligencia en tiempo real para la seguridad pública.',
    'blog.eyebrow': 'Perspectivas',
    'blog.heading': 'Desde el edge',
    'blog.lede': 'Lecciones operativas, análisis detallados de las capacidades y cómo la inteligencia en tiempo real transforma los resultados para los agentes sobre el terreno.',
    'blog.back': '← Todos los artículos',
    'blog.empty': 'Aún no hay artículos.',

    'hero.eyebrow': 'IA soberana para la seguridad pública',
    'hero.title.1': 'El vídeo registra el pasado.',
    'hero.title.2': 'Agent Jetson',
    'hero.title.3': 'te dice lo que está ocurriendo ahora mismo.',
    'hero.lede':
      'De cámaras pasivas a inteligencia activa. Detección en tiempo real con control total de la agencia — en el borde de cada encuentro.',
    'hero.cta.primary': 'Solicitar un briefing',
    'hero.cta.secondary': 'Ver capacidades',
    'hero.mantra': '“Inteligencia en el borde de cada encuentro.”',
    'hero.liveLabel': 'BORDE EN VIVO · DETECTANDO',

    'pos.label': 'Posicionamiento',
    'pos.title': 'Grado defensa. Gobernado por humanos. Soberano.',
    'pos.1.title': 'IA soberana para la seguridad pública',
    'pos.1.body':
      'Modelos de grado defensa que operan bajo la autoridad de la agencia. Datos, políticas y decisiones permanecen dentro de su perímetro controlado.',
    'pos.2.title': 'Inteligencia de borde para cada agente',
    'pos.2.body':
      'La conciencia viaja con la patrulla: bodycams, dashcams, dispositivos móviles y cámaras fijas se convierten en sensores activos.',
    'pos.3.title': 'Conciencia antes del encuentro',
    'pos.3.body':
      'Detecta, identifica, correlaciona y alerta en tiempo real para que los agentes sepan qué importa antes del contacto.',

    'feat.label': 'Capacidades',
    'feat.title': 'Diseñado para la calle, no para el laboratorio.',
    'feat.1.title': 'Detección multimodal en tiempo real',
    'feat.1.tag': 'Detección',
    'feat.1.body':
      'Vehículos, matrículas, personas de interés. Todo se analiza continuamente a partir de transmisiones en directo, comparándolas con listas de vigilancia autorizadas.',
    'feat.2.title': 'Flujos de eventos accionables en tiempo real',
    'feat.2.tag': 'Fuentes',
    'feat.2.body':
      'Cada acción del plano de control se evalúa en el momento en que ocurre. Cámaras fijas, ALPR, cámaras de salpicadero, cámaras corporales, drones y fuentes móviles se convierten en una red de detección activa.',
    'feat.3.title': 'Edge-first, nube opcional',
    'feat.3.tag': 'Edge',
    'feat.3.body':
      'Procese los datos allí donde se generan. Mantenga los vídeos sensibles en sus instalaciones o en el edge. Escale cuando las políticas lo requieran.',

    // Demo
    'demo.label': 'Demo',
    'demo.readMore': 'Leer más…',
    'demo1.title': 'Análisis de tráfico',
    'demo1.body':
      'Agent Jetson convierte feeds de cámaras ordinarios en inteligencia continua en tiempo real que ningún equipo humano puede igualar en volumen, velocidad o consistencia.',
    'demo1.1.title': 'Detección multi-clase de objetos',
    'demo1.1.body':
      'Detecta vehículos, personas y objetos de interés simultáneamente en escenas abarrotadas — a tasas de fotogramas y con persistencia que superan la atención humana sostenida.',
    'demo1.2.title': 'Análisis de tráfico en vivo',
    'demo1.2.body':
      'Cuenta, clasifica y correlaciona el movimiento entre carriles y cámaras en tiempo real, revelando anomalías que un despachador pasaría por alto bajo carga.',
    'demo1.3.title': 'Estimación de velocidad desde vídeo',
    'demo1.3.body':
      'Estima la velocidad de vehículos solo a partir de vídeo monocular — sin radar ni lidar — resolviendo un problema clásico de visión por computador en el edge.',
    'demo2.title': 'Percepción avanzada',
    'demo2.body':
      'Más allá de la detección: privacidad, profundidad, persistencia de identidad y reconocimiento de texto que operan de forma continua donde los humanos no pueden escalar.',
    'demo2.1.title': 'Desenfoque de privacidad en tiempo real',
    'demo2.1.body':
      'Redacta automáticamente caras y matrículas en transmisiones en vivo para que las agencias conserven valor operativo mientras cumplen restricciones de privacidad y retención que los humanos no pueden aplicar fotograma a fotograma.',
    'demo2.2.title': 'Estimación de distancia monocular',
    'demo2.2.body':
      'Infiere distancia y profundidad relativa desde una sola cámara — dando a los agentes contexto espacial antes del contacto que el vídeo 2-D puro no puede proporcionar.',
    'demo2.3.title': 'Seguimiento multi-objeto persistente',
    'demo2.3.body':
      'Mantiene la identidad a través de oclusiones, traspasos de cámara y escenas concurridas — un problema combinatorio que colapsa bajo la carga cognitiva humana.',
    'demo2.4.title': 'OCR en vivo sobre objetivos en movimiento',
    'demo2.4.body':
      'Lee matrículas y texto de vehículos y escenas en movimiento en el edge, convirtiendo indicios visuales fugaces en inteligencia estructurada y buscable.',

    'edge.label': 'IA en el borde',
    'edge.title': 'Inteligencia que viaja con la misión.',
    'edge.body':
      'Agent Jetson se ejecuta en hardware de clase NVIDIA Jetson y nodos de borde endurecidos para que la detección sea local, de baja latencia y bajo su control — incluso cuando la red no lo está.',

    'cta.label': 'Contacto',
    'cta.title': '¿Listo para llevar inteligencia activa a la calle?',
    'cta.lede':
      'Solicite un briefing privado. Mapearemos Agent Jetson a sus cámaras, políticas y requisitos operativos existentes.',
    'cta.name': 'Nombre',
    'cta.namePlaceholder': 'Nombre completo',
    'cta.email': 'Correo',
    'cta.emailPlaceholder': 'usted@agencia.gov',
    'cta.org': 'Organización',
    'cta.orgPlaceholder': 'Agencia o departamento',
    'cta.message': 'Mensaje',
    'cta.messagePlaceholder': 'Contexto breve, cámaras en uso, plazos…',
    'cta.submit': 'Solicitar briefing',

        // Investor materials
    'investor.label': 'Inversores',
    'investor.title': 'Solicitar materiales para inversores',
    'investor.lede':
      'Cuéntenos un poco sobre usted. Revisaremos y enviaremos un enlace seguro a los materiales si hay encaje.',
    'investor.name': 'Nombre',
    'investor.namePlaceholder': 'Nombre completo',
    'investor.email': 'Correo',
    'investor.emailPlaceholder': 'usted@fondo.com',
    'investor.org': 'Firma / organización',
    'investor.orgPlaceholder': 'Fondo, family office o empresa',
    'investor.role': 'Cargo',
    'investor.rolePlaceholder': 'Socio, asociado, scout…',
    'investor.message': 'Nota (opcional)',
    'investor.messagePlaceholder': 'Etapa de interés, contexto de introducción o preguntas…',
    'investor.submit': 'Solicitar materiales',
    'investor.note': 'O escriba a',
    
    'partners.label': 'Con la confianza de',
    
    'footer.investors': 'Inversores',
    'footer.tagline': 'Inteligencia en el borde de cada encuentro.',
    'footer.rights': 'Grado defensa. Gobernado por humanos. Soberano.',
  },

  fr: {
    'nav.capabilities': 'Capacités',
    'nav.edge': 'IA de bord',
    'nav.contact': 'Contact',
    'nav.cta': 'Demander un briefing',
    'nav.homeAria': 'Accueil AgentJetson',

    'blog.title': 'Blog — AgentJetson',
    'blog.description': 'Insights sur l’IA en périphérie, la sécurité des agents et le renseignement en temps réel pour la sécurité publique.',
    'blog.eyebrow': 'Insights',
    'blog.heading': 'Depuis le terrain',
    'blog.lede': 'Retours d’expérience opérationnels, analyses approfondies des capacités et regard sur la façon dont le renseignement en temps réel transforme les interventions des agents sur le terrain.',
    'blog.back': '← Tous les articles',
    'blog.empty': 'Aucun article pour le moment.',

    'hero.eyebrow': 'IA souveraine pour la sécurité publique',
    'hero.title.1': 'La vidéo enregistre le passé.',
    'hero.title.2': 'Agent Jetson',
    'hero.title.3': 'vous dit ce qui se passe en ce moment.',
    'hero.lede':
      'Des caméras passives à l’intelligence active. Détection en temps réel avec un contrôle total de l’agence — au bord de chaque rencontre.',
    'hero.cta.primary': 'Demander un briefing',
    'hero.cta.secondary': 'Voir les capacités',
    'hero.mantra': '« L’intelligence au bord de chaque rencontre. »',
    'hero.liveLabel': 'BORD EN DIRECT · DÉTECTION',

    'pos.label': 'Positionnement',
    'pos.title': 'Niveau défense. Gouverné par l’humain. Souverain.',
    'pos.1.title': 'IA souveraine pour la sécurité publique',
    'pos.1.body':
      'Des modèles de niveau défense sous l’autorité de l’agence. Données, politiques et décisions restent dans votre périmètre contrôlé.',
    'pos.2.title': 'Intelligence de bord pour chaque agent',
    'pos.2.body':
      'La conscience accompagne la patrouille — bodycams, dashcams, appareils mobiles et flux fixes deviennent des capteurs actifs.',
    'pos.3.title': 'Conscience avant la rencontre',
    'pos.3.body':
      'Détecter, identifier, corréler et alerter en temps réel pour que les agents sachent ce qui compte avant le contact.',

    'feat.label': 'Fonctionnalités',
    'feat.title': 'Conçu pour la rue, pas pour le laboratoire.',
    'feat.1.title': 'Détection multimodale en temps réel',
    'feat.1.tag': 'Détection',
    'feat.1.body':
      'Véhicules, plaques d’immatriculation, personnes d’intérêt. Tout est analysé en continu à partir de flux en direct, en comparaison avec des listes de surveillance autorisées.',
    'feat.2.title': 'Flux d’événements exploitables en temps réel',
    'feat.2.tag': 'Sources',
    'feat.2.body':
      'Chaque action du plan de contrôle est évaluée dès qu’elle se produit. Caméras fixes, ALPR, caméras embarquées, caméras-piétons, drones et sources mobiles deviennent un réseau de détection actif.',
    'feat.3.title': 'Edge-first, cloud optionnel',
    'feat.3.tag': 'Edge',
    'feat.3.body':
      'Traitez les données là où elles sont générées. Conservez les vidéos sensibles sur site ou en périphérie. Déclenchez une remontée lorsque les politiques l’exigent.',

    // Demo
    'demo.label': 'Démo',
    'demo.readMore': 'Lire la suite…',
    'demo1.title': 'Analyse du trafic',
    'demo1.body':
      'Agent Jetson transforme des flux de caméras ordinaires en intelligence continue en temps réel qu’aucune équipe humaine ne peut égaler en volume, vitesse ou constance.',
    'demo1.1.title': 'Détection multi-classes d’objets',
    'demo1.1.body':
      'Détecte simultanément véhicules, personnes et objets d’intérêt dans des scènes encombrées — à des fréquences d’images et avec une persistance qui dépassent l’attention humaine soutenue.',
    'demo1.2.title': 'Analyse du trafic en direct',
    'demo1.2.body':
      'Compte, classe et corrèle les mouvements entre voies et caméras en temps réel, faisant apparaître des anomalies qu’un répartiteur manquerait sous charge.',
    'demo1.3.title': 'Estimation de vitesse à partir de la vidéo',
    'demo1.3.body':
      'Estime la vitesse des véhicules à partir d’une vidéo monoculaire seule — sans radar ni lidar — en résolvant un problème classique de vision par ordinateur en périphérie.',
    'demo2.title': 'Perception avancée',
    'demo2.body':
      'Au-delà de la détection : confidentialité, profondeur, persistance d’identité et reconnaissance de texte qui s’exécutent en continu là où les humains ne peuvent pas passer à l’échelle.',
    'demo2.1.title': 'Flou de confidentialité en temps réel',
    'demo2.1.body':
      'Masque automatiquement visages et plaques sur les flux en direct afin que les agences conservent la valeur opérationnelle tout en respectant les contraintes de confidentialité et de conservation qu’aucun humain ne peut appliquer image par image.',
    'demo2.2.title': 'Estimation de distance monoculaire',
    'demo2.2.body':
      'Infère la distance et la profondeur relative à partir d’une seule caméra — offrant aux agents un contexte spatial avant le contact que la pure vidéo 2-D ne peut fournir.',
    'demo2.3.title': 'Suivi multi-objets persistant',
    'demo2.3.body':
      'Maintient l’identité à travers occlusions, transferts de caméra et scènes encombrées — un problème combinatoire qui s’effondre sous la charge cognitive humaine.',
    'demo2.4.title': 'OCR en direct sur cibles en mouvement',
    'demo2.4.body':
      'Lit plaques et texte sur véhicules et scènes en mouvement en périphérie, transformant des indices visuels fugaces en intelligence structurée et interrogeable.',

    'edge.label': 'IA de bord',
    'edge.title': 'Une intelligence qui voyage avec la mission.',
    'edge.body':
      'Agent Jetson s’exécute sur du matériel de classe NVIDIA Jetson et des nœuds de bord renforcés pour une détection locale, à faible latence et sous votre contrôle — même lorsque le réseau ne l’est pas.',

    'cta.label': 'Contact',
    'cta.title': 'Prêt à apporter l’intelligence active dans la rue ?',
    'cta.lede':
      'Demandez un briefing privé. Nous mapperons Agent Jetson à vos caméras, politiques et exigences opérationnelles existantes.',
    'cta.name': 'Nom',
    'cta.namePlaceholder': 'Nom complet',
    'cta.email': 'E-mail',
    'cta.emailPlaceholder': 'vous@agence.gov',
    'cta.org': 'Organisation',
    'cta.orgPlaceholder': 'Agence ou service',
    'cta.message': 'Message',
    'cta.messagePlaceholder': 'Contexte bref, caméras utilisées, délais…',
    'cta.submit': 'Demander un briefing',

        // Investor materials
    'investor.label': 'Investisseurs',
    'investor.title': 'Demander les documents investisseurs',
    'investor.lede':
      'Parlez-nous un peu de vous. Nous examinerons et enverrons un lien sécurisé vers les documents s’il y a une adéquation.',
    'investor.name': 'Nom',
    'investor.namePlaceholder': 'Nom complet',
    'investor.email': 'E-mail',
    'investor.emailPlaceholder': 'vous@fonds.com',
    'investor.org': 'Fonds / organisation',
    'investor.orgPlaceholder': 'Fonds, family office ou entreprise',
    'investor.role': 'Fonction',
    'investor.rolePlaceholder': 'Associé, analyste, scout…',
    'investor.message': 'Note (optionnel)',
    'investor.messagePlaceholder': 'Stade d’intérêt, contexte d’intro ou questions…',
    'investor.submit': 'Demander les documents',
    'investor.note': 'Ou écrivez à',

    'partners.label': 'Ils nous font confiance',

    'footer.investors': 'Investisseurs',
    'footer.tagline': 'L’intelligence au bord de chaque rencontre.',
    'footer.rights': 'Niveau défense. Gouverné par l’humain. Souverain.',
  },

  de: {
    'nav.capabilities': 'Funktionen',
    'nav.edge': 'Edge-KI',
    'nav.contact': 'Kontakt',
    'nav.cta': 'Briefing anfordern',
    'nav.homeAria': 'AgentJetson Startseite',

    'blog.title': 'Blog — AgentJetson',
    'blog.description': 'Einblicke in Edge-KI, die Sicherheit von Einsatzkräften und Echtzeitinformationen für die öffentliche Sicherheit.',
    'blog.eyebrow': 'Einblicke',
    'blog.heading': 'Am Edge',
    'blog.lede': 'Erkenntnisse aus dem Einsatz, tiefgehende Einblicke in Fähigkeiten und wie Echtzeitinformationen die Ergebnisse für Einsatzkräfte im Außendienst verändern.',
    'blog.back': '← Alle Beiträge',
    'blog.empty': 'Noch keine Beiträge.',

    'hero.eyebrow': 'Souveräne KI für die öffentliche Sicherheit',
    'hero.title.1': 'Video zeichnet die Vergangenheit auf.',
    'hero.title.2': 'Agent Jetson',
    'hero.title.3': 'sagt Ihnen, was gerade passiert.',
    'hero.lede':
      'Von passiven Kameras zu aktiver Intelligenz. Echtzeit-Erkennung mit voller Behördenkontrolle — am Rand jeder Begegnung.',
    'hero.cta.primary': 'Briefing anfordern',
    'hero.cta.secondary': 'Funktionen ansehen',
    'hero.mantra': '„Intelligenz am Rand jeder Begegnung.“',
    'hero.liveLabel': 'LIVE EDGE · ERKENNUNG',

    'pos.label': 'Positionierung',
    'pos.title': 'Defense-Grade. Menschlich gesteuert. Souverän.',
    'pos.1.title': 'Souveräne KI für die öffentliche Sicherheit',
    'pos.1.body':
      'Defense-Grade-Modelle unter Behördenhoheit. Daten, Richtlinien und Entscheidungen bleiben in Ihrem kontrollierten Perimeter.',
    'pos.2.title': 'Edge-Intelligenz für jeden Beamten',
    'pos.2.body':
      'Bewusstsein reist mit der Streife — Bodycams, Dashcams, mobile Geräte und Festinstallationen werden zu aktiven Sensoren.',
    'pos.3.title': 'Bewusstsein vor der Begegnung',
    'pos.3.body':
      'Erkennen, identifizieren, korrelieren und in Echtzeit alarmieren, damit Beamte wissen, was zählt, bevor der Kontakt stattfindet.',

    'feat.label': 'Funktionen',
    'feat.title': 'Für die Straße entwickelt, nicht fürs Labor.',
    'feat.1.title': 'Multimodale Erkennung in Echtzeit',
    'feat.1.tag': 'Erkennung',
    'feat.1.body':
      'Fahrzeuge, Kennzeichen, relevante Personen. Alles wird kontinuierlich aus Live-Streams anhand autorisierter Fahndungslisten analysiert.',
    'feat.2.title': 'Umsetzbare Ereignisströme in Echtzeit',
    'feat.2.tag': 'Quellen',
    'feat.2.body':
      'Jede Aktion auf der Steuerungsebene wird unmittelbar bei ihrem Auftreten ausgewertet. Fest installierte Kameras, ALPR, Dashcams, Bodycams, Drohnen und mobile Quellen werden zu einem aktiven Erkennungsnetzwerk.',
    'feat.3.title': 'Edge-first, Cloud-optional',
    'feat.3.tag': 'Edge',
    'feat.3.body':
      'Verarbeiten Sie Daten dort, wo sie entstehen. Halten Sie sensible Videodaten lokal oder am Edge. Eskalieren Sie, wenn es die Richtlinien erfordern.',

    // Demo
    'demo.label': 'Demo',
    'demo.readMore': 'Weiterlesen…',
    'demo1.title': 'Lagebild',
    'demo1.body':
      'Agent Jetson verwandelt gewöhnliche Kamerazuführungen in kontinuierliche Echtzeit-Intelligenz, die kein menschliches Team in Volumen, Geschwindigkeit oder Konstanz erreichen kann.',
    'demo1.1.title': 'Mehrklassen-Objekterkennung',
    'demo1.1.body':
      'Erkennt Fahrzeuge, Personen und relevante Objekte gleichzeitig in unübersichtlichen Szenen — mit Bildraten und Persistenz, die die anhaltende menschliche Aufmerksamkeit übersteigen.',
    'demo1.2.title': 'Live-Verkehrsanalyse',
    'demo1.2.body':
      'Zählt, klassifiziert und korreliert Bewegungen über Fahrspuren und Kameras in Echtzeit und deckt Anomalien auf, die ein Dispatcher unter Last übersehen würde.',
    'demo1.3.title': 'Geschwindigkeitsschätzung aus Video',
    'demo1.3.body':
      'Schätzt Fahrzeuggeschwindigkeit allein aus monokularem Video — ohne Radar oder Lidar — und löst damit ein klassisches Computer-Vision-Problem am Edge.',
    'demo2.title': 'Erweiterte Wahrnehmung',
    'demo2.body':
      'Jenseits der Erkennung: Privatsphäre, Tiefe, Identitätspersistenz und Texterkennung, die kontinuierlich laufen, wo Menschen nicht skalieren können.',
    'demo2.1.title': 'Echtzeit-Privatsphäre-Unschärfe',
    'demo2.1.body':
      'Schwärzt automatisch Gesichter und Kennzeichen in Live-Streams, damit Behörden den operativen Nutzen behalten und zugleich Datenschutz- und Aufbewahrungsvorgaben erfüllen, die Menschen nicht bildweise durchsetzen können.',
    'demo2.2.title': 'Monokulare Distanzschätzung',
    'demo2.2.body':
      'Leitet Entfernung und relative Tiefe aus einer einzigen Kamera ab — und gibt Beamten räumlichen Kontext vor dem Kontakt, den reines 2-D-Video nicht liefern kann.',
    'demo2.3.title': 'Persistentes Multi-Objekt-Tracking',
    'demo2.3.body':
      'Hält Identitäten über Verdeckungen, Kameraübergänge und Menschenmengen hinweg — ein kombinatorisches Problem, das unter menschlicher kognitiver Last zusammenbricht.',
    'demo2.4.title': 'Live-OCR auf bewegten Zielen',
    'demo2.4.body':
      'Liest Kennzeichen und Text von Fahrzeugen und Szenen in Bewegung am Edge und verwandelt flüchtige visuelle Hinweise in strukturierte, durchsuchbare Intelligenz.',

    'edge.label': 'Edge-KI',
    'edge.title': 'Intelligenz, die mit der Mission reist.',
    'edge.body':
      'Agent Jetson läuft auf NVIDIA-Jetson-Hardware und gehärteten Edge-Knoten, damit die Erkennung lokal, latenzarm und unter Ihrer Kontrolle bleibt — auch wenn das Netzwerk es nicht ist.',

    'cta.label': 'Kontakt',
    'cta.title': 'Bereit, aktive Intelligenz auf die Straße zu bringen?',
    'cta.lede':
      'Fordern Sie ein privates Briefing an. Wir mappe Agent Jetson auf Ihre bestehenden Kameras, Richtlinien und operativen Anforderungen.',
    'cta.name': 'Name',
    'cta.namePlaceholder': 'Vollständiger Name',
    'cta.email': 'E-Mail',
    'cta.emailPlaceholder': 'sie@behoerde.gov',
    'cta.org': 'Organisation',
    'cta.orgPlaceholder': 'Behörde oder Abteilung',
    'cta.message': 'Nachricht',
    'cta.messagePlaceholder': 'Kurzer Kontext, genutzte Kameras, Zeitplan…',
    'cta.submit': 'Briefing anfordern',

        // Investor materials
    'investor.label': 'Investoren',
    'investor.title': 'Investorenunterlagen anfordern',
    'investor.lede':
      'Erzählen Sie uns kurz von sich. Wir prüfen und senden bei Passung einen sicheren Link zu den Unterlagen.',
    'investor.name': 'Name',
    'investor.namePlaceholder': 'Vollständiger Name',
    'investor.email': 'E-Mail',
    'investor.emailPlaceholder': 'sie@fonds.com',
    'investor.org': 'Fonds / Organisation',
    'investor.orgPlaceholder': 'Fonds, Family Office oder Unternehmen',
    'investor.role': 'Rolle',
    'investor.rolePlaceholder': 'Partner, Associate, Scout…',
    'investor.message': 'Notiz (optional)',
    'investor.messagePlaceholder': 'Interessensphase, Intro-Kontext oder Fragen…',
    'investor.submit': 'Unterlagen anfordern',
    'investor.note': 'Oder schreiben Sie an',

    'partners.label': 'Partners',

    'footer.investors': 'Investoren',
    'footer.tagline': 'Intelligenz am Rand jeder Begegnung.',
    'footer.rights': 'Defense-Grade. Menschlich gesteuert. Souverän.',
  },

  nl: {
    // Header
    'nav.capabilities': 'Mogelijkheden',
    'nav.edge': 'Edge AI',
    'nav.contact': 'Contact',
    'nav.cta': 'Briefing aanvragen',
    'nav.homeAria': 'AgentJetson home',

    'blog.title': 'Blog — AgentJetson',
    'blog.description': 'Inzichten over edge AI, de veiligheid van agenten en realtime-informatie voor openbare veiligheid.',
    'blog.eyebrow': 'Inzichten',
    'blog.heading': 'Vanaf de edge',
    'blog.lede': 'Operationele lessen, diepgaande analyses van mogelijkheden en hoe realtime-informatie de uitkomsten voor agenten op straat verandert.',
    'blog.back': '← Alle berichten',
    'blog.empty': 'Nog geen berichten.',

    // Hero
    'hero.eyebrow': 'Soevereine AI voor het algemeen belang',
    'hero.title.1': 'Video legt het verleden vast.',
    'hero.title.2': 'Agent Jetson',
    'hero.title.3': 'vertelt u wat er nú gebeurt.',
    'hero.lede':
      'Van passieve camera’s naar actieve intelligentie. Realtime detectie met volledige controle voor uw organisatie — op de plek van elke ontmoeting.',
    'hero.cta.primary': 'Vraag een briefing aan',
    'hero.cta.secondary': 'Bekijk de mogelijkheden',
    'hero.mantra': '“Intelligentie op de plek van elke ontmoeting.”',
    'hero.liveLabel': 'LIVE EDGE · DETECTEREN',

    // Positioning
    'pos.label': 'Positionering',
    'pos.title': 'Defensiekwaliteit. Menselijk beheer. Soeverein.',
    'pos.1.title': 'Soevereine AI voor het algemeen belang',
    'pos.1.body':
      'Modellen van defensiekwaliteit draaien onder gezag van uw organisatie. Data, beleid en beslissingen blijven binnen uw gecontroleerde grenzen.',
    'pos.2.title': 'Edge-intelligentie voor elke agent',
    'pos.2.body':
      'Situatiebewustzijn reist mee met de patrouille — bodycams, dashcams, mobiele apparaten en vaste feeds worden actieve sensoren.',
    'pos.3.title': 'Bewustzijn vóór het contact',
    'pos.3.body':
      'Detecteer, identificeer, koppel en waarschuw in realtime, zodat agenten weten wat van belang is voordat er contact wordt gemaakt.',

    // Features
    'feat.label': 'Mogelijkheden',
    'feat.title': 'Ontwikkeld voor de straat, niet voor het lab.',
    'feat.1.title': 'Multimodale detectie in realtime',
    'feat.1.tag': 'Detectie',
    'feat.1.body':
      'Voertuigen, kentekens, personen van belang. Alles wordt continu geanalyseerd vanuit live videostreams en vergeleken met geautoriseerde watchlists.',
    'feat.2.title': 'Direct bruikbare eventstreams in realtime',
    'feat.2.tag': 'Bronnen',
    'feat.2.body':
      'Elke actie op het control plane wordt direct beoordeeld zodra deze plaatsvindt. Vaste camera’s, ALPR, dashcams, bodycams, drones en mobiele bronnen vormen samen een actief detectienetwerk.',
    'feat.3.title': 'Edge-first, cloud optioneel',
    'feat.3.tag': 'Edge',
    'feat.3.body':
      'Verwerk data daar waar deze wordt gegenereerd. Houd gevoelige videobeelden lokaal of aan de edge. Schakel op wanneer beleid dit vereist.',

    // Demo
    'demo.label': 'Demo',
    'demo.readMore': 'Lees meer…',
    'demo1.title': 'Verkeersanalyse',
    'demo1.body':
      'Agent Jetson zet gewone camerabeelden om in continue realtime-intelligentie die geen menselijk team kan evenaren in volume, snelheid of consistentie.',
    'demo1.1.title': 'Multi-klasse objectdetectie',
    'demo1.1.body':
      'Detecteert voertuigen, personen en objecten van belang tegelijkertijd in drukke scènes — met framesnelheden en persistentie die de aanhoudende menselijke aandacht overtreffen.',
    'demo1.2.title': 'Live verkeersanalyse',
    'demo1.2.body':
      'Telt, classificeert en correleert beweging over rijstroken en camera’s in realtime, en brengt anomalieën aan het licht die een centralist onder druk zou missen.',
    'demo1.3.title': 'Snelheidsschatting uit video',
    'demo1.3.body':
      'Schat voertuigsnelheid uitsluitend uit monoculaire video — zonder radar of lidar — en lost zo een klassiek computer-vision-probleem aan de edge op.',
    'demo2.title': 'Geavanceerde perceptie',
    'demo2.body':
      'Voorbij detectie: privacy, diepte, identiteitspersistentie en tekstherkenning die continu draaien waar mensen niet kunnen opschalen.',
    'demo2.1.title': 'Realtime privacy-blur',
    'demo2.1.body':
      'Redacteert automatisch gezichten en kentekens in livestreams, zodat agentschappen operationele waarde behouden terwijl ze privacy- en bewaartermijnen naleven die mensen niet frame-voor-frame kunnen afdwingen.',
    'demo2.2.title': 'Monoculaire afstandsschatting',
    'demo2.2.body':
      'Leidt afstand en relatieve diepte af uit één camera — en geeft agenten ruimtelijke context vóór contact die pure 2D-video niet kan bieden.',
    'demo2.3.title': 'Persistente multi-object tracking',
    'demo2.3.body':
      'Behoudt identiteit over occlusie, camera-overdrachten en drukke scènes heen — een combinatorisch probleem dat onder menselijke cognitieve belasting in elkaar stort.',
    'demo2.4.title': 'Live OCR op bewegende doelen',
    'demo2.4.body':
      'Leest kentekens en tekst van voertuigen en scènes in beweging aan de edge, en zet vluchtige visuele signalen om in gestructureerde, doorzoekbare intelligentie.',

    // Edge
    'edge.label': 'Edge AI',
    'edge.title': 'Intelligentie die meereist met de missie.',
    'edge.body':
      'Agent Jetson draait op NVIDIA Jetson-hardware en mil-grade geharde edge-nodes. Zo blijft detectie lokaal, met lage vertraging en onder controle, zelfs als het netwerk wegvalt.',

    // CTA / Contact
    'cta.label': 'Contact',
    'cta.title': 'Klaar om actieve intelligentie naar de straat te brengen?',
    'cta.lede':
      'Vraag een besloten briefing aan. We stemmen Agent Jetson af op uw bestaande camera’s, beleid en operationele vereisten.',
    'cta.name': 'Naam',
    'cta.namePlaceholder': 'Uw naam',
    'cta.email': 'E-mailadres',
    'cta.emailPlaceholder': 'u@organisatie.nl',
    'cta.org': 'Organisatie',
    'cta.orgPlaceholder': 'Instantie of afdeling',
    'cta.message': 'Bericht',
    'cta.messagePlaceholder': 'Korte context, gebruikte camera’s, tijdslijn…',
    'cta.submit': 'Briefing aanvragen',


    // Investor materials
    'investor.label': 'Investeerders',
    'investor.title': 'Investeerdersmateriaal aanvragen',
    'investor.lede':
      'Vertel ons kort over uzelf. We bekijken het en sturen bij een match een beveiligde link naar het materiaal.',
    'investor.name': 'Naam',
    'investor.namePlaceholder': 'Volledige naam',
    'investor.email': 'E-mailadres',
    'investor.emailPlaceholder': 'u@fonds.com',
    'investor.org': 'Fonds / organisatie',
    'investor.orgPlaceholder': 'Fonds, family office of bedrijf',
    'investor.role': 'Rol',
    'investor.rolePlaceholder': 'Partner, associate, scout…',
    'investor.message': 'Opmerking (optioneel)',
    'investor.messagePlaceholder': 'Fase van interesse, introductiecontext of vragen…',
    'investor.submit': 'Materiaal aanvragen',
    'investor.note': 'Of mail naar',

    'partners.label': 'Partners',

    // Footer
    'footer.investors': 'Investeerders',
    'footer.tagline': 'Intelligentie op de plek van elke ontmoeting.',
    'footer.rights': 'Defensiekwaliteit. Menselijk beheer. Soeverein.',
  }
} as const;

export type UIKey = keyof typeof ui.en;

export function t(locale: string | undefined, key: UIKey): string {
  const lang = (locale && locale in ui ? locale : defaultLocale) as Locale;
  return ui[lang][key] ?? ui[defaultLocale][key] ?? key;
}

export function useTranslations(locale: string | undefined) {
  return (key: UIKey) => t(locale, key);
}