# afaziehan.github.io

Personal academic website of Dr. Anies Faziehan Zakaria (Department of Engineering Education, Universiti Kebangsaan Malaysia).

Plain static HTML/CSS/JS — no build step. GitHub Pages serves `index.html` from the `main` branch.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure, bio, positions, education, awards, contact |
| `assets/data.js` | Publications, grants, courses, service roles, citation metrics |
| `assets/main.js` | Renders the lists from `data.js`; publication filter and search |
| `assets/style.css` | Styles (light and dark themes) |
| `assets/photo.jpg` | Portrait |
| `Resume_Anies_UKM.pdf` | CV linked from the "Download CV" button |

## Updating

- **New publication, grant, course or service role:** add an entry to the matching array in `assets/data.js`.
- **Citation metrics:** update `SITE.metrics` in `assets/data.js` from Google Scholar.
- **CV:** replace `Resume_Anies_UKM.pdf` (keep the filename, or update the link in `index.html`).

## Preview locally

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Publish

```sh
git add -A
git commit -m "Add personal website"
git push -u origin main
```

In the repository settings, under **Pages**, set the source to the `main` branch (root).
