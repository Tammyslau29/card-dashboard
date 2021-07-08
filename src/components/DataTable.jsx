import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DEFAULT_GRID_OPTIONS } from "@material-ui/x-grid";

const columns = [
  { field: "created_at", headerName: "Created At", width: 300 },
  {
    field: "category",
    headerName: "Category",
    width: 300
  },
  {
    field: "amount",
    headerName: "Amount",
    width: 300,
  },
  {
    field: "merchant",
    headerName: "Merchant",
    width: 300,
  }
];

const { rowHeight, headerHeight } = DEFAULT_GRID_OPTIONS;

export default function DataGridDemo(props) {
 const { data }  = props

  return (
    <div style={{ height: headerHeight + rowHeight * 5 }}>
      <DataGrid pagination rowLength={data.length} pageSize={5} columns={columns} rows={data} />
    </div>
  );
}
