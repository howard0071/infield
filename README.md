# Infield UI

Shadcn/ui component showcase — all 56 components rendered in a sidebar layout.

## Run dev

```bash
pnpm install
pnpm dev
```

Open http://localhost:5173

## Project structure

```
infield/
├── apps/web/          # Vite + React app
│   └── src/App.tsx    # Full component showcase
└── packages/ui/       # shadcn/ui component library
    └── src/components/ # 56 component files
```

## Components included

All shadcn/ui components from the `new-york` preset:

**Navigation:** Accordion, Breadcrumb, Collapsible, Navigation Menu, Tabs  
**Forms:** Checkbox, DatePicker, Input, InputGroup, InputOTP, Label, NativeSelect, RadioGroup, Select, Switch, Textarea, Toggle, ToggleGroup  
**Data Display:** Avatar, Badge, Calendar, Card, Divider, Item, Kbd, Progress, Skeleton, Spinner, Table  
**Feedback:** Alert, AlertDialog, Toast  
**Layout:** AspectRatio, Resizable, ScrollArea, Separator  
**Overlays:** Dialog, Drawer, DropdownMenu, HoverCard, Menubar, Popover, Sheet, Tooltip  
**Advanced:** Carousel, Chart, Combobox, Command, ContextMenu, Empty, Field, Form, Pagination, Sidebar, Sonner

## Build

```bash
pnpm build
```

## Tech stack

- React 19 + TypeScript
- Vite 6
- Tailwind CSS v4
- shadcn/ui `new-york` style
- Monorepo (pnpm + Turbo)