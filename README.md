# Personal Portfolio

A modern, responsive portfolio website built with **Next.js** to showcase developer projects, skills, and experience.

## Live Demo
Check out the live site here: [france-portfolio.vercel.app](https://france-portfolio-1e3efvtjf-francis-nelsons-projects.vercel.app/)

---

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations/UI:** [MagicUI](https://magicui.design/)
- **Email Service:** [Resend](https://resend.com/)
- **Deployment:** [Vercel](https://vercel.com/)

---

## Features

- **Responsive Design** – Optimized for mobile, tablet, and desktop.
- **Modern UI** – Interactive components and smooth animations using MagicUI.
- **Contact Form** – Fully functional email handling via Resend API.
- **Fast Performance** – Optimized images and server-side rendering with Next.js.

---

## Getting Started

### 1. Prerequisites
Ensure you have [Node.js](https://nodejs.org/) installed. This project uses **pnpm** as the package manager.

### 2. Clone the Repository
```bash
git clone https://github.com/fransheeshco/portfolio
cd portfolio
```


### 3. Install Dependencies
```bash
pnpm install
```

### 4. Set Up Environment Variables
Create a .env.local file inside the directory and add your credentials:

RESEND_API_KEY=your_resend_api_key_here
RESEND_EMAIL=your_email_here

### 5. Run the Development Server
```bash
pnpm run dev
```

### Deployment
This project is deployed using Vercel for seamless CI/CD.

Automatic Deployments: Every push to the main branch triggers a new build.