import React from 'react'
import GameCard from './GameCard'

const GameGrid = ({games}) => {
  return (
    <div className='grid grid-cols-5 gap-6'>
      {games.map((game) => {
        return <GameCard game={game}/>
      })}
    </div>
  )
}

export default GameGrid