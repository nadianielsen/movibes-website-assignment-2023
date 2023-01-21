import { useState, useEffect } from 'react';

const useDarkMode = () => {

  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    // hvis det her findes 
    let myTheme = 
    //                               skal være true, så er den true
    localStorage.getItem("darkmode") === "true" ? true 
    // ellers skal den være null i localstorage
    : localStorage.getItem("darkmode") === null &&
    // og brugeren fortrækker det mærke tema, så bliver det et mørk tema ellers bliver den false
    window.matchMedia("(prefers-color-scheme:dark)").matches ? true
                                                      //hvis true ellers false
     : false;

   setDarkmode(myTheme)

  }, []);

  console.log(window.matchMedia("(prefers-color-scheme:dark)").matches)

  const handleToggle = () => {
    // det modsatte af vores variable darkmode
    setDarkmode(!darkmode)
    localStorage.setItem("darkmode", !darkmode)
  }
   
  const resetTheme = () => {
    localStorage.removeItem("darkmode")
    setDarkmode(window.matchMedia("(prefers-color-scheme:dark)").matches)
  }

    return [ darkmode, handleToggle, resetTheme]
}

export default useDarkMode;