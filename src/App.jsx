import { Heading } from "@chakra-ui/react";
import "./App.css";
import TanStackTable from "./components/tanstackTable"

export default function App() {
  return (
    <main>
      <Heading> TanStackTable </Heading>
      <TanStackTable />
    </main>
  );
}
