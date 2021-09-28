import React,{useEffect} from "react";
const Error = () => {
    useEffect(() => {
        document.title='Error!';
    }, [])
    return ( <>
    <p className="text-center" id="Error">Not Found File!</p>
    </> );
}
 
export default Error;