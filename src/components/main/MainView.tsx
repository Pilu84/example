import React from "react"
import { Table } from "../../common/table/Table";
import { DataWithSpeed } from "./MainContainer"


export interface MianViewProps {
    readonly data: DataWithSpeed[] | undefined;
    readonly maxId?: number | null;
}

export const MainView = (React.memo((props: MianViewProps) => {

    const { data, maxId } = props;

    const maxData = data?.find((d) => d.id === maxId);
    return (
        <>
            {data == null &&
                <div>
                    <p>No Data</p>
                </div>
            }
            {maxId != null &&
                <div>
                    <p>{`Best network station for point x, y is (${maxData?.x} , ${maxData?.y}) with speed ${maxData?.speed}`}</p>
                </div>
            }
            <Table
                rows={data}
                columnsData={
                    {
                        editable: false,
                        field: ['x', 'y', 'reach', 'distance', 'speed', 'note'],
                        headername: ['x', 'y', 'reach', 'distance', 'speed', 'note'],
                        width: [80, 80, 80, 100, 100, 400]
                    }
                }

            />
        </>
    )
}))