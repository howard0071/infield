import * as React from "react"

import {
  AreaChart,
  BarChart,
  Bar,
  Area,
} from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@workspace/ui/components/chart"
import {
  ButtonGroup,
  ButtonGroupButton,
} from "@workspace/ui/components/button-group"
import { InputOTP, InputOTPGroup, InputOTPSlot, InputOTPSeparator } from "@workspace/ui/components/input-otp"
import {
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
} from "@workspace/ui/components/form"

import { Separator } from "@workspace/ui/components/separator"
import {
  Sidebar,
  SidebarContent,
  
  SidebarGroup,
  
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  
  SidebarMenuButton,
  SidebarMenuItem,
  
  SidebarProvider,
  SidebarRail,
  
  SidebarTrigger,
  
} from "@workspace/ui/components/sidebar"
import { DirectionProvider } from "@workspace/ui/components/direction"
import { Button } from "@workspace/ui/components/button"
import { Badge } from "@workspace/ui/components/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardAction,
  CardFooter,
} from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Textarea } from "@workspace/ui/components/textarea"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Switch } from "@workspace/ui/components/switch"
import { Slider } from "@workspace/ui/components/slider"
import { RadioGroup, RadioGroupItem } from "@workspace/ui/components/radio-group"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "@workspace/ui/components/select"

import { Toggle } from "@workspace/ui/components/toggle"
import { ToggleGroup, ToggleGroupItem } from "@workspace/ui/components/toggle-group"
import { Progress } from "@workspace/ui/components/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@workspace/ui/components/accordion"
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@workspace/ui/components/collapsible"
import { ScrollArea } from "@workspace/ui/components/scroll-area"

import {
  ResizablePanel,
  ResizablePanelGroup,
  ResizableHandle,
} from "@workspace/ui/components/resizable"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  
  DialogClose,
} from "@workspace/ui/components/dialog"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@workspace/ui/components/drawer"
import {
  Sheet,
  
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
  SheetClose,
} from "@workspace/ui/components/sheet"
import { Popover, PopoverTrigger, PopoverContent } from "@workspace/ui/components/popover"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@workspace/ui/components/hover-card"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  
} from "@workspace/ui/components/alert-dialog"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableCaption,
} from "@workspace/ui/components/table"
import { Avatar, AvatarImage, AvatarFallback, AvatarBadge, AvatarGroup, AvatarGroupCount } from "@workspace/ui/components/avatar"
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  
} from "@workspace/ui/components/breadcrumb"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis,
} from "@workspace/ui/components/pagination"
import { Skeleton } from "@workspace/ui/components/skeleton"
import { Kbd, KbdGroup } from "@workspace/ui/components/kbd"
import { Alert, AlertTitle, AlertDescription } from "@workspace/ui/components/alert"
import { AspectRatio } from "@workspace/ui/components/aspect-ratio"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@workspace/ui/components/carousel"
import { Spinner } from "@workspace/ui/components/spinner"
import { Empty, EmptyHeader, EmptyTitle, EmptyDescription, EmptyContent, EmptyMedia } from "@workspace/ui/components/empty"
import {
  Field,
  FieldLabel,
  
  FieldError,
  
  FieldLegend,
  FieldSeparator,
  
  FieldContent,
  
} from "@workspace/ui/components/field"
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from "@workspace/ui/components/input-group"
import { Item, ItemMedia, ItemContent, ItemActions, ItemTitle, ItemDescription, ItemHeader } from "@workspace/ui/components/item"
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@workspace/ui/components/navigation-menu"
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
  MenubarLabel,
  
  MenubarCheckboxItem,
  MenubarRadioGroup,
  MenubarRadioItem,
  MenubarSub,
  MenubarSubTrigger,
  MenubarSubContent,
} from "@workspace/ui/components/menubar"
import {
  ContextMenu,
  ContextMenuTrigger,
  ContextMenuContent,
  ContextMenuItem,
  
  
  
  ContextMenuSeparator,
  
  
  ContextMenuSub,
  ContextMenuSubTrigger,
  ContextMenuSubContent,
} from "@workspace/ui/components/context-menu"
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  
  
  
  
} from "@workspace/ui/components/dropdown-menu"
import {
  
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandShortcut,
  CommandSeparator,
} from "@workspace/ui/components/command"
import { Calendar } from "@workspace/ui/components/calendar"
import { NativeSelect,  NativeSelectOption } from "@workspace/ui/components/native-select"
import { Toaster } from "@workspace/ui/components/sonner"
import { GalleryPage } from "./components/GalleryPage"
import { toast } from "sonner"
import {
  Home,
    Users,
    FileText,
    BarChart3,
    Mail,
    Bell,
    Settings,
    ChevronDown,
    Image,
    Plus,
    Copy,
    Download,
    Edit3,
    Trash2,
    ArrowLeft,
    ArrowRight,

    Menu,
    MoreHorizontal,
  } from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────
type Section = { id: string; label: string; icon: React.ComponentType<{ className?: string }> }

// ─── Sidebar sections ─────────────────────────────────────────────────────────
const sections: Section[] = [
  { id: "navigation", label: "Navigation", icon: Home },
  { id: "gallery", label: "Gallery", icon: Image },
  { id: "forms", label: "Forms", icon: FileText },
  { id: "data", label: "Data Display", icon: BarChart3 },
  { id: "feedback", label: "Feedback", icon: Bell },
  { id: "layout", label: "Layout", icon: Menu },
  { id: "overlays", label: "Overlays", icon: Mail },
  { id: "advanced", label: "Advanced", icon: Settings },
]

// ─── Sample data ──────────────────────────────────────────────────────────────
const chartData = [
  { month: "Jan", visitors: 1860, sales: 800 },
  { month: "Feb", visitors: 2450, sales: 1200 },
  { month: "Mar", visitors: 3120, sales: 1900 },
  { month: "Apr", visitors: 2400, sales: 1400 },
  { month: "May", visitors: 3920, sales: 2100 },
  { month: "Jun", visitors: 4200, sales: 2400 },
]

const chartConfig = {
  visitors: { label: "Visitors", color: "var(--primary)" },
  sales: { label: "Sales", color: "var(--accent)" },
} as const

// ─── Showcase components ──────────────────────────────────────────────────────

function ShowcaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h3 className="text-lg font-semibold mb-4 text-foreground">{title}</h3>
      <div className="flex flex-wrap gap-4 items-start">{children}</div>
    </div>
  )
}

function DemoCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-lg border bg-background p-4 min-h-[80px] flex items-center justify-center flex-wrap gap-2 ${className}`}>
      {children}
    </div>
  )
}

// ─── Navigation section ────────────────────────────────────────────────────────
function NavigationSection() {
  const [openAlertDialog, setOpenAlertDialog] = React.useState(false)
  const [openCommand, setOpenCommand] = React.useState(false)
  const [openDrawer, setOpenDrawer] = React.useState(false)

  return (
    <div className="space-y-8">
      <ShowcaseSection title="Tabs">
        <Tabs defaultValue="tab1" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="tab1">Tab 1</TabsTrigger>
            <TabsTrigger value="tab2">Tab 2</TabsTrigger>
            <TabsTrigger value="tab3">Tab 3</TabsTrigger>
          </TabsList>
          <TabsContent value="tab1"><p className="text-sm text-muted-foreground">Content for Tab 1</p></TabsContent>
          <TabsContent value="tab2"><p className="text-sm text-muted-foreground">Content for Tab 2</p></TabsContent>
          <TabsContent value="tab3"><p className="text-sm text-muted-foreground">Content for Tab 3</p></TabsContent>
        </Tabs>
      </ShowcaseSection>

      <ShowcaseSection title="Breadcrumb">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem><BreadcrumbLink href="#">Home</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem><BreadcrumbLink href="#">Components</BreadcrumbLink></BreadcrumbItem>
            <BreadcrumbSeparator>/</BreadcrumbSeparator>
            <BreadcrumbItem><BreadcrumbPage>Breadcrumb</BreadcrumbPage></BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </ShowcaseSection>

      <ShowcaseSection title="Pagination">
        <Pagination>
          <PaginationContent>
            <PaginationItem><PaginationPrevious href="#" /></PaginationItem>
            <PaginationItem><PaginationLink href="#">1</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#" isActive>2</PaginationLink></PaginationItem>
            <PaginationItem><PaginationLink href="#">3</PaginationLink></PaginationItem>
            <PaginationItem><PaginationEllipsis /></PaginationItem>
            <PaginationItem><PaginationNext href="#" /></PaginationItem>
          </PaginationContent>
        </Pagination>
      </ShowcaseSection>

      <ShowcaseSection title="Menubar">
        <Menubar className="w-[400px]">
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>New Tab <Kbd>⌘T</Kbd></MenubarItem>
              <MenubarItem>New Window <Kbd>⌘N</Kbd></MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Export...</MenubarItem>
              <MenubarSeparator />
              <MenubarSub>
                <MenubarSubTrigger>Share</MenubarSubTrigger>
                <MenubarSubContent>
                  <MenubarItem>Email link</MenubarItem>
                  <MenubarItem>Messages</MenubarItem>
                </MenubarSubContent>
              </MenubarSub>
              <MenubarSeparator />
              <MenubarCheckboxItem checked>Show hidden files</MenubarCheckboxItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Edit</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Undo <Kbd>⌘Z</Kbd></MenubarItem>
              <MenubarItem>Redo <Kbd>⇧⌘Z</Kbd></MenubarItem>
              <MenubarSeparator />
              <MenubarRadioGroup value="case">
                <MenubarLabel>Case</MenubarLabel>
                <MenubarRadioItem value="lower">lowercase</MenubarRadioItem>
                <MenubarRadioItem value="upper">UPPERCASE</MenubarRadioItem>
              </MenubarRadioGroup>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>View</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Reload <Kbd>⌘R</Kbd></MenubarItem>
              <MenubarItem>Toggle Fullscreen</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </ShowcaseSection>

      <ShowcaseSection title="Navigation Menu">
        <NavigationMenu className="w-[400px]">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Getting Started</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-sm font-medium">Introduction</div>
                    <div className="text-sm text-muted-foreground">Re-usable components built with Radix UI.</div>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Components</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-4">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Button</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Card</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Dialog</NavigationMenuLink>
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>Input</NavigationMenuLink>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </ShowcaseSection>

      <ShowcaseSection title="Command (Command Palette)">
        <Button variant="outline" onClick={() => setOpenCommand(true)}>Open Command</Button>
        <CommandDialog open={openCommand} onOpenChange={setOpenCommand}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem><FileText className="mr-2 h-4 w-4" /><span>Documents</span><CommandShortcut>⌘D</CommandShortcut></CommandItem>
              <CommandItem><Users className="mr-2 h-4 w-4" /><span>Team</span></CommandItem>
              <CommandItem><BarChart3 className="mr-2 h-4 w-4" /><span>Analytics</span></CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Actions">
              <CommandItem><Plus className="mr-2 h-4 w-4" /><span>New Item</span></CommandItem>
              <CommandItem><Download className="mr-2 h-4 w-4" /><span>Export</span></CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </ShowcaseSection>

      <ShowcaseSection title="Alert Dialog">
        <Button variant="destructive" onClick={() => setOpenAlertDialog(true)}>Delete Item</Button>
        <AlertDialog open={openAlertDialog} onOpenChange={setOpenAlertDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you sure?</AlertDialogTitle>
              <AlertDialogDescription>This action cannot be undone. This will permanently delete the item.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={() => setOpenAlertDialog(false)}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </ShowcaseSection>

      <ShowcaseSection title="Drawer">
        <Drawer open={openDrawer} onOpenChange={setOpenDrawer}>
          <DrawerTrigger asChild><Button variant="outline">Open Drawer</Button></DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>Edit Profile</DrawerTitle>
              <DrawerDescription>Make changes to your profile here.</DrawerDescription>
            </DrawerHeader>
            <div className="p-4 space-y-4">
              <div className="space-y-2"><Label>Name</Label><Input placeholder="Your name" /></div>
              <div className="space-y-2"><Label>Email</Label><Input placeholder="your@email.com" /></div>
            </div>
            <DrawerFooter>
              <DrawerClose asChild><Button variant="outline">Cancel</Button></DrawerClose>
              <Button>Save Changes</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </ShowcaseSection>
    </div>
  )
}

// ─── Forms section ────────────────────────────────────────────────────────────
function FormsSection() {
  return (
    <div className="space-y-8">
      <ShowcaseSection title="Input">
        <DemoCard className="w-[300px]">
          <Input placeholder="Enter your email" className="max-w-xs" />
        </DemoCard>
        <DemoCard className="w-[300px]">
          <Input disabled placeholder="Disabled input" className="max-w-xs" />
        </DemoCard>
        <DemoCard className="w-[300px]">
          <Input placeholder="With icon" className="max-w-xs pl-9" />
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="InputGroup">
        <DemoCard className="w-[300px]">
          <InputGroup className="max-w-xs">
            <InputGroupAddon>@</InputGroupAddon>
            <InputGroupInput placeholder="Username" />
          </InputGroup>
        </DemoCard>
        <DemoCard className="w-[300px]">
          <InputGroup className="max-w-xs">
            <InputGroupButton>Search</InputGroupButton>
            <InputGroupInput placeholder="Search..." />
          </InputGroup>
        </DemoCard>
        <DemoCard className="w-[300px]">
          <InputGroup className="max-w-xs">
            <InputGroupAddon>$</InputGroupAddon>
            <InputGroupInput placeholder="0.00" type="number" />
            <InputGroupAddon>.00</InputGroupAddon>
          </InputGroup>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Textarea">
        <DemoCard className="w-[400px]">
          <Textarea placeholder="Type your message here..." className="max-w-sm min-h-[80px]" />
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Select">
        <DemoCard className="w-[200px]">
          <Select>
            <SelectTrigger><SelectValue placeholder="Select option" /></SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="orange">Orange</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>Vegetables</SelectLabel>
                <SelectItem value="carrot">Carrot</SelectItem>
                <SelectItem value="broccoli">Broccoli</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="NativeSelect">
        <DemoCard className="w-[200px]">
          <NativeSelect className="w-full">
            <NativeSelectOption value="apple">Apple</NativeSelectOption>
            <NativeSelectOption value="banana">Banana</NativeSelectOption>
            <NativeSelectOption value="orange">Orange</NativeSelectOption>
          </NativeSelect>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Checkbox">
        <DemoCard className="w-[200px]">
          <div className="flex items-center gap-2">
            <Checkbox id="terms" />
            <Label htmlFor="terms">Accept terms</Label>
          </div>
          <div className="flex items-center gap-2">
            <Checkbox id="news" disabled />
            <Label htmlFor="news">Subscribe to newsletter</Label>
          </div>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="RadioGroup">
        <DemoCard className="w-[200px]">
          <RadioGroup defaultValue="option-1">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-1" id="r1" />
              <Label htmlFor="r1">Option 1</Label>
            </div>
            <div className="flex items-center gap-2">
              <RadioGroupItem value="option-2" id="r2" />
              <Label htmlFor="r2">Option 2</Label>
            </div>
          </RadioGroup>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Switch">
        <DemoCard className="w-[200px]">
          <div className="flex items-center gap-3">
            <Switch id="airplane" />
            <Label htmlFor="airplane">Airplane mode</Label>
          </div>
          <div className="flex items-center gap-3">
            <Switch id="wifi" defaultChecked />
            <Label htmlFor="wifi">Wi-Fi</Label>
          </div>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Slider">
        <DemoCard className="w-[300px]">
          <Slider defaultValue={[50]} max={100} step={1} className="w-full max-w-xs" />
        </DemoCard>
        <DemoCard className="w-[300px]">
          <Slider defaultValue={[20, 80]} max={100} step={1} className="w-full max-w-xs" />
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Toggle">
        <DemoCard>
          <Toggle aria-label="Toggle bold"><strong>B</strong></Toggle>
          <Toggle aria-label="Toggle italic" defaultPressed><em>I</em></Toggle>
          <Toggle aria-label="Toggle underline"><u>U</u></Toggle>
          <Toggle aria-label="Toggle disabled" disabled>Disabled</Toggle>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="ToggleGroup">
        <DemoCard>
          <ToggleGroup type="multiple" defaultValue={["bold", "italic"]}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold"><strong>B</strong></ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic"><em>I</em></ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline"><u>U</u></ToggleGroupItem>
          </ToggleGroup>
        </DemoCard>
        <DemoCard>
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="left" aria-label="Left align"><ArrowLeft className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Center align"><Menu className="h-4 w-4" /></ToggleGroupItem>
            <ToggleGroupItem value="right" aria-label="Right align"><ArrowRight className="h-4 w-4" /></ToggleGroupItem>
          </ToggleGroup>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="InputOTP">
        <DemoCard>
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Form + Field">
        <DemoCard className="w-[400px]">

            <Field>
              <FormLabel>Email</FormLabel>
              <FormControl><Input placeholder="email@example.com" type="email" /></FormControl>
              <FormDescription>We'll never share your email.</FormDescription>
              <FormMessage />
            </Field>
            <Field className="mt-3">
              <FormLabel>Message</FormLabel>
              <FormControl><Textarea placeholder="Your message..." className="min-h-[60px]" /></FormControl>
              <FormMessage />
            </Field>
            <Button className="mt-2" size="sm">Submit</Button>

        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="ButtonGroup">
        <DemoCard>
          <ButtonGroup>
            <ButtonGroupButton>Left</ButtonGroupButton>
            <ButtonGroupButton>Center</ButtonGroupButton>
            <ButtonGroupButton>Right</ButtonGroupButton>
          </ButtonGroup>
        </DemoCard>
        <DemoCard>
          <ButtonGroup orientation="vertical">
            <ButtonGroupButton>Top</ButtonGroupButton>
            <ButtonGroupButton>Middle</ButtonGroupButton>
            <ButtonGroupButton>Bottom</ButtonGroupButton>
          </ButtonGroup>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Calendar">
        <DemoCard>
          <Calendar className="rounded-md border" />
        </DemoCard>
      </ShowcaseSection>
    </div>
  )
}

// ─── Data Display section ──────────────────────────────────────────────────────
function DataSection() {


  return (
    <div className="space-y-8">
      <ShowcaseSection title="Card">
        <Card className="w-[320px]">
          <CardHeader>
            <CardTitle>Project Alpha</CardTitle>
            <CardDescription>Marketing campaign for Q3 2026</CardDescription>
            <CardAction><Button size="sm">View</Button></CardAction>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">Progress: 68% complete</p>
            <Progress value={68} className="mt-2" />
          </CardContent>
          <CardFooter className="text-xs text-muted-foreground">Updated 2 hours ago</CardFooter>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Badge">
        <DemoCard>
          <Badge variant="default">Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="destructive">Destructive</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="ghost">Ghost</Badge>
          <Badge variant="link">Link</Badge>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Table">
        <div className="rounded-md border w-full max-w-lg">
          <Table>
            <TableCaption>A list of recent invoices.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Invoice</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">INV-001</TableCell>
                <TableCell><Badge variant="default">Paid</Badge></TableCell>
                <TableCell className="text-right">$250.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV-002</TableCell>
                <TableCell><Badge variant="secondary">Pending</Badge></TableCell>
                <TableCell className="text-right">$150.00</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">INV-003</TableCell>
                <TableCell><Badge variant="destructive">Overdue</Badge></TableCell>
                <TableCell className="text-right">$350.00</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Avatar">
        <DemoCard>
          <Avatar><AvatarImage src="https://i.pravatar.cc/150?img=1" alt="John" /><AvatarFallback>JD</AvatarFallback></Avatar>
          <Avatar size="sm"><AvatarFallback>SM</AvatarFallback></Avatar>
          <Avatar size="lg"><AvatarFallback>LG</AvatarFallback></Avatar>
          <Avatar><AvatarFallback>AB</AvatarFallback><AvatarBadge>🟢</AvatarBadge></Avatar>
        </DemoCard>
        <DemoCard>
          <AvatarGroup>
            <Avatar><AvatarFallback>A</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>B</AvatarFallback></Avatar>
            <Avatar><AvatarFallback>C</AvatarFallback></Avatar>
            <AvatarGroupCount>+8</AvatarGroupCount>
          </AvatarGroup>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Progress">
        <DemoCard className="w-[300px] flex-col items-start">
          <Progress value={45} className="w-full" />
          <Progress value={80} className="w-full mt-2" />
          <Progress value={20} className="w-full mt-2" />
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Skeleton">
        <div className="space-y-3 w-[300px]">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
      </ShowcaseSection>

      <ShowcaseSection title="Kbd">
        <DemoCard>
          <Kbd>⌘</Kbd>
          <Kbd>⌘</Kbd>
          <Kbd>+</Kbd>
          <Kbd>N</Kbd>
          <KbdGroup>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </KbdGroup>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Chart (Area)">
        <Card className="w-full max-w-lg">
          <CardHeader><CardTitle>Traffic</CardTitle></CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <AreaChart data={chartData}>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Area dataKey="visitors" fill="var(--primary)" fillOpacity={0.4} stroke="var(--primary)" type="monotone" />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Chart (Bar)">
        <Card className="w-full max-w-lg">
          <CardHeader><CardTitle>Revenue</CardTitle></CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-64 w-full">
              <BarChart data={chartData}>
                <ChartTooltip content={<ChartTooltipContent />} />
                <ChartLegend content={<ChartLegendContent />} />
                <Bar dataKey="sales" fill="var(--accent)" />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </ShowcaseSection>

      <ShowcaseSection title="Aspect Ratio">
        <DemoCard>
          <AspectRatio ratio={16 / 9} className="bg-muted rounded-md w-48 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">16:9</span>
          </AspectRatio>
          <AspectRatio ratio={4 / 3} className="bg-muted rounded-md w-32 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">4:3</span>
          </AspectRatio>
          <AspectRatio ratio={1} className="bg-muted rounded-md w-20 flex items-center justify-center">
            <span className="text-muted-foreground text-sm">1:1</span>
          </AspectRatio>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Separator">
        <DemoCard className="flex-col w-[200px]">
          <div className="py-2 font-medium">Section Title</div>
          <Separator />
          <div className="py-2 text-sm text-muted-foreground">Content goes here</div>
          <Separator orientation="vertical" className="h-12 self-center mx-2" />
          <div className="py-2 text-sm text-muted-foreground">More content</div>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Spinner">
        <DemoCard>
          <Spinner />
          <Spinner />
          <Spinner />
        </DemoCard>
      </ShowcaseSection>
    </div>
  )
}

// ─── Feedback section ─────────────────────────────────────────────────────────
function FeedbackSection() {
  return (
    <div className="space-y-8">
      <ShowcaseSection title="Alert">
        <DemoCard className="w-[350px] flex-col items-start">
          <Alert>
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>This is a default alert message.</AlertDescription>
          </Alert>
          <Alert variant="destructive">
            <AlertTitle>Destructive</AlertTitle>
            <AlertDescription>Something went wrong. Please try again.</AlertDescription>
          </Alert>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Accordion">
        <Accordion type="single" collapsible className="w-full max-w-md">
          <AccordionItem value="item-1">
            <AccordionTrigger>What is shadcn/ui?</AccordionTrigger>
            <AccordionContent>shadcn/ui is a collection of re-usable components built with Radix UI and Tailwind CSS.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Is it accessible?</AccordionTrigger>
            <AccordionContent>Yes. All components are built with accessibility in mind.</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Can I customize it?</AccordionTrigger>
            <AccordionContent>Absolutely. The components are designed to be customized via Tailwind CSS.</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ShowcaseSection>

      <ShowcaseSection title="Collapsible">
        <Collapsible className="w-full max-w-md border rounded-md p-4">
          <div className="flex items-center justify-between">
            <span className="font-medium">@bobo published v2.0</span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="sm"><ChevronDown className="h-4 w-4" /></Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent>
            <p className="mt-2 text-sm text-muted-foreground">Changelog: New components, performance improvements, and bug fixes.</p>
          </CollapsibleContent>
        </Collapsible>
      </ShowcaseSection>

      <ShowcaseSection title="Toast (Sonner)">
        <DemoCard className="w-[300px]">
          <Button variant="outline" onClick={() => toast("Event created", { description: "Your event has been scheduled." })}>Show Toast</Button>
        </DemoCard>
      </ShowcaseSection>
    </div>
  )
}

// ─── Layout section ───────────────────────────────────────────────────────────
function LayoutSection() {
  return (
    <div className="space-y-8">
      <ShowcaseSection title="ScrollArea">
        <DemoCard className="w-[300px] h-[160px]">
          <ScrollArea className="h-full">
            <p className="text-sm leading-relaxed text-muted-foreground pb-4">
              This is a scrollable area. The scrollbar is styled to match the theme.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
              quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </ScrollArea>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Resizable">
        <DemoCard className="w-full max-w-md h-[200px]">
          <ResizablePanelGroup>
            <ResizablePanel defaultSize={40} minSize={20}>
              <div className="flex h-full items-center justify-center bg-muted text-sm font-medium">Left Panel</div>
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={60} minSize={20}>
              <div className="flex h-full items-center justify-center bg-secondary text-sm font-medium">Right Panel</div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Empty State">
        <DemoCard className="w-[300px]">
          <Empty>
            <EmptyMedia className="text-muted-foreground"><BarChart3 className="h-10 w-10" /></EmptyMedia>
            <EmptyHeader>
              <EmptyTitle>No data yet</EmptyTitle>
              <EmptyDescription>Start by adding some items to see them here.</EmptyDescription>
            </EmptyHeader>
            <EmptyContent>
              <Button size="sm"><Plus className="mr-2 h-4 w-4" />Add Item</Button>
            </EmptyContent>
          </Empty>
        </DemoCard>
      </ShowcaseSection>
    </div>
  )
}

// ─── Overlays section ─────────────────────────────────────────────────────────
function OverlaysSection() {
  const [openDialog, setOpenDialog] = React.useState(false)
  const [openSheet, setOpenSheet] = React.useState(false)
  const [openPopover, setOpenPopover] = React.useState(false)
  const [openHoverCard, setOpenHoverCard] = React.useState(false)
  const [openContext, setOpenContext] = React.useState(false)
  const [openDropdown, setOpenDropdown] = React.useState(false)

  return (
    <div className="space-y-8">
      <ShowcaseSection title="Dialog">
        <Button variant="outline" onClick={() => setOpenDialog(true)}>Open Dialog</Button>
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Edit Settings</DialogTitle>
              <DialogDescription>Configure your application preferences.</DialogDescription>
            </DialogHeader>
            <div className="space-y-3 py-2">
              <div className="space-y-1"><Label>Display Name</Label><Input placeholder="Your name" /></div>
              <div className="space-y-1"><Label>Theme</Label><Select><SelectTrigger><SelectValue placeholder="Select theme" /></SelectTrigger><SelectContent><SelectItem value="light">Light</SelectItem><SelectItem value="dark">Dark</SelectItem><SelectItem value="system">System</SelectItem></SelectContent></Select></div>
            </div>
            <DialogClose asChild><Button variant="outline">Cancel</Button></DialogClose>
            <Button onClick={() => setOpenDialog(false)}>Save</Button>
          </DialogContent>
        </Dialog>
      </ShowcaseSection>

      <ShowcaseSection title="Sheet (Slide-over)">
        <Button variant="outline" onClick={() => setOpenSheet(true)}>Open Sheet</Button>
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Notifications</SheetTitle>
              <SheetDescription>Manage your notification preferences.</SheetDescription>
            </SheetHeader>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between">
                <Label htmlFor="notif-email">Email notifications</Label>
                <Switch id="notif-email" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notif-push">Push notifications</Label>
                <Switch id="notif-push" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="notif-sms">SMS notifications</Label>
                <Switch id="notif-sms" defaultChecked />
              </div>
            </div>
            <SheetFooter className="mt-6">
              <SheetClose asChild><Button variant="outline">Cancel</Button></SheetClose>
              <Button onClick={() => setOpenSheet(false)}>Save Preferences</Button>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </ShowcaseSection>

      <ShowcaseSection title="Popover">
        <Popover open={openPopover} onOpenChange={setOpenPopover}>
          <PopoverTrigger asChild><Button variant="outline">Toggle Popover</Button></PopoverTrigger>
          <PopoverContent className="w-80">
            <div className="space-y-2">
              <h4 className="font-medium leading-none">Popover</h4>
              <p className="text-sm text-muted-foreground">This is a popover component with content inside.</p>
              <div className="flex gap-2">
                <Button size="sm">Action</Button>
                <Button size="sm" variant="outline">Cancel</Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </ShowcaseSection>

      <ShowcaseSection title="Hover Card">
        <HoverCard open={openHoverCard} onOpenChange={setOpenHoverCard}>
          <HoverCardTrigger asChild>
            <Button variant="link" className="text-primary">@bobo</Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <div className="flex justify-between space-x-4">
              <Avatar><AvatarFallback>BB</AvatarFallback></Avatar>
              <div className="space-y-1">
                <h4 className="text-sm font-semibold">@bobo</h4>
                <p className="text-sm text-muted-foreground">Full-stack developer building things.</p>
                <p className="text-xs text-muted-foreground">Joined September 2024</p>
              </div>
            </div>
          </HoverCardContent>
        </HoverCard>
      </ShowcaseSection>

      <ShowcaseSection title="Context Menu">
        <Button variant="outline" onContextMenu={(e) => { e.preventDefault(); setOpenContext(true); }}>Right-click me</Button>
        <ContextMenu open={openContext} onOpenChange={setOpenContext}>
          <ContextMenuTrigger asChild>
            <div className="w-48 h-20 border rounded-md flex items-center justify-center text-sm text-muted-foreground cursor-context-menu">
              Right-click here
            </div>
          </ContextMenuTrigger>
          <ContextMenuContent>
            <ContextMenuItem><Copy className="mr-2 h-4 w-4" />Copy</ContextMenuItem>
            <ContextMenuItem><Edit3 className="mr-2 h-4 w-4" />Edit</ContextMenuItem>
            <ContextMenuItem><Download className="mr-2 h-4 w-4" />Export</ContextMenuItem>
            <ContextMenuSeparator />
            <ContextMenuSub>
              <ContextMenuSubTrigger>Share</ContextMenuSubTrigger>
              <ContextMenuSubContent>
                <ContextMenuItem>Email</ContextMenuItem>
                <ContextMenuItem>SMS</ContextMenuItem>
              </ContextMenuSubContent>
            </ContextMenuSub>
            <ContextMenuSeparator />
            <ContextMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Delete</ContextMenuItem>
          </ContextMenuContent>
        </ContextMenu>
      </ShowcaseSection>

      <ShowcaseSection title="Dropdown Menu">
        <DropdownMenu open={openDropdown} onOpenChange={setOpenDropdown}>
          <DropdownMenuTrigger asChild><Button variant="outline">Open Dropdown</Button></DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem><Users className="mr-2 h-4 w-4" />Profile</DropdownMenuItem>
            <DropdownMenuItem><Settings className="mr-2 h-4 w-4" />Settings</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuCheckboxItem checked>Auto-sync</DropdownMenuCheckboxItem>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup value="color">
              <DropdownMenuLabel>Theme</DropdownMenuLabel>
              <DropdownMenuRadioItem value="light">Light</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="dark">Dark</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-destructive"><Trash2 className="mr-2 h-4 w-4" />Log out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </ShowcaseSection>
    </div>
  )
}

// ─── Advanced section ──────────────────────────────────────────────────────────
function AdvancedSection() {
  
  

  return (
    <div className="space-y-8">
      <ShowcaseSection title="Carousel">
        <DemoCard className="w-full max-w-md">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="basis-full"><div className="flex h-48 items-center justify-center bg-muted rounded-md font-medium">Slide 1</div></CarouselItem>
              <CarouselItem className="basis-full"><div className="flex h-48 items-center justify-center bg-secondary rounded-md font-medium">Slide 2</div></CarouselItem>
              <CarouselItem className="basis-full"><div className="flex h-48 items-center justify-center bg-accent rounded-md font-medium">Slide 3</div></CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Item (List Item)">
        <DemoCard className="w-full max-w-md flex-col">
          <Item>
            <ItemMedia>
              <Avatar size="sm"><AvatarFallback>AL</AvatarFallback></Avatar>
            </ItemMedia>
            <ItemContent>
              <ItemHeader>
                <ItemTitle>Alex Lee</ItemTitle>
                <ItemDescription>alex.lee@company.io</ItemDescription>
              </ItemHeader>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button>
            </ItemActions>
          </Item>
          <Item>
            <ItemMedia><Avatar size="sm"><AvatarFallback>SJ</AvatarFallback></Avatar></ItemMedia>
            <ItemContent>
              <ItemHeader><ItemTitle>Sarah Johnson</ItemTitle><ItemDescription>sarah.j@company.io</ItemDescription></ItemHeader>
            </ItemContent>
            <ItemActions><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></ItemActions>
          </Item>
          <Item>
            <ItemMedia><Avatar size="sm"><AvatarFallback>MK</AvatarFallback></Avatar></ItemMedia>
            <ItemContent>
              <ItemHeader><ItemTitle>Mike Kim</ItemTitle><ItemDescription>mike.k@company.io</ItemDescription></ItemHeader>
            </ItemContent>
            <ItemActions><Button variant="ghost" size="icon"><MoreHorizontal className="h-4 w-4" /></Button></ItemActions>
          </Item>
        </DemoCard>
      </ShowcaseSection>

      <ShowcaseSection title="Field (Form Field)">
        <DemoCard className="w-[350px]">
          <Field>
            <FieldLabel>Username</FieldLabel>
            <FieldContent>
              <Input placeholder="bobo" />
            </FieldContent>
            <FieldLegend>This is your public display name.</FieldLegend>
          </Field>
          <FieldSeparator />
          <Field>
            <FieldLabel>Bio</FieldLabel>
            <FieldContent>
              <Textarea placeholder="Tell us about yourself..." />
            </FieldContent>
            <FieldError>Bio must be at least 10 characters.</FieldError>
          </Field>
        </DemoCard>
      </ShowcaseSection>
    </div>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────
export function App() {
  const [activeSection, setActiveSection] = React.useState("navigation")
  const [open, setOpen] = React.useState(false)

  return (
    <DirectionProvider dir="ltr">
      <TooltipProvider>
        <SidebarProvider open={open} onOpenChange={setOpen}>
          <Sidebar collapsible="icon">
            <SidebarHeader>
              <SidebarMenuButton className="flex items-center gap-2" asChild>
                <a href="#">
                  <Home className="h-5 w-5" />
                  <span className="font-bold">shadcn Showcase</span>
                </a>
              </SidebarMenuButton>
            </SidebarHeader>

            <SidebarContent>
              <SidebarGroup>
                <SidebarGroupLabel>Components</SidebarGroupLabel>
                <SidebarMenu>
                  {sections.map((section) => (
                    <SidebarMenuItem key={section.id}>
                      <SidebarMenuButton
                        isActive={activeSection === section.id}
                        onClick={() => setActiveSection(section.id)}
                        className="cursor-pointer"
                      >
                        <section.icon className="h-4 w-4" />
                        <span>{section.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroup>
            </SidebarContent>

            <SidebarRail />
          </Sidebar>

          <SidebarInset>
            <div className="flex items-center gap-4 p-4 border-b">
              <SidebarTrigger onClick={() => setOpen(!open)} />
              <Kbd>⌘B</Kbd>
              <span className="text-sm text-muted-foreground">to toggle sidebar</span>
            </div>

            <ScrollArea className="h-[calc(100vh-65px)]">
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-6 capitalize">{activeSection}</h2>
                {activeSection === "navigation" && <NavigationSection />}
                {activeSection === "gallery" && <GalleryPage className="h-[calc(100vh-120px)] rounded-lg border overflow-hidden" />}
                {activeSection === "forms" && <FormsSection />}
                {activeSection === "data" && <DataSection />}
                {activeSection === "feedback" && <FeedbackSection />}
                {activeSection === "layout" && <LayoutSection />}
                {activeSection === "overlays" && <OverlaysSection />}
                {activeSection === "advanced" && <AdvancedSection />}
              </div>
            </ScrollArea>
          </SidebarInset>
        </SidebarProvider>
        <Toaster />
      </TooltipProvider>
    </DirectionProvider>
  )
}