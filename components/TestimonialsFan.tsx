'use client'

import { TestimonialCard } from './TestimonialCard'

const testimonials = [
  {
    quote: "Handshake revolutionized our agency's outreach. We scaled from 5 to 50 clients without adding headcount to our lead gen team. The multi-sender rotation keeps us under LinkedIn's radar.",
    author: 'Sarah Jenkins',
    role: 'Founder, GrowthX Agency',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4a2066c6-f734-4270-9f3a-46c34eeeb304_320w.webp',
  },
  {
    quote: 'The unified inbox is a game changer. I can manage responses for 10 different accounts without logging in and out. Our reply rate went from 8% to 31% in just two months.',
    author: 'David Miller',
    role: 'Head of Sales, TechFlow',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c6fe7f3d-bf69-4eff-a8b0-25beb3a0d389_320w.webp',
  },
  {
    quote: 'We were getting flagged constantly with our old tool. Since switching to Handshake with dedicated IPs and smart rotation, we have had zero restrictions. Our pipeline has never been healthier.',
    author: 'Jordan Miles',
    role: 'VP of Sales, SalesEngine',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/aaf5a301-1330-416d-a976-390e8be1e69a_320w.webp',
  },
  {
    quote: 'Setting up 20 sender accounts used to take our team days. With Handshake, we can onboard new clients in under an hour. The workspace separation is perfect for our agency model.',
    author: 'Emily Carter',
    role: 'Operations Director, OutboundPro',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f07a047d-0e90-4c41-8547-dcc5de51e956_320w.webp',
  },
  {
    quote: 'The A/B testing feature alone paid for itself. We discovered our best-performing subject line increases replies by 47%. Now we just let Handshake optimize automatically.',
    author: 'Mark Johnson',
    role: 'Growth Lead, ScaleVentures',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9fd9d548-087b-42ed-a579-70cb556e4727_320w.webp',
  },
  {
    quote: 'Best investment we made this year. Our outbound team went from 50 leads per week to 500 per week without burning out or hitting limits. The ROI is insane.',
    author: 'Michael Reyes',
    role: 'CEO, Pipeline Partners',
    imageUrl: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c1a44224-c9fb-4f2c-97b5-49acf1e50655_320w.webp',
  },
]

export function TestimonialsFan() {
  return (
    <section className="border-y bg-black border-white/5 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16 md:pb-24">
      <div className="group sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
        <style dangerouslySetInnerHTML={{
          __html: `
            .testimonial-cards-fan {
              perspective: 2000px;
            }

            .testimonial-card {
              position: absolute;
              left: 50%;
              top: 50%;
              transition: all 0.6s cubic-bezier(0.2, 0.8, 0.2, 1);
              will-change: transform, opacity, box-shadow;
              transform-origin: center center;
            }

            /* FAN STATE (DEFAULT) */
            .card-1 {
              z-index: 60;
              transform: translate(-50%, -50%) scale(1);
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
              filter: brightness(1.1);
            }

            .card-2 {
              z-index: 50;
              transform: translate(-50%, -50%) translate(-160px, 10px) rotate(-8deg) scale(0.95);
              opacity: 0.9;
            }
            .card-3 {
              z-index: 50;
              transform: translate(-50%, -50%) translate(160px, 10px) rotate(8deg) scale(0.95);
              opacity: 0.9;
            }

            .card-4 {
              z-index: 40;
              transform: translate(-50%, -50%) translate(-300px, 40px) rotate(-16deg) scale(0.9);
              opacity: 0.8;
            }
            .card-5 {
              z-index: 40;
              transform: translate(-50%, -50%) translate(300px, 40px) rotate(16deg) scale(0.9);
              opacity: 0.8;
            }

            .card-6 {
              z-index: 30;
              transform: translate(-50%, -50%) translateY(-20px) scale(0.88);
              opacity: 0.6;
              filter: brightness(0.7);
            }

            /* GRID STATE (HOVER) */
            .group:hover .testimonial-card {
              z-index: 50;
              opacity: 1;
              filter: brightness(1);
              box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
            }

            /* Row 1 */
            .group:hover .card-2 { transform: translate(-50%, -50%) translate(-105%, -55%) rotate(0deg) scale(1); }
            .group:hover .card-1 { transform: translate(-50%, -50%) translate(0%, -55%) rotate(0deg) scale(1); }
            .group:hover .card-3 { transform: translate(-50%, -50%) translate(105%, -55%) rotate(0deg) scale(1); }

            /* Row 2 */
            .group:hover .card-4 { transform: translate(-50%, -50%) translate(-105%, 55%) rotate(0deg) scale(1); }
            .group:hover .card-6 { transform: translate(-50%, -50%) translate(0%, 55%) rotate(0deg) scale(1); }
            .group:hover .card-5 { transform: translate(-50%, -50%) translate(105%, 55%) rotate(0deg) scale(1); }

            /* Mobile Layout Override */
            @media (max-width: 1024px) {
              .testimonial-cards-fan { height: auto !important; display: flex; flex-direction: column; padding: 4rem 1rem; gap: 1.5rem; }
              .testimonial-card { position: relative !important; left: auto !important; top: auto !important; transform: none !important; width: 100% !important; max-width: 28rem !important; opacity: 1 !important; }
              .group:hover .testimonial-card { transform: none !important; }
            }
          `,
        }} />

        <div className="mb-6 flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1">
            <span className="h-2 w-2 rounded-full bg-blue-400" />
            <span className="text-xs font-medium tracking-wide uppercase font-geist text-gray-300">
              Loved by 500+ agencies
            </span>
          </div>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium text-white tracking-tight font-jakarta text-center mb-4 sm:mb-6 px-4">
          What sales teams are saying about
          <span className="text-blue-500 font-jakarta font-medium"> Handshake</span>
        </h2>
        <p className="mb-6 sm:mb-8 md:mb-10 text-base sm:text-lg max-w-2xl mx-auto text-center font-geist text-gray-400 px-4">
          From solo founders to enterprise sales teams, see how Handshake is helping teams scale their LinkedIn outreach safely and effectively.
        </p>

        <div className="testimonial-cards-fan group flex w-full h-auto lg:h-[42rem] max-w-7xl mt-0 mb-0 relative items-center justify-center">
          <TestimonialCard {...testimonials[0]} className="card-1" />
          <TestimonialCard {...testimonials[1]} className="card-2" />
          <TestimonialCard {...testimonials[2]} className="card-3" />
          <TestimonialCard {...testimonials[3]} className="card-4" />
          <TestimonialCard {...testimonials[4]} className="card-5" />
          <TestimonialCard {...testimonials[5]} className="card-6" />
        </div>
      </div>
    </section>
  )
}

