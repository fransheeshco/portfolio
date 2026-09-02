---
name: Francis Cejas Portfolio
description: A high-contrast, Figma-derived developer portfolio centered on work, proof, and direct contact.
colors:
  yellow: "#FFCC00"
  ink: "#25282B"
  paper: "#F9FAFF"
  ink-soft: "#9A9FA8"
  white: "#FFFFFF"
  border: "#9A9FA8"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.9rem, 5.5vw, 4.8rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.2rem, 4.6vw, 4.4rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.04em"
  body:
    fontFamily: "Manrope, sans-serif"
    fontWeight: 500
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.9rem"
    fontWeight: 500
rounded:
  pill: "999px"
  card: "1rem"
  stage: "2rem"
spacing:
  compact: "0.7rem"
  control: "1.15rem"
  section: "clamp(3.5rem, 7vw, 7rem)"
components:
  nav-active:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.15rem"
    height: "3.35rem"
  hero-primary-action:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    height: "4.2rem"
  accent-action:
    backgroundColor: "{colors.yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "0 1.2rem"
    height: "2.9rem"
---

# Design System: Francis Cejas Portfolio

## Overview

**Creative North Star: "The Proof-First Portfolio"**

This is an Experience-mode portfolio that makes the person, their work, and verifiable signals immediately legible. The Figma-derived system uses a deliberate contrast sequence: a white editorial hero, a dark liquid-glass navigation pill, a dark services stage, clean white work and timeline sections, a muted-paper evidence panel, a second dark credentials stage, and a dark contact footer. Yellow is the decisive signal that connects navigation, action, and identity.

The composition is graphic but not ornamental. Large Manrope headlines, cutout portrait photography, project imagery, circles, capsules, and measured card grids give the work a clear visual hierarchy. The interface stays intentionally sparse: every yellow element either directs attention, denotes an active state, or marks a direct action.

**Key Characteristics:**

- High-contrast ink, white, and yellow Figma-style editorial composition.
- Image-led storytelling paired with metrics and credentials.
- Softly rounded cards and deep stage containers, balanced by a signature pill navigation and capsule actions.
- A responsive shift from composed desktop canvases to stacked, readable mobile sections.

## Colors

The palette uses one saturated signal color against a disciplined set of ink and paper neutrals.

### Primary

- **Signal Yellow** (`#FFCC00`): The single action and emphasis color. Use for the active Home item, selected hero word, circular portrait grounds, arrows, key icons, ribbon surface, primary actions, and focus/selection feedback.

### Neutral

- **Portfolio Ink** (`#25282B`): Structural dark: body background, navigation pill, dark stages, main text, action-capsule tint, and primary button text.
- **Soft Paper** (`#F9FAFF`): Quiet supporting background for the Why Hire panel, project tags, and image placeholders.
- **Proof Gray** (`#9A9FA8`): Secondary text, vertical timeline line, field borders, and subdued interface copy.
- **Clean White** (`#FFFFFF`): Hero and standard section background, cards, light text, and the contrast surface for dark stages.

**The Single-Signal Rule.** Yellow is reserved for active state, emphasis, evidence, and action. It must not become an all-purpose card or page background outside its defined signature surfaces.

## Typography

**Display Font:** Manrope, sans-serif

**Body Font:** Manrope, sans-serif

**Character:** Manrope gives the portfolio a geometric, contemporary, and direct voice. Tight headline tracking and high weights make large titles feel authored; the same family keeps proof labels, navigation, and form controls calm and cohesive.

### Hierarchy

- **Display** (600, `clamp(2.9rem, 5.5vw, 4.8rem)`, `1.02`): The centered, two-line hero title. It uses `-.04em` tracking and colors the personal name plain Signal Yellow.
- **Headline** (700, `clamp(2.2rem, 4.6vw, 4.4rem)`, `1.02`): Section and stage titles, maximum `15ch`, balanced wrapping, and optional yellow emphasis spans.
- **Card title** (700–800, `1.2–1.45rem`): Services, credentials, timeline roles, and projects.
- **Body** (500–600, `.75–.95rem`, `1.5–1.75`): Supporting explanations and fact descriptions. Secondary content uses Proof Gray on light surfaces or translucent white on ink stages.
- **Label / navigation** (500–800, `.7–.9rem`): Compact route labels, project tags, certificate issuers, and field labels. Brand labels use uppercase with `.05em` tracking.

**The Emphasis Rule.** Use a yellow inline span to identify the meaningful word or phrase in a major heading; do not color an entire large heading yellow.

## Layout

The page is a continuous, anchored portfolio: About, Services, Experience, Why Hire, Projects, Certificates, and Contact. Navigation is absolute over the hero rather than fixed to the viewport, while `html` keeps a 6rem smooth-scroll offset for anchored content.

Desktop uses two primary content widths: `min(96rem, 100%)` for the hero, service stage, credentials stage, and footer; `max-w-7xl` for the timeline, Why Hire panel, and projects. Standard white sections use generous `py-20` to `py-28` rhythm; dark stages use `clamp(3.5rem, 7vw, 7rem)` internal padding.

The hero occupies exactly `100svh` with a 42rem minimum. Its title, yellow circle, portrait, and action capsule are layered on a centered absolute canvas—not reflowed as a conventional grid. The title remains behind the centered portrait; a smaller yellow circle rises from beneath the cutout, and the action capsule is centered at the bottom. The hero title uses short viewport overrides—`clamp(2.8rem, 4.8vw, 4.3rem)` on short desktops and `clamp(2.25rem, 10vw, 3.45rem)` below 768px. The circle is 42rem with a `-13rem` bottom offset on standard desktop, 34rem / `-10rem` on short desktops, 36rem / `-11rem` below 1024px, and 25rem / `-7rem` below 768px. The portrait follows lower negative offsets: `-2.5rem` at standard desktop, then `-2rem` at every breakpoint override.

At widths below 1024px, the full navigation collapses to the brand and a menu control; the hero circle and portrait scale down, services become horizontal image/copy cards, credentials stack as image-over-copy cards, and the contact footer form moves below the profile/navigation columns. At widths below 768px, the hero preserves its 42rem minimum composition while services become fully stacked cards, the timeline becomes a left-rail list, Why Hire stacks, projects become one column, and the footer becomes a single vertical flow. At 480px and below, the wordmark and multi-column form/fact arrangements simplify further.

## Elevation & Depth

Depth is structural and restrained. The page relies primarily on dark/light stage contrast, yellow circular grounds, and image layering; shadows appear only to lift floating or image-led elements from their immediate surface.

### Shadow Vocabulary

- **Navigation liquid glass** (`0 18px 44px rgba(37,40,43,.2), inset 0 1px 0 rgba(255,255,255,.28), inset 0 -1px 0 rgba(255,255,255,.08)`): Gives the absolute dark pill ambient lift plus top and bottom internal highlights.
- **Hero portrait** (`drop-shadow(0 25px 25px rgba(37,40,43,.18))`): Grounds the transparent cutout against the yellow circle.
- **Hero action capsule** (`0 14px 34px rgba(37,40,43,.24)`): Supports the floating control above the portrait.
- **Image/card lift** (`0 16px 34px rgba(37,40,43,.12)`): Used for project imagery; service cards use movement rather than a default heavy shadow.
- **Timeline marker** (`0 4px 12px rgba(37,40,43,.22)`): Makes the yellow point distinct from the dotted gray track.

**The Stage-First Rule.** Use a dark stage, white stage, or yellow circular ground to establish hierarchy before adding shadow. Shadows are for floating controls, photography, and markers—not a default substitute for structure.

## Shapes

The system mixes three controlled shapes: full pills for navigation and direct actions, 1rem cards for content modules, and 2rem dark stage containers for major content worlds. The recurring circle is a signature portrait/action device: brand marks, icon actions, timeline markers, service/project arrows, and the hero/Why Hire discs all echo it. The hero name stays unboxed as plain colored text inside the headline.

Borders are quiet but intentional: muted ink-gray around light fields, translucent white around dark-stage cards, a strong semi-opaque white edge around the hero action capsule, and white liquid-glass edges/highlights in the desktop nav and mobile menu. Project tags and actions use capsules; imagery is clipped inside 1rem rounded rectangles unless it is a transparent portrait cutout.

## Components

### Navigation

**A large dark liquid-glass route capsule centered over the hero.** The absolute `.site-header` holds a 5.5rem minimum-height, `999px` pill with 74% opaque ink, a 52%-opaque white edge, `blur(22px) saturate(145%)`, and inset top/bottom white highlights. Desktop uses a three-column grid: Home, Experience, Service on the left; the yellow glass `FC` roundel and `FRANCIS` wordmark in the center; Certificates, Project, Contact on the right.

- **Active / default:** Home is the only default active route, a minimum-8.8rem yellow pill with bold ink text. Other links are semibold white at 82% opacity.
- **Hover / focus:** Links lift 1px and receive a subtle translucent-white background on hover; global focus is a 2px yellow outline offset by 4px.
- **Mobile:** Link groups are replaced below 1024px by a round outlined menu control. Its menu exposes all routes in an ink panel; Escape closes it, `aria-expanded` and `aria-controls` communicate state, and choosing a route closes it.

### Hero

**A full-viewport personal introduction built as a reduced layered editorial canvas.** The centered title reads “I’m Francis, / Full-Stack Developer.” `Francis` is plain Signal Yellow text, not a glass surface. The title uses `clamp(2.9rem, 5.5vw, 4.8rem)` on standard desktop, with compact short-desktop and mobile overrides. It stays behind the transparent, accessible [`assets/francis-cejas-cutout-updated.png`](./assets/francis-cejas-cutout-updated.png) portrait (`z-index: 3`), a supplied 408 × 612 transparent asset rendered `object-contain object-bottom` above the smaller yellow circular ground. The circle and portrait use their documented negative bottom offsets to seat the figure lower in the viewport.

- **Removed elements:** The `Hello!` capsule, decorative strokes, left quotation/working-philosophy block, and right star/internship proof block are not part of the shipped hero.
- **Action capsule:** A blurred translucent-ink pill at the bottom contains two equal actions: yellow `Portfolio` with an arrow, and white `Hire me`.
- **Responsive:** The portrait, smaller circle, title, and capsule scale down together while retaining the centered layer order; the circle and portrait move lower through their negative bottom offsets.

### Service cards

**Image-led skill proof inside a dark rounded stage.** Three services live in `.services-stage`: Web development, Backend & systems, and AI & data. At desktop they form a three-column grid; each card has dark explanatory copy above a real project interface preview.

- **Shape / surface:** 1rem rounded container with a 1px translucent-white rim; dark `rgba(37,40,43,.82)` copy surface and a 16:10 preview.
- **Interaction:** The card lifts 7px on hover. A circular ink arrow at its lower-right rotates/scales and becomes yellow on hover.
- **Responsive:** Between 768px and 1023px, each service becomes a side-by-side image/copy row; below 768px it stacks vertically.

### Experience timeline

**A factual split timeline rather than a card stack.** Organizations and dates are right-aligned on the left; roles and concise scope live on the right; a dotted Proof Gray track with yellow circular markers runs between them.

- **Mobile:** Rows collapse to a left-rail timeline, with organization/date followed by role/scope in one reading column.

### Why Hire panel

**A quiet proof panel that turns experience into a direct invitation.** A muted-paper, 2rem rounded split panel pairs the same supplied 408 × 612 transparent [`assets/francis-cejas-cutout-updated.png`](./assets/francis-cejas-cutout-updated.png) portrait over a yellow disc with a right-side case for hiring Francis.

- **Evidence:** The live metrics are 3 Featured projects, 2 Engineering internships, and 2 AI certificates.
- **Actions:** An outlined pill starts a conversation; an underlined text link opens the resume in a new tab.
- **Responsive:** The portrait and copy stack below 768px; metrics become two columns, then one below 480px.

### Project cards

**Image-led, full-card GitHub links.** The showcase starts with a yellow `See all` pill and presents two featured cards in a two-column grid; the final card is centered at half-width. Each project card is one accessible, new-tab GitHub link: a 16:10 screenshot sits below a dark bottom rail at rest, containing the title and a yellow circular outbound arrow.

- **Hover / keyboard focus:** The dark overlay slides from `translateY(calc(100% - 5.5rem))` to fill the complete image. It reveals the project description and technology chips, while the screenshot scales to `1.045` and desaturates to `.72`; the yellow arrow rotates 8 degrees. `:focus-visible` triggers exactly the same reveal as hover.
- **Touch treatment:** Under `@media (hover: none)`, the full overlay is always revealed, the screenshot is already desaturated, and the image becomes a minimum 22rem tall rather than relying on hover to expose essential project information.
- **Responsive:** The project grid becomes one column below 768px; the final project returns to full width.

### Credentials

**A dark evidence stage for certifications.** Credentials use a two-column grid on the dark stage. Each card combines a real certificate image (or yellow verified-learning fallback) with issuer, title, optional date, and a yellow circular outbound arrow.

- **Responsive:** Cards stack image over copy below 1024px, become compact image/copy rows again below 768px, and stack fully below 480px.

### Contact and footer

**A white invitation that resolves into a dark working footer.** The contact CTA centers an oversized question, muted supporting text, and a shadowed email pill. A slightly rotated yellow skills ribbon divides it from the ink footer.

- **Footer:** A 2rem-rounded ink container holds the hire action, personal profile/social links, anchor navigation, and the functional contact form.
- **Fields:** 3rem-high translucent-white inputs with white text, rounded-xl corners, and yellow focus borders; textarea spans both columns on larger layouts.
- **Submit:** A rounded `.75rem` yellow button with ink text. Its disabled state is visibly reduced in opacity while the request is in flight.

## Do's and Don'ts

### Do:

- **Do** use Manrope throughout the active UI and retain tight, balanced large-heading typesetting.
- **Do** preserve `#FFCC00`, `#25282B`, `#F9FAFF`, `#9A9FA8`, and `#FFFFFF` as the only core palette.
- **Do** use yellow to show active navigation, direct action, and circular portrait grounds.
- **Do** retain the hero's `100svh` central cutout-portrait composition, with plain yellow Francis text behind the portrait and a responsive smaller yellow circle beneath it.
- **Do** use the exact translucent-white edge, inset highlights, blur, and saturation treatment for the dark liquid-glass navigation and mobile menu.
- **Do** make the services, credentials, and footer their own dark rounded stages, with real project/certificate imagery doing visual work.
- **Do** make each project card a complete GitHub link and preserve its at-rest dark title rail, hover/focus full overlay, and always-revealed touch treatment.
- **Do** preserve factual signals: the 3 / 2 / 2 Why Hire metrics.
- **Do** maintain smooth scrolling, keyboard focus visibility, semantic image alt text, menu state attributes, and reduced-motion behavior.

### Don't:

- **Don't** replace the dark pill nav with a generic top bar, tabs, or a fixed header; its absolute placement is part of the hero composition.
- **Don't** use yellow as a generic surface color across cards or sections; preserve it as the system's limited signal color.
- **Don't** put the transparent portrait into a boxed or rounded image frame; it must remain a cutout over the yellow circular ground.
- **Don't** hide project description or technology chips behind hover-only behavior on touch devices.
- **Don't** reintroduce glass, a border, a gradient, or a shadow behind the hero name; Francis is plain yellow headline text.
- **Don't** reduce the experience area to undifferentiated cards; preserve the split timeline and its dotted central rail at desktop.
- **Don't** add unverified testimonials, ratings, or experience claims; proof content must stay factual and sourced from the portfolio.
