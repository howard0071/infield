import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogOverlay,
} from "@workspace/ui/components/dialog"
import { Button } from "@workspace/ui/components/button"
import { TooltipProvider } from "@workspace/ui/components/tooltip"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@workspace/ui/components/tooltip"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@workspace/ui/components/popover"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
} from "@workspace/ui/components/sidebar"
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@workspace/ui/components/collapsible"
import {
  LayoutGrid,
  Columns,
  List,
  ChevronDown,
  Heart,
  Trash2,
  X,
  ChevronLeft,
  ChevronRight,
  Search,
  Star,
  Calendar,
  FolderOpen,
  Plus,
} from "lucide-react"
import { cn } from "@workspace/ui/lib/utils"

// ─── Types ───────────────────────────────────────────────────────────────────

type Photo = {
  id: string
  src: string
  title: string
  date: string
  location: string
  favorite: boolean
  source: string
}

type LayoutMode = "grid" | "columns" | "list"

// ─── Sample data ──────────────────────────────────────────────────────────────

const PHOTOS: Photo[] = [
  {
    id: "1",
    src: "https://picsum.photos/seed/gallery1/800/600",
    title: "Mountain Sunrise",
    date: "June 12, 2025",
    location: "Rocky Mountains, CO",
    favorite: false,
    source: "Photos",
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/gallery2/800/600",
    title: "Ocean Waves",
    date: "May 3, 2025",
    location: "Pacific Coast, CA",
    favorite: true,
    source: "Instagram",
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/gallery3/800/600",
    title: "City Nights",
    date: "April 18, 2025",
    location: "New York, NY",
    favorite: false,
    source: "Camera Roll",
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/gallery4/800/600",
    title: "Forest Trail",
    date: "March 22, 2025",
    location: "Redwood National Park, CA",
    favorite: false,
    source: "Photos",
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/gallery5/800/600",
    title: "Desert Dunes",
    date: "February 14, 2025",
    location: "Moab, UT",
    favorite: true,
    source: "Flickr",
  },
  {
    id: "6",
    src: "https://picsum.photos/seed/gallery6/800/600",
    title: "Autumn Leaves",
    date: "November 5, 2024",
    location: "Vermont",
    favorite: false,
    source: "Camera Roll",
  },
  {
    id: "7",
    src: "https://picsum.photos/seed/gallery7/800/600",
    title: "Snowy Peaks",
    date: "January 8, 2025",
    location: "Swiss Alps",
    favorite: false,
    source: "Photos",
  },
  {
    id: "8",
    src: "https://picsum.photos/seed/gallery8/800/600",
    title: "Tropical Beach",
    date: "December 20, 2024",
    location: "Maldives",
    favorite: true,
    source: "Instagram",
  },
  {
    id: "9",
    src: "https://picsum.photos/seed/gallery9/800/600",
    title: "Sunset Valley",
    date: "October 30, 2024",
    location: "Tuscany, Italy",
    favorite: false,
    source: "Flickr",
  },
  {
    id: "10",
    src: "https://picsum.photos/seed/gallery10/800/600",
    title: "Waterfall",
    date: "September 15, 2024",
    location: "Iceland",
    favorite: false,
    source: "Camera Roll",
  },
  {
    id: "11",
    src: "https://picsum.photos/seed/gallery11/800/600",
    title: "Northern Lights",
    date: "August 12, 2024",
    location: "Alaska",
    favorite: true,
    source: "Photos",
  },
  {
    id: "12",
    src: "https://picsum.photos/seed/gallery12/800/600",
    title: "Vineyard",
    date: "July 25, 2024",
    location: "Napa Valley, CA",
    favorite: false,
    source: "Instagram",
  },
]

const MONTHS = [
  "January 2025", "February 2025", "March 2025", "April 2025",
  "May 2025", "June 2025", "July 2024", "August 2024",
  "September 2024", "October 2024", "November 2024", "December 2024",
]

// ─── Component ───────────────────────────────────────────────────────────────

interface GalleryPageProps {
  className?: string
}

export function GalleryPage({ className }: GalleryPageProps) {
  const [activeCollection, setActiveCollection] = React.useState("all")
  const [albumsOpen, setAlbumsOpen] = React.useState(true)
  const [lightboxIdx, setLightboxIdx] = React.useState<number | null>(null)
  const [zoomIndex, setZoomIndex] = React.useState(1) // 0=small, 1=medium, 2=large
  const [layoutMode, setLayoutMode] = React.useState<LayoutMode>("grid")
  const [photos, setPhotos] = React.useState(PHOTOS)
  const [selectedMonths, setSelectedMonths] = React.useState<string[]>([])
  const [selectedSourceApps, setSelectedSourceApps] = React.useState<string[]>([])
  const [filterSearch, setFilterSearch] = React.useState("")
  const [showFavoritesOnly, setShowFavoritesOnly] = React.useState(false)

  const filteredPhotos = React.useMemo(() => {
    return photos.filter((photo) => {
      if (showFavoritesOnly && !photo.favorite) return false
      if (selectedMonths.length > 0 && !selectedMonths.some((m) => photo.date.includes(m.split(" ")[0]))) return false
      if (selectedSourceApps.length > 0 && !selectedSourceApps.includes(photo.source)) return false
      return true
    })
  }, [photos, showFavoritesOnly, selectedMonths, selectedSourceApps])

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)
  const currentPhoto = lightboxIdx !== null ? filteredPhotos[lightboxIdx] : null

  const prevPhoto = () => {
    setLightboxIdx((i) => (i !== null && i > 0 ? i - 1 : i))
  }
  const nextPhoto = () => {
    setLightboxIdx((i) =>
      i !== null && i < filteredPhotos.length - 1 ? i + 1 : i
    )
  }

  const toggleFavorite = (id: string) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p))
    )
  }

  const deletePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id))
    if (lightboxIdx !== null) {
      const newIdx = lightboxIdx >= filteredPhotos.length - 1 ? null : lightboxIdx
      setLightboxIdx(newIdx)
    }
  }

  const availableSourceApps = React.useMemo(() => {
    const counts: Record<string, number> = {}
    photos.forEach((p) => {
      counts[p.source] = (counts[p.source] || 0) + 1
    })
    return Object.entries(counts).map(([name, count]) => ({ name, count }))
  }, [photos])

  const toggleMonth = (month: string) => {
    setSelectedMonths((prev) =>
      prev.includes(month) ? prev.filter((m) => m !== month) : [...prev, month]
    )
  }

  const toggleSourceApp = (app: string) => {
    setSelectedSourceApps((prev) =>
      prev.includes(app) ? prev.filter((a) => a !== app) : [...prev, app]
    )
  }

  const clearFilters = () => {
    setSelectedMonths([])
    setSelectedSourceApps([])
    setFilterSearch("")
  }

  const hasActiveFilters = selectedMonths.length > 0 || selectedSourceApps.length > 0

  const thumbSizes = [
    { cols: "grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6", size: "h-32" },
    { cols: "grid-cols-2 sm:grid-cols-3 lg:grid-cols-4", size: "h-48" },
    { cols: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3", size: "h-72" },
  ]
  const colsClass = thumbSizes[zoomIndex].cols

  return (
    <TooltipProvider>
      <div className={cn("flex flex-1 flex-col min-w-0", className)}>
        {/* ── Left sidebar ─────────────────────────────────────────────── */}
        <Sidebar className="w-64 flex-shrink-0 border-e border-border">
          <SidebarContent className="flex flex-col h-full">
            {/* Library group */}
            <SidebarGroup>
              <SidebarGroupLabel>Library</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeCollection === "all"}
                      onClick={() => setActiveCollection("all")}
                    >
                      <LayoutGrid className="size-4" />
                      <span>All Photos</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeCollection === "favorites"}
                      onClick={() => setActiveCollection("favorites")}
                    >
                      <Star className="size-4" />
                      <span>Favorites</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <SidebarMenuItem>
                    <SidebarMenuButton
                      isActive={activeCollection === "recent"}
                      onClick={() => setActiveCollection("recent")}
                    >
                      <Calendar className="size-4" />
                      <span>Recent</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                  <Collapsible open={albumsOpen} onOpenChange={setAlbumsOpen}>
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton
                          isActive={activeCollection === "albums"}
                          onClick={() => setActiveCollection("albums")}
                        >
                          <FolderOpen className="size-4" />
                          <span>Albums</span>
                          <ChevronDown className="size-4 ms-auto transition-transform data-[state=open]:rotate-180" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                              isActive={activeCollection === "album-summer"}
                              onClick={() => setActiveCollection("album-summer")}
                            >
                              <span>Summer 2025</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                              isActive={activeCollection === "album-travel"}
                              onClick={() => setActiveCollection("album-travel")}
                            >
                              <span>Travel</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                          <SidebarMenuSubItem>
                            <SidebarMenuSubButton
                              isActive={activeCollection === "album-nature"}
                              onClick={() => setActiveCollection("album-nature")}
                            >
                              <span>Nature</span>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>

            {/* Layout group */}
            <SidebarGroup>
              <SidebarGroupLabel>Layout</SidebarGroupLabel>
              <SidebarGroupContent>
                <div className="flex gap-1 px-2">
                  {(["grid", "columns", "list"] as LayoutMode[]).map((mode) => (
                    <Tooltip key={mode}>
                      <TooltipTrigger asChild>
                        <Button
                          variant={layoutMode === mode ? "secondary" : "ghost"}
                          size="icon-xs"
                          onClick={() => setLayoutMode(mode)}
                        >
                          {mode === "grid" && <LayoutGrid className="size-3" />}
                          {mode === "columns" && <Columns className="size-3" />}
                          {mode === "list" && <List className="size-3" />}
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="right" className="capitalize">
                        {mode}
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>

          {/* Footer */}
          <div className="mt-auto border-t border-border p-4">
            <Button variant="outline" className="w-full justify-start gap-2 text-sm">
              <Plus className="size-4" />
              Add Photos
            </Button>
          </div>
        </Sidebar>

        {/* ── Main content ─────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Topbar */}
          <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-background shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">
                {filteredPhotos.length} photos
              </span>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={showFavoritesOnly ? "secondary" : "ghost"}
                    size="icon-xs"
                    onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                  >
                    <Heart className={cn("size-3", showFavoritesOnly && "fill-primary text-primary")} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Favorites only</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex items-center gap-2">
              {/* Zoom */}
              <div className="flex items-center gap-1 border border-border rounded-md px-1">
                {thumbSizes.map((_, i) => (
                  <Button
                    key={i}
                    variant={zoomIndex === i ? "secondary" : "ghost"}
                    size="icon-xs"
                    onClick={() => setZoomIndex(i)}
                  >
                    <div
                      className={cn(
                        "rounded-sm bg-current",
                        i === 0 ? "size-3" : i === 1 ? "size-4" : "size-5"
                      )}
                    />
                  </Button>
                ))}
              </div>

              {/* Filter dropdown */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" size="sm" className="gap-2 text-xs">
                    <Search className="size-3" />
                    Filter
                    {hasActiveFilters && (
                      <span className="bg-primary text-primary-foreground rounded-full size-4 flex items-center justify-center text-[10px]">
                        {selectedMonths.length + selectedSourceApps.length}
                      </span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80 p-0" align="end">
                  <div className="p-3 border-b border-border">
                    <input
                      type="text"
                      placeholder="Search filters..."
                      className="w-full text-sm bg-transparent border-0 outline-none placeholder:text-muted-foreground"
                      value={filterSearch}
                      onChange={(e) => setFilterSearch(e.target.value)}
                    />
                  </div>
                  <div className="max-h-80 overflow-y-auto p-2">

                    {/* Month group */}
                    <div
                      data-filter-group="month"
                      className={cn(
                        "py-1",
                        filterSearch &&
                        !MONTHS.some((m) => m.toLowerCase().includes(filterSearch.toLowerCase()))
          ? "hidden"
          : ""
                      )}
                    >
                      <p
                        data-filter-label="month"
                        className="text-xs font-medium text-muted-foreground px-2 py-1"
                      >
                        Month
                      </p>
                      {MONTHS.filter((m) =>
                        filterSearch
                          ? m.toLowerCase().includes(filterSearch.toLowerCase())
                          : true
                      ).map((month) => {
                        const count = photos.filter((p) =>
                          p.date.includes(month.split(" ")[0])
                        ).length
                        return (
                          <button
                            key={month}
                            className="flex items-center justify-between w-full text-sm px-2 py-1 hover:bg-muted rounded-sm cursor-pointer"
                            onClick={() => toggleMonth(month)}
                          >
                            <span>{month}</span>
                            <span className="text-xs text-muted-foreground">{count}</span>
                          </button>
                        )
                      })}
                    </div>

                    {/* Source App group */}
                    <div
                      data-filter-group="source"
                      className={cn(
                        "py-1",
                        filterSearch &&
                        !availableSourceApps.some((a) =>
                          a.name.toLowerCase().includes(filterSearch.toLowerCase())
                        )
          ? "hidden"
          : ""
                      )}
                    >
                      <p
                        data-filter-label="source"
                        className="text-xs font-medium text-muted-foreground px-2 py-1"
                      >
                        Source App
                      </p>
                      {availableSourceApps
                        .filter((a) =>
                          filterSearch
                            ? a.name.toLowerCase().includes(filterSearch.toLowerCase())
                            : true
                        )
                        .map((app) => (
                          <button
                            key={app.name}
                            className="flex items-center justify-between w-full text-sm px-2 py-1 hover:bg-muted rounded-sm cursor-pointer"
                            onClick={() => toggleSourceApp(app.name)}
                          >
                            <span>{app.name}</span>
                            <span className="text-xs text-muted-foreground">{app.count}</span>
                          </button>
                        ))}
                    </div>
                  </div>
                  {hasActiveFilters && (
                    <div className="p-2 border-t border-border">
                      <Button
                        variant="ghost"
                        size="sm"
                        className="w-full text-xs"
                        onClick={clearFilters}
                      >
                        Clear filters
                      </Button>
                    </div>
                  )}
                </PopoverContent>
              </Popover>
            </div>
          </header>

          {/* Photo grid/list */}
          <ScrollArea className="flex-1">
            {layoutMode === "list" ? (
              <div className="p-4 space-y-2">
                {filteredPhotos.map((photo) => (
                  <button
                    key={photo.id}
                    onClick={() => openLightbox(filteredPhotos.indexOf(photo))}
                    className="group flex items-center gap-3 w-full text-start p-2 rounded-lg hover:bg-muted transition-colors cursor-zoom-in"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="size-12 rounded-md object-cover shrink-0"
                      loading="lazy"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">{photo.title}</p>
                      <p className="text-xs text-muted-foreground truncate">{photo.date}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity shrink-0">
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleFavorite(photo.id)
                            }}
                          >
                            <Heart className={cn("size-3", photo.favorite && "fill-primary text-primary")} />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>
                          {photo.favorite ? "Unfavorite" : "Favorite"}
                        </TooltipContent>
                      </Tooltip>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button
                            variant="ghost"
                            size="icon-xs"
                            onClick={(e) => {
                              e.stopPropagation()
                              deletePhoto(photo.id)
                            }}
                          >
                            <Trash2 className="size-3" />
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent>Delete</TooltipContent>
                      </Tooltip>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className={cn("p-4 grid gap-3", colsClass)}>
                {filteredPhotos.map((photo) => (
                  <button
                    key={photo.id}
                    onClick={() => openLightbox(filteredPhotos.indexOf(photo))}
                    className="group relative overflow-hidden rounded-lg border border-border bg-muted aspect-square cursor-zoom-in"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="object-cover w-full h-full transition-transform duration-200 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-between p-3">
                      <div className="flex justify-end gap-1">
                        <Button
                          variant="ghost"
                          size="icon-xs"
                          className="text-white hover:bg-white/20"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(photo.id)
                          }}
                        >
                          <Heart
                            className={cn(
                              "size-3",
                              photo.favorite && "fill-white text-white"
                            )}
                          />
                        </Button>
                      </div>
                      <div className="text-start">
                        <p className="text-xs font-medium text-white truncate">{photo.title}</p>
                        <p className="text-xs text-white/70">{photo.date}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </ScrollArea>
        </div>

        {/* ── Lightbox ────────────────────────────────────────────────── */}
        <Dialog open={lightboxIdx !== null} onOpenChange={(open) => !open && closeLightbox()}>
          <DialogOverlay className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md" />
          <DialogContent
            className="fixed inset-0 z-50 flex items-center justify-center p-0 m-0 rounded-none border-0 bg-transparent"
            showCloseButton={false}
          >
            {/* Prev / Next */}
            {filteredPhotos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 -translate-y-1/2 start-4 text-white hover:bg-white/20 z-20"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevPhoto()
                  }}
                >
                  <ChevronLeft className="size-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-1/2 -translate-y-1/2 end-4 text-white hover:bg-white/20 z-20"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextPhoto()
                  }}
                >
                  <ChevronRight className="size-8" />
                </Button>
              </>
            )}

            {/* Image + hover controls */}
            {currentPhoto && (
              <div
                className="relative flex items-center justify-center w-full h-full"
                onClick={closeLightbox}
              >
                <div
                  className="group relative"
                  onClick={(e) => e.stopPropagation()}
                >
                  {/* Image */}
                  <img
                    src={currentPhoto.src}
                    alt={currentPhoto.title}
                    className="max-w-[calc(100vw-8rem)] max-h-[calc(100vh-8rem)] object-contain rounded-lg shadow-2xl"
                  />

                  {/* Hover overlay: buttons top-right of image */}
                  <div className="absolute top-3 end-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-black/60 hover:bg-white/20 text-white backdrop-blur-sm"
                          onClick={() => toggleFavorite(currentPhoto.id)}
                        >
                          <Heart
                            className={cn(
                              "size-5",
                              currentPhoto.favorite && "fill-white text-white"
                            )}
                          />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="text-white bg-black/80 border-white/20">
                        {currentPhoto.favorite ? "Unfavorite" : "Favorite"}
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-black/60 hover:bg-white/20 text-white backdrop-blur-sm"
                          onClick={() => deletePhoto(currentPhoto.id)}
                        >
                          <Trash2 className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="text-white bg-black/80 border-white/20">
                        Delete
                      </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="bg-black/60 hover:bg-white/20 text-white backdrop-blur-sm"
                          onClick={closeLightbox}
                        >
                          <X className="size-5" />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent className="text-white bg-black/80 border-white/20">
                        Close
                      </TooltipContent>
                    </Tooltip>
                  </div>
                </div>
              </div>
            )}

            {/* Footer */}
            <div className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-center gap-4 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-xs text-white/70">
                {currentPhoto?.title}
                {currentPhoto?.location && ` · ${currentPhoto.location}`}
              </span>
              {filteredPhotos.length > 1 && (
                <span className="text-xs text-white/50">
                  {lightboxIdx !== null ? lightboxIdx + 1 : 0} / {filteredPhotos.length}
                </span>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </TooltipProvider>
  )
}