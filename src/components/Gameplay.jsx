import styled from "styled-components"
import NumberSelector from "./NumberSelector"
import TotalScore from "./TotalScore"
import RollDice from "./RollDice"
import { useState } from "react";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const Gameplay = () => {
    const [score,setscore]=useState(0);
    const [selectedNumber,setselectedNumber]=useState();
    const [currentDice,setcurrentDice]= useState(1);
    const [error,seterror]=useState();
    const [showRules,setshowRules]= useState(false)

      const generaterandomnumber = (min,max) =>{
        return Math.floor(Math.random() *(max-min)) + min;
    };

    const rollDice =() => {
        if(!selectedNumber) {
            seterror('You have not selected any number')
            return;
        }
        seterror('');
        const randomnumber = generaterandomnumber(1,7);

        setcurrentDice ((prev)=> randomnumber);

        

        if (selectedNumber === randomnumber){
            setscore((prev)=>prev + randomnumber)
        }else{
            setscore((prev)=>  prev-2)
        }
        setselectedNumber(undefined)
    }

    const resetScore = ()=>{
        setscore(0);
    }

    return (
    <MainContainer>
        <div className="top-section">
            <TotalScore score={score}/>
            <NumberSelector

                            error={error}
                            seterror={seterror}
                            selectedNumber={selectedNumber} 
                            setselectedNumber={setselectedNumber} />
        </div>
        <RollDice currentDice={currentDice}
                    rollDice={rollDice}/>
        <div className="btns">
            <OutlineButton onClick={resetScore}>Reset</OutlineButton>
            <Button
                onClick={()=> setshowRules((prev)=>!prev)}    >{showRules ? 'hide' :'show'}Rules</Button>
        </div>
       {showRules && < Rules/>} 
    </MainContainer>
  )
}

export default Gameplay

const MainContainer=styled.div`
    padding-top:70px;
    .top-section{
        display:flex;
        justify-content:space-around;
        align-items:center;
    }
    .btns{
        margin-top:40px;
        display:flex;
        gap:10px;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        gap:10px;
    }
`