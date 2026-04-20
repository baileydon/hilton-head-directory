import { Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Toaster } from "./components/ui/sonner";
import { SiteLayout } from "./components/SiteLayout";
import HomePage from "./pages/HomePage";
import { VerticalPage } from "./pages/VerticalPage";
import { CategoryPage } from "./pages/CategoryPage";
import { BusinessPage } from "./pages/BusinessPage";
import { ArticlesPage } from "./pages/ArticlesPage";
import { ArticlePage } from "./pages/ArticlePage";
import { SearchPage } from "./pages/SearchPage";
import { ListBusinessPage } from "./pages/ListBusinessPage";

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark" switchable={false}>
        <Toaster />
        <Routes>
          <Route element={<SiteLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/vertical/:slug" element={<VerticalPage />} />
            <Route path="/category/:slug" element={<CategoryPage />} />
            <Route path="/business/:slug" element={<BusinessPage />} />
            <Route path="/articles" element={<ArticlesPage />} />
            <Route path="/article/:slug" element={<ArticlePage />} />
            <Route path="/search" element={<SearchPage />} />
            <Route path="/list-your-business" element={<ListBusinessPage />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
