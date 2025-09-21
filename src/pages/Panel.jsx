import React, { useState } from "react";
import { FaUsers, FaChartLine, FaGift, FaSignOutAlt, FaBars } from "react-icons/fa";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, Title, Tooltip, Legend);

function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const stats = [
    { name: "Total Referrals", value: 120, max: 200, icon: <FaUsers className="text-red-500" /> },
    { name: "Revenue Goal", value: 7500, max: 10000, icon: <FaChartLine className="text-red-500" /> },
    { name: "Active Users", value: 450, max: 500, icon: <FaGift className="text-red-500" /> },
  ];

  const referralData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Referrals",
        data: [20, 35, 40, 50, 65, 80, 120],
        borderColor: "#f87171",
        backgroundColor: "rgba(248,113,113,0.2)",
        tension: 0.4,
      },
    ],
  };

  const revenueData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "Revenue ($)",
        data: [2000, 2500, 4000, 5000, 6000, 7000, 7500],
        backgroundColor: "#f87171",
      },
    ],
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`bg-gray-900 text-gray-200 w-64 space-y-6 py-7 px-2 fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out z-50
          ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:relative`}
      >
        <div className="text-2xl font-bold text-red-500 px-4">DIGITAL BISHNU</div>
        <nav className="mt-10 space-y-2">
          <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-800 rounded-md">
            <FaUsers className="mr-3" /> Referrals
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-800 rounded-md">
            <FaChartLine className="mr-3" /> Analytics
          </a>
          <a href="#" className="flex items-center px-4 py-2 text-gray-200 hover:bg-gray-800 rounded-md">
            <FaGift className="mr-3" /> Rewards
          </a>
        </nav>
        <div className="absolute bottom-0 w-full px-4 py-4">
          <button className="flex items-center w-full px-4 py-2 text-gray-200 hover:bg-gray-800 rounded-md">
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col ml-0 md:ml-64">
        {/* Top Navbar */}
        <header className="flex justify-between items-center bg-white shadow px-4 py-3 md:py-4 sticky top-0 z-40">
          <div className="flex items-center">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-gray-700 focus:outline-none md:hidden mr-4"
            >
              <FaBars size={24} />
            </button>
            <h1 className="text-2xl font-semibold text-gray-700">Dashboard</h1>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-10">
          {/* Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {stats.map((stat, idx) => {
              const percentage = Math.min((stat.value / stat.max) * 100, 100);
              return (
                <div key={idx} className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-gray-700 font-semibold">{stat.name}</h2>
                    {stat.icon}
                  </div>
                  <p className="text-gray-500 mb-2">
                    {stat.value} / {stat.max}
                  </p>
                  <div className="w-full bg-gray-200 h-3 rounded-full overflow-hidden">
                    <div
                      className="bg-red-500 h-3 rounded-full transition-all"
                      style={{ width: `${percentage}%` }}
                    ></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-gray-700 font-semibold mb-4">Referrals Over Time</h2>
              <Line data={referralData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-gray-700 font-semibold mb-4">Revenue Over Time</h2>
              <Bar data={revenueData} options={{ responsive: true, plugins: { legend: { display: false } } }} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
