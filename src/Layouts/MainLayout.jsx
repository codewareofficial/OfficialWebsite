import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
// Remove the Connect import from here

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <Navbar />

      <main className="flex-1">
        {/* Only the page you click on will show up here */}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;