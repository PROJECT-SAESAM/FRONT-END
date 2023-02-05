import Check from "./Check";
import { ReactNode } from "react";
import { useState } from "react";
import React, { useRef } from "react";
import axios from "axios";
import qs from "qs";
import { stringify } from "querystring";

// import Modal from 'react-modal';


// DB에서 반환된 결과 오른쪽 화면에 띄우기 
const RCMND = () => {


    const dummy = {
        "data": {
            "0": [
                {
                    "이름": "다이닝 목로 성수점"
                },
                {
                    "사진": "https://pcmap.place.naver.com/restaurant/1063191542/photo?entry=bmp&from=map&fromPanelNum=1&ts=1675494175348#"
                },
                {
                    "설명": "넉넉한 곱창전골과 가마보꼬 어묵탕이 가장 맛있는 퓨전 다이닝. 수제 가지튀김과 닭다리살을 튀긴 치킨난반도 곁들이기 좋습니다. 메뉴와 가장 잘 어울리는 술은 화요25, 삿포로 생맥주입니다."
                },
                {
                    "접근성": "도보 5분~10분"
                },
                {
                    "대표메뉴": [
                        [
                            {
                                "메뉴이름": "목로 곱창전골"
                            },
                            {
                                "메뉴가격": "32,000원"
                            }
                        ],
                        [
                            {
                                "메뉴이름": "목로 수제 가지튀김"
                            },
                            {
                                "메뉴가격": "19,000원"
                            }
                        ]
                    ]
                },
                {
                    "링크": "https://map.naver.com/v5/search/%EB%AA%A9%EB%A1%9C%20%EC%84%B1%EC%88%98/place/1063191542?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp"
                }
            ],
            "1": [
                {
                    "이름": "난포"
                },
                {
                    "사진": "https://pcmap.place.naver.com/restaurant/1910927846/photo#"
                },
                {
                    "설명": "아주 작은 바닷가마을, 푸르디 푸른 난포 그 옛날 손녀만을 위해 만들어 주시던 할머니의 음식들을많은 손자손녀들에게 소개하려 합니다성수동에서_"
                },
                {
                    "접근성": "도보 15분 이상"
                },
                {
                    "대표메뉴": [
                        [
                            {
                                "메뉴이름": "아메리카노"
                            },
                            {
                                "메뉴가격": "4100원"
                            }
                        ],
                        [
                            {
                                "메뉴이름": "카페라떼"
                            },
                            {
                                "메뉴가격": "5000원"
                            }
                        ]
                    ]
                },
                {
                    "링크": "https://map.naver.com/v5/search/%EC%84%B1%EC%88%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=14,0,0,0,dh&placePath=%3Fentry%253Dbmp"
                }
            ],
            "2": [
                {
                    "이름": "다이닝 목로 성수점"
                },
                {
                    "사진": "https://pcmap.place.naver.com/restaurant/1063191542/photo?entry=bmp&from=map&fromPanelNum=1&ts=1675494175348#"
                },
                {
                    "설명": "넉넉한 곱창전골과 가마보꼬 어묵탕이 가장 맛있는 퓨전 다이닝.수제 가지튀김과 닭다리살을 튀긴 치킨난반도 곁들이기 좋습니다.메뉴와 가장 잘 어울리는 술은 화요25, 삿포로 생맥주입니다."
                },
                {
                    "접근성": "도보 5분~10분"
                },
                {
                    "대표메뉴": [
                        [
                            {
                                "메뉴이름": "목로 곱창전골"
                            },
                            {
                                "메뉴가격": "32,000원"
                            }
                        ],
                        [
                            {
                                "메뉴이름": "목로 수제 가지튀김"
                            },
                            {
                                "메뉴가격": "19,000원"
                            }
                        ]
                    ]
                },
                {
                    "링크": "https://map.naver.com/v5/search/%EB%AA%A9%EB%A1%9C%20%EC%84%B1%EC%88%98/place/1063191542?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp"
                }
            ],
            "3": [
                {
                    "이름": "난포"
                },
                {
                    "사진": "https://pcmap.place.naver.com/restaurant/1910927846/photo#"
                },
                {
                    "설명": "아주 작은 바닷가마을, 푸르디 푸른 난포그 옛날 손녀만을 위해 만들어 주시던 할머니의 음식들을많은 손자손녀들에게 소개하려 합니다성수동에서_"
                },
                {
                    "접근성": "도보 15분 이상"
                },
                {
                    "대표메뉴": [
                        [
                            {
                                "메뉴이름": "아메리카노"
                            },
                            {
                                "메뉴가격": "4100원"
                            }
                        ],
                        [
                            {
                                "메뉴이름": "카페라떼"
                            },
                            {
                                "메뉴가격": "5000원"
                            }
                        ]
                    ]
                },
                {
                    "링크": "https://map.naver.com/v5/search/%EC%84%B1%EC%88%98%20%EB%A7%9B%EC%A7%91/place/1910927846?c=14,0,0,0,dh&placePath=%3Fentry%253Dbmp"
                }
            ],
            "4": [
                {
                    "이름": "다이닝 목로 성수점"
                },
                {
                    "사진": "https://pcmap.place.naver.com/restaurant/1063191542/photo?entry=bmp&from=map&fromPanelNum=1&ts=1675494175348#"
                },
                {
                    "설명": "넉넉한 곱창전골과 가마보꼬 어묵탕이 가장 맛있는 퓨전 다이닝.수제 가지튀김과 닭다리살을 튀긴 치킨난반도 곁들이기 좋습니다.메뉴와 가장 잘 어울리는 술은 화요25, 삿포로 생맥주입니다."
                },
                {
                    "접근성": "도보 5분~10분"
                },
                {
                    "대표메뉴": [
                        [
                            {
                                "메뉴이름": "목로 곱창전골"
                            },
                            {
                                "메뉴가격": "32,000원"
                            }
                        ],
                        [
                            {
                                "메뉴이름": "목로 수제 가지튀김"
                            },
                            {
                                "메뉴가격": "19,000원"
                            }
                        ]
                    ]
                },
                {
                    "링크": "https://map.naver.com/v5/search/%EB%AA%A9%EB%A1%9C%20%EC%84%B1%EC%88%98/place/1063191542?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp"
                }
            ]
        }
    }

    const showContents = () => {

        const contents = dummy.data


    }


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
                        {/* 클릭하면 모달창 */}
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

    //모달창을 보여줭
    const showPlaceInfo = (visible: boolean) => {

        // 외부 클릭시 닫히는 기능 아직 못함
        const outClick = () => {
            // if (outSection.current) {
            //     outSection.current.value = "";
            // }
        };


        if (!visible)
            return null
        return (
            <div>
                {/* 모달 배경 */}
                <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
                    {/* 모달창 */}
                    <div className="w-4/6 h-4/5 bg-[#65726a] rounded-sm bg-opacity-30">
                        <div className=" h-fit w-fit">
                            {/* 모달-콘텐츠 */}
                            <div className="flex">
                                {/* 모달-이미지 */}
                                <img className="w-1/2 px-6 pt-5 pb-4 h-1/2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzAxMjVfNzEg%2FMDAxNjc0NjA5NzQwMjA3.4oocM7TDZ1chFDsqaKjCc25gOI0Gqo5IQzlhpdfyS_gg.yn3COxws6to_tkVYYT9GULQiGUJZLZCvRXMUKpf-5q0g.JPEG.circle0811%2FIMG%25A3%25DF5834.JPG" alt="다이닝 목로" />
                                <div className="w-1/2 h-auto">
                                    {/* 모달 닫기 버튼*/}
                                    <div className="flex w-full place-content-end">
                                        <label className="flex justify-center w-16 h-16">
                                            <button onClick={() => setShowModal(false)}>
                                                <p>X</p>
                                            </button>
                                        </label>
                                    </div>
                                    {/* 모달-텍스트 */}
                                    <div className="flex items-end h-64">
                                        <div className="text-sm text-left pr-7 info">
                                            <p className="pb-5 font-bold title">다이닝 목로 성수점</p>
                                            <p>
                                                <p className="pb-7 intro">넉넉한 곱창전골과 가마보꼬 어묵탕이 가장 맛있는 퓨전 다이닝.
                                                    수제 가지튀김과 닭다리살을 튀긴 치킨난반도 곁들이기 좋습니다.
                                                    메뉴와 가장 잘 어울리는 술은 화요25, 삿포로 생맥주입니다.

                                                    '목로(木爐)'란 좁고 긴 나무판자로 만든 상으로, 'Bar'를 한글로 표현한 말입니다. Edward Hopper의 '밤을 지새우는 사람들'을 모티브로 한 퓨전 다이닝을 제안합니다. 맛있는 음식과 술, 친절한 스텝들이 가볍게 이야기를 건네기도 하는 단정한 술집입니다.</p>
                                                <p className="flex mainMenu place-content-between">
                                                    <div>
                                                        <li>
                                                            <span>목로 곱창전골 | 32000원</span>
                                                        </li>
                                                        <li>
                                                            <span>목로 수제 가지튀김 | 19000원</span>
                                                        </li>
                                                    </div>

                                                    <a className="링크버튼 w-fit h-fit place-items-center grid gap-1" href="https://map.naver.com/v5/search/%EB%AA%A9%EB%A1%9C%20%EC%84%B1%EC%88%98/place/1063191542?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp">
                                                        <img className="w-8 h-8 rounded-2xl" src="/IMG/naverMapLogo.png" alt="naver logo" />
                                                        <p className="text-xs">네이버맵</p>
                                                    </a>

                                                </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* 추가 추천서비스 */}
                            <div className="px-6 pb-3 h-60">
                                <div className="h-full">
                                    <div className="pl-2">
                                        <p className="text-xs">2차는 어디로 가지?</p>
                                        <p className="text-base font-bold">메뉴가 겹치지 않는 다른 공간들이에요!</p>
                                    </div>

                                    {/* 카드들 */}
                                    <div className="flex">
                                        <div className="h-44">
                                            <div className="h-full overflow-hidden">
                                                <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
                                            </div>
                                        </div>

                                        <div className="h-44">
                                            <div className="h-full overflow-hidden">
                                                <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
                                            </div>
                                        </div>
                                        <div className="h-44">
                                            <div className="h-full overflow-hidden ">
                                                <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
                                            </div>
                                        </div>
                                        <div className="h-44">
                                            <div className="h-full overflow-hidden">
                                                <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
                                            </div>
                                        </div>
                                        <div className="h-44">
                                            <div className="h-full overflow-hidden">
                                                <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
                                            </div>
                                        </div>
                                        <div className="h-44">
                                            <div className="h-full overflow-hidden">
                                                <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
                                                <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <label>
                <button onClick={outClick()}></button>
                </label> */}
            </div>
        )
    }



    return (
        <div className="h-screen">
            <div className="flex">
                <div className="flex w-fit"><Check /></div>
                <div className="flex justify-center w-full py-6 h-fit">{showRCMND()}</div>
                <div className="overflow-auto">
                    {showPlaceInfo(showModal)}
                </div>
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
