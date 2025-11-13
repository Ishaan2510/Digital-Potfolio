# 🎨 Digital Portfolio - Ishaan Goswami

A modern, responsive digital portfolio showcasing my journey as a Computer Science and Data Science student, featuring interactive sections, project highlights, and professional achievements.

## ✨ Features

- 📱 **Fully Responsive Design** - Optimized for all devices
- 🎯 **Smooth Navigation** - Seamless scroll with active section tracking
- 📄 **Resume PDF Viewer** - Direct access to downloadable resume
- 📧 **Working Contact Form** - Integrated with Formspree for email notifications
- 💼 **Project Showcase** - Detailed project descriptions and technologies
- 🎓 **Education Timeline** - Dual degree programs highlighted
- 💻 **Experience Section** - Professional internship experiences
- 🏆 **Competitive Programming** - Achievements and rankings
- 📊 **SWOT Analysis** - Professional self-assessment
- 🎨 **Modern UI** - Built with Tailwind CSS

## 🚀 Running Locally

### Prerequisites

Make sure you have **Node.js** installed:
- Download from: [https://nodejs.org/](https://nodejs.org/)
- Recommended: Node 18+ or Node 20+

Check if installed:
```powershell
node --version
npm --version
```

### Installation & Setup

1. **Clone the repository**
   ```powershell
   git clone https://github.com/Ishaan2510/Digital-Potfolio.git
   cd Digital-Potfolio
   ```

2. **Install dependencies**
   ```powershell
   npm install
   ```

3. **Run the development server**
   ```powershell
   npm run dev
   ```

4. **Open your browser**
   
   Navigate to: `http://localhost:3000`

### Build for Production

```powershell
npm run build
```

The optimized build will be in the `dist/` folder.

### Preview Production Build

```powershell
npm run preview
```

## 🛠️ Built With

- **React 19** - Modern UI framework
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS (via CDN)
- **Font Awesome** - Icon library
- **Formspree** - Contact form backend

## 📁 Project Structure

```
Digital-Potfolio/
├── components/              # React components
│   ├── Header.tsx          # Profile header with photo and links
│   ├── Navbar.tsx          # Fixed navigation bar
│   ├── Contact.tsx         # Contact form with Formspree
│   ├── ResumeSections.tsx  # Education, Experience, Projects
│   ├── ContentSections.tsx # About, Philosophy, Testimonials
│   └── ...
├── assets/                 # Static assets
│   └── profile.ts          # Profile photo (base64)
├── public/                 # Public files
│   └── My_resume.pdf       # Resume PDF
├── data.ts                 # Portfolio content and data
├── types.ts                # TypeScript type definitions
├── App.tsx                 # Main application component
├── index.tsx               # Application entry point
└── vite.config.ts          # Vite configuration
```

## 🎨 Customizing Content

### Update Personal Information

Edit `data.ts` to modify:
- Personal details (name, tagline, contact info)
- Education and degrees
- Work experience
- Projects and descriptions
- Technical skills
- Competitive programming achievements
- Social media links

### Update SWOT Analysis

Edit `components/PlaceholderSections.tsx` to customize your:
- Strengths
- Weaknesses
- Opportunities
- Threats

### Replace Profile Photo

Your photo should be converted to base64 and placed in `assets/profile.ts`:

```typescript
export const profilePhoto = `data:image/jpeg;base64,YOUR_BASE64_STRING`;
```

### Update Resume PDF

Replace `public/My_resume.pdf` with your latest resume.

## 🌐 Deployment

<!-- Deployment link will be added here after deployment -->
**Live Demo:** Coming soon!

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"
5. Your portfolio will be live in minutes!

### Other Deployment Options

- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Enable in repository settings
- **Cloudflare Pages** - Connect your GitHub repo

## 📧 Contact Form Setup

The contact form uses **Formspree** (free tier):
- 50 submissions/month
- Email notifications to: ishaangoswami735@gmail.com
- Spam protection included
- Already configured and ready to use!

## ❌ Troubleshooting

### Port 3000 already in use?
```powershell
# Change port in vite.config.ts or kill the process
```

### Dependencies not installing?
```powershell
npm cache clean --force
npm install
```

### Build errors?
```powershell
Remove-Item -Recurse -Force node_modules
npm install
```

## 📝 License

This is a personal portfolio project.

## 👤 Author

**Ishaan Goswami**

- 🎓 B.Tech in Computer Science & Engineering - Pandit Deendayal Energy University
- 🎓 B.S. in Data Science - IIT Madras
- 💼 Aspiring Data Analyst/Scientist
- 📧 Email: [ishaangoswami735@gmail.com](mailto:ishaangoswami735@gmail.com)
- 💼 LinkedIn: [ishaan-goswami](https://www.linkedin.com/in/ishaan-goswami-796814282/)
- 🐙 GitHub: [@Ishaan2510](https://github.com/Ishaan2510)
- 📱 Phone: +91 9265311083

---

## 🎯 Project Goals

This portfolio demonstrates:
- Modern web development practices with React and TypeScript
- Responsive design principles
- Integration with third-party services
- Clean code architecture
- Professional presentation of technical skills

---

**⭐ If you find this portfolio helpful, please consider giving it a star!**

**Made with ❤️ by Ishaan Goswami**

