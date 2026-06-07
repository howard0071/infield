import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
import {
  Home,
  Settings,
  Users,
  FileText,
  BarChart3,
  Mail,
  Bell,
  Search,
  ChevronRight,
} from "lucide-react"

import { Button } from "@workspace/ui/components/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Input } from "@workspace/ui/components/input"
import { Badge } from "@workspace/ui/components/badge"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@workspace/ui/components/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@workspace/ui/components/tabs"
import { Checkbox } from "@workspace/ui/components/checkbox"
import { Label } from "@workspace/ui/components/label"
import { Slider } from "@workspace/ui/components/slider"
import { Switch } from "@workspace/ui/components/switch"
import { Progress } from "@workspace/ui/components/progress"
import { Separator } from "@workspace/ui/components/separator"

const menuItems = [
  { title: "Home", icon: Home, isActive: true },
  { title: "Users", icon: Users },
  { title: "File Text", icon: FileText },
  { title: "Analytics", icon: BarChart3 },
  { title: "Mail", icon: Mail },
  { title: "Notifications", icon: Bell },
]

const settingsItems = [
  { title: "Settings", icon: Settings },
]

function App() {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="flex h-screen w-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar className="border-r">
          <SidebarHeader className="border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sidebar-accent">
                <span className="text-xs font-bold">IN</span>
              </div>
              <span className="font-semibold text-sm">Infield</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton isActive={item.isActive} tooltip={item.title}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
            <SidebarGroup>
              <SidebarGroupLabel>System</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {settingsItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton tooltip={item.title}>
                        <item.icon />
                        <span>{item.title}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
          <SidebarRail />
        </Sidebar>

        {/* Main Content */}
        <SidebarInset className="flex flex-1 flex-col overflow-hidden">
          {/* Header */}
          <header className="flex h-14 items-center gap-4 border-b px-6">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-5" />
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <Input placeholder="Search..." className="pl-9 h-8" />
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="secondary" className="text-xs">v1.0.0</Badge>
              <Button size="sm">New Item</Button>
            </div>
          </header>

          {/* Page Content */}
          <main className="flex-1 overflow-auto p-6">
            <div className="flex flex-col gap-6">

              {/* Button Showcase */}
              <Card>
                <CardHeader>
                  <CardTitle>Button Variants & Sizes</CardTitle>
                  <CardDescription>All button variants with different sizes</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-4">
                  <Button variant="default">Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="link">Link</Button>
                  <Separator orientation="vertical" className="h-8" />
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                  <Button size="icon">
                    <Settings className="size-4" />
                  </Button>
                </CardContent>
              </Card>

              {/* Cards, Badges & Inputs */}
              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Badges</CardTitle>
                    <CardDescription>Badge variants</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <Badge>Default</Badge>
                    <Badge variant="secondary">Secondary</Badge>
                    <Badge variant="outline">Outline</Badge>
                    <Badge variant="destructive">Destructive</Badge>
                    <Badge variant="secondary" className="w-fit">With icon <ChevronRight className="inline size-3 ml-1" /></Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Inputs</CardTitle>
                    <CardDescription>Input field examples</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-col gap-3">
                    <Input placeholder="Default input" />
                    <Input placeholder="Disabled" disabled />
                    <Input placeholder="With icon" className="pl-9" />
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Tabs</CardTitle>
                    <CardDescription>Tab navigation</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Tabs defaultValue="tab1">
                      <TabsList>
                        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                        <TabsTrigger value="tab3">Tab 3</TabsTrigger>
                      </TabsList>
                      <TabsContent value="tab1">Content for tab 1</TabsContent>
                      <TabsContent value="tab2">Content for tab 2</TabsContent>
                      <TabsContent value="tab3">Content for tab 3</TabsContent>
                    </Tabs>
                  </CardContent>
                </Card>
              </div>

              {/* Form Controls */}
              <Card>
                <CardHeader>
                  <CardTitle>Form Controls</CardTitle>
                  <CardDescription>Checkboxes, switches, sliders, progress</CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-6">
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <Checkbox id="terms" />
                      <Label htmlFor="terms">Accept terms</Label>
                    </div>
                    <div className="flex items-center gap-2">
                      <Switch id="mode" />
                      <Label htmlFor="mode">Dark mode</Label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <Label>Volume</Label>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                  <div className="flex flex-col gap-2 max-w-xs">
                    <Label>Upload progress</Label>
                    <Progress value={67} />
                  </div>
                </CardContent>
              </Card>

              {/* Dialog */}
              <Card>
                <CardHeader>
                  <CardTitle>Dialog / Modal</CardTitle>
                  <CardDescription>Click the button to open dialog</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button>Open Dialog</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Dialog Title</DialogTitle>
                        <DialogDescription>
                          This is a dialog modal. You can close it by clicking outside or pressing ESC.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="flex flex-col gap-3 py-4">
                        <Input placeholder="Enter your name" />
                        <Button>Submit</Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>

            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export { App }