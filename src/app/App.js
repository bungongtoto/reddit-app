import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";
import PostDetail from "../pages/PostDetail";
import { SnackbarProvider } from "notistack";
import SearchPage from "../pages/SearchPage";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />\
            <Route path="post/:id" element={<PostDetail />} />
            <Route path="search" element={<SearchPage />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
