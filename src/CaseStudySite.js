import React, { useState } from "react";
import { Helmet } from "react-helmet";

// Real Estate Developer Presentation Style
// Single-file React component ready to drop into a Tailwind + React project
// - Clean white layout
// - Navy + Gold accent
// - Hero images for each section (external URLs)
// - Investor/Developer presentation feel

const hero = {
  cover:
    "https://president.rru.ac.th/wp-content/uploads/2025/03/Screenshot-2567-01-21-at-15.44.03-2048x1150.png",
  intro:
    "https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/466004336_9165540946790852_8330506851284588698_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=127cfc&_nc_ohc=yb2dq2Xors0Q7kNvwHXvgbS&_nc_oc=AdnYJ4F3yO5Kw7T82m8byUnOc6lxL9QprJR00NV_OoBHcuN3m0dflXmv3xZVyq5g777o3TV8JacOvnpSlhshFh9k&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=VPS4452GfaWEU0sfqlic3Q&oh=00_AfnlT7wJz3laR38TE_CkVI-uHkKRwrPYsQLhtY--6ekZkw&oe=693DF779",
  descriptive:
    "https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/571462961_1247019434116143_5708586370228713253_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=f727a1&_nc_ohc=rSgQD5iSeT0Q7kNvwFmp6Xw&_nc_oc=AdnRI1ZqWXCXAci8c20N2P_na8cIx8M1QGG-ZZKk23XZVVnCf1SRqhM_iM0WJxmoqnFzkrJwGDcyGm7CliHyHuS9&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=2cZvEhkkvz31r2rLO4G2CQ&oh=00_AfkkaqAMVHf7jGhc_5EdP6phGWkuW0ZShjNqK5I1Xc73bg&oe=693E0A35",
  diagnostic:
    "https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/571239440_1247024667448953_5134136613574458711_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=f727a1&_nc_ohc=NAdUNKEH1sMQ7kNvwH3Mr_x&_nc_oc=AdkiTcRu4cztUGeNqaUAtPIy9Z80dy579Cdhmc7-elUvJ0enXqGWgK-SAezQ7QFrjysi0nK00zwEipwYb5p7AvvC&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=V4XitgRytLfzTeLn-3Djsw&oh=00_AflaDZi_8o_MfVrzrMSZ9t0vOgV_9WULG3v_Pzoww295HQ&oe=693E1212",
  predictive:
    "https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/571147358_1247024590782294_1503458711754171205_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=f727a1&_nc_ohc=cRMfZMyi518Q7kNvwER1XyS&_nc_oc=AdmBTwpgnhzTAG4LLnUv1A6_2YwBOC3AHQEk_BD3Hz84givLZKacnDledaugUxDp_BfVi0vg-wjARKKdWsqjfiYN&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=WO2U7B-37D3nqeaPUi8a5A&oh=00_AfkivGxqdn3eUOSWV0cdmelMQVZajco9TQiQ54BG8Cch9g&oe=693E317D",
  prescriptive:
    "https://scontent.futp1-2.fna.fbcdn.net/v/t39.30808-6/571255388_1247025964115490_3613667363885010744_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=f727a1&_nc_ohc=IJLHS7m94wwQ7kNvwFBb7l-&_nc_oc=Adn242N47RjMBOG2teNM3lbIU54-a-3LkNMc5TjmP1TAQGrnh7ppozgjT0k2_ADMH-WhR5UtovoO2-DOCDrZQ0Wk&_nc_zt=23&_nc_ht=scontent.futp1-2.fna&_nc_gid=YKE6nAbR9_NLDZN6RUSO1Q&oh=00_Afk0i4NGksVRyEpExy6nnAKVnyHbNXSLGkUq06UVZZCl6w&oe=693E18B0",
  conclusion:
    "https://scontent.futp1-1.fna.fbcdn.net/v/t39.30808-6/571763112_1247026424115444_7316821886571529318_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=f727a1&_nc_ohc=j2AfKHXH2ZYQ7kNvwHpgwJM&_nc_oc=Adlsl4fqhj0rS9OdajNrpvvwP8_4GBvvlVaw4p4IQY43PqNVrJ0UcYwODcsFdqBzoAPUnzLDlF8mXdqvyTMH7BKv&_nc_zt=23&_nc_ht=scontent.futp1-1.fna&_nc_gid=kIInRWc-HZ2sCd-ricCzAw&oh=00_AfnSvH_EX7wj4L0AJNN_ESy9CJYDgmLL23RYpXUYzpYQYA&oe=693E3322",
};

const pages = [
  {
    id: "cover",
    title: "หน้าปก",
    hero: hero.cover,
    content: (
      <>
        <h2 className="text-3xl font-extrabold text-gray-900">กรณีศึกษาอสังหาริมทรัพย์เชิงอุตสาหกรรม</h2>
        <p className="mt-3 text-lg text-gray-700">รายงานการวิเคราะห์การตัดสินใจลงทุนพัฒนาคลังสินค้าให้เช่า</p>
        <div className="mt-6 text-sm text-gray-600">
          <div>จัดทำโดย นายพงศ์กรณ์ ศิริตรานนท์ (67003263018)</div>
          <div>นายคชา รัตนบุษยาพร (67003263033)</div>
          <div className="mt-1">สาขาวิชาวิทยาการคอมพิวเตอร์ — ภาคเรียน 2 ปีการศึกษา 2568</div>
        </div>
      </>
    ),
  },
  {
    id: "introduction",
    title: "1. บทนำ & กระบวนการรวบรวมข้อมูล (Introduction & Data Acquisition)",
    hero: hero.intro,
    content: (
      <>
        <p className="leading-relaxed text-gray-700">
          รายงานนี้มีวัตถุประสงค์เพื่อศึกษาศักยภาพและปัจจัยความสำเร็จในการลงทุนคลังสินค้าให้เช่าในจังหวัดสมุทรปราการ
          โดยใช้กระบวนการวิทยาศาสตร์ข้อมูลในการรวบรวมและวิเคราะห์ข้อมูลจากแหล่งต่าง ๆ
        </p>

        <h3 className="mt-4 font-semibold text-gray-900">แหล่งข้อมูล</h3>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-2">
          <li><strong>ข้อมูลทุติยภูมิ</strong> เว็บไซต์ผู้พัฒนาโครงการ, รายงานประจำปี (56-1 One Report), ผังเมืองรวมจังหวัดสมุทรปราการ</li>
          <li><strong>ข้อมูลปฐมภูมิ</strong> สัมภาษณ์เชิงลึกผู้บริหารจาก WHA, FPIT, ESR, ALPHA และบริษัทที่ปรึกษาด้านอสังหาริมทรัพย์</li>
        </ul>
      </>
    ),
  },
  {
    id: "descriptive",
    title: "2. การวิเคราะห์แบบบรรยาย (Descriptive Analytics)",
    hero: hero.descriptive,
    content: (
      <>
        <p className="text-gray-700 mb-3">ภาพรวมสถานการณ์ตลาดคลังสินค้าที่สำคัญในจังหวัดสมุทรปราการ</p>

        <h4 className="font-semibold text-gray-900">2.1 ภาพรวมอุปทาน (Supply Overview)</h4>
        <p className="mt-2 text-gray-700">มีโครงการคลังสินค้าโดยรวมประมาณ 109 แห่ง โดยการกระจุกตัวในพื้นที่:</p>
        <ol className="list-decimal ml-5 mt-2 text-gray-700">
          <li>บางนา-ตราด กม.18–23</li>
          <li>ถนนเลียบคลองส่งน้ำสุวรรณภูมิ</li>
        </ol>

        <h4 className="mt-4 font-semibold text-gray-900">2.2 โครงสร้างผู้เล่นในตลาด</h4>
        <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 border rounded-lg bg-gray-50">
            <h5 className="font-medium text-gray-800">กลุ่ม SET Developers</h5>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>ตัวอย่าง WHA, FPIT</li>
              <li>พอร์ตขนาดใหญ่และมี REIT</li>
            </ul>
          </div>
          <div className="p-4 border rounded-lg bg-gray-50">
            <h5 className="font-medium text-gray-800">กลุ่ม Non-SET Developers</h5>
            <ul className="list-disc ml-5 mt-2 text-sm text-gray-700 space-y-1">
              <li>ตัวอย่าง ESR, ALPHA</li>
              <li>เน้นความคล่องตัวและ Exit Strategy</li>
            </ul>
          </div>
        </div>

        <h4 className="mt-4 font-semibold text-gray-900">2.3 ลักษณะผลิตภัณฑ์ (Product Characteristics)</h4>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Clear height 10–12 เมตร</li>
          <li>Floor loading 3–5 ตัน/ตร.ม.</li>
          <li>อุปกรณ์ Dock Leveler, Raised Floor</li>
        </ul>
      </>
    ),
  },
  {
    id: "diagnostic",
    title: "3. การวิเคราะห์เชิงวินิจฉัย (Diagnostic Analytics)",
    hero: hero.diagnostic,
    content: (
      <>
        <p className="text-gray-700">สาเหตุและปัจจัยความสำเร็จของทำเลสมุทรปราการ</p>

        <h4 className="mt-3 font-semibold text-gray-900">3.1 ทำไมต้องสมุทรปราการ? (Location Potential)</h4>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>เป็น Gateway ระหว่าง EEC และกรุงเทพฯ</li>
          <li>โครงสร้างพื้นฐานครบ เช่น สนามบินสุวรรณภูมิ, ท่าเรือแหลมฉบัง, ทางด่วน</li>
        </ul>

        <h4 className="mt-4 font-semibold text-gray-900">3.2 ทำไมต้องพื้นที่สีม่วง? (Regulatory Factors)</h4>
        <p className="mt-2 text-gray-700">พื้นที่สีม่วงตามผังเมืองช่วยลดความเสี่ยงด้านใบอนุญาตและอนุญาตให้ก่อสร้างคลังสินค้าได้เต็มศักยภาพ</p>

        <h4 className="mt-4 font-semibold text-gray-900">3.3 ปัจจัยจุลภาค vs ปัจจัยมหภาค</h4>
        <p className="mt-2 text-gray-700">ปัจจัยระดับ Micro (เช่น ศักยภาพทำเล, การเข้าถึงสาธารณูปโภค) ถูกให้คะแนนสูงกว่าปัจจัย Macro</p>
      </>
    ),
  },
  {
    id: "predictive",
    title: "4. การวิเคราะห์เชิงทำนาย (Predictive Analytics)",
    hero: hero.predictive,
    content: (
      <>
        <h4 className="font-semibold text-gray-900">4.1 การเติบโตของอุปสงค์ (Demand Forecast)</h4>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>E-commerce boom การค้าออนไลน์ยังผลักดันความต้องการพื้นที่จัดเก็บ</li>
          <li>Supply chain relocation (China Plus One) นักลงทุนย้ายฐานการผลิตมาไทย</li>
        </ul>

        <h4 className="mt-4 font-semibold text-gray-900">4.2 มาตรฐานใหม่ของอาคาร (Future Requirements)</h4>
        <ul className="list-disc ml-5 mt-2 text-gray-700 space-y-1">
          <li>Automation-ready (AGV/ASRS)</li>
          <li>ESG compliance Solar roof, Green Building</li>
        </ul>
      </>
    ),
  },
  {
    id: "prescriptive",
    title: "5. การวิเคราะห์เชิงแนะนำ (Prescriptive Analytics)",
    hero: hero.prescriptive,
    content: (
      <>
        <h4 className="font-semibold text-gray-900">5.1 กลยุทธ์การเลือกทำเล (Location Strategy)</h4>
        <p className="text-gray-700 mt-1">แนะนำลงทุนในเขตพื้นที่สีม่วง (อ.1-อ.2) เพื่อความยืดหยุ่นด้านการขอใบอนุญาต แม้ต้นทุนที่ดินสูงกว่า</p>

        <h4 className="mt-4 font-semibold text-gray-900">5.2 การออกแบบโครงการ (Design Strategy)</h4>
        <p className="text-gray-700">แนวคิด Flexible Design โครงสร้างรองรับ 3-5 ตัน/ตร.ม. และความสูง 10-12 เมตร เพื่อรองรับการใช้งานหลายรูปแบบ</p>

        <h4 className="mt-4 font-semibold text-gray-900">5.3 การบริหารจัดการความเสี่ยง (Risk Management)</h4>
        <p className="text-gray-700">พัฒนาโครงการแบบแบ่งเฟส (Phasing) และพิจารณาหาผู้เช่าหลัก (Anchor Tenant) ก่อนขยายเฟสถัดไป</p>
      </>
    ),
  },
  {
    id: "conclusion",
    title: "บทสรุป (Conclusion)",
    hero: hero.conclusion,
    content: (
      <>
        <p className="text-gray-700">สมุทรปราการยังคงเป็นทำเลศักยภาพสำหรับการลงทุนคลังสินค้า แต่ปัจจัยความสำเร็จในอนาคตขึ้นกับคุณภาพอาคาร (รองรับเทคโนโลยีและ ESG) และความยืดหยุ่นของพื้นที่ในการปรับตัวตามความต้องการของผู้เช่า</p>
      </>
    ),
  },
];

export default function CaseStudySite() {
  const [current, setCurrent] = useState("cover");
  const currentIndex = Math.max(0, pages.findIndex((p) => p.id === current));

  const goPrev = () => {
    const prevIndex = Math.max(0, currentIndex - 1);
    setCurrent(pages[prevIndex].id);
  };
  const goNext = () => {
    const nextIndex = Math.min(pages.length - 1, currentIndex + 1);
    setCurrent(pages[nextIndex].id);
  };

  return (
    <>
      <Helmet>
        <link href="https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>
      <div className="min-h-screen font-[Kanit] bg-gray-50 text-gray-800">
        <div className="max-w-6xl mx-auto p-6">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <aside className="md:w-64 bg-white p-4 rounded-lg shadow">
              <div className="flex items-center justify-between">
                <h1 className="text-lg font-bold text-blue-900">Investor Presentation</h1>
                <div className="text-sm text-yellow-600 font-semibold">Industrial</div>
              </div>
              <p className="text-xs text-gray-500 mt-2">คลังสินค้าให้เช่า — สมุทรปราการ</p>

              <nav className="mt-4">
                {pages.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setCurrent(p.id)}
                    className={`w-full text-left px-3 py-2 rounded-md mb-2 hover:bg-blue-50 transition-colors ${
                      current === p.id ? "bg-blue-100 font-semibold" : ""
                    }`}
                  >
                    <div className="text-sm">{idx + 1}. {p.title}</div>
                  </button>
                ))}
              </nav>

              <div className="mt-6 border-t pt-4 text-xs text-gray-500">
                <div>วิชา: ความรู้เบื้องต้นเกี่ยวกับวิทยาศาสตร์ข้อมูล (SCT247)</div>
                <div className="mt-1">ภาคเรียน 2 / ปีการศึกษา 2568</div>
              </div>
            </aside>

            {/* Content */}
            <main className="flex-1 bg-white rounded-lg shadow overflow-hidden">
              {/* Hero */}
              <div className="relative">
                <img src={pages[currentIndex].hero} alt={pages[currentIndex].title} className="w-full h-56 object-cover" />
                <div className="absolute left-6 bottom-4 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-md">
                  <h2 className="text-xl font-semibold text-gray-900">{pages[currentIndex].title}</h2>
                  <div className="text-sm text-gray-700">หน้า {currentIndex + 1} / {pages.length}</div>
                </div>
              </div>

              <div className="p-6 prose max-w-none">
                {pages[currentIndex].content}
              </div>

              <div className="p-6 border-t bg-gray-50 flex justify-between">
                <button onClick={goPrev} disabled={currentIndex === 0} className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100 disabled:opacity-50">ก่อนหน้า</button>
                <div className="space-x-3">
                  <button onClick={() => setCurrent("cover")} className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100">กลับหน้าปก</button>
                  <button onClick={goNext} disabled={currentIndex === pages.length - 1} className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 disabled:opacity-50">ถัดไป</button>
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
