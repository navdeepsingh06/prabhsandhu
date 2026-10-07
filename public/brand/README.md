# Brand assets

Drop the real files here, keeping the **same filenames**, and they appear across
the site automatically (they're referenced from `data/site.ts`):

| File | Used for | Recommended |
| --- | --- | --- |
| `portrait-placeholder.svg` | Agent headshot (home, about) | Replace with `portrait.jpg` and update `agent.portrait` in `data/site.ts`, or overwrite this SVG. Portrait aspect ~4:5, ≥ 1000px tall. |
| `winmax-logo-placeholder.svg` | Header & footer logo | Replace with the official WinMax logo. A square or transparent PNG/SVG works best. Update `brokerage.logo` in `data/site.ts` if you change the filename. |

**Tip:** If you add a real photo with a different name/extension (e.g.
`portrait.jpg`), just update the path in `data/site.ts` — don't hard-code paths
elsewhere.
