import { Routes, Route, Navigate } from "react-router-dom";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import TransactionPage from "./pages/TransactionPage";
import NotFoundPgae from "./pages/NotFoundPgae";
import Header from "./components/ui/Header";
import { useQuery } from "@apollo/client";
import { GET_AUTHENTICATED_USER } from "./graphql/queries/user.query";
import { Toaster } from "react-hot-toast";

function App() {
  const authUser = true;
  const { loading, data, error } = useQuery(GET_AUTHENTICATED_USER);

  if (loading) return null;
  return (
    <>
      {data?.authUser && <Header />}
      <Routes>
        <Route
          path="/"
          element={data.authUser ? <HomePage /> : <Navigate to="login" />}
        ></Route>
        <Route
          path="/login"
          element={!data.authUser ? <LoginPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/signup"
          element={!data.authUser ? <SignUpPage /> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/Transaction/:id"
          element={
            data.authUser ? <TransactionPage /> : <Navigate to="/login" />
          }
        ></Route>
        <Route path="*" element={<NotFoundPgae />}></Route>
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
