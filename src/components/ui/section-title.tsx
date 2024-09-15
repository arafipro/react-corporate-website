export default function SectionTitle({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) {
  return (
    <div>
      <p className="text-4xl font-light uppercase tracking-[0.25em]">{title}</p>
      <p className="text-sm font-light pt-2.5">{subTitle}</p>
      <hr className="w-10 border-black mt-9" />
    </div>
  );
}
