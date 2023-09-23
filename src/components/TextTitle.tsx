
export default function TextTitle({children, className}) {
    return (
      <h1 className={` text-4xl  xl:text-5xl font-display text-white ${className}`}>{children}</h1>
    )
  }