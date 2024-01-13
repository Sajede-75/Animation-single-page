import styled from "styled-components"
import Girl2 from "../../assets/Girl2"
import { UserFromData } from "./UserFormData"

const Style = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20rem);
    height: 50vw;
    padding: 0 10rem ;    
    background: var(--primary-2);
    .top-empty{
        border-top: 12rem solid var(--primary-1);
        border-right: 100vw solid transparent;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 2;
    }
    .bottom-empty{
        border-bottom: 12rem solid var(--primary-3);
        border-left: 100vw solid transparent;
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 2;
    }
    @media screen and (max-width:850px){
        padding: 1rem 1rem 6rem;
        margin-top: 3.2rem;
        width: calc(100% - 2rem);
        height: 100%;
        flex-direction: column-reverse;
        justify-content: flex-start;
        height: max-content;
        .bottom-empty , .top-empty{
            border-top-width: 5rem;
            border-bottom-width: 5rem;
            
        }
    }
`

export const BottomField=()=>{
    return(
        <Style>
            <div className="top-empty">
                
            </div>
            <UserFromData/>
            <Girl2 classname={'gril2'}/>
            <div className="bottom-empty">
                
            </div>
        </Style>
    )

}