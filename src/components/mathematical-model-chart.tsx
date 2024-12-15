"use client"

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'

const data = Array.from({ length: 100 }, (_, i) => ({
  x: i,
  y: i
}))

export default function MathematicalModelChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" label={{ value: 'Fuck around', position: 'insideBottom', offset: -5 }} />
        <YAxis label={{ value: 'Find out', angle: -90, position: 'insideLeft' }} />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke="#8884d8" name="Fuck aroud ∝ Find out" />
      </LineChart>
    </ResponsiveContainer>
  )
}