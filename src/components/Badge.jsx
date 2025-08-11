export default function Badge({ children }){
  return (
<span className="inline-flex items-center rounded-full border border-[var(--brand)] 
  px-3 py-1 text-xs/5 font-medium tracking-wide 
  text-black bg-[var(--brand)]/40">
  {children}
</span>
  )
}