import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostingList() {
    const [postings, setPostings] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/posting")
            .then(res => setPostings(res.data))
            .catch(err => console.error(err))
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8080/api/posting/${id}`)
            .then(() => setPostings(postings.filter(b => b.id !== id)))
            .catch(err => console.error(err))
    }

    const [user, setUser] = useState(null)

    useEffect(() => {
        axios.get("http://localhost:8080/api/me", {withCredentials: true})
            .then(res => setUser(res.data))
            .catch(() => setUser(null))
    })

    return (
        <>
            <h2>게시글 목록</h2>
            <Link to="/create">글 작성</Link>
            <ul>
                {postings.map(b => (
                    <li key={b.id}>
                        <strong>{b.title}</strong> ({b.writer})
                        <button onClick={() => handleDelete(b.id)}>삭제</button>
                    </li>
                ))}
            </ul>
            {user ? (
                <>
                    <p>{user.userid}님 환영합니다!</p>
                </>
            ) : (
                <>
                    <h2>회원가입 하기</h2>
                    <Link to="/register">가입하기</Link>
                    <h2>로그인 하기</h2>
                    <Link to="/login">로그인</Link>
                </>
            )}
        </>
    )
}