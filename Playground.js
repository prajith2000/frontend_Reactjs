import {useState} from "react";
import './Playground.css'
const Playground=()=>{
    const [gameScore,setGameScore] = useState(0);
    const [artistName, setArtistName] = useState("N.Prajith Kumar Reddy");
    const handleIncrement=()=>{
        setGameScore(gameScore+1)
    }
    const handleDecrement=()=>{
        if(gameScore>0){
            setGameScore(gameScore-1)
        }
        
    }
    const handleChangeName=(e)=>{
        setArtistName(e.target.value)
    }
    return (
        <div className="playground-container">
            <h1>Playground : Art Competition</h1>
            <h3>Artist Name:<span>{artistName}</span></h3>
            <h3>
              Game Score: <span>{gameScore}</span>
            </h3>  
            <div>
                <input type="text" onChange={handleChangeName}/>
                <button onClick={handleIncrement}>Increase Score</button>
                <button onClick={handleDecrement}>Decrease Score</button>
            </div>
        </div>
    )
}
export default Playground;