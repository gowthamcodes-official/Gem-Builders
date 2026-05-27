import { ServiceItem, ProjectItem, TestimonialItem, FAQItem } from '../types';

export const COMP_INFO = {
  name: "GEM Builders & Developers",
  slogan: "Breathing life in Concrete",
  tagline: "Building your dreams with precision, uncompromising structural engineering, and perfect Vastu compliance.",
  phone1: "+91 96779 64825",
  phone2: "+91 72000 04948",
  email: "gembuilderssalem@gmail.com",
  address: "Mullai Nagar, Kannankurichi, Salem - 636008, Tamil Nadu, India",
  founders: [
    {
      name: "R. Karthick B.E.",
      role: "Civil Engineer & Structural Architect",
      desc: "An expert structural designer specializing in planning approvals, safe load-bearing concrete frames, and elegant 3D architectural renders with over 10 years of field mastery."
    },
    {
      name: "K. Prasath MBA",
      role: "Project Manager & Quality Director",
      desc: "Steering timely schedules, premium material procurement, customer success, and cost optimization for residential and large-scale commercial structures."
    }
  ]
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "planning-architecture",
    title: "Architecture & 2D/3D Planning",
    icon: "DraftingCompass",
    description: "Elegant modern blueprints, municipal building plan design, civil structural layouts, and realistic 3D exterior and interior virtual animation walk-throughs.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600",
    details: [
      "Vastu Shastra compliant custom planning",
      "Detailed 2D and 3D architectural configurations",
      "Steel framing, concrete layout and plumbing designs",
      "Elevation visuals & walkthrough walkthrough videos"
    ]
  },
  {
    id: "residential",
    title: "All Types of Building Construction",
    icon: "Home",
    description: "Premium turnkey individual villa construction, luxury custom houses, duplexes, and multi-storey apartment units executed with raw material transparency.",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=600",
    details: [
      "Soil condition analysis & high-grade piling",
      "Standardised construction using top-tier cement & steel",
      "End-to-end electrical, plumbing & woodwork execution",
      "Rigorous quality checkups at every slab level"
    ]
  },
  {
    id: "commercial",
    title: "Commercial & Industrial Development",
    icon: "Building",
    description: "Designing and building optimized executive offices, high-capacity retail storefronts, industrial steel structure warehouses, and showrooms.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    details: [
      "High strength concrete slabs for industrial loading",
      "Pre-engineered steel building structures (PEB)",
      "Safety planning, firewall and utility integration",
      "Strict compliance with state safety and building codes"
    ]
  },
  {
    id: "estimate",
    title: "Civil Estimation & Standard Approvals",
    icon: "Calculator",
    description: "Professional cost estimations, detailed structural stability certification, and fast government municipal town planning approvals.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=600",
    details: [
      "Affordable line estimates & heavy quantity billing",
      "Structural engineering stability validation",
      "Municipal Corporation & DTCP approval support",
      "Valuer appraisal reports for elite bank loans"
    ]
  },
  {
    id: "interior",
    title: "Modern Interior Architecture",
    icon: "Palette",
    description: "Premium handcrafted modular kitchens, luxury wardrobes, acoustic false ceiling installations, dynamic lighting setups, and modern space renovations.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=600",
    details: [
      "Space-maximizing ergonomic modular kitchens",
      "Premium quality marine plywood & laminates",
      "Custom living room backdrop panelling",
      "Contemporary false ceiling layouts with ambient LEDs"
    ]
  },
  {
    id: "renovations",
    title: "Premium Structural Renovation",
    icon: "Hammer",
    description: "Refreshing older properties into stunning modern spaces with concrete reinforcement, leakage remediation, structural repairs, and visual revamping.",
    image: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?auto=format&fit=crop&q=80&w=600",
    details: [
      "Dampness prevention and high polymer treatment",
      "Wall removal for open-concept layouts safely",
      "Exterior tiling & micro-concrete structural jackets",
      "Plumbing, electrical replacements and layout upgrade"
    ]
  }
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: "p1",
    title: "Premium Modern Duplex - Hasthampatti",
    category: "residential",
    location: "Hasthampatti, Salem",
    area: "2,400 Sq.Ft",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=600",
    status: "Completed"
  },
  {
    id: "p2",
    title: "GEM Elegant Residency - Ammapet",
    category: "residential",
    location: "Ammapet, Salem",
    area: "4,600 Sq.Ft (Triplex)",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=600",
    status: "Completed"
  },
  {
    id: "p3",
    title: "Vakil Chambers Commercial Complex",
    category: "commercial",
    location: "Fairlands, Salem",
    area: "8,500 Sq.Ft",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=600",
    status: "Completed"
  },
  {
    id: "p4",
    title: "Luxurious Architectural Elevation Rendering",
    category: "planning",
    location: "Kannankurichi, Salem",
    area: "3,200 Sq.Ft Layout",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=600",
    status: "Completed"
  },
  {
    id: "p5",
    title: "Teakwood Haven Interior Works",
    category: "interior",
    location: "Gorimedu, Salem",
    area: "1,800 Sq.Ft Flat",
    image: "https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=600",
    status: "Completed"
  },
  {
    id: "p6",
    title: "GEM Greenstone Villa (Vastu)",
    category: "residential",
    location: "Yercaud Foot Hills, Salem",
    area: "3,500 Sq.Ft",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=600",
    status: "In Progress"
  }
];

export const TESTIMONIALS_DATA: TestimonialItem[] = [
  {
    id: "t1",
    name: "Arun Kumar S.",
    role: "Business Owner",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    text: "Working with Karthick and Prasath has been an exceptional experience. They built our dream duplex house in Hasthampatti with 100% proper Vastu compliance. The 3D animation walk-through matched a full 100% with the real building finished. Excellent concrete quality and strictly on-time handover!",
    date: "1 month ago",
    verified: true
  },
  {
    id: "t2",
    name: "Dr. Nitya Meenakshi",
    role: "Government Medical Professional",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    text: "We wanted a highly aesthetic hospital chamber and modern residential layout. GEM Builders executed the complete planning approval process seamlessly and took care of everything from foundation till painting. Highly transparent with material details and billing.",
    date: "3 months ago",
    verified: true
  },
  {
    id: "t3",
    name: "Senthil Velan K.",
    role: "NRI Tech Lead",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    text: "Since I live in the state of California, building a house back home in Salem was a concern. But GEM Builders provided weekly progress videos, high-resolution material update receipts, and maintained flawless honesty. Prasath was exceptionally helpful on the phone. Highly recommended!",
    date: "5 months ago",
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: "faq1",
    question: "Do you design plans on standard Vastu Shastra principles?",
    answer: "Yes, 100%. Every single project designed by GEM Builders & Developers starts with comprehensive Vastu planning (entrance directions, kitchen fireplace placements, water sumps, master bedrooms, and window airflow charts) ensuring healthy living and positive energy circulation."
  },
  {
    id: "faq2",
    question: "Do you take care of the entire municipal planning and government approval process?",
    answer: "Absolutely. Our founders, engineers, and support managers guide and execute structural drafts, stability certifications, and submit documents to Salem Municipal Corporation and related regional departments, bringing you direct approvals without hassle."
  },
  {
    id: "faq3",
    question: "How do you guarantee the quality of raw materials used?",
    answer: "We offer completely itemized build agreements specifying exact brands of cement (e.g., UltraTech, Ramco), structural steel (e.g., TATA Tiscon), electrical wiring (e.g., Finolex), and plumbing pipelines (e.g., Ashirvad). Our engineers execute standard concrete cube compression testing on-site."
  },
  {
    id: "faq4",
    question: "Do you facilitate home loan processing with national banks?",
    answer: "Yes, we prepare all certified estimate drafts, architectural plans, ownership validation details, and coordinate with banks (such as SBI, HDFC, LIC Housing Finance) to secure fast structural validation audits and swift home loans."
  }
];
