# nakasyou profile

Qwik static site deployed to Cloudflare Workers at https://profile.nakasyou.how.

## Development

```sh
bun install --frozen-lockfile
bun run dev
```

## Deployment

```sh
bun run deploy
```

Cloudflare Builds is connected to `nakasyou/nakasyou.github.io`, production branch `main`.
Build command: `bun run build`. Deploy command: `bunx wrangler deploy`.
GitHub Actions validates the build. The `Refresh profile on Cloudflare` workflow
triggers a fresh build daily at 09:00 UTC (18:00 JST), preserving the previous schedule.
Its deploy hook is stored in the `CLOUDFLARE_DEPLOY_HOOK` repository secret.

`wrangler.jsonc` configures static assets and the `profile.nakasyou.how/*` route.
There is no `/bowling` proxy on the Worker; unknown paths return 404.
The proxied DNS record supplies the hostname for the Worker route.

`nakasyou.how` is served through the `unko` VPS and Cloudflare Tunnel:
- `/` proxies to `https://profile.nakasyou.how`.
- `/bowling/` proxies to the existing bowling application.
- `www.nakasyou.how` redirects to the apex.

VPS configuration is maintained in the bowlingboard project's `deploy/nakasyou.nginx`.
