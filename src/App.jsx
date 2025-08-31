import { BrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#1E0338] flex justify-center items-center">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;
