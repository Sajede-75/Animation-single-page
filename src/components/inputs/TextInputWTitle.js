import React, { useState } from "react";
import styled from "styled-components";
// import ErrorIcon from '@mui/icons-material/Error';



const Styles = styled.div`
  --trans-1: all 0.15s ease-in-out;
  --fs-textfield: 16px;
  --fs-small: 12px;
  --border-radius: 4px;
  --border-2: #E5E5E5;
  --border-3: #CBCBCB;


  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 0.5rem;
  &.color-white {
    align-items: normal;
    .text-field{
      color: #fff;
    }
  }
  .text-field {
    z-index: 3;
    width: calc(100% - 3rem);
    padding: calc(var(--fs-textfield) * 2.3) calc(1.5rem - 1px) calc(var(--fs-textfield) * 0.7);
    border-radius: var(--border-radius);
    border: 1px solid #E5E5E5;
    outline: none;
    transition: var(--trans-1) ;
    font-size: var(--fs-textfield);
    background: transparent;
    
    &.error-text {
      border: 1px solid #b2b2bb;
    }
    &.ltr-text {
      text-align: left;
      direction: ltr;
    }
    &.center-text {
      text-align: center;
      direction: ltr;
    }
    &.disabled {
      background-color: var(--color-2);
      color: var(--color-3);
    }
    :focus {
      border: 1px var(--border-3) solid;
    }
  }
  
  .label-textinput{
    z-index: 3;
    position: absolute;
    top: calc(var(--fs-textfield) * 0.5);
    right: calc(var(--fs-textfield) * 1.2);
    transition: var(--trans-1);
    &.disabled {
      color: var(--color-3);
    }
  }
  .text-field:focus + .label-textinput {
    z-index: 5;
    top: calc(var(--fs-textfield) * 0.5);
    font-size: calc(var(--fs-textfield) * 0.8);
  }
  .text-field:not([value=""]) + .label-textinput {
    z-index: 5;
    top: calc(var(--fs-textfield) * 0.5);
    font-size: calc(var(--fs-textfield) * 0.8);
  }
  .error {
    display: flex;
    height: 0.75rem;
    font-size: var(--fs-small);
    .icon {
      width: 1rem;
      height: 1rem;
    }
    .text {
      margin: 0.1rem 0.2rem 0 0;
      color: red;
    }
  }
  @media screen and (max-width: 1445px) {
    .text-field {
      width: calc(100% - 2rem);
      padding: calc(var(--fs-textfield) * 1.6) calc(1rem - 1px) calc(var(--fs-textfield) * 0.5);
    }
  
    .label-textinput{
      top: calc(var(--fs-textfield) * 1.05);
      right: calc(var(--fs-textfield) * 1.05);
    }
    .text-field:focus + .label-textinput {
      top: calc(var(--fs-textfield) * 0.3);
      font-size: calc(var(--fs-textfield) * 0.8);
    }
    .text-field:not([value=""]) + .label-textinput {
      top: calc(var(--fs-textfield) * 0.3);
      font-size: calc(var(--fs-textfield) * 0.8);
    }
  
  }
  @media screen and (max-width: 850px) {
   
    .text-field {
      width: calc(100% - 1.8rem);
    }
    &.mo-input{
      .text-field {
        width: calc(100% - 3rem);
      }
    }
  }
`;

// dokme chesm baray ramz ha
export const TextInputWTitle = ({
  style,
  name,
  type = "text",
  error,
  value,
  onchange,
  title,
  required,
  ltr,
  center,
  disabled,
  inputmode,
  keys,
  classname,
  readonly
}) => {
  const [showPass, setShowPass] = useState(false);

  let errorComp = "";
  let classes = "text-field";
  if (error.toString()) {
    classes = "text-field error-text";
    errorComp = (
      <React.Fragment>
        {/* <ErrorRounded style={{fontSize: "20px"}}/> */}
        <div className="text">{error}</div>
      </React.Fragment>
    );
  }

  if (ltr) {
    classes += " ltr-text";
  }

  if (center) {
    classes += " center-text";
  }
  if (disabled) {
    classes += " disabled";
  }
  

  return (
    <Styles style={style} key={keys} className={classname}>
      <input
        className={classes} 
        name={name}
        type={showPass ? "text" : type}
        value={value}
        onChange={onchange}
        required={required}
        disabled={disabled}
        inputMode={inputmode}
        readOnly={readonly}
        autoComplete="false"
      />
      <label className={"label-textinput " + ((disabled) ? 'disabled' : '')}>
        {title}
      </label>
      <div className="error">{errorComp}</div>
    </Styles>
  );
};
