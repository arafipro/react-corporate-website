export default function NewsContent({
  date,
  tag,
  title,
}: {
  date: string;
  tag: string;
  title: string;
}) {
  return (
    <div className="flex flex-col justify-center first:pl-0 space-y-4 lg:border-r-2 border-black last:border-r-0 w-1/3 h-20">
      <div className="flex space-x-2.5">
        <time className="text-sm font-light">{date}</time>
        <p className="flex justify-center items-center text-white text-xs font-light bg-black uppercase w-12">
          {tag}
        </p>
      </div>
      <p className="font-light">{title}</p>
    </div>
  );
}
