export default function MenuLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <a href={href} className="hover:underline underline-offset-8">
      {children}
    </a>
  );
}
