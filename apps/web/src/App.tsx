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
import { Skeleton } from "@workspace/ui/components/skeleton"

export function App() {
  return (
    <div className="flex flex-col gap-6 p-6 min-h-svh">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-semibold text-lg">Infield UI Components</h1>
          <p className="text-muted-foreground text-sm">Shadcn/ui component showcase</p>
        </div>
        <div className="flex gap-2">
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
        </div>
      </div>

      {/* Button Sizes */}
      <Card>
        <CardHeader>
          <CardTitle>Button Variants & Sizes</CardTitle>
          <CardDescription>All button variants with different sizes</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-4">
          <Button>Default</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
          <Button size="icon">ic</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="link">Link</Button>
        </CardContent>
      </Card>

      {/* Cards & Badges */}
      <div className="grid grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card description goes here</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-3">
            <Badge>Default Badge</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="destructive">Destructive</Badge>
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
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">Accept terms</Label>
            </div>
            <div className="flex items-center gap-2">
              <Switch id="mode" />
              <Label htmlFor="mode">Dark mode</Label>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <Label>Volume</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
          <div className="flex flex-col gap-2">
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

      {/* Skeletons */}
      <Card>
        <CardHeader>
          <CardTitle>Skeleton Loaders</CardTitle>
          <CardDescription>Loading state placeholders</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <Skeleton className="size-10 rounded-full" />
            <div className="flex flex-col gap-2 flex-1">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </div>
          </div>
          <Skeleton className="h-32 w-full" />
        </CardContent>
      </Card>

      <div className="text-muted-foreground font-mono text-xs">
        (Press <kbd>d</kbd> to toggle dark mode)
      </div>
    </div>
  )
}