import { Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Profile from './Profile';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">홈</Link></li>
        <li><Link to="/about">소개</Link></li>
        <li><Link to="/info">정보</Link></li>
        <li><Link to="/profile/mrgo">고길동 프로파일</Link></li>
        <li><Link to="/profile/mrhong">홍길동 프로파일</Link></li>
        <li><Link to="/profile/none">없는 프로파일</Link></li>
      </ul>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        <Route path="/profile/:userid" element={<Profile />} />
      </Routes>    
    </>
  );
}
export default App;


