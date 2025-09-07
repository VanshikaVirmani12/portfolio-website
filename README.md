# Personal Portfolio Website

A modern, responsive portfolio website built with React frontend and Node.js backend. Features a beautiful UI with smooth animations, project showcase, skills display, and contact form.

## 🚀 Features

### Frontend
- **Modern React UI** with Framer Motion animations
- **Responsive Design** that works on all devices
- **Interactive Components** with smooth transitions
- **Project Showcase** with filtering and categorization
- **Skills Visualization** with progress bars
- **Contact Form** with validation
- **Dark Theme** with gradient accents
- **Smooth Scrolling** and navigation

### Backend
- **Express.js API** with RESTful endpoints
- **CORS enabled** for cross-origin requests
- **Rate limiting** for security
- **Helmet.js** for security headers
- **Contact form handling** with validation
- **Modular structure** for easy maintenance

## 🛠️ Tech Stack

### Frontend
- React 18
- React Router DOM
- Framer Motion (animations)
- Styled Components
- Axios (HTTP client)
- React Icons
- React Typed (typing animation)

### Backend
- Node.js
- Express.js
- CORS
- Helmet
- Express Rate Limit
- Nodemailer (for contact form)

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-website
   ```

2. **Install all dependencies**
   ```bash
   npm run install-all
   ```

3. **Set up environment variables**
   ```bash
   cd backend
   cp env.example .env
   ```
   
   Edit the `.env` file with your configuration:
   ```env
   PORT=5000
   FRONTEND_URL=http://localhost:3000
   
   # Email configuration (optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Start the development servers**
   ```bash
   npm run dev
   ```

   This will start both the backend (port 5001) and frontend (port 3000) servers.

## 🎨 Customization

### Personal Information
Edit the portfolio data in `backend/server.js`:

```javascript
const portfolioData = {
  personalInfo: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@example.com",
    // ... other personal info
  },
  // ... other data
};
```

### Styling
- Colors and themes can be customized in the styled components
- The main color scheme uses blue (`#3b82f6`) and purple (`#8b5cf6`) gradients
- Font family is set to Inter (Google Fonts)

### Projects
Add your projects in the `projects` array in `backend/server.js`:

```javascript
projects: [
  {
    id: 1,
    title: "Your Project",
    description: "Project description",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/yourusername/project",
    liveUrl: "https://your-project.com",
    featured: true
  }
]
```

## 📁 Project Structure

```
portfolio-website/
├── backend/
│   ├── server.js          # Main server file
│   ├── package.json       # Backend dependencies
│   └── env.example        # Environment variables template
├── frontend/
│   ├── public/
│   │   └── index.html     # HTML template
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── Header.js
│   │   │   ├── Hero.js
│   │   │   ├── About.js
│   │   │   ├── Skills.js
│   │   │   ├── Projects.js
│   │   │   ├── Experience.js
│   │   │   ├── Contact.js
│   │   │   ├── Footer.js
│   │   │   └── ScrollToTop.js
│   │   ├── App.js         # Main App component
│   │   ├── index.js       # React entry point
│   │   └── index.css      # Global styles
│   └── package.json       # Frontend dependencies
├── package.json           # Root package.json
└── README.md             # This file
```

## 🚀 Deployment

### Frontend (Netlify/Vercel)
1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```

2. Deploy the `build` folder to your hosting service

### Backend (Heroku/Railway)
1. Set environment variables in your hosting platform
2. Deploy the backend folder
3. Update the frontend API calls to use your production backend URL

## 📝 API Endpoints

- `GET /api/portfolio` - Get all portfolio data
- `GET /api/portfolio/personal` - Get personal information
- `GET /api/portfolio/skills` - Get skills data
- `GET /api/portfolio/projects` - Get all projects
- `GET /api/portfolio/projects/featured` - Get featured projects
- `GET /api/portfolio/experience` - Get work experience
- `GET /api/portfolio/education` - Get education data
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

## 🎯 Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly navigation

### Animations
- Smooth page transitions
- Scroll-triggered animations
- Hover effects
- Loading animations

### Performance
- Optimized images
- Lazy loading
- Code splitting
- Efficient re-renders

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons from React Icons
- Fonts from Google Fonts
- Inspiration from modern portfolio designs

---

**Happy coding!** 🎉
