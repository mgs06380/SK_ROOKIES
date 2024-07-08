export default function Profiles () {
    return (
        <>
            <h3>사용자 목록</h3>
            <ul>
                <li><Link to="/profile/mrgo">고길동 프로파일</Link></li>
                <li><Link to="/profile/mrhong">홍길동 프로파일</Link></li>
                <li><Link to="/profile/none">없는 프로파일</Link></li>
            </ul>
            <hr/>
        </>
    );
};
