"use client";
import React, { useState } from "react";
import useFetch from "@/hooks/useFetch";
import UserModal from "@/components/UserModal";

export default function UsersPage() {
  const { data: users, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
  const [selectedUser, setSelectedUser] = useState<any | null>(null);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!users) return <div>No users found.</div>;

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#1C1C3C] via-[#2D2D6D] to-[#3C3C9C] p-6 md:p-12 text-white">
      <div className="max-w-4xl mx-auto py-8">
        <h1 className="text-2xl font-bold mb-6">Users</h1>
        <div className="overflow-x-auto rounded-lg shadow-lg">
          <table className="min-w-full bg-white text-gray-900 rounded-lg">
            <thead>
              <tr>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Email</th>
                <th className="py-3 px-4 text-left">Company</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: any) => (
                <tr
                  key={user.id}
                  className="hover:bg-blue-100 cursor-pointer transition"
                  onClick={() => setSelectedUser(user)}
                >
                  <td className="py-2 px-4">{user.name}</td>
                  <td className="py-2 px-4">{user.email}</td>
                  <td className="py-2 px-4">{user.company?.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <UserModal user={selectedUser} onClose={() => setSelectedUser(null)} />
      </div>
    </main>
  );
}
