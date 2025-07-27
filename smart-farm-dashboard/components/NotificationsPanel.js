export default function NotificationsPanel() {
  const sendLine = async () => {
    await fetch('/api/notify', { method: 'POST' })
  }
  return (
    <div className="card">
      <h2 className="font-semibold mb-2">Notifications</h2>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={sendLine}
      >
        Send LINE Alert
      </button>
    </div>
  )
}
