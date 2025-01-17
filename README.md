# Ravenswatch.pro

A fan-made website for the game [Ravenswatch](https://ravenswatch.com), providing an ultimate resource for builds, hero information, and game mechanics. Built with Next.js and Tailwind CSS.

## About Ravenswatch

Ravenswatch is a top-down action roguelike game developed by Passtech Games and published by Nacon. The game features:
- Solo play or online co-op with up to 4 players
- Set in Reverie, a dark fantasy world built on folklore and fairy tales
- Diverse roster of heroes with unique abilities and playstyles
- Deep build customization through talents and magical objects

## About This Project

Ravenswatch.pro is maintained by a small group of friends from Australia, working on this in our spare time. Our goal is to create a comprehensive resource for the Ravenswatch community.
This is partially because of the problems associated with the two larger platforms that the community exists on currently. The first being the official discord server, which is not a great place to store information, and the second being the wiki, which is a fandom site ([which is bad](https://www.koopatv.org/2022/10/why-people-dont-like-fandom-wikis.html)) and is not always up to date or accurate. We hope to provide a better alternative to these two platforms.

### Features

- 📖 Detailed hero information and abilities
- 🎮 Community-contributed builds
- ⚔️ Magical objects database
- 🔧 Talent information
- 🌙 Dark/Light theme support


## 🌐 Website

You can find the livesite at [ravenswatch.pro](https://ravenswatch.pro). It is currently a work in progress, so please be patient with us as we continue to add more content and features. It is also run out of backyard in Australia, so please be patient with us if the site is slow to load. If the site gains traction, we will look at hosting on a provider. Currently we are looking at Hetzner, as they seem to have an agressively priced VPS offering. We will have donation links in future, to help with the cost of hosting. We don't run ads and we will never run ads. Ads are bad.

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- pnpm

### Installation

1. Clone the repository
```bash
git clone https://github.com/R-Den/ravenswatch.pro.git
cd ravenswatch.pro
```

2. Install dependencies
```bash
pnpm install
```

3. Start the development server
```bash
pnpm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Contributing

We welcome contributions from the community! Here's how you can help:

### Adding or Updating Game Information

Our game data is stored in TypeScript files under the `lib` directory:
- `lib/heroes/` - Hero information
- `lib/abilities/` - Hero abilities
- `lib/talents/` - Hero talents
- `lib/magical_objects/` - Magical objects information
- `lib/builds/` - Hero-specific and general builds

To contribute:
1. Fork the repository
2. Create a new branch for your changes
3. Make your updates to the relevant TypeScript files
4. Submit a pull request

### Reporting Issues

Found a bug or have a suggestion? Would like to contribute builds without coding? Please create an issue on GitHub:
1. Go to the [Issues](https://github.com/R-Den/ravenswatch.pro/issues) page
2. Click "New Issue"
3. Choose the appropriate template (WIP)
4. Provide as much detail as possible

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- TypeScript - Type safety and vanilla JS sux

## License

This project is licensed under the GPLv2 License - see the LICENSE file for details.

## Team

- **WhatTheShuck** - Lead Developer
- **R-Den** - Developer
- **Miet** - Project Manager and Horticulturalist
- **Jinariadne** - Designer

## Acknowledgments

- Passtech Games for creating Ravenswatch 💜 WhatTheShuck's favourite game
- The Ravenswatch community
- All contributors to this project

---

*This is a fan project and is not affiliated with Passtech Games or Nacon.*
