import { Line } from 'react-chartjs-2'

const options = { scales: { y: { beginAtZero: true } } }

export default function ChartView({ data }) {
  const chartData = {
    labels: data.map(d => d.day),
    datasets: [
      {
        label: 'Soil Moisture',
        data: data.map(d => d.value),
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  }
  return (
    <div className="card">
      <Line data={chartData} options={options} />
    </div>
  )
}
