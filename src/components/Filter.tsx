import { useState } from "react";

interface FilterProps{
    title: string;
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
    <div className="flex flex-col w-40 justify-center items-center">
    {options.map((option)=>{
        const isSelected = selectedIds.includes(option.id)
       return <span key={option.id} onClick={()=>handleClick(isSelected, option.id)} className={`${isSelected ? 'bg-light text-purple':'bg-gradient-to-r from-pink to-purple text-white'} m-1 px-10 py-1 rounded`} >{option.title}</span>

    })}
    </div>
    
    </div>
    

  )
}
