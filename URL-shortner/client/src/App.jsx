import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Signup } from "./components/Signup";
function App() {
  // const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
