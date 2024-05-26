

export const metadata = {
  title: 'PSOBB Banking App',
  description: 'View your bank and inventory.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: "0 auto" }}>{children}</body>
    </html>
  )
}
