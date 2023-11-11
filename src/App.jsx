import React, { useRef, useState } from 'react'

const App = () => {
  const [list, setList] = useState([])
  const ref = useRef(null);
  const add = () => {
    setList(
      [...list, ref.current.value]

    )
    ref.current.value = []

  }
  const del = (lis1) => {
    setList(
      list.filter((e) => {
        return e !== lis1

      })
    )

  }




  return (
    < >
      <nav className='bg-red-300  py-5 px-4 flex justify-between'>
        <div className="logo bg-red-300 text-3xl text-white  ">
          ToDoList
        </div>
        <div className="search bg-white px-4 py-3">
          <input type="text" className='border-0 outline-0 bg-transparent' placeholder='type your list' ref={ref} />
          <button onClick={add}>
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>

      </nav>
      <div className="items  w-full flex flex-col items-center mt-10">
        {
          list.map((lis) => {

            return (
              <>
                <div className="item w-[200px] p-7  bg-red-500 text-white text-center shadow-2xl mb-3">
                  <div className="list w-[200px ] h-[100px] text-[20px] ">
                    <h1>{lis}</h1>
                  </div>
                  <button className='w-full text-center bg-red-300  py-4 px-10' onClick={() => {
                    del(lis)

                  }}>Delete</button>

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
