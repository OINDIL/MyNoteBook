import React,{ useState } from 'react'
import DarkContext from './darkContext'
const DarkState = (props) => {
    const [mode, setMode] = useState('light');
    function togglefunc() {
      if (mode === 'light') {
        setMode("dark")
        document.body.style.backgroundColor = 'rgb(32, 33, 36)'
        document.body.style.color = 'white'
        props.showAlert("Dark Mode has been enabled","success")
      }
      else {
        setMode('light')
        document.body.style.backgroundColor = 'white'
        document.body.style.color = 'black'
        props.showAlert("Dark Mode has been disabled","success") 
      }
    }
  return (
    <DarkContext.Provider value={{mode,setMode,togglefunc}}>
      {props.children}
    </DarkContext.Provider>
  )
}

export default DarkState