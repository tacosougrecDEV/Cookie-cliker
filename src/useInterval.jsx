import {useEffect} from 'react'

export function useInterval(callback, delay) {
    useEffect(() =>{
        function tick(){
            callback()
        }
        if(delay !== null){
            let id = setInterval(tick, delay);
            return () => {
                clearInterval(id);
            }
        }
    },[callback, delay])
}

