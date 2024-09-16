import NewsContent from "./ui/news-content";
import SectionTitle from "./ui/section-title";

export default function News() {
  return (
		<div id="news" className="max-w-5xl mx-auto pt-28 px-4">
      <SectionTitle title="news" subTitle="ニュース" />
      <div className="lg:flex lg:space-x-5 mt-16 space-y-10 lg:space-y-0">
        <NewsContent
          date="2022.01.01"
          tag="news"
          title="タイトルタイトルタイトルタイトル"
          className="lg:border-r-2 border-black last:border-r-0 lg:w-1/3"
        />
        <NewsContent
          date="2022.01.01"
          tag="press"
          title="タイトルタイトルタイトルタイトル"
          className="lg:border-r-2 border-black last:border-r-0 lg:w-1/3"
        />
        <NewsContent
          date="2022.01.01"
          tag="news"
          title="タイトルタイトルタイトルタイトル"
          className="lg:border-r-2 border-black last:border-r-0 lg:w-1/3"
        />
      </div>
    </div>
  );
}
