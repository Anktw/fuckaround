"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = Array.from({ length: 100 }, (_, i) => {
  const p = i / 100
  return {
    p,
    entropy: p === 0 ? 0 : -p * Math.log2(p) - (1-p) * Math.log2(1-p)
  }
})

export default function EntropyGraph() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="p" label={{ value: 'Probability', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: 'Entropy', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="entropy" stroke="#82ca9d" name="Entropy" />
      </LineChart>
    </ResponsiveContainer>
  )
}

