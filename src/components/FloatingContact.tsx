import { waLink, waMessages } from "../data/business";

export default function FloatingContact() {
  return (
    <>
      {/* Desktop floating WhatsApp */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:flex">
        <a
          href={waLink(waMessages.general)}
          target="_blank"
          rel="noreferrer"
          aria-label="Enquire on WhatsApp"
          className="flex h-14 w-14 items-center justify-center rounded-[8px] border border-gold/80 bg-forest/70 text-gold shadow-[0_16px_30px_rgba(11,17,16,0.14)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:text-gold"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.42-1.36a9.86 9.86 0 0 0 4.62 1.16h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.38 1.32-1.92 1.4-.49.07-1.1.1-1.78-.11a17 17 0 0 1-1.62-.6c-2.86-1.24-4.72-4.12-4.86-4.31-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
          </svg>
        </a>
      </div>

      {/* Mobile floating WhatsApp */}
      <div
        className="fixed right-5 z-40 flex md:hidden"
        style={{ bottom: "max(20px, env(safe-area-inset-bottom))" }}
      >
        <a
          href={waLink(waMessages.general)}
          target="_blank"
          rel="noreferrer"
          aria-label="Enquire on WhatsApp"
          className="flex h-15 w-15 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_22px_rgba(11,47,38,0.28)] transition-transform duration-300 hover:-translate-y-0.5"
        >
          <svg width="27" height="27" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.82L2 22l5.42-1.36a9.86 9.86 0 0 0 4.62 1.16h.01c5.46 0 9.9-4.45 9.9-9.9C21.95 6.45 17.5 2 12.04 2Zm5.8 14.09c-.24.68-1.38 1.32-1.92 1.4-.49.07-1.1.1-1.78-.11a17 17 0 0 1-1.62-.6c-2.86-1.24-4.72-4.12-4.86-4.31-.14-.19-1.16-1.55-1.16-2.95 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.81 2 .88 2.15.07.14.12.31.02.5-.1.19-.15.31-.3.48-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.29.76 1.25 1.63 2.03 1.12 1 2.06 1.31 2.35 1.46.29.15.46.13.63-.08.17-.21.72-.84.92-1.13.19-.29.38-.24.64-.14.26.1 1.66.78 1.94.92.29.14.48.21.55.33.07.12.07.68-.17 1.36Z" />
          </svg>
        </a>
      </div>
    </>
  );
}
