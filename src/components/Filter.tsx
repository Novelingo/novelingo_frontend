import { useState } from "react";

interface FilterProps{
    title?: string;
    options: {id:string, title:string}[];
}
export default function Filter({title, options}:FilterProps) {
  const [selectedIds, setSelectedIds] = useState<string[]>([])

  const handleClick = (isSelected:boolean, optionId:string) =>{
    if (isSelected) setSelectedIds(selectedIds.filter(id => id !== optionId))
    else setSelectedIds([...selectedIds, optionId])
  }
  return (
    <div className="flex flex-col justify-center items-center mb-10 mt-4">
    <p className='text-light'>{title}</p>
    <div className="flex flex-col ">
    {options.map((option)=>{
        const isSelected = selectedIds.includes(option.id)
       return <div key={option.id} onClick={()=>handleClick(isSelected, option.id)} className={`${isSelected ? 'bg-light outline outline-2 text-purple':'bg-gradient-to-r from-pink to-purple text-white'} m-1 md:w-40 p-4 h-9 flex justify-center items-center rounded`} >
        <p>{option.title}</p>
        </div>

    })}
    </div>
    
    </div>
    

  )
}
