import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'
// import { data } from './../datas/IotData'


const LineCharts = ({ width, height, data }) => {
    return (
        <div>
            <ResponsiveContainer width="100%" height="80%" aspect={2.5}>
                <LineChart width={width} height={height} data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" interval={'preserveStartEnd'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="accelerometer" stroke='#42f551' activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="gyrometer" stroke='#121ccc' activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="magnetometer" stroke='#dceb0e' activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="batteryLevel" stroke='#f56042' activeDot={{ r: 8 }} />
                </LineChart>

            </ResponsiveContainer>

        </div>
    )
}

export default LineCharts