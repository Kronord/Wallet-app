import "#/globals.css";

function Balance() {
  return (
    <div className='flex flex-col h-20 bg-white w-full rounded-4xl pl-8 pt-2 mb-8'>
        <p className="uppercase text-gray-text text-[12px]">Ваш баланс</p>
        <span className="text-3xl mt-2.5 font-poppins font-bold ">₴ 24 000.00</span>
    </div>
  )
}

export default Balance