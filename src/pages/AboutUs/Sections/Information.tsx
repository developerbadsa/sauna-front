
export default function Information() {
  return (
    <section className='bg-[#FFFDF6]'>
      <div className=' px-4 py-16 md:py-24 text-[#403D39]'>
        {/* Intro copy */}
        <div className='mb-12 text-center md:mb-16'>
          <p className='mx-auto  text-[18px] leading-[1.9] '>
            At [Your Business Name], we believe that true wellness is found in balance. In
            the ancient rhythm of heat and cold, relaxation and invigoration. Founded right
            here in Calgary, we are more than just a retailer; we are your partners in
            creating a personal sanctuary for health, right in your own home or business.
          </p>
        </div>

        {/* STORY */}
        <div className='space-y-4 md:space-y-5'>
          <div className='space-y-3'>
            <h2 className='text-[32px] font-semibold uppercase tracking-[0.04em]'>
              OUR STORY:
            </h2>
            <p className='text-[10px] uppercase tracking-[0.24em] text-[#403D39]'>
              FROM CALGARY ROOTS TO HOME WELLNESS
            </p>
            <p className=' leading-[1.9] text-[18px]'>
              Our journey began when we saw a need for high-quality, accessible wellness
              solutions for our fellow Calgarians. We understand the unique climate and
              lifestyle of our city and how the restorative power of a sauna session or the
              invigoration of a cold plunge can be a game-changer for mind and body. What
              started as a passion for authentic wellness traditions has grown into [Your
              Business Name] – Calgary&apos;s trusted source for premium indoor saunas,
              rugged outdoor saunas, innovative infrared technology, soothing hot tubs, and
              energizing cold plunges.
            </p>
          </div>

          {/* MISSION */}
          <div className='space-y-3'>
            <h2 className='text-[32px] font-semibold uppercase tracking-[0.04em]'>
              OUR MISSION:
            </h2>
            <p className=' leading-[1.9] text-[18px]'>
              Our mission is simple: to enrich the lives of our community by providing
              superior wellness products, expert guidance, and unwavering customer service.
              We are dedicated to helping you find the perfect balance for your lifestyle.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
