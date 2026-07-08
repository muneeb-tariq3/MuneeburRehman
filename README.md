# Muneeb Tariq — Portfolio Website

A fast, fully responsive multi-page portfolio website built with pure HTML, CSS and vanilla JavaScript. Designed for 90+ Lighthouse scores and zero dependencies.

## 📁 File Structure

```
portfolio/
├── index.html        ← Home page
├── about.html        ← About page
├── projects.html     ← Projects showcase
├── skills.html       ← Skills & expertise
├── contact.html      ← Contact form & CV download
├── style.css         ← Shared styles (all pages)
├── main.js           ← Shared JavaScript (all pages)
├── netlify.toml      ← Netlify deployment config
└── README.md
```

## 🚀 Deploy to Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com) and sign in
2. Click **"Add new site" → "Deploy manually"**
3. Drag and drop this entire `portfolio` folder
4. Done! Your site is live.

## 🚀 Deploy via GitHub + Netlify

1. Create a GitHub repository
2. Upload all files to the repo
3. Go to Netlify → "Add new site" → "Import from Git"
4. Connect your GitHub repo
5. Build command: *(leave empty)*
6. Publish directory: `.`
7. Click **Deploy**

## 📧 Contact Form Setup

The contact form is pre-configured for Formspree. To activate:
1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Create a new form — copy the form ID
4. In `contact.html`, replace the form action URL:
   ```html
   action="https://formspree.io/f/YOUR_FORM_ID"
   ```

## 📄 CV Download

Add your CV file to the root folder named `cv-muneeb-tariq.pdf` — the download button in the footer and contact page will automatically work.

## ✏️ Customization

| What | Where |
|------|-------|
| Colors / fonts | `style.css` → `:root` CSS variables |
| Name / branding | All `nav-logo` in each HTML file |
| Hero typing words | `main.js` → `words` array |
| Projects | `projects.html` |
| Skills & percentages | `skills.html` |
| Contact info | `contact.html` |

## ⚡ Performance Features

- No external JS libraries
- Google Fonts with `preconnect` for fast loading
- CSS animations (no JS heavy libs)
- Lazy IntersectionObserver for scroll animations
- Semantic HTML5 for accessibility
- Optimized cache headers via `netlify.toml`
- No large images (CSS gradients & inline SVG)
