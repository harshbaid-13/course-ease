import React from "react"
import { Button } from "./ui/button"
import { Squircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import { SideNavbarProps } from "@/types"

const SideNavbar = ({
  classes,
  selectedClass,
  setSelectedClass,
}: SideNavbarProps) => {
  return (
    <>
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          {classes.map(({ name, doubts, color, students }, index) => (
            <Button
              key={index}
              onClick={() => {
                setSelectedClass(name)
              }}
              className={
                "flex items-center gap-3 rounded-lg px-3 py-2 transition-all text-primary bg-transparent hover:bg-primary/10"
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
      </div>
      <div className="mt-auto p-4">
        <Card x-chunk="dashboard-02-chunk-0">
          <CardHeader className="p-2 pt-0 md:p-4">
            <CardTitle>Join a Class</CardTitle>
            <CardDescription>
              Join using the 6 alphanumeric code provided by your teacher.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-2 pt-0 md:p-4 md:pt-0">
            <Button size="sm" className="w-full">
              Join Class
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SideNavbar
