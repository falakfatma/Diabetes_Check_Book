import { Heading, Box, Text } from "@chakra-ui/react";
import "./App.css";
import TanStackTableHeader from "./components/tanStackTableHeader"

export default function App() {
  return (
    <main>
      <Heading> TanStackTable </Heading>
      <Box className="table">
        <TanStackTableHeader />
      </Box>
    </main>
  );
}
