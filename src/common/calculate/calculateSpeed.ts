import { StationData } from "../../components/main/MainContainer";
import { calculateDistance } from "./calculateDistance";

export interface DataWithDistanceAndSpeed {
    distance: number | null;
    speed: number | null;
}

export const calculateSpeed = (data: StationData): DataWithDistanceAndSpeed => {

    const { x, y, reach } = data;

    const distance = x !== null && y !== null ? calculateDistance(x, y) : 0;

    let speed;

    if (x !== null && y !== null && reach != null) {
        speed = parseFloat((Math.pow((reach - distance), 2)).toFixed(2));
    }

    return {
        distance,
        speed: speed ?? null
    };
}