import { useState } from 'react'

export default function PumpControl() {
  const [mode, setMode] = useState('auto')
  return (
    <div className="card flex items-center justify-between">
      <span className="font-semibold">Water Pump</span>
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={() => setMode(mode === 'auto' ? 'manual' : 'auto')}
      >
        {mode === 'auto' ? 'Auto' : 'Manual'}
      </button>
    </div>
  )
}
