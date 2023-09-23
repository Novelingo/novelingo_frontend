
export default function AppSection({className, children, style}) {
  return (
  <section style={style} className={`lg:px-20 px-5 py-20 ${className}`}>{children}</section>
  )
}
