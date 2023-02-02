import Check from "./Check";
import { ReactNode } from "react";
import { useState } from "react";
import axios from "axios";
import qs from "qs";

// DB에서 반환된 결과 오른쪽 화면에 띄우기 
const RCMND = () => {

    // 이미지 띄우는 부분 
    const showRCMND = (): ReactNode => {

        const cafeIMG1 = "/IMG/dumdum/21797_10632_1745.jpg";
        const cafeIMG2 = "/IMG/dumdum/21797_10633_1844.jpg";
        const cafeIMG3 = "/IMG/dumdum/21797_10635_1948.jpg";

        const listIMGs = [cafeIMG1, cafeIMG2, cafeIMG3];
        // const [IMG, setIMG] = useState<>(cafeIMG1);

        return (
            <div className="flex">
                <div className="container grid justify-center grid-cols-5 grid-rows-3 gap-2 pt-4 ">
                    {/* <button className="bg-[url('https://www.google.com/imgres?imgurl=https%3A%2F%2Ft3.daumcdn.net%2Fthumb%2FR720x0%2F%3Ffname%3Dhttp%3A%2F%2Ft1.daumcdn.net%2Fbrunch%2Fservice%2Fuser%2F5GdC%2Fimage%2FbYmpkwCBPcrYP5f0QxHSS24ANsw&imgrefurl=https%3A%2F%2Fbrunch.co.kr%2F%40%405GdC%2F104&tbnid=HP7LmFkn6pll2M&vet=12ahUKEwiD1-ft3_b8AhWMHaYKHeIiCa4QMygOegUIARDfAQ..i&docid=p7Ed31O1GN_wBM&w=720&h=900&q=%EC%B9%B4%ED%8E%98%20%EC%84%B1%EC%88%98&ved=2ahUKEwiD1-ft3_b8AhWMHaYKHeIiCa4QMygOegUIARDfAQ')]">
                        버튼
                    </button>
                    <div className="flex">
                        <img className="shadow-xl w-50 h-50 hover:grayscale" src={cafeIMG1} alt="성수 카페" />
                        <span>대림창고</span>
                    </div> */}
                    <img className="shadow-xl w-50 h-50" src={cafeIMG2} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG2} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG3} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                    <img className="shadow-xl w-50 h-50" src={cafeIMG1} alt="성수 카페" />
                </div>
                <div className="flex content-center w-fit">
                    <button type="button" name="nextPlaceButton">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#A29B9B" className="w-10 h-10 pl-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }




    return (
        <div className="h-screen">
            <div className="flex">
                <div className="flex w-fit"><Check /></div>
                <div className="pt-5 pr-3 pl-7 w-fit h-fit">{showRCMND()}</div>
            </div>
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
