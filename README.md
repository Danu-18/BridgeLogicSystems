# Shadab Agency - Digital Solutions

A modern, responsive digital agency website built with Next.js and React. This project showcases a professional landing page with smooth animations, modern UI components, and optimized performance for static hosting.

## 🚀 Tech Stack

- **Framework**: Next.js 16.1.6
- **Language**: JavaScript/React
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Static export for Apache hosting

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Smooth Animations**: Engaging micro-interactions and page transitions
- **Modern UI**: Clean, professional design with gradient effects
- **Optimized Performance**: Static site generation for fast loading
- **SEO Friendly**: Built with semantic HTML and proper meta tags
- **Apache Ready**: Configured for traditional shared hosting

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd shadab-web
```

2. Install dependencies:
```bash
npm install
```

## 🏃‍♂️ Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Static Build & Deployment

This project is configured for static export and deployment on Apache servers (like Namecheap shared hosting).

### Build for Production

1. Build the static files:
```bash
npm run build
```

2. The static files will be generated in the `out/` directory.

### Deploy to Apache Hosting

1. Upload the contents of the `out/` directory to your web server's public folder (usually `public_html/` or `www/`)

2. The `.htaccess` file is automatically included and will handle:
   - Client-side routing
   - URL rewriting for Next.js routes
   - Proper MIME types
   - Asset compression
   - Security headers

3. Your site should be accessible at your domain!

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build static export for production
- `npm run start` - Start production server (for testing)
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.js            # Home page
│   ├── about/page.js      # About page
│   ├── contact/page.js    # Contact page
│   ├── services/page.js   # Services page
│   ├── blog/page.js       # Blog page
│   └── testimonials/page.js # Testimonials page
├── components/            # Reusable React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── features/landing/ # Landing page sections
│   └── ui/               # UI components
├── styles/               # Global styles and responsive utilities
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── constants/           # Application constants
```

## 🎨 Design System

The project uses a modern design system with:
- **Color Scheme**: Dark theme with purple and pink accents
- **Typography**: Inter font family for modern readability
- **Spacing**: Consistent spacing using Tailwind CSS utilities
- **Animations**: Subtle micro-interactions using Framer Motion

## 🔧 Configuration

### Next.js Configuration

The `next.config.js` is optimized for static export:
- `output: 'export'` - Generates static HTML files
- `images: { unoptimized: true }` - Disables image optimization for static hosting
- `reactCompiler: true` - Enables React compiler optimization

### Apache Configuration

The `.htaccess` file in the `public/` directory handles:
- URL rewriting for client-side routing
- Asset compression and caching
- Security headers
- MIME type configuration

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and proprietary.

## 🤝 Support

For support or questions about this project, please contact the development team.

---

**Built with ❤️ using Next.js and modern web technologies**
