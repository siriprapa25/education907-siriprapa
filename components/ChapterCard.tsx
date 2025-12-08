interface ChapterCardProps {
  title: string;
  description: string;
}

export default function ChapterCard({ title, description }: ChapterCardProps) {
  return (
    <div className="p-6 bg-white rounded-2xl border border-blue-100 shadow-md transition hover:-translate-y-1 hover:shadow-xl hover:border-blue-300 cursor-pointer">
      <h2 className="font-semibold text-xl text-blue-800">{title}</h2>
      <p className="text-gray-600 mt-2">{description}</p>
    </div>
  );
}
