import {Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis} from "recharts";
import {useContext} from "react";
import {DataContext} from "../DataContext";

function TypeChart() {
    const {data, setData} = useContext(DataContext);
    const {entityType, setEntityType} = useContext(DataContext);
    let types = [];

    for (const entity of data) {
        if (entity.type === undefined) {

        } else {
            entity.type.map(type => types.push(type));
        }

    }

    const aCount = new Map([...new Set(types)].map(x => [x, types.filter(y => y === x).length]));
    const typeData = [];
    for (const val of aCount) {

        typeData.push({
            type: val[0], count: val[1]
        });

    }
    typeData.sort((a, b) => b.count - a.count);

    function handleChange(e) {
        setEntityType(e.type);

    }

    return (
        <div>

            <BarChart
                width={1000}
                height={400}
                data={typeData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3"/>
                <XAxis dataKey="type"/>
                <YAxis/>
                <Tooltip/>
                <Legend/>
                <Bar dataKey="count" fill="green" onClick={handleChange}/>

            </BarChart>

        </div>)

}

export default TypeChart;