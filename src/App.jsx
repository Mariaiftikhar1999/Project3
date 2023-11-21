import React, { useRef, useState } from 'react'

const App = () => {
  const [list, setList] = useState([])
  const [colored, setColored] = useState("green-900")
  const ref = useRef(null);
  const add = () => {
    setList(
      [...list, { text: ref.current.value, color: colored }]

    )
    ref.current.value = ""

  }
  const del = (lis1) => {
    setList(
      list.filter((e) => {
        return e !== lis1

      })
    )

  }
  const setColor = (colors) => {
    setColored(colors);
  }





  return (
    < >
      <nav className='bg-red-300  py-5 px-4 flex justify-between items-center'>
        <div className="logo bg-red-300 text-3xl text-white  ">
          ToDoList
        </div>
       
          <div className="button  flex gap-3 ">
            <button className='rounded-full w-[30px] h-[30px]  bg-blue-900' onClick={() => setColor("blue-900")}>
            </button>
            <button className='rounded-full w-[30px] h-[30px]  bg-red-900' onClick={() => setColor("red-900")}>
            </button>
            <button className='rounded-full w-[30px] h-[30px]  bg-green-900' onClick={() => setColor("green-900")}>
            </button>
            <button className='rounded-full w-[30px] h-[30px]  bg-yellow-900' onClick={() => setColor("yellow-900")}>
            </button>
            
            
          </div>
     
        <div className="search bg-white px-4 py-3">
          <input type="text" className='border-0 outline-0 bg-transparent' placeholder='type your list' ref={ref} />
          <button onClick={add}>
            <i className="fa-solid fa-plus"></i>
          </button>
        </div>

      </nav>
      <div className="items  w-full flex flex-col items-center mt-10  ">
        {
          list.map((lis) => {

            return (
              <>
                <div key={lis.text}  className='border-2 border-solid border-slate-100'>
                  <div className={`item w-[200px] p-7  bg-${lis.color} text-black text-center border-2 border-solid border-red-700 shadow-2xl mb-3`}>
                    <div className="list w-[200px ] h-[100px] text-[20px] ">
                      <h1>{lis.text}</h1>
                    </div>
                    <button className='w-full text-center bg-red-300  py-4 px-10' onClick={() => {
                      del(lis)

                    }}>Delete</button>

                  </div>

                </div>


              </>


            )
          })

        }

      </div>



    </>
  )
}

export default App
