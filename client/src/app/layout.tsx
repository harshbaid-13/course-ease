import type { Metadata } from "next"
import { Raleway } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const raleway = Raleway({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CourseEase",
  description: "Made with Love by the CourseEase Team",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
