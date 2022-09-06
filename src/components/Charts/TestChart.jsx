import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts'

// Line chart for data2

const data2 = [10, 20, 30, 33, 55];

const modifiedData2 = data2.map((ele) => ({ val: ele }))

// note : Inputdata in rechart is in array of objects form
//  so, normal array like : data 2 should be converted to arrays of objects first like:
// [{val:10},{val:20},{val:30},...]

const TestChart = () => {
    return (
        <div className='mt-2'>

            <ResponsiveContainer width="100%" height="100%" aspect={3}>
                <LineChart width={500} height={400} data={modifiedData2}>
                    <CartesianGrid strokeDasharray=" 3 3" />
                    <XAxis interval={'preserveStartEnd'} />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" stroke="#82ca9d" dataKey="val" activeDot={{ r: 8 }} />

                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default TestChart