import type {
  ContactDetail,
  FaqGroup,
  GalleryItem,
} from "@/components/page/Blocks";
import type { CardItem } from "@/components/page/PageShell";

/**
 * Every inner route, mirroring the reference site's page structure.
 *
 * Content is the institute's own, taken from
 * muktirshikshacollegeofeducationandpharmacy.org. Where they have not published
 * something, the page carries a `pending` block listing exactly what is needed
 * rather than invented detail.
 */
export type Block =
  | { kind: "prose"; label?: string; heading?: string; paragraphs: string[] }
  | { kind: "bullets"; label?: string; heading?: string; items: string[] }
  | { kind: "cards"; label?: string; heading?: string; columns?: 2 | 3 | 4; items: CardItem[] }
  | { kind: "pending"; label?: string; heading?: string; needs: string[] }
  | { kind: "faq"; label?: string; heading?: string; intro?: string; groups: FaqGroup[] }
  | { kind: "contact"; label?: string; heading?: string; intro?: string; details: ContactDetail[] }
  | { kind: "gallery"; label?: string; heading?: string; intro?: string; items: GalleryItem[] };

export interface SitePage {
  slug: string;
  title: string;
  parent?: string;
  blocks: Block[];
}

// ---- Reusable real content from the institute's own pages ----

const ABOUT_PARAGRAPHS = [
  "We are a premier educational institute dedicated to shaping skilled and responsible professionals in the field of pharmacy. With a strong emphasis on academic excellence and practical training, we provide students with the knowledge, skills, and ethical foundation needed to succeed in healthcare and pharmaceutical careers.",
  "Our institute combines experienced faculty, modern laboratories, and a student-centered learning environment to ensure that every learner has the opportunity to grow both academically and professionally. We strive to empower our students to become competent pharmacists and healthcare professionals who can make a meaningful impact in their communities and the industry at large.",
];

const MISSION_PARAGRAPHS = [
  "Our mission is to provide high-quality pharmacy education that combines strong theoretical knowledge with practical, hands-on training. We are dedicated to nurturing skilled and responsible professionals who are well-prepared to meet the evolving demands of the healthcare and pharmaceutical industries.",
  "We aim to create a supportive and innovative learning environment that empowers students to grow academically, professionally, and ethically. By instilling confidence, expertise, and strong values, we prepare our students to excel in their careers and make a positive impact on society.",
];

const VISION_PARAGRAPHS = [
  "Our vision is to be recognized as a leading institute in pharmacy education, shaping competent and compassionate healthcare professionals. We strive to foster innovation, research, and continuous learning in pharmaceutical sciences, enabling our students to achieve professional excellence. Through our commitment to education and community service, we aim to inspire students to make meaningful contributions to the healthcare sector and improve overall community well-being.",
];

const VISION_POINTS = [
  "Become a leading institute recognized for excellence in pharmacy education.",
  "Develop skilled pharmacists and healthcare professionals who make a positive impact.",
  "Promote innovation, research, and continuous learning in pharmaceutical sciences.",
  "Inspire students to achieve professional success and contribute to community health.",
];

const KEY_STRENGTHS = [
  "Quality pharmacy education aligned with industry standards",
  "Experienced and dedicated faculty members",
  "Career-oriented training and professional guidance",
];

const COURSE_PARAGRAPHS = [
  "The Diploma in Pharmacy (D.Pharm) is a professional program designed to give students a solid foundation in pharmaceutical sciences. It covers essential topics such as drug formulation, dispensing, and patient care, combining both theoretical knowledge and practical training to prepare students for real-world healthcare settings.",
  "This course also emphasizes ethical practices, healthcare regulations, and industry standards, ensuring that students are ready to work confidently in pharmacies, hospitals, and other healthcare institutions. With hands-on experience and expert guidance, graduates are well-equipped to launch a successful career in the pharmaceutical field.",
];

const COURSE_REASONS = [
  "Builds a strong foundation in pharmaceutical sciences and healthcare practices",
  "Prepares students for a vital role in patient care and safe medication dispensing",
  "Offers practical, industry-oriented training with real-world exposure",
  "Creates career opportunities in hospitals, clinics, community pharmacies, and pharmaceutical companies",
  "Develops professional skills such as accuracy, ethics, and responsibility",
  "Enables direct contribution to public health and community well-being",
  "Provides a fast and affordable pathway into the healthcare sector",
  "Acts as a stepping stone for higher education in pharmacy",
];

/** Shorthand for a page that is structurally ready but awaiting content. */
const pending = (
  slug: string,
  title: string,
  parent: string,
  needs: string[],
  intro?: string[],
): SitePage => ({
  slug,
  title,
  parent,
  blocks: [
    ...(intro ? [{ kind: "prose" as const, paragraphs: intro }] : []),
    { kind: "pending" as const, heading: title, needs },
  ],
});

const FACILITY_INTRO = [
  "Our institute combines experienced faculty, modern laboratories, and a student-centered learning environment to ensure that every learner has the opportunity to grow both academically and professionally.",
];

export const SITE_PAGES: SitePage[] = [
  // ---------- Explore Us ----------
  {
    slug: "about_institution",
    title: "About Institution",
    parent: "Explore Us",
    blocks: [
      { kind: "prose", label: "About Us", heading: "Shaping the Future of Pharmacy Education", paragraphs: ABOUT_PARAGRAPHS },
      { kind: "bullets", label: "Why Us", heading: "Our Key Strengths", items: KEY_STRENGTHS },
    ],
  },
  {
    slug: "mission_and_vision",
    title: "Mission & Vision",
    parent: "Explore Us",
    blocks: [
      { kind: "prose", label: "Our Mission", heading: "What We Set Out To Do", paragraphs: MISSION_PARAGRAPHS },
      { kind: "prose", label: "Our Vission", heading: "Where We Are Headed", paragraphs: VISION_PARAGRAPHS },
      { kind: "bullets", heading: "Our Vision in Practice", items: VISION_POINTS },
    ],
  },
  pending("affilation", "Approval & Affiliation", "Explore Us", [
    "Name of the approving council or board",
    "Approval or affiliation reference number",
    "Scanned copy of the approval letter",
    "Year of approval and current validity",
  ]),
  pending("message_from_chairman", "Secretary's Desk", "Explore Us", [
    "Message from the Secretary or management",
    "Name, designation and photograph",
  ]),
  pending("message_from_principal", "Principal's Desk", "Explore Us", [
    "Message from the Principal",
    "Name, qualifications and photograph",
  ]),
  pending("mandatory_disclosure", "Mandatory Disclosure", "Explore Us", [
    "Mandatory disclosure document as required by the regulator",
  ]),
  pending("govorning_body", "Governing Body", "Explore Us", [
    "Names, designations and roles of governing body members",
  ]),
  pending("administrative", "Administration", "Explore Us", [
    "Administrative staff names, designations and contact details",
  ]),
  pending("college-committees-list", "College Committees", "Explore Us", [
    "List of committees, their purpose and member names",
  ]),

  // ---------- Course ----------
  {
    slug: "d_pharma",
    title: "Diploma in Pharmacy",
    parent: "Course",
    blocks: [
      { kind: "prose", label: "Programme", heading: "Diploma in Pharmacy (D.Pharm)", paragraphs: COURSE_PARAGRAPHS },
      { kind: "bullets", label: "Why Study Here", heading: "Reasons to Pursue a Diploma in Pharmacy", items: COURSE_REASONS },
      {
        kind: "pending",
        heading: "Course Details",
        needs: [
          "Course duration and number of seats",
          "Eligibility criteria",
          "Fee structure",
          "Syllabus or subject list",
        ],
      },
    ],
  },
  {
    slug: "course_details/4",
    title: "Course Details",
    parent: "Course",
    blocks: [
      { kind: "prose", label: "Programme", heading: "Diploma in Pharmacy (D.Pharm)", paragraphs: COURSE_PARAGRAPHS },
      { kind: "bullets", heading: "Reasons to Pursue a Diploma in Pharmacy", items: COURSE_REASONS },
    ],
  },

  // ---------- Academic ----------
  pending("advisory-committee", "Advisory Committee", "Academic", [
    "Advisory committee member names and designations",
  ]),
  pending("faculty_members", "Teaching Staff", "Academic", [
    "Faculty names, designations, qualifications and photographs",
    "Department or subject taught",
  ], FACILITY_INTRO),
  pending("non_teaching_staff", "Non-Teaching Staff", "Academic", [
    "Support staff names, designations and roles",
  ]),
  pending("eligibility", "Eligibility", "Academic", [
    "Minimum qualification required (subjects and marks)",
    "Age limit, if any",
    "Admission or entrance requirements",
  ]),
  pending("rules-regulations", "Rules & Regulations", "Academic", [
    "Academic conduct rules",
    "Attendance requirements",
    "Examination regulations",
  ]),
  pending("prospectus", "Prospectus", "Academic", [
    "Prospectus PDF for the current session",
  ]),
  pending("publication", "Publication", "Academic", [
    "List of research publications by faculty or students",
  ]),

  // ---------- Departments ----------
  pending("pharmaceutical_chemishtry", "Pharmaceutical Chemistry", "Departments", [
    "Department overview, faculty and laboratory facilities",
  ]),
  pending("pharmacology", "Pharmacology", "Departments", [
    "Department overview, faculty and laboratory facilities",
  ]),
  pending("pharmaceutics", "Pharmaceutics", "Departments", [
    "Department overview, faculty and laboratory facilities",
  ]),
  pending("pharmacognosy", "Pharmacognosy", "Departments", [
    "Department overview, faculty and laboratory facilities",
  ]),
  pending("pharmaceutical_analysis", "Pharmaceutical Analysis", "Departments", [
    "Department overview, faculty and laboratory facilities",
  ]),
  pending("pharmacy_practice", "Pharmacy Practice", "Departments", [
    "Department overview, faculty and hospital tie-ups",
  ]),

  // ---------- Student Corner ----------
  {
    slug: "apply",
    title: "Apply / Admission",
    parent: "Student Corner",
    blocks: [
      { kind: "prose", label: "Admission", heading: "Begin Your Pharmacy Career Here", paragraphs: [
        "Admissions are open for the Diploma in Pharmacy (D.Pharm) programme. Reach out to our team for guidance on the application process, course details, or any other enquiry, and we will assist you promptly.",
      ] },
      {
        kind: "cards",
        heading: "How to Reach Us",
        columns: 3,
        items: [
          { icon: "fas fa-phone-alt", tone: "gold", title: "Call Us", body: "(+91) 9830 236143 / (+91) 8172 078807" },
          { icon: "fas fa-envelope", tone: "blue", title: "Email Us", body: "muktirshikshacollegeofpharnacy@gmail.com" },
          { icon: "fas fa-map-marker-alt", tone: "navy", title: "Visit Us", body: "Jogen Mondal Colony, Kuchlia, Gobardanga, North 24 Parganas" },
        ],
      },
      {
        kind: "pending",
        heading: "Admission Details",
        needs: [
          "Eligibility criteria and required marks",
          "Number of seats available",
          "Fee structure and payment schedule",
          "List of documents required at admission",
          "Application deadline for the current session",
        ],
      },
    ],
  },
  pending("fee_structure", "Fee Structure", "Student Corner", [
    "Tuition fee per year or semester",
    "Admission and examination fees",
    "Hostel and other optional charges",
    "Payment schedule and accepted methods",
  ]),
  pending("req_doc", "Documents Required", "Student Corner", [
    "List of documents needed at the time of admission",
    "Whether originals or attested copies are required",
  ]),
  pending("syllabus", "Syllabus", "Student Corner", [
    "Subject-wise syllabus for each year",
    "Downloadable syllabus PDF",
  ]),
  pending("scholarship", "Scholarship", "Student Corner", [
    "Scholarship schemes available to students",
    "Eligibility and application process",
  ]),
  pending("career", "Career Opportunities", "Student Corner", [
    "Career paths available after the programme",
  ], [
    "A Diploma in Pharmacy creates career opportunities in hospitals, clinics, community pharmacies, and pharmaceutical companies, and acts as a stepping stone for higher education in pharmacy.",
  ]),
  pending("academic-calendar", "Academic Calendar", "Student Corner", [
    "Term dates, examination schedule and holiday list",
  ]),
  pending("institute-magazine", "Institute Magazine", "Student Corner", [
    "Magazine issues in PDF form",
  ]),

  // ---------- Campus Life ----------
  pending("infrastructer", "Infrastructure", "Campus Life", [
    "Details of buildings, classrooms and facilities",
    "Photographs of the campus",
  ], FACILITY_INTRO),
  pending("class-room", "Class Room", "Campus Life", [
    "Number of classrooms and seating capacity",
    "Teaching equipment available",
    "Photographs",
  ]),
  pending("laboratory", "Laboratory", "Campus Life", [
    "Number and type of laboratories",
    "Major equipment available",
    "Photographs",
  ], FACILITY_INTRO),
  pending("library", "Library", "Campus Life", [
    "Number of books, journals and digital resources",
    "Seating capacity and opening hours",
    "Photographs",
  ]),
  pending("computer_lab", "Computer Lab", "Campus Life", [
    "Number of systems and software available",
    "Photographs",
  ]),
  pending("herbal_garden", "Herbal Garden", "Campus Life", [
    "Medicinal plants maintained and their use in teaching",
    "Photographs",
  ]),
  pending("drug_museum", "Drug Museum", "Campus Life", [
    "Specimens and models on display",
    "Photographs",
  ]),
  pending("sports", "Play Ground", "Campus Life", [
    "Sports facilities and activities offered",
    "Photographs",
  ]),
  pending("front-office", "Front Office", "Campus Life", [
    "Services handled and office timings",
  ]),
  pending("hostel", "Hostel", "Campus Life", [
    "Whether hostel accommodation is available",
    "Capacity, room types, charges and facilities",
  ]),
  pending("canteen", "Canteen", "Campus Life", [
    "Canteen facilities, menu and timings",
  ]),

  // ---------- Gallery / News ----------
  {
    slug: "gallery",
    title: "Gallery",
    parent: "Gallery",
    blocks: [
      {
        kind: "gallery",
        label: "Showcases",
        heading: "A Campus That Inspires Learning",
        items: [
          { image: "/images/gallery/classroom.jpg", title: "Classroom" },
          { image: "/images/gallery/laboratory.jpg", title: "Laboratory" },
          { image: "/images/gallery/library.jpg", title: "Library" },
          { image: "/images/gallery/campus-life.jpg", title: "Campus Life" },
          { image: "/images/blog/lab-skills.jpg", title: "Practical Training" },
          { image: "/images/blog/why-dpharm.jpg", title: "Pharmacy Practice" },
        ],
      },
      {
        kind: "pending",
        heading: "More Photographs",
        needs: [
          "Photographs of the actual campus, classrooms and laboratories",
          "A short caption for each photograph",
        ],
      },
    ],
  },
  pending("news", "News & Notices", "News & Events", [
    "Notices and announcements with dates",
  ]),
  pending("event", "Events", "News & Events", [
    "Event names, dates, descriptions and photographs",
  ]),
  pending("blogs", "Blog", "News & Events", [
    "Articles with titles, dates and content",
  ]),

  // ---------- Standalone ----------
  {
    slug: "contact_us",
    title: "Contact Us",
    blocks: [
      {
        kind: "prose",
        label: "Get in Touch",
        heading: "We Are Here to Help",
        paragraphs: [
          "Have questions or need more information? Reach out to us for admissions guidance, course details, or any other inquiries, and our team will assist you promptly.",
        ],
      },
      {
        kind: "contact",
        label: "Contact",
        heading: "Send Us a Message",
        details: [
          {
            icon: "fas fa-map-marker-alt",
            label: "Address",
            lines: [
              "Jogen Mondal Colony, Vill.- Kuchlia,",
              "P. O.- Gobardanga, P. S.- Gobardanga,",
              "Dist- North 24 Parganas, Pin- 743252, West Bengal",
            ],
          },
          {
            icon: "fas fa-phone-alt",
            label: "Contact No.",
            lines: ["(+91) 9830 236143", "(+91) 8172 078807"],
          },
          {
            icon: "fas fa-envelope",
            label: "E-Mail",
            lines: ["muktirshikshacollegeofpharnacy@gmail.com"],
          },
        ],
      },
    ],
  },
  {
    slug: "faq",
    title: "FAQ",
    blocks: [
      {
        kind: "faq",
        label: "Questions",
        heading: "Frequently Asked Questions",
        groups: [
          {
            group: "Course",
            items: [
              {
                q: "Which course does the institute offer?",
                a: "We offer the Diploma in Pharmacy (D.Pharm), a professional programme giving students a solid foundation in pharmaceutical sciences.",
              },
              {
                q: "What does the D.Pharm programme cover?",
                a: "It covers essential topics such as drug formulation, dispensing, and patient care, combining theoretical knowledge with practical training for real-world healthcare settings.",
              },
              {
                q: "Where can the diploma take me?",
                a: "It creates career opportunities in hospitals, clinics, community pharmacies, and pharmaceutical companies, and acts as a stepping stone for higher education in pharmacy.",
              },
            ],
          },
          {
            group: "Teaching",
            items: [
              {
                q: "Is the training practical or only theoretical?",
                a: "Both. The course pairs strong theoretical knowledge with practical, hands-on training, so graduates can work confidently in pharmacies, hospitals and other healthcare institutions.",
              },
              {
                q: "What support do students get?",
                a: "Our institute combines experienced faculty, modern laboratories, and a student-centered learning environment so every learner can grow academically and professionally.",
              },
            ],
          },
          {
            group: "Admission",
            items: [
              {
                q: "How do I apply?",
                a: "Contact our team on (+91) 9830 236143 or (+91) 8172 078807, or email muktirshikshacollegeofpharnacy@gmail.com, and we will guide you through the process.",
              },
            ],
          },
        ],
      },
      {
        kind: "pending",
        heading: "More Answers",
        needs: [
          "Eligibility criteria and required marks",
          "Fee structure and payment schedule",
          "Number of seats and admission deadline",
          "Hostel availability and charges",
        ],
      },
    ],
  },
  pending("recruitment", "Career With Us", "Useful Links", [
    "Open positions, qualifications required and how to apply",
  ]),
  pending("anti_ragging", "Anti Ragging", "Useful Links", [
    "Anti-ragging policy and committee members",
    "Complaint procedure and contact details",
  ]),
  pending("terms", "Terms of Use", "Useful Links", [
    "Terms of use text for the website",
  ]),
  pending("privacy", "Privacy Policy", "Useful Links", [
    "Privacy policy text covering enquiry form data",
  ]),
];

export const PAGE_BY_SLUG = new Map(SITE_PAGES.map((p) => [p.slug, p]));
