# Responsive Design Guide

The entire Handshake landing page is now fully responsive across all devices while maintaining the desktop design.

## Breakpoints

Following Tailwind CSS defaults:
- **Mobile**: < 640px (default styles)
- **sm**: ≥ 640px (small tablets)
- **md**: ≥ 768px (tablets)
- **lg**: ≥ 1024px (laptops)
- **xl**: ≥ 1280px (desktops)

## Component Responsive Behavior

### 🧭 Navbar
**Mobile** (< 1024px):
- Logo: Smaller icon (20px → 24px)
- Text: "Trial" instead of "Start Free Trial"
- Button padding: Reduced to `px-4 py-2.5`
- Navigation links: Hidden
- Width: Full width minus 2rem padding

**Desktop** (≥ 1024px):
- Full navigation links visible
- Full button text
- Max width 6xl

### 🎯 Hero
**Mobile**:
- Title: `text-3xl` (30px)
- Top padding: `pt-24` (96px)
- Bottom padding: `pb-8` (32px)
- Extra horizontal padding on text

**Tablet** (sm):
- Title: `text-4xl` (36px)
- Padding increases

**Desktop** (lg):
- Title: `text-7xl` (72px)
- Full spacing restored

### 💻 EditorMockup
**Mobile**:
- Height: `h-[500px]`
- Border radius: `rounded-2xl`
- 3D transforms: Disabled
- Padding: Added horizontal padding

**Tablet** (sm):
- Height: `h-[600px]`

**Desktop** (md):
- Height: `h-[720px]`
- Border radius: `rounded-3xl`
- 3D transforms: Enabled (`rotate-x-4 rotate-y-12`)

### 🏢 LogoCarousel
**Mobile**:
- Section margin: `mt-12 mb-12`
- Text size: `text-xs`

**Tablet** (sm):
- Section margin: `mt-16 mb-16`
- Text size: `text-sm`

**Desktop** (md):
- Section margin: `mt-24 mb-24`
- Full spacing

### ⚖️ ComparisonSection
**Mobile**:
- Section padding: `py-12`
- Title: `text-2xl`
- Card padding: `p-6`
- Border radius: `rounded-2xl`
- List spacing: `space-y-3`

**Tablet** (sm):
- Section padding: `py-16`
- Title: `text-3xl`
- Card padding: `p-8`

**Desktop** (md+):
- Section padding: `py-24`
- Title: `text-5xl`
- Card padding: `p-10`
- Grid: 2 columns

### 🎴 FeaturesGrid
**Mobile**:
- Section padding: `py-12`
- Title: `text-2xl`
- Grid: 1 column
- Gap: `gap-6`
- Header margins: Reduced

**Tablet** (sm):
- Section padding: `py-20`
- Title: `text-3xl`

**Desktop** (md+):
- Section padding: `py-32`
- Title: `text-5xl`
- Grid: 2 columns
- Gap: `gap-8`

### 🎨 FeatureCard
**Mobile**:
- Padding: `p-6`
- Border radius: `rounded-2xl`
- Title: `text-xl`
- Description: `text-sm`
- Min height: `min-h-[360px]`
- 3D effects: Disabled

**Tablet** (sm):
- Padding: `p-8`
- Title: `text-2xl`
- Description: `text-base`
- Border radius: `rounded-3xl`

**Desktop** (md+):
- Padding: `p-10 lg:p-12`
- Title: `text-3xl`
- Min height: `min-h-[420px]`
- 3D effects: Enabled

### 📦 BentoSection
**Mobile**:
- Section padding: `pt-12 pb-12`
- Title: `text-2xl`
- Grid: 1 column (stacked)
- Mockup: Full width, no 3D

**Desktop** (lg):
- Section padding: `pt-24 pb-24`
- Title: `text-5xl`
- Grid: 2 columns
- 3D mockup with floating badges

### 💬 TestimonialsFan
**Mobile** (< 1024px):
- Cards stack vertically
- Full width cards
- No fan effect
- Normal flow (no absolute positioning)
- Padding: `p-4`

**Desktop** (≥ 1024px):
- Fan layout with 6 cards
- Absolute positioning
- Transforms to grid on hover
- Height: `h-[42rem]`

### 💳 PricingTable
**Mobile** (< 1024px):
- Vertical stacked cards
- Each plan in its own card
- Key-value feature pairs
- Full-width buttons

**Desktop** (≥ 1024px):
- 5-column comparison table
- Side-by-side comparison
- Horizontal scroll if needed

**Premium Cards**:
- Mobile: Stack vertically
- Tablet (md): 2 columns side-by-side

### 🚀 CTASection
**Mobile**:
- Padding: `pt-12 pb-12`
- Title: `text-3xl`
- Description: `text-base`

**Desktop** (md):
- Padding: `pt-24 pb-24`
- Title: `text-5xl`
- Description: `text-lg`

### 🔗 Footer
**Mobile**:
- Padding: `py-8`
- Grid: 2 columns
- Font size: `text-xs`
- Tighter spacing

**Tablet** (md):
- Grid: 4 columns

**Desktop** (lg):
- Grid: 5 columns
- Full padding: `py-12`
- Font size: `text-sm`

## Responsive Patterns Used

### Typography Scale
```
Mobile → Tablet → Desktop
text-xs → text-sm → text-base
text-2xl → text-3xl → text-5xl
text-3xl → text-4xl → text-7xl
```

### Spacing Scale
```
Mobile → Tablet → Desktop
py-8 → py-12 → py-24
gap-4 → gap-6 → gap-8
mb-4 → mb-6 → mb-12
```

### Padding Scale
```
Mobile → Tablet → Desktop
p-4 → p-6 → p-8 → p-10 → p-12
```

### Border Radius
```
Mobile → Desktop
rounded-xl → rounded-2xl → rounded-3xl
```

## 3D Effects & Animations

### Mobile Strategy
- 3D transforms disabled on mobile for performance
- Perspective effects removed
- Hover states simplified
- Spotlight effects remain (lightweight)

### Desktop Strategy
- Full 3D transforms enabled
- Complex hover animations
- Fan layouts and grid transitions
- Heavy spotlight effects

## Testing Recommendations

Test on these viewport widths:
- 375px (iPhone SE)
- 390px (iPhone 12/13/14)
- 414px (iPhone Plus)
- 768px (iPad)
- 1024px (iPad Pro / Small laptop)
- 1440px (Desktop)
- 1920px (Large desktop)

## Performance Notes

- Mobile: Reduced animation complexity
- Desktop: Full animation suite
- Images: Next.js optimized
- Fonts: Preloaded with next/font
- 3D transforms: Only on md+ breakpoints

