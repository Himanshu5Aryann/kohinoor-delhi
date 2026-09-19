import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import Reveal from "../components/Reveal";
import CountUp from "../components/CountUp";
import BeforeAfterSlider from "../components/BeforeAfterSlider";
import { heroVideo, heroVideoPoster, img } from "../data/media";
import { business, waLink, waMessages } from "../data/business";
import { reviews } from "../data/reviews";

const services = [
  {
    n: "01",
    title: "Bespoke Furniture",
    desc: "Custom-made furniture designed specifically for your space.",
    image: "/interior_2_08.png",
    to: "/furniture",
  },
  {
    n: "02",
    title: "Luxury Interiors",
    desc: "Complete interior solutions for residential and commercial spaces.",
    image: "/interior_08.png",
    to: "/interior-design",
  },
  {
    n: "03",
    title: "Modular Kitchens",
    desc: "Functional, elegant kitchens designed around your lifestyle.",
    image: "/interior_2_01.png",
    to: "/interior-design",
  },
  {
    n: "04",
    title: "Custom Wardrobes",
    desc: "Storage designed around your dimensions and aesthetic.",
    image: "/interior_05.png",
    to: "/furniture",
  },
  {
    n: "05",
    title: "Complete Home Interiors",
    desc: "Concept, design, manufacturing and installation.",
    image: "/interior_01.png",
    to: "/interior-design",
  },
  {
    n: "06",
    title: "Office Interiors",
    desc: "Sophisticated and functional workspaces.",
    image: "/officeb.png",
    to: "/interior-design",
  },
];

const featured = [
  { name: "Signature Sofa", image: "/interior_2_08.png", slug: "signature-sofa" },
  { name: "Bespoke Bed", image: "/interior_2_06.png", slug: "bespoke-bed" },
  { name: "Designer Dining Table", image: "/tablee.png", slug: "designer-dining-table" },
  { name: "Custom Wardrobe", image: "/ewwwww.png", slug: "custom-wardrobe" },
  { name: "Luxury TV Unit", image: "/tvvv.png", slug: "luxury-tv-unit" },
  { name: "Modular Kitchen Suite", image: "/interior_04.png", slug: "modular-kitchen-suite" },
];

const materials = [
  { name: "Wood", image: img.woodTexture2, desc: "Solid & engineered timber, chosen for grain, strength and finish." },
  { name: "Steel", image: img.hardware1, desc: "Precision metal framing and fittings for durability and clean lines." },
  { name: "PVC", image: img.wardrobe3, desc: "Moisture-resistant surfaces suited to kitchens and wet areas." },
  { name: "Iron", image: img.hardware2, desc: "Structural and decorative ironwork for accents and support." },
];

const properties = [
  { name: "Residential", image: img.livingRoom5 },
  { name: "Commercial", image: img.corporate1 },
  { name: "Corporate", image: img.office2 },
  { name: "Restaurant", image: img.restaurant2 },
  { name: "Hotel", image: img.hotel1 },
  { name: "Industrial", image: img.workshop1 },
];

const whyKohinoor = [
  { title: "Since 2008", desc: "Years of experience and established presence in Chhatarpur, Delhi." },
  { title: "Made to Measure", desc: "Furniture designed around actual spaces, not generic dimensions." },
  { title: "End-to-End Execution", desc: "From first consultation through final installation." },
  { title: "Experienced Craftsmanship", desc: "Attention to detail across every stage of manufacturing." },
  { title: "Premium Materials", desc: "Material and finish options suited to different requirements." },
  { title: "Personalised Design", desc: "Every project is developed around the client's needs." },
];

export default function Home() {
  return (
    <>
      <SEO
        title="Kohinoor Furniture House | Premium Furniture & Interior Design in Delhi"
        description="Bespoke furniture and thoughtfully designed interiors, crafted around your space and lifestyle. Since 2008 in Chhatarpur, New Delhi."
      />

      {/* HERO */}
      <section className="hero-section relative flex h-[92vh] min-h-[640px] w-full items-end overflow-hidden bg-charcoal text-ivory md:h-screen">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={heroVideoPoster}
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d0c]/80 via-[#0b0d0c]/55 to-[#0b0d0c]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d0c]/80 via-[#0b0d0c]/25 to-transparent" />

        <div className="container-xl relative z-10 pb-20 pt-32 md:pb-24 md:pt-36">
          <div className="hero-copy fade-up max-w-[580px]">
            <p className="hero-eyebrow text-champagne">SINCE 2008</p>
            <h1 className="hero-headline mt-6 font-serif text-ivory">
              Crafting spaces
              <br />
              worth coming home to.
            </h1>
            <p className="hero-description mt-7 text-ivory/80" style={{ animationDelay: "0.15s" }}>
              Bespoke furniture and luxury interiors, thoughtfully designed and crafted around the way you live.
            </p>
            <div className="hero-cta-group mt-9" style={{ animationDelay: "0.25s" }}>
              <Link to="/portfolio" className="hero-btn-secondary">
                Explore Our Work
              </Link>
              <a href={waLink(waMessages.consultation)} target="_blank" rel="noreferrer" className="hero-btn-primary">
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-b border-champagne/30 bg-ivory">
        <div className="container-xl grid grid-cols-2 divide-y divide-champagne/30 md:grid-cols-4 md:divide-x md:divide-y-0">
          {[
            { value: <><CountUp end={5} decimals={1} />★</>, label: "Google Rating" },
            { value: <><CountUp end={business.yearsExperience} suffix="+" /></>, label: "Years of Experience" },
            { value: "2008", label: "Since 2008" },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center gap-2 py-10 text-center">
              <span className="font-serif text-4xl text-forest md:text-5xl">{s.value}</span>
              <span className="label text-charcoal/50">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="container-xl py-24 md:py-32">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="label">THE KOHINOOR APPROACH</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest md:text-5xl">
              Furniture should not simply fill a room. It should define it.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal/70">
              Kohinoor Furniture House brings together design, craftsmanship and manufacturing to create
              furniture and interiors tailored to individual spaces. Every project begins with a
              conversation about how you live, and ends with a space that feels distinctly yours.
            </p>
            <Link to="/about" className="link-underline mt-8 inline-block text-sm tracking-[0.08em] uppercase text-forest">
              Explore Our Story →
            </Link>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img src="/interior_01.png" alt="Luxury living room interior by Kohinoor Furniture House" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-emerald py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">WHAT WE DO</p>
            <h2 className="mt-6 max-w-3xl font-serif text-4xl leading-[1.1] md:text-5xl">
              From a single piece to an entire home.
            </h2>
          </Reveal>

          <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden bg-ivory/10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06}>
                <Link to={s.to} className="group relative block h-[420px] overflow-hidden bg-emerald">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="absolute inset-0 h-full w-full scale-105 object-cover opacity-60 transition-all duration-700 group-hover:scale-110 group-hover:opacity-40"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent" />
                  <div className="relative flex h-full flex-col justify-end p-8">
                    <span className="font-serif text-sm text-gold">{s.n}</span>
                    <h3 className="mt-3 font-serif text-2xl">{s.title}</h3>
                    <p className="mt-3 max-w-xs text-sm text-ivory/70">{s.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-xs tracking-[0.15em] uppercase text-champagne opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      Explore →
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED FURNITURE */}
      <section className="container-xl py-24 md:py-32">
        <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="label">SIGNATURE PIECES</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
              Featured Furniture
            </h2>
          </div>
          <Link to="/furniture" className="btn-gold-outline shrink-0">
            View All Furniture
          </Link>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((f, i) => (
            <Reveal key={f.slug} delay={i * 0.05}>
              <Link to={`/furniture/${f.slug}`} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={f.image}
                    alt={f.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <h3 className="font-serif text-xl text-forest">{f.name}</h3>
                  <span className="text-xs tracking-[0.1em] uppercase text-gold opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    View →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CUSTOM FURNITURE STORY */}
      <section className="bg-charcoal py-24 text-ivory md:py-32">
        <div className="container-xl grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <img src={img.workshop4} alt="Craftsman shaping bespoke furniture in the Kohinoor workshop" className="h-full w-full object-cover" loading="lazy" />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="label">MADE TO ORDER</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] md:text-5xl">Your idea. Our craft.</h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-ivory/70">
              Design, size, material, finish and hardware — every detail of a custom piece is developed
              around your requirements, then brought to life in our workshop by experienced craftsmen.
            </p>
            <Link to="/custom-furniture" className="btn-gold-outline mt-8 inline-flex w-fit">
              Get a Custom Quote
            </Link>
          </Reveal>
        </div>
      </section>

      {/* INTERIOR DESIGN TEASER */}
      <section className="container-xl py-24 md:py-32">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <Reveal className="lg:col-span-5">
            <p className="label">INTERIOR DESIGN</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest md:text-5xl">
              Interiors designed around you.
            </h2>
            <p className="mt-8 max-w-md text-base leading-relaxed text-charcoal/70">
              From a single room to a complete home, our interior design service covers concept,
              2D/3D visualization, material selection, manufacturing and installation.
            </p>
            <Link to="/interior-design" className="link-underline mt-8 inline-block text-sm tracking-[0.08em] uppercase text-forest">
              Discover Interior Design →
            </Link>
          </Reveal>
          <div className="grid grid-cols-2 gap-6 lg:col-span-7">
            <Reveal className="col-span-2 aspect-[16/9] overflow-hidden">
              <img src="/tvvv.png" alt="Designed living room" className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1} className="aspect-square overflow-hidden">
              <img src="/ewwwww.png" alt="Modular kitchen design" className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
            <Reveal delay={0.15} className="aspect-square overflow-hidden">
              <img src="/tablee.png" alt="Bedroom interior design" className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* MATERIALS */}
      <section className="bg-ivory py-24 md:py-32 border-y border-champagne/30">
        <div className="container-xl">
          <Reveal>
            <p className="label">CRAFTSMANSHIP</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-forest md:text-5xl">Materials matter.</h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-charcoal/70">
              Material selection depends on design requirements, durability, application and finish.
              We work across wood, steel, PVC and iron to match the right material to the right piece.
            </p>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
            {materials.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.08}>
                <div className="group relative aspect-[3/4] overflow-hidden">
                  <img src={m.image} alt={m.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                    <h3 className="font-serif text-xl">{m.name}</h3>
                    <p className="mt-2 text-xs leading-relaxed text-ivory/70">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="container-xl py-24 md:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal>
            <p className="label">OUR WORKSHOP</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest md:text-5xl">
              From design to reality.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-relaxed text-charcoal/70">
              Design is only half the process. The other half is precision manufacturing and execution —
              cutting, joinery, assembly, polishing, finishing, quality checking and installation, carried
              out with care at every stage.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-3 text-sm text-charcoal/60">
              {["Cutting", "Joinery", "Assembly", "Polishing", "Finishing", "Quality Check", "Installation"].map((s) => (
                <span key={s} className="flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-gold" /> {s}
                </span>
              ))}
            </div>
          </Reveal>
          <div className="grid grid-cols-2 gap-6">
            <Reveal className="aspect-[3/4] overflow-hidden">
              <img src={img.workshop1} alt="Precision cutting at the Kohinoor workshop" className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
            <Reveal delay={0.1} className="mt-10 aspect-[3/4] overflow-hidden">
              <img src={img.workshop2} alt="Hand polishing furniture" className="h-full w-full object-cover" loading="lazy" />
            </Reveal>
          </div>
        </div>
      </section>

      {/* PORTFOLIO TEASER */}
      <section className="bg-forest py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="label">PORTFOLIO</p>
              <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] md:text-5xl">
                Spaces we've brought to life.
              </h2>
            </div>
            <Link to="/portfolio" className="btn-gold-outline shrink-0">
              View Full Portfolio
            </Link>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[img.livingRoom6, img.bedroom4, img.kitchen4, img.office3].map((im, i) => (
              <Reveal key={i} delay={i * 0.06} className="group relative aspect-[3/4] overflow-hidden">
                <img src={im} alt="Kohinoor Furniture House project" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="container-xl py-24 md:py-32">
        <Reveal>
          <p className="label">TRANSFORMATION</p>
          <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
            See the difference, drag to compare.
          </h2>
        </Reveal>
        <Reveal delay={0.15} className="mt-14">
          <BeforeAfterSlider before={img.emptyRoom1} after={img.livingRoom4} />
        </Reveal>
      </section>

      {/* PROPERTIES SERVED */}
      <section className="bg-ivory py-24 md:py-32 border-y border-champagne/30">
        <div className="container-xl">
          <Reveal>
            <p className="label">EVERY KIND OF SPACE</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
              Designed for every kind of space.
            </h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-6">
            {properties.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05} className="group relative aspect-square overflow-hidden">
                <img src={p.image} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                <div className="absolute inset-0 bg-charcoal/40 transition-colors duration-300 group-hover:bg-charcoal/20" />
                <span className="absolute bottom-4 left-4 text-sm tracking-[0.08em] uppercase text-ivory">{p.name}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GOOGLE REVIEWS */}
      <section className="container-xl py-24 md:py-32">
        <Reveal className="text-center">
          <p className="label">TRUSTED BY OUR CLIENTS</p>
          <h2 className="mt-6 font-serif text-4xl leading-[1.1] text-forest md:text-5xl">
            Trusted by our clients.
          </h2>
          <div className="mt-8 flex items-center justify-center gap-3">
            <span className="font-serif text-3xl text-forest">5.0 ★</span>
            <span className="text-sm text-charcoal/60">86 Google Reviews</span>
          </div>
          <a
            href={business.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn-gold-outline mt-8 inline-flex"
          >
            Read All Google Reviews
          </a>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={i * 0.08} className="border border-champagne/40 p-8">
              <div className="flex text-gold">{"★".repeat(r.rating)}</div>
              <p className="mt-5 text-sm leading-relaxed text-charcoal/75">&ldquo;{r.text}&rdquo;</p>
              <div className="mt-6 border-t border-champagne/30 pt-4">
                <p className="font-serif text-lg text-forest">{r.name}</p>
                <p className="text-xs text-charcoal/45">{r.meta} · {r.time}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* WHY KOHINOOR */}
      <section className="bg-emerald py-24 text-ivory md:py-32">
        <div className="container-xl">
          <Reveal>
            <p className="label">WHY KOHINOOR?</p>
            <h2 className="mt-6 max-w-2xl font-serif text-4xl leading-[1.1] md:text-5xl">Why Kohinoor?</h2>
          </Reveal>
          <div className="mt-16 grid grid-cols-1 gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {whyKohinoor.map((w, i) => (
              <Reveal key={w.title} delay={i * 0.06}>
                <span className="font-serif text-3xl text-gold">0{i + 1}</span>
                <h3 className="mt-4 font-serif text-2xl">{w.title}</h3>
                <p className="mt-3 max-w-xs text-sm leading-relaxed text-ivory/65">{w.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CONSULTATION CTA */}
      <section className="relative overflow-hidden bg-charcoal py-28 text-center text-ivory md:py-36">
        <img src={img.livingRoom3} alt="" className="absolute inset-0 h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="container-xl relative z-10">
          <Reveal>
            <p className="label">BEGIN YOUR PROJECT</p>
            <h2 className="mx-auto mt-6 max-w-3xl font-serif text-4xl leading-[1.15] md:text-5xl">
              Let's design a space that feels distinctly yours.
            </h2>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link to="/contact" className="btn-primary bg-gold border-gold text-forest hover:bg-transparent hover:text-ivory">
                Book a Free Consultation
              </Link>
              <a href={waLink(waMessages.general)} target="_blank" rel="noreferrer" className="btn-outline">
                Enquire on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CONTACT / LOCATION */}
      <section className="container-xl py-24 md:py-32">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
          <Reveal>
            <p className="label">VISIT THE SHOWROOM</p>
            <h2 className="mt-6 font-serif text-4xl leading-[1.15] text-forest md:text-5xl">
              Chhatarpur, New Delhi.
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-charcoal/70">
              {business.address.full}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="btn-gold-outline">
                Google Maps
              </a>
              <a href={business.justdialUrl} target="_blank" rel="noreferrer" className="btn-gold-outline">
                Find us on Justdial
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.1} className="aspect-[4/3] w-full overflow-hidden lg:aspect-auto">
            <iframe
              title="Kohinoor Furniture House Location"
              src="https://www.google.com/maps?q=Kohinoor+Furniture+House+Chhatarpur+Delhi&output=embed"
              className="h-full min-h-[340px] w-full"
              loading="lazy"
              style={{ filter: 'none' }}
            />
          </Reveal>
        </div>
      </section>
    </>
  );
}
