import React, { useState } from "react";
import styled from "styled-components";
import { TextInputWTitle } from "../inputs/TextInputWTitle";


const StyleForm = styled.form`
    display: grid;
    grid-template-columns: repeat(2 , calc(50% - 0.5rem));
    grid-gap: 1rem;
    background: var(--bg-color-1);
    padding: 1rem;
    border-radius: 8px;
    margin-left: 6rem;
    .sendButton{
        grid-column: span 2;
        color: var(--color-4);
        border-radius: 4px;
        border: none;
        cursor: pointer;
        background: var(--primary-2);
        padding: 1rem;
        width:100% ;
        font-size: var(--font-size-3);
        font-weight: var(--font-weight-3);
    }
    :hover{
        color: var(--primary-2);
        background: var(--bg-color-1);
    }
`

const form = [
    {label: 'Name' , value:'', name:'name', mode:'text', type:'text'},
    {label: 'User Name' , value:'', name:'username', mode:'text', type:'text'},
    {label: 'Phone' , value:'', name:'phone', mode:'tel', type:'tel'},
    {label: 'Email' , value:'', name:'email', mode:'email', type:'email'}
]

export const UserFromData=()=>{
    const [userdata , setUserData]= useState([])
    const [sending , setSending]= useState(false)
    const PostData= (e) => {
        e.preventDefault()
        console.log(JSON.stringify(userdata))
        // fetch('https://jsonplaceholder.typicode.com/users', {
        //     method: 'POST',
        //     body: JSON.stringify(userdata),
        //     headers: {
        //       'Accept': 'application/json'
        //     },
        // })
        // .then((response) => { response.json() })
        // .then((json) => console.log(json))
        // .then( setSending(true))
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
            <StyleForm onSubmit={PostData}>
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
            <div>
                welcome
            </div>
        )
    }
    if(sending){
        return UserWelCome()
    }
    return userForm()
}
