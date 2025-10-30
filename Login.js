import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [email, setemail] = useState("") 
    const [userpassword, setuserpassword] = useState("")
    const navigate = useNavigate()
    const login = async (e) => {
        e.preventDefault()

        console.log("입력한 이메일:", email);
        console.log("입력한 비밀번호:", userpassword);
        
        try {
            await axios.post("http://localhost:8080/api/login", null, { params: {email, userpassword}, withCredentials: true})
            alert("로그인 성공!")
            navigate("/")
        } catch (err) {
            console.error("로그인 실패",err)
            alert("입력하신 정보가 다릅니다.")
        }
    }

    return (
        <>
            <form onSubmit={login}>
                <h1>로그인</h1>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={e => setemail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input value={userpassword} onChange={e => setuserpassword(e.target.value)}/>
                </div>
                <button type="submit">로그인 하기</button>
            </form>
        </>
    )
}