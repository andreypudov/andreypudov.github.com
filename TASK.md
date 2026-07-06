# **TASK.md — Migration of andreypudov‑portfolio to Next.js**

## **Purpose**
This document defines the tasks Claude must perform to migrate the existing photography portfolio website from a pure HTML/CSS implementation (`andreypudov-current`) into a modern, static‑generated Next.js application (`andreypudov-nextjs`).  
Claude must **only modify files inside `andreypudov-nextjs`**.  
The `andreypudov-current` directory serves as the reference implementation.

---

## **Project Directories**
### **`andreypudov-current`**
- Current production website  
- Pure HTML + CSS  
- Reference for layout, structure, and visual output  
- Must remain unchanged

### **`andreypudov-nextjs`**
- Work‑in‑progress Next.js migration  
- Claude must perform all changes here  
- Some initial scaffolding already exists

---

## **High‑Level Goals**
1. **Fully migrate the current website to Next.js**, preserving the exact visual appearance and structure of the existing site.  
2. **Produce a static website** using Next.js **Static Site Generation (SSG)**.  
3. **Maintain pure HTML/CSS output** — the generated HTML should be identical or extremely close to the current version.  
4. **Keep dependencies minimal** and avoid unnecessary libraries.  
5. **Ensure professional, maintainable, clean code** with clear separation of concerns.

---

## **Frontend Architecture Requirements**
### **1. Component Structure**
Claude must create a clean component hierarchy:

- **Layout components**
  - `main layout`
  - `header`
  - `footer`

- **Page‑level components**
  - Components representing full pages (e.g., gallery pages, series pages, about page)

- **Abstract UI components**
  - Components representing conceptual HTML structures (e.g., gallery grid, image tile, navigation block)

Components must be structured logically and consistently.

### **2. CSS Architecture**
- CSS must remain **hand‑written**, **modular**, and **component‑scoped**.  
- CSS files should be named after **abstract components**, not React or Next.js constructs.  
- Use `@import` for shared styles.  
- No external CSS frameworks.  
- No Tailwind, no CSS‑in‑JS, no styled‑components.

CSS must remain a **first‑class, independent layer**, not tied to React.

---

## **Static Site Generation Requirements**
### **1. Server‑Side Only Components**
All components must be **server components**.  
No client components unless absolutely required (should be zero).

### **2. Static Output**
The final Next.js build must produce a **fully static HTML website**.

### **3. Data Loading**
Photograph metadata must be loaded **server‑side**:

- Use a server‑side loader (e.g., a simple utility function)  
- Load JSON files from a data directory  
- Pages should remain simple and only reference image filenames, similar to the current template system

No client‑side fetching.

---

## **Data & Media Requirements**
### **Photographs**
- All images stored in `/media` (same structure as current site)
- Thumbnails stored in `/media/thumbnails`
- Next.js must reference these files exactly as the current site does

### **Metadata**
- JSON files in a dedicated data directory (mirroring `/data` in the current site)
- Pages should use metadata to generate galleries and series

---

## **Deployment Structure**
Claude must evaluate two deployment strategies:

### **Option 1 — Direct GitHub Pages Structure**
- Build output matches the current folder structure  
- `index.html` at root  
- All pages in their respective folders  
- Entire static site committed to `master`

### **Option 2 — Dedicated Build Branch**
- Next.js builds into a directory (e.g., `/out`)  
- That directory is pushed to a dedicated branch (e.g., `gh-pages`)  
- GitHub Pages serves that branch

Claude must investigate both approaches and choose the **cleanest, most professional** solution.

---

## **Quality Requirements**
Claude must ensure:

- Clean, readable, maintainable code  
- Professional naming conventions  
- Strict separation of concerns  
- Minimal dependencies  
- Identical visual output compared to the current site  
- Static HTML output with minimal deviations from the original

---

## **Summary of Claude’s Responsibilities**
- Work **only** in `andreypudov-nextjs`  
- Recreate the current site’s structure and appearance using Next.js  
- Implement a clean component architecture  
- Implement a clean CSS architecture  
- Load photograph metadata server‑side  
- Produce a fully static site  
- Choose a professional deployment strategy  
- Maintain highest code quality standards