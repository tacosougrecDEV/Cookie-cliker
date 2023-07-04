import cookie from "./assets/img/cookie.png";


const Score = ({count}) =>{

    return(
        <div className="w-1/5 pb-5 pl-5 pr-5 text-center rounded-b-[16px] bg-slate-950 m-auto">
          <h1 className="text-2xl font-bold">Score:</h1>
          <div className="flex items-center place-content-between">
            <img src={cookie} alt="image de cookie" className="w-8"/>
              <p className="text-2xl font-semibold">{count}</p>
            <img src={cookie} alt="image de cookie" className="w-8"/>
          </div>
        </div>
    )
}

export default Score;