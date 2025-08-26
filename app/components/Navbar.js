import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-pink-600 px-4 py-3 shadow-md">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
       
        <h1 className="text-2xl md:text-3xl font-bold text-pink-950">
          Form Handler
        </h1>

        
        <div className="flex gap-4">
          <Link
            href="https://github.com/ADITYA-user18"
            target="_blank"
            className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/aditya-g-wandakar-875007343/"
            target="_blank"
            className="bg-pink-400 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition"
          >
            LinkedIn
          </Link>
        </div>
      </div>
    </nav>
  );
}
