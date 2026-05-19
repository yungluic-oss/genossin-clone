export default function LogoStrip() {
  // Live SSR HTML at genossin.com contains zero logo images in this section
  // (verified via WebFetch + audit at project/audit/all-sections-1440.json:
  // imgCount=0, only headerText "Over 10+ business trust us"). Section height
  // on live is 122px at 1440 viewport — py-14 + text gives ~122px.
  return (
    <section
      aria-label="Trusted by"
      className="h-[122px] flex items-center justify-center px-4 border-y border-white/[0.06] bg-[#050505] text-center"
    >
      <p className="text-xs sm:text-sm uppercase tracking-[0.18em] text-white/50">
        Over 10+ business trust us
      </p>
    </section>
  );
}
