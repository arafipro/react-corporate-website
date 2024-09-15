import mainVisual from "../assets/mainvisual.jpg";

export default function Hero() {
  return (
    <div className="h-screen w-full overflow-hidden">
      <img
        src={mainVisual}
        alt="ヒーロー画像"
        className="w-full h-full object-cover"
      />
    </div>
  );
}
