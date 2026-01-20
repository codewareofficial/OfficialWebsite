import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";
import Connect from "@/pages/Connect"; // 1. Import the Connect component

const MainLayout = () => {
  return (
    // Added bg-neutral-950 to ensure the whole page background is seamless
    <div className="min-h-screen flex flex-col bg-neutral-950">
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      {/* 2. Place Connect right above Footer */}
      <Connect />

      <Footer />
    </div>
  );
};

export default MainLayout;