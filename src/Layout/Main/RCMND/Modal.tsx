// import React from 'react'
// import { wholePlaceType } from './RCMND';

// const Modal = (place: [wholePlaceType]) => {




//     //모달창을 보여줭
//     const showPlaceInfo = (visible: boolean) => {
//         // 외부 클릭시 닫히는 기능 아직 못함
//         const outClick = (id: number) => {

//         };


//         if (!visible)
//             return null
//         return (
//             <div>
//                 {/* 모달 배경 */}
//                 <div className="fixed inset-0 flex items-center justify-center bg-opacity-30 backdrop-blur-sm">
//                     {/* 모달창 */}
//                     <div className="w-4/6 h-5/6 bg-[#32503b] rounded-md bg-opacity-90 text-stone-50 ">
//                         <div className="h-fit w-fit">
//                             {/* 모달-콘텐츠 */}
//                             <div className="flex">
//                                 {/* 모달-이미지 */}
//                                 {/* <img className="w-1/2 px-6 pt-5 pb-4 h-1/2" src={place} /> */}
//                                 <div className="w-1/2 h-auto">
//                                     {/* 모달 닫기 버튼*/}
//                                     <div className="flex w-full place-content-end">
//                                         <label className="flex justify-center w-16 h-16">
//                                             <button onClick={() => setShowModal(false)}>
//                                                 <p>X</p>
//                                             </button>
//                                         </label>
//                                     </div>
//                                     {/* 모달-텍스트 */}
//                                     <div className="flex items-end h-64">
//                                         <div className="text-sm text-left pr-7 info">
//                                             <p className="pb-5 font-bold title tracking-widest text-lg">{ }</p>
//                                             <p>
//                                                 <p className="pb-7 intro text-sm tracking-widest font-thin leading-normal scroll-mb-0 ">넉넉한 곱창전골과 가마보꼬 어묵탕이 가장 맛있는 퓨전 다이닝.
//                                                     수제 가지튀김과 닭다리살을 튀긴 치킨난반도 곁들이기 좋습니다.
//                                                     메뉴와 가장 잘 어울리는 술은 화요25, 삿포로 생맥주입니다.

//                                                     '목로(木爐)'란 좁고 긴 나무판자로 만든 상으로, 'Bar'를 한글로 표현한 말입니다. Edward Hopper의 '밤을 지새우는 사람들'을 모티브로 한 퓨전 다이닝을 제안합니다. 맛있는 음식과 술, 친절한 스텝들이 가볍게 이야기를 건네기도 하는 단정한 술집입니다.</p>
//                                                 <p className="flex mainMenu place-content-between">
//                                                     <div>
//                                                         <div>
//                                                             <span>목로 곱창전골 | 32000원</span>
//                                                         </div>
//                                                         <div>
//                                                             <span>목로 수제 가지튀김 | 19000원</span>
//                                                         </div>
//                                                     </div>

//                                                     <a className="링크버튼 w-fit h-fit pr-3 place-items-center grid gap-1" href="https://map.naver.com/v5/search/%EB%AA%A9%EB%A1%9C%20%EC%84%B1%EC%88%98/place/1063191542?c=15,0,0,0,dh&placePath=%3Fentry%253Dbmp">
//                                                         <img className="w-8 h-8 rounded-2xl" src="/IMG/naverMapLogo.png" alt="naver logo" />
//                                                         {/* <p className="text-xs">네이버맵</p> */}
//                                                     </a>

//                                                 </p>
//                                             </p>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                             {/* 추가 추천서비스 */}
//                             <div className="px-4 h-60">
//                                 <div className="h-full">
//                                     <div className="pl-2">
//                                         <p className="text-xs">2차는 어디 가지?</p>
//                                         <p className="text-base font-bold">메뉴가 겹치지 않는 다른 공간들이에요!</p>
//                                     </div>
//                                     {/* showPlaceInfo */}
//                                     {/* 카드들 */}
//                                     <div className="flex">
//                                         {/* id 같이 줘서 내용 바꿔야될듯 */}
//                                         <button className="h-44" onClick={() => showPlaceInfo(true)}>
//                                             <div className="h-full overflow-hidden">
//                                                 <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
//                                                 <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
//                                             </div>
//                                         </button>

//                                         <div className="h-44">
//                                             <div className="h-full overflow-hidden">
//                                                 <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
//                                                 <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
//                                             </div>
//                                         </div>
//                                         <div className="h-44">
//                                             <div className="h-full overflow-hidden ">
//                                                 <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
//                                                 <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
//                                             </div>
//                                         </div>
//                                         <div className="h-44">
//                                             <div className="h-full overflow-hidden">
//                                                 <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
//                                                 <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
//                                             </div>
//                                         </div>
//                                         <div className="h-44">
//                                             <div className="h-full overflow-hidden">
//                                                 <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
//                                                 <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
//                                             </div>
//                                         </div>
//                                         <div className="h-44">
//                                             <div className="h-full overflow-hidden">
//                                                 <img className="w-40 h-40 p-2" src="https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAxODA1MDhfNDUg%2FMDAxNTI1NzE4OTYwMjky.nyEEwmyzoil45uhwuK_KFH3KDfIXu3Da1DcPNSldTk0g.GJe_XnVEnbP3KrgTvAG_e-pn3PCfBSeMDEDvMj8RESwg.JPEG.lilyeun1%2F1525717070304.jpg" alt="" />
//                                                 <p className="w-40 text-xs font-semibold text-center">어메이징 브루잉 컴퍼니</p>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 {/* <label>
//                 <button onClick={outClick()}></button>
//                 </label> */}
//             </div>
//         )
//     }
//     return (
//         <div>Modal</div>
//     )
// }

// export default Modal

export { }



// import numpy as np
// import pandas as pd
// from fastapi import FastAPI
//     from fastapi.encoders import jsonable_encoder



// app = FastAPI()



// @app.get("/")
// def get_local() :

// target = df.iloc[: 45, :].to_dict(orient = 'records')
// result = jsonable_encoder(target)

// return jsonable_encoder(result)



// # params::
// # id - 점포 아이디 조건, 단일 선택 제한
// # desc::
// # 클라이언트가 특정 점포를 클릭했을 경우
// # 해당 점포의 id 값을 충족하는 데이터를 df에서 조회하여
// # json 형식으로 반환함
// @app.get("/{id}")
// def get_local(id: int) :

// target = df[df["id"] == id].to_dict(orient = 'records')
// result = jsonable_encoder(target)

// return jsonable_encoder(result)



// # params::
// # local - 지역 필터링 조건, 단일 선택 제한
// # desc::
// # 지역 필터링 조건을 받아서
// # 해당 필터링 조건을 모두 충족하는 데이터를 df에서 조회하여
// # json 형식으로 반환함
// @app.get("/{local}")
// def get_local(local: str) :

// target = df[df["local"] == local].iloc[: 45, :].to_dict(orient = 'records')
// result = jsonable_encoder(target)

// return jsonable_encoder(result)



// # params::
// # local - 지역 필터링 조건, 단일 선택 제한
// # kindcondition - 대범주 필터링 조건, 다중 선택 가능
// # desc::
// # 지역, 대범주 필터링 조건을 받아서
// # 해당 필터링 조건을 모두 충족하는 데이터를 df에서 조회하여
// # json 형식으로 반환함
// @app.get("/{local}/{kindcondition}/items")
// def get_kind(local: str, kindcondition: str) :

// kind_condition = []

// if kindcondition is None: kind_condition = ""
//     else : kind_condition = kindcondition.split(',')

// target = df[(df["local"] == local) & (df["kind_big"].isin(kind_condition))].to_dict(orient = 'records')
// result = jsonable_encoder(target)

// return result



// # params::
// # local - 지역 필터링 조건, 단일 선택 제한
// # kindcondition - 대범주 필터링 조건, 다중 선택 가능
// # subwaycondition - 인근 지하철역 필터링 조건, 다중 선택 가능
// # desc::
// # 지역, 대범주, 지하철역 필터링 조건을 받아서
// # 해당 필터링 조건을 모두 충족하는 데이터를 df에서 조회하여
// # json 형식으로 반환함
// @app.get("/{local}/{kindcondition}/{subwaycondition}/items")
// def get_kind(local: str, kindcondition: str, subwaycondition: str) :

// kind_condition = []
// subway_condition = []

// if kindcondition is None: kind_condition = ""
//     else : kind_condition = kindcondition.split(',')

// if subwaycondition is None: subway_condition = ""
//     else : subway_condition = subwaycondition.split(',')

// target = df[(df["local"] == local) & (df["kind_big"].isin(kind_condition)) & (df["subway"].isin(subway_condition))].to_dict(orient = 'records')
// result = jsonable_encoder(target)

// return result



// # params::
// # local - 지역 필터링 조건, 단일 선택 제한
// # kindcondition - 대범주 필터링 조건, 다중 선택 가능
// # subwaycondition - 인근 지하철역 필터링 조건, 다중 선택 가능
// # walkcondition - 지하철역 도보 접근성 필터링 조건, 다중 선택 가능
// # desc::
// # 지역, 대범주, 지하철역, 도보 접근성 필터링 조건을 받아서
// # 해당 필터링 조건을 모두 충족하는 데이터를 df에서 조회하여
// # json 형식으로 반환함
// @app.get("/{local}/{kindcondition}/{subwaycondition}/{walkcondition}/items")
// def get_kind(local: str, kindcondition: str, subwaycondition: str, walkcondition: str) :

// kind_condition = []
// subway_condition = []
// walk_condition = []

// if kindcondition is None: kind_condition = ""
//     else : kind_condition = kindcondition.split(',')

// if subwaycondition is None: subway_condition = ""
//     else : subway_condition = subwaycondition.split(',')

// if walkcondition is None: walk_condition = ""
//     else : walk_condition = walkcondition.split(',')

// target = df[(df["local"] == local) & (df["kind_big"].isin(kind_condition)) & (df["subway"].isin(subway_condition)) & (df["walk"].isin(walk_condition))].to_dict(orient = 'records')
// result = jsonable_encoder(target)

// return result



// # params
// # local - 지역 필터링 조건, 단일 선택 제한
// # kindcondition - 대범주 필터링 조건, 다중 선택 가능
// # subwaycondition - 인근 지하철역 필터링 조건, 다중 선택 가능
// # walkcondition - 지하철역 도보 접근성 필터링 조건, 다중 선택 가능
// # keywordcondition - 키워드 필터링 조건, 다중 선택 가능
// # desc::
// # 지역, 대범주, 지하철역, 도보 접근성, 키워드 필터링 조건을 받아서
// # 해당 필터링 조건을 모두 충족하는 데이터를 df에서 조회하여
// # json 형식으로 반환함
// @app.get("/{local}/{kindcondition}/{subwaycondition}/{walkcondition}/{keywordcondition}/items")
// def get_kind(local: str, kindcondition: str, subwaycondition: str, walkcondition: str, keywordcondition: str) :

// kind_condition = []
// subway_condition = []
// walk_condition = []
// keyword_condition[]

// if kindcondition is None: kind_condition = ""
// kind_condition = kindcondition.split(',')

// if subwaycondition is None: subway_condition = ""
// subway_condition = subwaycondition.split(',')

// if walkcondition is None: walk_condition = ""
// walk_condition = walkcondition.split(',')

// if keywordcondition is None: keyword_condition = ""
// keyword_condition = keywordcondition.split(',')

// target = df[(df["local"] == local) & (df["kind_big"].isin(kind_condition)) & (df["subway"].isin(subway_condition)) & (df["walk"].isin(walk_condition)) & (df["saesam"].isin(keyword_condition))].to_dict(orient = 'records')
// result = jsonable_encoder(target)

// return result