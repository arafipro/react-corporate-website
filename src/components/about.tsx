import about from "../assets/about.jpg";
import SectionTitle from "./ui/section-title";

export default function About() {
  return (
    <div className="lg:flex lg:mt-32 mt-24">
      <img src={about} alt="" className="lg:h-[400px] lg:w-7/12 object-cover" />
      <div className="lg:ml-16 lg:mt-44 mt-8 px-4">
        <SectionTitle title="about" subTitle="私たちについて" />
        <div className="text-sm lg:mt-12 mt-8 space-y-2">
          <p>
            テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
          </p>
          <p>
            テキストテキストテキストテキストテキストテキスト テキストテキストテキストテキストテキストテキスト
          </p>
        </div>
      </div>
    </div>
  );
}
