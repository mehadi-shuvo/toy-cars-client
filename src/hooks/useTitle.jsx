import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `ToyCars | ${title}`
    },[title])
}

export default useTitle