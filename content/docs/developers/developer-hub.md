---
title: "Developer Hub"
description: "The LeiOS Developer Hub: accounts, publishers, packages, roles, and the API behind it."
navigation:
  title: Developer Hub
---

# Developer Hub

The [LeiOS Developer Hub](https://hub.leios.dev){target="_blank"} is where packages for the LeiOS
repository are published and reviewed. Developers upload their builds there, and LeiOS admins
review stable promotions and cut LeiOS releases.

## Getting an account

Self-service sign-up is not available yet. To get an account, ask a LeiOS admin on
[Discord](https://discord.gg/8YC5BXjCc5){target="_blank"}.

## Concepts

### Publishers

A **publisher** owns packages. It can be a person, a team or an organization. A publisher name:

- is 2 to 50 characters long,
- uses lowercase letters, digits and hyphens only,
- starts and ends with a letter or digit.

Some names are reserved, including `leios` and `leicraft`.

Every publisher has an **owner**. The owner's name and email address are what the repository
expects in the `Maintainer` field of every package the publisher uploads. See
[Publishing Packages](/docs/developers/publishing-packages#the-maintainer-field).

### Packages

A **package** belongs to a publisher. Its full name is `<publisher>.<package>`, for example
`acme.hello-world`. The package name must match the `Package` field inside your `.deb`.

### Releases

A **release** is one version of a package, for example `1.2.0-1`. Each release can contain one
build per architecture: `amd64`, `arm64`, or a single `all` build for architecture-independent
packages.

### Roles

Publisher members have one of four roles:

| Role | Can do |
| --- | --- |
| **Admin** | Everything a maintainer can, plus edit the publisher, manage its members, and delete packages and releases. |
| **Maintainer** | Everything a developer can, plus edit packages and releases. |
| **Developer** | Create packages, publish releases, and request stable promotion. |
| **Viewer** | Read-only access. |

The publisher's owner can do everything, and is the only one who can delete the publisher.

You can also give someone a role for a single package, for example to let an outside contributor
publish releases of that package only. If a person has both a publisher role and a package role,
the higher one applies.

## The Repository API

Everything the Hub does goes through the LeiOS Repository API at `https://api.leios.dev`, so you can
automate publishing from CI.

| | |
| --- | --- |
| **Base URL** | `https://api.leios.dev/v1` |
| **Interactive reference** | [api.leios.dev/docs/v1](https://api.leios.dev/docs/v1){target="_blank"} |
| **OpenAPI specification** | [api.leios.dev/docs/v1/openapi](https://api.leios.dev/docs/v1/openapi){target="_blank"} |
| **Authentication** | `Authorization: Bearer <token>`, with a session token or an API key |

Every response has the same shape: `{ "success", "code", "message", "data" }`.

### API keys

For scripts and CI, use an API key instead of your password. API keys start with `lra_apikey_`.
Create one by logging in and calling `/v1/account/apikeys` with the session token:

```bash
# 1. Log in. The session token is in data.token.
curl -s https://api.leios.dev/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{"username": "<username>", "password": "<password>"}'

# 2. Create an API key. The key is in data.token and is shown only once.
curl -s https://api.leios.dev/v1/account/apikeys \
  -H "Authorization: Bearer <session token>" \
  -H "Content-Type: application/json" \
  -d '{"description": "CI uploads", "expires_at": "90d"}'
```

`expires_at` is one of `7d`, `30d`, `90d`, `180d`, `365d`, or `null` for no expiry. Store keys like
passwords, for example as masked CI variables, and use the shortest expiry that works for you.

::note
The Hub does not have a page for managing API keys yet, and the public package explorer is still
in development.
::
