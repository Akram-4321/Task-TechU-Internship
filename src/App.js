
import {
  Routes,
  Route,
} from "react-router-dom";
import May from "./pages/May";

function App() {
 
  return (
    <Routes>
      <Route path="/" element={<May />} />
    </Routes>
  );
}
export default App;
