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

    // Footer
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

    // Footer
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
