# Trench Academy by Recruit Ready — Website

Marketing site for Trench Academy, a football line-play training program. Built with Next.js, deployed on Vercel.

---

## Quick start

```bash
npm install
npm run dev
```

Site runs at http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

---

## Tech stack

| Layer | Choice |
|-------|--------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 (via `@tailwindcss/postcss`) |
| Fonts | `next/font` for Inter + Oswald |
| Forms | [Web3Forms](https://web3forms.com) (no backend needed) |
| Hosting | Vercel (push to `main` auto-deploys) |
| Email | `info@trenchacademy.ca` (managed externally — domain registrar) |

No database. No auth. No API routes. Forms POST directly to Web3Forms from the browser.

---

## Project structure

```
src/
  app/                         # Next.js App Router pages
    page.tsx                   # Home (/)
    about/page.tsx
    programs/page.tsx
    athletes/page.tsx          # was /testimonials; now /athletes
    contact/page.tsx
    blog/page.tsx              # blog index
    blog/[slug]/page.tsx       # individual blog post
    layout.tsx                 # root layout, fonts, metadata, JSON-LD
    sitemap.ts                 # auto-generated sitemap.xml
    robots.ts                  # auto-generated robots.txt
    icon.png                   # favicon
    apple-icon.png             # iOS touch icon
    opengraph-image.tsx        # dynamic OG share image (composite of hero + logo + tagline)
    fonts/Oswald-Bold.woff     # used by opengraph-image.tsx (the page uses next/font instead)
  components/site/             # presentational components (Header, Footer, Logo, etc.)
  components/forms/            # InquiryForm, WaitlistForm
  data/                        # all editable content (see below)
    athletes.ts                # featured athletes + testimonials
    coaches.ts                 # coaching staff
    programs.ts                # program cards
    posts.ts                   # blog posts
  lib/site.ts                  # site-wide config (name, URL, social, brand email parts, Web3Forms key)
public/
  logo.png                     # Trench Academy gorilla mark
  recruit-ready-logo.png       # parent brand logo
  media/
    athletes/                  # athlete photos
    coaches/                   # coach photos
    drills/                    # program / drill photos
    hero/                      # hero poster photos (used as <video> poster fallback)
    posts/                     # blog cover images
    testimonials/              # homepage testimonial photo
    video/                     # hero background videos (one per page)
```

---

## Editing content

All content lives as plain TypeScript arrays in `src/data/`. **No CMS** — edit the files, commit, push.

### Athletes (`src/data/athletes.ts`)

Two exports:

- `featuredAthletes` — the cards on `/athletes` and the homepage section. Order matters (the homepage shows a hand-picked subset by slug in `src/app/page.tsx`).
- `testimonials` — quotes used on `/athletes` page and the first one on the homepage.

To add an athlete:

1. Drop the photo in `public/media/athletes/` (lowercase-hyphenated, e.g. `john-rabet.jpg`)
2. Add a new object to `featuredAthletes`:

```ts
{
  slug: "john-rabet",
  name: "John Rabet",
  league: "NCAA",
  team: "Rhode Island Rams",
  image: "/media/athletes/john-rabet.jpg",
}
```

Order in the array determines order on the page. Group by tier: CFL → NCAA → U SPORTS → Prep → High School.

### Coaches (`src/data/coaches.ts`)

Same pattern. Photos in `public/media/coaches/`.

### Programs (`src/data/programs.ts`)

Each program has `bullets: string[]` for the feature list shown on `/programs`. Image lives in `public/media/drills/`.

### Blog posts (`src/data/posts.ts`)

Each post has `slug`, `title`, `excerpt`, `date` (ISO), `category`, `coverImage`, `body`. The `body` field is plain text — split on blank lines into paragraphs. Cover image in `public/media/posts/`.

### Site config (`src/lib/site.ts`)

Single source of truth for: site name, URL, tagline, description, social links, Web3Forms access key, brand email (split into `emailUser` + `emailDomain` for anti-scraping).

---

## Images

### Adding a new image

1. Drop it in the appropriate `public/media/` subfolder
2. Reference it from a data file or component as `"/media/<folder>/<filename>"`
3. Use lowercase-kebab-case filenames

### Optimizing source images

Sources should be **under ~700 KB** ideally. Next.js's `<Image>` component generates optimized WebP/AVIF variants on serve, but smaller sources mean faster builds.

Standard recipe with macOS `sips`:

```bash
sips -s format jpeg -s formatOptions 82 -Z 1920 input.jpg --out output.jpg
```

- `formatOptions 82` = JPEG quality 82 (good balance)
- `-Z 1920` = caps longest dimension at 1920px

---

## Hero videos

Every main page has a background video in `public/media/video/`. They autoplay, are muted, looped, and respect `prefers-reduced-motion`.

### Specs

| Setting | Value |
|---------|-------|
| Resolution | 1280 × 720 (downscaled from 1920×1080) |
| Codec | H.264 |
| Bitrate / Quality | CRF 30 (single pass) |
| Audio | **None** (strip the audio track) |
| Container | MP4 with faststart |
| Duration | 8–15 seconds (loops) |
| File size | ~700 KB – 1.2 MB per video |

### Re-encoding command

```bash
ffmpeg -i source.mp4 \
  -vf "scale=1280:-2" \
  -c:v libx264 -crf 30 -preset slower \
  -an \
  -movflags +faststart \
  public/media/video/<page>-hero.mp4
```

Replace `<page>` with `home`, `about`, `programs`, `athletes`, `blog`, or `contact`.

If only swapping the source, no code changes needed — the `<video>` tag in each page references a fixed filename.

### Hero poster (fallback image)

Each hero video has a poster image at `public/media/hero/<page>-hero.jpg`. This shows while the video loads, for users with reduced-motion enabled, and as a fallback if the video fails. Generate from the first frame of the video:

```bash
ffmpeg -i source.mp4 -ss 1 -vframes 1 -q:v 4 public/media/hero/<page>-hero.jpg
```

---

## OG share image (link previews)

When someone shares a `trenchacademy.ca` link in iMessage, Instagram DM, Slack, Twitter, LinkedIn, etc., they see a preview generated by **`src/app/opengraph-image.tsx`**.

This is a **dynamic Next.js OG image** — it composites the hero photo, gorilla logo, and "Trust the process." headline at build time using `next/og`'s `ImageResponse` API.

To change the design: edit the JSX in `src/app/opengraph-image.tsx`. To change the source hero photo: edit the `readFile` path in that file.

Uses Oswald (matches the site's display font). Font file lives at `src/app/fonts/Oswald-Bold.woff` — separate copy from the `next/font` setup because `ImageResponse` runs in its own renderer.

Blog posts use their own `coverImage` as the OG image (handled in `src/app/blog/[slug]/page.tsx` via the `openGraph` metadata field).

After updating, social platforms cache old previews aggressively. To force a refresh, use each platform's debugger:
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator (deprecated; rely on cache expiry)
- LinkedIn: https://www.linkedin.com/post-inspector/

---

## Brand colors

Tokens live in `src/app/globals.css` under `@theme`. Change there to update site-wide.

- `--color-brand-primary: #017db9` (signature blue)
- `--color-brand-navy: #033a54`
- `--color-brand-deep: #035881`
- `--color-bg: #07090c` (page background)

**Never use red** — it's the opposite of the brand. (Parent brand is also blue.)

---

## Forms

Both forms (Contact inquiry + App waitlist) submit to [Web3Forms](https://web3forms.com).

- The public access key is in `src/lib/site.ts` as `formAccessKey`
- Web3Forms routes submissions to the configured inbox (set in their dashboard)
- A hidden honeypot field (`botcheck`) catches naive bots
- For stronger anti-spam, add a Cloudflare Turnstile site key (not currently enabled — see `Anti-spam` section below)

To change the destination email: log into the Web3Forms dashboard, not the code.

---

## Email obfuscation

The visible email on Footer + Contact uses a `<EmailLink>` component (`src/components/site/EmailLink.tsx`) that assembles the address from `emailUser` + `emailDomain` only after JS hydrates. This keeps the full email string out of static HTML, blocking naive scrapers.

Pre-hydration fallback links to `/contact` so users with JS disabled get a working CTA.

To change the email, edit `emailUser` and `emailDomain` in `src/lib/site.ts`.

---

## Anti-spam (future work)

Currently: honeypot field on both forms + Web3Forms's own spam detection. Adequate for low-volume.

If spam ever lands in the inbox, the next layer is **Cloudflare Turnstile**:

1. Sign up at https://www.cloudflare.com/products/turnstile/ (use the client's email so they own the account)
2. Create a site → get site key + secret
3. Paste the secret into Web3Forms dashboard (spam protection settings)
4. Wire the widget into `InquiryForm` and `WaitlistForm` (~10 lines of code each)

---

## SEO

- Per-page `metadata` exports in each page file (title, description)
- `src/app/layout.tsx` has site-wide defaults + JSON-LD `SportsOrganization` schema
- `src/app/blog/[slug]/page.tsx` adds `BlogPosting` JSON-LD per post
- `src/app/sitemap.ts` auto-generates the sitemap (includes blog posts)
- `src/app/robots.ts` allows all crawlers, references sitemap
- Open Graph + Twitter card metadata in `layout.tsx`

The technical SEO is solid. What's not in code (and matters more for ranking): backlinks, content depth, brand searches, domain age.

---

## Deployment

Vercel project linked to the GitHub repo. Push to `main` → auto-deploys to production. PR previews are deployed automatically.

Domain: `trenchacademy.ca` (configure DNS to point at Vercel — see Vercel domain settings).

Environment variables: **none currently required**. The Web3Forms key is in code (public by Web3Forms's design — it's an access key, not a secret).

---

## Maintenance gotchas

1. **Adding a new page**: create the folder under `src/app/`, add `page.tsx` with `export const metadata`. Add the route to `nav` in `src/lib/site.ts` if it should appear in the header. Add to `src/app/sitemap.ts` for SEO.
2. **Renaming a route**: update `nav` in `src/lib/site.ts`, sitemap, and any internal `<Link href>` references. Grep for the old path to make sure nothing's stale.
3. **Image caching during dev**: Next.js's image optimizer caches aggressively. If a replaced image doesn't update in the browser, clear with `rm -rf .next/cache/images` and hard-refresh (⌘⇧R).
4. **Browser tab favicon cache**: browsers cache favicons even harder than images. Close the tab + reopen in a fresh tab to see icon changes.
5. **Hero video autoplay on iOS**: must have `muted` + `playsInline` attributes (already set). Don't remove them.

---

## License

Proprietary. All assets and brand marks © Trench Academy / Recruit Ready.
