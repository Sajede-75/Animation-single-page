import styled from "styled-components"
import Girl2 from "../../assets/Girl2"
import { UserFromData } from "./UserFormData"

const Style = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: repeat(2 , 50%);
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20rem);
    aspect-ratio: 1.3;
    padding: 0 10rem ;    
    background: var(--primary-2);
    .top-empty{
        border-top: 15rem solid var(--primary-1);
        border-right: 100vw solid transparent;
        position: absolute;
        left: 0;
        top: 0;
    }
    .bottom-empty{
        border-bottom: 15rem solid var(--primary-3);
        border-left: 100vw solid transparent;
        position: absolute;
        left: 0;
        bottom: 0;
    }

    @media screen and (max-width: 850px){
        padding: 1rem 1rem 6rem;
        margin-top: 3.2rem;
        width: calc(100% - 2rem);
        grid-template-columns: 1fr;
        justify-content: flex-start;
        height: max-content;
        .bottom-empty , .top-empty{
            border-top-width: 5rem;
            border-bottom-width: 5rem;
        }
        .girl2{
            grid-row: 1;
        }
    }
`

export const BottomField=()=>{
    return(
        <Style>
            <div className="top-empty"></div>
            <UserFromData/>
            <Girl2 classname={'girl2'}/>
            <div className="bottom-empty"></div>
        </Style>
    )

}