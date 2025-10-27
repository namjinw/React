import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PostingForm() {
    const [title, setTitle] = useState("");
    const [writer, setWriter] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8080/api/posting", { title, writer, content })
            .then(() => navigate("/"))
            .catch(err => console.error(err))
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>제목</label>
                <input value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label>작성자</label>
                <input value={writer} onChange={e => setWriter(e.target.value)} />
            </div>
            <div>
                <label>내용</label>
                <textarea value={content} onChange={e => setContent(e.target.value)} />
            </div>
            <button type="submit">등록</button>
        </form>
    )
}