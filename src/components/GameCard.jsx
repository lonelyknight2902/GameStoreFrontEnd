import React from 'react'

const GameCard = ({game}) => {
  return (
    <div className='flex flex-col gap-2'>
      <img className='rounded-lg' src={game.COVERIMAGEURL} alt="" />
      <div>
        <div className='text-lg'>{game.NAME}</div>
      </div>
    </div>
  )
}

export default GameCard