import { Geist, Geist_Mono, Inter, IBM_Plex_Serif } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";
import { Metadata } from "next";


const inter = Inter({subsets:['latin'],variable: '--font-inter'});
const ibmPlexSerif = IBM_Plex_Serif({
  subsets:['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-serif'
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata ={
  title: "Horizon",
  description: 'Horizon is a modern banking platform for everyone',
  icons:{
    icon: '/icons/logo.svg',
  }

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", inter.variable, "font-sans", ibmPlexSerif.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
