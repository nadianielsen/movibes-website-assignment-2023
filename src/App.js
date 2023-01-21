import { Outlet } from "react-router-dom";
import Header from "./components/Header";

function App() {
  return (
  <>
  <Header />
  <main className="bg-teal-400">
    <Outlet />
  </main>
  </>
  );
}

export default App;
