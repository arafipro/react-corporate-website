export default function Footer() {
  return (
    <footer className="xl:h-56 h-64 bg-white pl-4 xl:pl-0">
			<main className="mx-auto container">
        <div className="xl:flex justify-between items-center pt-10">
          <a href="#">
            <img src="/logo.svg" alt="logo" width="100" height="100" />
          </a>
          <section className="text-sm pt-2.5 xl:pt-0">
            <p>Web Entertainment Design Inc.</p>
            <p>West Building 3F</p>
            <p>9-99 Sakuragaokacho Shibuya-ku</p>
            <p>Tokyo, Japan 150-0031</p>
            <p>T/99-9999-9999</p>
          </section>
        </div>
        <p className="text-xs pt-10 xl:pt-12">© Web Entertainment Design Inc.</p>
      </main>
    </footer>
  );
}
