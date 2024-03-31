import { Routes, Route } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TransactionPage from "./pages/TransactionPage";
import NotFoundPgae from "./pages/NotFoundPgae";
import Header from "./components/ui/Header";

function App() {
  const authUser = false;
  return (
    <>
      {authUser && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/sign" element={<SignUpPage />}></Route>
        <Route path="/transaction/:id" element={<TransactionPage />}></Route>
        <Route path="*" element={<NotFoundPgae />}></Route>
      </Routes>
    </>
  );
}

export default App;
