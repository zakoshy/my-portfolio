import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <a href="#" className="flex items-center gap-3 font-bold text-lg">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://placehold.co/40x40.png" alt="Edwin Oshome" data-ai-hint="profile picture" />
            <AvatarFallback>EO</AvatarFallback>
          </Avatar>
          <span>Edwin Oshome</span>
        </a>
      </div>
    </header>
  );
}
