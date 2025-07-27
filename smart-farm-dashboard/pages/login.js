import { useState } from 'react'
import Layout from '../components/Layout'

export default function Login() {
  const [role, setRole] = useState('farmer')

  return (
    <Layout>
      <div className="card max-w-sm mx-auto">
        <h2 className="text-xl font-semibold mb-2">Login</h2>
        <select
          className="border p-2 mb-4 w-full"
          value={role}
          onChange={e => setRole(e.target.value)}
        >
          <option value="farmer">Farmer</option>
          <option value="admin">Admin</option>
        </select>
        <button className="bg-green-600 text-white px-4 py-2 rounded w-full">
          Login as {role}
        </button>
      </div>
    </Layout>
  )
}
