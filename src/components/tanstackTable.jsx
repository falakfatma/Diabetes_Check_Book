import { useState } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { DATA } from "../data";

const columns = [
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "visits",
    header: "Visits",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: (props) => <p>{props.getValue()}</p>,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: (props) => <p>{props.getValue()}</p>,
  },
];

function tanstackTable() {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Box className="table">
       Grand Parent Box
      {table.getHeaderGroups().map((headerGroup) => {
        return( 
        <Box key={headerGroup.id} className="th">
          {headerGroup.headers.map((headers) => {
            return (
              <Box className="headers" key={headers.id}>
                {headers.column.columnDef.header}
               </Box>
             );
          })}
        </Box>
        )
      })}
    </Box>
  );
}
export default tanstackTable;
