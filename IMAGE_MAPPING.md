# Image Mapping Guide

This document helps you map the uploaded images to their respective projects in `src/data/projects.ts`.

---

## Available Images by Project

### Dating & Private Lives (Feature Film)
**Files:** DatingPrivateLives_*.jpg
- DatingPrivateLives_2901.jpg ✅ (already added)
- DatingPrivateLives_2902.jpg ✅ (already added)
- DatingPrivateLives_2903.jpg ✅ (already added)
- DatingPrivateLives_2904.jpg ✅ (already added)
- DatingPrivateLives_2905.jpg ✅ (already added)
- DatingPrivateLives_2906.jpg ✅ (already added)
- DatingPrivateLives_2907.jpg
- DatingPrivateLives_2909.jpg
- DatingPrivateLives_2912.jpg
- DatingPrivateLives_2913.jpg
- DatingPrivateLives_2915.jpg
- DatingPrivateLives_2916.jpg
- DatingPrivateLives_2917.jpg
- DatingPrivateLives_2918.jpg
- DatingPrivateLives_2919.jpg
- DatingPrivateLives_2920.MOV (video file)

**Action:** Choose best image for hero, add remaining images to gallery array

---

### UBS Roger Federer Event
**Files:** UBS_*.jpg/jpeg + UBS_TECH_*
- UBS_1.jpg
- UBS_2.jpeg
- UBS_3.jpeg
- UBS_4.jpeg
- UBS_5.jpeg
- UBS_6.jpeg
- UBS_7.jpeg
- UBS_8.jpg
- UBS_9.jpg
- UBS_10.jpg
- UBS_11.jpg
- UBS_12.jpg
- UBS_13.jpg
- UBS_TECH_1.HEIC
- UBS_TECH_2.HEIC
- UBS_TECH_3.heic
- UBS_TECH_4.jpg
- UBS_TECH_5.jpg

**Action:**
1. Choose hero image (likely one of the main UBS_*.jpg files)
2. Add all to gallery array
3. Note: HEIC files may need conversion for web compatibility

---

### Kingdom (Music Video)
**Files:** Kingdom_*.jpg
- Kingdom_2944.jpg
- Kingdom_2945.jpg
- Kingdom_2947.jpg
- Kingdom_2952.jpg
- Kingdom_2957.jpg
- Kingdom_2958.jpg
- Kingdom_2959.jpg
- Kingdom_2960.jpg
- Kingdom_2961.jpg
- Kingdom_2962.jpg
- Kingdom_2971.jpg
- Kingdom_2973.jpg
- Kingdom_2986.jpg
- Kingdom_2987.jpg
- Kingdom_2994.jpg

**Action:** Choose hero and add all to gallery

---

### Narcissisister Projects
**Files:** NARC_*.jpeg
- NARC_JoeColeman-LeoSanoPhotos-10.jpeg
- NARC_JoeColeman-LeoSanoPhotos-17.jpeg
- NARC_walter-wlodarczyk-WWRA3803.jpeg
- NARC_walter-wlodarczyk-WWRA3913.jpeg

**Projects to assign:**
1. "Narcissisister — Automata and Praxinoscope" (Deitch Projects, 2025)
2. "Narcissisister — Voyage Into Infinity" (Pioneer Works, 2024)

**Action:**
- Determine which images go with which exhibition
- May need more images or descriptions to differentiate

---

### Ryder Cup / MLB (Corporate Events?)
**Files:**
- MLB_1.jpg
- MLB_2.jpg

**Potential Ryder Cup project files?**
These might be related to the Ryder Cup or another sports event.

**Action:** Verify what these images are for and assign to correct project

---

### KPMG (Corporate Event?)
**Files:** KPMG_*.png/jpeg/HEIC
- KPMG_1.png
- KPMG_2.HEIC
- KPMG_3.HEIC
- KPMG_4.jpeg
- KPMG_5.jpeg

**Action:** Clarify if this is a separate project or part of another corporate event

---

### KPS (Corporate Event?)
**Files:**
- KPS_Entrance with Stag.jpeg
- KPS_Holiday Party Entrance 2024.jpg

**Action:** Determine what KPS project this is - possibly add as 7th project?

---

### Stiffler (Unknown Project)
**Files:**
- Stiffler_3017.jpg
- Stiffler_3029.jpg

**Action:** Identify what project this is

---

## Next Steps

1. **Review each image** - Open them in a viewer to see what they show
2. **Map to projects** - Assign each image to the correct project in `src/data/projects.ts`
3. **Choose hero images** - Select the most striking/representative image for each project
4. **Convert HEIC files** - HEIC format may not work in all browsers, convert to JPG if needed
5. **Update project descriptions** - Write narratives based on what the images show

---

## How to Update projects.ts

For each project, update these fields:

```typescript
{
  heroImage: '/assets/projects/YOUR_CHOSEN_HERO.jpg',
  images: [
    '/assets/projects/image1.jpg',
    '/assets/projects/image2.jpg',
    // ... more images
  ],
}
```

**Note:** Paths start with `/assets/projects/` because files are in `public/assets/projects/`
