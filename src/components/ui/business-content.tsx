export default function BusinessContent({
  title,
  imageUrl,
}: {
  title: string;
  imageUrl: string;
}) {
  return (
    <div>
      <div className="font-semibold">
        <span className="text-xl font-normal">- </span>
        {title}
      </div>
      <img src={imageUrl} alt="" className="mt-2.5 w-full" />
    </div>
  );
}
