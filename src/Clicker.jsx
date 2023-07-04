import cookieClick from "./assets/img/cookieClick.png";

const Clicker = ({setCount}) => {

  const compute = () => {
    setCount(prevCount => prevCount+1);
  }
    
    return ( 
        <>
        <div id="clicker" className="w-64 mx-auto cursor-pointer mt-52" onClick={compute}>
            <img src={cookieClick} alt="image de cookie" />
        </div>
        </>
     );
}
 
export default Clicker;
