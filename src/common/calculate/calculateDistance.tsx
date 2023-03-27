export const calculateDistance = (x: number, y: number): number => {

    let distance: number = 0;

    if (x !== null && y !== null) {
        distance = parseFloat((Math.sqrt((Math.pow(x, 2)) + (Math.pow(y, 2)))).toFixed(2));
    }

    return distance;

}