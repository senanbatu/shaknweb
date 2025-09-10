'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './admin.css';

const ADMIN_CREDENTIALS = {
  username: 'root',
  password: '123'
};

interface SiteContent {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  aboutTitle: string;
  aboutContent: string;
  skillsTitle: string;
  skills: { name: string; description: string }[];
  projectsTitle: string;
  projects: { name: string; description: string; link: string }[];
  contactEmail: string;
  contactWhatsApp: string;
  waTextTr: string;
  waTextEn: string;
}

const defaultContent: SiteContent = {
  heroTitle: 'Grow Your Business Digitally with Modern Web Solutions',
  heroSubtitle: 'Create stunning web experiences that drive results and engage your audience',
  ctaText: 'Get Started',
  aboutTitle: 'About Me',
  aboutContent: "I'm a passionate web developer with expertise in creating modern, responsive websites and applications.",
  skillsTitle: 'My Skills',
  skills: [
    { name: 'Frontend Development', description: 'HTML, CSS, JavaScript, React' },
    { name: 'Backend Development', description: 'Node.js, Python, PHP' }
  ],
  projectsTitle: 'Featured Projects',
  projects: [
    { name: 'E-Commerce Platform', description: 'Modern e-commerce solution', link: 'https://example.com' }
  ],
  contactEmail: 'your-email@example.com',
  contactWhatsApp: '905551112233',
  waTextTr: 'Merhaba! Web sitenizden ulaşıyorum...',
  waTextEn: 'Hello! I am reaching out from your website...'
};

export default function AdminPage() {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginData, setLoginData] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const [content, setContent] = useState<SiteContent>(defaultContent);
  const [saveMessage, setSaveMessage] = useState('');

  useEffect(() => {
    const auth = sessionStorage.getItem('adminAuth');
    if (auth === 'true') {
      setIsAuthenticated(true);
      loadContent();
    }
  }, []);

  const loadContent = () => {
    const savedContent = localStorage.getItem('siteContent');
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (loginData.username === ADMIN_CREDENTIALS.username && 
        loginData.password === ADMIN_CREDENTIALS.password) {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      setLoginError('');
      loadContent();
    } else {
      setLoginError('Kullanıcı adı veya şifre hatalı!');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    router.push('/');
  };

  const handleSave = () => {
    localStorage.setItem('siteContent', JSON.stringify(content));
    
    // Dispatch custom event for same-tab updates
    window.dispatchEvent(new Event('contentUpdated'));
    
    setSaveMessage('Tüm değişiklikler başarıyla kaydedildi!');
    setTimeout(() => setSaveMessage(''), 3000);
  };

  const addSkill = () => {
    setContent({
      ...content,
      skills: [...content.skills, { name: '', description: '' }]
    });
  };

  const updateSkill = (index: number, field: 'name' | 'description', value: string) => {
    const newSkills = [...content.skills];
    newSkills[index][field] = value;
    setContent({ ...content, skills: newSkills });
  };

  const removeSkill = (index: number) => {
    setContent({
      ...content,
      skills: content.skills.filter((_, i) => i !== index)
    });
  };

  const addProject = () => {
    setContent({
      ...content,
      projects: [...content.projects, { name: '', description: '', link: '' }]
    });
  };

  const updateProject = (index: number, field: 'name' | 'description' | 'link', value: string) => {
    const newProjects = [...content.projects];
    newProjects[index][field] = value;
    setContent({ ...content, projects: newProjects });
  };

  const removeProject = (index: number) => {
    setContent({
      ...content,
      projects: content.projects.filter((_, i) => i !== index)
    });
  };

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        <div className="login-box">
          <h2>Admin Girişi</h2>
          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label>Kullanıcı Adı</label>
              <input
                type="text"
                value={loginData.username}
                onChange={(e) => setLoginData({ ...loginData, username: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Şifre</label>
              <input
                type="password"
                value={loginData.password}
                onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                required
              />
            </div>
            <button type="submit">Giriş Yap</button>
            {loginError && <div className="error-message show">{loginError}</div>}
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <header className="admin-header">
        <h1>Admin Panel</h1>
        <button onClick={handleLogout} className="logout-btn">Çıkış Yap</button>
      </header>

      <main className="admin-content">
        <div className="section-card">
          <h2>Ana Sayfa İçeriği</h2>
          
          <div className="edit-group">
            <label>Ana Başlık</label>
            <input
              type="text"
              value={content.heroTitle}
              onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
            />
          </div>

          <div className="edit-group">
            <label>Alt Başlık</label>
            <textarea
              value={content.heroSubtitle}
              onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
              rows={3}
            />
          </div>

          <div className="edit-group">
            <label>CTA Buton Metni</label>
            <input
              type="text"
              value={content.ctaText}
              onChange={(e) => setContent({ ...content, ctaText: e.target.value })}
            />
          </div>
        </div>

        <div className="section-card">
          <h2>Hakkımda Bölümü</h2>
          
          <div className="edit-group">
            <label>Başlık</label>
            <input
              type="text"
              value={content.aboutTitle}
              onChange={(e) => setContent({ ...content, aboutTitle: e.target.value })}
            />
          </div>

          <div className="edit-group">
            <label>İçerik</label>
            <textarea
              value={content.aboutContent}
              onChange={(e) => setContent({ ...content, aboutContent: e.target.value })}
              rows={6}
            />
          </div>
        </div>

        <div className="section-card">
          <h2>Yetenekler Bölümü</h2>
          
          <div className="edit-group">
            <label>Başlık</label>
            <input
              type="text"
              value={content.skillsTitle}
              onChange={(e) => setContent({ ...content, skillsTitle: e.target.value })}
            />
          </div>

          <div className="skills-editor">
            {content.skills.map((skill, index) => (
              <div key={index} className="skill-item">
                <input
                  type="text"
                  placeholder="Yetenek adı"
                  value={skill.name}
                  onChange={(e) => updateSkill(index, 'name', e.target.value)}
                />
                <input
                  type="text"
                  placeholder="Açıklama"
                  value={skill.description}
                  onChange={(e) => updateSkill(index, 'description', e.target.value)}
                />
                <button onClick={() => removeSkill(index)} className="remove-skill">Sil</button>
              </div>
            ))}
          </div>
          <button onClick={addSkill} className="add-btn">+ Yetenek Ekle</button>
        </div>

        <div className="section-card">
          <h2>Projeler Bölümü</h2>
          
          <div className="edit-group">
            <label>Başlık</label>
            <input
              type="text"
              value={content.projectsTitle}
              onChange={(e) => setContent({ ...content, projectsTitle: e.target.value })}
            />
          </div>

          <div className="projects-editor">
            {content.projects.map((project, index) => (
              <div key={index} className="project-item">
                <input
                  type="text"
                  placeholder="Proje adı"
                  value={project.name}
                  onChange={(e) => updateProject(index, 'name', e.target.value)}
                />
                <textarea
                  placeholder="Açıklama"
                  value={project.description}
                  onChange={(e) => updateProject(index, 'description', e.target.value)}
                  rows={2}
                />
                <input
                  type="text"
                  placeholder="Link"
                  value={project.link}
                  onChange={(e) => updateProject(index, 'link', e.target.value)}
                />
                <button onClick={() => removeProject(index)} className="remove-project">Sil</button>
              </div>
            ))}
          </div>
          <button onClick={addProject} className="add-btn">+ Proje Ekle</button>
        </div>

        <div className="section-card">
          <h2>İletişim Bilgileri</h2>
          
          <div className="edit-group">
            <label>Email</label>
            <input
              type="email"
              value={content.contactEmail}
              onChange={(e) => setContent({ ...content, contactEmail: e.target.value })}
            />
          </div>

          <div className="edit-group">
            <label>WhatsApp Numarası</label>
            <input
              type="text"
              value={content.contactWhatsApp}
              onChange={(e) => setContent({ ...content, contactWhatsApp: e.target.value })}
              placeholder="Ülke kodu ile birlikte"
            />
          </div>

          <div className="edit-group">
            <label>WhatsApp Mesajı (TR)</label>
            <input
              type="text"
              value={content.waTextTr}
              onChange={(e) => setContent({ ...content, waTextTr: e.target.value })}
            />
          </div>

          <div className="edit-group">
            <label>WhatsApp Mesajı (EN)</label>
            <input
              type="text"
              value={content.waTextEn}
              onChange={(e) => setContent({ ...content, waTextEn: e.target.value })}
            />
          </div>
        </div>

        <div className="save-section">
          <button onClick={handleSave} className="save-btn">Tüm Değişiklikleri Kaydet</button>
          {saveMessage && <div className="save-message success">{saveMessage}</div>}
        </div>
      </main>
    </div>
  );
}