import React, { useState } from "react";
import styled from "styled-components";
import { TextInputWTitle } from "../inputs/TextInputWTitle";


const StyleForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2 , calc(50% - 0.5rem));
    grid-gap: 1rem;
    background: var(--bg-color-1);
    padding: 1rem;
    margin-left: 6rem;
    border-radius: 8px;
    width: calc(100% - 8rem);
    .form-text{
        grid-column: span 2;
        display: flex;
        text-align: start;
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-3);
    }
    .sendButton{
        grid-column: span 2;
        color: var(--color-4);
        border-radius: 4px;
        cursor: pointer;
        background: var(--primary-2);
        padding: 1rem;
        width:100% ;
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-3);
        border: var(--border-1);
    }
    .sendButton:hover{
        color: var(--primary-2);
        background: var(--bg-color-1);
    }
    @media screen and (max-width: 850px){
        width: calc(100% - 2rem);
        margin-left: 0;
        display: flex;
        flex-direction: column;
    }
`

const StyleSuccess= styled.h1`
    display: flex;
    text-align: center;
    position: relative;
    font-weight: var(--font-weight-1);
    color: var(--color-2);
    animation: showup 3s infinite linear;
    -webkit-animation-fill-mode: backwards;
    animation-fill-mode: forwards;

    @keyframes showup {
        0% {opacity:0;}
        20% {opacity:1;}
        80% {opacity:1;}
        100% {opacity:0;}
    }
`

const form = [
    {label: 'Name' , value:'', name:'name', mode:'text', type:'text'},
    {label: 'User Name' , value:'', name:'username', mode:'text', type:'text'},
    {label: 'Phone' , value:'', name:'phone', mode:'tel', type:'tel'},
    {label: 'Email' , value:'', name:'email', mode:'email', type:'email'}
]

export const UserFromData=()=>{
    const [userdata , setUserData]= useState({})
    const [sending , setSending]= useState(false)
    const postData = (e) => {
        console.log(JSON.stringify('userdata'))
        e.preventDefault()
        console.log(JSON.stringify(userdata))
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify(userdata),
            headers: {
              'Accept': 'application/json'
            },
        })
        .then((response) => { response.json() })
        .then((json) => console.log(json))
        .then( setSending(true))
    }

    const inputchange=(e)=>{
        let data = userdata
        switch(e.target.name){
            case 'username':
                data.username = e.target.value;
                break
            case 'name':
                data.name = e.target.value;
                break
            case 'phone':
                data.phone = e.target.value;
                break
            case 'email':
                data.email = e.target.value;
                break
            default:
                break  
        }
        setUserData(data)
    }
    const userForm =()=>{
        return(
            <StyleForm onSubmit={postData} >
                <div  className="form-text">Please fill out your information</div>
                { 
                    form.map((value , index)=>{
                        return <TextInputWTitle key={index} keys={index}  error='' name={value.name} title={value.label} type={value.type} inputmode={value.mode} value={userdata[value.value]} onchange={inputchange} required={false}/>
                    })
                }
                <button type="submit" className="sendButton">Send your information</button>
            </StyleForm>
        )
    }
    const UserWelCome=()=>{
        return(
            <StyleSuccess>
                Thank you. Your Data Saved &#58;&#41;
            </StyleSuccess>
        )
    }
    if(sending){
        return UserWelCome()
    }
    return userForm()
}
