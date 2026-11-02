---
title: "Customization"
description: "Change the look of LeiOS or restore it, tune memory and performance for older computers, and adjust language and formats."
navigation:
  title: Customization
---

# Customization

KDE Plasma lets you change almost everything about how LeiOS looks and behaves. LeiOS sets its own
defaults on top, but every one of them is only a default: whatever you change in System Settings
wins.

## The LeiOS look

The LeiOS look comes from a set of theme packages, all installed by the metapackage
`leios.theme.aio`:

| Package | What it sets |
| --- | --- |
| `leios.theme.kde-plasma.theme` | The LeiOS global theme with the LeiOS panel layout, the dark Plasma style, window decorations and icons (based on Aretha Dark), the LeiOS colors and the launcher logo. |
| `leios.theme.fonts` | Geist and Geist Mono as the interface and monospace fonts, and Hack Nerd Font for the terminal. |
| `leios.theme.wallpapers` | The LeiOS wallpapers, with and without logo. |
| `leios.theme.sddm-theme` | The login screen, matching the lock screen. |
| `leios.theme.plymouth-theme` | The boot splash. |
| `leios.theme.grub-theme` | The boot menu. |
| `leios.theme.kde-plasma.konsole` | Konsole's LeiOS profile: Hack Nerd Font and a translucent color scheme. |
| `leios.theme.kde-plasma.dolphin` | Larger icons in Dolphin. |
| `leios.theme.fastfetch-theme` | The LeiOS logo and layout in `fastfetch`. |
| `leios.theme.plasmoids.digitalclock` | The LeiOS digital clock in the panel. |

### Change the look

Open **System Settings → Colors & Themes**:

- **Global Theme** changes everything at once. Choose **Breeze** for KDE's standard look, or a
  theme from **Get New…**.
- **Colors**, **Plasma Style**, **Window Decorations**, **Icons** and **Cursors** change one part
  each.
- **Login Screen (SDDM)** and **Boot Splash Screen** change the start-up screens.

Fonts are in **System Settings → Text & Fonts**, wallpapers in the desktop's right-click menu
(**Desktop and Wallpaper**).

### Restore the LeiOS look

Select the **LeiOS** global theme in **System Settings → Colors & Themes → Global Theme**. If
you removed theme packages, install them again:

```bash
sudo apt install leios.theme.aio
```

## Performance

### Compressed memory (zram)

Every LeiOS system uses **zram**: part of your RAM becomes a compressed swap area. When memory
gets tight, LeiOS compresses rarely used data in memory instead of writing it to the much slower
disk. It is set up by `leios.system.performance-tweaks.base`:

- zram swap of half your RAM, at most 8 GiB, compressed with zstd, used before any swap on disk;
- `vm.swappiness = 100` and `vm.page-cluster = 0`, which suit swap in memory.

See it at work:

```bash
zramctl
swapon --show
```

### Computers with little memory

For computers with around **4 GB of RAM**, install the low-memory package:

```bash
sudo apt install leios.system.performance-tweaks.lowend
```

It adds to the defaults above:

- zram swap as large as your RAM, and `vm.swappiness = 150`;
- `vm.vfs_cache_pressure = 50`, so file system caches are kept longer;
- the kernel's thrashing prevention (Multi-Gen LRU), which keeps the desktop responsive when
  memory runs out;
- **earlyoom**, which closes the biggest memory hog before the whole system freezes.

Restart after installing it. To undo, remove the package and restart:

```bash
sudo apt remove leios.system.performance-tweaks.lowend
```

### Your own settings

The LeiOS values are defaults only. Your own files take precedence:

- zram size and compression: `/etc/systemd/zram-generator.conf`, or a file in
  `/etc/systemd/zram-generator.conf.d/`;
- kernel settings such as swappiness: a file in `/etc/sysctl.d/`.

For example, to use a zram device as large as your RAM:

```ini [/etc/systemd/zram-generator.conf.d/90-local.conf]
[zram0]
zram-size = ram
```

### Other tips

- **Power profiles:** choose **Performance** in the battery menu for maximum speed, **Power Save**
  for battery life.
- **Fewer start-up apps:** see *System Settings → Autostart*.
- **Fewer effects:** *System Settings → General Behavior* has a slider for animation speed;
  setting it to *Instant* helps on slow graphics.
- **Find what's slow:** **System Monitor** (:kbd{value="Ctrl"} + :kbd{value="Esc"}) shows what
  uses your processor and memory.

## Language and formats

Change the system language and the formats for dates, numbers, currency and measurements in
**System Settings → Region & Language**. Log out and back in afterwards.

LeiOS ships an extra format, **English (Germany)** (`en_DE.UTF-8`, from the package
`leios.system.locales.en-de`): English text with German dates, numbers, currency and paper size.
Choose it as the format, or set it in the terminal:

```bash
sudo update-locale LC_TIME=en_DE.UTF-8 LC_NUMERIC=en_DE.UTF-8 LC_MONETARY=en_DE.UTF-8 LC_PAPER=en_DE.UTF-8 LC_MEASUREMENT=en_DE.UTF-8
```

## The terminal

Konsole uses the LeiOS profile by default. Change colors, font and behavior in Konsole under
**Settings → Configure Konsole → Profiles**. `fastfetch` reads your own configuration from
`~/.config/fastfetch/config.jsonc` if it exists; start with `fastfetch --gen-config`.
