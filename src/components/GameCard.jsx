import React from 'react'
import { useNavigate } from 'react-router-dom'

const GameCard = ({game}) => {

  const navigate = useNavigate();

  return (
    <div className='flex flex-col gap-2'>
      <img onClick={(e) => navigate(`/game/${game.GAMEID}`)} className='rounded-lg h-5/6 object-cover cursor-pointer' src={game.COVERIMAGEURL} alt="" />
      <div>
        <div onClick={(e) => navigate(`/game/${game.GAMEID}`)} className='text-lg hover:underline cursor-pointer'>{game.NAME}</div>
      </div>
    </div>
  )
}

export default GameCard