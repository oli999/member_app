// src/pages/Home.js

import { Link } from "react-router-dom";

export default function Home(){

    return (
        <>
            <h1>인덱스 페이지입니다</h1>
            <h2>공지사항</h2>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/members">회원목록</Link>
                </li>
            </ul>
        </>
    )
}