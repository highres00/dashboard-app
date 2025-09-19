"use client";
import { useSession, signIn, signOut } from "next-auth/react";

export default function ProfilePage() {
  const { data: session, status } = useSession();

  const gradientBg = "bg-gradient-to-b from-[#1C1C3C] via-[#2D2D6D] to-[#3C3C9C]";

  if (status === "loading") {
    return (
      <div className={`flex justify-center items-center min-h-screen ${gradientBg}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!session) {
    return (
      <div className={`flex flex-col items-center justify-center min-h-screen ${gradientBg}`}>
        <div className="bg-white/80 rounded-2xl shadow-lg p-8 max-w-md w-full mt-16">
          <h1 className="text-3xl font-extrabold mb-6 text-center text-blue-700">Sign in to view your profile</h1>
          <button
            className="w-full px-6 py-3 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition font-semibold text-lg flex items-center justify-center gap-2"
            onClick={() => signIn("google")}
          >
            <svg className="w-5 h-5" viewBox="0 0 48 48"><g><path fill="#4285F4" d="M24 9.5c3.54 0 6.7 1.22 9.19 3.23l6.85-6.85C36.68 2.36 30.77 0 24 0 14.82 0 6.71 5.82 2.69 14.09l7.98 6.2C12.13 13.13 17.56 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.55c0-1.64-.15-3.22-.42-4.74H24v9.01h12.42c-.54 2.9-2.18 5.36-4.65 7.01l7.19 5.59C43.98 37.13 46.1 31.3 46.1 24.55z"/><path fill="#FBBC05" d="M10.67 28.29a14.5 14.5 0 0 1 0-8.58l-7.98-6.2A23.97 23.97 0 0 0 0 24c0 3.77.9 7.34 2.69 10.29l7.98-6.2z"/><path fill="#EA4335" d="M24 48c6.48 0 11.93-2.15 15.9-5.85l-7.19-5.59c-2.01 1.35-4.58 2.15-8.71 2.15-6.44 0-11.87-3.63-14.33-8.79l-7.98 6.2C6.71 42.18 14.82 48 24 48z"/></g></svg>
            Sign in with Google
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center min-h-screen ${gradientBg}`}>
      <div className="bg-white/90 rounded-3xl shadow-xl p-10 max-w-md w-full border border-blue-100 mt-16">
        <div className="flex flex-col items-center mb-6">
          <div className="relative">
            <img
              src={session.user?.image || "/default-profile.svg"}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-blue-200 bg-gray-100 object-cover shadow"
            />
            <span className="absolute bottom-1 right-1 block w-4 h-4 bg-green-400 border-2 border-white rounded-full"></span>
          </div>
          <h1 className="text-2xl font-bold mt-4 text-blue-800">{session.user?.name}</h1>
          <div className="text-gray-600">{session.user?.email}</div>
        </div>
        <button
          className="w-full mt-4 px-6 py-3 bg-red-600 text-white rounded-xl shadow hover:bg-red-700 transition font-semibold text-lg"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </div>
    </div>
  );
}
