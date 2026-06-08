# AISecurityPulse Project Page

A project page for **AISecurityPulse: Automating Security Issue Reports for AI
Models** (ECML PKDD 2026, Demo Track), built on the
[Nerfies project page template](https://github.com/nerfies/nerfies.github.io)
(Bulma). No build step - plain HTML/CSS/JS.

```
website/
├── index.html
└── static/
    ├── css/
    │   ├── bulma.min.css            # vendored from the Nerfies template
    │   ├── bulma-carousel.min.css
    │   ├── bulma-slider.min.css
    │   ├── fontawesome.all.min.css
    │   └── index.css                # template styles + AISecurityPulse additions
    ├── js/
    │   ├── fontawesome.all.min.js   # renders the icons (SVG framework)
    │   ├── bulma-carousel.min.js
    │   ├── bulma-slider.min.js
    │   └── index.js                 # navbar toggle + BibTeX copy button
    ├── pdf/                         # the paper PDF
    └── images/
        ├── shield.svg               # logo / favicon
        ├── fig1-workflow.png        # Figure 1 (stakeholder workflow)
        ├── fig2-notification.jpg    # Figure 2 (provider notification)
        └── providers/               # provider logos
```

The page is self-contained except for two CDN resources the Nerfies template also
uses: **jQuery** and **academicons** (and Google Fonts). These load fine on
GitHub Pages but require an internet connection.

## Preview locally

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages (new repository - recommended)

1. Create a new repo, e.g. `AISecurityPulse-page` (or `<org>.github.io` for a root URL).
2. Push **the contents of this `website/` folder** to the repo root:

   ```bash
   cd website
   git init -b main
   git add .
   git commit -m "Add AISecurityPulse project page"
   git remote add origin https://github.com/<you>/AISecurityPulse-page.git
   git push -u origin main
   ```

3. On GitHub: **Settings → Pages → Source: Deploy from a branch**, pick `main` / `/ (root)`, save.
4. Live at `https://<you>.github.io/AISecurityPulse-page/` within a minute.

## Things to update before publishing

- Author `href="#"` links in `index.html` - point each to a homepage / Google Scholar.
- The corresponding author (Qiongkai Xu) - optionally add a `mailto:` link / email.
- The BibTeX block - finalise once the proceedings citation is available.

## Attribution

This page borrows the source code of the
[Nerfies project page](https://github.com/nerfies/nerfies.github.io), licensed
under [CC BY-SA 4.0](http://creativecommons.org/licenses/by-sa/4.0/). The
attribution link is kept in the footer as requested by the template authors.
```
