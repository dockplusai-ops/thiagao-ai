# Thiagao A.I - Enterprise AI Solutions

Professional portfolio website for Thiago Roberts showcasing enterprise AI solutions, automation services, and business ventures.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
  components/
    Navigation.jsx    # Fixed navigation with smooth scroll
    Hero.jsx         # Hero section with photo and CTA
    About.jsx        # About section
    Services.jsx     # Core services grid
    DockPlus.jsx     # DockPlus AI Solutions showcase
    Portfolio.jsx    # Portfolio projects grid
    Ventures.jsx     # Business ventures grid
    Contact.jsx      # Contact form with validation
    Terminal.jsx     # Animated terminal component
  App.jsx            # Main app component
  main.jsx           # React entry point
  index.css          # Tailwind CSS imports
```

## 🎨 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Lucide React** - Icons
- **JetBrains Mono** - Terminal font

## 🐳 Docker Deployment

### Build and Run with Docker

```bash
# Build the Docker image
docker build -t thiagao-ai .

# Run the container
docker run -p 3000:80 thiagao-ai
```

### Using Docker Compose

```bash
# Build and start
docker-compose up -d

# View logs
docker-compose logs -f

# Stop
docker-compose down
```

The application will be available at `http://localhost:3000`

## 🌐 Other Deployment Options

### Vercel (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. Follow the prompts and you're done!

### Netlify

1. **Option 1**: Drag and drop the `dist` folder to [netlify.com/drop](https://app.netlify.com/drop)

2. **Option 2**: Connect your GitHub repository:
   - Go to [netlify.com](https://app.netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Build command: `npm run build`
   - Publish directory: `dist`

## 📝 Git Setup

```bash
# Initialize repository (if not already done)
git init

# Add remote repository
git remote add origin <YOUR_REPO_URL>

# Push to repository
git push -u origin main
```

## ✅ Pre-Deployment Checklist

- [x] Smooth scroll navigation working
- [x] All navigation links functional
- [x] Mobile responsive design
- [x] Form validation working
- [x] SEO meta tags added
- [x] Footer with copyright info
- [x] Docker configuration ready
- [x] Nginx configuration for production

## 🔧 Future Enhancements

- [ ] Connect contact form to email service (EmailJS, Formspree)
- [ ] Add Google Analytics
- [ ] Add real professional photo
- [ ] Add actual project screenshots
- [ ] Implement terminal interactivity (optional)
- [ ] Add custom favicon

## 📝 Environment Variables

Create a `.env` file for future API keys:

```
VITE_API_KEY=your_api_key_here
VITE_EMAIL_SERVICE_API=your_email_service_api_key
```

## 🎯 Features

- ✅ Single-page application with smooth scrolling
- ✅ Fully responsive design
- ✅ Professional corporate aesthetic
- ✅ Contact form with validation
- ✅ Portfolio showcase
- ✅ Business ventures overview
- ✅ Clean, modern UI
- ✅ Docker-ready for production deployment

## 📄 License

© 2024 Thiagao A.I - All rights reserved

