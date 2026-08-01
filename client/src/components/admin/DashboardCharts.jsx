import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

function DashboardCharts({ stats }) {
  const pieData = [
    {
      name: "Confirmed",
      value: stats.confirmedAppointments,
    },
    {
      name: "Pending",
      value: stats.pendingAppointments,
    },
    {
      name: "Completed",
      value: stats.completedAppointments,
    },
    {
      name: "Cancelled",
      value: stats.cancelledAppointments,
    },
  ];

  const barData = [
    {
      name: "Doctors",
      total: stats.totalDoctors,
    },
    {
      name: "Patients",
      total: stats.totalPatients,
    },
    {
      name: "Appointments",
      total: stats.totalAppointments,
    },
  ];

  const COLORS = [
    "#22c55e",
    "#eab308",
    "#3b82f6",
    "#ef4444",
  ];

  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {/* Bar Chart */}

      <div className="rounded-2xl bg-slate-900 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Hospital Overview
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Legend />

            <Bar dataKey="total" fill="#06b6d4" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}

      <div className="rounded-2xl bg-slate-900 p-6">
        <h2 className="mb-6 text-2xl font-bold text-white">
          Appointment Status
        </h2>

        <ResponsiveContainer width="100%" height={320}>
          <PieChart>
            <Pie
              data={pieData}
              dataKey="value"
              outerRadius={110}
              label
            >
              {pieData.map((entry, index) => (
                <Cell
                  key={index}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>

            <Tooltip />

            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardCharts;