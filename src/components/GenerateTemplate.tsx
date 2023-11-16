import TextTitle from "./TextTitle";
interface Generateprops {
  subtitle: string;
  children: React.ReactNode;
  className?: string;
}
export default function GenerateTemplate({
  subtitle,
  children,
  className,
}: Generateprops) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <TextTitle className="text-white text-center">
        Generate a novel from your own imagination in minutes!
      </TextTitle>
      <p className="text-white text-center mt-10 mb-1  md:text-xl">
        {subtitle}{" "}
      </p>
      {children}
    </div>
  );
}
