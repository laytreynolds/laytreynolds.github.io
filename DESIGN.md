---
name: Layton Reynolds
description: Swiss data poster for a backend engineer. The production record is the typography.
colors:
  graphite: "#121311"
  graphite-raised: "#191A17"
  rule: "#2E2F2A"
  ink-faint: "#6E6D67"
  ink: "#ECEAE3"
  ink-muted: "#A3A29B"
  go-cyan: "#00ADD8"
  go-cyan-deep: "#0092B8"
  on-cyan: "#061A20"
typography:
  numeral:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(4.5rem, 38cqi, 16rem)"
    fontWeight: 900
    lineHeight: 0.8
    letterSpacing: "-0.04em"
    fontVariation: "'wdth' 68"
  display:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(3.25rem, 7.2vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.9
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 78"
  headline:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2rem, 3.6vw, 3rem)"
    fontWeight: 800
    lineHeight: 0.95
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 80"
  title:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  body:
    fontFamily: "Archivo, 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.55
  label:
    fontFamily: "'Fragment Mono', ui-monospace, 'SFMono-Regular', Menlo, monospace"
    fontSize: "0.8125rem"
    fontWeight: 400
    lineHeight: 1.4
rounded:
  none: "0"
spacing:
  2xs: "4px"
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "72px"
  4xl: "120px"
components:
  button-primary:
    backgroundColor: "{colors.go-cyan}"
    textColor: "{colors.on-cyan}"
    rounded: "{rounded.none}"
    padding: "14px 24px"
    height: "52px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.graphite}"
  button-quiet:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "8px 14px"
    height: "44px"
  proof-frame:
    backgroundColor: "{colors.graphite}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 24px"
  proof-frame-lead:
    backgroundColor: "{colors.go-cyan}"
    textColor: "{colors.on-cyan}"
    rounded: "{rounded.none}"
    padding: "24px 28px"
---

# Design System: Layton Reynolds

## Overview

**Creative North Star: "The Swiss Data Poster"**

The site is a technical poster in the International Typographic Style, set on dark graphite: a strict twelve-column grid, flush-left grotesque type, hairline rules, and one committed colour. The subject is a production record, so the record itself is the typography. Throughput, latency, servers migrated and incident time are set as numerals and drawn as honest data graphics (isotype grids, scale rulers, before-and-after bars) rather than described in adjectives.

Density is poster-like: a few very large statements, then quiet, tightly ruled tables of supporting fact. Colour is spent in fields, not sprinkled: Go cyan owns the lead proof frame at the top and the contact band at the end, and almost nowhere in between.

Rejected: the dark dev-portfolio template (pill badge, pulsing dot, animated counters, eyebrow over every section, icon-tile project cards, emoji skill grids), playful or quirky devices, plain corporate-CV styling, and light mode.

**Key Characteristics:**
- Twelve-column grid with side-hung section headings
- Real figures set as display numerals and drawn to true scale
- One colour, Go cyan, used as solid fields
- Square corners everywhere; hairline rules separate rather than boxes contain
- Monospace only for data: dates, units, routes, addresses

## Colors

A graphite-and-bone ground with a single saturated cyan that appears as whole fields.

### Primary
- **Go Cyan** (#00ADD8): the lead proof frame (throughput), the closing contact band, the primary button, the "after" bar in comparisons and the latency budget mark. Never used for glows, gradients or scattered accents.
- **Deep Go Cyan** (#0092B8): pressed state of cyan controls only.

### Neutral
- **Graphite** (#121311): page ground.
- **Raised Graphite** (#191A17): the rare inset surface (code and route tables).
- **Rule** (#2E2F2A): one-pixel grid rules and frame gutters. Decorative only; never carries text.
- **Faint Ink** (#6E6D67): borders of quiet buttons, so their edge reads at 3.5:1 against graphite. Never text.
- **Bone Ink** (#ECEAE3): all primary text and the isotype squares.
- **Muted Ink** (#A3A29B): secondary text, "before" bars, and the isotype squares on phones (where full Bone Ink would outshine the cyan field); 7:1 on graphite.
- **On-Cyan Ink** (#061A20): every piece of text on a cyan field, at every size.

### Named Rules
**The Field Rule.** Cyan is a field or a measured mark, never a tint, glow or gradient. If a cyan element is smaller than a button and is not encoding data, it should be ink. The single exception is the square full stop in the LR mark, which is the identity.

**The One Ink on Cyan Rule.** Text on cyan is always On-Cyan Ink at full strength. Hierarchy on a cyan field comes from size and weight, never from opacity or grey.

## Typography

**Display and body font:** Archivo (variable width and weight), falling back to Helvetica Neue and Arial
**Label and data font:** Fragment Mono, falling back to system monospace

**Character:** Archivo's width axis does the poster work. Condensed heavy cuts give the numerals and the name their weight without enormous sizes, and normal width keeps body copy comfortable. Fragment Mono is a Helvetica-derived monospace, so data labels sit inside the same Swiss family instead of reading as "hacker" costume.

### Hierarchy
- **Numeral** (900, wdth 68, clamp(4.5rem, 38cqi, 16rem), line-height 0.8): only the lead proof figure, sized to its field with container units so it fills the cyan frame. A poster device; it is the one exception to the 6rem display cap.
- **Display** (800, wdth 78, clamp(3.25rem, 7.2vw, 6rem), 0.9): the name in the hero.
- **Headline** (800, wdth 80, clamp(2rem, 3.6vw, 3rem), 0.95): side-hung section headings and secondary proof figures.
- **Title** (700, 1.375rem, 1.15): role names. Featured project names step up to 800, wdth 85, clamp(1.5rem, 2.4vw, 2rem).
- **Body** (400, 1.0625rem, 1.55): prose and bullets, measure capped at 68ch.
- **Label** (Fragment Mono 400, 0.8125rem): dates, units, chart axes, routes, stack lists. Sentence case, no tracking, never uppercase.

### Named Rules
**The Data-Only Mono Rule.** Monospace marks measurement, time, code, addresses and stack lists. A heading, button, caption or sentence is never set in mono.

**The Figure Weight Rule.** Inside running text, the figure is the emphasis: wrap numbers in `b.fig` (Archivo 700, tabular numerals). Do not bold whole phrases.

## Layout

A centred container (max 1320px) with fluid side gutters (clamp(16px, 4vw, 56px)) holds a twelve-column grid with 24px gutters. From 960px up, the hero splits (identity in columns 1–5, proof in 6–12) and section headings hang in columns 1–3, sticky, while content runs in columns 4–12 on a CSS subgrid of the master grid: dates and row labels in columns 4–5, content from the column-6 line, which is also the proof array's left edge. Body measure is capped at 68ch. Below 960px everything stacks into one column, headings sit above content, and the proof array reflows to two columns, then one.

Sections are separated by a full-width one-pixel rule and generous vertical space (clamp(72px, 10vw, 120px)). There is always more space above a heading than below it. The hero proof array is a ruled grid of unequal frames with 1px gutters showing the rule colour, like a printed table, ranked by size: the lead frame spans the full array width.

## Elevation & Depth

Completely flat. No shadows, no blur, no glass. Depth comes from field colour (cyan against graphite) and from the rule grid. The only raised surface is Raised Graphite for route tables.

### Named Rules
**The Printed Sheet Rule.** If it could not be printed with two inks on one sheet, it does not belong. No shadow, glow, gradient or blur.

## Shapes

Square corners throughout (radius 0). Rules are 1px. Data marks are rectangles: isotype squares, bars and ruler ticks. The only non-rectilinear glyphs are type.

## Components

### Buttons
- **Shape:** square corners (0).
- **Primary:** Go Cyan field, On-Cyan Ink label, Archivo 700 1.0625rem, padding 14px 24px, minimum height 52px, with a trailing arrow glyph.
- **Hover / Focus:** hover inverts to Bone Ink field with Graphite label (120ms). Focus-visible shows a 2px Go Cyan outline offset 3px (On-Cyan Ink outline on cyan fields).
- **Quiet:** for utility actions such as Copy. Transparent with a 1px Faint Ink border and Bone Ink label, minimum height 44px; on hover the border turns Bone Ink.

### Links
Bone Ink with a 1px underline offset 4px; hover thickens the underline to 2px. External links carry a ↗ glyph and say what they open ("Source on GitHub ↗", not "Click here").

### Navigation
A sticky 64px bar on graphite with a bottom rule. The LR mark (Archivo 800 with a cyan square full stop) sits left and four text links sit right: Experience, Projects, Stack, Contact. The current section is marked with `aria-current` and an underline. There is no hamburger; the four links fit at 360px.

### Proof Frame (signature)
A cell of the hero's ruled array. A mono chart label at top, a figure (Headline or Numeral), a data graphic drawn to true scale, and a one-line caption in body text saying exactly what was measured. The lead frame is a full Go Cyan field.

### Isotype Grid (signature)
1,000 squares, one per server, drawn with layered CSS gradients on a single element (no per-square DOM). It is labelled for assistive tech as a single image.

### Contact Close
The full-bleed cyan band ends the page. The email address is the closing headline, sized with container units across the full width, followed by a 1px On-Cyan rule and an imprint line (LinkedIn, GitHub, location). The section heading is visually hidden.

### Route Table
Raised Graphite inset, Fragment Mono, a method column and a path column, hairline row rules. Used to show real API surfaces from project source.

## Do's and Don'ts

### Do:
- **Do** set real, CV-backed figures as typography and draw them to true scale.
- **Do** spend Go Cyan (#00ADD8) as whole fields: the lead proof frame and the contact band.
- **Do** keep every corner square and every rule 1px.
- **Do** hang section headings in columns 1–3 on wide screens.
- **Do** keep all content visible without JavaScript; scripts only enhance (copy-to-clipboard, current-section marking).
- **Do** gate every animation behind `prefers-reduced-motion: no-preference`.

### Don't:
- **Don't** use a pill badge, pulsing dot, animated counters, emoji, or icon-tile cards.
- **Don't** put an uppercase tracked eyebrow above section headings.
- **Don't** use shadows, glows, gradients-as-decoration, blur or rounded corners.
- **Don't** set headings, buttons or sentences in monospace.
- **Don't** introduce light mode or a second accent colour.
- **Don't** invent figures, distributions or chart data; graph only what the CV states.
- **Don't** show derived figures (averages, rates) or stack caveats in the proof array; hedged claims belong in Experience, unhedged proof in the hero.
