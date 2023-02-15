import Check from "./Check";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { useState, useEffect } from "react";
import React, { useRef } from "react";
import axios from 'axios'
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import "./RCMND.css"

export interface propsToCheck {
    final: CategoryType;
    setfinal: Dispatch<SetStateAction<CategoryType>>;
    checked: string[];
    isChecked: Dispatch<SetStateAction<string[]>>;
    th: number;
    setTh: Dispatch<SetStateAction<number>>;
    showRCMND: () => ReactNode;
    rerender: boolean;
    setRerender: Dispatch<SetStateAction<boolean>>;
}


interface menuType {
    [key: string]: { [key: string]: [value: number] }
};

export interface wholePlaceType {
    title: string;
    info: string;
    url: string;
    image_food: string;
    image_place: string;
    id: number;
    menu: menuType;

};

export interface CategoryType {
    [key: string]: string[]
};


const RCMND = () => {

    const [place, setPlace] = useState<wholePlaceType[]>([]);
    const [showModal, setShowModal] = useState<boolean>(false);
    const outSection = useRef<HTMLInputElement>(null);
    const [clickedPlace, setClickedPlace] = useState<wholePlaceType>();
    const [clickedID, setClickedID] = useState<number>();
    // 체크된 keyword를 담을 리스트
    const [checkedKeywordList, setCheckedKeywordList] = useState<string[]>([]);
    //최종 리스트 만들기
    const [finalList, setFinalList] = useState<CategoryType>({});
    // 현재 카테고리
    const [th, setTh] = useState<number>(0);
    const [rerender, setRerender] = useState<boolean>(false);

    //모든 장소
    useEffect(() => {
        function allPlace() {
            console.log("다시 시작됏따")
            axios.get('http://127.0.0.1:8000/성수동')
                .then(response => {
                    const wholeObj = JSON.parse(response.data);
                    setPlace(wholeObj.slice(0, 51));
                })
        };
        allPlace();
    }, [rerender]);


    // 그리드 부분 
    const showRCMND = (): ReactNode => {

        const result =
            place.map((div) => {
                return (//체크박스 디자인 바꾸기
                    <label>
                        {/* 클릭하면 모달창 */}
                        <button onClick={(e) => {
                            setClickedID(div.id);
                            setShowModal(true);
                        }}>
                            <div className="relative w-max">
                                <img className="shadow-xl h-44 w-44" src={div.image_place} alt="공간 사진" />
                                <div className="absolute flex justify-center -translate-y-full bg-opacity-0 opacity-0 place-items-center w-44 h-44 hover:opacity-100 hover:bg-opacity-60 bg-neutral-400">
                                    <div className="text-2xl font-semibold shadow-2xl via-black w-fit h-fit">{div.title}</div>
                                </div>
                            </div>
                        </button>
                    </label>
                )
            })

        return result
    }

    //그리드 버튼 가로 스크롤



    //그리드에서 선택된 장소
    useEffect(() => {
        function placeByID() {
            axios.get(`http://127.0.0.1:8000/items/${clickedID}`)
                .then(response => {
                    const clickedObj = JSON.parse(response.data)[0];
                    setClickedPlace(clickedObj);
                })
        }
        placeByID()
    }, [clickedID])

    //모달창을 보여줭
    const showPlaceInfo = (visible: boolean) => {

        if (!visible) return null

        return (
            <div>
                {/* 모달 배경 */}
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
                    {/* 모달창 */}
                    <div className="fixed w-full h-full inset-x-52 inset-y-16">
                        <div className="w-3/4 h-5/6 bg-[#32503b] rounded-md bg-opacity-90 text-stone-50">
                            <div className="h-96">
                                {/* 모달-콘텐츠 */}
                                <div className="flex h-full">
                                    {/* 모달-이미지 */}
                                    <div className="w-1/2 px-6 pt-8 pb-3">
                                        <img className="object-cover w-full h-full" src={clickedPlace?.image_food} alt="음식사진" />
                                    </div>
                                    <div className="content-end w-1/2">
                                        {/* 모달 닫기 버튼*/}
                                        <div className="flex w-full place-content-end">
                                            <label className="flex justify-center w-16 h-14">
                                                <button onClick={() => setShowModal(false)}>
                                                    <div>X</div>
                                                </button>
                                            </label>
                                        </div>
                                        {/* 모달-텍스트 */}
                                        <div className="flex h-fit">
                                            <div className="grid w-full h-full grid-cols-1 pr-10 text-sm text-left info">
                                                <div className="pb-5 text-lg font-bold tracking-widest title">{clickedPlace?.title}</div>
                                                <div>
                                                    <div className="h-48 mb-0 overflow-y-auto text-sm font-thin leading-6 tracking-widest scrollbar intro">
                                                        {clickedPlace?.info}
                                                    </div>
                                                    <div className="flex pt-5 mainMenu place-content-between">
                                                        <div>
                                                            <div className="pb-1">
                                                                <span>{clickedPlace?.menu[0][0]} | {clickedPlace?.menu[0][1]}</span>
                                                            </div>
                                                            <div>
                                                                <span>{clickedPlace?.menu[1][0]} | {clickedPlace?.menu[1][1]}</span>
                                                            </div>
                                                        </div>

                                                        <a className="링크버튼 w-fit h-fit pr-1 place-items-center grid gap-1" href={clickedPlace?.url}>
                                                            <img className="w-8 h-8 rounded-2xl" src="/IMG/naverMapLogo.png" alt="naver logo" />
                                                            <div className="text-xs">네이버맵</div>
                                                        </a>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                                {/* 추가 추천서비스 */}
                                <div className="h-48 px-4 pt-3">
                                    <div className="flex h-full">
                                        <div className="w-40 h-full pl-1 pr-2">
                                            <div className="py-1 text-xs">2차는 어디 가지?</div>
                                            <div className="text-base font-bold ">메뉴가 겹치지 않는 다른 공간들이에요!</div>
                                        </div>
                                        {/* showPlaceInfo */}
                                        {/* 카드들 */}
                                        <div className="grid grid-cols-6">
                                            {/* id 같이 줘서 내용 바꿔야될듯 */}
                                            <button className="h-44" onClick={() => setShowModal(true)}>
                                                <div className="h-full overflow-hidden">
                                                    <img className="h-36 w-36" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                    <div className="w-40 pt-3 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</div>
                                                </div>
                                            </button>

                                            <div className="h-44">
                                                <div className="h-full overflow-hidden">
                                                    <img className="w-36 h-36 div-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                    <div className="w-40 pt-3 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</div>
                                                </div>
                                            </div>
                                            <div className="h-44">
                                                <div className="h-full overflow-hidden ">
                                                    <img className="w-36 h-36 div-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                    <div className="w-40 pt-3 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</div>
                                                </div>
                                            </div>
                                            <div className="h-44">
                                                <div className="h-full overflow-hidden">
                                                    <img className="w-36 h-36 div-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                    <div className="w-40 pt-3 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</div>
                                                </div>
                                            </div>
                                            <div className="h-44">
                                                <div className="h-full overflow-hidden">
                                                    <img className="w-36 h-36 div-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                    <div className="w-40 pt-3 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</div>
                                                </div>
                                            </div>
                                            <div className="h-44">
                                                <div className="h-full overflow-hidden">
                                                    <img className="w-36 h-36 div-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                    <div className="w-40 pt-3 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    //체크박스 선택된 장소(유형)
    useEffect(() => {
        function placeByCheckbox() {

            const finalLen = Object.keys(finalList).length

            // const detailKeyword = {
            //     작업공간:"작업공간",
            //     혼밥혼술:"혼밥혼술",
            //     연인끼리:"연인끼리",
            //     가족끼리:"가족끼리",
            //     주차가능:"주차가능",
            //     반려동물과:"반려동물동반",
            //     맛있네:"맛있어요",
            //     만족스러워:"만족해요",
            //     친절하시네:"친절해요",
            //     편리해요:"편리해요",
            //     깨끗하군:"깨끗해요",
            //     다양해요:"다양해요",
            //     독특해:"독특해요"
            // } 
            // const detail = finalList['details'].map((detail) => detailKeyword[detail])

            const checkURL = () => {
                switch (finalLen) {
                    case 1:
                        return `${finalList['placeType']}`
                    case 2:
                        return `${finalList['placeType']}/${finalList['station']}`
                    case 3:
                        return `${finalList['placeType']}/${finalList['station']}/${finalList['distance']}`
                    case 4:
                        return `${finalList['placeType']}/${finalList['station']}/${finalList['distance']}/${finalList['details']}`
                    default:
                        return ""
                }
            }

            axios.get(`http://127.0.0.1:8000/성수동/${checkURL()}`)
                .then(response => {
                    const checkedObj = JSON.parse(response.data);
                    setPlace(checkedObj.slice(0, 51));
                })
        }
        placeByCheckbox();
    }, [finalList]);

    return (
        <div>
            <div className="flex h-screen place-items-end">
                <div className="flex 체크박스랑 결과 부분">
                    <div className="flex w-fit"><Check
                        checkedKeywordList={checkedKeywordList}
                        setCheckedKeywordList={setCheckedKeywordList}
                        finalList={finalList} setFinalList={setFinalList}
                        setTh={setTh} th={th}
                        showRCMND={showRCMND}
                        rerender={rerender}
                        setRerender={setRerender}
                    /></div>
                    <div className="flex 가게와 가게정보 셋뚜쎗뚜">
                        <div className="flex justify-center w-full">
                            {/* 슬라이딩 버튼들 빼기 */}
                            <div className="flex w-full pl-4">
                                {/* 이전 슬라이딩 버튼 */}
                                <div className="flex content-center pr-5">
                                    <button type="button" name="backPlaceButton" className="place-self-center hover:w-11/12 h-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#A29B9B" className="w-full h-16 div-1">
                                            <path stroke="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                                        </svg>
                                    </button>
                                </div>
                                <div className="container grid grid-flow-col grid-rows-3 gap-2 pt-2 overflow-y-auto h-fit">{showRCMND()}</div>
                                {/* 다음 슬라이딩 버튼 */}
                                <div className="flex content-center pl-5">
                                    <button type="button" name="nextPlaceButton" className="place-self-center hover:w-11/12 h-fit">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="#A29B9B" className="w-full h-16 div-1">
                                            <path stroke="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            <div className="overflow-auto">
                            </div>
                        </div>
                    </div>
                    {showPlaceInfo(showModal)}
                </div>
            </div>
        </div>
    )
};


export default RCMND;


