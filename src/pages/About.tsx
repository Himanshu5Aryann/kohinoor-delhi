import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import { img } from "../data/media";
import { business, waLink, waMessages } from "../data/business";

export default function About() {
  return (
    <>
      <SEO
        title="About Kohinoor Furniture House | Since 2008"
        description="Kohinoor Furniture House was established in 2008 in Chhatarpur, New Delhi — bespoke furniture, custom manufacturing and interior design."
      />

      <section className="relative flex h-[65vh] min-h-[440px] items-end overflow-hidden bg-charcoal text-ivory">
        <img src={img.workshop6} alt="Kohinoor Furniture House workshop" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-charcoal/30" />
        <div className="container-xl relative z-10 pb-16 pt-32">
          <p className="label text-champagne">ABOUT US</p>
          <h1 className="mt-6 max-w-3xl font-serif text-5xl leading-[1.1] md:text-6xl">
            Crafted with experience. Built with purpose.
          </h1>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="container-xl grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 md:py-28">
        <Reveal>
          <p className="label">OUR STORY</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest">
            Since 2008, Chhatarpur, New Delhi.
          </h2>
          <p className="mt-6 max-w-lg text-charcoal/70">
            Kohinoor Furniture House was established in 2008 as a furniture and carpentry workshop in
            Chhatarpur, New Delhi. Over the years, the business has grown into a complete furniture and
            interior design house — combining custom manufacturing with thoughtful design for
            residential and commercial spaces across Delhi NCR.
          </p>
          <p className="mt-4 max-w-lg text-charcoal/70">
            Every project, from a single piece of furniture to a complete home interior, is approached
            with the same attention to detail and commitment to quality that the business was founded on.
          </p>
        </Reveal>
        <Reveal delay={0.1} className="aspect-[4/5] overflow-hidden">
          <img src={img.workshop4} alt="Craftsman at work" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
      </section>

      {/* SINCE 2008 TIMELINE */}
      <section className="bg-forest py-24 text-ivory md:py-32">
        <div className="container-xl flex flex-col items-center text-center">
          <Reveal>
            <span className="font-serif text-8xl text-gold md:text-9xl">2008</span>
            <p className="label mt-4">SINCE</p>
          </Reveal>
          <Reveal delay={0.1} className="mt-14 max-w-2xl border-t border-ivory/15 pt-10">
            <h3 className="font-serif text-2xl">Kohinoor Furniture House established.</h3>
            <p className="mt-4 text-ivory/70">
              What began as a dedicated furniture and carpentry workshop in Chhatarpur has grown into a
              trusted name for bespoke furniture and interior design in the area — built one project,
              and one relationship, at a time.
            </p>
          </Reveal>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="container-xl grid grid-cols-1 items-center gap-14 py-24 lg:grid-cols-2 lg:gap-20 md:py-28">
        <Reveal className="order-2 aspect-[4/5] overflow-hidden lg:order-1">
          <img src={img.workshop2} alt="Craftsman polishing furniture" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1} className="order-1 lg:order-2">
          <p className="label">EXPERIENCE</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest">
            {business.yearsExperience}+ years shaping spaces.
          </h2>
          <p className="mt-6 max-w-lg text-charcoal/70">
            Since 2008, our team has worked across furniture manufacturing, carpentry and interior
            design — developing an eye for detail that comes only with years of hands-on craftsmanship.
          </p>
        </Reveal>
      </section>

      {/* TEAM */}
      <section className="bg-emerald py-24 text-ivory md:py-28">
        <div className="container-xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label">TEAM</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15]">Craftsmen, designers, installers.</h2>
            <p className="mt-6 max-w-lg text-ivory/70">
              Our team brings together design, carpentry and installation expertise under one roof —
              so every project is managed from the first sketch to the final finishing touch.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="aspect-[4/3] overflow-hidden">
            <img src={img.workshop5} alt="Kohinoor Furniture House team at work" className="h-full w-full object-cover" loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* WORKSHOP */}
      <section className="container-xl grid grid-cols-1 gap-6 py-24 md:grid-cols-3 md:py-28">
        <Reveal className="md:col-span-2 aspect-[16/10] overflow-hidden">
          <img src={img.workshop1} alt="Kohinoor manufacturing workshop" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="label">WORKSHOP &amp; MANUFACTURING</p>
          <h3 className="mt-4 font-serif text-2xl text-forest">Where every piece comes to life.</h3>
          <p className="mt-4 text-sm leading-relaxed text-charcoal/65">
            Our workshop handles cutting, joinery, assembly, polishing and finishing in-house, allowing
            us to maintain quality control at every stage of production.
          </p>
        </Reveal>
      </section>

      {/* QUALITY & MATERIALS */}
      <section className="bg-ivory border-y border-champagne/30 py-24 md:py-28">
        <div className="container-xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label">QUALITY &amp; MATERIALS</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest">
              Materials chosen with intent.
            </h2>
            <p className="mt-6 max-w-lg text-charcoal/70">
              We work with wood, steel, PVC and iron — selecting the right material for each project
              based on durability, application and the finish our clients are looking for.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="grid grid-cols-2 gap-4">
            <div className="aspect-square overflow-hidden">
              <img src={img.woodTexture1} alt="Wood texture" className="h-full w-full object-cover" loading="lazy" />
            </div>
            <div className="aspect-square overflow-hidden">
              <img src={img.marbleTexture1} alt="Marble texture" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="container-xl py-20 text-center md:py-24">
        <Reveal>
          <p className="label">CERTIFICATIONS &amp; CREDENTIALS</p>
          <p className="mt-4 text-charcoal/50">Information to be added.</p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="bg-charcoal py-24 text-center text-ivory">
        <div className="container-xl">
          <h2 className="font-serif text-4xl md:text-5xl">Let's build something together.</h2>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link to="/contact" className="btn-outline">
              Book a Free Consultation
            </Link>
            <a href={waLink(waMessages.general)} target="_blank" rel="noreferrer" className="btn-primary bg-gold border-gold text-forest hover:bg-transparent hover:text-ivory">
              Enquire on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
