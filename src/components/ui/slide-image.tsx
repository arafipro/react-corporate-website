export default function SlideImage({
  imageUrl,
  alt,
  title,
}: {
  imageUrl: string;
  alt: string;
  title?: string;
}) {
  return (
    <div className="relative">
      <img src={imageUrl} alt={alt} className="w-full h-screen object-cover" />
      {title ? (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 lg:text-5xl text-2xl lg:p-12 p-6">
          {title}
        </div>
      ) : null}
    </div>
  );
}
