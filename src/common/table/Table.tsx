import React from "react";
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export interface ColumsLabel {
    readonly field: string[];
    readonly headername: string[];
    readonly editable: boolean | boolean[];
    readonly width: number | number[];
}

export interface TableProps<T> {
    readonly rows: T[] | undefined;
    readonly columnsData: ColumsLabel;
}


export const Table = (React.memo(function Table<T>(props: TableProps<T>) {

    const columns: GridColDef[] = [];

    const { field, headername, editable, width } = props.columnsData;

    field.forEach((f: string, idx: number) => {
        columns.push({
            field: f,
            headerName: headername[idx],
            width: Array.isArray(width) ? width[idx] : width,
            editable: Array.isArray(editable) ? editable[idx] : editable
        })
    })

    return (
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={props.rows ?? []}
                loading={props.rows?.length === 0}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 10,
                        },
                    },
                }}
                pageSizeOptions={[10]}
                disableRowSelectionOnClick
            />
        </div>
    );
}));