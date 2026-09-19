import { Link } from "react-router-dom";
import { business, waLink, waMessages } from "../data/business";

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory">
      <div className="container-xl grid grid-cols-1 gap-12 py-20 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-1">
          <div className="flex flex-col leading-none">
            <span className="font-serif text-3xl tracking-[0.15em]">KOHINOOR</span>
            <span className="mt-1 text-[10px] tracking-[0.45em] text-gold">FURNITURE HOUSE</span>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-ivory/70">
            Bespoke Furniture &amp; Interior Design. Designed for your space, crafted for your lifestyle — since 2008.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <a
              href={business.facebookUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Kohinoor Furniture House on Facebook"
              className="flex h-10 w-10 items-center justify-center rounded-[8px] border border-gold/80 bg-forest/40 text-gold transition-colors duration-300 hover:border-gold hover:bg-gold/10 hover:text-gold"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06C2 17.08 5.66 21.23 10.44 22v-7.03H7.9v-2.91h2.54V9.85c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.44 2.91h-2.34V22C18.34 21.23 22 17.08 22 12.06Z" />
              </svg>
            </a>
          </div>
        </div>

        <div>
          <h4 className="label mb-6">Explore</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            {[
              ["Home", "/"],
              ["Furniture", "/furniture"],
              ["Interior Design", "/interior-design"],
              ["Custom Furniture", "/custom-furniture"],
              ["Portfolio", "/portfolio"],
              ["About", "/about"],
              ["Contact", "/contact"],
              ["FAQ", "/faq"],
            ].map(([label, to]) => (
              <li key={to}>
                <Link to={to} className="link-underline hover:text-ivory">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="label mb-6">Services</h4>
          <ul className="space-y-3 text-sm text-ivory/75">
            {["Sofas", "Beds", "Dining Tables", "Wardrobes", "TV Units", "Modular Kitchens", "Complete Home Interiors", "Office Interiors"].map(
              (s) => (
                <li key={s}>{s}</li>
              ),
            )}
          </ul>
        </div>

        <div>
          <h4 className="label mb-6">Visit Us</h4>
          <p className="text-sm leading-relaxed text-ivory/75">
            {business.address.line1}
            <br />
            {business.address.line2}
            <br />
            {business.address.line3}
          </p>
          <a
            href={waLink(waMessages.general)}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-sm link-underline"
          >
            Enquire on WhatsApp
          </a>
          <div className="mt-4 flex flex-col gap-2 text-sm text-champagne/80">
            <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="link-underline w-fit">
              View on Google Maps
            </a>
            <a href={business.justdialUrl} target="_blank" rel="noreferrer" className="link-underline w-fit">
              Find us on Justdial
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-ivory/10">
        <div className="container-xl flex flex-col items-center justify-between gap-3 py-6 text-xs text-ivory/50 md:flex-row">
          <p>© 2026 Kohinoor Furniture House. All Rights Reserved.</p>
          <p>Built and designed by Himanshu Aryann</p>
        </div>
      </div>
    </footer>
  );
}
