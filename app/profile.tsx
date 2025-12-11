import Header from "../components/Header";

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white pb-20 animate-fadeIn">
      <Header />

      <div className="max-w-3xl mx-auto px-5 mt-10">

        <div className="bg-white rounded-2xl shadow-xl p-8 border border-blue-100">
          <div className="flex items-center gap-6">
            
            <div className="w-28 h-28 rounded-full bg-blue-300 shadow-lg 
            flex items-center justify-center text-3xl font-bold text-white">
              SH
            </div>

            <div>
              <h2 className="text-2xl font-bold text-blue-900">โปรไฟล์ผู้เรียน</h2>
              <p className="text-gray-600">Siriprapa Horadee</p>
            </div>
          </div>

          <div className="mt-6 text-gray-700 leading-relaxed">
            <p><b>สาขา:</b> เทคโนโลยีสารสนเทศ</p>
            <p><b>อีเมล:</b> siriprapa@example.com</p>
            <p><b>สถานะ:</b> นักศึกษาฝึกประสบการณ์</p>
          </div>
        </div>
      </div>
    </main>
  );
}
