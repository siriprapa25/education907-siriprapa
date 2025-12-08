import Header from "@/components/Header";
import ChapterCard from "@/components/ChapterCard";

export default function Page() {
  const chapters = [
    {
      title: "บทที่ 1 ความรู้เบื้องต้นเกี่ยวกับการฝึกประสบการณ์วิชาชีพ",
      description:
        "ความหมาย ความสำคัญ วัตถุประสงค์ของการฝึกงาน และภาพรวมของการปฏิบัติงานในสถานประกอบการ",
    },
    {
      title: "บทที่ 2 การเตรียมความพร้อมก่อนสมัครฝึกงาน",
      description:
        "ค้นหาสถานประกอบการ การเตรียมเอกสาร Resume, Portfolio และการพัฒนาบุคลิกภาพ",
    },
    {
      title: "บทที่ 3 กระบวนการสมัครงานและการสัมภาษณ์งาน",
      description:
        "การเขียนใบสมัคร จดหมายสมัครงาน เทคนิคสัมภาษณ์งาน และการประเมินผู้สมัคร",
    },
    {
      title: "บทที่ 4 จริยธรรมวิชาชีพและกฎหมายแรงงาน",
      description:
        "กฎหมายแรงงาน จรรยาบรรณวิชาชีพ ประกันสังคม วัฒนธรรมองค์กร และกฎระเบียบ",
    },
    {
      title: "บทที่ 5 การปฏิบัติงานในสถานประกอบการ",
      description:
        "บทบาทหน้าที่ ทักษะการทำงานร่วมกับทีม การแก้ปัญหา และกิจกรรม 5ส ความปลอดภัย",
    },
    {
      title: "บทที่ 6 การประเมินผลและประกันคุณภาพ",
      description:
        "การประเมินจากองค์กร การประเมินตนเอง มาตรฐานด้านความปลอดภัย และคุณภาพงาน",
    },
    {
      title: "บทที่ 7 การจัดทำรายงานและนำเสนอผล",
      description:
        "การเขียนรายงานฝึกงาน สมุดบันทึก การนำเสนอผลงาน และการสะท้อนบทเรียน",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <Header />

      {/* Course Description */}
      <section className="max-w-4xl mx-auto px-4 mt-10">
        <h2 className="text-2xl font-bold text-blue-900 mb-3">คำอธิบายรายวิชา</h2>

        <div className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-blue-100">
          <p className="text-gray-700 leading-relaxed">
            รายวิชานี้มุ่งเน้นการเสริมสร้างความรู้พื้นฐานเกี่ยวกับกระบวนการฝึกประสบการณ์วิชาชีพ
            ตั้งแต่การเตรียมตัวก่อนสมัครงาน ขั้นตอนการสมัครงาน การเลือกสถานประกอบการ
            การสัมภาษณ์งานอย่างมีประสิทธิภาพ การพัฒนาบุคลิกภาพ จริยธรรมวิชาชีพ
            กฎหมายแรงงาน ความปลอดภัยในการทำงาน ตลอดจนการเขียนรายงานสรุปผลและการนำเสนอผลงาน
            โดยประเมินผลแบบผ่าน (S) และไม่ผ่าน (U)
          </p>
        </div>
      </section>

      {/* Chapters list */}
      <div className="max-w-4xl mx-auto px-4 grid gap-6 mt-10">
        {chapters.map((c, i) => (
          <ChapterCard key={i} title={c.title} description={c.description} />
        ))}
      </div>
    </main>
  );
}
