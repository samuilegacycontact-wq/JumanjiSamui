export function Footer() {
  return (
    <footer className="bg-near-black py-16 px-5 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-10">
          {/* Left: Brand */}
          <div className="space-y-2">
            {/* TODO: Insert logo image file — /public/logo.svg */}
            <p className="font-serif font-bold text-2xl tracking-widest text-cream">
              JUMANJI
            </p>
            <p className="font-sans text-cream/50 text-sm">Koh Samui, Thailand</p>
            <p className="font-sans text-cream/50 text-sm">JumanjiSamui.com</p>

            {/* TODO: Add Instagram link in footer when account is live */}
            {/* TODO: Add Facebook link in footer when account is live */}
          </div>

          {/* Right: Legal disclaimer */}
          <div className="md:max-w-sm">
            <p className="font-sans text-cream/30 text-xs leading-relaxed">
              All activities are delivered by licensed, independent operators. Jumanji is a
              marketing and referral service. Guests pay operators directly at the time of the
              activity.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-cream/[0.06]">
          <p className="font-sans text-cream/20 text-xs">
            © {new Date().getFullYear()} Jumanji Samui. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
