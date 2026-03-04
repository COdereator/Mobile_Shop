import React from "react";
import { ShoppingBag, Package, Users, DollarSign, Search } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-10">CaseStore</h1>

        <nav className="space-y-4">
          <div className="p-3 rounded-lg bg-gray-800 cursor-pointer">
            Dashboard
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Orders
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Products
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Customers
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Analytics
          </div>
          <div className="p-3 rounded-lg hover:bg-gray-800 cursor-pointer">
            Settings
          </div>
        </nav>

        <div className="mt-auto text-sm text-gray-400">© 2026 CaseStore</div>
      </div>

      {/* Main */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Dashboard</h2>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-white rounded-lg px-3 py-2 shadow">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                className="outline-none ml-2"
              />
            </div>

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <StatCard
            title="Total Orders"
            value="1,245"
            icon={<ShoppingBag />}
            color="bg-blue-500"
          />

          <StatCard
            title="Revenue"
            value="₹2,45,000"
            icon={<DollarSign />}
            color="bg-green-500"
          />

          <StatCard
            title="Products"
            value="350"
            icon={<Package />}
            color="bg-purple-500"
          />

          <StatCard
            title="Customers"
            value="890"
            icon={<Users />}
            color="bg-orange-500"
          />
        </div>

        {/* Orders */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-4">Recent Orders</h3>

          <table className="w-full">
            <thead className="text-left text-gray-500">
              <tr>
                <th className="py-2">Order</th>
                <th>Customer</th>
                <th>Product</th>
                <th>Price</th>
                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              <OrderRow
                id="#1024"
                customer="Rahul"
                product="iPhone 15 Case"
                price="₹799"
                status="Delivered"
              />

              <OrderRow
                id="#1025"
                customer="Ankit"
                product="Samsung S24 Case"
                price="₹699"
                status="Pending"
              />

              <OrderRow
                id="#1026"
                customer="Priya"
                product="OnePlus 12 Case"
                price="₹749"
                status="Shipped"
              />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-xl shadow p-5 flex justify-between items-center">
      <div>
        <p className="text-gray-500">{title}</p>
        <h3 className="text-2xl font-bold">{value}</h3>
      </div>

      <div className={`${color} text-white p-3 rounded-lg`}>{icon}</div>
    </div>
  );
}

function ProductCard({ name, price, image }) {
  return (
    <div className="bg-white rounded-xl shadow hover:shadow-lg transition">
      <img
        src={image}
        alt=""
        className="h-40 w-full object-cover rounded-t-xl"
      />

      <div className="p-4">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-gray-500">{price}</p>

        <button className="mt-3 bg-black text-white px-4 py-2 rounded-lg w-full">
          View Product
        </button>
      </div>
    </div>
  );
}

function OrderRow({ id, customer, product, price, status }) {
  const color =
    status === "Delivered"
      ? "text-green-500"
      : status === "Pending"
        ? "text-yellow-500"
        : "text-blue-500";

  return (
    <tr className="border-t">
      <td className="py-3">{id}</td>
      <td>{customer}</td>
      <td>{product}</td>
      <td>{price}</td>
      <td className={color}>{status}</td>
    </tr>
  );
}
