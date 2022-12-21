import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - TeachMe`;
    },[title])
}

export default useTitle;