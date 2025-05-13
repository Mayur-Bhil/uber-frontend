import React from 'react'

const LocationSearchPanel = (props) => {
// console.log(props);

    const locations = [
        "248,Near Kapoor's cafe ,Sherians Coding School,Bhoal",
        "281,Near Sharma's cafe ,Sherians Coding School,Bhoal",
        "245,Near Signghaniya's cafe ,Sherians Coding School,Bhoal",
        "243,Near Malhotra's cafe ,Sherians Coding School,Bhoal",
        "241,Near Patel's cafe ,Sherians Coding School,Bhoal",
    ];
  return (
    <div className=''>
        {
            locations.map((elem,index)=>{
                return (
                    <div key={index}
                    
                    onClick={()=>{
                        props.setvehiclepanel(true)
                        props.setPanelOpen(false)
                    }} className='flex  items-center bg-zinc-100 border-2 p-2 active:border-lime-800 justify-start my-6 font-medium  rounded-xl p-'>
                    <h2 className='ml-1 w-10 relative flex items-center justify-center pr-3'><img className='rounded-full' src="https://img.freepik.com/premium-vector/golf-academy-gps-shape-concept-logo-vector-icon_617472-5034.jpg?ga=GA1.1.269566283.1746250475&semt=ais_hybrid&w=740" alt="" /></h2>
                    <h4>{elem}</h4>
                </div>
                )
            })
        }
        
    </div>
    
  )
}

export default LocationSearchPanel
