import { useState, useCallback } from "react";
import Score from "./Score";
import Clicker from "./Clicker";
import Rate from "./Rate";
import { useInterval } from "./useInterval";

const UpgradesData =[
  {id:1, name: 'Curseur', upgradeText: '+0.1 clic/s', upgrade: 0.1, img: 'https://static.vecteezy.com/system/resources/previews/009/318/588/non_2x/patissier-character-showing-his-strawberry-cake-free-vector.jpg', hover:'https://i.ibb.co/H2Vnfvs/upgrade-Hover15.png', price: 15},

  {id:2, name: 'Grand-Mère', upgradeText: '+1 clic/s', upgrade: 1, img: 'https://cdn-icons-png.flaticon.com/512/1206/1206264.png', hover:'https://i.ibb.co/HdpXQQw/upgrade-Hover100.png', price: 100},

  {id:3, name: 'Ferme', upgradeText: '+8 clics/s', upgrade: 8, img: 'https://static.vecteezy.com/system/resources/previews/009/318/588/non_2x/patissier-character-showing-his-strawberry-cake-free-vector.jpg', hover:'https://i.ibb.co/ZmvncSM/upgrade-Hover1100.png', price: 1100},

  {id:4, name: 'Mine', upgradeText: '+47 clics/s', upgrade: 47, img: 'https://static.vecteezy.com/system/resources/previews/001/967/262/large_2x/grandma-with-cookies-free-vector.jpg', hover:'https://i.ibb.co/yPhbWzP/upgrade-Hover12000.png', price: 12000},

  {id:5, name: 'Usine', upgradeText: '+260 clics/s', upgrade: 260, img: 'https://cdn-icons-png.flaticon.com/512/1206/1206264.png', hover:'https://i.ibb.co/HtvK7nn/upgrade-Hover130000.png', price: 130000},

  {id:6, name: 'Amozan', upgradeText: '+1400 clics/s', upgrade: 1400, img: 'https://static.vecteezy.com/system/resources/previews/009/318/588/non_2x/patissier-character-showing-his-strawberry-cake-free-vector.jpg', hover:'https://i.ibb.co/CV2yY2S/upgrade-Hover1400000.png', price: 1400000}
]

const UpgradesItems = ({name, upgradeText, img, hover}) =>{
  return(
      <div className="relative w-32 text-center border border-white border-solid m-[10px] cursor-pointer">
        <img src={hover} className="absolute duration-300 opacity-0 w-fit hover:opacity-100"/>
        <img src={img} className="m-auto max-h-12"/>
        <p className="font-semibold">{upgradeText}</p>
        <p className="font-bold">{name}</p>
      </div>
  )
}


const UpgradesList = () =>{

  const [count, setCount] = useState(0);
  const [bonus, setBonus] = useState(1);
  const roundedCount = count.toFixed(2);
  const roundedBonus = bonus.toFixed(2);
  const isEnough = useState(false);

  const incrementCookie = useCallback(() => {
    setCount(prevCount => prevCount + bonus)
  },[bonus]);

  useInterval(incrementCookie, 1000);

  return(
    <>
    <div className="upgrades absolute w-1/5 top-1/4 bg-slate-950 rounded-r-xl">
      <h1 className="font-semibold text-center">Upgrades :</h1>
      <div className="grid grid-cols-2 my-4 overflow-auto h-4/5">
        {UpgradesData.map(index =>(
          <div className="m-auto" key={index.id} onClick={() => {
            if(count > index.price-1){
              setCount(prevCount => prevCount - index.price);
              setBonus(prevBonus => prevBonus + index.upgrade);
            return;
            }else{
            return(
              alert("Pas assez de cookies.")
            )}
          }}>
          <UpgradesItems key={index.id} {...index} />
          </div>
        ))
        }
      </div>
    </div>
        <Score count={roundedCount}/>
        <Clicker setCount={setCount}/>
        <Rate bonus={roundedBonus} />
    </>
  )
}



export default UpgradesList;
