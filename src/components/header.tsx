import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a href="#" className="flex items-center gap-3 font-bold text-lg">
          <Avatar className="h-8 w-8">
            {/* Replace this src with a direct URL to your profile picture */}
            <AvatarImage src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fDE?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Edwin Oshome" data-ai-hint="profile picture" />
            <AvatarFallback>EO</AvatarFallback>
          </Avatar>
          <span>Edwin Oshome</span>
        </a>
      </div>
    </header>
  );
}
