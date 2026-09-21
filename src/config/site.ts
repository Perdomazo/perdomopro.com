export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  category: string;
  status: 'Producción' | 'Completado' | 'En desarrollo' | 'Investigación / Académico';
  year: string;
  description: string;
  context: string;
  architectureDetails: {
    problem: string;
    solution: string;
    impact: string;
    highlights: string[];
  };
  technologies: string[];
  links?: {
    demo?: string;
    github?: string;
    docs?: string;
  };
}

export interface WorkArea {
  number: string;
  title: string;
  tagline: string;
  description: string;
  focus: string[];
  deliverables: string[];
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  principles: string[];
}

export interface StackCategory {
  category: string;
  description: string;
  items: {
    name: string;
    level: string;
    tag: string;
  }[];
}

export const siteConfig = {
  name: "Adrián Perdomo",
  brand: "PerdomoPro",
  tagline: "Construyo tecnología entre el software y la infraestructura.",
  shortBio: "Estudiante de Ingeniería en Computación y profesional de TI en formación. Desarrollo proyectos de software, exploro cloud, automatización e inteligencia artificial y convierto problemas técnicos en soluciones digitales.",
  url: "https://perdomopro.com",
  location: "Guadalajara, Jalisco, México",
  coordinates: "20.6597° N, 103.3496° W",
  timezone: "America/Mexico_City (UTC-6)",
  email: "ajvpl15@gmail.com",
  emailPublic: "contacto@perdomopro.com",
  github: "https://github.com/adrianperdomo",
  linkedin: "https://www.linkedin.com/in/adrian-perdomo",
  status: "Disponible para proyectos, consultoría técnica y colaboración",
  statusBadge: "En desarrollo activo",
  
  navigation: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#sobre-mi" },
    { label: "Áreas", href: "#areas" },
    { label: "Proyectos", href: "#proyectos" },
    { label: "Proceso", href: "#proceso" },
    { label: "Stack", href: "#stack" },
    { label: "Contacto", href: "#contacto" },
  ],

  about: {
    title: "Entre software e infraestructura.",
    p1: "Mi camino en la tecnología comenzó desde la curiosidad por entender cómo funcionan los sistemas a fondo, evolucionando hacia un punto de encuentro natural entre el desarrollo de software y la ingeniería de infraestructura.",
    p2: "Actualmente trabajo en soporte de TI mientras curso Ingeniería en Computación en la Universidad de Guadalajara. Esta combinación me ha brindado una perspectiva práctica insustituible: no solo escribo código, sino que convivo a diario con servidores, redes, sistemas operativos, servicios cloud y la resolución de incidentes reales bajo presión.",
    p3: "Mi objetivo profesional es consolidarme como desarrollador de software con una sólida orientación hacia cloud y sistemas distribuidos: creando soluciones que no solo funcionen en local, sino que se desplieguen de forma reproducible, escalen con eficiencia y puedan mantenerse de manera sostenible en el tiempo.",
    trajectory: [
      {
        step: "01",
        label: "Ingeniería en Computación",
        entity: "Universidad de Guadalajara",
        description: "Fundamentos teóricos rigurosos: estructuras de datos, algoritmos, arquitectura de computadoras, redes y sistemas distribuidos.",
        badge: "Académico",
      },
      {
        step: "02",
        label: "Soporte TI & Operaciones",
        entity: "Experiencia Práctica",
        description: "Administración de sistemas Linux/Windows, redes locales, diagnóstico de fallos de hardware/software y gestión de servicios cloud.",
        badge: "Operaciones",
      },
      {
        step: "03",
        label: "Desarrollo de Software",
        entity: "Proyectos & Construcción",
        description: "Creación de aplicaciones web y móviles modernas con TypeScript, React/Astro, APIs estructuradas y patrones de arquitectura limpia.",
        badge: "Ingeniería",
      },
      {
        step: "04",
        label: "Cloud & Inteligencia Artificial",
        entity: "Especialización Continua",
        description: "Despliegues en Azure y AWS, orquestación de flujos de automatización, agentes autónomos e integración de modelos de lenguaje.",
        badge: "Especialización",
      },
    ]
  },

  workAreas: [
    {
      number: "01",
      title: "Software Development",
      tagline: "Aplicaciones robustas con arquitectura mantenible",
      description: "Desarrollo de aplicaciones y sitios web modernos priorizando código limpio, rendimiento y experiencias de usuario refinadas.",
      focus: ["Frontend contemporáneo", "APIs RESTful & backend ligero", "Tipado estricto con TypeScript", "Mobile con React Native"],
      deliverables: ["Interfaces web de alta fidelidad", "Servicios modulares", "Aplicaciones móviles locales"]
    },
    {
      number: "02",
      title: "Cloud & Infrastructure",
      tagline: "Despliegues reproducibles y entornos confiables",
      description: "Alineación de sistemas con Azure y AWS: modernización desde infraestructura heredada hacia servicios cloud optimizados y automatizados.",
      focus: ["Azure Static Web Apps & App Services", "Instancias EC2 & máquinas virtuales Linux", "Configuración de dominios y DNS", "Pipelines CI/CD con GitHub Actions"],
      deliverables: ["Arquitecturas serverless y estáticas", "Migración de aplicaciones legacy", "Infraestructura como código"]
    },
    {
      number: "03",
      title: "Automation & Scripting",
      tagline: "Eliminación sistemática de fricción manual",
      description: "Automatización de flujos operativos, sincronización de datos y scripts de mantenimiento para incrementar la fiabilidad de los procesos.",
      focus: ["Scripts en Bash & Python", "Automatización de builds y tests", "Webhooks y sincronizaciones", "Monitoreo preventivo"],
      deliverables: ["Pipelines automatizados", "Herramientas internas CLI", "Tareas programadas confiables"]
    },
    {
      number: "04",
      title: "AI Integration & Agents",
      tagline: "Inteligencia práctica integrada en software real",
      description: "Exploración e implementación de modelos de lenguaje, asistentes especializados, inferencia local y herramientas inteligentes aplicadas.",
      focus: ["Modelos locales (Ollama, ONNX)", "Agent workflows & Tool-calling", "Procesamiento de contexto estructurado", "Interfaces asistidas por IA"],
      deliverables: ["Integraciones con APIs de LLMs", "Agentes de automatización", "Búsqueda semántica aplicada"]
    }
  ] as WorkArea[],

  projects: [
    {
      id: "azure-web-modernization",
      number: "01",
      title: "Azure / Web Modernization",
      subtitle: "Migración de infraestructura web hacia arquitectura cloud optimizada",
      category: "Cloud & Infrastructure",
      status: "Completado",
      year: "2025",
      description: "Estrategia técnica y migración de aplicaciones web corporativas alojadas previamente en entornos tradicionales IIS/AWS hacia servicios modernos en Microsoft Azure.",
      context: "Experiencia técnica real enfocada en modernizar infraestructura web para reducir costos operativos, mejorar tiempos de carga y simplificar la gestión de DNS y certificados SSL.",
      architectureDetails: {
        problem: "Aplicaciones monolíticas desplegadas en servidores IIS sobre AWS EC2 con alto consumo de recursos, aprovisionamiento manual y mantenimiento constante de parches de SO.",
        solution: "Segmentación de la capa frontend hacia Azure Static Web Apps con despliegue automatizado por GitHub Actions, optimización de caché perimetral global y gestión delegada de DNS.",
        impact: "Reducción radical de superficie de mantenimiento, tiempo de compilación y despliegue automatizado en menos de 2 minutos sin intervención manual en el servidor.",
        highlights: [
          "Eliminación de dependencias de servidor dedicado para contenido web",
          "Configuración de zonas DNS y certificados SSL gestionados automáticamente",
          "Pipeline continuo de CI/CD validando tests antes de publicar a producción"
        ]
      },
      technologies: ["Azure", "Azure Static Web Apps", "AWS", "IIS", "GitHub Actions", "DNS", "Bash"],
      links: {
        docs: "#"
      }
    },
    {
      id: "iot-industrial-monitoring",
      number: "02",
      title: "IoT Industrial Monitoring",
      subtitle: "Arquitectura de telemetría de emisiones en procesos industriales",
      category: "IoT & Edge Computing",
      status: "Investigación / Académico",
      year: "2024",
      description: "Diseño de una arquitectura de hardware y software para el monitoreo continuo de emisiones y condiciones operativas en entornos industriales.",
      context: "Proyecto académico desarrollado en la Universidad de Guadalajara para explorar la captura y procesamiento de datos en el borde antes de su consolidación en la nube.",
      architectureDetails: {
        problem: "Monitoreo manual discontinuo y propenso a errores en mediciones de gases y temperatura en plantas de producción con retrasos en la detección de anomalías.",
        solution: "Nodos edge basados en microcontroladores y Raspberry Pi conectados a sensores industriales, ejecutando filtrado local y transmitiendo telemetría vía MQTT a un broker seguro.",
        impact: "Detección casi en tiempo real de picos de emisiones con tolerancia a desconexiones de red gracias al buffer de almacenamiento local en el dispositivo.",
        highlights: [
          "Filtrado de ruido y preprocesamiento de series temporales en el borde",
          "Protocolo ligero MQTT con encriptación TLS",
          "Módulo conceptual de detección de anomalías basado en umbrales dinámicos"
        ]
      },
      technologies: ["IoT", "Raspberry Pi", "Sensors", "MQTT", "Python", "Edge Computing", "Cloud Telemetry"],
      links: {}
    },
    {
      id: "gastup-app",
      number: "03",
      title: "GastUp↑",
      subtitle: "Gestión financiera personal con arquitectura local-first",
      category: "Mobile & Local-First",
      status: "En desarrollo",
      year: "2025",
      description: "Aplicación móvil diseñada para el registro y análisis inmediato de finanzas personales, donde los datos residen íntegramente en el dispositivo del usuario.",
      context: "Proyecto personal nacido de la necesidad de una herramienta rápida, sobria y sin suscripciones obligatorias ni dependencias forzosas de conectividad continua.",
      architectureDetails: {
        problem: "Las herramientas financieras convencionales saturan de anuncios, exigen cuentas en la nube con riesgo de privacidad y tienen latencia perceptible al registrar transacciones.",
        solution: "Desarrollo en React Native con base de datos SQLite integrada, consultas instantáneas en microsegundos y cifrado de base de datos a nivel local.",
        impact: "Cero latencia en el registro, funcionamiento 100% offline y privacidad absoluta de los datos financieros del usuario.",
        highlights: [
          "Arquitectura orientada a datos sin backend central obligatorio",
          "Exportación y respaldo local seguro en formatos abiertos (JSON/CSV)",
          "Diseño de interfaz austero, enfocado en velocidad de digitación"
        ]
      },
      technologies: ["React Native", "SQLite", "TypeScript", "Local-first", "Tailwind (NativeWind)"],
      links: {}
    },
    {
      id: "perdomopro-platform",
      number: "04",
      title: "PerdomoPro Platform",
      subtitle: "Identidad digital, laboratorio de rendimiento web y diseño editorial",
      category: "Frontend & Architecture",
      status: "Producción",
      year: "2026",
      description: "Plataforma web personal concebida como laboratorio vivo para explorar rendimiento extremo, diseño editorial interactivo y despliegue estático desacoplado.",
      context: "Construcción de la propia identidad tecnológica de Adrián Perdomo, con arquitectura preparada para expandirse a futuras divisiones de consultoría y proyectos.",
      architectureDetails: {
        problem: "Los sitios de portafolio tradicionales suelen ser plantillas pesadas, saturadas de frameworks innecesarios y animaciones que penalizan el rendimiento.",
        solution: "Arquitectura estática ultra-ligera en Vite + React/Astro-ready con Tailwind CSS v4, tipografía calibrada, animaciones mediante Motion/Lenis respetando accesibilidad y optimización para Azure SWA.",
        impact: "Puntuación de 100 en Core Web Vitals, cero dependencias de bases de datos para contenido público y tiempo de renderizado casi instantáneo.",
        highlights: [
          "Tipografía editorial combinando sans-serif contemporánea con detalles mono",
          "Accesibilidad completa con soporte para prefers-reduced-motion y navegación por teclado",
          "Configuración lista para despliegue estático en Azure Static Web Apps"
        ]
      },
      technologies: ["TypeScript", "Tailwind CSS 4", "Motion", "Lenis", "Azure Static Web Apps", "SEO Schema"],
      links: {
        demo: "https://perdomopro.com",
        github: "https://github.com/adrianperdomo/perdomopro"
      }
    }
  ] as ProjectItem[],

  processSteps: [
    {
      number: "01",
      title: "Understand",
      subtitle: "Diagnóstico y delimitación",
      description: "Comprender a profundidad el problema real, los requerimientos del sistema, los límites de infraestructura y las restricciones presupuestarias antes de proponer código.",
      principles: ["Entrevistas y levantamiento de requisitos", "Identificación de cuellos de botella", "Análisis de riesgos y dependencias"]
    },
    {
      number: "02",
      title: "Design",
      subtitle: "Arquitectura y simplicidad",
      description: "Modelar la solución técnica priorizando la simplicidad estructural, la separación de responsabilidades y la facilidad de mantenimiento a largo plazo.",
      principles: ["Diagramado de flujo de datos", "Selección ponderada de tecnologías", "Diseño de contratos de API e interfaces"]
    },
    {
      number: "03",
      title: "Build",
      subtitle: "Implementación rigurosa",
      description: "Escribir código tipado, modular y legible empleando herramientas modernas, estándares de la industria y pruebas continuas de funcionalidad.",
      principles: ["Tipado estricto con TypeScript", "Composición de componentes limpios", "Refactorización constante y control de versiones"]
    },
    {
      number: "04",
      title: "Deploy",
      subtitle: "Automatización hacia el cloud",
      description: "Configurar canalizaciones de integración y entrega continua (CI/CD) para que los despliegues sean predecibles, seguros y sin downtime.",
      principles: ["Pipelines en GitHub Actions", "Aprovisionamiento estático y serverless", "Configuración de SSL, dominios y variables"]
    },
    {
      number: "05",
      title: "Improve",
      subtitle: "Observabilidad y evolución",
      description: "Medir el comportamiento en entornos reales, monitorizar telemetría, aplicar parches preventivos y refinar el rendimiento según el uso.",
      principles: ["Monitoreo de logs y métricas", "Optimización de Core Web Vitals", "Iteración continua basada en hechos técnicos"]
    }
  ] as ProcessStep[],

  stack: [
    {
      category: "Desarrollo / Frontend & Mobile",
      description: "Tecnologías y lenguajes para la construcción de interfaces y lógica de cliente.",
      items: [
        { name: "TypeScript", level: "Enfoque principal", tag: "Tipado estricto" },
        { name: "JavaScript (ESNext)", level: "Sólido", tag: "Fundamentos web" },
        { name: "React", level: "Construcción regular", tag: "Componentes & Hooks" },
        { name: "Astro", level: "Arquitectura estática", tag: "Performance de islas" },
        { name: "React Native", level: "Desarrollo móvil", tag: "Local-first Apps" },
        { name: "Tailwind CSS", level: "Diseño de sistemas", tag: "Utility-first" },
      ]
    },
    {
      category: "Cloud & Hosting",
      description: "Plataformas y servicios para el alojamiento y escalado de aplicaciones modernas.",
      items: [
        { name: "Microsoft Azure", level: "Enfoque activo", tag: "Static Web Apps / App Service" },
        { name: "Amazon Web Services (AWS)", level: "Fundamentos", tag: "EC2, S3, Route53" },
        { name: "Cloudflare", level: "DNS & Edge", tag: "Caché, SSL, Zonas DNS" },
        { name: "GitHub Actions", level: "Automatización", tag: "CI/CD Workflows" },
      ]
    },
    {
      category: "Infraestructura & Operaciones",
      description: "Entornos de sistemas operativos, redes y herramientas de soporte que utilizo a diario.",
      items: [
        { name: "Linux (Debian / Ubuntu)", level: "Administración", tag: "CLI, Bash, Daemons" },
        { name: "Windows Server / IIS", level: "Soporte TI", tag: "Servicios de red, Active Directory" },
        { name: "Networking & DNS", level: "Diagnóstico", tag: "TCP/IP, Subnetting, Registros DNS" },
        { name: "Git & GitHub", level: "Control de versiones", tag: "Trunk / Feature branching" },
        { name: "Hardware & Edge Devices", level: "Práctica", tag: "Raspberry Pi, Diagnóstico físico" },
      ]
    },
    {
      category: "Automatización & Inteligencia Artificial",
      description: "Herramientas contemporáneas para acelerar flujos de trabajo e integrar capacidades inteligentes.",
      items: [
        { name: "Python", level: "Scripting & Datos", tag: "Automatización, scripts utilitarios" },
        { name: "LLM APIs & Prompt Engineering", level: "Integración", tag: "OpenAI, Gemini, Claude" },
        { name: "Modelos Locales & Ollama", level: "Experimentación", tag: "Inferencia offline" },
        { name: "AI Agents & Tool Calling", level: "Investigación", tag: "Agentes autónomos simples" },
        { name: "Bash Scripting", level: "Automatización", tag: "Crons, backups, pipelines" },
      ]
    }
  ] as StackCategory[],

  currentlyExploring: [
    { label: "Cloud Architecture & Zero-trust", tag: "Infraestructura", note: "Diseño de arquitecturas cloud con mínimos privilegios y segmentación estricta" },
    { label: "AI Agents & Function Calling", tag: "Inteligencia Artificial", note: "Interacción de modelos de lenguaje con herramientas de sistema y APIs" },
    { label: "Local LLM Inference (Ollama/ONNX)", tag: "Edge AI", note: "Ejecución de modelos open-source en hardware local sin fugas de privacidad" },
    { label: "Static Web Optimization & Edge", tag: "Frontend", note: "Tiempos de respuesta sub-100ms mediante renderizado estático y CDNs distribuidas" },
    { label: "Linux Systems Hardening", tag: "Seguridad", note: "Configuración defensiva de servidores y bastionado de servicios de red" },
    { label: "Local-First Software Architecture", tag: "Ingeniería de Software", note: "Patrones donde los datos residen en el cliente y sincronizan de forma asíncrona" }
  ]
};
