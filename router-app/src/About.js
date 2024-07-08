import { useLocation, useSearchParams } from "react-router-dom";
import qs from 'qs';

export default function About() {
    // const location = useLocation();
    // console.log(location);

    // const query = qs.parse(location.search, { ignoreQueryPrefix: true });
    // console.log(query);

    const [searchParams,setSearchParams] = useSearchParams();
    console.log(searchParams);
    const detail = searchParams.get('detail');
    console.log(detail);
    return (
        <div>
            <h1>소개</h1>
            <h2>리액트 라우트 연습 앱</h2>
            {
                  detail === 'true' && <h2>상세 내용입니다.</h2>
            }
        </div>
    );
};

