/*
 * All site copy lives here, in both languages.
 * Skills are still the general MIS toolkit from the first draft: adjust them to match your experience.
 */

export const links = {
  linkedin: 'https://www.linkedin.com/in/raghd-n-almrshdi-a95a38389',
  x: 'https://x.com/rudhalmrshdi',
  github: '', // optional (hidden when empty)
  email: 'mailto:raghdalmrshdi1@outlook.sa',
}

// Shared, language-independent project data. Text lives under content[lang].projects.items[id].
export const projectList = [
  {
    id: 'jarir',
    visual: 'loyalty', // loyalty | dashboard | inventory | process
    image: '', // optional screenshot path, e.g. '/projects/jarir.png'
    tags: ['Requirements Analysis', 'Use Case', 'Class Diagram', 'BPMN', 'Database Design', 'UI Design'],
    links: [{ type: 'report', href: '/projects/jarir-loyalty-system.pdf' }],
  },
  {
    id: 'rasin',
    visual: 'security',
    image: '',
    tags: ['Physical Security', 'Risk Management', 'CIA Triad', 'ECC-2:2024', 'ISO/IEC 27001', 'NIST SP 800-53'],
    links: [{ type: 'site', href: 'https://rasin-presentation.vercel.app/' }],
  },
]

// Text lives under content[lang].certificates.items[id]. `file` is optional (button hidden when empty).
export const certificateList = [
  { id: 'ai', icon: 'spark', file: '/certificates/sdaia-ai-fundamentals.pdf' },
  { id: 'computer', icon: 'monitor', file: '' },
  { id: 'english', icon: 'language', file: '' },
  { id: 'spe', icon: 'award', file: '' },
  { id: 'bi', icon: 'chart', file: '' },
  { id: 'writing', icon: 'book', file: '' },
]

export const content = {
  en: {
    meta: {
      title: 'Raghd Al-Marshidi — MIS',
      description:
        'Management Information Systems: data analysis, systems analysis, and process improvement.',
    },
    nav: {
      logo: 'Raghd',
      links: [
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'certificates', label: 'Certificates' },
        { id: 'contact', label: 'Contact' },
      ],
      switchTo: 'ع',
      switchLabel: 'التبديل إلى العربية',
      themeToLight: 'Switch to light mode',
      themeToDark: 'Switch to dark mode',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      skip: 'Skip to content',
      primary: 'Primary',
    },
    hero: {
      status: 'Open to opportunities & internships',
      eyebrow: 'Management Information Systems',
      name: 'Raghd Al-Marshidi',
      university: 'Taif University',
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
    },
    social: {
      findMe: 'Find me on',
      linkedin: 'LinkedIn',
      x: 'X (Twitter)',
      github: 'GitHub',
      email: 'Email',
    },
    about: {
      label: 'About',
      heading: 'Fluent in business. Built for technology.',
      bio: [
        'I study Management Information Systems at Taif University, and I’m passionate about turning business challenges into practical technology solutions.',
        'I believe technology alone isn’t enough. Real value comes from understanding what an organization needs first, then choosing the right system to deliver it. That’s why my work starts with analyzing processes and listening to users, then designing a solution around what they actually need.',
        'Today, I focus on requirements analysis, system modeling, database design, and improving business operations through digital systems.',
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
          text: 'I turn raw numbers and user feedback into clear insights.',
        },
        {
          icon: 'workflow',
          title: 'Simple, efficient systems',
          text: 'I design solutions people actually enjoy using.',
        },
      ],
      stats: [{ value: '2', label: 'Languages: Arabic & English' }],
    },
    skills: {
      label: 'Skills',
      heading: 'Skills that bridge analysis, technology, and business.',
      intro: 'A focused toolkit I use to understand problems, model data, and deliver working systems.',
      groups: [
        { title: 'Data Analysis', items: ['Excel (Advanced)', 'Power BI', 'SQL', 'Python (Pandas)', 'Tableau'] },
        {
          title: 'Systems Analysis & Design',
          items: ['Requirements Gathering', 'UML', 'ERD', 'BPMN', 'Use Case Diagrams', 'User Interface Design'],
        },
        { title: 'Databases', items: ['MySQL', 'SQL Server', 'Database Design', 'Normalization'] },
        { title: 'Business Systems', items: ['ERP (SAP / Odoo)', 'CRM', 'Process Improvement'] },
        { title: 'Web Development', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
        { title: 'Project Management', items: ['Agile', 'Scrum', 'Jira', 'Trello'] },
        {
          title: 'Office & AI Tools',
          items: ['Microsoft Office', 'Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel', 'AI Prompting'],
        },
      ],
      softTitle: 'Soft skills',
      soft: ['Problem Solving', 'Communication', 'Teamwork', 'Analytical Thinking', 'Presentation'],
      learningTitle: 'Currently learning',
      learning: ['AI for Data Analysis'],
    },
    projects: {
      label: 'Projects',
      heading: 'From real problem to complete system design.',
      intro: 'Team projects carried through every stage of analysis and design, from field research to standards-based solutions.',
      featured: 'Featured',
      labels: { challenge: 'Challenge', solution: 'Solution', result: 'Result' },
      actions: {
        live: 'Live Demo',
        code: 'Source Code',
        report: 'View Project (PDF)',
        case: 'Case Study',
        site: 'View Interactive Presentation',
      },
      items: {
        jarir: {
          meta: 'Taif University · MIS · Team project · 2025/2026',
          title: 'Jarir Loyalty & Rewards System',
          summary:
            'A redesign of Jarir Bookstore’s loyalty program: from a fixed-discount card to an in-app platform with points, membership tiers, and personalized rewards.',
          challenge:
            'The current program is a fixed-discount card with only two spend-based levels and limited external partnerships. There is no real points or rewards system.',
          solution:
            'Interviewed the Taif branch manager and surveyed 72 customers, defined requirements for customers, employees, and admins, then modeled the system with Use Case, Class, and BPMN diagrams.',
          result:
            'A complete system design: Bronze, Silver, and Gold tiers, points earning and redemption, smart notifications, a 9-table database, and interfaces for every user.',
          highlights: ['Manager interview', '72-customer survey', 'UML & BPMN models', '9-table database', '4 interface designs'],
        },
        rasin: {
          meta: 'Taif University · MIS · Information Security & Risk Management · Team of 6',
          title: 'RASIN Integrated Security Center',
          summary:
            'A physical security design for a virtual cybersecurity center: a three-floor building secured in layers, presented as an interactive website.',
          challenge:
            'Valuable data is only as safe as the place it lives in. Without a secure physical environment, digital controls can be bypassed by anyone who reaches the servers or records.',
          solution:
            'Divided the building into 5 security zones (Z0–Z4) and combined physical barriers, surveillance, access control, guarding, and environmental protection, mapped to the CIA triad and to ECC-2:2024, ISO/IEC 27001:2022, and NIST SP 800-53.',
          result:
            'A complete design covering 54 rooms with 144 security devices, interactive floor plans, a permission matrix for 9 roles, and guided scenarios such as a night intrusion attempt.',
          highlights: ['3 floors · 54 rooms', '144 security devices', '5 security zones', '46 cameras', '3 security standards'],
        },
      },
    },
    certificates: {
      label: 'Certificates',
      heading: 'Always learning, always certified.',
      intro: 'Courses that strengthen my foundation in technology, data, and communication.',
      view: 'View certificate',
      items: {
        ai: {
          title: 'Fundamentals of Artificial Intelligence',
          issuer: 'SDAIA — Saudi Data & AI Authority',
          date: 'September 2025',
          detail: 'Part of the “One Million Saudis in AI” initiative',
        },
        computer: {
          title: 'Basic Computer Skills',
          issuer: 'International Academy for Training',
          date: '2025',
          detail: '60 hours · Score 100/100',
        },
        english: {
          title: 'Basic English Course',
          issuer: 'International Academy for Training',
          date: '2025',
          detail: '60 hours · Score 100/100',
        },
        spe: {
          title: 'SPE Membership',
          issuer: 'Society of Petroleum Engineers (SPE International)',
          date: '2025',
          detail: 'Member of SPE International since 2025',
        },
        bi: {
          title: 'Business Intelligence Workshop',
          issuer: 'Taif University · College of Computers and IT',
          date: 'November 2024',
          detail: 'Online workshop via the Maharat platform',
        },
        writing: {
          title: 'Common Mistakes in Academic Theses',
          issuer: 'Taif University · College of Arts',
          date: 'November 2024',
          detail: 'Online workshop via the Maharat platform',
        },
      },
    },
    contact: {
      label: 'Contact',
      heading: 'Let’s turn ideas into systems that work.',
      text: 'I’m currently looking for opportunities and internships in data analysis, systems analysis, and process improvement. If you have an opportunity or an idea, I’d love to hear from you.',
      channels: {
        linkedin: { label: 'LinkedIn', hint: 'Connect professionally' },
        x: { label: 'X (Twitter)', hint: '@rudhalmrshdi' },
        github: { label: 'GitHub', hint: 'See my code' },
        email: { label: 'Email', hint: 'raghdalmrshdi1@outlook.sa' },
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
      description: 'نظم المعلومات الإدارية: تحليل البيانات، وتحليل النظم، وتحسين العمليات.',
    },
    nav: {
      logo: 'رغد',
      links: [
        { id: 'about', label: 'عنّي' },
        { id: 'skills', label: 'المهارات' },
        { id: 'projects', label: 'المشاريع' },
        { id: 'certificates', label: 'الشهادات' },
        { id: 'contact', label: 'تواصل' },
      ],
      switchTo: 'EN',
      switchLabel: 'Switch to English',
      themeToLight: 'التبديل إلى الوضع الساطع',
      themeToDark: 'التبديل إلى الوضع الداكن',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      skip: 'تخطَّ إلى المحتوى',
      primary: 'التنقل الرئيسي',
    },
    hero: {
      status: 'أرحّب بفرص العمل والتدريب',
      eyebrow: 'نظم المعلومات الإدارية',
      name: 'رغد المرشدي',
      university: 'جامعة الطائف',
      headline: [
        { text: 'أحوّل البيانات إلى' },
        { text: 'قرارات،', accent: true },
        { text: 'والعمليات إلى أنظمة.' },
      ],
      intro: 'أحلل العمليات، وأصمم الأنظمة، وأبني لوحات بيانات تساعد المؤسسات على اتخاذ قرارات أسرع.',
      primary: 'شاهد مشاريعي',
      secondary: 'تواصل معي',
      scroll: 'مرّر للأسفل',
    },
    social: {
      findMe: 'تجدني على',
      linkedin: 'LinkedIn',
      x: 'X (تويتر)',
      github: 'GitHub',
      email: 'البريد الإلكتروني',
    },
    about: {
      label: 'عنّي',
      heading: 'أفهم لغة الإدارة، وأتحدث لغة التقنية.',
      bio: [
        'أدرس نظم المعلومات الإدارية في جامعة الطائف، وشغفي هو تحويل التحديات الإدارية إلى حلول تقنية عملية.',
        'أؤمن أن التقنية وحدها لا تكفي؛ فالقيمة الحقيقية تأتي من فهم احتياج المؤسسة أولاً، ثم اختيار النظام المناسب لها. لذلك أبدأ عملي بتحليل العمليات والاستماع للمستخدمين، ثم أصمم حلاً مبنياً على احتياجهم الفعلي.',
        'أركّز اليوم على تحليل المتطلبات، ونمذجة الأنظمة، وتصميم قواعد البيانات، وتحسين العمليات الإدارية بالأنظمة الرقمية.',
      ],
      principles: [
        { icon: 'target', title: 'العمل أولاً، ثم التقنية', text: 'أفهم المشكلة الإدارية قبل اختيار الأداة.' },
        { icon: 'chart', title: 'قرارات مبنية على البيانات', text: 'أحوّل الأرقام وآراء المستخدمين إلى رؤى واضحة.' },
        { icon: 'workflow', title: 'أنظمة بسيطة وفعّالة', text: 'أصمم حلولاً سهلة الاستخدام توفر الوقت والجهد.' },
      ],
      stats: [{ value: '2', label: 'لغتان: العربية والإنجليزية' }],
    },
    skills: {
      label: 'المهارات',
      heading: 'مهارات تجمع بين التحليل والتقنية والإدارة.',
      intro: 'مجموعة مركّزة من الأدوات أستخدمها لفهم المشكلات، ونمذجة البيانات، وتسليم أنظمة تعمل.',
      groups: [
        { title: 'تحليل البيانات', items: ['Excel (متقدم)', 'Power BI', 'SQL', 'Python (Pandas)', 'Tableau'] },
        {
          title: 'تحليل وتصميم النظم',
          items: ['جمع المتطلبات', 'UML', 'ERD', 'BPMN', 'مخططات حالات الاستخدام', 'تصميم واجهات المستخدم'],
        },
        { title: 'قواعد البيانات', items: ['MySQL', 'SQL Server', 'تصميم قواعد البيانات', 'التطبيع (Normalization)'] },
        { title: 'أنظمة الأعمال', items: ['ERP (SAP / Odoo)', 'CRM', 'تحسين العمليات'] },
        { title: 'تطوير الويب', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
        { title: 'إدارة المشاريع', items: ['Agile', 'Scrum', 'Jira', 'Trello'] },
        {
          title: 'أدوات المكتب والذكاء الاصطناعي',
          items: ['Microsoft Office', 'Microsoft Word', 'Microsoft PowerPoint', 'Microsoft Excel', 'هندسة الأوامر (AI Prompting)'],
        },
      ],
      softTitle: 'المهارات الشخصية',
      soft: ['حل المشكلات', 'التواصل الفعّال', 'العمل الجماعي', 'التفكير التحليلي', 'العرض والتقديم'],
      learningTitle: 'أتعلّم حالياً',
      learning: ['تحليل البيانات بالذكاء الاصطناعي'],
    },
    projects: {
      label: 'المشاريع',
      heading: 'من مشكلة حقيقية إلى تصميم نظام متكامل.',
      intro: 'مشاريع جماعية مرّت بكل مراحل التحليل والتصميم، من البحث الميداني إلى حلول مبنية على المعايير.',
      featured: 'مميز',
      labels: { challenge: 'التحدي', solution: 'الحل', result: 'النتيجة' },
      actions: {
        live: 'العرض المباشر',
        code: 'الكود المصدري',
        report: 'عرض المشروع (PDF)',
        case: 'دراسة الحالة',
        site: 'عرض المشروع التفاعلي',
      },
      items: {
        jarir: {
          meta: 'جامعة الطائف · نظم المعلومات الإدارية · مشروع جماعي · الفصل الثاني 1447هـ',
          title: 'تطوير نظام الولاء والمكافآت لجرير',
          summary:
            'إعادة تصميم برنامج الولاء في مكتبة جرير: من بطاقة خصم ثابت إلى منصة داخل التطبيق تعتمد على النقاط ومستويات العضوية والمكافآت المخصصة.',
          challenge:
            'يقتصر النظام الحالي على بطاقة خصم ثابت بمستويين فقط حسب قيمة المشتريات، مع شراكات خارجية محدودة، دون نظام نقاط أو مكافآت فعلي.',
          solution:
            'أجرينا مقابلة مع مدير فرع الطائف واستبياناً شمل 72 عميلاً، وحددنا المتطلبات الوظيفية للعميل والموظف ومسؤول النظام، ثم نمذجنا النظام بمخططات حالات الاستخدام والفصائل وBPMN.',
          result:
            'تصميم نظام متكامل: مستويات برونزي وفضي وذهبي، وتجميع النقاط واستبدالها، وإشعارات ذكية، وقاعدة بيانات من 9 جداول، وواجهات لكل مستخدم.',
          highlights: ['مقابلة مع المدير', 'استبيان 72 عميلاً', 'نماذج UML وBPMN', 'قاعدة بيانات من 9 جداول', '4 واجهات مقترحة'],
        },
        rasin: {
          meta: 'جامعة الطائف · نظم المعلومات الإدارية · أمن المعلومات وإدارة المخاطر · فريق من 6 طالبات',
          title: 'مركز رَصين للأمن والحماية المتكاملة',
          summary:
            'تصميم أمن مادي لمركز افتراضي للأمن السيبراني: مبنى من ثلاثة طوابق محمي بطبقات متعددة، ومعروض كموقع تفاعلي.',
          challenge:
            'البيانات الثمينة لا تكون آمنة إلا إذا كان المكان الذي تُحفظ فيه آمناً؛ فبدون بيئة مادية محمية يمكن تجاوز الضوابط الرقمية بالوصول المباشر إلى الخوادم أو السجلات.',
          solution:
            'قسّمنا المبنى إلى 5 مناطق أمنية (Z0–Z4)، وجمعنا بين الحواجز المادية والمراقبة والتحكم بالوصول والحراسة والحماية البيئية، وربطنا التصميم بثلاثية CIA وبمعايير ECC-2:2024 وISO/IEC 27001:2022 وNIST SP 800-53.',
          result:
            'تصميم متكامل يغطي 54 غرفة بـ144 جهازاً أمنياً، مع مخططات طوابق تفاعلية، ومصفوفة صلاحيات لـ9 أدوار وظيفية، وسيناريوهات مثل محاولة اقتحام ليلية.',
          highlights: ['3 طوابق · 54 غرفة', '144 جهازاً أمنياً', '5 مناطق أمنية', '46 كاميرا', '3 معايير أمنية'],
        },
      },
    },
    certificates: {
      label: 'الشهادات',
      heading: 'تعلّم مستمر، وشهادات تثبته.',
      intro: 'دورات تعزز أساسي في التقنية والبيانات والتواصل.',
      view: 'عرض الشهادة',
      items: {
        ai: {
          title: 'مبادئ الذكاء الاصطناعي',
          issuer: 'الهيئة السعودية للبيانات والذكاء الاصطناعي (سدايا)',
          date: 'سبتمبر 2025',
          detail: 'ضمن مبادرة مليون سعودي للذكاء الاصطناعي',
        },
        computer: {
          title: 'دورة الحاسب الآلي',
          issuer: 'الأكاديمية العالمية الدولية للتدريب',
          date: '2025',
          detail: '60 ساعة · بدرجة 100/100',
        },
        english: {
          title: 'دورة اللغة الإنجليزية',
          issuer: 'الأكاديمية العالمية الدولية للتدريب',
          date: '2025',
          detail: '60 ساعة · بدرجة 100/100',
        },
        spe: {
          title: 'عضوية جمعية مهندسي البترول',
          issuer: 'جمعية مهندسي البترول الدولية (SPE)',
          date: '2025',
          detail: 'عضو في SPE International منذ 2025',
        },
        bi: {
          title: 'ورشة عمل ذكاء الأعمال',
          issuer: 'جامعة الطائف · كلية الحاسبات وتقنية المعلومات',
          date: 'نوفمبر 2024',
          detail: 'ورشة أونلاين عبر منصة مهارات',
        },
        writing: {
          title: 'الأخطاء الشائعة في الرسائل العلمية',
          issuer: 'جامعة الطائف · كلية الآداب',
          date: 'نوفمبر 2024',
          detail: 'ورشة أونلاين عبر منصة مهارات',
        },
      },
    },
    contact: {
      label: 'تواصل',
      heading: 'لنحوّل الأفكار إلى أنظمة تعمل.',
      text: 'أبحث حالياً عن فرص عمل وتدريب في تحليل البيانات وتحليل النظم وتحسين العمليات. إن كانت لديك فرصة أو فكرة، يسعدني أن أسمع منك.',
      channels: {
        linkedin: { label: 'LinkedIn', hint: 'لنتواصل مهنياً' },
        x: { label: 'X (تويتر)', hint: '@rudhalmrshdi' },
        github: { label: 'GitHub', hint: 'اطّلع على أعمالي البرمجية' },
        email: { label: 'البريد الإلكتروني', hint: 'raghdalmrshdi1@outlook.sa' },
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
