import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from '@tanstack/react-table'


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
    columnResizeMode:"onChange",

  });
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>Data</TableCaption>
        {table.getHeaderGroups().map((headerGroup) => {
          return (
            <Thead key={headerGroup.id}>
              <Tr>
                {headerGroup.headers.map((header) => {
                  return (
                    <Th 
                      className="th"
                      fontSize="xl" 
                      key={header.id}
                      w={header.getSize()}>
                      {header.column.columnDef.header}
                      <Box 
                        onMouseDown={header.getResizeHandler()}
                        onTouchStart={header.getResizeHandler()} 
                        className={`resizer ${
                          header.column.getIsResizing() ? "isResizing" : ""
                        }`}
                        />
                    </Th>
                  );
                })}
              </Tr>
            </Thead>
          );
        })}
        <Tbody>
          {table.getRowModel().rows.map((row) => {
            return (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Td>
                  );
                })}
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
export default TanStackTable;
