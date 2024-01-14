import styled from "styled-components"
import Tick from '../../assets/tick.svg'
import Arrow from "../../assets/Arrow"

const Style = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    width: calc(100% - 6rem);
    @keyframes textAnimation {
        100%{
            width: 0rem;
            color: var(--color-3)
        }
        90%{
            width: 1rem;
            color: var(--color-3)
        }
        80%{
            width: 2rem;
            color: var(--color-2)
        }
        70%{
            width: 3rem;
            color: var(--color-3)
        }
        60%{
            width: 4rem;
            color: var(--color-2)
        }
        50%{
            width: 5rem;
            color: var(--color-3)
        }
        40%{
            width: 6rem;
            color: var(--color-2)
        }
        30%{
            width: 7rem;
            color: var(--color-3)
        }
        20%{
            width: 8rem;
            color: var(--color-2)
        }
        10%{
            width: 9rem;
            color: var(--color-3)
        }
        0%{
            width: 0rem;
            color: var(--color-2)
        }
    }
    .title{
        position: relative;
        color: var(--primary-2);
        text-align: start;
        text-transform: uppercase;
        margin: 0;
        font-weight: var(--font-weight-1);
    }
    .desc{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        color: var(--color-2);
        font-weight: var(--font-weight-1);
        margin: 0;
        
    }
    .aniamationText{
        margin-top: 0;
        &::after{
            content: '|';
            display: flex;
            width: 11rem ;
            animation: textAnimation linear 2s infinite;
            animation-delay: 2s ;
            background-color: var(--primary-1);
            position: absolute;
            inset: auto 0 0 auto;
        }
    }
    .dataGrid{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 1.75rem 0;
        .dataItem{
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background: var(--bg-color-1);
            border-radius: var(--border-radius-1);
            padding: 14px 40px 14px 20px;
            max-width: calc(50% - 1rem);
            margin: 0.5rem ;
            margin-left: 0;
            white-space: nowrap;
            .data{
                margin: 0;
                margin-left: 0.5rem;
            }
            .svg{
                width: 1.8rem;
            }
        }
    }
    .button{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: var(--border-radius-1);
        padding: 12px 50px;
        background: var(--primary-2);
        border: none;
        box-shadow: 9px 9px 0px 0px #00000000;
        width: 50%;
        font-weight: var(--font-weight-1);
        transition: box-shadow 0.5s ease-in-out;
        .arrow{
            width: 1.5rem;
        }
        &:hover{
            box-shadow: 9px 9px 0px 0px #000;
            border: 1px solid #000;
            .arrow{
                transform: rotate(90deg);
                transition: all 0.5ms var(--liner)
            }
        }
        
    }

    @media screen and (max-width:850px){
        margin-left: 0;
        width: 100%;
        .dataGrid .dataItem{
            max-width: calc(100% - 1rem);
        }
        .button{
            width: 100%
        }

       
    }
`
const data = [
            'Cursus Integer' ,
            'Integer Consequat ' ,
            'Tellus Euismod Pellentesque',
            'Aliquot Tristique',
            'Pellentesque Tempus',
            'Mauris Fermentum Praesent'
        ]
const RightFeildData=()=>{
    const datasFeild = data.map((d, index)=>{
        return(
            <div className="dataItem" key={index}>
                <img className="svg" src={Tick} alt=''/>
                <h6 className="data">{d}</h6>
            </div>
        )
    })
    return(
        <Style>
            <h5 className="title">risus praesent vulputate.  </h5>
            <h1 className="desc">
                Cursus Integer
            </h1>
            <h1 className="desc aniamationText">
                Consequat Tristique.
            </h1>
            <div className="dataGrid">
                {datasFeild}
            </div>
            <button className='button'>Lorem Ipsum<Arrow classname="arrow"/></button>
        </Style>
    )
}
export default RightFeildData