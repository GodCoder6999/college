"use client";

import { BottomCurveIcon } from "@/components/icons";
import { useReveal } from "@/hooks/use-reveal";
import type { GalleryTile } from "@/types/site";

const GALLERY_TILES: GalleryTile[] = [
  {
    image: "/images/gallery/classroom.jpg",
    title: "Classroom",
    href: "/about_institution",
  },
  {
    image: "/images/gallery/laboratory.jpg",
    title: "Laboratory",
    href: "/about_institution",
  },
  {
    image: "/images/gallery/library.jpg",
    title: "Library",
    href: "/about_institution",
  },
  {
    image: "/images/gallery/campus-life.jpg",
    title: "Campus Life",
    href: "/about_institution",
  },
];

export function GallerySection() {
  const { ref, shown } = useReveal<HTMLDivElement>();

  return (
    <section className="msc-section-padding relative overflow-x-clip bg-[#fafafb]">
      <div className="msc-container relative z-[1]">
        <div className="mb-[20px] flex flex-wrap items-center">
          <div className="w-full min-[992px]:w-[41.667%]">
            <div>
              <span className="mb-[20px] inline-block rounded-[30px] bg-[#e9eef4] px-[20px] py-[8px] text-[13px] leading-[19.5px] font-semibold tracking-[4px] uppercase opacity-80">
                <span className="text-[12px] leading-[18px] font-semibold tracking-[2px] uppercase">
                  Showcases
                </span>
              </span>
            </div>
            <h2 className="msc-grad-text inline-block text-[40px] leading-[64px] font-extrabold max-[575px]:text-[30px]">
              Our Gallery
            </h2>
          </div>
          <div className="flex w-full items-center justify-start min-[992px]:w-[58.333%] min-[992px]:justify-end">
            <a
              href="/about_institution"
              className="inline-flex items-center gap-[8px] rounded-[8px] bg-[#0f1d3d] px-[22px] py-[10px] text-[13px] font-bold tracking-[0.5px] text-[#f59e0b] transition-colors duration-200 hover:bg-[#1e40af]"
            >
              View Our Campus
              <i className="fas fa-arrow-right" />
            </a>
          </div>
        </div>

        <div ref={ref} className="flex flex-wrap">
          {GALLERY_TILES.map((tile, i) => (
            <div
              key={tile.title}
              className={`mt-[50px] w-full px-[30px] min-[768px]:w-1/2 min-[992px]:w-1/4 msc-wow${
                shown ? " msc-in msc-fade-up" : ""
              }`}
              style={shown ? { animationDelay: "0.4s" } : undefined}
            >
              <div className="group relative h-[180px] w-full overflow-hidden transition-[0.3s]">
                <img
                  src={tile.image}
                  alt="image"
                  className="h-full w-full rounded-[5px] object-cover transition-[0.5s] group-hover:scale-[1.06]"
                />
                <div className="msc-grad-coral absolute inset-0 flex h-full w-full items-center justify-center rounded-[5px] opacity-0 invisible transition-all duration-[400ms] group-hover:opacity-90 group-hover:visible">
                  <i className="fas fa-arrow-right text-[20px] text-white" />
                </div>
              </div>
              <div className="mt-[30px] text-center">
                <h6 className="mb-[5px] text-[16px] leading-[24px] font-bold">
                  <a
                    href={tile.href}
                    className="text-[#0f1d3d] transition-colors hover:text-[#1e40af]"
                  >
                    {tile.title}
                  </a>
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="pointer-events-none absolute bottom-0 left-[-72px] right-[-72px] z-0 h-[300px]"
        aria-hidden="true"
      >
        <BottomCurveIcon className="h-full w-full" fill="#fff" />
      </div>
    </section>
  );
}
