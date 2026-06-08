import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogClose,
} from "@workspace/ui/components/dialog"
import { Button } from "@workspace/ui/components/button"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@workspace/ui/components/tooltip"
import { ScrollArea } from "@workspace/ui/components/scroll-area"
import { Popover, PopoverContent, PopoverTrigger } from "@workspace/ui/components/popover"
import { cn } from "@workspace/ui/lib/utils"
import {
  Heart,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
  Filter,
  Search,
  ImageIcon,
  LayoutGrid,
  Columns,
  List,
  Calendar,
  FolderOpen,
  Star,
  Plus,
} from "lucide-react"

// ─── Types ───────────────────────────────────────────────────────────────────

type Photo = {
  id: string
  src: string
  title: string
  date: string
  location?: string
  favorite: boolean
  source: string
}

type Collection = {
  id: string
  label: string
  icon: React.ComponentType<{ className?: string }>
  count: number
}

type LayoutMode = "grid" | "columns" | "list"

// ─── Sample data ──────────────────────────────────────────────────────────────

const COLLECTIONS: Collection[] = [
  { id: "all", label: "All Photos", icon: LayoutGrid, count: 12 },
  { id: "favorites", label: "Favorites", icon: Star, count: 3 },
  { id: "recent", label: "Recent", icon: Calendar, count: 4 },
  { id: "albums", label: "Albums", icon: FolderOpen, count: 2 },
]

const PHOTOS: Photo[] = [
  {
    id: "1",
    src: "https://picsum.photos/seed/gallery1/800/600",
    title: "Mountain Sunrise",
    date: "June 12, 2025",
    location: "Rocky Mountains, CO",
    favorite: true,
    source: "Photos",
  },
  {
    id: "2",
    src: "https://picsum.photos/seed/gallery2/800/600",
    title: "Ocean Breeze",
    date: "June 8, 2025",
    location: "Pacific Coast, CA",
    favorite: false,
    source: "Instagram",
  },
  {
    id: "3",
    src: "https://picsum.photos/seed/gallery3/800/600",
    title: "City Lights",
    date: "May 30, 2025",
    location: "New York, NY",
    favorite: true,
    source: "Camera Roll",
  },
  {
    id: "4",
    src: "https://picsum.photos/seed/gallery4/800/600",
    title: "Forest Path",
    date: "May 22, 2025",
    location: "Redwood National Park, CA",
    favorite: false,
    source: "Photos",
  },
  {
    id: "5",
    src: "https://picsum.photos/seed/gallery5/800/600",
    title: "Desert Dunes",
    date: "May 15, 2025",
    location: "Mojave Desert, CA",
    favorite: false,
    source: "Flickr",
  },
  {
    id: "6",
    src: "https://picsum.photos/seed/gallery6/800/600",
    title: "Lakeside Morning",
    date: "May 10, 2025",
    location: "Lake Tahoe, NV",
    favorite: true,
    source: "Camera Roll",
  },
  {
    id: "7",
    src: "https://picsum.photos/seed/gallery7/800/600",
    title: "Autumn Leaves",
    date: "April 28, 2025",
    location: "Vermont",
    favorite: false,
    source: "Photos",
  },
  {
    id: "8",
    src: "https://picsum.photos/seed/gallery8/800/600",
    title: "Night Sky",
    date: "April 20, 2025",
    location: "Joshua Tree, CA",
    favorite: false,
    source: "Instagram",
  },
  {
    id: "9",
    src: "https://picsum.photos/seed/gallery9/800/600",
    title: "Waterfall",
    date: "April 12, 2025",
    location: "Iceland",
    favorite: false,
    source: "Flickr",
  },
  {
    id: "10",
    src: "https://picsum.photos/seed/gallery10/800/600",
    title: "Cherry Blossoms",
    date: "March 30, 2025",
    location: "Tokyo, Japan",
    favorite: false,
    source: "Camera Roll",
  },
  {
    id: "11",
    src: "https://picsum.photos/seed/gallery11/800/600",
    title: "Snowy Peaks",
    date: "March 15, 2025",
    location: "Swiss Alps",
    favorite: false,
    source: "Photos",
  },
  {
    id: "12",
    src: "https://picsum.photos/seed/gallery12/800/600",
    title: "Sunset Beach",
    date: "March 5, 2025",
    location: "Maui, HI",
    favorite: false,
    source: "Instagram",
  },
]

// ─── Thumb size configs ───────────────────────────────────────────────────────

type ThumbSize = { label: string; cols: string; icon: React.ComponentType<{ className?: string }> }

const THUMB_SIZES: ThumbSize[] = [
  { label: "Small", cols: "grid-cols-4 sm:grid-cols-6", icon: LayoutGrid },
  { label: "Medium", cols: "grid-cols-3 sm:grid-cols-4", icon: Columns },
  { label: "Large", cols: "grid-cols-2 sm:grid-cols-3", icon: List },
]

// ─── Component ───────────────────────────────────────────────────────────────

interface GalleryPageProps {
  className?: string
}

export function GalleryPage({ className }: GalleryPageProps) {
  const [activeCollection, setActiveCollection] = React.useState("all")
  const [lightboxIdx, setLightboxIdx] = React.useState<number | null>(null)
  const [zoomIndex, setZoomIndex] = React.useState(1) // 0=small, 1=medium, 2=large
  const [layoutMode, setLayoutMode] = React.useState<LayoutMode>("grid")
  const [photos, setPhotos] = React.useState(PHOTOS)
  const [favoritesOnly, setFavoritesOnly] = React.useState(false)
  const [selectedMonths, setSelectedMonths] = React.useState<string[]>([])
  const [selectedSourceApps, setSelectedSourceApps] = React.useState<string[]>([])

  // Extract unique months from photos
  const availableMonths = React.useMemo(() => {
    const seen = new Set<string>()
    photos.forEach((p) => {
      const d = new Date(p.date)
      seen.add(`${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`)
    })
    return Array.from(seen).sort().reverse()
  }, [photos])

  // Extract unique source apps
  const availableSourceApps = React.useMemo(() => {
    const seen = new Set<string>()
    photos.forEach((p) => seen.add(p.source))
    return Array.from(seen).sort()
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
  }

  const hasActiveFilters = selectedMonths.length > 0 || selectedSourceApps.length > 0

  const filteredPhotos = React.useMemo(() => {
    let list = photos
    if (activeCollection === "favorites") list = list.filter((p) => p.favorite)
    if (favoritesOnly) list = list.filter((p) => p.favorite)
    if (selectedMonths.length > 0) {
      list = list.filter((p) => {
        const d = new Date(p.date)
        const m = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}`
        return selectedMonths.includes(m)
      })
    }
    if (selectedSourceApps.length > 0) {
      list = list.filter((p) => selectedSourceApps.includes(p.source))
    }
    return list
  }, [photos, activeCollection, favoritesOnly, selectedMonths, selectedSourceApps])

  const colsClass = THUMB_SIZES[zoomIndex].cols

  const openLightbox = (idx: number) => setLightboxIdx(idx)
  const closeLightbox = () => setLightboxIdx(null)

  const prevPhoto = () => {
    setLightboxIdx((i) => (i !== null ? (i - 1 + filteredPhotos.length) % filteredPhotos.length : null))
  }

  const nextPhoto = () => {
    setLightboxIdx((i) => (i !== null ? (i + 1) % filteredPhotos.length : null))
  }

  const toggleFavorite = (id: string) => {
    setPhotos((prev) =>
      prev.map((p) => (p.id === id ? { ...p, favorite: !p.favorite } : p))
    )
  }

  const deletePhoto = (id: string) => {
    setPhotos((prev) => prev.filter((p) => p.id !== id))
    if (lightboxIdx !== null && filteredPhotos.length <= 1) {
      closeLightbox()
    }
  }

  // Keyboard navigation
  React.useEffect(() => {
    if (lightboxIdx === null) return
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevPhoto()
      if (e.key === "ArrowRight") nextPhoto()
      if (e.key === "Escape") closeLightbox()
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [lightboxIdx])

  const currentPhoto = lightboxIdx !== null ? filteredPhotos[lightboxIdx] : null

  return (
    <TooltipProvider>
      <div className={cn("flex h-full overflow-hidden", className)}>
        {/* ── Sidebar ─────────────────────────────────────────────────── */}
        <aside className="w-52 flex-shrink-0 border-e border-border flex flex-col bg-background">
          <div className="p-4">
            <h2 className="text-sm font-semibold text-foreground mb-3">Library</h2>
            <nav className="space-y-1">
              {COLLECTIONS.map((col) => {
                const Icon = col.icon
                return (
                  <button
                    key={col.id}
                    onClick={() => setActiveCollection(col.id)}
                    className={cn(
                      "w-full flex items-center gap-2.5 rounded-md px-2 py-1.5 text-sm transition-colors text-start",
                      activeCollection === col.id
                        ? "bg-accent text-accent-foreground font-medium"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground"
                    )}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="flex-1 truncate">{col.label}</span>
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {col.id === "all"
                        ? photos.length
                        : col.id === "favorites"
                        ? photos.filter((p) => p.favorite).length
                        : col.count}
                    </span>
                  </button>
                )
              })}
            </nav>
          </div>

          <div className="px-4 mt-2">
            <h2 className="text-sm font-semibold text-foreground mb-3">Layout</h2>
            <div className="flex gap-1">
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
          </div>

          <div className="mt-auto border-t border-border p-4">
            <Button variant="outline" className="w-full justify-start gap-2 text-sm">
              <Plus className="size-4" />
              Add Photos
            </Button>
          </div>
        </aside>

        {/* ── Main content ─────────────────────────────────────────────── */}
        <div className="flex-1 flex flex-col min-w-0">
          {/* Topbar */}
          <header className="flex items-center justify-between px-4 py-2 border-b border-border bg-background shrink-0">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-foreground">
                {filteredPhotos.length} photo{filteredPhotos.length !== 1 ? "s" : ""}
              </span>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={hasActiveFilters ? "secondary" : "ghost"}
                    size="icon-xs"
                  >
                    <Filter className="size-3" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-72 p-0" align="start">
                  <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
                    <Search className="size-4 text-muted-foreground shrink-0" />
                    <input
                      id="gallery-filter-search"
                      type="text"
                      placeholder="Search filters..."
                      className="flex-1 text-sm bg-transparent outline-none placeholder:text-muted-foreground"
                      onChange={(e) => {
                        const q = e.target.value.toLowerCase()
                        const items = document.querySelectorAll<HTMLElement>("[data-filter-group]")
                        items.forEach((item) => {
                          const label = item.dataset.filterLabel?.toLowerCase() ?? ""
                          item.style.display = label.includes(q) ? "" : "none"
                        })
                      }}
                    />
                    {hasActiveFilters && (
                      <button
                        className="text-xs text-muted-foreground hover:text-foreground underline shrink-0"
                        onClick={clearFilters}
                      >
                        Clear
                      </button>
                    )}
                  </div>
                  <div className="max-h-64 overflow-y-auto p-2">
                    {/* Month filter */}
                    <div data-filter-group data-filter-label="June 2025">
                      <p className="px-1 py-1.5 text-xs font-semibold text-foreground">Month</p>
                      {availableMonths.map((month) => {
                        const [year, m] = month.split("-")
                        const label = new Date(Number(year), Number(m) - 1, 1).toLocaleString("default", {
                          month: "long",
                          year: "numeric",
                        })
                        const checked = selectedMonths.includes(month)
                        return (
                          <label
                            key={month}
                            className="flex items-center gap-2.5 rounded-sm px-1.5 py-1.5 cursor-pointer hover:bg-accent text-sm text-muted-foreground hover:text-foreground"
                          >
                            <span
                              className={cn(
                                "flex items-center justify-center size-4 rounded-sm border shrink-0 transition-colors",
                                checked
                                  ? "bg-primary border-primary text-primary-foreground"
                                  : "border-input"
                              )}
                              onClick={() => toggleMonth(month)}
                            >
                              {checked && (
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 3.5L3.5 6L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </span>
                            <span onClick={() => toggleMonth(month)}>{label}</span>
                            <span className="ms-auto text-xs text-muted-foreground tabular-nums">
                              {photos.filter((p) => {
                                const d = new Date(p.date)
                                return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}` === month
                              }).length}
                            </span>
                          </label>
                        )
                      })}
                    </div>

                    {/* Source app filter */}
                    <div className="mt-1" data-filter-group data-filter-label={availableSourceApps.join(" ")}>
                      <p className="px-1 py-1.5 text-xs font-semibold text-foreground">Source app</p>
                      {availableSourceApps.map((app) => {
                        const checked = selectedSourceApps.includes(app)
                        return (
                          <label
                            key={app}
                            className="flex items-center gap-2.5 rounded-sm px-1.5 py-1.5 cursor-pointer hover:bg-accent text-sm text-muted-foreground hover:text-foreground"
                          >
                            <span
                              className={cn(
                                "flex items-center justify-center size-4 rounded-sm border shrink-0 transition-colors",
                                checked
                                  ? "bg-primary border-primary text-primary-foreground"
                                  : "border-input"
                              )}
                              onClick={() => toggleSourceApp(app)}
                            >
                              {checked && (
                                <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                  <path d="M1 3.5L3.5 6L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              )}
                            </span>
                            <span onClick={() => toggleSourceApp(app)}>{app}</span>
                            <span className="ms-auto text-xs text-muted-foreground tabular-nums">
                              {photos.filter((p) => p.source === app).length}
                            </span>
                          </label>
                        )
                      })}
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
              <Button
                variant={favoritesOnly ? "secondary" : "ghost"}
                size="icon-xs"
                onClick={() => setFavoritesOnly((v) => !v)}
              >
                <Heart
                  className={cn("size-3", favoritesOnly && "fill-destructive text-destructive")}
                />
              </Button>
            </div>

            <div className="flex items-center gap-1">
              {THUMB_SIZES.map((s, i) => {
                const Icon = s.icon
                return (
                  <Tooltip key={s.label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant={zoomIndex === i ? "secondary" : "ghost"}
                        size="icon-xs"
                        onClick={() => setZoomIndex(i)}
                      >
                        <Icon className="size-3" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">{s.label}</TooltipContent>
                  </Tooltip>
                )
              })}
            </div>
          </header>

          {/* Photo grid / list */}
          <ScrollArea className="flex-1">
            {filteredPhotos.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full gap-3 text-muted-foreground">
                <ImageIcon className="size-12" />
                <p className="text-sm">No photos here yet.</p>
              </div>
            ) : layoutMode === "list" ? (
              <div className="p-4 space-y-1">
                {filteredPhotos.map((photo) => (
                  <button
                    key={photo.id}
                    onClick={() => openLightbox(filteredPhotos.indexOf(photo))}
                    className="w-full flex items-center gap-3 rounded-md px-3 py-2 text-start hover:bg-accent transition-colors group"
                  >
                    <img
                      src={photo.src}
                      alt={photo.title}
                      className="size-12 rounded object-cover shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{photo.title}</p>
                      <p className="text-xs text-muted-foreground">{photo.date}</p>
                    </div>
                    <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
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
                            <Heart
                              className={cn(
                                "size-3",
                                photo.favorite && "fill-destructive text-destructive"
                              )}
                            />
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
          <DialogContent
            className="p-0 m-0 max-w-none w-screen h-screen rounded-none border-0 bg-black/95"
            showCloseButton={false}
          >
            {/* Lightbox header */}
            <div className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-4 py-3 bg-gradient-to-b from-black/60 to-transparent">
              <div className="text-sm text-white font-medium">
                {currentPhoto?.title}
              </div>
              <div className="flex items-center gap-1">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="text-white hover:bg-white/20"
                      onClick={() => currentPhoto && toggleFavorite(currentPhoto.id)}
                    >
                      <Heart
                        className={cn(
                          "size-4",
                          currentPhoto?.favorite && "fill-white text-white"
                        )}
                      />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white bg-black/80 border-white/20">
                    {currentPhoto?.favorite ? "Unfavorite" : "Favorite"}
                  </TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon-xs"
                      className="text-white hover:bg-white/20"
                      onClick={() => currentPhoto && deletePhoto(currentPhoto.id)}
                    >
                      <Trash2 className="size-4" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="text-white bg-black/80 border-white/20">
                    Delete
                  </TooltipContent>
                </Tooltip>
                <DialogClose asChild>
                  <Button variant="ghost" size="icon-xs" className="text-white hover:bg-white/20 ms-1">
                    <X className="size-4" />
                  </Button>
                </DialogClose>
              </div>
            </div>

            {/* Prev / Next */}
            {filteredPhotos.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  className="absolute top-1/2 -translate-y-1/2 start-4 text-white hover:bg-white/20 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    prevPhoto()
                  }}
                >
                  <ChevronLeft className="size-6" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon-xs"
                  className="absolute top-1/2 -translate-y-1/2 end-4 text-white hover:bg-white/20 z-10"
                  onClick={(e) => {
                    e.stopPropagation()
                    nextPhoto()
                  }}
                >
                  <ChevronRight className="size-6" />
                </Button>
              </>
            )}

            {/* Image */}
            {currentPhoto && (
              <div
                className="flex items-center justify-center w-full h-full p-16"
                onClick={closeLightbox}
              >
                <img
                  src={currentPhoto.src}
                  alt={currentPhoto.title}
                  className="max-w-full max-h-full object-contain rounded-md shadow-2xl"
                />
              </div>
            )}

            {/* Footer */}
            <div className="absolute bottom-0 inset-x-0 z-10 flex items-center justify-center gap-4 px-4 py-3 bg-gradient-to-t from-black/60 to-transparent">
              <span className="text-xs text-white/70">
                {currentPhoto?.date}
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