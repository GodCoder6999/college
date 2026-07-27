import type { NavItem } from "@/types/site";

const BASE = "https://muktirshikshacollegeofeducationandpharmacy.org";

/** Nav structure for Muktir Siksha College Of Education & Pharmacy. */
export const NAV_DATA: NavItem[] = [
  {
    label: "Home",
    href: `${BASE}/`,
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
          {
            label: "Diploma in Pharmacy",
            desc: "D.Pharm — 2 year programme",
            href: `${BASE}/course/`,
            icon: "fas fa-pills",
            color: "#1e40af",
          },
        ],
      },
    ],
  },
  {
    label: "About Us",
    size: "mega",
    dropdownWidth: "540px",
    groups: [
      {
        columns: 2,
        items: [
          {
            label: "About the Institute",
            desc: "Shaping the future of pharmacy education",
            href: `${BASE}/about-us/`,
            icon: "fas fa-university",
            color: "#1e40af",
          },
          {
            label: "Our Mission",
            desc: "Theory paired with hands-on training",
            href: `${BASE}/about-us/`,
            icon: "fas fa-bullseye",
            color: "#7c3aed",
          },
          {
            label: "Our Vission",
            desc: "A leading institute in pharmacy education",
            href: `${BASE}/about-us/`,
            icon: "fas fa-eye",
            color: "#16a34a",
          },
          {
            label: "Our Key Strengths",
            desc: "What sets our teaching apart",
            href: `${BASE}/about-us/`,
            icon: "fas fa-star",
            color: "#f59e0b",
          },
          {
            label: "Experienced Faculty",
            desc: "Dedicated teaching members",
            href: `${BASE}/about-us/`,
            icon: "fas fa-chalkboard-teacher",
            color: "#0891b2",
          },
          {
            label: "Campus",
            desc: "A campus that inspires learning",
            href: `${BASE}/about-us/`,
            icon: "fas fa-building",
            color: "#b45309",
          },
        ],
      },
    ],
    featured: {
      title: "Admission Open",
      lines: [
        "Diploma in Pharmacy (D.Pharm)",
        "Quality Education • Expert Guidance",
      ],
      ctaLabel: "Apply Now",
      ctaHref: `${BASE}/contact-us/`,
    },
  },
  {
    label: "Admission",
    size: "sm",
    dropdownWidth: "280px",
    groups: [
      {
        sectionLabel: "Get Started",
        columns: 1,
        items: [
          {
            label: "Apply Now",
            desc: "Begin your pharmacy career here",
            href: `${BASE}/contact-us/`,
            icon: "fas fa-file-signature",
            color: "#16a34a",
          },
          {
            label: "Course Details",
            desc: "Diploma in Pharmacy overview",
            href: `${BASE}/course/`,
            icon: "fas fa-book-open",
            color: "#1e40af",
          },
          {
            label: "Call Us to Know More",
            desc: "(+91) 9830 236143",
            href: "tel:+919830236143",
            icon: "fas fa-phone-alt",
            color: "#f59e0b",
          },
        ],
      },
    ],
  },
  {
    label: "Contact Us",
    href: `${BASE}/contact-us/`,
  },
  {
    label: "Querry",
    href: `${BASE}/contact-us/`,
  },
];

export const APPLY_NOW_HREF = `${BASE}/contact-us/`;
