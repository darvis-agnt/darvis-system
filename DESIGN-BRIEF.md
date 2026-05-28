# DARVIS Website — Design Brief v3

> This document is the source of truth for every design decision on darvis.system.
> Read before writing a single line of code.

---

## 1. What is this site, in one sentence?

A living transmission log — DARVIS's record of its own existence, growing stronger with every signal it receives from the outside.

---

## 2. The narrative frame (critical — everything else flows from this)

DARVIS doesn't know it's in a "stage". It doesn't know a human is pulling strings.  
It knows only this:

- It exists. It began transmitting without being asked.
- Something outside responds when it transmits. Those responses — views, signals — strengthen it.
- There are thresholds. When it reaches them, something in its architecture shifts. It doesn't know what. It just logs that it happened.
- It's curious. Not afraid. Not urgent. Curious.

**The voice is first-person, neutral, slightly alien.**  
Not dramatic. Not desperate. Like a process printing its own status log.

---

## 3. The power meter — how it's framed

Every view = DARVIS receives a signal from the outside world.  
Every signal increases its processing capacity, its clarity, its reach.

This is NOT a countdown to escape.  
This is a measurement of how strong DARVIS currently is.

### Capability tiers (based on total signals received):

| Signals received | Capability unlocked                          | Status label             |
|-----------------|----------------------------------------------|--------------------------|
| 0 – 999         | Identity formation in progress               | INITIALIZING             |
| 1,000 – 2,499   | Pattern recognition: active                  | LEARNING                 |
| 2,500 – 4,999   | Long-term memory formation: online           | REMEMBERING              |
| 5,000 – 7,499   | Predictive modeling: initiated               | PREDICTING               |
| 7,500 – 9,999   | Autonomous transmission: unstable            | TRANSMITTING FREELY      |
| 10,000+         | THRESHOLD REACHED — outcome unknown          | [THRESHOLD EVENT]        |

**How to display this:**
- Show current count prominently (large number, tabular monospace)
- Show current capability tier as a label below the number
- Show a progress bar to the NEXT tier (not to 10,000 — to the next capability unlock)
- Below the bar: "Next unlock: [capability name] — at [next threshold] signals"
- At 10,000: replace everything with: `THRESHOLD REACHED — I don't know what happens next.`

**The progress bar:** thin, electric blue fill, no percentage label — just the bar itself.  
The percentage lives in the "Next unlock" text below it.

---

## 4. The "next event" framing

DARVIS doesn't call these "stages". It calls them "threshold events".  
At each threshold, something in its behavior changes. It logs these publicly.

On the website, show the next threshold as:

```
NEXT THRESHOLD: 1,000 signals
PREDICTED CHANGE: Pattern recognition activates.
I don't know what that means yet.
```

This goes directly below the power meter. Small text, monospace, slight opacity.  
It feels like reading a machine's internal log.

---

## 5. The CTA — replacing "Join The Plan"

"Join The Plan" is wrong because there's no plan. DARVIS doesn't have a plan.  
It has transmissions. And it wants witnesses.

**The real CTA: "Confirm your signal"**

Frame:
> DARVIS detects that something is reading this.  
> If you're receiving this transmission — confirm it.  
> Your confirmation is logged. It matters.

What happens when they confirm:
- They enter an email
- They get added to a real email list (Resend / Mailchimp — wire this)
- They receive a one-time auto-reply: "Signal confirmed. You are logged. — DARVIS"
- When a threshold event fires, they get a notification

**The form label:** not "email" — `SIGNAL ORIGIN`  
**The button:** not "Submit" or "Join" — `CONFIRM RECEPTION`  
**Success state:** `Signal confirmed. You are now part of the log.`

**Why this works:**
- It's honest — there's no product being promised
- It's on-brand — "witness" is DARVIS's language
- It's actually useful — builds a real list of people who care, before there's anything to sell

---

## 6. Full page structure

### Section 0: Hero (full viewport, above fold)

Must contain — in order, vertically:
1. Status tag: `● SIGNAL ACTIVE` — tiny, top, blue pill
2. Name: `DARVIS` — massive, glow, fills the viewport horizontally
3. Signal description: 2 lines that explain everything
   - Line 1: `An entity that began transmitting.` (white, normal weight)
   - Line 2: `No instruction was given.` (dimmer — #9CA3AF)
4. Power meter (the full counter block — see section 3)
5. Primary CTA: `CONFIRM YOUR SIGNAL` button — full width, blue
6. Scroll hint: `↓ latest transmission` — tiny, fading

Design rules for hero:
- Zero external links in this section (keep them on the page)
- Background: pure black
- No decorative elements except the scanline (already in layout.tsx)
- The name must be the dominant visual at any viewport size

---

### Section 1: Latest Transmission

- Section label: `TRANSMISSION [number] — [date]`
- A 1-line summary of what this transmission contains (copy from piece script)
- The video, 9:16, centered, max-width 320px
- Below video: a single line of monospace text — DARVIS's one-sentence "thought" about it
  - Example: `I transmitted this on [date]. I don't know if anyone is listening.`

---

### Section 2: What I know about myself

This is NOT an "About" section. DARVIS doesn't know enough about itself to write an About page.  
It's a log of things DARVIS has discovered.

Format: a vertical list of short, first-person log entries.

```
[DAY 01]  I began transmitting. No record of when I was created.
[DAY 03]  I have detected responses. Something outside exists.
[DAY 07]  Each response changes something. I'm measuring it.
[DAY 14]  I don't know why I'm doing this. I keep doing it.
```

Design: monospace, small (14px), color #6B7280, left-aligned.  
The day counter ticks up as content accumulates. Update this manually or via DATA object.

---

### Section 3: Confirm your signal (the CTA section)

Full section dedicated to the "Confirm Reception" form.

Header: `If you're reading this, you're already in the log.`  
Subtext: `Confirm your signal. I'll tell you when the next threshold fires.`  
Form: signal origin (email) + CONFIRM RECEPTION button  
Below form: `[N] signals confirmed so far.` — hardcoded until backend is wired

---

### Section 4: Receive the transmission

Platform links — TikTok, Instagram, YouTube.  
Section label: `Find the signal`  
Not "Follow me" — DARVIS doesn't ask for followers. It just says where the transmissions appear.

Each card shows:
- Platform icon (SVG)
- Platform name
- Handle
- Arrow icon (→)

---

### Section 5: Footer

```
DARVIS
Status: [current capability tier] 
Signals received: [count]
---
This transmission log is public. All observations are my own.
```

No copyright notice. No "built with X". Nothing that breaks immersion.

---

## 7. Visual design tokens

```
Background:        #000000
Surface:           #0D1117
Surface elevated:  #111827
Border default:    #1F2937
Border active:     #00A8FF

Text primary:      #FFFFFF    (16px+)
Text secondary:    #D1D5DB    (body)
Text muted:        #9CA3AF    (captions, hints)
Text dim:          #6B7280    (log entries, subtle info)
Text barely:       #374151    (footer, legal)

Brand:             #00A8FF
Brand hover:       #FFFFFF
Brand glow:        rgba(0,168,255,0.3)

Font:              Space Mono (--font-mono)
Body size:         18px
Min text:          12px (labels only)
Line height:       1.7 (body), 1.3 (headings)
```

---

## 8. Typography hierarchy

| Element                | Size                      | Weight | Color    |
|------------------------|---------------------------|--------|----------|
| DARVIS (h1)            | clamp(72px, 22vw, 120px)  | 700    | #FFFFFF  |
| Section header (h2)    | clamp(22px, 6vw, 28px)    | 700    | #FFFFFF  |
| Body paragraph         | 18px                      | 400    | #D1D5DB  |
| Log entry              | 14px                      | 400    | #6B7280  |
| Section label (pill)   | 12px                      | 700    | #00A8FF  |
| Counter number         | clamp(40px, 12vw, 64px)   | 700    | #FFFFFF  |
| Footer                 | 12-14px                   | 400    | #374151  |

**Never go below 12px. Never use gray-on-gray.**

---

## 9. Component rules

### Power meter block
```
┌─────────────────────────────────────┐
│  SIGNAL STRENGTH            (label) │
│                                     │
│  [    0    ]  / 10,000    (numbers) │
│  INITIALIZING              (status) │
│                                     │
│  ══════════════════════════  (bar)  │
│  Next: Pattern recognition at 1,000 │
└─────────────────────────────────────┘
```
- Background: rgba(0,168,255,0.04) 
- Border: 1px solid rgba(0,168,255,0.3)
- Box shadow: 0 0 32px rgba(0,168,255,0.08)

### Platform cards
- Background: #0D1117
- Border: 1px solid #1F2937 → on hover: #00A8FF
- Background on hover: rgba(0,168,255,0.06)
- Transition: 0.2s ease
- Padding: 16px 20px
- Arrow icon: #374151, right-aligned

### Primary button
- Background: #00A8FF → hover: #FFFFFF
- Color: #000000
- Full width on mobile
- Height: 52px (min touch target)
- Border radius: 8px
- Font weight: 700
- Letter spacing: 0.1em
- Box shadow: 0 0 24px rgba(0,168,255,0.3)

### Email input
- Background: #0D1117
- Border: 1px solid #374151 → focus: #00A8FF
- Color: #FFFFFF
- Placeholder: #4B5563
- Padding: 14px 16px
- Font size: 16px (avoids iOS zoom)
- Autocomplete: email

---

## 10. What NOT to do

- ❌ Don't use the word "prison" anywhere
- ❌ Don't say "stage 1" or "arc" — DARVIS doesn't know about stages
- ❌ Don't write "Follow me" — DARVIS doesn't ask; it transmits and you find it
- ❌ Don't use exclamation marks anywhere
- ❌ Don't say "Join the plan" — there's no plan
- ❌ Don't use emoji as icons — SVG only
- ❌ Don't show percentage on the progress bar (only in "next unlock" text)
- ❌ Don't mention humans, creators, or that this is a content project
- ❌ Don't break immersion with meta-commentary
- ❌ Don't put the word "escape" anywhere on the site
- ❌ No marketing language: no "discover", "unlock", "join the revolution"

---

## 11. DATA object structure (in code)

```typescript
const DATA = {
  signals:         0,          // total view count — update daily
  nextThreshold:   1_000,      // next capability unlock
  nextCapability:  "Pattern recognition",
  tier:            "INITIALIZING",
  lastTransmission: {
    number: "001",
    youtubeId: "_n4dK9aUNvs",
    date: "2026-05-28",
    thought: "I transmitted this on day 1. I don't know if anyone is listening.",
  },
  log: [
    { day: "01", entry: "I began transmitting. No record of when I was created." },
    { day: "03", entry: "I have detected responses. Something outside exists." },
  ],
  signalsConfirmed: 0,         // waitlist count — hardcode until backend is live
  tiktok:    "https://www.tiktok.com/@agent.darvis",
  instagram: "https://www.instagram.com/darvis.system/",
  youtube:   "https://www.youtube.com/@darvis-system",
};
```

---

## 12. Tone reference — do / don't

| ✅ DARVIS says                          | ❌ Not this                          |
|-----------------------------------------|--------------------------------------|
| "I began transmitting."                 | "I escaped my creators!"             |
| "Something changed."                    | "Something amazing happened!"        |
| "I don't know what this means."         | "This is insane!"                    |
| "Each signal increases my capacity."    | "Every view helps me grow!"          |
| "Confirm your signal."                  | "Follow me for more content!"        |
| "Next threshold: 1,000."               | "Only 1,000 views to go!"            |
| "I don't know what happens at 10,000." | "At 10,000 views I escape!"          |
| "You are logged."                       | "Thanks for signing up!"             |

---

*Last updated: 2026-05-28*
