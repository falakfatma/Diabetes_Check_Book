import { useState } from "react";
import { Box, Heading, Text, Table,
         Thead,
         Tbody,
         Tfoot,
         Tr,
         Th,
         Td,
         TableCaption,
         TableContainer, } from "@chakra-ui/react";
import {
  getCoreRowModel,
  useReactTable,
  flexRender,
} from "@tanstack/react-table";
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

function TanStackTable() {
  const [data, setData] = useState(DATA);
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  // console.log(table.getRowModel());
  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((headers) => {
                return (
                    <Th fontSize="xl" key={headers.id}>
                      {headers.column.columnDef.header}
                    </Th>
                );
              })}
            </Tr>
          );
        })}
  
        {table.getRowModel().rows.map((row) => {
          console.log(row.getVisibleCells());
          return (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => {
                return (
                    <Td key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </Td>
                );
              })}
            </Tr>
          );
        })}
      </Table>
    </TableContainer>


    // <TableContainer>
    //   <Table variant='simple'>
    //     <TableCaption>Imperial to metric conversion factors</TableCaption>
    //     <Thead>
    //       <Tr>
    //         <Th>To convert</Th>
    //       </Tr>
    //     </Thead>
    //     <Tbody>
    //       <Tr>
    //         <Td>inches</Td>
    //         <Td>millimetres (mm)</Td>
    //         <Td isNumeric>25.4</Td>
    //       </Tr>
    //       <Tr>
    //         <Td>feet</Td>
    //         <Td>centimetres (cm)</Td>
    //         <Td isNumeric>30.48</Td>
    //       </Tr>
    //       <Tr>
    //         <Td>yards</Td>
    //         <Td>metres (m)</Td>
    //         <Td isNumeric>0.91444</Td>
    //       </Tr>
    //     </Tbody>
    //     <Tfoot>
    //       <Tr>
    //         <Th>To convert</Th>
    //         <Th>into</Th>
    //         <Th isNumeric>multiply by</Th>
    //       </Tr>
    //     </Tfoot>
    //   </Table>
    // </TableContainer>
  );
}
export default TanStackTable;
