import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
  <Header />
  <main className="grid grid-cols-4 w-full">
    <Outlet />
  </main>
  </>
  );
}

export default App;
