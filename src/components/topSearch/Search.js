import styled from "styled-components";

const StyleSearch = styled.div`
    background: var(--bg-color-1);
    border-radius: var(--border-radius-1);
    margin: 3.75rem auto 0;
    width: calc(100% - 20rem);
    height: 4rem;

    @media screen and (max-width: 850px){
        margin: 3.75rem 1rem 0;
        width: calc(100% - 2rem);
    }
`

export const Search=()=>{
    return <StyleSearch></StyleSearch>
}