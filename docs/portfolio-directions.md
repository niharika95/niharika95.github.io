# Five homepage directions for Niharika Dalal

Preview the comparison page at `http://127.0.0.1:5173/#/explorations` after starting `npm run dev -- --host 127.0.0.1 --port 5173`.

The five directions live on separate routes. The current homepage and case studies remain available at their original routes. These are working local designs; nothing has been published.

## What the current portfolio already gets right

The move from engineering to product design is a useful, credible distinction. The case studies cover real product problems, including fragmented insurance workflows, competing audiences, an overlong loan application, and restaurant waiting. The existing project images provide enough material for a strong visual identity without stock imagery.

## What the new homepages improve

- Give the opening a short, memorable statement, then explain its connection to your background in one paragraph.
- Establish a deliberate relationship between display type, body copy, captions, and navigation.
- Make each project legible at a glance through a short title, its design discipline, and the problem it addresses.
- Frame product screenshots as designed compositions, with consistent crops and supporting space.
- Give each direction a short, distinct entrance with Skip, Replay, and Pause controls. Keyboard navigation skips the entrance, and reduced-motion preferences bypass it.
- Make motion part of each visual identity: choreographed typography, layered interfaces, spring-smoothed pointer movement, direct paper dragging, and a growing botanical scene.
- Make your portrait, personal interests, and contact links part of a coherent story.
- Keep claims precise. Ramen Nagi remains labeled as a concept. The loan project uses the documented change from 11 screens to 7; the source case study calls the 36% time reduction a projection, not a measured result.

## Reference study

All nine supplied URLs were opened and visually inspected in a live browser. The sites were reviewed for composition, type, imagery, navigation, and their available scroll or interactive behavior. Their current designs may differ from earlier versions you saw.

| Reference                                                                   | Observed cues                                                                                                                                                                                 | Translation into your portfolio                                                                                                                                                                                                            |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| [Maria Vasilyeva](https://www.mariavasilyeva.com/)                          | A ruled loading stage with staggered typographic trails leads into a spatial collage of project images. Black vertical rails and handwritten annotations frame the receding gallery.          | Three moving typographic bands introduce a desk of flying paper cards. The cards use your images and support direct dragging; a conventional project grid follows.                                                                         |
| [Pleurat Shala](https://www.pleurat.com/)                                   | A walking character and scrolling city, an interactive workbench, and an isometric artboard whose blocks assemble in sequence.                                                                | A layered exposure workspace builds in depth and responds to the pointer. An original design loom bends loose strands into shared paths. The city motif is not used.                                                                       |
| [Ting Yan](https://www.tingyan.me/)                                         | A quiet, text-led introduction over a dark atmospheric background, inline project links, and suggested questions above a chat field.                                                          | Concise positioning and readable project context in Systems studio and Rooted in curiosity. No chatbot is added without a real knowledge source and backend.                                                                               |
| [Irina Moi](https://irinamoi.com/)                                          | A burgundy entrance reveals staggered HELLO letters, which settle into the header as the curtain lifts. Oversized sans-serif and italic serif then arrive with off-center imagery.            | An original Form / Feeling typographic exchange opens two burgundy panels. A responsive drawn line and turning asterisk continue the movement after entry.                                                                                 |
| [Léo Parpeix](https://www.leoparpeix.com/)                                  | An immersive sculptural flower scene responds to the pointer. Scrolling changes scale from the immersive opening to a personal introduction, then large project imagery and compact metadata. | Rooted in curiosity uses this progression: a scroll-grown original 3D plant, a personal introduction, then four full-size project chapters. Pointer movement gently turns the plant. Contained garden strips let visitors plant seedlings. |
| [Daniela Muntyan](https://danielamuntyan.com/)                              | A stable left identity column and a long, generous media-led collection on a dark background. Work, side projects, and writing share a consistent browsing structure.                         | Generous project presentation and consistent metadata in Rooted in curiosity, with a short personal introduction before the work.                                                                                                          |
| [Khanh Nguyen](https://khanhnguyen.design/)                                 | Oversized serif identity on a warm dark background, a narrow vertical rail, chapter labels, and strong changes of scale between sections.                                                     | An editorial introduction, considered section pacing, and restrained metadata in Form & feeling.                                                                                                                                           |
| [Russell Numo](https://www.russellnumo.nl/)                                 | Oversized condensed type repeating across the viewport, a portrait layered into the type, a strong monochrome identity, and large project sections.                                           | Bold type and visual scale in In focus, while keeping the project information and contact route explicit.                                                                                                                                  |
| [Raphael Segerman’s PayJustNow page](https://segerman.dev/work/payjustnow/) | A spare case-study shell, centered project title, a horizontal strip of large media, and a small structured band of role/year/description metadata.                                           | Large media stages with concise project metadata. This reference is a case-study page, so its presentation principles are adapted rather than treated as a homepage template.                                                              |

## The five directions

| Direction               | Route                       | Design decision                                                                                        | Working interaction                                                                                                               |
| ----------------------- | --------------------------- | ------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------- |
| 01. Form & feeling      | `/#/explorations/editorial` | Warm paper, burgundy serif headlines, an asymmetric grid, and a personal closing section.              | Two-panel entrance, bending drawn line, turning asterisk, and scroll reveals.                                                     |
| 02. Systems studio      | `/#/explorations/systems`   | Dark green, mint, a technical grid, and explicit structure.                                            | Isometric assembly, pointer orbit, before/after layer separation, an original responsive design loom, and project selection.      |
| 03. A curious practice  | `/#/explorations/playroom`  | Lilac, cobalt, paper objects, a portrait, and informal annotations.                                    | Moving typographic bands, flying draggable cards, a pointer-following character, rearrangement, and filters.                      |
| 04. Rooted in curiosity | `/#/explorations/quiet`     | A sunlit botanical room, central plant installation, typography in depth, and large case-study chapters. | Daylight reveals a growing 3D plant, the pointer shifts its light, navigation stays fixed, and three gardens accept seeds. |
| 05. In focus            | `/#/explorations/cinema`    | Full-screen imagery, large type, warm black, and a pale lime accent.                                   | Shutter entrance, spring-following viewfinder, image parallax, and directional scene transitions between four projects.           |

## Recommendation

Start with **Form & feeling**. It gives the portfolio character while leaving enough space for your reasoning and project work. It is the most balanced option for product-design recruiting.

Choose **Systems studio** if your next role values enterprise workflows and systems thinking most. It communicates your engineering background through an actual interaction.

**A curious practice** feels the most personal. **Rooted in curiosity** ties the site to your love of plants and gives the work a slower, more immersive progression. **In focus** has the strongest visual opening and suits conversations where presentation craft matters heavily.

## Implementation and review

- A lazy-loaded route group keeps these explorations separate from the current portfolio.
- Content comes from your existing case studies, About page, contact details, and local image assets.
- The four source thumbnails total about 38 MB. The new preview copies total about 1.3 MB and do not replace the originals.
- DM Sans, DM Serif Display, and Space Grotesk are self-hosted with their SIL Open Font License files.
- Controls use native buttons and links, expose selected states, and show keyboard focus. The design-notes dialog supports Escape and restores focus to its trigger.
- Responsive CSS changes the actual composition, including a mobile project wall, stacked workbench, compact navigation, and a two-column cinematic selector.
- Reduced-motion preferences bypass entrances and disable ambient and pointer animation. Pause stops continuing motion, and Resume does not replay the intro. Offscreen decorative animations pause; pointer updates stop once their spring settles, and route cleanup cancels animation frames and timelines.

Verified locally:

- `npm run build` passed. Vite reports size warnings for the main application bundle and the lazy-loaded 3D scene; the scene is requested only by direction four.
- All five directions were checked at 320 px, 810 px, and 1440 px CSS viewport widths. No horizontal page overflow or broken visible images were found. The sticky-note text was adjusted after the narrow-phone check.
- Before/after comparison, project preview selection, desk rearrangement, category filters, and cinematic project switching all worked in the browser.
- Design notes open as a modal; Escape closes the dialog and returns focus to its trigger.
- The jump-to-work control reached the work section, and a case-study card successfully opened the existing exposure-tool page.
- No browser console errors were recorded while reviewing the five concepts.

The five concepts intentionally share project content so differences in presentation are easier to compare.

## Motion review

The motion pass was checked over consecutive browser frames, including entrances and transitions rather than only their final poses. Pointer movement changes the isometric camera, plant orientation, character eyes, editorial curve, loom paths, and viewfinder. Dragging a card moves it without opening its case study. The loom tension control also works with arrow keys. Replay, Skip, and Pause / Resume were exercised.

The streetscape from the initial motion draft was removed following your direction to avoid copying the reference. Systems studio now uses the original design loom. All shapes, paths, animation code, and character forms in this pass were authored locally. No reference-site media was copied.

## Botanical revision to direction four

The fourth concept was rebuilt around the request for Léo’s information flow and personal plant interactions. Its existing `/quiet` URL is retained.

- The opening uses a procedural Three.js plant with curved leaves, stems, soil, and a terracotta pot on a stone plinth. It starts in a dark room. A warm spotlight brightens before the leaves unfold. Scrolling continues the growth, and the pointer shifts the light and canopy. No reference artwork or models are used.
- Native scrolling continues through a personal introduction, four case-study chapters, a short personal section, and a green contact footer. Navigation can skip directly to work or the introduction.
- Three bounded planting strips accept clicks or keyboard activation. Each grows one of three illustrated seedlings, with up to nine plants per strip and a Start fresh control. Plants cannot cover neighboring content, and they are not saved after leaving the page.
- The 3D renderer loads only for this direction. Rendering stops while its scene is offscreen, and paused or reduced-motion views show a full plant. An illustrated fallback remains available when WebGL cannot render.

Botanical revision checks: desktop (1440 px), tablet (810 px), and phone (390 px and 320 px) layouts had no horizontal overflow. The browser checks exercised scroll growth, pointer response, click and Enter/Space planting, the nine-plant cap, reset, paused planting, the work shortcut, and the exposure case-study link. The operating-system reduced-motion setting and WebGL-loss fallback were implemented but not emulated during this browser pass.

The final fresh load had no JavaScript errors. The installed React Three Fiber / Three.js combination emits a Clock deprecation warning; it does not prevent rendering or interaction.

## Sun cursor refinement

The pointer interaction was revisited on Léo Parpeix's site, including the following bee. Direction four now has an original sun cursor: a small precise point, a softly following golden halo, and a short luminous trail that releases unfurling leaves and flowers. Clicking open space releases a small bloom. The cursor shrinks over controls, and headings, paragraphs, navigation, and project links do not emit particles.

The decorative canvas cannot intercept clicks. Particle count is capped at 64, each particle disappears within three seconds, and the animation loop stops after the trail settles. Pause and reduced motion restore the native cursor. Touch input does not emit particles. Keyboard navigation also restores the native cursor. The garden strips retain their separate click and keyboard planting behavior.

Browser checks covered the visible trail, click blooms, particle expiry, Pause/Resume, native-cursor restoration, garden planting, and Tab focus. Touch and operating-system reduced-motion settings were reviewed in code rather than emulated.

## Dark-room opening

Direction four now opens as a central installation. A narrow overhead light opens in the dark room, then the plant grows on its stone plinth. The large “Rooted in” line sits behind the canopy; “curiosity.” sits in front of the plinth. Small introductory copy stays below the scene. The previous separate entrance screen has been removed for this direction so the light sequence is the entrance itself. Replay restarts the sequence.

The glass header is fixed 20 px from the top on desktop and 12 px on phones. Work and About scrolling leave clearance below it. The header retains its dark background and light text over the lighter content sections, and does not fade out during the room's entrance. The sun cursor and planting gardens remain available.

Pause and reduced motion show a fully grown, illuminated plant. The scene stops rendering when it leaves the viewport; its timed introduction also stops advancing while offscreen.

This opening was reviewed at 320, 390, 810, and 1440 px CSS viewport widths without horizontal overflow. Browser checks covered Replay, Pause/Resume, the pointer light and botanical trail, fixed navigation at the footer, and Work/About anchor clearance. Replay returned the light to zero and restarted growth. The gallery preview was updated to match. A fresh page load rendered the 3D plant without JavaScript errors, and `npm run build` passed with the existing bundle-size warnings. Operating-system reduced motion and WebGL loss were not emulated in this pass.

## Daylight and plant detail refinement

The main growth now runs from 0.35 to 2.5 seconds, with the leaf motion settling shortly afterward. The former entrance grew from 1.4 to 5.6 seconds. Daylight reaches full brightness at 1.25 seconds. The ceiling tube has become a high window with warm sunlight, cool sky fill, a broad light beam, and a window-shaped patch across the floor.

The plant has twelve leaves with varied sizes, angles, and shades, including narrow young growth. Asymmetric leaf meshes include curled tips, rippled edges, raised midribs, and fine vein textures. Shared procedural textures add surface detail to the leaves and terracotta, while an instanced mesh adds soil fragments and pale grit. These textures are generated locally without external assets and disposed when the scene unmounts.

The updated hero was checked at 1440 and 390 px CSS viewport widths. Replay returned to the small plant and reached its opening canopy; Pause showed a fully grown plant. The fixed header remained in place and the phone layout had no horizontal overflow. `npm run build` passed with the existing bundle-size warnings.
