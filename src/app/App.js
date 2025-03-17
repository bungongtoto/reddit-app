import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import AppLayout from "./AppLayout";
import HomePage from "../pages/HomePage";
import { SnackbarProvider } from "notistack";
import SearchPage from "../pages/SearchPage";
import PostDetailPage from "../pages/PostDetailPage";

/*
 * Here are the things you still have to do on this project
    - make search to also filter existing post and add to the search results
    - work on the state
    - do the test case 
    - work on the comment to be able show replies
    - make it responsive
 * 
 */

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
