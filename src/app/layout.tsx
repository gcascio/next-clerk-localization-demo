import { ClerkProvider } from '@clerk/nextjs'
import { enUS } from "@clerk/localizations";
 
export const metadata = {
  title: 'Next.js 13 with Clerk',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={enUS}>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  )
}
