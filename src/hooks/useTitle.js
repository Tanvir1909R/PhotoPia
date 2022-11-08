import { useEffect } from "react"


const useTitle = title => {
  useEffect(()=>{
    document.title = `${title} - PhotoPia`;
  },[title])
}

export default useTitle