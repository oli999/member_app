// src/pages/MemberUpdateForm.js

import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function MemberUpdateForm(){
    /*
        /members/:num/edit  에서 num 값 읽어오기 
    */
    const {num}=useParams()
    //수정할 회원의 정보를 state 로 관리
    const [state, setState]=useState({
        num:0,
        name:"",
        addr:""
    })

    useEffect(()=>{
        axios.get("/members/"+num)
        .then(res=>{
            //res.data 는  {num:x, name:"xxx", addr:"xxx"} 형식의 object 이다
            setState(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }, [])
    
    const handleChange = (e)=>{
        setState({
            ...state,
            [e.target.name]:e.target.value
        })
    }

    const navigate=useNavigate()

    const handleSave = ()=>{
        axios.put("/members/"+num, state)
        .then(res=>{
            //회원 목록 보기로 이동
            navigate("/members")
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <>
            <h2>회원 정보 수정 양식</h2>
            <div>
                <label>이름</label>
                <input type="text" name="name" 
                    onChange={handleChange} value={state.name}/>
            </div>
            <div>
                <label>주소</label>
                <input type="text" name="addr"
                    onChange={handleChange} value={state.addr}/>
            </div>
            <button onClick={handleSave}>수정확인</button>
        </>
    )
}