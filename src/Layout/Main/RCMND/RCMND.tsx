import Check from "./Check";
import { ReactNode } from "react";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

// DB에서 반환된 결과 오른쪽 화면에 띄우기 
const RCMND = () => {

    // 이미지 띄우는 부분 
    // const showRCMND = (): ReactNode => {

    //     const cafeIMG1 = "21797_10632_1745.jpg";
    //     const cafeIMG2 = "21797_10633_1844.jpg";
    //     const cafeIMG3 = "21797_10635_1948.jpg";

    //     const listIMGs = [cafeIMG1, cafeIMG2, cafeIMG3];
    //     // const [IMG, setIMG] = useState<>(cafeIMG1);

    //     return (
    //         <div className="container">
    //             <div className="item"><image src={IMG} /></div>
    //         </div>
    //     )
    // }




    return (
        <div className="h-screen">
            <Check />
            {/* {showRCMND()} */}
        </div>

    )
};

export default RCMND;


        // // async await 를 사용한 깃헙의 프로필 사진을 보여주는 코드 예시
        // async function showAvatar() {

        //     // JSON 읽기
        //     let response = await fetch('/article/promise-chaining/user.json');
        //     let user = await response.json();

        //     // github 사용자 정보 읽기
        //     let githubResponse = await fetch(`https://api.github.com/users/${user.name}`);
        //     let githubUser = await githubResponse.json();

        //     // 아바타 보여주기
        //     let img = document.createElement('img');
        //     img.src = githubUser.avatar_url;
        //     img.className = "promise-avatar-example";
        //     document.body.append(img);

        //     // 3초 대기
        //     await new Promise((resolve, reject) => setTimeout(resolve, 3000));

        //     img.remove();

        //     return githubUser;
        // }

// showAvatar();


 // const url = '백엔드에서 준 api'

    // // 키워드리스트 받아오는 axios를 통해서 페이지 들어오자 마자 요청 받아서 state에 저장
    // const GetKeyword = async (userid) => {
    //     await axios.get({url}, {
    //         params: {
    //             username: userid,
    //         },
    //         headers: {
    //             "Content-Type": "application/json",
    //             "Authorization": "Bearer " + sessionStorage.getItem('access_token')

    //         }
    //     }).then(res => {
    //         const data = res.data // 이게 json형식으로 오는거
    //         setPlaceType(data.firstType);
    //         setMoodType(data.secondType);
    //     }).catch(error => {
    //         console.log(error, ' GetBasketItem 에러');
    //     })
    // }


    // let response = await fetch('/article/promise-chaining/user.json');

    // interface CovidSummaryResponse {
    //     Countries: any[];
    //     // {Country: "Afghanistan", CountryCode: "AF", Slug: "afghanistan", NewConfirmed: 241}
    //     Date: string;
    //     Global: any;
    //     Message: string;
    // }

    // // api axios response 정의
    // function fetchCovidSummary(): Promise<AxiosResponse<CovidSummaryResponse>> {
    //     const url = "https://api.covid19api.com/summary";

    //     return axios.get(url);
    // }

    // // 위 response interface 정의로 타입 추론
    // fetchCovidSummary().then(res => res.data.Message);
