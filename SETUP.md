# Quick Setup Guide

## Installation

Run this command to install all dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) in your browser.

## What's Included

✅ **18 React Components** - All sections from seed.html converted to TypeScript
✅ **Custom Tailwind Config** - 3D transforms (rotate-x, rotate-y, rotate-z, perspective utilities)
✅ **Scroll Animations** - IntersectionObserver-based animations trigger on scroll
✅ **Spotlight Effects** - Mouse-tracking radial gradients on cards
✅ **UnicornStudio Integration** - Animated background effect
✅ **Iconify Icons** - 1000+ icons available via @iconify/react
✅ **Responsive Design** - Mobile-first with breakpoint optimization
✅ **Custom Hooks** - useSpotlight and useInView for reusable logic

## Key Animations

1. **fadeSlideIn** - Entry animation (opacity + translateY + blur effect)
2. **Spotlight Cards** - Mouse-tracking glow on hover (FeatureCard, TestimonialCard, PricingTable)
3. **3D Transforms** - EditorMockup, BentoSection mockup with perspective
4. **Testimonial Fan** - Cards fan out, then grid on hover
5. **Logo Carousel** - Infinite horizontal scroll with seamless loop
6. **Floating Badge** - Subtle 3D float animation on collaboration badge

## Component Architecture

### Layout Components
- `Navbar` - Fixed top navigation with glass effect
- `Footer` - Site footer with links and social icons

### Hero Section
- `Hero` - Main hero with CTA buttons
- `BackgroundEffect` - UnicornStudio animated background
- `EditorMockup` - Full 3D editor interface mockup
  - `EditorSidebar` - Left panel with campaigns
  - `EditorToolbar` - Top center toolbar
  - `EditorContent` - Main chart display
  - `EditorRightPanel` - Right prospect details panel

### Content Sections
- `LogoCarousel` - Infinite scrolling partner logos
- `ComparisonSection` - Two-column comparison (Industry vs Handshake)
- `FeaturesGrid` - 2x2 grid of feature cards with SVG illustrations
- `BentoSection` - Bento layout with 3D mockup card
- `TestimonialsFan` - 6 testimonial cards in fan/grid layout
- `PricingTable` - Comparison table with spotlight effect
- `CTASection` - Final call-to-action

### Reusable Components
- `FeatureCard` - Feature card with spotlight and custom illustration
- `TestimonialCard` - Individual testimonial with avatar

## Custom Tailwind Classes

### 3D Transforms
```
rotate-x-{0,3,4,5,6,8,10,12,15,20,30,45,60,75}
rotate-y-{0,3,4,5,6,8,10,12,15,20,30,45,60,75}
-rotate-x-{value} / -rotate-y-{value}
```

### Perspective
```
perspective-none
perspective-dramatic (100px)
perspective-near (300px)
perspective-normal (500px)
perspective-midrange (800px)
perspective-distant (1200px)
perspective-1000
perspective-1600
perspective-2000
```

### Transform Style
```
transform-style-preserve-3d
preserve-3d
```

## Customization

### Colors
Edit `tailwind.config.ts` to customize the color palette.

### Fonts
Change fonts in `app/layout.tsx` - currently using:
- Plus Jakarta Sans (headings)
- Geist (body text)

### Animations
Modify animation timing in `app/globals.css` and `tailwind.config.ts`.

## Build for Production

```bash
npm run build
npm start
```

## Notes

- All images use remote URLs (Unsplash, Supabase CDN) - configure in `next.config.ts`
- UnicornStudio loads dynamically - no need to install
- Iconify icons load via CDN in layout
- Scroll animations initialize client-side in page.tsx

