"use client";

import Image from "next/image";
import ChapterCard from "@/components/ChapterCard";

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-sky-50 text-slate-800">
      {/* Header Area */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-20 -right-20 w-96 h-96 bg-sky-200/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 text-center relative">
          {/* Profile Picture */}
          <div className="relative w-[190px] h-[190px] mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400 to-blue-500 blur-md opacity-60" />
            <Image
              src="/profile.png"
              alt="Profile Image"
              width={180}
              height={180}
              priority
              className="relative rounded-full mx-auto object-cover border-4 border-white shadow-2xl"
            />
          </div>

          {/* Name & Position */}
          <h1 className="text-4xl font-bold mt-8">
            Siriprapa Horadee
          </h1>
          <p className="text-lg text-slate-600 mt-2">
            Information Technology • IT
          </p>
        </div>
      </section>

      {/* Profile Content */}
      <section className="pb-20">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          
          {/* About Me */}
          <ChapterCard title="About Me" variant="highlight">
            <p className="leading-relaxed text-slate-700">
              I am a passionate developer who enjoys building modern web
              applications using React, Next.js, Tailwind CSS, and UI/UX
              design. I love creating clean, minimal, and enjoyable user
              experiences.
            </p>
          </ChapterCard>

          {/* Skills */}
          <ChapterCard title="Skills">
            <ul className="list-disc list-outside pl-5 space-y-2 text-slate-700">
              <li>React / Next.js</li>
              <li>Node.js / Express</li>
              <li>UI / UX Design</li>
              <li>Tailwind CSS</li>
              <li>ChatGPT & AI Tools</li>
            </ul>
          </ChapterCard>

          {/* Education */}
          <ChapterCard title="Education">
            <div className="space-y-4 text-slate-700">
              <p>
                <strong>2563 – 2566</strong><br />
                ระดับมัธยมศึกษาตอนปลาย (สายวิทย์-คณิต)<br />
                โรงเรียนเกาะคาวิทยาคม
              </p>

              <p>
                <strong>2566 – ปัจจุบัน</strong><br />
                ระดับปริญญาตรี – Information Technology<br />
                มหาวิทยาลัยเทคโนโลยีราชมงคลล้านนา ลำปาง
              </p>
            </div>
          </ChapterCard>
        </div>
      </section>
    </div>
  );
}
