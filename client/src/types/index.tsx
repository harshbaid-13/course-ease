interface Doubt {
  title: string
  description: string
  docs: string
  video: string
  upvotes: Number
  downvotes: Number
  comments: Array<String>
}
interface Class {
  name: string
  doubts: Array<Doubt>
  color: string
  students: Array<string>
}
export interface SideNavbarProps {
  classes: Array<Class>
  selectedClass: string
  setSelectedClass: (selectedClass: string) => void
}
export interface DoubtsSectionProps {
  selectedClass: string
}
