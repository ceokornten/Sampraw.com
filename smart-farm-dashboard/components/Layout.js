import LanguageToggle from './LanguageToggle'

export default function Layout({ children }) {
  return (
    <div className="p-4">
      <header className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Smart Farm Dashboard</h1>
        <LanguageToggle />
      </header>
      {children}
    </div>
  )
}
