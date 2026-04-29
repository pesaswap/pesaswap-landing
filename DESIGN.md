---
name: Pesaswap
description: Payment orchestration infrastructure for East Africa
colors:
  forest-teal: "#1B5E4B"
  forest-teal-deep: "#143D32"
  gold-accent: "#C9A84E"
  gold-accent-muted: "#D4B96A"
  warm-cream: "#F8F5ED"
  surface-white: "#FAFBFA"
  ink-dark: "#1A1F1E"
  body-gray: "#4A5754"
  border-light: "#E2DFD6"
  border-dark: "#2A7A62"
  success-green: "#2D8F6F"
  caution-amber: "#B8922E"
typography:
  display:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.75rem, 4vw, 3.5rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  title:
    fontFamily: "Bricolage Grotesque, sans-serif"
    fontSize: "clamp(1.25rem, 2vw, 1.75rem)"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Figtree, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Figtree, sans-serif"
    fontSize: "0.8125rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.02em"
rounded:
  sm: "6px"
  md: "10px"
  lg: "16px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "32px"
  xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.forest-teal}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-primary-hover:
    backgroundColor: "{colors.forest-teal-deep}"
    textColor: "{colors.surface-white}"
  button-secondary:
    backgroundColor: "{colors.warm-cream}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  button-accent:
    backgroundColor: "{colors.gold-accent}"
    textColor: "{colors.ink-dark}"
    rounded: "{rounded.md}"
    padding: "14px 32px"
  card-default:
    backgroundColor: "{colors.warm-cream}"
    textColor: "{colors.body-gray}"
    rounded: "{rounded.lg}"
    padding: "32px 40px"
  card-elevated:
    backgroundColor: "{colors.forest-teal}"
    textColor: "{colors.surface-white}"
    rounded: "{rounded.lg}"
    padding: "32px 40px"
---

# Design System: Pesaswap

## 1. Overview

**Creative North Star: "The Institutional Rail"**

Pesaswap's design language draws from the confidence of financial infrastructure that already exists and already works. This is not a startup pitching a vision; it is the layer that PSPs, banks, and remittance platforms already run on. The design must feel like interacting with permanent infrastructure, not evaluating a beta product.

The system rejects consumer fintech aesthetics (bright gradients, playful illustrations, emoji-driven copy), cheap startup templates (oversaturated colors, bubbly rounded UI, generic stock photos), and Silicon Valley dev-tool darkness. Instead it channels the quiet authority of institutional documentation: dense where density matters, spacious where the eye needs rest, and always rooted in proof rather than promise.

**Key Characteristics:**
- Dense information presented cleanly, not sparse information presented beautifully
- Proof-first: traction numbers, partner logos, and licensing badges lead before marketing copy
- Forest teal and gold as a committed palette: the color IS the identity
- Typography that commands, not decorates: tight display headings, generous body text
- Warm neutrals that prevent clinical coldness while maintaining institutional weight

## 2. Colors

A committed palette anchored in deep forest teal. The teal carries 30-40% of the surface area on brand pages; gold punctuates decisions and proof points. Warm cream grounds the reading experience.

### Primary
- **Forest Teal** (#1B5E4B / oklch(0.40 0.08 165)): The dominant brand surface. Used for hero backgrounds, navigation on scroll, section accents, and card highlights. This is Pesaswap's visual identity; its prominence is intentional.
- **Forest Teal Deep** (#143D32 / oklch(0.30 0.06 165)): Hover and pressed states on teal surfaces. Footer backgrounds. Creates depth without introducing a new hue.

### Secondary
- **Gold Accent** (#C9A84E / oklch(0.72 0.12 85)): Badges, proof-point highlights, CTAs that need warmth. Used sparingly on light backgrounds, generously on teal backgrounds where it becomes the primary signal. Connotes value, traction, and earned status.
- **Gold Accent Muted** (#D4B96A / oklch(0.76 0.10 85)): Hover states for gold elements. Softer applications where full gold would compete with content.

### Neutral
- **Warm Cream** (#F8F5ED / oklch(0.97 0.01 85)): Primary content background for cards, sections, and containers. Warm enough to prevent clinical sterility; neutral enough to not compete with content.
- **Surface White** (#FAFBFA / oklch(0.98 0.003 165)): Page-level background. Barely tinted toward the brand hue.
- **Ink Dark** (#1A1F1E / oklch(0.18 0.01 165)): Primary heading text on light backgrounds. Not pure black; gently tinted toward teal.
- **Body Gray** (#4A5754 / oklch(0.40 0.015 165)): Body text on light backgrounds. Contrast ratio > 7:1 against cream and white surfaces.
- **Border Light** (#E2DFD6 / oklch(0.90 0.01 85)): Subtle dividers and card borders on light backgrounds.
- **Border Dark** (#2A7A62 / oklch(0.48 0.08 165)): Borders and dividers on teal backgrounds.

### Named Rules
**The Committed Teal Rule.** Forest teal is not an accent; it is the brand. At least one major section per page uses teal as a background surface. If the page feels like it could belong to any fintech company with a color swap, the teal is underused.

**The No-Black, No-White Rule.** Neither `#000` nor `#fff` appears anywhere. Every neutral carries a trace of the brand hue (chroma 0.005-0.01). This is what separates institutional warmth from template coldness.

## 3. Typography

**Display Font:** Bricolage Grotesque (with system sans-serif fallback)
**Body Font:** Figtree (with system sans-serif fallback)

**Character:** Bricolage Grotesque brings a warm, slightly organic grotesque energy to headlines: authoritative without being corporate-sterile, distinctive without being decorative. Figtree provides clean, highly readable body text with enough warmth to pair naturally. Together they communicate "built by people who understand both Nairobi and London."

### Hierarchy
- **Display** (700, clamp(2.5rem, 6vw, 5rem), line-height 1.05, tracking -0.02em): Hero headlines only. One per page. The weight and negative tracking create density that commands attention.
- **Headline** (600, clamp(1.75rem, 4vw, 3.5rem), line-height 1.1, tracking -0.015em): Section headings (h2). Each section gets one.
- **Title** (600, clamp(1.25rem, 2vw, 1.75rem), line-height 1.25, tracking -0.01em): Card headings, feature titles (h3). Dense but readable.
- **Body** (400, 1.0625rem/17px, line-height 1.65): All paragraph text. Max line length 65ch. On dark backgrounds, bump line-height to 1.75.
- **Label** (500, 0.8125rem/13px, tracking 0.02em, uppercase when used as a tag): Badges, metadata, navigation links, small indicators.

### Named Rules
**The Solid Heading Rule.** Headings use a single solid color. Never gradient text, never opacity-reduced text. Ink Dark on light backgrounds; Surface White on teal backgrounds. Contrast ratio must exceed 7:1.

## 4. Elevation

This system is predominantly flat with tonal layering. Depth is conveyed through background color shifts (white to cream, cream to teal) rather than shadow accumulation. The institutional feel comes from surface confidence, not floating elements.

### Shadow Vocabulary
- **Ambient Low** (`0 2px 12px rgba(26, 31, 30, 0.06)`): Cards on hover. Barely perceptible lift that confirms interactivity without creating a floaty aesthetic.
- **Ambient Medium** (`0 4px 24px rgba(26, 31, 30, 0.10)`): Sticky navigation on scroll. Dropdown menus. Functional separation from the page.

### Named Rules
**The Flat-By-Default Rule.** Surfaces are flat at rest. Shadows appear only as a response to state (hover, sticky, open). If a surface has a shadow at rest, it should be a teal or gold surface earning visual separation through color, not elevation.

## 5. Components

### Buttons
- **Shape:** Gently curved (10px radius). Not pill-shaped, not sharp-cornered. Institutional but approachable.
- **Primary:** Forest Teal background, Surface White text, 14px 32px padding. The default action button. Text is Figtree 500 weight, 0.9375rem.
- **Hover / Focus:** Forest Teal Deep background. No scale transform on primary CTA buttons. Focus ring: 2px offset, gold accent color, 3px ring width.
- **Secondary:** Warm Cream background, Ink Dark text. For complementary actions alongside a primary button.
- **Accent:** Gold Accent background, Ink Dark text. Reserved for proof-point CTAs ("See live traction", "View network").

### Cards / Containers
- **Corner Style:** Generous curves (16px radius). Creates warmth without bubbly roundness.
- **Default Background:** Warm Cream. Body Gray text.
- **Elevated Variant:** Forest Teal background, Surface White text. Used for featured/highlighted content.
- **Shadow Strategy:** None at rest. Ambient Low on hover if the card is interactive.
- **Border:** None on cream cards (tonal separation from white page is sufficient). Border Dark (1px) on teal cards when adjacent to other teal surfaces.
- **Internal Padding:** 32px 40px desktop, 24px 28px mobile.

### Navigation
- **Desktop:** Transparent on load, Forest Teal Deep background on scroll. Links in Figtree 500 weight, label size. Active link indicated by gold underline offset 4px, not color change.
- **Mobile:** Full-height slide panel, Forest Teal background, white text. Gold accent CTA at bottom.
- **Hover:** Opacity shift to 0.8. No background highlight on nav links.

### Badges / Proof Points
- **Style:** Gold Accent background with Ink Dark text, or Forest Teal background with Surface White text. Label typography (uppercase, tracked). Rounded pill shape (999px radius).
- **Purpose:** Traction numbers ("USD 120Mn+ Processed"), status indicators ("Licensed"), partner names. These are proof, not decoration.

## 6. Do's and Don'ts

### Do:
- **Do** use Forest Teal as a major background surface, not just a button color. The committed palette requires commitment.
- **Do** lead sections with proof (numbers, partner logos, licensing status) before explanatory copy. "Earned, not claimed."
- **Do** use solid heading colors with full contrast ratios. Ink Dark (#1A1F1E) on light, Surface White (#FAFBFA) on dark.
- **Do** keep body text max-width at 65ch. Dense information needs breathing room at the line level.
- **Do** support `prefers-reduced-motion` by disabling entrance animations and scroll-driven effects.
- **Do** tint every neutral toward the brand hue. Warm cream (#F8F5ED), not cold gray (#F0F0F0).

### Don't:
- **Don't** use gradient text (`background-clip: text` with gradients). Prohibited. Use solid colors for all text.
- **Don't** use consumer fintech aesthetics: oversaturated gradients, playful illustrations, bubbly rounded UI, emoji-heavy messaging. Pesaswap is infrastructure, not a consumer app.
- **Don't** use cheap startup patterns: generic stock illustrations of "diverse teams high-fiving," placeholder logos, lorem ipsum. Every element must be real or absent.
- **Don't** use DM Sans, Inter, Plus Jakarta Sans, or any font on the reflex-reject list. These are AI-template defaults.
- **Don't** use `#000` or `#fff`. Both are banned. Use Ink Dark and Surface White.
- **Don't** create identical card grids (same-size cards with icon + heading + text repeated). Vary card sizes, layouts, and content density across sections.
- **Don't** use dark mode purely for developer-tool aesthetics. The teal sections provide the dark surface; the rest stays light and warm.
- **Don't** use side-stripe borders (border-left/right > 1px as accent). Use full borders, background tints, or nothing.
- **Don't** use bounce or elastic easing. Ease out with exponential curves (quart/quint/expo).
- **Don't** use em dashes in copy. Use commas, colons, semicolons, periods, or parentheses.
