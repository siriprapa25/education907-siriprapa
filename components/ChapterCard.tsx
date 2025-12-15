import Image from "next/image";
import { ReactNode } from "react";

interface ChapterCardProps {
  title: string;
  description?: string;
  image?: string;
  onClick?: () => void;
  children?: ReactNode;
  variant?: "default" | "highlight";
}

export default function ChapterCard({
  title,
  description,
  image,
  onClick,
  children,
  variant = "default",
}: ChapterCardProps) {



  return (
    <div
      className="
        p-6 bg-white rounded-2xl border border-blue-100
        shadow-md transition duration-300 ease-out
        hover:shadow-xl hover:-translate-y-0.5
      "
    >
      <h2 className="font-semibold text-xl text-blue-800 mb-2">
        {title}
      </h2>

      <div className="text-gray-600 leading-relaxed">
        {description && <p>{description}</p>}
        {children}
      </div>
    </div>
  );
}
