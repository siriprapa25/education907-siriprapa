"use client";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-6 shadow-md">
      <div className="max-w-5xl mx-auto px-6 flex justify-between items-center">
        
        {/* Left Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-full bg-white/30 border border-white/50 
          flex items-center justify-center text-xl font-bold shadow backdrop-blur-md">
            IT
          </div>
          <div>
            <h1 className="text-xl font-bold">การเตรียมความพร้อมฝึกประสบการณ์</h1>
            <p className="text-blue-100 text-sm">
              Preparation for Professional Experience
            </p>
          </div>
        </Link>

        {/* Right Menu */}
        <nav className="flex gap-6 text-white text-lg">
          <Link href="/" className="hover:text-blue-200 transition">หน้าแรก</Link>
          <Link href="/description" className="hover:text-blue-200 transition">คำอธิบายรายวิชา</Link>
          <Link href="/profile" className="hover:text-blue-200 transition">โปรไฟล์</Link>
        </nav>
      </div>
    </header>
  );
}
