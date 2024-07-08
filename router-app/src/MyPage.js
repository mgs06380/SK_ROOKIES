import { Navigate } from "react-router-dom";

// 로그인하지 않은 경우 로그인 페이지로 이동(리다이렉션)
export default function MyPage() {
    const isLoggedIn = false;

    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} />;	⇐ 브라우저의 히스토리 스택을 변경하지 않고 대체 
    }								 //  → 이전 페이지로 돌아가는 것을 방지할 수 있음
    return <h1>마이 페이지</h1>;
};
