import React from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import GameCover from '../GameCover/GameCover';
import GameBuy from '../GameBuy/GameBuy';
import GameGenre from '../GameGenre/GameGenre';
import './GameItem.css'
import { setCurrentGame } from '../redux/games/reducer';




const GameItem = ({game}) => {
    const navigate = useNavigate();
    const dispath = useDispatch()
    const handleClick = () =>{
        dispath(setCurrentGame(game));
        navigate(`/app/${game.title}`)
    }
    return (
        <div className='game-item' onClick={handleClick}>
            <GameCover image={game.image}/>
           <div className='game-item__details'>
               <span className='game-item__title'>{game.title}</span>
               <div className='game-item__genre'>
                   {
                       game.genres.map(genre=> <GameGenre genre={genre} key={genre}/>)
                   }
               </div>
               <div className='game-item__buy'>
                <GameBuy game={game} />
               </div>
           </div>
        </div>
    );
};

export default GameItem;