// Re-mounted on every navigation: gives each page a short, app-like entrance.
export default function Template({ children }: { children: React.ReactNode }) {
  return <div className="page-enter">{children}</div>;
}
