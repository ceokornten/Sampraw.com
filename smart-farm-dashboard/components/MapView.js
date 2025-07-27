import { useState } from 'react'

const sensors = [
  { id: 1, name: 'Sensor 1', x: 30, y: 40 },
  { id: 2, name: 'Sensor 2', x: 60, y: 20 },
]

export default function MapView() {
  const [selected, setSelected] = useState(null)
  return (
    <div className="card relative h-64">
      {sensors.map(s => (
        <div
          key={s.id}
          className="absolute w-4 h-4 bg-blue-600 rounded-full cursor-pointer"
          style={{ left: s.x + '%', top: s.y + '%' }}
          onClick={() => setSelected(s)}
        />
      ))}
      {selected && (
        <div className="absolute left-2 top-2 p-2 bg-white rounded">
          {selected.name}
        </div>
      )}
    </div>
  )
}
