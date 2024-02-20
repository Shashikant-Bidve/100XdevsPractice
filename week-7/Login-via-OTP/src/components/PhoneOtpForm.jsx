import React from 'react'
import { useState } from 'react'
import OtpInput from './OtpInput';
const PhoneOtpForm = () => {
    const [phoneNumber,setPhoneNumber] = useState("");
    const [showOtp,setShowOtp] = useState(false);
    const handleSubmit = (e)=>{
        e.preventDefault()
        const regex = /[^0-9]/g;
        if(phoneNumber.length!==10 || regex.test(phoneNumber)){
            alert("Invalid Number");
            return;
        }
        setShowOtp(true);
    };
    const handlePhoneNumber = (e)=>{setPhoneNumber(e.target.value)};

    const onSubmit = ()=>{};

  return (
    <div>
    {!showOtp ? (
        <form action="" onSubmit={handleSubmit}>
        <input type="text" value={phoneNumber} onChange={handlePhoneNumber} placeholder='Enter Phone Number' />
        <button type="submit">Submit</button>
    </form>
    ):(
        <div><p>Enter OTP sent to {phoneNumber}</p>
        <OtpInput length={4} onSubmit={onSubmit}></OtpInput>
        </div>
        
    )}
    </div>
  )
}

export default PhoneOtpForm