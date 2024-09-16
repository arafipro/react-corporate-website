import company from "../assets/company.jpg";
import SectionTitle from "./ui/section-title";

export default function Company() {
  return (
    <div className="lg:relative max-w-5xl mx-auto px-4 lg:mb-32">
      <div className="bg-white lg:max-w-xl lg:py-24 py-10 lg:px-16 px-4 lg:mt-32 mt-20 h-full">
        <SectionTitle title="company" subTitle="会社情報" />
        <table className="lg:mt-14 mt-8 text-sm font-light mb-10">
          <tr className="flex flex-col lg:block">
            <td width="80px" className="lg:h-10">
              会社名
            </td>
            <td className="mb-5">ＸＸＸＸＸＸ株式会社</td>
          </tr>
          <tr className="flex flex-col lg:block">
            <td width="80px" className="lg:h-10">
              所在地
            </td>
            <td className="mb-5">東京都ＸＸ区ＸＸ町1-1</td>
          </tr>
          <tr className="flex flex-col lg:block">
            <td width="80px" className="lg:h-10">
              代表
            </td>
            <td className="mb-5">ＸＸＸＸＸＸ</td>
          </tr>
          <tr className="flex flex-col lg:block">
            <td width="80px" className="lg:h-10">
              設立
            </td>
            <td className="mb-5">2021年1月1日</td>
          </tr>
          <tr className="flex flex-col lg:block">
            <td width="80px" className="lg:h-10">
              資本金
            </td>
            <td className="mb-5">3,000,000円</td>
          </tr>
          <tr className="flex flex-col lg:block">
            <td width="80px" valign="top">
              事業内容
            </td>
            <td height="40px" className="lg:space-y-2.5">
              <p>Web制作・マーケティング</p>
              <p>インターネットメディア事業</p>
              <p>プロモーション企画・制作</p>
              <p>ソーシャル企画・運営</p>
            </td>
          </tr>
        </table>
      </div>
      <img
        src={company}
        alt="会社画像"
        className="lg:absolute lg:top-28 right-0 lg:w-1/2 lg:h-2/3 lg:object-cover pt-5 static"
      />
    </div>
  );
}
