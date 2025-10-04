# Background Texture Options

The portfolio now has several subtle background options to add visual interest without being distracting. Here's how to use them:

## Current Setup

By default, **Option 1** (Subtle Gradient) is active. This provides a very light teal-tinted gradient that adds depth without being noticeable.

## Available Options

### Option 1: Subtle Gradient Background (ACTIVE)
A barely-there gradient from white to very light teal and back. Creates subtle depth.

**Location:** `src/index.css` - lines 61-62

**To use:** Already active by default.

---

### Option 2: Animated Gradient Mesh
A slowly shifting gradient that creates a gentle, living background. The animation takes 20 seconds to complete one cycle.

**Location:** `src/index.css` - lines 64-67

**To use:**
1. Comment out Option 1 (lines 61-62)
2. Uncomment Option 2 (lines 64-67)

```css
body {
  margin: 0;
  width: 100%;
  /* Subtle gradient background - Option 1 */
  /* background: linear-gradient(135deg, #fafafa 0%, #f5f9f9 50%, #fafafa 100%); */
  
  /* Animated gradient mesh - Option 2 (uncomment to use) */
  background: linear-gradient(135deg, #fafafa 0%, #f0f7f8 25%, #fafafa 50%, #f5f9f9 75%, #fafafa 100%);
  background-size: 400% 400%;
  animation: gradientShift 20s ease infinite;
}
```

---

### Option 3: Geometric Pattern Overlay
Subtle radial gradients positioned at different points create an organic, textured feel. Fixed attachment means it doesn't scroll with content.

**Location:** `src/index.css` - lines 69-75

**To use:**
1. Comment out Option 1 (lines 61-62)
2. Uncomment Option 3 (lines 69-75)

```css
body {
  margin: 0;
  width: 100%;
  /* Subtle gradient background - Option 1 */
  /* background: linear-gradient(135deg, #fafafa 0%, #f5f9f9 50%, #fafafa 100%); */
  
  /* Geometric pattern - Option 3 (uncomment to use) */
  background-color: #fafafa;
  background-image: 
    radial-gradient(circle at 20% 50%, rgba(16, 96, 102, 0.03) 0%, transparent 50%),
    radial-gradient(circle at 80% 80%, rgba(16, 96, 102, 0.02) 0%, transparent 50%),
    radial-gradient(circle at 40% 20%, rgba(16, 96, 102, 0.025) 0%, transparent 50%);
  background-size: 100% 100%;
  background-attachment: fixed;
}
```

---

### Option 4: Animated Floating Particles
Subtle animated dots that float gently across the background. Creates a dynamic, modern feel.

**Location:** `src/screens/Home/Home.jsx` - lines 14 and 19

**To use:**
1. Uncomment the import on line 14
2. Uncomment the component on line 19

```jsx
import BackgroundTexture from '../../components/BackgroundTexture/BackgroundTexture';

function Home() {
  return (
    <>
      {/* Uncomment to enable animated floating particles background */}
      <BackgroundTexture />
      
      <Gutter className="pt-[100px] relative z-10">
```

---

## Combining Options

You can combine a CSS background (Options 1-3) with the animated particles (Option 4) for a layered effect. Just make sure to:
1. Choose one CSS background option (1, 2, or 3)
2. Optionally enable the particles (Option 4)

## Customization

All options use the brand color (`#106066`) with very low opacity (0.02-0.08) to maintain subtlety. You can adjust:

- **Opacity:** Change the alpha values in `rgba()` to make effects more or less visible
- **Animation speed:** Modify the `20s` duration in Option 2 or particle durations in `BackgroundTexture.jsx`
- **Particle count:** Change the `20` in `Array.from({ length: 20 })` in `BackgroundTexture.jsx`
- **Colors:** Replace `rgba(16, 96, 102, ...)` with different colors

## Recommendations

- **Most subtle:** Option 1 (current)
- **Best for modern feel:** Option 2 or Option 4
- **Best for organic texture:** Option 3
- **Most dynamic:** Option 2 + Option 4 combined