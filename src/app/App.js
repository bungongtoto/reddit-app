import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";
import { SnackbarProvider } from "notistack";
import SearchPage from "../pages/SearchPage";
import PostDetailPage from "../pages/PostDetailPage";

function App() {
  return (
    <BrowserRouter>
      <SnackbarProvider>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<HomePage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="post/:postId" element={<PostDetailPage />} />
          </Route>
        </Routes>
      </SnackbarProvider>
    </BrowserRouter>
  );
}

export default App;
