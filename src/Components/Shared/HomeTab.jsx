import React from 'react'

function HomeTab() {
  return (
    <section className='flex flex-col items-center justify-center w-full'>
            <ul className='bg-white w-full border-l-[5px] border-green-1 rounded-2xl mb-2.5'>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Дата</p>
                    <span className='font-circe'>04.01.19</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Тип</p>
                    <span className='font-circe'>+</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Категория</p>
                    <span className='font-circe'>Різне</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Коментар</p>
                    <span className='font-circe'>Подарунок жінці</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Сума</p>
                    <span className='font-circe'>300</span>
                </li>
                <li className='flex justify-between py-2 px-5'>
                    <p className='font-circe font-bold'>Баланс</p>
                    <span className='font-circe'>6 900.00</span>
                </li>
            </ul>
            <ul className='bg-white w-full border-l-[5px] border-red rounded-2xl mb-2.5'>
               <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Дата</p>
                    <span className='font-circe'>04.01.19</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Тип</p>
                    <span className='font-circe'>-</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Категория</p>
                    <span className='font-circe'>Різне</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Коментар</p>
                    <span className='font-circe'>Подарунок жінці</span>
                </li>
                <li className='flex justify-between border-b border-gray-4 py-2 px-5'>
                    <p className='font-circe font-bold'>Сума</p>
                    <span className='font-circe'>300</span>
                </li>
                <li className='flex justify-between py-2 px-5'>
                    <p className='font-circe font-bold'>Баланс</p>
                    <span className='font-circe'>6 900.00</span>
                </li>
            </ul>
    </section>
  )
}

export default HomeTab