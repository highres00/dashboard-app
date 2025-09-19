"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div className="p-8">Loading profile...</div>;
  }

  if (!session) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Sign in to view your profile</h1>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded shadow hover:bg-blue-700 transition"
          onClick={() => signIn("google")}
        >
          Sign in with Google
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-lg mx-auto p-8 bg-white rounded-2xl shadow text-gray-900 mt-12">
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <div className="mb-4 flex items-center gap-4">
        <img
          src={session.user?.image || "/default-profile.svg"}
          alt="Profile"
          className="w-16 h-16 rounded-full border bg-gray-200 object-cover"
        />
        <div>
          <div className="font-semibold">{session.user?.name}</div>
          <div className="text-gray-600">{session.user?.email}</div>
        </div>
      </div>
      <button
        className="mt-4 px-6 py-2 bg-red-600 text-white rounded shadow hover:bg-red-700 transition"
        onClick={() => signOut()}
      >
        Sign out
      </button>
    </div>
  );
}
