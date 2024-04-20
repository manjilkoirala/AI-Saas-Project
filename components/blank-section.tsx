export const BlackSection = ({children,title,highlightedTitle}:any) => {
  return (
    <div className="px-10 py-20 gap-10 flex flex-col">
      <h2 className="text-center text-4xl text-white font-extrabold flex gap-2 justify-center">
        {title}
        <span className=" text-[#E44AA5]">{highlightedTitle}</span>
        
      </h2>
      {children}
    </div>
  )
}