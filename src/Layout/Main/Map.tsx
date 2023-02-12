import { disconnect } from 'process';
import React from 'react'
import { ReactNode } from "react";

const Map = () => {
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
        }
    }

    const localList: string[] = ['성수', '홍대', '강남', '인사동', '명동', '잠실', '이태원', '종로'];


    const localButton = (): ReactNode => {

        const showLocal = localList.map((local) => {
            return (
                <div className='text-xl font-semibold hover:border-b-4 hover:underline '>
                    <span>{local}</span>
                </div>
            )
        })

        return showLocal;
    }

    const showMapButton = (): ReactNode => {
        return (
            // <div className="relative w-fit h-fit">
            //                     <img className="shadow-xl w-44 h-44" src={img} alt="성수 카페" />
            //                     <div className="absolute flex justify-center -translate-y-full bg-opacity-0 opacity-0 place-items-center w-44 h-44 hover:opacity-100 hover:bg-opacity-60 bg-neutral-400">
            //                         <p className="text-2xl font-semibold shadow-2xl via-black w-fit h-fit">대림창고</p>
            //                     </div>
            //                 </div>
            <div>
                <label className='absolute h-fit w-fit -translate-y-56 translate-x-96'>
                    <div className='text-slate-100 bg-lime-600 hover:bg-lime-700 h-fit w-fit p-0.5 rounded-lg bg-opacity-80'>
                        <button className='font-semibold w-fit opacity-100'>성수</button>
                    </div>
                </label >
                <label className=' absolute h-fit w-fit translate-y-32'>
                    <div className='text-slate-100 bg-lime-600 hover:bg-lime-700 h-fit w-fit p-0.5 rounded-lg bg-opacity-80'>
                        <button className='font-semibold w-fit opacity-100'>홍대</button>
                    </div>
                </label >
            </div>
        )
    }

    // const localTag = (): ReactNode => {

    //     // 성수 버전 해시태그 더미
    //     const hashTags: string[] = ['콘크리트', '폐공장', '레트로', '부르클린', '붉은벽돌', '수제화', '건축', '아무말', '아무말2', '아무말3', '아무말4', '아무말5'];

    //     return (
    //         <div className='grid grid-cols-3 h-full'>
    //             <span>{hashTags[0]}</span>
    //             <span>{hashTags[1]}</span>
    //             <span>{hashTags[2]}</span>
    //             <span>{hashTags[3]}</span>
    //             <span>{hashTags[4]}</span>
    //             <span>{hashTags[5]}</span>
    //             <span>{hashTags[6]}</span>
    //             <span>{hashTags[7]}</span>
    //             <span>{hashTags[8]}</span>
    //             <span>{hashTags[10]}</span>
    //             <span>{hashTags[11]}</span>
    //             <span>{hashTags[12]}</span>
    //             <span>{hashTags[13]}</span>
    //             <span>{hashTags[14]}</span>
    //             <span>{hashTags[15]}</span>
    //         </div>
    //     )
    // }


    return (
        <div className='h-screen'>
            <div className='px-20'>
                {/* 인덱스 지역 버튼들 */}
                <div className='flex px-48 place-items-center place-content-around h-14'>
                    {localButton()}
                </div>
                {/* 지도 이미지 */}
                <div className='flex p-10 place-content-between h-fit '>
                    <div className='w-1/2 relative'>
                        <div className='flex justify-center h-full w-full pt-5'>
                            <img src="/IMG/map_3.png" alt="서울 지도" />
                        </div>
                        <div>
                            {showMapButton()}
                        </div>
                    </div>
                    <div className='w-1/2 p-109'>
                        <div className='pl-16'>
                            <img src="/IMG/sungsooTags.png" alt="성수동 해시태그" />
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )

}

export default Map