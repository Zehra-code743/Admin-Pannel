
// "use client";

// import { useRouter } from "next/navigation";
// import { useState } from "react";

// export default function AdminLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const router = useRouter();

//   const handleLogin = (e: React.FormEvent) => {
//     e.preventDefault();

//     // Fetch credentials from environment variables
//     const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
//     const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

//     if (email === adminEmail && password === adminPassword) {
//       localStorage.setItem("isLoggedIn", "true");
//       router.push("/admin/dashboard");
//     } else {
//       alert("Invalid email or password");
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow-md">
//         <h2 className="text-xl font-bold mb-4">Admin Login</h2>
//         <input
//           type="email"
//           placeholder="Email"
//           onChange={(e) => setEmail(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={email}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           onChange={(e) => setPassword(e.target.value)}
//           className="w-full p-3 mb-4 border border-gray-300 rounded"
//           value={password}
//         />
//         <button
//           type="submit"
//           className="bg-gradient-to-r from-pink-400 to-rose-500 text-white px-4 py-2 rounded w-full"
//         >
//           Login
//         </button>
//       </form>
//     </div>
//   );
// }









"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD;

    if (email === adminEmail && password === adminPassword) {
      localStorage.setItem("isLoggedIn", "true");
      router.push("/admin/dashboard");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-r from-gray-900 to-gray-800">
      <motion.form 
        onSubmit={handleLogin}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg text-white w-96 border border-white/20"
      >
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-4 bg-white/20 border border-white/30 rounded text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={email}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-white/20 border border-white/30 rounded text-white focus:outline-none focus:ring-2 focus:ring-pink-400"
          value={password}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="bg-gradient-to-r from-pink-500 to-rose-600 text-white px-4 py-3 rounded w-full font-bold shadow-md"
        >
          Login
        </motion.button>
      </motion.form>
    </div>
  );
}
