import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Resiter() {

    const [email, setemail] = useState("")
    const [userid, setuserid] = useState("")
    const [userpassword, setuserpassword] = useState("")
    const navigate = useNavigate()

    const register = async (e) => {
        e.preventDefault()

        try {
            await axios.post("http://localhost:8080/api/register", null ,{params: { email, userpassword, userid}})
            alert("회원가입 성공!")
            navigate("/")
        }
        catch (error) {
            console.error("회원가입 실패", error)
            alert("회원가입 중 오류가 발생했습니다.")
        }
    }

    return (
        <>
            <form onSubmit={register}>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={e => setemail(e.target.value)}/>
                </div>
                <div>
                    <label>User ID</label>
                    <input value={userid} onChange={e => setuserid(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input value={userpassword} onChange={e => setuserpassword(e.target.value)}/>
                </div>
                <button type="submit">가입하기</button>
            </form>
        </>
    )
}