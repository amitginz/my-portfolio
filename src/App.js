import React from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Shield, Server } from 'lucide-react';

const Portfolio = () => {
    const projects = [
        {
            title: "Music Streaming Platform",
            description: "מערכת הזרמת מוזיקה מלאה המבוססת Node.js, פרוסה על Render.",
            tech: ["Node.js", "JavaScript", "REST API", "Render"],
            link: "https://github.com/amitginz/MusicLibrary-project" // הוסף כאן לינק ל-GitHub
        },
        {
            title: "Java Chat System",
            description: "מערכת צ'אט מרובת משתמשים המבוססת על Socket Programming (TCP/UDP).",
            tech: ["Java", "Networking", "Concurrency"],
            link: "https://github.com/shlomoPearl/Final-Project"
        },
        {
            title: "Gadash System",
            description: "מערכת לניהול נתונים חקלאיים עם אינטגרציה ל-Telegram ו-Google Sheets.",
            tech: ["Python", "Flask", "APIs", "Automation"],
            link: "https://github.com/amitginz/gadash_bot"
        }
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
            {/* Hero Section */}
            <header className="bg-slate-900 text-white py-20 px-6 text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Amit Ginzberg</h1>
                <p className="text-xl text-slate-400 mb-8">Computer Science Student @ Tel-Hai College</p>

                {/* קונטיינר מרכזי שמיישר את הכפתור והאייקונים */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-8">

                    {/* כפתור הורדת קורות חיים מעוצב */}
                    <a
                        href="/Amit_Ginzberg_CV.pdf"
                        download
                        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-lg hover:shadow-blue-500/20 flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="顺4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download CV
                    </a>

                    {/* קבוצת אייקונים */}
                    <div className="flex gap-6 items-center border-t md:border-t-0 md:border-r border-slate-700 pt-6 md:pt-0 md:pr-8">
                        <a href="https://github.com/amitginz" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Github size={28} />
                        </a>
                        <a href="https://linkedin.com/in/amitginz" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
                            <Linkedin size={28} />
                        </a>
                        <a href="mailto:amit@example.com" className="text-slate-400 hover:text-white transition-colors">
                            <Mail size={28} />
                        </a>
                    </div>
                </div>
            </header>
            {/* Experience Section */}
            <section className="max-w-6xl mx-auto py-16 px-6 bg-slate-50">
                <div className="text-right mb-12">
                    <h2 className="text-3xl font-bold border-b-4 border-blue-500 inline-block pb-2">ניסיון ורקע</h2>
                </div>

                <div className="space-y-8 rtl">
                    {/* Wix */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-blue-600">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-slate-500 text-sm">2025 - היום</span>
                            <h3 className="text-xl font-bold">Security Guard @ Wix</h3>
                        </div>
                        <p className="text-slate-600">עבודה בסביבת הייטק גלובלית, הבנה של תרבות ארגונית טכנולוגית ושמירה על נהלי אבטחה בסטנדרטים גבוהים.</p>
                    </div>

                    {/* IDF */}
                    <div className="bg-white p-6 rounded-xl shadow-sm border-r-4 border-green-600">
                        <div className="flex justify-between items-start mb-2">
                            <span className="text-slate-500 text-sm">שירות קרבי</span>
                            <h3 className="text-xl font-bold">מפקד ולוחם בחטיבה 188, חיל השריון</h3>
                        </div>
                        <p className="text-slate-600">פיקוד על צוות בסביבה מבצעית ותחת לחץ, עבודת צוות מורכבת, אחריות על מערכות טכנולוגיות וקבלת החלטות בזמן אמת.</p>
                    </div>
                </div>
            </section>
            {/* Projects Section */}
            <main className="max-w-6xl mx-auto py-16 px-6">
                <h2 className="text-3xl font-bold mb-12 border-b-2 border-blue-500 inline-block">Projects</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-slate-100 hover:-translate-y-1 group"
                        >
                            <h3 className="text-xl font-bold mb-3 flex items-center gap-2 group-hover:text-blue-600 transition-colors">
                                {project.title}
                                <ExternalLink size={16} className="text-slate-400 group-hover:text-blue-400" />
                            </h3>
                            <p className="text-slate-600 mb-4 h-20">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t, i) => (
                                    <span key={i} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </a>
                    ))}
                </div>

                {/* Professional Skills */}
                <section className="max-w-6xl mx-auto py-16 px-6">
                    <div className="text-right mb-12">
                        <h2 className="text-3xl font-bold border-b-4 border-blue-500 inline-block pb-2">כישורים טכניים</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 rtl">
                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-blue-600 mb-4">שפות תכנות</h4>
                            <div className="flex flex-wrap gap-2">
                                {['C/C++', 'Java', 'Python', 'JavaScript'].map(skill => (
                                    <span key={skill} className="bg-slate-100 px-3 py-1 rounded text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-blue-600 mb-4">טכנולוגיות וכלים</h4>
                            <div className="flex flex-wrap gap-2">
                                {['Node.js', 'Flask', 'REST APIs', 'SQL/NoSQL', 'Git', 'CLI'].map(skill => (
                                    <span key={skill} className="bg-slate-100 px-3 py-1 rounded text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>

                        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                            <h4 className="font-bold text-blue-600 mb-4">תקשורת ואבטחה</h4>
                            <div className="flex flex-wrap gap-2">
                                {['TCP/UDP', 'Socket Programming', 'Networking Protocols'].map(skill => (
                                    <span key={skill} className="bg-slate-100 px-3 py-1 rounded text-sm">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="bg-slate-900 text-slate-500 py-8 text-center text-sm">
                © 2026 Amit Ginzberg | Built with React & Tailwind
            </footer>
        </div>
    );
};

export default Portfolio;