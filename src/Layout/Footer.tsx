import axios from 'axios';
import { useState } from "react";
import { ReactNode } from "react";
import { json } from 'stream/consumers';


const Footer = () => {

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

    // const [fruit, setFruit] = useState("");
    // const url = "http://127.0.0.1:8000/fruits"

    // const typeFruit = async () => {
    //     console.log("되나");
    //     await axios.get(url)
    //         .then(function (response) {
    //             console.log("인풋 성공");
    //         }).then((response: any) => {
    //             const data = response.data // 이게 json형식으로 오는거
    //             setFruit(response.data[0]);
    //         }).catch(error => {
    //             console.log(error, ' GetBasketItem 에러');
    //         })
    //     return <div>{fruit}</div>
    // }

    // typeFruit()

    // await jsonp(url, null, (err, res) => {

    // });

    // const getData = () = {
    //     axios.get('http://127.0.0.1:8000/fruits').then((response:any) => console.log(response.data))
    // }
    return (
        <div className='h-fit' >
            <div className="font-serif bg-green-700">
                {/* 폰트 바꿔야됨 */}
                {/* <div>{fruit}</div> */}
                <p className=" flex justify-center p-16 pb-12 text-7xl font-thin text-[#eae7de]">
                    새삼스러울, 서울
                </p>

                <div className="flex place-content-between">
                    <div className="flex text-[#eae7de] pb-12 pt-10">
                        <div className="pl-12">
                            <p className="p-3">Product Manager</p>
                            <p className="p-3">DB Engineer</p>
                            <p className="p-3">Data Analyst</p>
                            <p className="p-3">ML Engineer</p>
                        </div>
                        <div className="pt-1 pl-4 font-medium">
                            <p className="p-3">왕재준</p>
                            <p className="p-3">김가람 | 왕재준 | 김다함</p>
                            <p className="p-3">김가람</p>
                            <p className="p-3">왕재준</p>
                        </div>
                        <div className="pl-8">
                            <p className="p-3">Frontend Engineer</p>
                            <p className="p-3">Backend Enginner</p>
                            <p className="p-3">Designer</p>
                            <p className="p-3">Special Thanks to</p>
                        </div>
                        <div className="pt-1 pl-4 font-medium">
                            <p className="p-3">김효정</p>
                            <p className="p-3">김다함</p>
                            <p className="p-3">김효정</p>
                            <p className="p-3">
                                <p>빅데이터 15기 천재들</p>
                                <p>유정호 강사님</p>
                                <p>김광일 멘토님</p>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-end justify-end w-1/3 p-20">
                        {/* 새삼 로고 */}
                        <img className="h-36 w-36" src="./IMG/seasam_logo.png" alt="saesam logo" />

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;

export { }