import styled from "styled-components"
import Tick from '../../assets/tick.svg'
import Arrow from "../../assets/Arrow"

const Style = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-left: 6rem;
    width: calc(50% - 6rem);
    .title{
        position: relative;
        font-size: var(--font-size-2);
        font-weight: var(--font-weight-1);
        color: var(--primary-2);
        text-align: start;
        text-transform: uppercase;
        white-space: nowrap;
    }
    .desc{
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        font-size: var(--font-size-1);
        font-weight: var(--font-weight-1);
        color: var(--color-2);
        white-space: nowrap;

    }
    .dataGrid{
        position: relative;
        display: grid;
        grid-template-columns: repeat(2 , calc(50% - 0.87rem));
        grid-column-gap: 0.87rem;
        margin: 3.75rem 0;
        .data{
            position: relative;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background: var(--bg-color-1);
            border-radius: var(--border-radius-1);
            font-size: var(--font-size-3);
            font-weight: var(--font-weight-2);
            padding: 0.87rem 2.5rem;
            width: max-content;
            margin-bottom: 0.87rem ;
            white-space: nowrap;
        }
    }
    .button{
        position: relative;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        border-radius: var(--border-radius-1);
        padding: 24px 50px;
        background: var(--primary-2);
        border: none;
        width: 50%;
        .arrow{
            width: 1.5rem;

        }
        &:hover{
            box-shadow: 9px 9px 0px 0px #000;
            border: 1px solid #000;
            .arrow{
                transform: rotate(90deg);
                transition: all 1s var(--liner)
            }
        }
        
    }
    @media screen and (max-width:850px){
        margin-left: 0;
        width: 100%;
        .title{
            font-size: 16px;
        }
        .desc{
            font-size: 18px;
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
            <div className="data" key={index}>
                <img src={Tick} alt=''/>
                <span>{d}</span>
            </div>
        )
    })
    return(
        <Style>
            <span className="title">risus praesent vulputate.</span>
            <div className="desc">
                <span>Cursus Integer</span>
                <span>Consequat Tristique.</span>
            </div>
            <div className="dataGrid">
                {datasFeild}
            </div>
            <button className='button'>Lorem Ipsum<Arrow classname="arrow"/></button>
        </Style>
    )
}
export default RightFeildData