import { Heading, Box, Text } from "@chakra-ui/react";
import "./App.css";
import TanStackTable from "./components/tanStackTable"

export default function App() {
  return (
    <main>
      <Heading> TanStackTable </Heading>
      <Box className="table">
        <TanStackTable />
      </Box>
    </main>
  );
}
