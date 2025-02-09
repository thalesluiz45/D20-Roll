import { Box } from "@chakra-ui/react";
import DiceRoll from "./components/DiceRoll";
import Sources from "./components/Sources";
function App() {
  return (
    <div>
      <Box bg="gray.950">
        <DiceRoll />
        <Sources />
      </Box>
    </div>
  );
}

export default App;
