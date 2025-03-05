import { ThemeToggle } from '@components/theme-toggle'

export default function Header() {
  return (
    <header className="sticky top-0 container mx-auto flex justify-end py-2">
      <ThemeToggle />
    </header>
  )
}
