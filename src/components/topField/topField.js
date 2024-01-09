import styled from "styled-components"
import Girl1 from "../../assets/Girl1"
import { UserFromData } from "./UserFormData"

const Style = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;

`

export const TopField=()=>{
    return(
        <Style>
            <Girl1 classname={'girl'}/>
            <UserFromData/>
        </Style>
    )

}