---
title: "Developer Hub"
description: "Accounts, publishers, packages, roles, moderation and API keys on hub.leios.dev."
navigation:
  title: Developer Hub
---

# Developer Hub

The [LeiOS Developer Hub](https://hub.leios.dev){target="_blank"} is where packages for the LeiOS
repository are published, browsed and moderated. Anyone can browse it. To publish, you need an
account.

## Browse without an account

| Page | What you find there |
| --- | --- |
| [Explore](https://hub.leios.dev/explore){target="_blank"} | Every package in the LeiOS repository. Search by name, sort by name, newest or recently updated, and filter by channel (`stable` or `testing`). |
| Package page | The install command (`sudo apt install <publisher>.<package>`), the current `stable` and `testing` versions per architecture, the release history with changelogs, and the publisher. |
| [Publishers](https://hub.leios.dev/publishers){target="_blank"} | Everyone who publishes for LeiOS. A publisher page shows its description, packages, maintainer contact and public members. |
| [Releases](https://hub.leios.dev/releases){target="_blank"} | The LeiOS releases with their changelogs. |

## Create an account

Sign up at [hub.leios.dev/auth/signup](https://hub.leios.dev/auth/signup){target="_blank"}:

| Field | Rules |
| --- | --- |
| Username | 5 to 40 characters: lowercase letters, digits, dots, underscores and hyphens, starting with a letter or digit. No two dots or hyphens in a row. |
| Display name | Up to 64 characters. |
| Email address | You confirm it through a link the Hub emails you. |
| Password | 8 to 50 characters, with an uppercase letter, a lowercase letter, a digit and a special character. |

You can log in right away. Two things unlock only after you confirm your email address: **creating
publishers** and **sending reports**. The confirmation link is valid for 24 hours. If it expired or
didn't arrive, check your spam folder and resend it from the notice on your dashboard.

If you change your email address later in **Settings**, you confirm the new address the same way.

::note
The Hub can close signup, for example while email delivery is unavailable. The signup page then
says **Signup is currently closed**. You can still browse every package. Ask on
[Discord](https://discord.gg/8YC5BXjCc5){target="_blank"} if you need an account.
::

## Publishers

A **publisher** owns packages. It can be a person, a team or an organization, and its name is the
first part of every package name, for example `acme` in `acme.hello`.

### Create a publisher

Open **Publishers → New Publisher** on the dashboard. You need a confirmed email address.

| Field | Rules |
| --- | --- |
| Publisher Name | 2 to 50 characters: lowercase letters, digits and hyphens, starting and ending with a letter or digit. It can't be changed later. |
| Display Name | Up to 200 characters. |
| Description | Up to 500 characters. |
| Homepage URL | A valid URL. |
| Maintainer Contact Name and Email | The person or team responsible for the packages. See below. |

These names are reserved and can't be used: `admin`, `user`, `users`, `package`, `packages`,
`release`, `releases`, `os`, `api`, `dashboard`, `home`, `settings`, `login`, `logout`, `register`,
`auth`, `static`, `public`, `new`, `edit`, `delete`, `update`, `create`, `list`, `all`, `latest`,
`stable`, `testing`, `beta`, `alpha`, `dev`, `development`, `developer`, `prod`, `production`,
`root`, `sys`, `system`, `leicraft` and `leios`.

### The maintainer contact

The maintainer contact is public: it appears on the publisher page. It is also what every `.deb` the
publisher uploads must carry in its `Maintainer` field, exactly as `Name <email>`. See
[Publishing Packages](/docs/developers/publishing-packages#the-maintainer-field).

### Verified publishers

LeiOS admins can mark a publisher as **verified**, for example an official or trusted publisher.
Verified publishers get a badge next to their name on the Hub, with the date of verification.
Publishers can't verify themselves.

### Ownership

The account that creates a publisher becomes its **owner** and an Admin member. The owner can do
everything in the publisher and is the only one who can:

- add, change or remove members with the Admin role,
- **transfer ownership** (**Danger Zone → Transfer Ownership**): pick another user, who becomes the
  owner and an Admin member,
- **delete the publisher** (**Danger Zone → Delete Publisher**), which only works once it has no
  packages.

The owner can't be removed from the publisher. You can't delete your account while you own a
publisher: transfer or delete it first.

## Members and roles

Open the publisher's **Members** tab to add people. Search for their username or display name and
pick a role. Members are listed on the public publisher page with their role.

| What you can do | Viewer | Developer | Maintainer | Admin | Owner |
| --- | :-: | :-: | :-: | :-: | :-: |
| See the publisher's hidden packages | ✓ | ✓ | ✓ | ✓ | ✓ |
| Create packages | | ✓ | ✓ | ✓ | ✓ |
| Create releases and upload builds | | ✓ | ✓ | ✓ | ✓ |
| Request stable promotion | | ✓ | ✓ | ✓ | ✓ |
| Edit packages and release changelogs | | | ✓ | ✓ | ✓ |
| Delete packages and releases | | | | ✓ | ✓ |
| Edit the publisher | | | | ✓ | ✓ |
| Manage members and package roles | | | | ✓ | ✓ |
| Transfer ownership, delete the publisher | | | | | ✓ |

Admins manage members below their own role: they can add, change and remove Maintainers, Developers
and Viewers, but not other Admins.

### Package roles

A package's **Roles** tab gives someone a role for that one package. Use it to let an outside
contributor publish releases of a single package, or to give a member more rights on one package.

- The package role must be higher than the person's role in the publisher.
- People who aren't members of the publisher can get any role.
- The higher of the two roles applies.
- Publisher Admins and the owner manage package roles.

## Packages

A **package** belongs to a publisher. Its full name is `<publisher>.<package>`, for example
`acme.hello`. The full name is the Debian package name: it is the `Package` field inside your `.deb`
and the name users install with `sudo apt install acme.hello`.

Package names are 2 to 200 characters long and can use lowercase letters, digits, hyphens and dots.
They can't be changed after creation.

Packages marked **System package** are maintained by the LeiOS team and can't be changed through the
Hub.

### Hidden and deprecated packages

LeiOS admins moderate the Hub and can flag a package:

| Flag | What users see |
| --- | --- |
| **Hidden** | The package disappears from the Hub: Explore, search, the publisher page and its package page. LeiOS admins, the publisher's owner and members, and people with a package role can still open it and find it on their dashboard. |
| **Deprecated** | The package stays listed with a **Deprecated** badge. Its page shows a warning with the admin's note, or "It is no longer recommended and may be removed from the repositories in the future." |

Both flags only change the Hub. A hidden or deprecated package stays in the APT repository, so
systems that installed it keep it, and `apt` can still install it. Only admins can set or remove
the flags.

## Releases

A **release** is one version of a package, for example `1.2.0-1`. It has a changelog and up to one
build per architecture: `amd64`, `arm64`, or a single `all` build for architecture-independent
packages. Uploads go to the `testing` suite; LeiOS admins promote releases to `stable` on request.
[Publishing Packages](/docs/developers/publishing-packages) covers the whole flow.

## Reporting a package or publisher

Every package and publisher page has a **Report** button. Use it for malware, spam, copyright or
license violations, inappropriate content, packages that are broken or don't install,
impersonation, or anything else the moderators should look at.

- You need to be logged in with a confirmed email address.
- Pick a reason and, optionally, add details of up to 2,000 characters: links, affected versions,
  what you noticed.
- Only the Hub's moderators see reports. They resolve or dismiss them.
- You can send up to 10 reports per hour.

For a bug in a package, contact the publisher through the maintainer contact on its publisher page.
See [Reporting Bugs](/docs/community/reporting-bugs).

## API keys

Scripts and CI pipelines sign in with an API key instead of your password. Open **API Keys → New API
Key** on the dashboard, enter a description and pick an expiration: 7, 30, 90, 180 or 365 days, or
**No Expiration**. The key is shown once, so copy it right away. Delete a key on the same page to
revoke it.

::warning
An API key can do everything your account can. There are no read-only keys. Store keys like
passwords and prefer short expirations.
::

## The Repository API

Everything the Hub does goes through the LeiOS Repository API, so you can automate it.

| | |
| --- | --- |
| **Base URL** | `https://api.leios.dev/v1` |
| **Interactive reference** | [api.leios.dev/docs/v1](https://api.leios.dev/docs/v1){target="_blank"} |
| **Authentication** | `Authorization: Bearer <API key>` |

[Automating Releases](/docs/developers/automating-releases) shows how to publish from scripts and CI.
