import { Component, OnInit, HostListener, OnDestroy } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgForOf, NgIf } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [
    NgForOf,
  ],
  animations: [
    trigger('fadeInUp', [
      transition(':enter', [
        style({opacity: 0, transform: 'translateY(30px)'}),
        animate('0.8s ease-out', style({opacity: 1, transform: 'translateY(0)'}))
      ])
    ])
  ]
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'idy-sy-portfolio';
  showScrollTop = false;
  activeSection = 'home';
  isMobileMenuOpen = false;

  // Personal Information
  personalInfo = {
    name: 'Idy Adama Sy',
    title: 'Développeur & Infographiste Freelance',
    tagline: 'Créateur d\'expériences digitales exceptionnelles au Sénégal'
  };

  // Social Links
  socialLinks = [
    { icon: 'fab fa-whatsapp', url: 'https://wa.me/221705060612' },
    { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/idy-adama-sy-1747682b4/' },
    { icon: 'fab fa-github', url: 'https://github.com/Idysy' }
  ];

  // Skills Data
  skills = [
    { name: 'HTML & CSS', icon: 'fab fa-html5', level: 95 },
    { name: 'JavaScript', icon: 'fab fa-js', level: 90 },
    { name: 'Angular', icon: 'fab fa-angular', level: 85 },
    { name: 'Node.js', icon: 'fab fa-node', level: 80 },
    { name: 'Spring Boot (Java)', icon: 'fas fa-leaf', level: 80 },
    { name: 'JEE (Java EE)', icon: 'fas fa-cubes', level: 75 },
    { name: 'Java', icon: 'fab fa-java', level: 85 },
    { name: 'PHP', icon: 'fab fa-php', level: 80 },
    { name: 'Laravel', icon: 'fab fa-laravel', level: 80 },
    { name: 'Python', icon: 'fab fa-python', level: 75 },
    { name: 'Django', icon: 'fas fa-server', level: 70 },
    { name: 'Flutter', icon: 'fab fa-flutter', level: 70 },
    { name: 'CI/CD (GitHub Actions)', icon: 'fas fa-tools', level: 65 },
    { name: 'Communication Digitale', icon: 'fas fa-bullhorn', level: 80 },
    { name: 'Design Graphique', icon: 'fas fa-palette', level: 85 },
    { name: 'Drupal', icon: 'fab fa-drupal', level: 60 },
    { name: 'Photoshop', icon: 'fas fa-image', level: 90 }
  ];

  experiences = [
    {
      period: 'Juillet 2025 - Présent',
      title: 'Développeur Full-Stack Freelance',
      company: 'Indépendant',
      description: `Développement d'applications web modernes pour particuliers et entreprises :
sites vitrines, ERP, systèmes bancaires et outils de gestion.
Technologies utilisées : Angular, Spring Boot, Laravel, Node.js.`
    },
    {
      period: 'Mai 2025 - Juillet 2025',
      title: 'Développeur ERP Auto-École',
      company: 'Fabus Group & Co',
      description: `Conception d’un ERP interne pour une auto-école avec Angular et Spring Boot :
gestion des étudiants, paiements, examens, statistiques et documents.`
    },
    {
      period: 'Avril 2025 - Mai 2025',
      title: 'Responsable Marketing & Relation Clientèle',
      company: 'Fabus Group & Co',
      description: `Interaction sur les réseaux sociaux pour attirer des clients et les convaincre de s’inscrire.
Mise en place de stratégies d’approche digitale directe.`
    },
    {
      period: 'Mars 2025 - Avril 2025',
      title: 'Infographiste',
      company: 'Fabus Group & Co',
      description: `Création de visuels professionnels (flyers, affiches, contenus digitaux) pour la communication interne et externe.
Contribution à l’image de marque de l’entreprise.`
    },
    {
      period: 'Janvier 2025 - Mars 2025',
      title: 'Développeur Web Back-End',
      company: 'Fabus Group & Co',
      description: `Développement d’un site d’entreprise en Angular et Spring Boot,
présentant les services, promotions, événements, avec formulaire de contact client.`
    },
    {
      period: '2023 - 2024',
      title: 'Développeur Étudiant',
      company: 'ISEP Diamniadio',
      description: `Réalisation de plusieurs projets académiques en back-end et full-stack :
- Application de gestion de rapports étudiants (Spring Boot, Angular)
- Système bancaire (Spring Boot, Angular)
- Gestion de bibliothèque en PHP/PDO et JEE
- Gestion scolaire (Node.js)
- Application d’assistance automobile à distance (Laravel)
- Gestion de projets (Laravel)`
    }
  ];

  projects = [
    {
      title: 'ERP Auto-École',
      description: 'Application ERP interne pour une auto-école, avec gestion complète des étudiants, moniteurs, paiements, examens et statistiques.',
      icon: 'fas fa-cogs',
      technologies: ['Angular', 'Spring Boot', 'JWT', 'MySQL']
    },
    {
      title: 'Site Web de l’Entreprise Fabus',
      description: 'Site vitrine dynamique pour présenter les services, promotions, événements et formulaire de contact.',
      icon: 'fas fa-globe',
      technologies: ['Angular', 'Spring Boot']
    },
    {
      title: 'Application de Gestion Étudiante',
      description: 'Application de gestion de rapports étudiants en Angular et Spring Boot.',
      icon: 'fas fa-user-graduate',
      technologies: ['Angular', 'Spring Boot']
    },
    {
      title: 'Projet de Gestion Bancaire',
      description: 'Application bancaire sécurisée avec tableau de bord, transactions et authentification.',
      icon: 'fas fa-university',
      technologies: ['Spring Boot', 'Angular', 'JWT']
    },
    {
      title: 'Système de Gestion Scolaire',
      description: 'Application complète de gestion scolaire (étudiants, notes, classes).',
      icon: 'fas fa-school',
      technologies: ['Node.js', 'Express', 'MongoDB']
    },
    {
      title: 'Assistance Automobile à Distance',
      description: 'Application de dépannage et assistance automobile conçue avec Laravel.',
      icon: 'fas fa-car-crash',
      technologies: ['Laravel', 'PHP', 'MySQL']
    },
    {
      title: 'Gestion de Projets',
      description: 'Application web de gestion de projets collaboratifs avec Laravel.',
      icon: 'fas fa-tasks',
      technologies: ['Laravel', 'Blade', 'MySQL']
    },
    {
      title: 'Gestion de Bibliothèque (PHP)',
      description: 'Gestion de livres, emprunts et lecteurs en PHP avec PDO.',
      icon: 'fas fa-book-open',
      technologies: ['PHP', 'PDO', 'MySQL']
    },
    {
      title: 'Gestion de Bibliothèque (JEE)',
      description: 'Système de bibliothèque en Java EE avec JSP, Servlets et JDBC.',
      icon: 'fas fa-book',
      technologies: ['JEE', 'JSP', 'Servlets', 'JDBC']
    },
    {
      title: 'Branding pour Startups',
      description: 'Identité visuelle complète : logos, flyers, supports marketing personnalisés.',
      icon: 'fas fa-palette',
      technologies: ['Illustrator', 'Photoshop', 'InDesign']
    }
  ];

  testimonials = [
    {
      text: 'Le site web réalisé pour notre entreprise a dépassé nos attentes. Professionnalisme, créativité et efficacité au rendez-vous.',
      author: 'Fadel Sene',
      role: 'PDG de Fabus Group & Co'
    },
    // {
    //   text: 'L’application mobile livrée est fluide, bien conçue et très intuitive. Je recommande vivement ce groupe de développeurs.',
    //   author: 'Moussa Kane',
    //   role: 'CEO, FinTech Sénégal'
    // },
    {
      text: 'Travail remarquable sur l’identité visuelle. Les supports livrés sont élégants, cohérents et professionnels.',
      author: 'Diarietou Sene',
      role: 'Entrepreneure, Vendeuse libre'
    },
    {
      text: 'Le groupe a démontré une excellente maîtrise des technologies durant le projet de fin de formation. Résultat propre, fonctionnel et bien présenté.',
      author: 'Mr Mbaye',
      role: 'Formateur, Développeur'
    },
    {
      text: 'Projet bien mené, avec une organisation claire et une répartition efficace des tâches. Le rendu final était professionnel et abouti.',
      author: 'Mr Sidibe',
      role: 'Formateur, Développeur'
    }
  ];

  services = [
    {
      title: 'Création de Sites Web',
      description: 'Développement de sites vitrines et dynamiques avec Angular, Spring Boot, Laravel ou Node.js selon vos besoins.',
      icon: 'fas fa-globe',
      price: 'À discuter'
    },
    {
      title: 'Applications Web & Mobiles',
      description: 'Développement d’applications de gestion, bancaires ou éducatives en Angular, Flutter, Laravel, Node.js et Spring Boot.',
      icon: 'fas fa-laptop-code',
      price: 'Sur devis'
    },
    {
      title: 'Conception de Logos',
      description: 'Design professionnel et personnalisé de logos pour entreprises, événements et startups.',
      icon: 'fas fa-paint-brush',
      price: 'À discuter'
    },
    {
      title: 'Affiches & Flyers',
      description: 'Création de visuels publicitaires pour les réseaux sociaux, campagnes marketing ou événements.',
      icon: 'fas fa-bullhorn',
      price: 'À discuter'
    },
    {
      title: 'Cartes de Visite & Invitations',
      description: 'Design élégant et professionnel de cartes d’invitation ou de visite pour une première impression réussie.',
      icon: 'fas fa-id-card',
      price: 'À discuter'
    },
    {
      title: 'Gestion Réseaux Sociaux & Boost',
      description: 'Création de contenu visuel et optimisation de la visibilité sur Facebook, WhatsApp, Instagram.',
      icon: 'fas fa-rocket',
      price: 'À discuter'
    }
  ];

  whatsappUrl = 'https://wa.me/221705060612?text=Bonjour%20Idy,%20je%20suis%20intéressé%20par%20vos%20services.%20Pouvons-nous%20discuter%20?';

  private intersectionObserver?: IntersectionObserver;

  ngOnInit(): void {
    this.initializeAnimations();
    this.createParticles();
    this.initializeTypingEffect();
    this.initializeSectionObserver();
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) {
      this.intersectionObserver.disconnect();
    }
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(): void {
    this.showScrollTop = window.pageYOffset > 300;
    this.updateNavbarOnScroll();
  }

  scrollToSection(sectionId: string): void {
    this.activeSection = sectionId;
    const element = document.getElementById(sectionId);
    if (element) {
      const navbar = document.querySelector('.navbar') as HTMLElement;
      const offset = navbar ? navbar.offsetHeight : 80;
      const elementRect = element.getBoundingClientRect();
      const absoluteElementTop = elementRect.top + window.pageYOffset;
      const scrollTo = absoluteElementTop - offset + 1;
      window.scrollTo({
        top: scrollTo,
        behavior: 'smooth'
      });
    }
    this.isMobileMenuOpen = false;
  }

  private initializeSectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-80px 0px -80px 0px'
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.activeSection = entry.target.id;
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        sectionObserver.observe(section);
      });
    }, 100);
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  downloadCV(): void {
    const link = document.createElement('a');
    link.href = 'assets/files/Idy_Adama_Sy_CV.pdf';
    link.download = 'Idy_Adama_Sy_CV.pdf';
    link.click();
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  private initializeAnimations(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    this.intersectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    setTimeout(() => {
      const animatableElements = document.querySelectorAll('.skill-card, .timeline-item, .project-card, .testimonial-card, .service-card');
      animatableElements.forEach(el => {
        if (this.intersectionObserver) {
          this.intersectionObserver.observe(el);
        }
      });
    }, 100);
  }

  private updateNavbarOnScroll(): void {
    const navbar = document.querySelector('.navbar') as HTMLElement;
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.style.background = 'rgba(10, 10, 10, 0.98)';
      } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
      }
    }
  }

  private createParticles(): void {
    setTimeout(() => {
      const hero = document.querySelector('.hero') as HTMLElement;
      if (hero) {
        for (let i = 0; i < 50; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle';
          particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(0, 255, 136, 0.5);
            border-radius: 50%;
            pointer-events: none;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation: float ${3 + Math.random() * 4}s ease-in-out infinite;
            animation-delay: ${Math.random() * 2}s;
          `;
          hero.appendChild(particle);
        }
      }
    }, 1000);
  }

  private initializeTypingEffect(): void {
    setTimeout(() => {
      const tagline = document.querySelector('.hero .tagline') as HTMLElement;
      if (tagline) {
        const originalText = tagline.textContent || '';
        this.typeWriter(tagline, originalText, 80);
      }
    }, 2000);
  }

  private typeWriter(element: HTMLElement, text: string, speed: number = 100): void {
    let i = 0;
    element.innerHTML = '';

    const type = () => {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, speed);
      }
    };

    type();
  }

  sendMessage(): void {
    const nameInput = document.querySelector('input[placeholder="Votre nom"]') as HTMLInputElement;
    const emailInput = document.querySelector('input[placeholder="Votre email"]') as HTMLInputElement;
    const messageInput = document.querySelector('textarea[placeholder="Votre message"]') as HTMLTextAreaElement;

    if (nameInput && emailInput && messageInput) {
      const name = nameInput.value;
      const email = emailInput.value;
      const message = messageInput.value;

      if (name && email && message) {
        const whatsappMessage = `Bonjour Idy,%0A%0ANom: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0A%0AMessage: ${encodeURIComponent(message)}`;
        const whatsappLink = `https://wa.me/221705060612?text=${whatsappMessage}`;

        window.open(whatsappLink, '_blank');

        // Reset form
        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';

        alert('Message envoyé vers WhatsApp !');
      } else {
        alert('Veuillez remplir tous les champs.');
      }
    }
  }
}
