import React, { useEffect, useState } from "react";
import { calculateSpeed } from "../../common/calculate/calculateSpeed";
import { MainView } from "./MainView";


export interface MainContainerProps {
}

export interface StationData {
    x: number | null;
    y: number | null;
    reach?: number | null;
}

export interface DataWithSpeed extends StationData {
    id: number,
    distance?: number | null,
    speed?: number | null,
    note?: string | null
}

const baseData: StationData[] = [
    { x: 0, y: 0, reach: 9 },
    { x: 20, y: 20, reach: 6 },
    { x: 10, y: 0, reach: 12 },
    { x: 5, y: 5, reach: 13 },
    { x: 99, y: 25, reach: 2 },
    { x: 100, y: 100 },
    { x: 15, y: 10 },
    { x: 18, y: 18 },
    { x: 13, y: 13 },
    { x: 25, y: 99, reach: 10 },
]

export const MainContainer = (React.memo((_props: MainContainerProps) => {

    const [data, setData] = useState<{ maxId: number, data: DataWithSpeed[] }>();

    useEffect(() => {
        const calculatedData: DataWithSpeed[] = [];
        let maxSpeed = 0;
        let maxId = -1;
        baseData.forEach((data: StationData, idx: number) => {
            const d = data.reach !== null ? calculateSpeed(data) : null;
            let note = data.reach == null ? 'No network station' : null
            if (d && d.speed && d.speed > maxSpeed) {
                maxSpeed = d.speed;
                maxId = idx;
            }
            calculatedData.push({
                id: idx,
                reach: data.reach,
                x: data.x,
                y: data.y,
                distance: d?.distance,
                speed: d?.speed,
                note
            });
        })

        setData({
            maxId,
            data: calculatedData
        });

    },
        []
    )

    return (
        <MainView
            data={data?.data}
            maxId={data?.maxId}
        />
    );

}))