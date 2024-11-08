import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1 className='bg-black text-white'>login</h1>
      <div>
        <input 
        className='text-white'
        type="email" />
        <input 
        className='text-white'
        type="password" name="" id="" />
        <button className='bg-blue-400 text-white'>login</button>
      </div>
    </div>
    </>
  )
}

export default App
