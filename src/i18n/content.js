/*
 * All site copy lives here, in both languages.
 *
 * ⚠️ Before publishing, replace everything marked TODO / SAMPLE with real details:
 *    links, stats, and the three projects (they show the structure, not real work).
 */

export const links = {
  email: 'raghd@example.com', // TODO: your real email
  linkedin: 'https://www.linkedin.com/in/your-profile', // TODO
  github: 'https://github.com/your-username', // TODO
  tableau: '', // optional: Tableau Public / Behance URL (hidden when empty)
  calendly: '', // optional: booking link (hidden when empty)
  resume: '/resume.pdf', // TODO: add public/resume.pdf
  photo: '/raghd.jpg', // TODO: add public/raghd.jpg (falls back to a monogram)
}

// Shared, language-independent project data. Text lives under content[lang].projects.items[id].
export const projectList = [
  {
    id: 'sales',
    visual: 'dashboard', // dashboard | inventory | process
    image: '', // optional screenshot path, e.g. '/projects/sales.png'
    tags: ['Power BI', 'SQL', 'Excel', 'DAX'],
    links: [
      { type: 'live', href: '#' }, // SAMPLE: replace '#' with real URLs
      { type: 'case', href: '#' },
    ],
  },
  {
    id: 'inventory',
    visual: 'inventory',
    image: '',
    tags: ['MySQL', 'PHP', 'JavaScript', 'ERD'],
    links: [
      { type: 'live', href: '#' },
      { type: 'code', href: '#' },
    ],
  },
  {
    id: 'hr',
    visual: 'process',
    image: '',
    tags: ['BPMN', 'UML', 'Figma', 'Systems Analysis'],
    links: [{ type: 'report', href: '#' }],
  },
]

export const content = {
  en: {
    meta: {
      title: 'Raghd Al-Marshidi — MIS Specialist',
      description:
        'MIS specialist focused on data analysis, systems analysis, and process improvement using Power BI and SQL.',
    },
    nav: {
      logo: 'Raghd',
      links: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'contact', label: 'Contact' },
      ],
      resume: 'Résumé',
      switchTo: 'ع',
      switchLabel: 'التبديل إلى العربية',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skip: 'Skip to content',
      primary: 'Primary',
    },
    hero: {
      status: 'Open to opportunities & internships',
      eyebrow: 'MIS Specialist — Data & Systems',
      name: 'Raghd Al-Marshidi',
      headline: [
        { text: 'Turning data into' },
        { text: 'decisions,', accent: true },
        { text: 'and processes into systems.' },
      ],
      intro:
        'I analyze business processes, design information systems, and build dashboards that help organizations decide faster.',
      primary: 'View My Work',
      secondary: 'Get in Touch',
      scroll: 'Scroll',
      dashboard: {
        sales: 'Sales Overview',
        period: 'Q3',
        vsLast: 'vs last quarter',
        report: 'Report time',
        reportSub: 'Days → minutes',
        erd: 'Data model',
      },
    },
    social: {
      findMe: 'Find me on',
      linkedin: 'LinkedIn profile',
      github: 'GitHub profile',
      tableau: 'Tableau Public',
      email: 'Copy email address',
      copied: 'Email copied ✓',
    },
    about: {
      label: 'About',
      heading: 'Fluent in business. Built for technology.',
      bio: [
        'I studied Management Information Systems, and I’m passionate about turning business challenges into practical technology solutions.',
        'I believe technology alone isn’t enough. Real value comes from understanding what an organization needs first, then choosing the right system to deliver it. That’s why every project I work on starts with analyzing processes and understanding users, then designing a solution with measurable results.',
        'Today, I focus on data analysis and dashboards, database design, and improving business operations through digital systems.',
      ],
      principles: [
        {
          icon: 'target',
          title: 'Business first, then tech',
          text: 'I understand the problem before choosing the tool.',
        },
        {
          icon: 'chart',
          title: 'Data-driven decisions',
          text: 'I turn raw numbers into clear insights leaders can act on.',
        },
        {
          icon: 'workflow',
          title: 'Simple, efficient systems',
          text: 'I design solutions people actually enjoy using.',
        },
      ],
      // SAMPLE values: replace with your real numbers
      stats: [
        { value: '10+', label: 'Projects completed' },
        { value: '4', label: 'Certifications' },
        { value: '2', label: 'Internships' },
        { value: '2', label: 'Languages: Arabic & English' },
      ],
      resume: 'Download Résumé (PDF)',
      photoAlt: 'Portrait of Raghd Al-Marshidi',
    },
    skills: {
      label: 'Skills',
      heading: 'Skills that bridge analysis, technology, and business.',
      intro: 'A focused toolkit I use to understand problems, model data, and deliver working systems.',
      groups: [
        { title: 'Data Analysis', items: ['Excel (Advanced)', 'Power BI', 'SQL', 'Python (Pandas)', 'Tableau'] },
        { title: 'Systems Analysis & Design', items: ['Requirements Gathering', 'UML', 'ERD', 'BPMN', 'Use Cases'] },
        { title: 'Databases', items: ['MySQL', 'SQL Server', 'Database Design', 'Normalization'] },
        { title: 'Business Systems', items: ['ERP (SAP / Odoo)', 'CRM', 'Process Improvement'] },
        { title: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
        { title: 'Project Management', items: ['Agile', 'Scrum', 'Jira', 'Trello'] },
      ],
      softTitle: 'Soft skills',
      soft: ['Problem Solving', 'Communication', 'Teamwork', 'Analytical Thinking', 'Presentation'],
      learningTitle: 'Currently learning',
      learning: ['AI for Data Analysis', 'Microsoft PL-300'],
    },
    projects: {
      label: 'Projects',
      heading: 'Projects that solve real problems.',
      intro: 'Each one starts with a business problem and ends with a working solution.',
      featured: 'Featured',
      labels: { challenge: 'Challenge', solution: 'Solution', result: 'Result' },
      actions: { live: 'Live Demo', code: 'Source Code', report: 'View Report', case: 'Case Study' },
      more: 'Want to see more?',
      moreLink: 'Explore all projects on GitHub',
      // SAMPLE projects: replace with your real work
      items: {
        sales: {
          title: 'Sales Analytics Dashboard',
          summary:
            'An interactive dashboard tracking sales, products, and regional performance to support management decisions.',
          challenge: 'Management relied on manual Excel reports that took days to prepare.',
          solution: 'Cleaned the data with SQL, then built a data model and an interactive Power BI dashboard.',
          result: 'Reporting time went from days to minutes',
        },
        inventory: {
          title: 'Inventory Management System',
          summary: 'A web-based system to track products, stock levels, and suppliers, with low-stock alerts.',
          challenge: 'Frequent manual counting errors and unexpected stock-outs.',
          solution: 'Gathered requirements, designed the database (ERD), and built a user-friendly system.',
          result: 'Fewer counting errors and early low-stock warnings',
        },
        hr: {
          title: 'Recruitment Process Redesign',
          summary: 'An analysis of an HR hiring process, with a proposed digital system to replace paperwork.',
          challenge: 'A slow hiring process that depended on paperwork and long email chains.',
          solution: 'Mapped the current and future processes in BPMN, then designed UML models and a prototype.',
          result: 'A simpler, fully digital hiring flow',
        },
      },
    },
    contact: {
      label: 'Contact',
      heading: 'Let’s turn ideas into systems that work.',
      text: 'I’m currently looking for full-time roles, internships, and freelance projects in data analysis, systems analysis, and process improvement. If you have an opportunity or an idea, I’d love to hear from you.',
      emailLabel: 'Email',
      copy: 'Copy',
      copied: 'Copied ✓',
      sendEmail: 'Send an Email',
      bookCall: 'Book a 15-min Call',
      response: 'I usually reply within 24 hours.',
      form: {
        title: 'Send a message',
        name: 'Name',
        namePh: 'Your name',
        email: 'Email',
        emailPh: 'you@company.com',
        message: 'Message',
        messagePh: 'Tell me about the opportunity or project…',
        submit: 'Send Message',
        success: 'Thanks for reaching out! Your email app is opening with the message ready to send.',
        subject: 'Portfolio inquiry from',
      },
    },
    footer: {
      name: 'Raghd Al-Marshidi',
      rights: 'All rights reserved.',
      built: 'Designed & built with care.',
      top: 'Back to top',
    },
  },

  ar: {
    meta: {
      title: 'رغد المرشدي — نظم المعلومات الإدارية',
      description:
        'نظم المعلومات الإدارية: تحليل البيانات، وتحليل النظم، وتحسين العمليات باستخدام Power BI وSQL.',
    },
    nav: {
      logo: 'رغد',
      links: [
        { id: 'about', label: 'عنّي' },
        { id: 'skills', label: 'المهارات' },
        { id: 'projects', label: 'المشاريع' },
        { id: 'contact', label: 'تواصل' },
      ],
      resume: 'السيرة الذاتية',
      switchTo: 'EN',
      switchLabel: 'Switch to English',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      skip: 'تخطَّ إلى المحتوى',
      primary: 'التنقل الرئيسي',
    },
    hero: {
      status: 'أرحّب بفرص العمل والتدريب',
      eyebrow: 'نظم المعلومات الإدارية · بيانات وأنظمة',
      name: 'رغد المرشدي',
      headline: [
        { text: 'أحوّل البيانات إلى' },
        { text: 'قرارات،', accent: true },
        { text: 'والعمليات إلى أنظمة.' },
      ],
      intro: 'أحلل العمليات، وأصمم الأنظمة، وأبني لوحات بيانات تساعد المؤسسات على اتخاذ قرارات أسرع.',
      primary: 'شاهد مشاريعي',
      secondary: 'تواصل معي',
      scroll: 'مرّر للأسفل',
      dashboard: {
        sales: 'نظرة على المبيعات',
        period: 'الربع الثالث',
        vsLast: 'مقارنة بالربع السابق',
        report: 'وقت التقارير',
        reportSub: 'من أيام إلى دقائق',
        erd: 'نموذج البيانات',
      },
    },
    social: {
      findMe: 'تجدني على',
      linkedin: 'حساب LinkedIn',
      github: 'حساب GitHub',
      tableau: 'Tableau Public',
      email: 'نسخ البريد الإلكتروني',
      copied: 'تم نسخ البريد ✓',
    },
    about: {
      label: 'عنّي',
      heading: 'أفهم لغة الإدارة، وأتحدث لغة التقنية.',
      bio: [
        'درستُ نظم المعلومات الإدارية، وشغفي هو تحويل التحديات الإدارية إلى حلول تقنية عملية.',
        'أؤمن أن التقنية وحدها لا تكفي؛ فالقيمة الحقيقية تأتي من فهم احتياج المؤسسة أولاً، ثم اختيار النظام المناسب لها. لذلك أبدأ كل مشروع بتحليل العمليات وفهم المستخدمين، ثم أصمم حلاً يحقق نتائج قابلة للقياس.',
        'أركّز اليوم على تحليل البيانات وبناء لوحات المعلومات، وتصميم قواعد البيانات، وتحسين العمليات الإدارية بالأنظمة الرقمية.',
      ],
      principles: [
        { icon: 'target', title: 'العمل أولاً، ثم التقنية', text: 'أفهم المشكلة الإدارية قبل اختيار الأداة.' },
        { icon: 'chart', title: 'قرارات مبنية على البيانات', text: 'أحوّل الأرقام إلى رؤى واضحة يفهمها صانع القرار.' },
        { icon: 'workflow', title: 'أنظمة بسيطة وفعّالة', text: 'أصمم حلولاً سهلة الاستخدام توفر الوقت والجهد.' },
      ],
      // SAMPLE values: replace with your real numbers
      stats: [
        { value: '+10', label: 'مشاريع منجزة' },
        { value: '4', label: 'شهادات احترافية' },
        { value: '2', label: 'تدريب ميداني' },
        { value: '2', label: 'لغتان: العربية والإنجليزية' },
      ],
      resume: 'تحميل السيرة الذاتية (PDF)',
      photoAlt: 'صورة رغد المرشدي',
    },
    skills: {
      label: 'المهارات',
      heading: 'مهارات تجمع بين التحليل والتقنية والإدارة.',
      intro: 'مجموعة مركّزة من الأدوات أستخدمها لفهم المشكلات، ونمذجة البيانات، وتسليم أنظمة تعمل.',
      groups: [
        { title: 'تحليل البيانات', items: ['Excel (متقدم)', 'Power BI', 'SQL', 'Python (Pandas)', 'Tableau'] },
        { title: 'تحليل وتصميم النظم', items: ['جمع المتطلبات', 'UML', 'ERD', 'BPMN', 'حالات الاستخدام'] },
        { title: 'قواعد البيانات', items: ['MySQL', 'SQL Server', 'تصميم قواعد البيانات', 'التطبيع (Normalization)'] },
        { title: 'أنظمة الأعمال', items: ['ERP (SAP / Odoo)', 'CRM', 'تحسين العمليات'] },
        { title: 'تطوير الويب', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
        { title: 'إدارة المشاريع', items: ['Agile', 'Scrum', 'Jira', 'Trello'] },
      ],
      softTitle: 'المهارات الشخصية',
      soft: ['حل المشكلات', 'التواصل الفعّال', 'العمل الجماعي', 'التفكير التحليلي', 'العرض والتقديم'],
      learningTitle: 'أتعلّم حالياً',
      learning: ['تحليل البيانات بالذكاء الاصطناعي', 'Microsoft PL-300'],
    },
    projects: {
      label: 'المشاريع',
      heading: 'مشاريع تحل مشكلات حقيقية.',
      intro: 'كل مشروع يبدأ بمشكلة إدارية وينتهي بحل يعمل.',
      featured: 'مميز',
      labels: { challenge: 'التحدي', solution: 'الحل', result: 'النتيجة' },
      actions: { live: 'العرض المباشر', code: 'الكود المصدري', report: 'عرض التقرير', case: 'دراسة الحالة' },
      more: 'تريد رؤية المزيد؟',
      moreLink: 'استكشف كل مشاريعي على GitHub',
      // SAMPLE projects: replace with your real work
      items: {
        sales: {
          title: 'لوحة تحليل المبيعات',
          summary: 'لوحة معلومات تفاعلية تعرض أداء المبيعات والمنتجات والمناطق لدعم قرارات الإدارة.',
          challenge: 'كانت الإدارة تعتمد على تقارير Excel يدوية يستغرق إعدادها أياماً.',
          solution: 'نظّفت البيانات بـ SQL، ثم بنيت نموذج بيانات ولوحة تفاعلية في Power BI.',
          result: 'وقت إعداد التقارير: من أيام إلى دقائق',
        },
        inventory: {
          title: 'نظام إدارة المخزون',
          summary: 'نظام ويب لتتبع المنتجات والكميات والموردين، مع تنبيهات عند انخفاض المخزون.',
          challenge: 'أخطاء متكررة في الجرد اليدوي ونفاد المنتجات دون إنذار مسبق.',
          solution: 'حللت المتطلبات، وصممت قاعدة البيانات (ERD)، وبنيت النظام بواجهة سهلة.',
          result: 'أخطاء جرد أقل وتنبيهات مبكرة قبل نفاد المخزون',
        },
        hr: {
          title: 'إعادة تصميم عملية التوظيف',
          summary: 'دراسة تحليلية لعملية التوظيف في الموارد البشرية، مع نظام رقمي مقترح بدلاً من الورق.',
          challenge: 'عملية توظيف بطيئة تعتمد على الورق وسلاسل طويلة من الرسائل.',
          solution: 'رسمت العملية الحالية والمقترحة بـ BPMN، ثم صممت نماذج UML ونموذجاً أولياً.',
          result: 'عملية توظيف أبسط ورقمية بالكامل',
        },
      },
    },
    contact: {
      label: 'تواصل',
      heading: 'لنحوّل الأفكار إلى أنظمة تعمل.',
      text: 'أبحث حالياً عن فرص عمل أو تدريب أو مشاريع مستقلة في تحليل البيانات وتحليل النظم وتحسين العمليات. إن كانت لديك فرصة أو فكرة، يسعدني أن أسمع منك.',
      emailLabel: 'البريد الإلكتروني',
      copy: 'نسخ',
      copied: 'تم النسخ ✓',
      sendEmail: 'أرسل بريداً إلكترونياً',
      bookCall: 'احجز مكالمة لمدة 15 دقيقة',
      response: 'أرد عادةً خلال 24 ساعة.',
      form: {
        title: 'أرسل رسالة',
        name: 'الاسم',
        namePh: 'اسمك',
        email: 'البريد الإلكتروني',
        emailPh: 'you@company.com',
        message: 'الرسالة',
        messagePh: 'حدّثني عن الفرصة أو المشروع…',
        submit: 'أرسل الرسالة',
        success: 'شكراً لتواصلك! يُفتح الآن تطبيق البريد والرسالة جاهزة للإرسال.',
        subject: 'استفسار من الموقع —',
      },
    },
    footer: {
      name: 'رغد المرشدي',
      rights: 'جميع الحقوق محفوظة.',
      built: 'صُمّم وبُني بعناية.',
      top: 'العودة للأعلى',
    },
  },
}
