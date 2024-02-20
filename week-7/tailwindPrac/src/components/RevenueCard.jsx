import React from 'react'

const RevenueCard = ({
    title,amount
}) => {
  return (
    <div className='bg-white rounded-md shadow-md p-5 m-3 '>
        <div className='text-gray-500'>
            {title}
        </div>
        <div className='font-bold text-lg'>
            {amount}
        </div>
    </div>
  )
}

export default RevenueCard;