import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, Phone, Instagram, Award, Briefcase, GraduationCap, Wrench, User, FolderOpen, Send, MapPin, CheckCircle, ArrowRight, Sparkles, Code, Zap } from 'lucide-react';

export default function PortfolioWebsite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Image URLs - Replace these with your actual image URLs
  const profileImage = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop";
  
  const projectImages = {
    residential: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=600&h=400&fit=crop",
    commercial: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop",
    bridge: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop",
    office: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&h=400&fit=crop",
    educational: "https://images.unsplash.com/photo-1562774053-701939374585?w=600&h=400&fit=crop",
    renovation: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop"
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'skills', 'education', 'experience', 'projects', 'achievements', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormStatus('error');
      return;
    }
    
    setFormStatus('sending');
    
    const mailtoLink = `mailto:gaikwadpratik0002@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    
    window.location.href = mailtoLink;
    
    setTimeout(() => {
      setFormStatus('success');
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setFormStatus('');
      }, 3000);
    }, 500);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const technicalSkills = [
    { name: 'AutoCAD', level: 90, icon: Code },
    { name: 'Revit', level: 85, icon: Code },
    { name: 'Sketchup', level: 80, icon: Code },
    { name: 'Design Review', level: 85, icon: Sparkles },
    { name: 'Documentation', level: 88, icon: Sparkles },
    { name: 'Schematic Design', level: 82, icon: Sparkles }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div 
          className="absolute w-64 h-64 bg-purple-500/5 rounded-full blur-2xl transition-all duration-300 ease-out"
          style={{ 
            left: `${mousePosition.x - 128}px`, 
            top: `${mousePosition.y - 128}px`,
          }}
        ></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-slate-900/80 backdrop-blur-xl shadow-2xl border-b border-white/5' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 group cursor-pointer">
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                Pratik Gaikwad
              </h1>
              <p className="text-xs text-blue-300/60 font-light">Civil Engineer & BIM Specialist</p>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 relative ${
                      activeSection === item.id
                        ? 'text-white'
                        : 'text-gray-300 hover:text-white'
                    }`}
                  >
                    {activeSection === item.id && (
                      <span className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl"></span>
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-white hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-t border-white/5">
            <div className="px-4 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white'
                      : 'text-gray-300 hover:bg-white/5'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 text-blue-300 rounded-full text-sm font-semibold backdrop-blur-sm animate-fade-in">
                <Sparkles size={16} className="animate-pulse" />
                Civil Engineer & BIM Specialist
              </div>
              <h2 className="text-6xl sm:text-7xl font-bold text-white leading-tight">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                  Pratik Gaikwad
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                Transforming ideas into reality through innovative design solutions and cutting-edge Building Information Modeling technology.
              </p>
              <div className="flex gap-4 pt-4">
                <button
                  onClick={() => scrollToSection('contact')}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all transform hover:scale-105 flex items-center gap-2 font-semibold"
                >
                  <Mail size={20} />
                  Get in Touch
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-white/5 border border-white/10 text-white rounded-xl hover:bg-white/10 transition-all backdrop-blur-sm flex items-center gap-2 font-semibold"
                >
                  <FolderOpen size={20} />
                  View Projects
                </button>
              </div>
              <div className="flex gap-4 pt-4">
                {[
                  { icon: Phone, href: 'tel:+918275260002', color: 'hover:text-green-400' },
                  { icon: Mail, href: 'mailto:gaikwadpratik0002@gmail.com', color: 'hover:text-blue-400' },
                  { icon: Instagram, href: 'https://instagram.com/pratikgaikwads', color: 'hover:text-pink-400' }
                ].map(({ icon: Icon, href, color }, i) => (
                  <a 
                    key={i}
                    href={href} 
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`p-3 bg-white/5 border border-white/10 rounded-xl ${color} transition-all hover:scale-110 hover:bg-white/10 backdrop-blur-sm`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
            <div className="flex justify-center relative">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-80 h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/10 shadow-2xl overflow-hidden">
                  <div className="absolute inset-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center overflow-hidden">
                    <img 
                      src={profileImage} 
                      alt="Pratik Gaikwad" 
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-500">
                      <User size={120} className="text-white" />
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-br from-slate-800 to-slate-900 p-6 rounded-2xl shadow-2xl border border-white/10 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-green-500/20 rounded-lg">
                      <CheckCircle className="text-green-400" size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-white">BIM Certified</p>
                      <p className="text-xs text-gray-400">Professional</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/20">
              <User className="text-blue-400" size={28} />
            </div>
            <h2 className="text-5xl font-bold text-white">About Me</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="group bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl p-8 shadow-2xl border border-white/5 backdrop-blur-sm hover:border-blue-400/30 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <Briefcase className="text-blue-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Professional Background</h3>
              </div>
              <p className="text-lg text-gray-200 leading-relaxed mb-4">
                I am <span className="font-semibold text-blue-400">Pratik Gaikwad</span>, a dedicated Civil Engineer with specialized expertise in Building Information Modeling technology.
              </p>
              <p className="text-gray-300 leading-relaxed">
                With a completed Diploma in Civil Engineering and currently pursuing B.Tech, I bring modern digital construction methodologies to every project, combining technical expertise with creative innovation.
              </p>
            </div>
            <div className="group bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-3xl p-8 shadow-2xl border border-white/5 backdrop-blur-sm hover:border-indigo-400/30 transition-all hover:scale-[1.02]">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-indigo-400" size={24} />
                <h3 className="text-2xl font-bold text-white">What I Do</h3>
              </div>
              <div className="space-y-3">
                {[
                  'Design innovative structural and interior solutions',
                  'Create detailed 3D models using BIM technology',
                  'Collaborate with teams for exceptional projects',
                  'Transform visions into functional spaces'
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 group/item">
                    <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 group-hover/item:scale-150 transition-transform"></div>
                    <p className="text-gray-300 group-hover/item:text-white transition-colors">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/20">
              <Wrench className="text-purple-400" size={28} />
            </div>
            <h2 className="text-5xl font-bold text-white">Skills & Expertise</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 shadow-2xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
              <div className="space-y-6">
                {technicalSkills.map((skill, idx) => {
                  const Icon = skill.icon;
                  return (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center gap-2">
                          <Icon size={18} className="text-blue-400" />
                          <span className="text-gray-200 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-blue-400 font-bold text-lg">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-slate-700/50 rounded-full h-3 overflow-hidden">
                        <div 
                          className="bg-gradient-to-r from-blue-500 to-indigo-500 h-3 rounded-full transition-all duration-1000 shadow-lg shadow-blue-500/50"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 shadow-2xl border border-white/5 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-8">Professional Competencies</h3>
              <div className="grid grid-cols-2 gap-3">
                {['Creativity', 'Problem Solving', 'Team Work', 'Attention to Details', 'Space Planning', 'Time Management', 'Client Relations', 'Project Management'].map((skill, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-4 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 rounded-xl hover:from-blue-500/20 hover:to-indigo-500/20 transition-all border border-white/5 group cursor-pointer">
                    <CheckCircle size={18} className="text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-200 font-medium text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-green-500/20 rounded-xl border border-green-400/20">
              <GraduationCap className="text-green-400" size={28} />
            </div>
            <h2 className="text-5xl font-bold text-white">Education & Certifications</h2>
          </div>
          
          <div className="space-y-6">
            {[
              { 
                title: 'Diploma in Civil Engineering',
                institution: 'Government Polytechnic Dharashiv',
                period: '2021 - 2024',
                description: 'Comprehensive program covering structural design, construction management, and engineering principles',
                color: 'from-blue-500 to-indigo-500',
                icon: GraduationCap
              },
              { 
                title: 'Building Information Modeling (BIM)',
                institution: 'CadDesk Pune - Professional Certification',
                period: '2024 - 2025',
                description: 'Advanced training in Revit, AutoCAD, and modern BIM workflows for construction projects',
                color: 'from-indigo-500 to-purple-500',
                icon: Award
              },
              { 
                title: 'B.Tech in Civil Engineering',
                institution: 'Currently Pursuing',
                period: 'In Progress',
                description: 'Advanced degree program focusing on engineering design, analysis, and management',
                color: 'from-purple-500 to-pink-500',
                icon: GraduationCap
              }
            ].map((edu, i) => {
              const Icon = edu.icon;
              return (
                <div key={i} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 shadow-2xl border border-white/5 backdrop-blur-sm hover:border-white/10 transition-all hover:scale-[1.01]">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`p-4 bg-gradient-to-br ${edu.color} rounded-2xl flex-shrink-0 group-hover:scale-110 transition-transform shadow-lg`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">{edu.title}</h3>
                        <p className="text-gray-300 font-medium mb-3">{edu.institution}</p>
                        <p className="text-sm text-gray-400 leading-relaxed">{edu.description}</p>
                      </div>
                    </div>
                    <span className={`text-transparent bg-gradient-to-r ${edu.color} bg-clip-text font-bold whitespace-nowrap`}>
                      {edu.period}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-400/20">
              <Briefcase className="text-orange-400" size={28} />
            </div>
            <h2 className="text-5xl font-bold text-white">Professional Experience</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Trainee Engineer',
                company: 'Public Works Department',
                period: '2023-24',
                color: 'blue',
                items: [
                  'Defined functional requirements and planned space allocation for MHADA site projects',
                  'Assisted with programming and design development for interior projects',
                  'Coordinated with senior engineers on construction documentation'
                ]
              },
              {
                title: 'Interior Designer',
                company: 'SB Projects Limited',
                period: '2024 - Present',
                color: 'indigo',
                items: [
                  'Develop comprehensive work plans in collaboration with clients',
                  'Create multiple design iterations and 3D visualizations for client approval',
                  'Collaborate with engineers throughout the construction process',
                  'Manage project timelines and ensure quality standards'
                ]
              }
            ].map((exp, i) => (
              <div key={i} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 shadow-2xl border-l-4 border-${exp.color}-500 hover:border-${exp.color}-400 transition-all backdrop-blur-sm hover:scale-[1.02]`}>
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.title}</h3>
                    <p className={`text-${exp.color}-400 font-semibold text-lg`}>{exp.company}</p>
                  </div>
                  <span className={`text-sm text-${exp.color}-300 bg-${exp.color}-500/10 px-4 py-2 rounded-full whitespace-nowrap border border-${exp.color}-400/20`}>
                    {exp.period}
                  </span>
                </div>
                <ul className="space-y-4">
                  {exp.items.map((item, j) => (
                    <li key={j} className="flex gap-3 group/item">
                      <CheckCircle size={20} className={`text-${exp.color}-400 flex-shrink-0 mt-0.5 group-hover/item:scale-110 transition-transform`} />
                      <span className="text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-pink-500/20 rounded-xl border border-pink-400/20">
              <FolderOpen className="text-pink-400" size={28} />
            </div>
            <h2 className="text-5xl font-bold text-white">Featured Projects</h2>
          </div>
          
          <p className="text-lg text-gray-300 mb-12">Showcasing innovative design solutions and engineering excellence</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              { title: 'Residential Complex', category: 'BIM & Design', gradient: 'from-blue-500 to-indigo-500', image: projectImages.residential },
              { title: 'Commercial Interior', category: 'Interior Design', gradient: 'from-indigo-500 to-purple-500', image: projectImages.commercial },
              { title: 'Bridge Structure', category: 'Structural Design', gradient: 'from-purple-500 to-pink-500', image: projectImages.bridge },
              { title: 'Office Space', category: 'Space Planning', gradient: 'from-pink-500 to-red-500', image: projectImages.office },
              { title: 'Educational Institute', category: 'BIM Modeling', gradient: 'from-red-500 to-orange-500', image: projectImages.educational },
              { title: 'Renovation Project', category: 'Design & Execution', gradient: 'from-orange-500 to-yellow-500', image: projectImages.renovation }
            ].map((project, i) => (
              <div key={i} className="group bg-slate-800/50 rounded-3xl overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all hover:scale-[1.05] border border-white/5 backdrop-blur-sm cursor-pointer">
                <div className={`h-56 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors items-center justify-center">
                    <FolderOpen size={72} className="text-white/80 group-hover:scale-125 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className={`text-xs font-semibold bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent px-3 py-1 rounded-full border border-white/10 inline-block`}>
                    {project.category}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-4 mb-2 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm">Innovative design solution combining functionality with aesthetics</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-10 shadow-2xl border border-white/5 backdrop-blur-sm">
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
              <Sparkles className="text-yellow-400" size={28} />
              My Design Philosophy
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: 'Client-Centric', desc: 'Creating designs unique to each client\'s taste, style, and vision', color: 'blue' },
                { title: 'Budget-Conscious', desc: 'Delivering exceptional results while working within budget constraints', color: 'indigo' },
                { title: 'Detail-Oriented', desc: 'Selecting furniture and finishes that perfectly complement the overall design', color: 'purple' }
              ].map((phil, i) => (
                <div key={i} className="flex gap-4 group cursor-pointer">
                  <CheckCircle size={28} className={`text-${phil.color}-400 flex-shrink-0 group-hover:scale-110 transition-transform`} />
                  <div>
                    <h4 className="font-bold text-white mb-2 text-lg">{phil.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{phil.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-12">
            <div className="p-3 bg-yellow-500/20 rounded-xl border border-yellow-400/20">
              <Award className="text-yellow-400" size={28} />
            </div>
            <h2 className="text-5xl font-bold text-white">Awards & Recognition</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                date: 'September 2023',
                title: 'Best Innovative Structural Design of Bridge',
                institution: 'Terna College of Engineering, Dharashiv',
                description: 'Recognized for exceptional creativity and technical excellence in bridge design competition',
                color: 'blue'
              },
              {
                date: 'July 2024',
                title: 'Best Model Making Competition',
                institution: 'Aadarsh Shikshan Prasarak Mandal, Dharashiv',
                description: 'First place for educational institute model showcasing innovative architectural concepts',
                color: 'indigo'
              }
            ].map((achievement, i) => (
              <div key={i} className={`group bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-3xl p-8 shadow-2xl border-t-4 border-${achievement.color}-500 hover:border-${achievement.color}-400 transition-all backdrop-blur-sm hover:scale-[1.02]`}>
                <div className="flex items-start gap-4">
                  <div className={`bg-gradient-to-br from-${achievement.color}-500/20 to-${achievement.color}-600/20 p-4 rounded-2xl flex-shrink-0 border border-${achievement.color}-400/20 group-hover:scale-110 transition-transform`}>
                    <Award className={`text-${achievement.color}-400`} size={32} />
                  </div>
                  <div className="flex-1">
                    <p className={`text-${achievement.color}-400 font-semibold mb-3 text-sm`}>{achievement.date}</p>
                    <h3 className="text-2xl font-bold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-300 mb-3 font-medium">{achievement.institution}</p>
                    <p className="text-sm text-gray-400 italic leading-relaxed">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-indigo-600/20"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-4">Let's Work Together</h2>
            <p className="text-gray-300 text-lg">Have a project in mind? I'd love to hear about it!</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 rounded-3xl p-8 shadow-2xl border border-white/5 backdrop-blur-xl">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                <Send className="text-blue-400" size={24} />
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition text-white placeholder-gray-500"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleFormChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-slate-900/50 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none text-white placeholder-gray-500"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                
                {formStatus === 'sending' && (
                  <div className="bg-blue-500/10 border border-blue-400/20 text-blue-300 px-4 py-3 rounded-xl flex items-center gap-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-400"></div>
                    <span>Opening your email client...</span>
                  </div>
                )}
                
                {formStatus === 'success' && (
                  <div className="bg-green-500/10 border border-green-400/20 text-green-300 px-4 py-3 rounded-xl flex items-center gap-2">
                    <CheckCircle size={20} />
                    <span>Message sent successfully! I'll get back to you soon.</span>
                  </div>
                )}
                
                {formStatus === 'error' && (
                  <div className="bg-red-500/10 border border-red-400/20 text-red-300 px-4 py-3 rounded-xl">
                    Please fill in all fields before submitting.
                  </div>
                )}
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 rounded-xl hover:shadow-2xl hover:shadow-blue-500/50 transition-all flex items-center justify-center gap-2 font-semibold transform hover:scale-[1.02]"
                >
                  <Send size={20} />
                  Send Message
                </button>
              </form>
            </div>

            <div className="space-y-5">
              <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
              
              {[
                { icon: Mail, title: 'Email Address', content: 'gaikwadpratik0002@gmail.com', href: 'mailto:gaikwadpratik0002@gmail.com', color: 'blue' },
                { icon: Phone, title: 'Phone Number', content: '+91 8275260002', href: 'tel:+918275260002', color: 'green' },
                { icon: Instagram, title: 'Instagram', content: '@pratikgaikwads', href: 'https://instagram.com/pratikgaikwads', color: 'pink' },
              ].map(({ icon: Icon, title, content, href, color }, i) => (
                <a key={i} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="bg-slate-800/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center gap-4 group border border-white/5 backdrop-blur-xl">
                  <div className={`bg-${color}-500/20 p-4 rounded-xl group-hover:bg-${color}-500/30 transition-colors flex-shrink-0 border border-${color}-400/20`}>
                    <Icon className={`text-${color}-400`} size={24} />
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <p className="text-sm text-gray-400 font-medium">{title}</p>
                    <p className="text-white font-semibold break-all">{content}</p>
                  </div>
                </a>
              ))}

              <div className="bg-slate-800/50 rounded-2xl p-6 shadow-xl flex items-start gap-4 border border-white/5 backdrop-blur-xl">
                <div className="bg-purple-500/20 p-4 rounded-xl flex-shrink-0 border border-purple-400/20">
                  <MapPin className="text-purple-400" size={24} />
                </div>
                <div className="text-left flex-1">
                  <p className="text-sm text-gray-400 font-medium mb-3">Location</p>
                  <p className="text-white font-semibold">Aundh, Pune</p>
                  <p className="text-gray-400 text-sm mb-4">Maharashtra - 411007</p>
                  
                  <div className="mt-4 rounded-xl overflow-hidden border border-white/10 shadow-lg">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.9618763853!2d73.73921984335936!3d18.563537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf5e1c5f2e0f%3A0x4e1b6f7e4c5f2e0f!2sAundh%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                      width="100%"
                      height="200"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <p className="text-white text-lg mb-2 font-medium">Available for freelance opportunities</p>
            <p className="text-gray-400">Monday - Saturday, 9:00 AM - 6:00 PM IST</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-slate-950/50 border-t border-white/5 py-16 px-4 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Pratik Gaikwad
              </h3>
              <p className="text-gray-400 font-medium">Civil Engineer & BIM Specialist</p>
              <p className="text-gray-500 text-sm mt-3 leading-relaxed">Transforming visions into reality through innovative design and engineering excellence.</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <div className="space-y-3">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className="block text-gray-400 hover:text-blue-400 transition-colors font-medium"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Connect</h4>
              <div className="flex gap-3">
                {[
                  { icon: Instagram, href: 'https://instagram.com/pratikgaikwads', color: 'hover:bg-pink-500' },
                  { icon: Mail, href: 'mailto:gaikwadpratik0002@gmail.com', color: 'hover:bg-blue-500' },
                  { icon: Phone, href: 'tel:+918275260002', color: 'hover:bg-green-500' }
                ].map(({ icon: Icon, href, color }, i) => (
                  <a 
                    key={i}
                    href={href} 
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`bg-white/5 p-4 rounded-xl ${color} transition-all transform hover:scale-110 border border-white/10`}
                  >
                    <Icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/5 pt-8 text-center">
            <p className="text-gray-400">© 2025 Pratik Gaikwad. All rights reserved.</p>
            <p className="text-gray-600 text-sm mt-2">Designed and Developed with passion</p>
          </div>
        </div>
      </footer>
    </div>
  );
}