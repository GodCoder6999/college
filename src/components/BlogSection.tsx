import type { BlogPost } from "@/types/site";

const BLOG_POSTS: BlogPost[] = [
  {
    image: "/images/blog/why-dpharm.svg",
    tag: "Course",
    date: "12 Jan 2026",
    title: "Reasons to Pursue a Diploma in Pharmacy",
    excerpt:
      "A D.Pharm builds a strong foundation in pharmaceutical sciences and healthcare practices, and prepares students for a vital role in patient care and safe medication dispensing.",
    href: "https://muktirshikshacollegeofeducationandpharmacy.org/course/",
  },
  {
    image: "/images/blog/lab-skills.svg",
    tag: "Learning",
    date: "05 Jan 2026",
    title: "Practical Training That Prepares You for Real Work",
    excerpt:
      "Our course pairs theory with hands-on laboratory training, so graduates can work confidently in pharmacies, hospitals and other healthcare institutions from day one.",
    href: "https://muktirshikshacollegeofeducationandpharmacy.org/about-us/",
  },
  {
    image: "/images/blog/admission-guide.svg",
    tag: "Admission",
    date: "02 Jan 2026",
    title: "How to Apply for the Diploma in Pharmacy",
    excerpt:
      "Admissions are open for the Diploma in Pharmacy programme. Reach out to our team for guidance on the application process, course details, or any other enquiry.",
    href: "https://muktirshikshacollegeofeducationandpharmacy.org/contact-us/",
  },
];

export function BlogSection() {
  return (
    <section className="msc-section-padding">
      <div className="msc-container">
        <div className="mb-[48px] text-center">
          <h6 className="mb-[10px] text-[13px] leading-[19.5px] font-semibold tracking-[4px] text-[#181b31] uppercase opacity-80">
            From Our Institute
          </h6>
          <h4 className="text-[40px] leading-[64px] font-bold text-[#181b31] max-[575px]:text-[25px]">
            Latest Updates
          </h4>
        </div>

        <div className="flex flex-wrap">
          {BLOG_POSTS.map((post) => (
            <div
              key={post.href}
              className="mb-[1.5rem] w-full px-[15px] min-[992px]:w-1/3"
            >
              <div className="mt-[35px] overflow-hidden rounded-[5px] bg-white shadow-[0_20px_40px_0_rgba(71,67,97,0.09)]">
                <div className="relative">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-[250px] w-full object-cover"
                  />
                  <a
                    href={post.href}
                    className="absolute top-[22px] left-[30px] inline-block rounded-[4px] bg-white px-[12px] py-[4px] text-[13px] leading-[19.5px] font-medium text-[#181b31]"
                  >
                    {post.tag}
                  </a>
                </div>
                <div className="px-[30px] py-[40px]">
                  <div className="mb-[15px] leading-[16.5px] opacity-70">
                    <span className="text-[11px] leading-[16.5px] font-normal text-[#181b31] uppercase">
                      {post.date}
                    </span>
                  </div>
                  <h5 className="line-clamp-2">
                    <a
                      href={post.href}
                      className="inline-block text-[18px] leading-[30.6px] font-bold text-[#181b31]"
                    >
                      {post.title}
                    </a>
                  </h5>
                  <p className="mt-[8px] line-clamp-3 text-[14px] text-[#64748b]">
                    {post.excerpt}
                  </p>
                  <a
                    href={post.href}
                    className="group relative mt-[20px] inline-block overflow-hidden pb-[5px] text-center text-[16px] text-[#181b31] opacity-90 transition-[0.4s] hover:opacity-100"
                  >
                    Continue Reading
                    <span className="msc-grad-coral absolute bottom-0 left-0 h-[2px] w-full" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-[40px] text-center">
          <a
            href="https://muktirshikshacollegeofeducationandpharmacy.org/course/"
            className="group relative inline-flex items-center gap-[10px] overflow-hidden rounded-[50px] px-[36px] py-[14px] text-[15px] font-bold tracking-[0.5px] text-white shadow-[0_6px_24px_rgba(30,64,175,0.28)] transition-all duration-[250ms] hover:shadow-[0_8px_30px_rgba(245,158,11,0.3)]"
          >
            <span
              className="absolute inset-0 -z-[1]"
              style={{ background: "linear-gradient(135deg,#0f1d3d,#1e40af)" }}
            />
            <span
              className="absolute inset-0 -z-[1] opacity-0 transition-opacity duration-[250ms] group-hover:opacity-100"
              style={{ background: "linear-gradient(135deg,#1e40af,#f59e0b)" }}
            />
            <i className="fas fa-book-open" />
            <span>Explore the Course</span>
            <i className="fas fa-arrow-right" />
          </a>
        </div>
      </div>
    </section>
  );
}
