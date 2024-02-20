import React from 'react'
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react'

const OtpInput = ({length,onSubmit=()=>{}}) => {
    const [otp,setOtp] = useState(new Array(length).fill(""));
    const inputRefs = useRef([]);

    const handleChange = (index, e)=>{
        let value = e.target.value;
        if(isNaN(value)){return;}
        value = value.substring(value.length-1);
        const newArr = [...otp];
        newArr[index] = value;
        setOtp(newArr);
        // const ot = otp.join("");
        const combinedOtp = newArr.join("");
        // console.log(ot, combinedOtp);
        if(combinedOtp.length == length) {console.log("Login Successful!")};
        if(index<length-1 && value && inputRefs.current[index+1]){
        inputRefs.current[index+1].focus();
    }
    };
    const handleClick = (ind)=>{
        inputRefs.current[ind].setSelectionRange(1,1);
    };
    const handleKeyDown = (ind, e)=>{
        if(e.key === "Backspace" && ind>0 && inputRefs.current[ind-1] && !otp[ind]){
            inputRefs.current[ind-1].focus();
        }
    };

    useEffect(()=>{
        if(inputRefs.current[0]){
            inputRefs.current[0].focus();
        }
    },[]);

    // console.log(inputRefs);

    return (
    <div>
        {
            otp.map((val,ind)=>{
                return (
                    <input key={ind} type='text' ref={(input)=>{inputRefs.current[ind] = input}} value={val} onChange={(e)=> handleChange(ind,e)} onClick={(e)=> handleClick(ind)} onKeyDown={(e)=> handleKeyDown(ind,e)} className='otpInput' />
                )
            })
        }
    </div>
  )
}

export default OtpInput