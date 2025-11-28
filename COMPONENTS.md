# Component Tree

## Page Structure

```
app/page.tsx (Main Page)
├── BackgroundEffect (UnicornStudio animated background)
├── Navbar (Fixed navigation)
├── Hero (Hero section with CTAs)
├── EditorMockup (3D editor interface mockup)
│   ├── EditorSidebar (Left panel - campaigns & inbox)
│   ├── EditorToolbar (Top center - tool buttons)
│   ├── EditorContent (Center - chart/stats)
│   └── EditorRightPanel (Right panel - prospect details)
├── LogoCarousel (Infinite scrolling logos)
├── ComparisonSection (Industry vs Handshake)
├── FeaturesGrid (Feature cards grid)
│   └── FeatureCard × 4 (Individual features with spotlight)
├── BentoSection (Bento layout with 3D mockup)
├── TestimonialsFan (Fan layout testimonials)
│   └── TestimonialCard × 6 (Individual testimonials)
├── PricingTable (Pricing comparison)
├── CTASection (Final call-to-action)
└── Footer (Site footer)
```

## Component Details

### BackgroundEffect
- **Purpose**: UnicornStudio animated background integration
- **Features**: Dynamic script loading, gradient masks
- **Animation**: Particle/wave effects from UnicornStudio

### Navbar
- **Purpose**: Fixed top navigation
- **Features**: Glass effect, responsive menu, hover states
- **Animation**: fadeSlideIn on load
- **Icons**: Star logo, arrow-right-up

### Hero
- **Purpose**: Main hero section
- **Features**: Badge, H1, description, dual CTAs
- **Animation**: fadeSlideIn with stagger
- **CTA Buttons**: Primary gradient, secondary outline

### EditorMockup
- **Purpose**: Showcase UI with 3D perspective
- **Features**: 4 sub-components, 3D transforms
- **Animation**: 3D rotation on hover (rotate-x-4 rotate-y-12)
- **Child Components**:
  - **EditorSidebar**: Campaign list, inbox items, search
  - **EditorToolbar**: Center toolbar with icons
  - **EditorContent**: Chart with sender rotation stats
  - **EditorRightPanel**: Prospect details, location, rotation values

### LogoCarousel
- **Purpose**: Social proof - partner logos
- **Features**: Infinite scroll, dual loops, grayscale hover
- **Animation**: animate-infinite-scroll (40s loop)

### ComparisonSection
- **Purpose**: Compare traditional tools vs Handshake
- **Features**: Two-column grid, checkmarks vs X icons
- **Animation**: fadeSlideIn with stagger, background grid

### FeaturesGrid
- **Purpose**: Main feature showcase
- **Features**: 2x2 grid, spotlight effects, SVG illustrations
- **Animation**: 3D container rotation, spotlight on hover
- **Cards**:
  1. Multi-Account Orchestration (cube illustration)
  2. Bypass LinkedIn Limits (bucket/funnel illustration)
  3. Unified Inbox (inbox UI illustration)
  4. Unlimited Workspaces (menu/dropdown illustration)

### FeatureCard (Reusable)
- **Props**: badge, title, description, features[], bullets[], illustration
- **Features**: Mouse-tracking spotlight, dynamic content
- **Animation**: Radial gradient follows mouse
- **Effects**: Background glow + border glow

### BentoSection
- **Purpose**: Additional features + 3D mockup
- **Features**: Two-column, checklist, 3D card mockup
- **Animation**: 3D card transform, floating badge
- **Mockup**: Traffic lights, breadcrumbs, sidebar, task list

### TestimonialsFan
- **Purpose**: Social proof testimonials
- **Features**: 6 cards in fan layout → grid on hover
- **Animation**: CSS transform fan layout with complex transitions
- **Layout States**:
  - Default: Fan arrangement with rotation/scale
  - Hover: 2×3 grid perfectly aligned

### TestimonialCard (Reusable)
- **Props**: quote, author, role, imageUrl, className
- **Features**: Spotlight effect, avatar, quote
- **Animation**: Mouse-tracking spotlight

### PricingTable
- **Purpose**: Pricing comparison table
- **Features**: 4-column grid, spotlight effect, responsive scroll
- **Animation**: Spotlight tracks mouse over entire table
- **Plans**: Solo ($49), Team ($129, highlighted), Agency ($249)

### CTASection
- **Purpose**: Final conversion section
- **Features**: Dual CTAs, centered layout
- **Animation**: fadeSlideIn

### Footer
- **Purpose**: Site footer
- **Features**: Logo, 4-column links, social icons, copyright
- **Icons**: Twitter, GitHub, Discord

## Hooks

### useSpotlight()
- **Returns**: `{ handleMouseMove }`
- **Usage**: Apply to card onMouseMove
- **Effect**: Updates CSS variables --mouse-x and --mouse-y

### useInView()
- **Options**: threshold, rootMargin, once
- **Returns**: `{ ref, isInView }`
- **Usage**: Attach ref to element, isInView for conditional rendering

## Utilities

### cn(...inputs)
- **Purpose**: Merge className strings with conflict resolution
- **Usage**: `cn('base-class', condition && 'conditional-class')`
- **Libraries**: clsx + tailwind-merge

## Styling System

### Color Palette
- **Primary**: Blue (400-950)
- **Secondary**: Purple, Emerald
- **Neutrals**: Gray scale (zinc)
- **Backgrounds**: Black, near-black (#0A0A0A, #121214)

### Typography
- **Headings**: font-jakarta
- **Body**: font-geist
- **Mono**: font-mono (default)

### Spacing Scale
- Follows Tailwind defaults
- Custom: h-[720px] (editor), h-[42rem] (testimonials)

### Border Radius
- Cards: rounded-2xl, rounded-3xl, rounded-[32px]
- Buttons: rounded-full
- Inputs: rounded-lg

## Animation Triggers

### On Load
- Navbar, Hero badge, Hero title (staggered fadeSlideIn)

### On Scroll
- All major sections have `animate-on-scroll` class
- IntersectionObserver triggers when 20% visible
- Animations run once (not on scroll-out)

### On Hover
- 3D transforms (EditorMockup, BentoSection mockup)
- Spotlight effects (FeatureCard, TestimonialCard, PricingTable)
- Button scales and shadows
- Logo carousel pause

### On Interaction
- Nav links underline
- Button press states
- Card hover elevations

