import LoginForm from './form';
import React, { useEffect, useState } from 'react';
import Manager from './manager';

export default function Main(){

    let [start,setStart] = useState(false);

    const handleStart = ()=>{
        setStart(true);
    }

    return(
        <>
        {!start ? <LoginForm start={handleStart} /> : <Manager />}
        </>
    )
}