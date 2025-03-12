import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";
import PostDetail from "../pages/PostDetail";
import { SnackbarProvider } from "notistack";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />\
            <Route path="post/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
