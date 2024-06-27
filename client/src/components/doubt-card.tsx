import { ArrowDown, ArrowUp, FileText, Youtube } from "lucide-react"
import React from "react"
import { Button } from "./ui/button"

const DoubtCard = () => {
  return (
    <div className="max-w-sm border-2 w-full rounded-md p-4">
      <div className="flex flex-row items-center justify-between">
        <h3 className="text-xl font-semibold ">FizzBuzz</h3>
        {/* <p className="text-sm text-gray-300">Asked by User</p> */}
        <div className="flex flex-row items-center gap-2">
          <FileText />
          <Youtube size={32} fill="red" />
        </div>
      </div>
      <div className="flex flex-row items-center mt-2 justify-between">
        <p className="text-md font-semibold pr-16">
          Given an integer n, return a string array answer (1-indexed) where:
          answer[i] == `&quot;`FizzBuzz`&quot;` if i is ........
        </p>
      </div>
      <div className="flex flex-row items-center mt-6 justify-between">
        <div className="flex flex-row items-center gap-0.5">
          <Button className="rounded-l-full p-2 h-8">
            <ArrowDown size={16} />
          </Button>
          <Button className="rounded-r-full p-2 h-8">
            <ArrowUp size={16} />
          </Button>
        </div>
        <div className="flex flex-row items-center gap-2">
          <p className="text-sm">68 comments</p>
        </div>
      </div>
    </div>
  )
}

export default DoubtCard
