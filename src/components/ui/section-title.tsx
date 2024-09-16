export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div>
      <h2 className="text-4xl font-light uppercase tracking-[0.25em]">
        {title}
      </h2>
      <h3 className="text-sm font-light h3t-2.5">{subTitle}</h3>
      <hr className="w-10 border-black mt-9" />
    </div>
  );
}
