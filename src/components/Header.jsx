"use client"

import Link from "next/link"
import { useTheme } from "next-themes"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { AlignLeft, Menu, Moon, Sun } from "lucide-react"
import Image from "next/image"

import { useState } from "react"
import { buttonVariants } from "@/components/ui/button"

const Header = () => {
  const { theme, setTheme } = useTheme()
  const [isActive, setIsActive] = useState()
  const [hash, setHash] = useState(window?.location.hash)
  const path = usePathname()

  const routes = [
    {
      href: "#summary",
      label: "Summary",
    },
    {
      href: "#projects",
      label: "Projects",
    },
    {
      href: "#testimonials",
      label: "Testimonials",
    },
    {
      href: "/blog",
      label: "Blog",
    },
    {
      href: "/poetry",
      label: "Poetry",
    },
  ]

  return (
    <header className="w-full md:container md:mx-auto bg-opacity-90  backdrop-blur-md  sm:flex sm:justify-between py-3 px-4 fixed shadow-sm">
      <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between w-full ">
        <div className="flex items-center">
          <Sheet>
            <SheetTrigger>
              <AlignLeft className="h-6 md:hidden w-6" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="grid place-content-center gap-4 h-full w-full">
                {routes.map((route, i) => (
                  <Button
                    asChild
                    variant={route.href == path ? "default" : "ghost"}
                    key={i}
                  >
                    <Link
                      href={route.href}
                      className="text-center block px-2 py-1 text-lg"
                    >
                      {route.label}
                    </Link>
                  </Button>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
          <Link href="/" className="ml-4 lg:ml-0 flex items-center gap-2">
            <Image
              src="/logo.svg"
              height={40}
              width={40}
              alt="code with walid log"
              className="w-7 h-7 md:w-10 md:h-10"
            ></Image>
            <h2 className="text-lg md:text-xl lg:text-2xl font-semibold text-transparent  bg-clip-text bg-gradient-to-r from-red-800 via-yellow-700 to-orange-400 ">
              CodeWithWalid
            </h2>
          </Link>
        </div>
        <nav className="mx-6  sm:flex items-center space-x-4 lg:space-x-2 hidden md:block">
          {routes.map((route, i) => (
            <Link
              key={i}
              href={route.href}
              onClick={() => setHash(route.href)}
              className={`${buttonVariants(
                route.href == hash ? { variant: "link" } : { variant: "ghost" },
              )} "text-sm md:text-base  transition-all duration-400 ease-in-out"`}
            >
              {route.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center -mr-4 md:mr-0">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="absolute h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle Theme</span>
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
