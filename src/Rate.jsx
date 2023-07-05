import cookie from "./assets/img/cookie.png";


const Rate = ({bonus}) => {
  return (
    <div className="rate w-fit py-1 px-12 text-center rounded-[16px] bg-slate-950 m-auto mt-32">
        <p className="text-lg font-semibold">Rate</p>
        <img src={cookie} alt="image de cookie" className="w-8 m-auto my-1"/>
        <p className="text-sm font-semibold">{bonus}</p>
        <p className="text-sm font-semibold">/sec</p>
    </div>
  )
}

export default Rate;
