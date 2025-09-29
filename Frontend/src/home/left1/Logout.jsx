import React, { useState } from "react";
import { TbLogout2 } from "react-icons/tb";
import axios from "axios";
import toast from "react-hot-toast";

function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    console.log("Logout clicked ✅");
    setLoading(true);
    try {
      // thanks to vite proxy, we can just call /api/user/logout
      await axios.post("/api/user/logout", {}, { withCredentials: true });

      // clear localStorage
      localStorage.removeItem("ChatApp");

      toast.success("Logged out successfully");

      // redirect to login page
      window.location.href = "/login";
    } catch (error) {
      console.error("Error in Logout", error);
      toast.error("Error in logging out");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[4%] bg-slate-950 text-white flex flex-col justify-end">
      <div className="p-3 align-bottom">
        <button onClick={handleLogout} disabled={loading}>
          <TbLogout2 className="text-5xl p-2 hover:bg-gray-600 rounded-lg duration-300" />
        </button>
      </div>
    </div>
  );
}

export default Logout;
