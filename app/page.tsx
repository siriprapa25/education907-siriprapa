import ChapterCard from "@/components/ChapterCard";

export default function Page() {
  const fullDescription = `รายวิชานี้มุ่งเน้นการเสริมสร้างความรู้พื้นฐานเกี่ยวกับรูปแบบและกระบวนการฝึกประสบการณ์วิชาชีพ
ตั้งแต่การเตรียมตัวก่อนสมัครงาน ขั้นตอนการสมัครงาน การเลือกสถานประกอบการ การเตรียมเอกสารประกอบการสมัครงาน
การสัมภาษณ์งานอย่างมืออาชีพ จริยธรรมวิชาชีพ กฎหมายแรงงาน ความปลอดภัยในการทำงาน รวมถึงทักษะการพัฒนาบุคลิกภาพ
การรายงานผลการฝึกงาน การนำเสนองาน และเกณฑ์การประเมินผลในการฝึกประสบการณ์วิชาชีพ โดยผลการเรียนรู้ประเมินแบบ
ผ่าน (S) และ ไม่ผ่าน (U).`;

  const chapters = [
    {
      id: 1,
      title: "บทที่ 1 ความรู้เบื้องต้นเกี่ยวกับการฝึกประสบการณ์วิชาชีพ",
      description:
        "ความหมาย วัตถุประสงค์ ความสำคัญ ประเภทสถานประกอบการด้านเทคโนโลยี และภาพรวมกระบวนการฝึกงาน",
    },
    {
      id: 2,
      title: "บทที่ 2 การเตรียมพร้อมก่อนสมัครฝึกงาน",
      description:
        "การค้นหาสถานประกอบการ การเตรียมเอกสาร (Resume, Portfolio), จดหมายสมัครงาน และการพัฒนาบุคลิกภาพ",
    },
    {
      id: 3,
      title: "บทที่ 3 การสมัครงานและการสัมภาษณ์",
      description:
        "เทคนิคการเขียนใบสมัคร เทคนิคสัมภาษณ์งาน (ออนไลน์/ออนไซต์) การเตรียมตัวตอบคำถาม และการแต่งกายเหมาะสม",
    },
    {
      id: 4,
      title: "บทที่ 4 จรรยาบรรณวิชาชีพและกฎหมายแรงงาน",
      description:
        "จริยธรรมและความรับผิดชอบ พ.ร.บ.แรงงาน สิทธิผู้ฝึกงาน ประกันสังคม และ PDPA เบื้องต้น",
    },
    {
      id: 5,
      title: "บทที่ 5 กิจกรรม 5ส และระบบประกันคุณภาพ",
      description:
        "หลักการ 5ส การนำไปใช้จริง มาตรฐานคุณภาพ (QMS) และความปลอดภัยในการทำงานในองค์กร IT",
    },
    {
      id: 6,
      title: "บทที่ 6 การพัฒนาบุคลิกภาพและวัฒนธรรมองค์กร",
      description:
        "Soft skills การสื่อสาร ทำงานเป็นทีม การแก้ปัญหา วัฒนธรรมองค์กร และมุมมองที่องค์กรมองหา",
    },
    {
      id: 7,
      title: "บทที่ 7 การจัดทำรายงานและการนำเสนอผลการฝึกงาน",
      description:
        "โครงสร้างรายงาน สมุดบันทึกประจำวัน เทคนิคการสรุปผลและการนำเสนอผลงาน รวมถึงการประเมินผล S/U",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20">
      <div className="max-w-5xl mx-auto px-6 py-8">
        {/* Course header card */}
        <section id="description" className="mb-8">
          <div className="bg-white/90 border border-blue-100 rounded-2xl p-6 shadow-md">
            <h2 className="text-2xl font-bold text-blue-900 mb-3">คำอธิบายรายวิชา</h2>
            <p className="text-gray-700 leading-relaxed">{fullDescription}</p>
          </div>
        </section>

        {/* Chapters */}
        <section id="chapters">
          <h3 className="text-xl font-semibold text-blue-800 mb-4">เนื้อหา 7 บท</h3>

          <div className="grid gap-5">
            {chapters.map((c) => (
              <ChapterCard key={c.id} title={c.title} description={c.description} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
