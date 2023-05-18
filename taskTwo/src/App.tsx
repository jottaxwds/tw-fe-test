import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MealsProvider } from "./context/mealsContext";
import Detail from "./views/Detail/Detail";
import Home from "./views/Home/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MealsProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail/:mealId" element={<Detail />} />
          </Routes>
        </MealsProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
