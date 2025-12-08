"use client";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-400 to-blue-500 text-white py-10 shadow-lg">
      <div className="max-w-4xl mx-auto px-4 flex items-center gap-5">

        {/* รูปโปรไฟล์วงกลม */}
        <div className="w-20 h-20 rounded-full bg-white/30 border border-white/50 flex items-center justify-center text-3xl font-bold backdrop-blur-md shadow">
          IT
        </div>

        <div>
          <h1 className="text-3xl font-bold">การเตรียมความพร้อมฝึกประสบการณ์วิชาชีพ</h1>
          <p className="text-blue-100">Preparation for Professional Experience</p>
        </div>
      </div>
    </header>
  );
}
