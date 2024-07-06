import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Input,
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
  getFilteredRowModel,
} from '@tanstack/react-table'


import { DATA } from "../data";
import EditableCell from "./editableCell"
import StatusDropdown from "./status";
import CalendarData from "./calender";
import Global_Search_Input from "./globalSearch";
const columns = [
  {
    accessorKey: "firstName",
    header: "First Name",
    cell: EditableCell,
  },
  {
    accessorKey: "lastName",
    header: "Last Name",
    cell: EditableCell,
  },
  {
    accessorKey: "age",
    header: "Age",
    cell: EditableCell,
  },
  {
    accessorKey: "visits",
    header: "Visits",
    cell: EditableCell,
  },
  {
    accessorKey: "progress",
    header: "Progress",
    cell: EditableCell,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: StatusDropdown,
  },
  {
    accessorKey: "updatedDate",
    header: "Updated Date",
    cell: CalendarData
  },
];

function TanStackTable() {
  const [data, setData] = useState(DATA);
  const [columnFilters, setColumnFilters] = useState([

  ])
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    state:{
      columnFilters
    },
    getFilteredRowModel:getFilteredRowModel(),
    columnResizeMode:"onChange",
    defaultColumn: {
      "size" : "60",
      "maxSize" : "209",
    },
    
    meta:{
      updateData : (rowId,columnId,Value)=>{
        setData(
          old => old.map((row,index)=>{
            if(index === rowId){
              return {...row,[columnId]:Value}
            }else{
              return row
            }
          })
        )
      }
    }
  });
  console.log(data)

  return (
    <TableContainer>
      <Global_Search_Input columnFilters={columnFilters} setColumnFilters={setColumnFilters}/>
      <Table variant="striped" color="black">
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
