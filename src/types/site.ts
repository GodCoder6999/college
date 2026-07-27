/** Content structures used across the site sections. */

export interface NavDropdownItem {
  label: string;
  desc?: string;
  href: string;
  icon: string;
  /** Icon foreground colour, e.g. "#1e40af". Background is the same hex + "18". */
  color: string;
  /** Compact variant used by the 3-column department grid. */
  compact?: boolean;
  external?: boolean;
}

export interface NavDropdownGroup {
  sectionLabel?: string;
  columns: 1 | 2 | 3;
  items: NavDropdownItem[];
}

export interface NavItem {
  label: string;
  href?: string;
  /** Present when this entry opens a dropdown / mega menu. */
  groups?: NavDropdownGroup[];
  /** Extra min-width for the dropdown panel, e.g. "280px". */
  dropdownWidth?: string;
  size?: "sm" | "mega" | "mega-lg";
  featured?: {
    title: string;
    lines: string[];
    ctaLabel: string;
    ctaHref: string;
  };
}

export interface HeroSlide {
  image: string;
  title: string;
  titleAccent?: string;
  description?: string;
  buttons: { label: string; href: string; variant: "primary" | "outline" }[];
}

export interface StatItem {
  icon: string;
  value: string;
  label: string;
}

export interface Recruiter {
  logo: string;
  name: string;
}

export interface GalleryTile {
  image: string;
  title: string;
  href: string;
}

export interface Testimonial {
  avatar: string;
  quote: string;
  name: string;
}

export interface BlogPost {
  image: string;
  tag: string;
  date: string;
  title: string;
  excerpt: string;
  href: string;
}

export interface Recognition {
  logo: string;
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
}

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}
