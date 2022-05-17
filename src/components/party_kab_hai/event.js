import React, { useState } from 'react';
import { useEffect } from 'react';
import { getEvent } from '../../apicalls/eventcall';
import nothing from '../../assets/nothing3.gif';
const Event=()=>{
    const [data,setData]=useState([]);
    useEffect(()=>{
        async function getdata(){
            let data=await getEvent();
            setData(data);
        }
        getdata();
       
    },[])
    
    return (
        <>
          <div className="event_image"><img src={`${data.length?data[0].gif:nothing}`} alt="loading..."/></div>

         
        </>
    )
};

export default Event;