import Check from "./Check";
import { ReactNode } from "react";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import axios from "axios";
import Modal from "./Modal";


export interface wholePlaceType {
    title: string;
    addr: string;
    tel: string;
    info: string;
    image_place: string;
    image_food: string;
    url: string;
    kind_big: string;
    kind_small: string;
    kind_detail: string;
    local: string;
    subway: string;
    distance: number;
    walk: number;
    menu_name: string;
    id: string;
}


// 모달창 열리면 스크롤 잠김 기능
// 모달 외부 배경 누르면 닫힘 가능 근데 이제 모달을 눌러도 닫히는
// 해결해


// DB에서 반환된 결과 오른쪽 화면에 띄우기 
const RCMND = () => {


    let [place, setPlace] = useState<wholePlaceType[]>([]);
    // 'http://127.0.0.1:8000/%EC%84%B1%EC%88%98%EB%8F%99'
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/%EC%84%B1%EC%88%98%EB%8F%99')
            .then(response => {
                setPlace(Object.values(response.data));
            });
    }, []);

    // let [place, setPlace] = useState<wholePlaceType[]>([]);
    // // 'http://127.0.0.1:8000/성수동/카페/items'
    // useEffect(() => {
    //     axios.get('http://10.190.175.34:51582/성수동/카페/items')
    //         .then(response => {
    //             setPlace(Object.values(response.data));
    //             console.log(place)
    //         });
    // }, []);

    // 이미지 띄우는 부분 
    const showRCMND = (): ReactNode => {

        console.log(place[0].id)

        const result =
            place.map((p) => {
                return (//체크박스 디자인 바꾸기

                    <label>
                        {/* 클릭하면 모달창 */}
                        <button onClick={() => setShowModal(true)} id={p.id}>
                            <div className="relative w-fit h-fit">
                                <img className="shadow-xl w-44 h-44" src={p.image_place} alt="성수 카페" />
                                <div className="absolute flex justify-center -translate-y-full bg-opacity-0 opacity-0 place-items-center w-44 h-44 hover:opacity-100 hover:bg-opacity-60 bg-neutral-400">
                                    <p className="text-2xl font-semibold shadow-2xl via-black w-fit h-fit">{p.title}</p>
                                </div>
                            </div>
                        </button>
                    </label>

                )
            })

        return result

    }



    const [showModal, setShowModal] = useState<boolean>(false);
    const outSection = useRef<HTMLInputElement>(null);




    return (
        <div>
            <div className="h-screen flex place-items-end">
                {/* <div><p>{여기에 checkedList}</p></div> */}
                <div className="flex 체크박스랑 결과 부분">
                    <div className="flex w-fit"><Check /></div>
                    <div className="flex 가게와 가게정보 셋뚜쎗뚜">
                        <div className="flex justify-center w-full">
                            {/* 슬라이딩 버튼들 빼기 */}
                            <div className="flex w-full pl-4">
                                {/* 이전 슬라이딩 버튼 */}
                                <div className="flex content-center pr-5">
                                    <button type="button" name="backPlaceButton" className="place-self-center hover:w-11/12 h-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#A29B9B" className="w-full h-16 p-1">
                                            <path stroke="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="container grid grid-cols-5 grid-rows-3 gap-3 pt-2 w-fit h-fit">{showRCMND()}</div>
                                {/* 다음 슬라이딩 버튼 */}
                                <div className="flex content-center pl-5">
                                    <button type="button" name="nextPlaceButton" className="place-self-center hover:w-11/12 h-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#A29B9B" className="w-full h-16 p-1">
                                            <path stroke="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-auto">
                                <Modal place={...place} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default RCMND;


