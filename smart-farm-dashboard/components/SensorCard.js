import { useEffect, useState } from 'react'

export default function SensorCard({ type, unit }) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    const interval = setInterval(async () => {
      const res = await fetch('/api/sensor?type=' + type)
      const data = await res.json()
      setValue(data.value)
    }, 3000)
    return () => clearInterval(interval)
  }, [type])

  return (
    <div className="card flex flex-col items-center">
      <p className="text-lg font-semibold capitalize">{type}</p>
      <p className="text-3xl">{value}{unit}</p>
    </div>
  )
}
