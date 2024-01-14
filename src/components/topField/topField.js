import styled from "styled-components"
import Girl1 from "../../assets/Girl1"
import RightFeildData from "./RightFieldData"

const Style = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2 , 50%);
    justify-content: space-between;
    align-items: flex-start;
    width: calc(100% - 20rem);
    margin-top: 4.25rem;
    padding: 0 10rem;
    @media screen and (max-width:850px){
        padding: 0 1rem;
        margin-top: 0;
        width: calc(100% - 2rem);
        grid-template-columns: 1fr;
        justify-content: flex-start;
        .girl{
            grid-row: 1;
        }
    }


`

export const TopField=()=>{
    return(
        <Style>
            <RightFeildData/>
            <Girl1 classname={'girl'}/>
        </Style>
    )

}