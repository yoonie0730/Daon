import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* 헤더 */}
      <header className="bg-white border-b shadow-sm p-4">
        <h1 className="text-2xl font-bold text-blue-900">다온</h1>
      </header>

      {/* 메인 섹션 */}
      <main className="p-6 grid gap-6">
        {/* 자기소개 카드 */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-royal-blue mb-2">About Us</h2>
            <p>
              저희 회사는 모던한 디자인과 실용성을 겸비한 디지털 솔루션을
              제공합니다. 창의성과 효율성을 바탕으로 사용자 중심의 결과물을
              만듭니다.
            </p>
          </CardContent>
        </Card>

        {/* 연락처 카드 */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6">
            <h2 className="text-xl font-semibold text-royal-blue mb-2">Contact</h2>
            <p>Email: daon@gmail.com</p>
            <p>Phone: 010-5815-7003</p>
          </CardContent>
        </Card>

        {/* 사진 섹션 */}
        <Card className="rounded-2xl shadow-md">
          <CardContent className="p-6 grid grid-cols-2 gap-4">
            <h2 className="col-span-2 text-xl font-semibold text-royal-blue">Gallery</h2>
            <img src="/images/sample1.jpg" alt="sample1" className="rounded-xl" />
            <img src="/images/sample2.jpg" alt="sample2" className="rounded-xl" />
          </CardContent>
        </Card>
      </main>

      {/* 푸터 */}
      <footer className="p-4 text-center text-sm text-gray-500 border-t">
        © 2025 다온. All rights reserved.
      </footer>
    </div>
  );
}
