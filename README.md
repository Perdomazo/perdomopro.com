# PerdomoPro — Landing Page & Digital Lab V1

> **Construyo tecnología entre el software y la infraestructura.**  
> Marca personal y laboratorio de ingeniería de **Adrián Perdomo** (`https://perdomopro.com`).

---

## 1. Qué es PerdomoPro

**PerdomoPro** es la identidad digital y laboratorio técnico de **Adrián Perdomo**, estudiante de Ingeniería en Computación (Universidad de Guadalajara) y profesional de TI. 

El sitio representa la intersección honesta y práctica entre:
* **Software:** Desarrollo web y móvil moderno con TypeScript, React y arquitecturas limpias.
* **Infraestructura:** Servidores Linux y Windows, redes, diagnóstico y resolución de incidentes reales.
* **Cloud:** Alojamiento optimizado, migración de entornos legacy y automatización con Azure y AWS.
* **Automatización & IA:** Pipelines CI/CD, scripting en Bash/Python, integración de LLMs y agentes de asistencia.

Diseñado con un enfoque editorial contemporáneo (inspirado en la sobriedad suiza y minimalismo tecnológico de alta gama), el sitio privilegia el espacio negativo, la jerarquía tipográfica rigurosa y un rendimiento extremo sin artificios visuales genéricos ("AI slop").

---

## 2. Stack Tecnológico

| Capa | Tecnología | Propósito |
| :--- | :--- | :--- |
| **Framework** | React 19 + Vite 8 | Compilación estática ultrarrápida (`dist/`) |
| **Lenguaje** | TypeScript | Tipado estricto de extremo a extremo |
| **Estilos** | Tailwind CSS v4 | Estilizado utility-first con variables semánticas |
| **Animaciones** | Motion + Lenis | Transiciones suaves y scroll suave con soporte para `prefers-reduced-motion` |
| **Iconografía** | Lucide React | Iconos vectoriales limpios y consistentes |
| **Hosting & CDN**| Azure Static Web Apps | Distribución global en el borde con SSL automático |
| **CI/CD** | GitHub Actions | Despliegue continuo validado en cada push |

---

## 3. Requisitos de Entorno

* **Node.js**: versión 18.x, 20.x o superior.
* **npm**: versión 9.x o superior (o `pnpm` / `yarn`).
* Navegador moderno compatible con ES Modules y CSS moderno.

---

## 4. Instalación

Clona el repositorio e instala las dependencias:

```bash
# Clonar el repositorio
git clone https://github.com/adrianperdomo/perdomopro.git
cd perdomopro

# Instalar dependencias
npm install
```

---

## 5. Desarrollo Local

Para iniciar el servidor de desarrollo local con recarga en caliente en el puerto 3000:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

---

## 6. Compilación para Producción (Build)

Para generar la compilación estática optimizada para producción:

```bash
npm run build
```

El proceso compila los assets y genera el directorio estático:

```text
dist/
├── index.html
├── favicon.svg
├── robots.txt
├── sitemap.xml
└── assets/
    ├── index-*.js
    └── index-*.css
```

---

## 7. Despliegue en Azure Static Web Apps

El proyecto cuenta con configuración nativa para **Azure Static Web Apps**:
* `staticwebapp.config.json`: Define cabeceras de seguridad HTTP, directivas de fallback para Single Page Applications y tipos MIME.
* `.github/workflows/azure-static-web-apps.yml`: Workflow listo para despliegue automatizado en cada push a la rama `main`.

### Pasos para conectar con Azure:
1. En el [Azure Portal](https://portal.azure.com), crea un nuevo recurso **Static Web App**.
2. Conecta tu repositorio de GitHub `adrianperdomo/perdomopro`.
3. Selecciona la configuración de build predefinida:
   * **App location:** `/`
   * **Api location:** *(dejar vacío para V1)*
   * **Output location:** `dist`
4. Azure generará el secreto `AZURE_STATIC_WEB_APPS_API_TOKEN` en los GitHub Secrets de tu repositorio. Cada push desplegará automáticamente.

---

## 8. Configuración del Dominio Personalizado (`perdomopro.com`)

1. En el panel de Azure Static Web App, ve a **Custom domains** > **Add**.
2. Ingresa `perdomopro.com` y `www.perdomopro.com`.
3. En tu proveedor de DNS (por ejemplo Cloudflare o Namecheap), configura:
   * **CNAME:** `www` apuntando a `tu-app-name.azurestaticapps.net`.
   * **Apex / ALIAS / ANAME:** `@` apuntando al hostname provisto por Azure, o añade el registro TXT de validación según las instrucciones del portal.
4. Azure emitirá y renovará automáticamente el certificado SSL gratuito.

---

## 9. Estructura del Proyecto

```text
perdomopro/
├── .github/
│   └── workflows/
│       └── azure-static-web-apps.yml   # Workflow CI/CD de GitHub Actions
├── public/
│   ├── favicon.svg                    # Monograma arquitectónico minimalista
│   ├── robots.txt                     # Configuración para rastreadores web
│   └── sitemap.xml                    # Mapa del sitio canónico
├── src/
│   ├── components/
│   │   ├── Navbar.tsx                 # Barra de navegación con reloj de Guadalajara
│   │   ├── Hero.tsx                   # Hero editorial con coordenadas y pilares
│   │   ├── About.tsx                  # Trayectoria: UdeG, Soporte TI y Desarrollo
│   │   ├── WorkAreas.tsx              # Bloques de especialización interactivos
│   │   ├── Projects.tsx               # Proyectos seleccionados y esquemas técnicos
│   │   ├── ProjectModal.tsx           # Ficha técnica / arquitectura en modal
│   │   ├── Process.tsx                # Metodología (Understand -> Improve)
│   │   ├── Stack.tsx                  # Ecosistema tecnológico categorizado y filtrable
│   │   ├── Currently.tsx              # Laboratorio en vivo (exploraciones actuales)
│   │   ├── Contact.tsx                # Redactor de consulta directa y copia de email
│   │   ├── Footer.tsx                 # Pie de página y créditos
│   │   └── SmoothScroll.tsx           # Integración Lenis + prefers-reduced-motion
│   ├── config/
│   │   └── site.ts                    # FUENTE CENTRALIZADA DE CONTENIDO Y DATOS
│   ├── App.tsx                        # Componente raíz ensayado modularmente
│   ├── index.css                      # Tailwind v4 + variables semánticas + scrollbar
│   └── main.tsx                       # Punto de entrada React
├── staticwebapp.config.json           # Headers de seguridad y reglas de Azure SWA
├── index.html                         # Metadatos SEO, OpenGraph y JSON-LD Schema
├── package.json
└── README.md
```

---

## 10. Cómo Añadir o Editar Proyectos

Toda la información se gestiona desde un único archivo: **`src/config/site.ts`**.

Para agregar un nuevo proyecto, añade un objeto al arreglo `projects`:

```ts
{
  id: "nuevo-proyecto",
  number: "05",
  title: "Nombre del Proyecto",
  subtitle: "Subtítulo descriptivo de la solución",
  category: "Cloud & Infrastructure",
  status: "Completado", // 'Producción' | 'Completado' | 'En desarrollo' | 'Investigación / Académico'
  year: "2026",
  description: "Descripción editorial del proyecto...",
  context: "Contexto técnico y motivación...",
  architectureDetails: {
    problem: "El problema técnico específico...",
    solution: "La arquitectura implementada...",
    impact: "El resultado medible o beneficio alcanzado...",
    highlights: [
      "Característica clave 1",
      "Característica clave 2"
    ]
  },
  technologies: ["Azure", "TypeScript", "Linux"],
  links: {
    demo: "https://ejemplo.com",
    github: "https://github.com/adrianperdomo/ejemplo"
  }
}
```

El sitio renderizará automáticamente el nuevo proyecto en la sección y en la ficha técnica interactiva.

---

## 11. Cómo Modificar Datos Personales y Enlaces

En `src/config/site.ts`, actualiza el objeto `siteConfig`:

```ts
export const siteConfig = {
  name: "Adrián Perdomo",
  brand: "PerdomoPro",
  tagline: "Construyo tecnología entre el software y la infraestructura.",
  location: "Guadalajara, Jalisco, México",
  email: "ajvpl15@gmail.com",
  github: "https://github.com/adrianperdomo",
  linkedin: "https://www.linkedin.com/in/adrian-perdomo",
  // ...
};
```

---

## 12. Accesibilidad & Movimiento Reducido

El sitio respeta la configuración del sistema del usuario:
* Si el usuario tiene activo **`prefers-reduced-motion: reduce`**, Lenis desactiva el scroll inercial y todas las animaciones se ejecutan instantáneamente.
* Elementos interactivos cuentan con `focus-visible` claramente delineado para navegación fluida con teclado.
* Contrastes de color calibrados para cumplir con WCAG AA.

---

## Licencia & Créditos

© 2026 Adrián Perdomo. Desarrollado con esmero técnico y diseño editorial.
