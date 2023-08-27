import { Routes, Route } from "react-router-dom";
import Dashboard from "../page/Dashboard";
import Investment from "../page/Investment";
import Insurance from "../page/Insurance";
import Loans from "../page/Loans";

function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/investment" element={<Investment />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/loans" element={<Loans />} />
      </Routes>
    </>
  );
}
export default Routing;
