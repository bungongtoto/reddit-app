import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
