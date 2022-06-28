import EndButton from "./components/EndButton";
import StartButton from "./components/StartButton";
import TimeDisplay from "./components/TimeDisplay";
import { DataProvider } from "./context/DataContext.js";
import "bootstrap/dist/css/bootstrap.min.css";


function App() {
  return (
    <DataProvider>
      <StartButton />

      <EndButton />

      <TimeDisplay />
    </DataProvider>
  );
}

export default App;
