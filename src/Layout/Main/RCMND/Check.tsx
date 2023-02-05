
import { useState } from "react";
import { ReactNode } from "react";
import { JsxElement } from "typescript";


// 키워드 리스트 받아서 체크리스트로 만들어서 보여주고                                      //done
// 체크박스 상태 바뀌면 리스트에 업데이트                                                  //done
// 선택된 체크박스 value들 모인 리스트 DB에 보내기 => 이것도 api 받으면
// 전체 체크박스 만들기                                                                   //done
// 전체동작로직 => api 받으면 연결하면서 해야됨 전체선택도 문제고 지금 문제야 문제
// 이전 버튼 만들기

const Check = () => {

    interface CategoryType {
        [key: string]: string[]
    };

    // 테스트용 카테고리 더미
    const firstCategory: CategoryType = { 'placeType': ['맛집', '카페', '술집'] };
    const secondCategory: CategoryType = {
        'station': ['성수역', '뚝섬역', '서울숲역'],
        'distance': ['도보 5분 이내', '도보 5분~10분', '도보10분~15분', '도보 15분 이상']
    };
    const thirdCategory: CategoryType = {
        'cafe': ['카공', '데이트', '대화', '모임'],
        'restaurant': ['양식', '한식', '중식', '일식'],
        'bar': ['막걸리', '맥주', '소주', '와인', '칵테일']
    };

    // 현재 카테고리
    const [category, setCategory] = useState<CategoryType>(firstCategory);

    // 몇번째 카테고리인지
    // let th = 0;
    // const [th, setTh] = useState<number>(0);

    // 체크된 keyword를 담을 리스트
    const [checkedKeywordList, setCheckedKeywordList] = useState<string[]>([]);

    const cate: CategoryType[] = [firstCategory, secondCategory, thirdCategory];
    console.log(cate[1]);
    // const [thn, setThn] = useState<number>(0);

    // 체크박스 컴포넌트
    const keywordCheckBox = (category: CategoryType): ReactNode => {

        // 카테고리(key)
        let key: string = Object.keys(category)[0];//바꿔야됨
        // 키워드 리스트(value)
        let values: string[] = category[key];

        console.log({ key, values });

        // 키워드 리스트 돌려서 체크박스 생성 
        const checkBox =
            values.map((value) => {
                return (//체크박스 디자인 바꾸기
                    <>
                        <p className="p-2"><label><input type="checkbox" id={value} value={value} onChange={(e) => singleCheck(e.target.checked, e.target.value)}
                            checked={checkedKeywordList.includes(value) ? true : false} />{value}</label>
                        </p>
                    </>
                )
            })

        console.log("맨 첨" + category)
        return (
            <>
                <p className="w-full p-2 h-fit">
                    <label>
                        <input type="checkbox" onChange={(e) => allCheck(e.target.checked, key)} checked={checkedKeywordList.length === values.length ? true : false} />
                        전체선택
                    </label>
                </p>
                {checkBox}
            </>
        );

    }


    // 전체선택이 체크되면
    const allCheck = (checked: boolean, key: string) => {
        if (checked) {
            const allKeywordList: string[] = category[key];
            setCheckedKeywordList(allKeywordList)
        } else {
            setCheckedKeywordList([])
        }
    }

    // 체크박스 하나하나 체크되면
    const singleCheck = (checked: boolean, id: string) => {
        if (checked) {
            setCheckedKeywordList([...checkedKeywordList, id])
        } else {
            setCheckedKeywordList(checkedKeywordList.filter((category) => category !== id))
        }
    }

    // 이전 버튼
    const backButton = () => {
        return (
            <>
                <p className="pr-8 text-sm font-medium text-gray-500 w-fit hover:-translate-y-1 hover:underline">
                    <label>
                        <button type="button" name="backButton" className="translate-y-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#39AE68" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <span className="">Back</span>
                    </label>
                </p>
            </>
        )
    }

    const th = () => {
        console.log("넥스트버튼 클릭됨")
        if (category == firstCategory) {
            setCategory(secondCategory)
            console.log(category)
            return keywordCheckBox(category)
        } else if (category == secondCategory) {
            setCategory(thirdCategory)
            console.log(category)
            return keywordCheckBox(category)
        } else { console.log(category) }
    }

    // // 다음 버튼
    // const nextButton = (): ReactNode => {


    //     // return (

    //     //     // <>
    //     //     //     <p className="pl-8 text-sm font-medium text-gray-500 w-fit hover:-translate-y-1 hover:underline">
    //     //     //         <label>
    //     //     //             <span>Next</span>
    //     //     //             <button type="button" name="nextButton" className="translate-y-2" onClick={() => (keywordCheckBox(category))} >
    //     //     //                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#39AE68" className="w-6 h-6">
    //     //     //                     <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    //     //     //                 </svg>
    //     //     //             </button>
    //     //     //         </label>
    //     //     //     </p>
    //     //     // </>
    //     // )

    // }



    return (
        <div className="pr-10">
            {/* 베이지 박스 */}
            <div className="bg-[#fff7e3] w-80 h-fit rounded-r-3xl px-5 drop-shadow-2xl">
                {/* whatever you want */}
                < img className="whatEverYouWant! -translate-y-8 h-36 w-36" src="./IMG/what ever you want!.png" alt="what ever you want!" />
                {/* 체크리스트랑(전체선택 포함) 다음 버튼 */}
                <div className="flex flex-wrap pt-3 -translate-y-8 h-fit">
                    <div className="flex flex-row flex-wrap content-start justify-start gap-4 p-3 h-96">{keywordCheckBox(category)}</div>
                    <div className="flex flex-row justify-between w-full pt-10 pb-1 pr-2">
                        {/* <div>{backButton()}</div> */}
                        <>
                            <p className="pl-8 text-sm font-medium text-gray-500 w-fit hover:-translate-y-1 hover:underline">
                                <label>
                                    <span>Next</span>
                                    <button type="button" name="nextButton" className="translate-y-2" onClick={() => (th())} >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#39AE68" className="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                                        </svg>
                                    </button>
                                </label>
                            </p>
                        </>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Check



