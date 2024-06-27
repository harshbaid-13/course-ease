import React from "react"
import { Button } from "./ui/button"
import { DoubtsSectionProps, SideNavbarProps } from "@/types"
import DoubtCard from "./doubt-card"

const DoubtsSection = ({ selectedClass }: DoubtsSectionProps) => {
  return (
    <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6">
      <div className="flex items-center">
        <h1 className="text-lg font-semibold md:text-2xl">{selectedClass}</h1>
      </div>
      <div
        className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm"
        x-chunk="dashboard-02-chunk-1"
      >
        {/* <div className="flex flex-col items-center gap-1 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            This class has no doubts.
          </h3>
          <p className="text-sm text-muted-foreground">
            You can start getting your doubts solved as soon as you add a
            question.
          </p>
          <Button className="mt-4">Add Doubt</Button>
        </div> */}
        <DoubtCard />
      </div>
    </main>
  )
}

export default DoubtsSection
