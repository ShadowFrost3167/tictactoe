import GameState from "./GameState";

function GameOver({gameState}) {
    switch(gameState){
        case GameState.inProgress:
            return <></>;
        
        case GameState.playerYWins:
            return <div className="game-over">PLAYER O WINS!</div>

        case GameState.playerXWins:
            return <div className="game-over">PLAYER X WINS!</div>

        case GameState.draw:
            return <div className="game-over">DRAW</div>

        default:
            return <></>;
    }
}

export default GameOver;