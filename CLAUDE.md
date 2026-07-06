# **CLAUDE.md — andreypudov‑portfolio**

## **Overview**
`andreypudov-portfolio` is the source repository for **Andrey Pudov’s photography portfolio**, hosted at **[https://andreypudov.com](https://andreypudov.com)**.
The project contains both the **photographic works** and the **static website code**, structured identically to how the site is deployed on GitHub Pages (`master` branch).

The core idea of the project is to demonstrate that a **production‑ready, performant, visually rich portfolio website** can be built using **pure HTML and CSS**, without JavaScript frameworks, build systems, or external UI libraries.

---

## **Key Concepts**
- **Pure HTML/CSS architecture** — The entire site layout, responsiveness, and component structure are implemented using standard HTML and CSS only.
- **Python‑based static site generator** — A custom engine builds all pages from templates and data files.
- **Photography‑first repository** — All media assets are stored directly in the repo, alongside metadata and generated thumbnails.
- **Zero‑dependency frontend** — No JavaScript is used except for Google Analytics and minimal utility scripts.
- **Static hosting** — The final output is served via GitHub Pages.

---

## **Repository Structure**
### **`/engine` — Python Static Site Generator**
The Python engine is responsible for transforming templates and data into final HTML pages.
Core responsibilities include:

- Parsing template files from `/templates`
- Loading photograph metadata from `/data`
- Generating pages with correct layout and media references
- Producing resized thumbnails for lazy loading (`/media/thumbnails`)
- Building `sitemap.xml`
- Ensuring the final output matches the GitHub Pages deployment structure

The engine enables a workflow similar to static site generators (Jekyll, Hugo) but is intentionally minimal and custom‑built.

---

### **`/templates` — HTML‑Extended Templates**
Templates are HTML files augmented with lightweight directives that instruct the Python engine how to:

- Fetch photograph data
- Insert media assets
- Build galleries and series
- Apply layout rules
- Generate navigation and shared components

This system keeps the final HTML clean while allowing flexible page generation.

---

### **`/media` — Full‑Resolution Photographs**
All original photographs are stored in `/media`.
This includes:

- Full‑resolution images
- Series‑specific folders
- Supporting media (graphics, icons, etc.)

#### **`/media/thumbnails`**
To support lazy loading and reduce bandwidth usage, the engine generates resized thumbnail versions of all images.  
These thumbnails are referenced in the final HTML using standard `loading="lazy"` attributes.

---

### **`/data` — Metadata and Structured Information**
The `/data` directory contains JSON/YAML‑like files describing:

- Photograph metadata
- Additional media information

The engine uses these files to build galleries and maintain consistent ordering and naming.

---

### **`/services` — Go‑Based Web Services**
The repository includes optional Go micro‑services used by specific sub‑paths:

- `/ip` — Returns visitor IP information
- `/time` — Returns server time

These services are standalone and demonstrate backend capability, though the main portfolio site remains fully static.

---

## **Frontend Architecture**
### **Pure HTML**
All pages are generated as static HTML files.
There is **no JavaScript framework**, no DOM manipulation, and no dynamic rendering.

### **Pure CSS**
The entire layout is implemented using handcrafted CSS:

- Responsive grid layouts
- Typography and spacing systems
- Component‑level styles
- Shared styles imported via `@import`
- No external CSS libraries (Bootstrap, Tailwind, etc.)

This approach highlights the ability to produce a polished, modern website using only native web technologies.

---

## **Sitemap Generation**
The Python engine automatically generates `sitemap.xml` based on:

- Available pages
- Media collections
- Template output

This ensures correct indexing by search engines.

---

## **Deployment**
The repository is structured so that the generated site can be deployed directly via GitHub Pages:

- `master` branch contains the final static output
- The engine can be run locally to regenerate the site
- No build tools or bundlers are required

---

## **Project Goals**
- Showcase professional photography in a clean, minimalistic interface
- Demonstrate mastery of pure HTML/CSS without dependencies
- Provide a transparent, reproducible static site generation workflow
- Maintain a repository that contains **both code and artistic work** in a unified structure