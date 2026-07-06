# Deployment

## Chosen strategy

The site is built by GitHub Actions and deployed straight to GitHub Pages as a
deployment artifact (`.github/workflows/deploy.yml`). On every push to
`master` the workflow runs `next build`, which produces the fully static site
in `out/`, and publishes that directory with `actions/deploy-pages`.

For this to work, the repository's Pages settings must use
**Settings → Pages → Source: GitHub Actions** (the custom domain configured
there is preserved; the `CNAME` file in `public/` is kept for compatibility).

## Evaluated alternatives

Two strategies from the migration task were evaluated:

1. **Commit the build output to `master`** (how the previous Python engine
   worked). Rejected: generated files would be mixed with sources, every
   build would churn git history, and each content change would produce large
   noisy diffs.

2. **Push `out/` to a dedicated `gh-pages` branch.** Better separation, but
   every deployment would copy ~1.5 GB of photographs into a second branch,
   roughly doubling the repository size and growing it with every deploy.

The implemented approach is the modern form of option 2: the build output
still lives outside `master`, but as a transient Pages artifact instead of a
permanent branch, so the repository only ever contains sources and media once.

## Local development

```sh
npm install
npm run dev     # development server on http://localhost:3000
npm run build   # static export into out/
```

Photograph metadata is loaded at build time from `data/` and image dimensions
are read directly from the WebP files in `public/media`, so no additional
tooling is required.
