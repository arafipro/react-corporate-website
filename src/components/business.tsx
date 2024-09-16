import business1 from "../assets/business1.jpg";
import business2 from "../assets/business2.jpg";
import business3 from "../assets/business3.jpg";
import business4 from "../assets/business4.jpg";
import BusinessContent from "./ui/business-content";
import SectionTitle from "./ui/section-title";

export default function Business() {
  return (
    <div id="business" className="max-w-5xl mx-auto px-4 pt-32">
      <SectionTitle title="business" subTitle="事業内容" />
      <div className="lg:grid grid-cols-2 gap-16 lg:mt-12 mt-8 space-y-8">
        <div className="lg:mt-32 space-y-8">
          <BusinessContent
            title="Web制作・マーケティング"
            imageUrl={business1}
          />
          <BusinessContent
            title="インターネットメディア事業"
            imageUrl={business2}
          />
        </div>
        <div className="space-y-8">
          <BusinessContent
            title="プロモーション企画・制作"
            imageUrl={business3}
          />
          <BusinessContent title="ソーシャル企画・運営" imageUrl={business4} />
        </div>
      </div>
    </div>
  );
}
