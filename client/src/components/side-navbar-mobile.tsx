import React from "react"
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet"
import { Button } from "./ui/button"
import { Menu, Package2, Squircle } from "lucide-react"
import Link from "next/link"
import { Badge } from "./ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { SideNavbarProps } from "@/types"

const SideNavbarMobile = ({
  classes,
  selectedClass,
  setSelectedClass,
}: SideNavbarProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="shrink-0 md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex flex-col">
        <nav className="grid gap-2 text-lg font-medium">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold mb-2"
          >
            <Package2 className="h-6 w-6" />
            <span className="">CourseEase</span>
          </Link>
          {classes.map(({ name, doubts, color, students }, index) => (
            <Button
              key={index}
              onClick={() => {
                setSelectedClass(name)
              }}
              className={
                "mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-foreground bg-transparent hover:bg-primary/10 "
              }
            >
              <Squircle
                size={24}
                strokeWidth={3}
                absoluteStrokeWidth
                color={color}
                fill={name === selectedClass ? color : "transparent"}
              />
              {name}
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {doubts.length}
              </Badge>
            </Button>
          ))}
        </nav>
        <div className="mt-auto">
          <Card>
            <CardHeader>
              <CardTitle>Join a Class</CardTitle>
              <CardDescription>
                Join using the 6 alphanumeric code provided by your teacher.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button size="sm" className="w-full">
                Join Class
              </Button>
            </CardContent>
          </Card>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default SideNavbarMobile
