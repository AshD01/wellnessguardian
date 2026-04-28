# Habuild Protocol Template Guide

## For PDFMonkey / Bannerbear / Canva Integration

This guide shows you how to create the PDF template for automated protocol generation.

---

## Template Design Specifications

### Page Layout
- **Size**: US Letter (8.5" x 11") or A4
- **Orientation**: Portrait
- **Margins**: 0 (full bleed design)
- **Background**: White (#FFFFFF)

### Color Palette
- **Primary Gold**: #C87D3D (Deep Marigold)
- **Secondary Gold**: #D4A574 (Light Gold)
- **Teal**: #5B9A96 (Calm Teal)
- **Brown Text**: #3D2817 (Dark Brown)
- **Muted Brown**: #8B7355 (Medium Brown)
- **Cream Background**: #FFFBF5 (Warm White)

### Typography
- **Serif Font** (Headings): Lora, Georgia, or Playfair Display
- **Sans-Serif Font** (Body): Inter, Open Sans, or Helvetica
- **Header Title**: 36-40px, Serif
- **Section Titles**: 20-24px, Serif  
- **Body Text**: 16-18px, Sans-Serif
- **Labels**: 10-12px, Sans-Serif, All Caps, Letter Spacing

---

## Dynamic Placeholders (Variables)

### Required Variables:
1. **{{User_Name}}** - Full name of the user
2. **{{Priority_Title}}** - "Joint Health" | "Energy" | "Stress Relief" | "Weight Management"
3. **{{Priority_Emoji}}** - 🦴 | ⚡ | 🧘‍♀️ | 🌱
4. **{{Action}}** - The action/exercise for the priority
5. **{{Nutrition}}** - The nutrition tip for the priority
6. **{{Mindset}}** - The mindset habit for the priority

### Optional Variables:
- **{{Current_Month}}** - "June 2026" (or dynamic)
- **{{Challenge_Link}}** - "habuild.app/challenge"

---

## Content Library (If/Then Logic for Make.com)

### Priority: Joint Health (joint)
```
Priority_Title: Joint Health
Priority_Emoji: 🦴
Action: 5-min Morning Joint Mobility (Rotate wrists, ankles, neck)
Nutrition: Include one source of Omega-3 (Walnuts or Flax seeds) daily
Mindset: "Move like water": If you sit for 30 mins, stand for 1 min.
```

### Priority: Energy (energy)
```
Priority_Title: Energy
Priority_Emoji: ⚡
Action: 3-min Surya Namaskar (Sun Salutation) upon waking
Nutrition: Swap afternoon tea/coffee for a fruit or glass of water
Mindset: "The 10-second breath": Inhale deep when you feel a slump.
```

### Priority: Stress Relief (stress)
```
Priority_Title: Stress Relief
Priority_Emoji: 🧘‍♀️
Action: 5-min Evening Meditation (The "Habuild Calm")
Nutrition: Add 1 cup of chamomile or green tea post-dinner
Mindset: "Screen Sunset": All screens off 1 hour before bed.
```

### Priority: Weight Management (weight)
```
Priority_Title: Weight Management
Priority_Emoji: 🌱
Action: 15-min Brisk Walk post-dinner
Nutrition: "The 80% Rule": Stop eating when 80% full
Mindset: "Journaling": Track 1 healthy choice made today.
```

---

## Make.com Automation Logic

### Workflow Structure:
1. **Trigger**: Webhook from Tally.so form submission
2. **Router Module**: Route based on "Priority" field value
3. **PDF Generation**: Send to PDFMonkey with mapped variables
4. **Delivery**: Send PDF link via WhatsApp API or Email

### Router Conditions:
```
IF priority = "joint" THEN
  SET Priority_Title = "Joint Health"
  SET Priority_Emoji = "🦴"
  SET Action = "5-min Morning Joint Mobility (Rotate wrists, ankles, neck)"
  SET Nutrition = "Include one source of Omega-3 (Walnuts or Flax seeds) daily"
  SET Mindset = "\"Move like water\": If you sit for 30 mins, stand for 1 min."

IF priority = "energy" THEN
  SET Priority_Title = "Energy"
  SET Priority_Emoji = "⚡"
  SET Action = "3-min Surya Namaskar (Sun Salutation) upon waking"
  SET Nutrition = "Swap afternoon tea/coffee for a fruit or glass of water"
  SET Mindset = "\"The 10-second breath\": Inhale deep when you feel a slump."

IF priority = "stress" THEN
  SET Priority_Title = "Stress Relief"
  SET Priority_Emoji = "🧘‍♀️"
  SET Action = "5-min Evening Meditation (The \"Habuild Calm\")"
  SET Nutrition = "Add 1 cup of chamomile or green tea post-dinner"
  SET Mindset = "\"Screen Sunset\": All screens off 1 hour before bed."

IF priority = "weight" THEN
  SET Priority_Title = "Weight Management"
  SET Priority_Emoji = "🌱"
  SET Action = "15-min Brisk Walk post-dinner"
  SET Nutrition = "\"The 80% Rule\": Stop eating when 80% full"
  SET Mindset = "\"Journaling\": Track 1 healthy choice made today."
```

---

## Template Sections (Top to Bottom)

### 1. Header Section (Gold Gradient Background)
- **Background**: Linear gradient from #C87D3D to #D4A574
- **Pattern Overlay**: Diagonal stripes (optional, 10% opacity white)
- **Award Icon**: Centered, white, 80px
- **Title**: "{{User_Name}}'s Personal Wellness Protocol"
- **Subtitle**: "JUNE 2026" (with decorative lines)
- **Byline**: "Prepared by the Chief Health Officer"
- **Badge**: "HABUILD JUNE CHALLENGE" in rounded pill shape

### 2. Priority Focus Badge (Center)
- **Container**: Rounded rectangle with gradient border
- **Emoji**: {{Priority_Emoji}} (32px)
- **Title**: "{{Priority_Title}} Focus"

### 3. Three Protocol Components
Each component has:
- **Left border** (4px, color-coded)
- **Icon circle** (32px, color-coded background)
- **Label**: "1. THE ACTION (HABUILD CORE)" etc.
- **Content**: {{Action}}, {{Nutrition}}, {{Mindset}}

**Color Coding:**
- Action: #C87D3D (Gold)
- Nutrition: #5B9A96 (Teal)
- Mindset: #D4A574 (Light Gold)

### 4. Conversion Call-to-Action Box
- **Background**: Subtle gradient from gold/teal (8% opacity)
- **Border**: 2px, #C87D3D at 30% opacity
- **Text**: "This is a blueprint, but the real magic happens in the Challenge..."
- **Link**: "habuild.app/challenge" with arrow icon

### 5. Footer Signature Section
- **Left Side**: 
  - Label: "CHIEF HEALTH OFFICER"
  - Name: {{User_Name}}
  - Signature line
- **Right Side**:
  - Award icon (64px, gold)
  - "Certified by Habuild"

---

## PDFMonkey Setup Steps

### Step 1: Create Template
1. Log into PDFMonkey
2. Click "New Template"
3. Name it: "Habuild Wellness Protocol"
4. Choose "Blank" template

### Step 2: Add Variables
Add these custom variables:
- `user_name` (text)
- `priority_title` (text)
- `priority_emoji` (text)
- `action` (text)
- `nutrition` (text)
- `mindset` (text)

### Step 3: Design Template
Use the HTML/CSS editor or visual builder to recreate the design with placeholders:
```html
{{user_name}}
{{priority_title}}
{{priority_emoji}}
{{action}}
{{nutrition}}
{{mindset}}
```

### Step 4: Test
Generate a test PDF with sample data to verify formatting.

---

## Make.com Integration

### Module 1: Webhook
- Receive form data from Tally.so
- Capture: name, priority, phone (optional)

### Module 2: Router
- Create 4 routes (one per priority)
- Set filter conditions based on priority value

### Module 3: PDFMonkey (per route)
- Action: "Generate Document"
- Template: "Habuild Wellness Protocol"
- Map variables from Tally data + priority content

### Module 4: WhatsApp API / Email
- Send PDF download link
- Include personalized message

---

## Design Preview

View the `ProtocolTemplate.tsx` component for a React implementation of this design that can be used as a visual reference.

---

## Quick Start Checklist

- [ ] Create Canva/Figma template with exact dimensions
- [ ] Add all placeholder text: {{User_Name}}, {{Action}}, etc.
- [ ] Apply color palette and typography
- [ ] Export as PDF or HTML
- [ ] Upload to PDFMonkey
- [ ] Set up Make.com webhook from Tally
- [ ] Create router with 4 priority conditions
- [ ] Map variables to PDFMonkey
- [ ] Test with sample data
- [ ] Connect WhatsApp API delivery

---

**Need the visual template?** Check the live preview at `/template-preview` in the app.
