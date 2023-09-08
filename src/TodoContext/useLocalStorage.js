import {useEffect , useState} from "react";

 export function useLocalStorage(itemName, initialValue) {
  
  const [item, setItem] = useState(initialValue);
  const [load,setLoad] = useState(true)
  const [error, setError] = useState(false)
  useEffect(()=>{
    
    setTimeout(()=>{
      try {
        let parsedItem;
        const localStorageItem = localStorage.getItem(itemName);
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem)
        }
        setLoad(false)
      } catch (error) {
        setError(error)
        setLoad(false)
      }
    },2000)
  })

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem,load,error};
}