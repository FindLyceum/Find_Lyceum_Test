"use client"

export function CodeDisplay() {
  return (
    <div className="relative rounded-xl border border-primary/20 bg-card/80 shadow-2xl backdrop-blur-sm">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 border-b border-primary/20 px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-destructive"></div>
        <div className="h-3 w-3 rounded-full bg-[oklch(0.828_0.189_84.429)]"></div>
        <div className="h-3 w-3 rounded-full bg-accent"></div>
        <span className="ml-auto text-xs text-muted-foreground">~/tresh-lyceum/content.md</span>
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm">
        <div className="space-y-2">
          <div className="flex gap-4">
            <span className="text-muted-foreground">1</span>
            <span>
              <span className="text-[oklch(0.769_0.188_70.08)]">const</span>{" "}
              <span className="text-foreground">channel</span> <span className="text-muted-foreground">=</span>{" "}
              <span className="text-accent">"TreshLyceum"</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">2</span>
            <span>
              <span className="text-[oklch(0.769_0.188_70.08)]">const</span>{" "}
              <span className="text-foreground">topics</span> <span className="text-muted-foreground">=</span>{" "}
              <span className="text-accent">[</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">3</span>
            <span className="pl-6">
              <span className="text-accent">"Programming"</span>
              <span className="text-muted-foreground">,</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">4</span>
            <span className="pl-6">
              <span className="text-accent">"Technology"</span>
              <span className="text-muted-foreground">,</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">5</span>
            <span className="pl-6">
              <span className="text-accent">"Philosophy"</span>
              <span className="text-muted-foreground">,</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">6</span>
            <span className="pl-6">
              <span className="text-accent">"Learning"</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">7</span>
            <span>
              <span className="text-accent">]</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">8</span>
            <span></span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">9</span>
            <span>
              <span className="text-muted-foreground">// Join the community</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">10</span>
            <span>
              <span className="text-[oklch(0.769_0.188_70.08)]">function</span>{" "}
              <span className="text-[oklch(0.828_0.189_84.429)]">joinChannel</span>
              <span className="text-muted-foreground">()</span> <span className="text-accent">{"{"}</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">11</span>
            <span className="pl-6">
              <span className="text-[oklch(0.769_0.188_70.08)]">return</span>{" "}
              <span className="text-accent">"t.me/treshlyceum"</span>
            </span>
          </div>
          <div className="flex gap-4">
            <span className="text-muted-foreground">12</span>
            <span>
              <span className="text-accent">{"}"}</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
