import React from 'react'

const Home = () => {
  return (
    <div className='relative h-screen'>
            <img className='w-16 absolute left-5 top-5' src="https://imgs.search.brave.com/xSouFCjJwA-xBPlyrPOhUefqGqtl9NwZlH7Th1Q7KaU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jb21w/YW5pZXNsb2dvLmNv/bS9pbWcvb3JpZy9V/QkVSLkQtZjIzZDRi/MWMucG5nP3Q9MTcy/MDI0NDQ5NA" alt="" />
            <div className='h-screen w-screen'>
                <img className='h-full w-full cover ' src="https://images.squarespace-cdn.com/content/v1/5a05f520f6576e6135323430/1570233092180-KY4SR5HLAZ42H8UF73IF/v3.png" alt="" />
            </div>
            <div className='top-0 flex flex-col justify-end absolute w-full h-screen rounded-lg'>
                <div className='h-[30%] p-5 bg-white'>
                    <h4 className='text-3xl font-semibold mb-5'>Find a trip</h4>
                    <form action="" className='' >
                        <input className='bg-[#eee] px-12 py-3 text-base rounded-lg w-full mb-3' type="text" placeholder='add a pickup location' />
                        <input className='bg-[#eee] px-12 py-3 text-base rounded-lg w-full mb-3' type="text" placeholder='Enetr your Destination' />
                    </form>
                </div>
                <div className='h-[0] bg-red-500 '>

                </div>
            </div>
    </div>
  )
}

export default Home
