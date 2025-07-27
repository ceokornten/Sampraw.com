import Layout from '../components/Layout'
import SensorCard from '../components/SensorCard'
import MapView from '../components/MapView'
import PumpControl from '../components/PumpControl'
import NotificationsPanel from '../components/NotificationsPanel'
import ChartView from '../components/ChartView'

const sampleData = [
  { day: 'Mon', value: 40 },
  { day: 'Tue', value: 45 },
  { day: 'Wed', value: 50 },
  { day: 'Thu', value: 55 },
  { day: 'Fri', value: 52 },
  { day: 'Sat', value: 48 },
  { day: 'Sun', value: 46 },
]

export default function Home() {
  return (
    <Layout>
      <div className="grid gap-4 md:grid-cols-3">
        <SensorCard type="temperature" unit="°C" />
        <SensorCard type="humidity" unit="%" />
        <SensorCard type="soil" unit="%" />
      </div>
      <div className="my-4 grid gap-4 md:grid-cols-2">
        <MapView />
        <PumpControl />
      </div>
      <ChartView data={sampleData} />
      <div className="my-4">
        <NotificationsPanel />
      </div>
    </Layout>
  )
}
