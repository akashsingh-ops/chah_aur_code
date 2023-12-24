import { useState, useCallback, useEffect,useRef } from "react";
// import './App.css'

function App() {
  const [len, setLen] = useState(8);
  const [numberAllowed, setNumberallow] = useState(false);
  const [charAllow, setcharAllow] = useState(false);
  const [pass, setPass] = useState("");
// useref hooks for refrence 
  const passwordRef=useRef(null)

  //  pass genterator
  // The React useCallback Hook returns a memoized callback function. ( bar bar call hone se bachata hai nhi jo last call hua hai wahi se render krta hai)

  const passGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    // condition
    if (numberAllowed) str += "0123456789"
    if (charAllow) str += "!@#$%^&*-_+=[]{}~`"
     
    

    for (let i = 1; i <= len; i++) {
      //  for randowm char
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPass(pass);
  }, [len, numberAllowed, charAllow, setPass]);
  

  // pass copy method , in useCallbakc array para we passed the parameter which are interrelated or jisse baat kr pa rhe hai hum

  const copypassToClipBoard=useCallback(()=>{
    passwordRef.current?.select();  // for show the selcted text to the user
    passwordRef.current?.setSelectionRange(0,101); //for selected range will be selected
    window.navigator.clipboard.writeText(pass)  //copy the pass from input
  },[pass])
 
  // useEffect The useEffect Hook allows you to perform side effects in your components.Some examples of side effects are: fetching data, directly updating the DOM, and timers.
// useEffect accepts two arguments. The second argument is optional.// useEffect(<function>, <dependency>)
  
useEffect(()=>{passGenerator()},[len,numberAllowed,charAllow,passGenerator])


  return (
    <div className="w-full h-screen duration-200  "
    
    > <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className=" text-white text-center mb-2 my-3">
          Password generator
        </h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pass}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copypassToClipBoard} className="outline-none bg-blue-700 hover:bg-sky-00 text-white px-2 py-0.5 shrink-0">
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1 ">
            <input
              type="range"
              min={6}
              max={100}
              value={len}
              className="cursor-pointer"
              onChange={(e)=>{setLen(e.target.value)}}
            />
            <label>Length:{len}</label>
          </div>
          <div className="flex items-center gap-x-1">
           <input 
           type="checkbox"
           defaultChecked={numberAllowed}
           id="numberInput"
           onChange={()=>{
            setNumberallow((prev)=>!prev);
           }}

           />
           <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={charAllow}
              id="characterInput"
              onChange={() => {
                  setcharAllow((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </div>
  );
}

export default App;
