# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website template with the following structure:
- Single-page portfolio site with dark/light theme support
- Contact integration via email and WhatsApp Business
- Responsive design with modern CSS Grid and Flexbox
- No build process or dependencies required - pure HTML/CSS/JavaScript

## Development Commands

### Local Preview
Run a local server using one of these methods:

```bash
# Python 3
python3 -m http.server 3000

# Node.js (using npx)
npx serve -l 3000
```

Then open `http://localhost:3000` in your browser.

## Architecture

### Core Files
- **index.html**: Main portfolio page with sections for About, Skills, Projects, and Contact
- **styles.css**: Modern styling with CSS variables for theming (light/dark mode)
- **script.js**: Client-side functionality including:
  - Theme toggle persistence via localStorage
  - Contact modal for email/WhatsApp selection
  - Dynamic year updates
  - Smooth scrolling and animations

### Contact Configuration
The contact system uses a modal selector between Email and WhatsApp. Configuration is in `script.js`:

```javascript
const CONTACT = {
  email: 'your-email@example.com',
  whatsapp: '905551112233', // Country code + number, no spaces
  waTextTr: 'Merhaba! Web sitenizden ulaşıyorum...',
  waTextEn: 'Hello! I am reaching out from your website...'
}
```

### Theme System
- CSS variables in `:root` and `[data-theme="dark"]` selectors
- Theme preference saved to localStorage
- Automatic system preference detection as fallback

## Customization Points

1. **Personal Information**: Update all placeholder text in `index.html`
2. **Contact Details**: Modify the `CONTACT` object in `script.js`
3. **Colors/Branding**: Adjust CSS variables in `styles.css` root selectors
4. **Optional Assets**: Add `cv.pdf`, `favicon.ico`, and `og-image.png` (1200×630) to root

## Deployment Notes

The site is deployment-ready for:
- **GitHub Pages**: Push to repo, enable Pages from root
- **Netlify**: Drag and drop the folder
- **Vercel**: Import as "Other" framework

No build process needed - all files are served as-is.