import type { NavItem } from "@/types/site";

/**
 * Navigation mirroring the reference site's menu structure, pointing at the
 * internal routes generated from `src/lib/site-pages.ts`.
 */
export const NAV_DATA: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Explore Us",
    size: "mega",
    dropdownWidth: "540px",
    groups: [
      {
        columns: 2,
        items: [
          { label: "About Institution", desc: "History & overview", href: "/about_institution", icon: "fas fa-university", color: "#1e40af" },
          { label: "Mission & Vision", desc: "Purpose & principles", href: "/mission_and_vision", icon: "fas fa-bullseye", color: "#7c3aed" },
          { label: "Approval & Affiliation", desc: "Council & board approvals", href: "/affilation", icon: "fas fa-certificate", color: "#16a34a" },
          { label: "Secretary's Desk", desc: "Message from management", href: "/message_from_chairman", icon: "fas fa-quote-left", color: "#f59e0b" },
          { label: "Principal's Desk", desc: "Principal's message", href: "/message_from_principal", icon: "fas fa-user-tie", color: "#0891b2" },
          { label: "Mandatory Disclosure", desc: "Regulatory document", href: "/mandatory_disclosure", icon: "fas fa-file-alt", color: "#dc2626" },
          { label: "Governing Body", desc: "Board members", href: "/govorning_body", icon: "fas fa-users-cog", color: "#9333ea" },
          { label: "Administration", desc: "Administrative staff", href: "/administrative", icon: "fas fa-building", color: "#b45309" },
          { label: "College Committees", desc: "Committee list", href: "/college-committees-list", icon: "fas fa-sitemap", color: "#1e40af" },
        ],
      },
    ],
    featured: {
      title: "Admission Open",
      lines: ["Diploma in Pharmacy (D.Pharm)", "Quality Education • Expert Guidance"],
      ctaLabel: "Apply Now",
      ctaHref: "/apply",
    },
  },
  {
    label: "Course",
    size: "sm",
    dropdownWidth: "300px",
    groups: [
      {
        sectionLabel: "Programme Offered",
        columns: 1,
        items: [
          { label: "Diploma in Pharmacy", desc: "D.Pharm programme", href: "/d_pharma", icon: "fas fa-pills", color: "#1e40af" },
        ],
      },
    ],
  },
  {
    label: "Academic",
    size: "mega-lg",
    dropdownWidth: "680px",
    groups: [
      {
        sectionLabel: "Faculty & Academics",
        columns: 2,
        items: [
          { label: "Advisory Committee", desc: "Expert guidance panel", href: "/advisory-committee", icon: "fas fa-users", color: "#7c3aed" },
          { label: "Teaching Staff", desc: "Full-time faculty", href: "/faculty_members", icon: "fas fa-chalkboard-teacher", color: "#1e40af" },
          { label: "Non-Teaching Staff", desc: "Support staff", href: "/non_teaching_staff", icon: "fas fa-user-friends", color: "#16a34a" },
          { label: "Eligibility", desc: "Admission criteria", href: "/eligibility", icon: "fas fa-check-circle", color: "#f59e0b" },
          { label: "Rules & Regulations", desc: "Academic conduct", href: "/rules-regulations", icon: "fas fa-gavel", color: "#dc2626" },
          { label: "Prospectus", desc: "Download PDF", href: "/prospectus", icon: "fas fa-file-pdf", color: "#0891b2" },
          { label: "Publication", desc: "Research publications", href: "/publication", icon: "fas fa-file-alt", color: "#7c3aed" },
        ],
      },
      {
        sectionLabel: "Departments",
        columns: 3,
        items: [
          { label: "Pharmaceutical Chemistry", href: "/pharmaceutical_chemishtry", icon: "fas fa-atom", color: "#1e40af", compact: true },
          { label: "Pharmacology", href: "/pharmacology", icon: "fas fa-heartbeat", color: "#dc2626", compact: true },
          { label: "Pharmaceutics", href: "/pharmaceutics", icon: "fas fa-pills", color: "#7c3aed", compact: true },
          { label: "Pharmacognosy", href: "/pharmacognosy", icon: "fas fa-leaf", color: "#16a34a", compact: true },
          { label: "Pharmaceutical Analysis", href: "/pharmaceutical_analysis", icon: "fas fa-microscope", color: "#f59e0b", compact: true },
          { label: "Pharmacy Practice", href: "/pharmacy_practice", icon: "fas fa-hospital", color: "#0891b2", compact: true },
        ],
      },
    ],
  },
  {
    label: "Student Corner",
    size: "mega-lg",
    dropdownWidth: "680px",
    groups: [
      {
        columns: 2,
        items: [
          { label: "Apply / Admission", desc: "Start application", href: "/apply", icon: "fas fa-file-signature", color: "#16a34a" },
          { label: "Fee Structure", desc: "Complete fee details", href: "/fee_structure", icon: "fas fa-rupee-sign", color: "#1e40af" },
          { label: "Eligibility Criteria", desc: "Check eligibility", href: "/eligibility", icon: "fas fa-check-double", color: "#f59e0b" },
          { label: "Documents Required", desc: "Admission documents", href: "/req_doc", icon: "fas fa-folder-open", color: "#7c3aed" },
          { label: "Syllabus", desc: "Subject-wise syllabus", href: "/syllabus", icon: "fas fa-book-open", color: "#0891b2" },
          { label: "Scholarship", desc: "Available schemes", href: "/scholarship", icon: "fas fa-award", color: "#16a34a" },
          { label: "Career Opportunities", desc: "Pharmacy career paths", href: "/career", icon: "fas fa-briefcase", color: "#b45309" },
          { label: "Academic Calendar", desc: "Term & exam schedule", href: "/academic-calendar", icon: "fas fa-calendar-alt", color: "#dc2626" },
          { label: "Institute Magazine", desc: "Annual publications", href: "/institute-magazine", icon: "fas fa-newspaper", color: "#9333ea" },
        ],
      },
    ],
  },
  {
    label: "Campus Life",
    size: "mega",
    dropdownWidth: "540px",
    groups: [
      {
        columns: 2,
        items: [
          { label: "Infrastructure", desc: "Buildings & facilities", href: "/infrastructer", icon: "fas fa-building", color: "#1e40af" },
          { label: "Class Room", desc: "Teaching spaces", href: "/class-room", icon: "fas fa-chalkboard", color: "#7c3aed" },
          { label: "Laboratory", desc: "Practical training", href: "/laboratory", icon: "fas fa-flask", color: "#16a34a" },
          { label: "Library", desc: "Books & journals", href: "/library", icon: "fas fa-book", color: "#0891b2" },
          { label: "Computer Lab", desc: "Digital learning", href: "/computer_lab", icon: "fas fa-desktop", color: "#f59e0b" },
          { label: "Herbal Garden", desc: "Medicinal plants", href: "/herbal_garden", icon: "fas fa-seedling", color: "#16a34a" },
          { label: "Drug Museum", desc: "Specimens & models", href: "/drug_museum", icon: "fas fa-vials", color: "#9333ea" },
          { label: "Play Ground", desc: "Sports & activities", href: "/sports", icon: "fas fa-running", color: "#dc2626" },
          { label: "Front Office", desc: "Student services", href: "/front-office", icon: "fas fa-concierge-bell", color: "#1e40af" },
          { label: "Hostel", desc: "Accommodation", href: "/hostel", icon: "fas fa-home", color: "#b45309" },
          { label: "Canteen", desc: "Food & refreshments", href: "/canteen", icon: "fas fa-utensils", color: "#f59e0b" },
        ],
      },
    ],
  },
  { label: "Gallery", href: "/gallery" },
  {
    label: "News & Events",
    size: "sm",
    dropdownWidth: "260px",
    groups: [
      {
        columns: 1,
        items: [
          { label: "News & Notices", desc: "Latest announcements", href: "/news", icon: "fas fa-bell", color: "#dc2626" },
          { label: "Events", desc: "College activities", href: "/event", icon: "fas fa-calendar-day", color: "#1e40af" },
          { label: "Blog", desc: "Articles & insights", href: "/blogs", icon: "fas fa-pen-nib", color: "#7c3aed" },
        ],
      },
    ],
  },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact_us" },
];

export const APPLY_NOW_HREF = "/apply";
