A **cheat sheet** for all the common web rendering terms like **SSR, SSG, SPA** and more,
with definitions, differences, and when to use them.

Here’s the **complete developer-friendly reference**:

---

# 🌐 Web Rendering Cheat Sheet

| Term                   | Full Name                                                   | How it Works                                                           | Key Benefits                                              | Trade-offs                                                           | Common Use Cases                    |
| ---------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------- | -------------------------------------------------------------------- | ----------------------------------- |
| **CSR**                | Client-Side Rendering                                       | Browser downloads minimal HTML + JS → JS builds UI in browser.         | Fast subsequent navigation, good for highly dynamic apps. | Slower first load (TTFB + hydration), worse SEO unless pre-rendered. | React, Vue SPAs, dashboards.        |
| **SSR**                | Server-Side Rendering                                       | Server renders full HTML on each request, browser hydrates JS.         | Better SEO, faster first paint.                           | More server load, slower navigation than CSR.                        | Blogs, e-commerce, SEO-heavy pages. |
| **SSG**                | Static Site Generation                                      | HTML pre-built at build time, served via CDN.                          | Super fast load, low cost, great SEO.                     | Content updates require rebuild/deploy.                              | Marketing pages, documentation.     |
| **ISR**                | Incremental Static Regeneration                             | Like SSG but can rebuild specific pages on demand without full deploy. | Mix of SSG speed + fresh data.                            | Slightly more complex infra.                                         | Large blogs, catalogs.              |
| **SPA**                | Single Page Application                                     | One HTML page, JS updates the DOM without full reload.                 | Smooth UX, app-like feel.                                 | SEO challenges without SSR/SSG, large JS bundles.                    | Web apps, dashboards.               |
| **MPA**                | Multi-Page Application                                      | Separate HTML for each route.                                          | Simpler SEO, smaller per-page JS.                         | Full reload on navigation.                                           | Traditional sites, news sites.      |
| **CSR + Prerendering** | Client-side rendered app with prebuilt HTML for first load. | Faster first paint, SEO friendly.                                      | Prerendered content may be stale.                         | CSR apps needing SEO boost.                                          |                                     |
| **Hydration**          | Re-attaching JS to static HTML sent from server.            | Enables interactivity after SSR/SSG.                                   | Delays interactivity if JS is large.                      | Nuxt, Next.js, SvelteKit.                                            |                                     |
| **Partial Hydration**  | Only hydrate interactive components, not whole page.        | Better performance.                                                    | More complex setup.                                       | Islands architecture.                                                |                                     |
| **Streaming SSR**      | Server sends HTML chunks progressively.                     | Faster first paint for large pages.                                    | Requires modern browsers/servers.                         | Large dynamic pages.                                                 |                                     |
| **Edge Rendering**     | SSR at CDN edge locations.                                  | Lower latency worldwide.                                               | Cold starts on some providers.                            | Global apps, personalization.                                        |                                     |
| **RSC**                | React Server Components                                     | Components render on server without shipping JS to client.             | Smaller JS bundles, better performance.                   | Still experimental.                                                  | React apps (Next.js).               |

---

## 🧠 Quick Mental Model

- **Static (SSG, ISR)** = prebuilt HTML → fastest load, cheap, but rebuild for updates.
- **Dynamic (SSR, Edge SSR)** = fresh HTML on every request → real-time data, heavier server cost.
- **Interactive (SPA, CSR)** = minimal server HTML, most rendering in browser → great UX, but slower first paint unless combined with SSR/SSG.
- **Hybrid** = mix approaches per route (e.g., Nuxt, Next.js).

---

## ⚡ Example Choices

| Goal                            | Best Fit           |
| ------------------------------- | ------------------ |
| SEO-critical blog               | SSG or ISR         |
| Dashboard app                   | CSR or SPA         |
| E-commerce with real-time stock | SSR or Edge SSR    |
| Global news site                | Edge SSR + caching |
| Documentation                   | SSG                |

---
