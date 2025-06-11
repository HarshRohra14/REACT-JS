import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAlloweed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = pass + str.charAt(char)
    }

    setPassword(pass)



  }, [length, charAllowed, numberAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(Password)
  }, 
  [Password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])


  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-2 text-black bg-gray-800'>
        <h1 className='text-white text-center my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={Password}
            className='outline-none w-full py-1 px-3 bg-white '
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button
          onClick={copyPasswordToClipboard}
            className='ml-3 bg-gray-500 text-white rounded-lg p-2 hover:bg-blue-500 active:bg-blue-950 active:scale-95 transition duration-150'
          >copy</button>

        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={8}
              max={16}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label className='text-white'>Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id='numberInput'
              onChange={() => {
                setNumberAlloweed((prev) => !prev);
              }}
            />
            <label className='text-white'>Numbers</label>
          </div>
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id='charInput'
            onChange={() => {
              setNumberAlloweed((prev) => !prev);
            }}
          />
          <label className='text-white'>Characters</label>
        </div>
      </div>
    </>
  )
}

export default App
