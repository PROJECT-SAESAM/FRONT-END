import Check from "./Check";
import { ReactNode } from "react";
import { useState } from "react";
import React, { useRef } from "react";
import axios from "axios";
import qs from "qs";
// import Modal from 'react-modal';


// DB에서 반환된 결과 오른쪽 화면에 띄우기 
const RCMND = () => {

    // 이미지 띄우는 부분 
    const showRCMND = (): ReactNode => {

        const cafeIMG1 = "/IMG/dumdum/21797_10632_1745.jpg";
        const cafeIMG2 = "/IMG/dumdum/21797_10633_1844.jpg";
        const cafeIMG3 = "/IMG/dumdum/21797_10635_1948.jpg";
        const cafeIMG4 = "/IMG/dumdum/21797_10636_2010.jpg";
        const cafeIMG5 = "/IMG/dumdum/62440630_706233776497984_5412862210687989344_n.png";
        const cafeIMG6 = "/IMG/dumdum/image-28.webp";
        const cafeIMG7 = "/IMG/dumdum/images (1).jpeg";
        const cafeIMG8 = "/IMG/dumdum/images (2).jpeg";
        const cafeIMG9 = "/IMG/dumdum/images (3).jpeg";
        const cafeIMG10 = "/IMG/dumdum/images (4).jpeg";
        const cafeIMG11 = "/IMG/dumdum/images (5).jpeg";
        const cafeIMG12 = "/IMG/dumdum/images (6).jpeg";
        const cafeIMG13 = "/IMG/dumdum/images (7).jpeg";
        const cafeIMG14 = "/IMG/dumdum/images (8).jpeg";
        const cafeIMG15 = "/IMG/dumdum/images (9).jpeg";

        const listIMGs = [cafeIMG1, cafeIMG2, cafeIMG3];
        // const [IMG, setIMG] = useState<>(cafeIMG1);

        return (
            // 이전 슬라이딩 버튼
            <div className="flex w-full pl-4">
                <div className="flex content-center pr-5">
                    <button type="button" name="backPlaceButton" className="place-self-center hover:w-11/12 h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#A29B9B" className="w-full h-16 p-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>
                </div>
                {/* 결과값 공간들*/}
                <div className="container grid grid-cols-5 grid-rows-3 gap-3 pt-2 w-fit">
                    <label>
                        <button onClick={() => setShowModal(true)}>
                            <li className="relative list-none w-fit h-fit">
                                <img className="shadow-xl w-44 h-44" src={cafeIMG1} alt="성수 카페" />
                                <div className="absolute flex justify-center -translate-y-full bg-opacity-0 opacity-0 place-items-center w-44 h-44 hover:opacity-100 hover:bg-opacity-60 bg-neutral-400">
                                    <p className="text-2xl font-semibold shadow-2xl via-black w-fit h-fit">대림창고</p>
                                </div>
                            </li>
                        </button>
                    </label>
                </div>
                {/* 다음 슬라이딩 버튼 */}
                <div className="flex content-center pl-5">
                    <button type="button" name="nextPlaceButton" className="place-self-center hover:w-11/12 h-fit">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#A29B9B" className="w-full h-16 p-1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>
        )
    }

    const [showModal, setShowModal] = useState<boolean>(false);
    const outSection = useRef<HTMLInputElement>(null);

    //모달창 닫기 구현중
    // const showPlaceInfo = (visible: boolean) => {

    //     const outClick = () => {
    //         if (outSection.current) {
    //             outSection.current.value = "";
    //         }
    //     };

    //     if (!visible)
    //         return null
    //     return (
    //         <div>
    //             <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
    //                 <div h-hit w-fit>my modal</div>
    //             </div>
    //             <input ref={outSection} />
    //             <button onClick={outClick}></button>
    //         </div>
    //     )
    // }



    return (
        <div className="h-screen">
            <div className="flex">
                <div className="flex w-fit"><Check /></div>
                <div className="flex justify-center w-full py-6 h-fit">{showRCMND()}</div>
                {showPlaceInfo(showModal)}
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
