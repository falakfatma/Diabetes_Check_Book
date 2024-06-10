import { Heading, Box, Text, TableContainer, Table } from "@chakra-ui/react";
import "./App.css";
import TanStackTable from "./components/tanStackTable";

export default function App() {
  return (
    <main>
      <Heading> TanStackTable </Heading>
        <TanStackTable />
    </main>
  );
}
