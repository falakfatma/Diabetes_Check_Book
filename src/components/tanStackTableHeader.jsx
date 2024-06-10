import { useState } from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
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

function TanStackTableHeader() {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  console.log(table.getRowModel()) ;
  return (
    <>
      {table.getHeaderGroups().map((headerGroup) => {
        return( 
        <Box key={headerGroup.id} className="th">
          {headerGroup.headers.map((headers) => {
            return (
              <Box className="headers" key={headers.id}>
               <Heading fontSize='xl'>
                 {headers.column.columnDef.header}
               </Heading> 
               </Box>
             );
          })}
        </Box>
        )
      })}
    </>
  );
}
export default TanStackTableHeader;
