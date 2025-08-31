import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import RootLayout from "./layout/RootLayout";
import UserLayout from "./layout/UserLayout";
import Home from "./pages/Home";

export default function App() {
    return (
        <div>
            <Header />
            <Routes>
                {/* A single dynamic route for all authenticated users */}
                <Route path="/:userRole/*" element={<UserLayout />} />
                
                {/* The root path for the home page or guest landing page */}
                <Route path="/" element={<RootLayout />} >
                    <Route index element={<Home />}/>
                </Route>                
                {/* A catch-all route for any undefined paths */}
                <Route path="*" element={<h1 className="flex items-center justify-center h-screen">404: Not Found</h1>} />
            </Routes>
        </div>
    );
}