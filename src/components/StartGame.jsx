import styled from 'styled-components'
import { Button } from '../styled/Button'

const StartGame = ({toggle}) => {
  return (
    <Container>
        <img src="./public/images/dices 1.png" />
        <div className='content'>
            <h1>DICE GAME</h1>
            <Button onClick={toggle}>Play Now</Button>
        </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width:1180px;
    display:flex;
    margin: 0px auto;
    height:100vh;
    align-items:center;

    .content{
        h1{
            font-size:96px;
            white-space:nowrap;
        }

    }

`
