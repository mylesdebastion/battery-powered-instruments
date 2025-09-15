# Battery Powered Instruments Jam Session

A monthly electronic music gathering at CymaSpace's Woodstock Café in Portland

🎹 **Live Event Info:** https://battery-powered-instruments.vercel.app

## What is BPIJ?

The Battery Powered Instruments Jam (BPIJ) is a monthly community gathering where electronic musicians connect their portable gear through a shared mixer for 90 minutes of collaborative sound exploration. Founded by Myles de Bastion at CymaSpace, this event celebrates experimental electronic music in an accessible, welcoming environment.

## Quick Links

- **Event Website:** https://battery-powered-instruments.vercel.app
- **Support on Patreon:** https://www.patreon.com/cymaspace
- **CymaSpace:** https://cymaspace.org

## Event Details

📅 **When:** Oct 1st Wednesday at noon (90 minutes)  
📍 **Where:** Woodstock Café (operated by CymaSpace)  
💵 **Cost:** Sliding scale $10 (Free for Patreon members)  
🎧 **Bring:** Your battery-powered instrument + headphones  

## About This Repository

This repository contains the web presence for BPIJ, including:
- Interactive event poster (responsive HTML)
- Social media export tools for Instagram
- Event documentation and budget planning

### Project Structure

```
battery-powered-instruments/
├── bpij-poster.html        # Main event poster (responsive design)
├── index.html              # Vercel deployment version
├── bpij_graphic.png        # Event logo/graphic
├── export-poster.js        # Social media export script
├── proposed_budget.md      # Event budget planning
├── EVENT_OVERVIEW.md       # Public event description
└── TECHNICAL_DOCS.md       # Technical documentation
```

## For Musicians & Attendees

### What to Bring
- Battery-powered synthesizers, grooveboxes, drum machines
- DIY electronic instruments
- Headphones for monitoring
- Creative energy!

### What We Provide
- Shared mixer for collaboration
- Haptic devices (sometimes) for sensory experience
- Welcoming community space
- $1 off café drinks

## For Website Developer

### Quick Start

1. Clone the repository:
```bash
git clone https://github.com/mylesdebastion/battery-powered-instruments.git
cd battery-powered-instruments
```

2. Install dependencies (for social media export):
```bash
npm install
npm run install-browser
```

3. View the poster:
- Open `bpij-poster.html` in your browser
- Or visit https://battery-powered-instruments.vercel.app

### Export for Social Media

Generate Instagram-ready images:
```bash
npm run export
```

This creates:
- `bpij-poster-[timestamp].png` - 1080x1920px (Stories/Reels)
- `bpij-poster-square-[timestamp].png` - 1080x1080px (Feed)

## Contributing

We welcome contributions! Whether you're interested in:
- Improving the web design
- Adding new features
- Helping with event organization
- Creating promotional materials

Feel free to open an issue or submit a pull request.

## About CymaSpace

CymaSpace is a 501(c)3 nonprofit dedicated to making arts accessible to all. Woodstock Café serves as our community hub for creative gatherings and artistic expression. Through grants and partnerships, we keep programs like BPIJ accessible to everyone.

## Connect

- **Instagram:** #BatteryPoweredInstruments #BPIJ #CymaSpace
- **Patreon:** https://www.patreon.com/cymaspace
- **Website:** https://cymaspace.org

---

*Join us for the next jam session and be part of Portland's electronic music community!*