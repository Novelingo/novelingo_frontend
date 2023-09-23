
export default function AppButton({children, className, onClick}) {
  return (
    <button onClick={onClick} className={`bg-gradient-to-r from-pink to-purple hover:from-light hover:to-light hover:text-purple rounded-xl text-base text-light ${className}`}>{children}</button>
  )
}
