export default function Header({name}:{name:string}){
  
const renderTitle=()=>{
  const nameArray=name.split("-");
   nameArray[nameArray.length-1]=`(${nameArray[nameArray.length-1]})`
  return nameArray.join(" ");
}

    return(
        <>
        {/* HEADER */}
        
      <div className="flex justify-center items-center  align- h-80 bg-gradient-to-r from-[#0f1f47] to-[#5f6984]">
        <h1 className=" text-white text-7xl   ">{renderTitle()}</h1>
      </div>

      {/* HEADER */}
        </>
    )
}