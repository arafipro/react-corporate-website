import { twMerge } from "tailwind-merge";

export default function NewsContent({
  date,
  tag,
  title,
  className,
}: {
  date: string;
  tag: string;
  title: string;
  className?: string;
}) {
  return (
    <div
      className={twMerge(
        `${className}`,
        "flex flex-col justify-center first:pl-0 space-y-4 lg:w-1/3 h-20"
      )}
    >
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
