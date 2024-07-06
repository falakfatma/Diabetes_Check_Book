import { Heading, Box, Text, TableContainer, Table } from "@chakra-ui/react";
import "./App.css";
import TanStackTable from "./components/tanStackTable";
import Calender from "./components/calender"
import Global_Search_Input from "./components/globalSearch";
export default function App() {
  return (
    <main>
        <TanStackTable />
    </main>
  );
}
