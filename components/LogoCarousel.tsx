'use client'

const CompanyLogo = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center justify-center h-[28px] sm:h-[32px] md:h-[36px] px-3 sm:px-4">
      <span className="text-base sm:text-xl md:text-2xl font-bold text-slate-200 tracking-tight font-geist uppercase whitespace-nowrap">
        {name}
      </span>
    </div>
  )
}

const logos = [
  'Acme Corp',
  'TechFlow',
  'GrowthLabs',
  'SalesForce',
  'CloudScale',
  'DataSync',
  'RevOps',
  'PipelinePro',
]

export function LogoCarousel() {
  return (
    <div className="[animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll text-center max-w-7xl mt-12 sm:mt-16 md:mt-24 mr-auto mb-12 sm:mb-16 md:mb-24 ml-auto pr-4 pl-4">
      <p className="text-xs sm:text-sm font-medium font-geist mb-6 sm:mb-10 text-gray-500">
        Trusted by high-growth sales teams at
      </p>
      <div className="group flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)] sm:[mask-image:_linear-gradient(to_right,transparent_0,_black_96px,_black_calc(100%-96px),transparent_100%)] md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] hover:grayscale-0 hover:opacity-100 transition-all duration-500 opacity-40 w-full relative grayscale">
        {[...Array(2)].map((_, i) => (
          <div
            key={i}
            className="flex shrink-0 gap-8 sm:gap-12 md:gap-16 animate-infinite-scroll pr-8 sm:pr-12 md:pr-16 items-center justify-center"
          >
            {logos.map((logo, idx) => (
              <CompanyLogo key={`${i}-${idx}`} name={logo} />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

