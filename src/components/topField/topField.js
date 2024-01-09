import styled from "styled-components"
import Girl1 from "../../assets/Girl1"
import { UserFromData } from "./UserFormData"

const Style = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: calc(100% - 20rem);
    margin-top: 4.25rem;
    padding: 0 10rem;
    height: 25rem;

`

export const TopField=()=>{
    return(
        <Style>
            <UserFromData/>
            <Girl1 classname={'girl'}/>
        </Style>
    )

}