import {
  Project,
  Service,
  SkillTool,
  ProcessStep,
  ExperienceItem,
  EducationItem,
  Testimonial,
} from '../types/portfolio';

export const PERSONAL_INFO = {
  name: 'Muhammad Mahad Obaid',
  title: 'Modern Graphic Designer',
  tagline: 'Creative • Modern • Professional',
  about:
    'I’m a passionate graphic designer focused on creating clean, modern, and meaningful visual designs. I help brands communicate their ideas through creative and professional visuals.',
  extendedBio:
    'Based in Karachi, Pakistan, I specialize in crafting distinctive visual identities, high-impact marketing assets, and functional design systems. My work is anchored in visual clarity, disciplined typography, and balanced composition. Rather than relying on passing fads, I build timeless visual solutions that elevate brand presence across both print and digital touchpoints.',
  philosophy:
    'Design is not merely visual styling—it is visual problem-solving. Every curve, spacing decision, and typographic scale must serve a clear purpose and communicate with conviction.',
  email: 'mahadobaid2005@gmail.com',
  phone: '+92 331 3935888',
  phoneClean: '+923313935888',
  whatsappUrl: 'https://wa.me/923313935888',
  location: 'Karachi, Pakistan',
  website: 'www.M.M.Ographicsndesigner.com',
  websiteUrl: 'https://www.M.M.Ographicsndesigner.com',
  heroPortrait: '/src/assets/images/regenerated_image_1792237642578.png',
  socialLinks: [
    { name: 'Behance', handle: '@mahaddarazs', url: 'https://www.behance.net/mahaddarazs', icon: 'behance', label: 'Bē' },
    { name: 'Instagram', handle: '@m.m.otrendy', url: 'https://www.instagram.com/m.m.otrendy/', icon: 'instagram', label: 'IG' },
    { name: 'Dribbble', handle: 'Mahad Obaid', url: 'https://dribbble.com', icon: 'dribbble', label: 'Dr' },
    { name: 'LinkedIn', handle: 'Muhammad Mahad Obaid', url: 'https://www.linkedin.com/in/muhammad-mahad-obaid-04b181407/', icon: 'linkedin', label: 'in' },
  ],
  stats: [
    { label: 'Creative Disciplines', value: '8+' },
    { label: 'Core Tools Mastered', value: '5+' },
    { label: 'Dedicated Focus', value: '100%' },
    { label: 'Client Satisfaction', value: '5.0★' },
  ],
};

export const SERVICES: Service[] = [
  {
    id: 'logo-design',
    title: 'Logo Design',
    tagline: 'Memorable brand marks & monograms',
    description:
      'Distinctive, versatile logo marks crafted with mathematical precision, scalable vector geometry, and deep conceptual relevance.',
    deliverables: ['Vector Master Files (AI, EPS, SVG)', 'High-Res Raster Files (PNG, JPG)', 'Monochrome & Dark Mode Variations', 'Favicon & App Icons'],
    turnaround: '3 – 5 Business Days',
    tools: ['Adobe Illustrator', 'Pen & Paper', 'Photoshop'],
    iconName: 'Shapes',
  },
  {
    id: 'brand-identity',
    title: 'Brand Identity',
    tagline: 'Comprehensive visual design systems',
    description:
      'Cohesive design guidelines unifying typography scales, curated color palettes, graphic motifs, and application rules across all touchpoints.',
    deliverables: ['Brand Style Guide PDF', 'Color Palette & Hierarchy', 'Typography Pairing Rules', 'Collateral Assets Kit'],
    turnaround: '7 – 10 Business Days',
    tools: ['Illustrator', 'Figma', 'InDesign'],
    iconName: 'Layers',
  },
  {
    id: 'social-media',
    title: 'Social Media Design',
    tagline: 'High-conversion feeds & ad graphics',
    description:
      'Eye-catching Instagram feeds, carousel story kits, and LinkedIn banner systems that stop the scroll and amplify engagement.',
    deliverables: ['Instagram Grid & Story Templates', 'LinkedIn & Twitter Banners', 'Reusable Canva/Figma Templates', 'High-Res Export Sets'],
    turnaround: '2 – 4 Business Days',
    tools: ['Photoshop', 'Canva', 'Illustrator'],
    iconName: 'Share2',
  },
  {
    id: 'posters-flyers',
    title: 'Posters & Flyers',
    tagline: 'Impactful print & promotional art',
    description:
      'Bold typographic compositions and visual hierarchy engineered for events, cultural festivals, product launches, and commercial campaigns.',
    deliverables: ['Print-Ready CMYK Files with Bleed', 'Digital Promotional Formats', 'High-Res Presentation Mockups'],
    turnaround: '2 – 4 Business Days',
    tools: ['Photoshop', 'Illustrator', 'InDesign'],
    iconName: 'FileText',
  },
  {
    id: 'business-cards',
    title: 'Business Cards & Stationery',
    tagline: 'Tactile corporate print collateral',
    description:
      'Premium corporate identity suites, letterheads, invoice templates, and embossed business cards that leave lasting professional impressions.',
    deliverables: ['Standard & Custom Die-Cut Specs', 'Foil Stamping / Emboss Layers', 'Letterhead DOCX / PDF', 'Envelope & Folder Layouts'],
    turnaround: '3 – 5 Business Days',
    tools: ['Illustrator', 'InDesign', 'Photoshop'],
    iconName: 'CreditCard',
  },
  {
    id: 'brochures-catalogs',
    title: 'Brochures & Catalogs',
    tagline: 'Structured multi-page editorial layouts',
    description:
      'Multi-fold brochures, company profiles, and product catalogs designed with meticulous baseline grids and editorial typography.',
    deliverables: ['Bi-fold & Tri-fold Formats', 'Multi-Page Booklet PDF', 'Print Production Prepress Specs', 'Interactive Digital PDF'],
    turnaround: '5 – 8 Business Days',
    tools: ['Adobe InDesign', 'Illustrator', 'Photoshop'],
    iconName: 'BookOpen',
  },
  {
    id: 'ui-ux-design',
    title: 'UI/UX Design Concepts',
    tagline: 'Clean web & mobile interfaces',
    description:
      'User-centric wireframes, modern interface layouts, and interactive prototypes tailored for SaaS, e-commerce, and creative portfolios.',
    deliverables: ['Figma Design Files', 'Interactive Clickable Prototype', 'Component Library & Design Tokens', 'Developer Asset Handoff'],
    turnaround: '7 – 14 Business Days',
    tools: ['Figma', 'Photoshop', 'Illustrator'],
    iconName: 'Monitor',
  },
  {
    id: 'packaging-design',
    title: 'Product Packaging Design',
    tagline: 'Shelf-ready labels & structural boxes',
    description:
      'Luxury consumer packaging, cosmetic boxes, and product labels engineered to command attention on retail shelves and unboxing experiences.',
    deliverables: ['Custom Dieline Layouts', 'Full 3D Render Mockups', 'Print-Ready CMYK Artwork', 'Barcode & Regulatory Safe Zones'],
    turnaround: '6 – 10 Business Days',
    tools: ['Illustrator', 'Photoshop'],
    iconName: 'Package',
  },
];

export const SKILLS_TOOLS: SkillTool[] = [
  {
    name: 'Adobe Photoshop',
    category: 'Software Tools',
    proficiency: 95,
    experience: 'Expert Level',
    description: 'Advanced photo retouching, composite imagery, poster compositions, and realistic 3D mockup staging.',
  },
  {
    name: 'Adobe Illustrator',
    category: 'Software Tools',
    proficiency: 96,
    experience: 'Expert Level',
    description: 'Vector logo construction, custom typography, geometric emblems, iconography, and prepress vector art.',
  },
  {
    name: 'Figma',
    category: 'Software Tools',
    proficiency: 90,
    experience: 'Advanced',
    description: 'Interactive UI/UX prototypes, modern web layouts, design system components, and cross-device responsive mockups.',
  },
  {
    name: 'Canva',
    category: 'Software Tools',
    proficiency: 92,
    experience: 'Advanced',
    description: 'Rapid client template creation, social media kits, branded marketing assets, and accessible team workflows.',
  },
  {
    name: 'Adobe InDesign',
    category: 'Software Tools',
    proficiency: 85,
    experience: 'Proficient',
    description: 'Multi-page editorial publications, catalogs, brand guidelines, and master page grid architecture.',
  },
  {
    name: 'Brand Identity Systems',
    category: 'Design Disciplines',
    proficiency: 95,
    experience: 'Core Focus',
    description: 'Translating brand personality into cohesive visual assets, logotypes, color palettes, and comprehensive guidelines.',
  },
  {
    name: 'Typography & Hierarchy',
    category: 'Design Disciplines',
    proficiency: 94,
    experience: 'Core Focus',
    description: 'Precision font pairing, optical kerning, baseline grid alignment, and typographic scale harmony.',
  },
  {
    name: 'Layout & Grid Design',
    category: 'Design Disciplines',
    proficiency: 92,
    experience: 'Core Focus',
    description: 'Structured visual hierarchy, editorial whitespace discipline, balanced proportions, and Swiss-inspired layouts.',
  },
  {
    name: 'Social Media Graphics',
    category: 'Design Disciplines',
    proficiency: 96,
    experience: 'Core Focus',
    description: 'High-converting social ad creatives, campaign story arcs, carousel educational slides, and aesthetic feeds.',
  },
  {
    name: 'Print Production & Prepress',
    category: 'Design Disciplines',
    proficiency: 90,
    experience: 'Core Focus',
    description: 'CMYK color management, resolution verification (300 DPI), bleed/slug setups, spot colors, and foil/varnish layers.',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'project-brand-identity',
    title: 'Aethel London',
    subtitle: 'Luxury Monogram & Minimalist Brand Identity',
    client: 'Aethel Studio & Consultancy',
    category: 'branding',
    categoryLabel: 'Brand Identity',
    year: '2025',
    image: '/src/assets/images/project_brand_identity_1792235871542.jpg',
    summary:
      'A refined, modern brand identity centered on an interlocking geometric monogram, embossed gold-foil stationery, and a warm ivory and charcoal visual system.',
    objectives: [
      'Create an enduring, premium monogram that evokes architectural precision and high craft.',
      'Develop a tactile print collateral system including letterheads, presentation folders, and foil-stamped business cards.',
      'Establish a restrained color palette that bridges warm classic ivory with contemporary charcoal.',
    ],
    challenge:
      'The client needed a timeless visual identity that differentiated them from cold tech startups while avoiding ornate, dated heritage tropes.',
    solution:
      'Engineered a custom interlocking "AL" geometric logotype paired with clean modernist grotesque typography, executed on tactile textured stock with subtle metallic gold foil stamping.',
    process: [
      { title: 'Brand Discovery', description: 'Audited competitors and identified the intersection of architectural structure and understated luxury.' },
      { title: 'Monogram Geometry', description: 'Iterated through 40+ hand-drawn vector sketches exploring interlocking letterforms and line weights.' },
      { title: 'Material Selection', description: 'Curated 350gsm warm cotton cardstock and paired it with hot-stamped gold foil for tactile resonance.' },
      { title: 'Design Guidelines', description: 'Documented full usage rules, clear-space boundaries, and digital responsive variations.' },
    ],
    deliverables: ['Primary & Secondary Monograms', 'Corporate Stationery Suite', 'Full Brand Guidelines Book', 'Social Media Identity Assets'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe InDesign'],
    palette: [
      { name: 'Warm Ivory', hex: '#F5F2EB' },
      { name: 'Gilded Amber', hex: '#D4AF37' },
      { name: 'Deep Charcoal', hex: '#1C1C1E' },
      { name: 'Limestone Gray', hex: '#D2CEC6' },
    ],
    typography: 'Outfit Display + Plus Jakarta Sans',
    tags: ['Brand Identity', 'Monogram Design', 'Gold Foil', 'Stationery'],
  },
  {
    id: 'project-social-campaign',
    title: 'Chase The Sun',
    subtitle: 'Active Lifestyle & Wellness Social Media Campaign',
    client: 'Chase The Sun Apparel & Community',
    category: 'social',
    categoryLabel: 'Social Media',
    year: '2025',
    image: '/src/assets/images/project_social_campaign_1792235872696.jpg',
    summary:
      'A vibrant, multi-channel social campaign featuring dynamic typography, engaging Instagram carousel narratives, and modular marketing collateral.',
    objectives: [
      'Boost social media engagement and brand recall for an active lifestyle apparel drop.',
      'Produce an adaptable 9-grid Instagram system combining motivational editorial quotes with product showcases.',
      'Deliver easily editable templates for rapid in-house content production.',
    ],
    challenge:
      'Lifestyle feeds often look disjointed when combining user photography with promotional text. The challenge was maintaining visual harmony across 30+ varied post formats.',
    solution:
      'Developed a cohesive warm-toned color block system with bold condensed typography, custom sticker accents, and structured editorial quote layouts that unify photography and graphics.',
    process: [
      { title: 'Moodboard & Visual Tone', description: 'Defined a sun-drenched palette of golden sand, warm terracotta, and crisp cream.' },
      { title: 'Grid Architecture', description: 'Mapped out 3x3 Instagram tile sequences ensuring visual rhythm between photography and typography.' },
      { title: 'Template Production', description: 'Created modular layered files in Photoshop and Canva for one-click updates.' },
    ],
    deliverables: ['18 Instagram Feed Layouts', '12 Story/Reel Cover Templates', 'Editorial Lookbook Layout', 'Campaign Style Guide'],
    tools: ['Adobe Photoshop', 'Canva', 'Adobe Illustrator'],
    palette: [
      { name: 'Sun Amber', hex: '#F3A628' },
      { name: 'Terracotta', hex: '#D35B3B' },
      { name: 'Sand Cream', hex: '#F9F5EC' },
      { name: 'Deep Navy', hex: '#16283C' },
    ],
    typography: 'Plus Jakarta Sans Bold + Outfit',
    tags: ['Social Media', 'Instagram Kit', 'Campaign Strategy', 'Canva Templates'],
  },
  {
    id: 'project-poster-design',
    title: 'The Swiss Legacy',
    subtitle: 'Modern Graphic Design & Swiss Typography Poster',
    client: 'Contemporary Art & Design Forum',
    category: 'print',
    categoryLabel: 'Poster & Flyer',
    year: '2024',
    image: '/src/assets/images/project_poster_design_1792235873112.jpg',
    summary:
      'A striking museum exhibition poster exploring geometric abstraction, Swiss grid principles, and high-contrast typographic hierarchy.',
    objectives: [
      'Honor the legacy of the International Typographic Style through a contemporary lens.',
      'Achieve maximum visual punch from distance while retaining rich detail on closer inspection.',
      'Balance geometric constructivist patterns with clear functional event information.',
    ],
    challenge:
      'Avoiding retro pastiche while paying homage to mid-century modernism required extreme restraint in color, angle, and type placement.',
    solution:
      'Created a dynamic 45-degree geometric tile system rendered in stark charcoal black and warm amber yellow, anchored by a tight baseline grid and bold grotesque headlines.',
    process: [
      { title: 'Historical Research', description: 'Studied Josef Müller-Brockmann and Armin Hofmann posters for grid discipline.' },
      { title: 'Geometric Composition', description: 'Built mathematical vector modules with alternating diagonal stripes and quarter circles.' },
      { title: 'Typography Calibration', description: 'Engineered headline tracking and line spacing to achieve unified block density.' },
    ],
    deliverables: ['Large Format A1 / A2 Print Poster', 'Screen-Print Prepress Separation Files', 'Digital Event Promotional Assets'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    palette: [
      { name: 'Swiss Mustard', hex: '#E5A93B' },
      { name: 'Stark Charcoal', hex: '#18181B' },
      { name: 'Museum Bone', hex: '#EDE8DF' },
      { name: 'Pure White', hex: '#FFFFFF' },
    ],
    typography: 'Outfit Bold + Swiss Grotesque',
    tags: ['Poster Design', 'Swiss Typography', 'Geometric Art', 'Print Prepress'],
  },
  {
    id: 'project-stationery-cards',
    title: 'Alexander Wright',
    subtitle: 'Architectural Studio Business Cards & Stationery Suite',
    client: 'Alexander Wright Architecture & Design',
    category: 'print',
    categoryLabel: 'Business Card & Stationery',
    year: '2024',
    image: '/src/assets/images/project_stationery_cards_1792235873761.jpg',
    summary:
      'A minimalist stationery suite featuring blind embossing, delicate gold foil stamping, and architectural proportioning on heavyweight cotton paper.',
    objectives: [
      'Reflect the architectural firm’s ethos of structural elegance and honest materiality.',
      'Produce an unmistakable tactile experience when exchanging business cards.',
      'Ensure standard office printers can reproduce letterhead stationery without registration errors.',
    ],
    challenge:
      'The client wanted an emblem that felt like a floor plan blueprint without looking overly technical or cluttered on small 3.5" x 2" business cards.',
    solution:
      'Designed a fine-line isometric house glyph enclosed in subtle geometric frames, printed with warm gold foil on 600gsm duplexed cotton stock.',
    process: [
      { title: 'Concept Ideation', description: 'Explored architectural elevation drawings and golden-ratio proportions.' },
      { title: 'Vector Refinement', description: 'Tested hair-line stroke weights for foil die-cutting feasibility.' },
      { title: 'Mockup & Proofing', description: 'Created realistic 3D lighting scenes to validate foil sheen and paper texture.' },
    ],
    deliverables: ['Duplex Business Cards (600gsm)', 'Formal Letterhead Suite', 'Branded Envelopes with Wax Seal Motif', 'Presentation Folders'],
    tools: ['Adobe Illustrator', 'Adobe InDesign', 'Photoshop'],
    palette: [
      { name: 'Warm Marble', hex: '#F7F4EE' },
      { name: 'Architectural Gold', hex: '#CBA158' },
      { name: 'Warm Taupe', hex: '#8C8275' },
      { name: 'Espresso Black', hex: '#26221F' },
    ],
    typography: 'Cormorant Garamond + Plus Jakarta Sans',
    tags: ['Business Cards', 'Corporate Stationery', 'Embossing', 'Print Collateral'],
  },
  {
    id: 'project-uiux-concept',
    title: 'Apex Flow UI/UX',
    subtitle: 'Next-Gen Creative Portfolio & Fintech Mobile Interface',
    client: 'Apex Financial Technologies',
    category: 'uiux',
    categoryLabel: 'UI/UX Design',
    year: '2025',
    image: '/src/assets/images/project_uiux_concept_1792235874276.jpg',
    summary:
      'An intuitive, visually refined mobile application interface featuring frictionless micro-interactions, clean dashboard metrics, and modular design components.',
    objectives: [
      'Simplify complex multi-currency balance tracking into an uncluttered mobile dashboard.',
      'Design an accessible design system with 4.5:1 contrast compliance across all cards.',
      'Build a comprehensive Figma library for engineering implementation.',
    ],
    challenge:
      'Financial applications often overwhelm users with excessive tabular data. The goal was to maintain deep functionality while preserving visual calm.',
    solution:
      'Structured a card-based visual hierarchy with rounded corners, subtle surface depth, smooth action sheets, and custom iconography.',
    process: [
      { title: 'Information Architecture', description: 'Mapped out user journeys for quick transfers, portfolio review, and account management.' },
      { title: 'Figma Component System', description: 'Constructed responsive Auto Layout components with light/dark tokens.' },
      { title: 'Interactive Prototype', description: 'Animated page transitions and modal drawers in Figma.' },
    ],
    deliverables: ['Figma Master Design File', 'Mobile Screens (iOS & Android)', 'Design System Tokens & Icons', 'Clickable Prototype'],
    tools: ['Figma', 'Adobe Illustrator', 'Adobe Photoshop'],
    palette: [
      { name: 'Electric Cyan', hex: '#0070F3' },
      { name: 'Slate Dark', hex: '#0F172A' },
      { name: 'Clean White', hex: '#FFFFFF' },
      { name: 'Surface Gray', hex: '#F1F5F9' },
    ],
    typography: 'Plus Jakarta Sans',
    tags: ['UI/UX Design', 'Mobile App', 'Figma Prototype', 'Design System'],
  },
  {
    id: 'project-product-packaging',
    title: 'Aethelbright Botanical',
    subtitle: 'Organic Skincare Packaging & Label Design Suite',
    client: 'Aethelbright Apothecary',
    category: 'packaging',
    categoryLabel: 'Packaging Design',
    year: '2025',
    image: '/src/assets/images/project_product_packaging_1792235901108.jpg',
    summary:
      'An artisanal packaging collection featuring frosted amber glass droppers, custom botanical foil leaf badges, and sustainable textured paper cartons.',
    objectives: [
      'Communicate botanical purity, certified organic ingredients, and modern apothecary luxury.',
      'Design a unified packaging system across 3 distinct bottle volumes and outer cartons.',
      'Comply with international cosmetic labeling regulations and barcode safe zones.',
    ],
    challenge:
      'Labels on small cylindrical dropper bottles have limited visible surface area. Typography needed to be effortlessly readable at 6pt without compromising elegance.',
    solution:
      'Created a refined vertical layout with a subtle leaf emblem in gold foil, clear volume indicators, and clean ingredient hierarchy on textured paper stock.',
    process: [
      { title: 'Dieline Blueprinting', description: 'Crafted exact box fold dielines and curved bottle label dimensions.' },
      { title: 'Label Hierarchy', description: 'Organized primary claim, active botanicals, and legal regulatory text.' },
      { title: '3D Mockup Verification', description: 'Staged realistic studio lighting and wood/linen props to present to stakeholders.' },
    ],
    deliverables: ['Box Packaging Dielines (Vector AI)', 'Dropper Bottle Labels (Prepress Ready)', '3D Photorealistic Mockups', 'Print Spec Sheet'],
    tools: ['Adobe Illustrator', 'Adobe Photoshop'],
    palette: [
      { name: 'Botanical Amber', hex: '#C27D38' },
      { name: 'Unbleached Linen', hex: '#F4EFE6' },
      { name: 'Forest Charcoal', hex: '#232621' },
      { name: 'Soft Gold', hex: '#D1AC61' },
    ],
    typography: 'Outfit + Plus Jakarta Sans',
    tags: ['Packaging Design', 'Cosmetic Labels', 'Dieline Blueprint', 'Print Production'],
  },
];

export const DESIGN_PROCESS: ProcessStep[] = [
  {
    number: '01',
    phase: 'Discovery & Brief',
    title: 'Research & Strategy',
    summary:
      'Deep dive into your brand mission, target audience, competitive landscape, and design objectives to establish a clear visual direction.',
    steps: [
      'Comprehensive project questionnaire & briefing session',
      'Competitor visual audit and market positioning analysis',
      'Target demographic moodboards & stylistic references',
      'Agreed scope, deliverables timeline, and technical specs',
    ],
    deliverable: 'Visual Moodboard & Creative Brief Alignment',
  },
  {
    number: '02',
    phase: 'Ideation & Exploration',
    title: 'Concept Development',
    summary:
      'Translating research insights into creative concepts through sketching, vector exploration, typography pairing, and color harmony experiments.',
    steps: [
      'Initial thumbnail sketches and structural vector studies',
      'Curating distinctive typography combinations and scales',
      'Developing 2–3 distinct creative concept presentations',
      'Real-world mockups showing how concepts live in context',
    ],
    deliverable: 'Concept Presentation Deck with Real-World Mockups',
  },
  {
    number: '03',
    phase: 'Refinement & Precision',
    title: 'Design Execution',
    summary:
      'Polishing the chosen concept with pixel-level mathematical precision, fine-tuning curves, kerning, color contrast, and stakeholder feedback.',
    steps: [
      'Collaborative feedback review and targeted iterations',
      'Optical kerning, geometry alignment, and grid calibration',
      'Contrast and accessibility testing across light and dark backgrounds',
      'Preparing responsive variations for micro and macro scales',
    ],
    deliverable: 'Refined Artwork & Application Mockups',
  },
  {
    number: '04',
    phase: 'Production & Handover',
    title: 'Final Delivery & Support',
    summary:
      'Packaging organized master files in every required format (print-ready CMYK with bleed, web-optimized SVGs, and brand guide documentation).',
    steps: [
      'Organized production folders with clear naming conventions',
      'Vector master assets (AI, EPS, SVG, PDF) and raster exports',
      'Print-ready prepress verification (300 DPI, CMYK, bleed)',
      'Brand guideline cheatsheet and post-launch support guarantee',
    ],
    deliverable: 'Complete Master Production Package & Brand Guidelines',
  },
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    role: 'Independent Graphic Designer & Visual Specialist',
    type: 'Freelance & Contract Practice',
    period: '2023 — Present',
    location: 'Karachi, Pakistan (Remote Worldwide)',
    description:
      'Partnering with forward-thinking businesses, digital creators, and local brands to craft modern brand identities, high-converting social campaigns, and print collaterals.',
    achievements: [
      'Delivered 35+ end-to-end design deliverables across branding, social media, print, and packaging.',
      'Maintained a 100% on-time delivery record with responsive, transparent communication.',
      'Engineered reusable template design systems that reduced client content creation time by 40%.',
    ],
  },
  {
    role: 'Visual Design & Digital Content Creator',
    type: 'Select Client Collaborations',
    period: '2022 — 2023',
    location: 'Karachi, Pakistan',
    description:
      'Focused on digital marketing collateral, vector illustration, promotional event posters, and stationery systems for local ventures and creative entrepreneurs.',
    achievements: [
      'Mastered industry-standard vector geometry, prepress standards, and typography hierarchy.',
      'Produced multi-platform marketing kits spanning Instagram, Facebook, and corporate print stationery.',
    ],
  },
];

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    degree: 'Studies in Graphic Design & Visual Communication',
    institution: 'Karachi, Pakistan',
    year: '2022 — Present',
    focus: 'Visual Arts, Typography, Composition, Digital Media',
    description:
      'Comprehensive study of design theory, color psychology, modern branding frameworks, and digital software mastery across Adobe Creative Cloud and Figma.',
  },
  {
    degree: 'Professional Design Certification & Masterclasses',
    institution: 'Specialized Online Academies & Design Guilds',
    year: '2023 — 2024',
    focus: 'Brand Identity Systems, Swiss Typography, Prepress Production',
    description:
      'Intensive practical certifications focused on advanced vector graphics, editorial layout grids, packaging dielines, and UI/UX component architecture.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Hamza Tariq',
    clientRole: 'Founder',
    organization: 'Studio Craft PK',
    country: 'Pakistan',
    feedback:
      'Mahad possesses a rare eye for clean, purposeful graphic design. He transformed our scattered branding into a sharp, cohesive identity that our customers immediately noticed. His communication was professional and the turnaround was remarkably fast.',
    rating: 5,
    projectType: 'Brand Identity & Stationery',
  },
  {
    id: 't-2',
    clientName: 'Sara Khan',
    clientRole: 'Marketing Director',
    organization: 'Lumina Digital',
    country: 'UAE',
    feedback:
      'Working with Muhammad Mahad Obaid on our social media campaign was seamless. The designs were clean, modern, and perfectly aligned with our brief. He delivered all master files neatly organized and ready for publishing without any hassle.',
    rating: 5,
    projectType: 'Social Media Campaign',
  },
  {
    id: 't-3',
    clientName: 'Zain Ahmed',
    clientRole: 'Creative Lead',
    organization: 'Urban Edge Apparel',
    country: 'Pakistan',
    feedback:
      'Mahad understands that good design is about restraint and clarity. The poster and packaging concepts he provided exceeded our expectations. He is polite, highly skilled in Illustrator and Photoshop, and genuinely cares about the final outcome.',
    rating: 5,
    projectType: 'Poster & Packaging Design',
  },
];
