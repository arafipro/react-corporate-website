import Footer from "./components/footer";
import Header from "./components/header";
import NewsContent from "./components/ui/news-content";

export default function News() {
  return (
    <>
      <Header />
      <main className="max-w-5xl mx-auto lg:mt-20 lg:mb-32 px-4">
        <h2 className="text-4xl font-light uppercase tracking-[0.25em] pt-20">
          News & Press
        </h2>
        <div className="mt-24 border-b border-black">
          <button className="lg:w-60 w-1/2 font-light pb-5 border-b-2 border-black">
            ニュース
          </button>
          <button className="lg:w-60 w-1/2 font-light pb-5">
            プレスリリース
          </button>
        </div>
        <NewsContent
          date="2022.01.01"
          tag="news"
          title="タイトルタイトルタイトルタイトル"
          className="border-r-0 border-b border-black lg:w-full lg:mt-14 mt-10 lg:pb-14 pb-10"
        />
        <NewsContent
          date="2022.01.01"
          tag="news"
          title="タイトルタイトルタイトルタイトル"
          className="border-r-0 border-b border-black lg:w-full lg:mt-14 mt-10 lg:pb-14 pb-10"
        />
        <NewsContent
          date="2022.01.01"
          tag="news"
          title="タイトルタイトルタイトルタイトル"
          className="border-r-0 border-b border-black lg:w-full lg:mt-14 mt-10 lg:pb-14 pb-10"
        />
        <NewsContent
          date="2022.01.01"
          tag="news"
          title="タイトルタイトルタイトルタイトル"
          className="border-r-0 border-b border-black lg:w-full lg:mt-14 mt-10 lg:pb-14 pb-10"
        />
        <NewsContent
          date="2022.01.01"
          tag="news"
          title="タイトルタイトルタイトルタイトル"
          className="border-r-0 border-b border-black lg:w-full lg:mt-14 mt-10 lg:pb-14 pb-10"
        />
      </main>
      <Footer />
    </>
  );
}
