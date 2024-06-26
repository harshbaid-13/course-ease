"use client"
import Link from "next/link"
import { CircleUser, Package2, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"
import { useState } from "react"
import SideNavbar from "@/components/side-navbar"
import SideNavbarMobile from "@/components/side-navbar-mobile"
import DoubtsSection from "@/components/doubts-section"

export default function Dashboard() {
  const classes = [
    {
      name: "General",
      color: "red",
      doubts: [
        {
          title: "FizzBuzz",
          description:
            "Given an integer n, return a string array answer (1-indexed) where answer[i] == 'FizzBuzz' if i is divisible by 3 and 5 answer[i] == 'Fizz' if i is divisible by. answer[i] == 'Buzz' if i is divisible by 5. answer[i] == i (as a string) if none of the above conditions are true.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 42,
          downvotes: 3,
          comments: [
            "comment 1",
            "comment 2",
            "comment 3",
            "comment 4",
            "comment 5",
            "comment 6",
          ],
          // comment would be a thread kinda thing!
        },
        {
          title: "Two Sum",
          description:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 67,
          downvotes: 5,
          comments: ["comment 1", "comment 2", "comment 3"],
        },
        {
          title: "Reverse String",
          description:
            "Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 34,
          downvotes: 2,
          comments: ["comment 1", "comment 2", "comment 3", "comment 4"],
        },
        {
          title: "Palindrome Number",
          description:
            "Given an integer x, return true if x is a palindrome, and false otherwise. An integer is a palindrome when it reads the same backward as forward.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 29,
          downvotes: 4,
          comments: ["comment 1", "comment 2"],
        },
        {
          title: "Merge Sorted Array",
          description:
            "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 50,
          downvotes: 1,
          comments: [
            "comment 1",
            "comment 2",
            "comment 3",
            "comment 4",
            "comment 5",
          ],
        },
        {
          title: "Valid Anagram",
          description:
            "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 22,
          downvotes: 3,
          comments: ["comment 1"],
        },
      ],
      students: ["Harsh", "Anamika", "Student1", "Student2", "Student3"],
    },
    {
      name: "Apni Kaksha",
      color: "green",
      doubts: [
        {
          title: "Maximum Subarray",
          description:
            "Given an integer array nums, find the subarray which has the largest sum and return its sum. A subarray is a contiguous part of an array.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 73,
          downvotes: 6,
          comments: [
            "comment 1",
            "comment 2",
            "comment 3",
            "comment 4",
            "comment 5",
            "comment 6",
            "comment 7",
          ],
        },
        {
          title: "Climbing Stairs",
          description:
            "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 45,
          downvotes: 2,
          comments: ["comment 1", "comment 2", "comment 3"],
        },
        {
          title: "Single Number",
          description:
            "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 37,
          downvotes: 1,
          comments: ["comment 1", "comment 2", "comment 3", "comment 4"],
        },
        {
          title: "Linked List Cycle",
          description:
            "Given head, the head of a linked list, determine if the linked list has a cycle in it. There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 28,
          downvotes: 4,
          comments: ["comment 1", "comment 2", "comment 3"],
        },
        {
          title: "Best Time to Buy and Sell Stock",
          description:
            "You are given an array prices where prices[i] is the price of a given stock on the ith day. You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 60,
          downvotes: 7,
          comments: [
            "comment 1",
            "comment 2",
            "comment 3",
            "comment 4",
            "comment 5",
            "comment 6",
          ],
        },
      ],
      students: ["Anamika", "Student1", "Student2", "Student3"],
    },
    {
      name: "Harkirat Singh",
      color: "blue",
      doubts: [
        {
          title: "Palindrome Number",
          description:
            "Given an integer x, return true if x is a palindrome, and false otherwise. An integer is a palindrome when it reads the same backward as forward.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 29,
          downvotes: 4,
          comments: ["comment 1", "comment 2"],
        },
        {
          title: "Merge Sorted Array",
          description:
            "You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively. Merge nums1 and nums2 into a single array sorted in non-decreasing order.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 50,
          downvotes: 1,
          comments: [
            "comment 1",
            "comment 2",
            "comment 3",
            "comment 4",
            "comment 5",
          ],
        },
        {
          title: "Valid Anagram",
          description:
            "Given two strings s and t, return true if t is an anagram of s, and false otherwise. An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 22,
          downvotes: 3,
          comments: ["comment 1"],
        },
        {
          title: "Maximum Subarray",
          description:
            "Given an integer array nums, find the subarray which has the largest sum and return its sum. A subarray is a contiguous part of an array.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 73,
          downvotes: 6,
          comments: [
            "comment 1",
            "comment 2",
            "comment 3",
            "comment 4",
            "comment 5",
            "comment 6",
            "comment 7",
          ],
        },
      ],
      students: ["Harsh", "Student1", "Student2", "Student3"],
    },
    {
      name: "Love Babbar",
      color: "purple",
      doubts: [
        {
          title: "Two Sum",
          description:
            "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target. You may assume that each input would have exactly one solution, and you may not use the same element twice.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 67,
          downvotes: 5,
          comments: ["comment 1", "comment 2", "comment 3"],
        },
        {
          title: "Reverse String",
          description:
            "Write a function that reverses a string. The input string is given as an array of characters s. You must do this by modifying the input array in-place with O(1) extra memory.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 34,
          downvotes: 2,
          comments: ["comment 1", "comment 2", "comment 3", "comment 4"],
        },
        {
          title: "Climbing Stairs",
          description:
            "You are climbing a staircase. It takes n steps to reach the top. Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 45,
          downvotes: 2,
          comments: ["comment 1", "comment 2", "comment 3"],
        },
        {
          title: "Single Number",
          description:
            "Given a non-empty array of integers nums, every element appears twice except for one. Find that single one. You must implement a solution with a linear runtime complexity and use only constant extra space.",
          docs: "https://github.com/",
          video: "https://www.youtube.com/",
          upvotes: 37,
          downvotes: 1,
          comments: ["comment 1", "comment 2", "comment 3", "comment 4"],
        },
      ],
      students: ["Aarav", "Student4", "Student5", "Student6"],
    },
  ]
  const [selectedClass, setSelectedClass] = useState("General")
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
      <div className="hidden border-r bg-muted/40 md:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6 justify-between">
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <Package2 className="h-6 w-6" />
              <span className="">CourseEase</span>
            </Link>
            <ModeToggle />
          </div>
          <SideNavbar
            classes={classes}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <header className="flex h-14 items-center gap-4 border-b justify-between bg-muted/40 px-4 lg:h-[60px] lg:px-6">
          <SideNavbarMobile
            classes={classes}
            selectedClass={selectedClass}
            setSelectedClass={setSelectedClass}
          />
          {/* <div className="w-full flex-1">
            <form>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  className="w-full appearance-none bg-background pl-8 shadow-none md:w-2/3 lg:w-1/3"
                />
              </div>
            </form>
          </div> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary" size="icon" className="rounded-full">
                <CircleUser className="h-5 w-5" />
                <span className="sr-only">Toggle user menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Support</DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </header>
        <DoubtsSection selectedClass={selectedClass} />
      </div>
    </div>
  )
}
