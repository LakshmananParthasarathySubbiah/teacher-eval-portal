# Teacher Evaluation Portal

[![Version](https://img.shields.io/badge/version-0.1.0-blue.svg)](https://github.com/yourusername/teacher-eval-portal)
[![Next.js](https://img.shields.io/badge/Next.js-15.0+-black.svg)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0+-38B2AC.svg)](https://tailwindcss.com/)

A modern web application built with Next.js for managing teacher evaluations, student assessments, and exam processing. Streamline the evaluation workflow with AI-assisted grading, PDF uploads, and comprehensive dashboards.

## 🚀 What the Project Does

The Teacher Evaluation Portal is a comprehensive platform designed to digitize and streamline the process of evaluating student examinations. It provides teachers with tools to manage courses, enroll students, upload answer scripts, and perform evaluations with AI assistance.

## ✨ Key Features

- **Course Management**: Create and manage academic courses with department and semester information
- **Student Enrollment**: Add students to courses and track their evaluation status
- **Exam Processing**: Select exams for evaluation with student count tracking
- **PDF Upload System**: Secure upload and storage of student answer scripts
- **AI-Assisted Evaluation**: Automated grading with manual review capabilities
- **Evaluation Dashboard**: Real-time logs and status tracking of evaluations
- **Responsive Design**: Modern UI built with Tailwind CSS for desktop and mobile use

## 🛠️ Tech Stack

- **Framework**: Next.js 15+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4+
- **State Management**: React Hooks
- **File Handling**: PDF upload and viewing capabilities

## 📋 Prerequisites

- Node.js 18.0 or higher
- npm or yarn package manager

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/teacher-eval-portal.git
   cd teacher-eval-portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📖 Usage

### Course Management
- Navigate to `/courses` to view and add new courses
- Each course includes name, code, department, and semester information

### Student Management
- Go to `/students` to manage student enrollments
- Add students with registration numbers and course assignments
- Upload PDF answer scripts for evaluation

### Exam Evaluation
- Visit `/exams` to select an exam for evaluation
- Choose an exam to access the evaluation interface
- View student submissions, PDFs, and perform evaluations

### Dashboard
- The home page (`/`) displays recent evaluation logs and status updates

## 🏗️ Project Structure

```
teacher-eval-portal/
├── app/                    # Next.js app directory
│   ├── courses/           # Course management pages
│   ├── exams/             # Exam selection and evaluation
│   ├── students/          # Student management
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── AddCourseForm.tsx
│   ├── EvaluationPanel.tsx
│   ├── PDFViewer.tsx
│   └── ...
├── data/                  # Mock data and fixtures
├── lib/                   # Utility functions
├── public/                # Static assets
├── styles/                # Global styles
└── types/                 # TypeScript type definitions
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

For detailed contribution guidelines, see [CONTRIBUTING.md](CONTRIBUTING.md).

## 📞 Support

- **Issues**: Report bugs and request features on [GitHub Issues](https://github.com/yourusername/teacher-eval-portal/issues)
- **Discussions**: Join community discussions on [GitHub Discussions](https://github.com/yourusername/teacher-eval-portal/discussions)

## 👥 Maintainers

- **Your Name** - [your.email@example.com](mailto:your.email@example.com)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.