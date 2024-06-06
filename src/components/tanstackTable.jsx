import { useState } from 'react'
import { Box, Heading } from "@chakra-ui/react";
import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import {DATA} from '../data';

const columns =[
  {
    accessorKey:'first_Name',
    header :'First Name',
    cell: (props) => {
      return <p>{props.getValue()}</p>
    }
  },
  {
    accessorKey:'last_Name',
    header :'Last Name',
    cell: (props) => {
      return <p>{props.getValue()}</p>
    }
  },
  {
    accessorKey:'age',
    header :'Age',
    cell: (props) => {
      return <p>{props.getValue()}</p>
    }
  },
  {
    accessorKey:'visits',
    header :'Visits',
    cell: (props) => {
      return <p>{props.getValue()}</p>
    }
  },
  {
    accessorKey:'progress',
    header :'Progress',
    cell: (props) => {
      return <p>{props.getValue()}</p>
    }
  },
  {
    accessorKey:'status',
    header :'Status',
    cell: (props) => {
      return <p>{props.getValue()}</p>
    }
  },
  
]

const tanstackTable = () => {
  const [data , setData] = useState(DATA)

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel:getCoreRowModel()
  })
  console.log(table.getHeaderGroups())
  return (
    <Box className="table">
    </Box>
  );
};
export default tanstackTable;