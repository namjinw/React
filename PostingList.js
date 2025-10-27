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
        </>
    )
}