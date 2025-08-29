'use client';

// Admin dashboard with custom authentication
import { useState } from "react";

export default function AdminPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authenticated, setAuthenticated] = useState(false);

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    if (username === "adel" && password === "123456") {
      setAuthenticated(true);
    } else {
      alert("Invalid credentials");
    }
  }

  if (!authenticated) {
    return (
      <main className="flex flex-col items-center justify-center min-h-screen p-4">
        <h1 className="text-3xl font-bold mb-4">Admin Login</h1>
        <form onSubmit={handleLogin} className="w-full max-w-sm bg-white rounded-lg shadow p-6 flex flex-col gap-4">
          <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="border p-2 rounded" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="border p-2 rounded" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded">Login</button>
        </form>
      </main>
    );
  }

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold mb-4">Admin Dashboard</h1>
      <div className="w-full max-w-2xl bg-white rounded-lg shadow p-6 flex flex-col gap-6 items-center">
        <p>Product management features coming soon...</p>
        <a href="/admin/add-meal">
          <button className="bg-green-600 text-white px-6 py-2 rounded shadow hover:bg-green-700 transition">Ajouter un plat</button>
        </a>
      </div>
    </main>
  );
}
