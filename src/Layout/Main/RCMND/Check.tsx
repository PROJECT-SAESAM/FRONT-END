
import { log } from "console";
import { useState } from "react";
import { ReactNode } from "react";
import { CategoryType } from "./RCMND";
import { propsToCheck } from "./RCMND";


const Check = (
    { checkedKeywordList, setCheckedKeywordList, finalList, setFinalList, setTh, th, showRCMND, rerender, setRerender }
        : {
            checkedKeywordList: propsToCheck['checked'];
            setCheckedKeywordList: propsToCheck['isChecked'];
            finalList: propsToCheck['final'];
            setFinalList: propsToCheck['setfinal'];
            setTh: propsToCheck['setTh']; th: propsToCheck['th'];
            showRCMND: propsToCheck['showRCMND'];
            rerender: propsToCheck['rerender'];
            setRerender: propsToCheck['setRerender'];
        })
    : JSX.Element => {

    // 카테고리 
    const firstCategory: CategoryType = { 'placeType': ['맛집', '카페', '술집'] };
    const secondCategoryOne: CategoryType = { 'station': ['성수역', '뚝섬역', '서울숲역'] };
    const secondCategoryTwo: CategoryType = {
        // 'distance': ['도보 5분 이내', '도보 10분 이내', '도보 15분 이내', '도보 15분 이상']
        'distance': ['5분미만', '5분이상10분미만', '10분이상15분미만', '15분이상']
    };
    const thirdCategory: CategoryType = {
        // 'details': ['작업공간', '혼밥혼술', '연인끼리', '가족끼리', '주차가능!', '반려동물과', '맛있네!', '만족스러워', '친절하시네', '편리해요', '깨끗하군', '다양해요', '독특해!']
        'details': ['작업공간', '혼밥혼술', '연인끼리', '가족끼리', '주차가능', '반려동물동반', '맛있어요', '만족해요', '친절해요', '편리해요', '깨끗해요', '다양해요', '독특해요']
    }


    //카테고리들 리스트
    const categorys: CategoryType[] = [secondCategoryOne, secondCategoryTwo, thirdCategory];


    const [category, setCategory] = useState<CategoryType>(firstCategory);



    // 체크박스 컴포넌트
    const keywordCheckBox = (category: CategoryType): ReactNode => {

        // 카테고리(key)
        let key: string = Object.keys(category)[0];//바꿔야됨
        // 키워드 리스트(value)
        let values: string[] = category[key];

        // 키워드 리스트 돌려서 체크박스 생성 
        const checkBox =
            values.map((value) => {

                if (th === 4) {
                    return (
                        <div className="translate-x-16 translate-y-28 hover:translate-x-14">
                            <label>
                                <button className="p-4 rounded-md" onClick={() => (
                                    setRerender(true),
                                    setTh(0),
                                    showRCMND(),
                                    setFinalList({})
                                )}>
                                    <img className="flex translate-x-2" src="/IMG/go-back.png" alt="돌아가기" />
                                    <div className="pt-2 text-xs">
                                        다른 선택
                                    </div>
                                </button>
                            </label>
                        </div>
                    )
                } else {
                    return (<>
                        <div>
                            <label><input
                                className="appearance-none"
                                type="checkbox" id={value} value={value} name={key} onChange={(e) => singleCheck(e.target.checked, e.target.value)}
                                checked={checkedKeywordList.includes(value) ? true : false} />
                                <div className={`flex font-sans font-semibold ${value.length > 5 ? "text-sm" : "text-base"}`}>
                                    <img className="h-5" src={checkedKeywordList.includes(value) ? " /IMG/checkBoxTrue.png" : "/IMG/checkBoxFalse.png"} alt="체크박스" />
                                    {value}
                                </div>
                            </label>
                        </div>

                    </>)
                }

            })

        const wholeCheck = (
            < label >
                <input className="appearance-none" type="checkbox" onChange={(e) => allCheck(e.target.checked, key)} checked={checkedKeywordList.length === values.length ? true : false} />
                <div className="flex pr-1 font-mono font-semibold">
                    <img className="h-5" src={checkedKeywordList.length === values.length ? "/IMG/checkBoxTrue.png" : "/IMG/checkBoxFalse.png"} alt="이전과 다음 버튼" />
                    전체선택
                </div>
            </label >
        );

        console.log(th)
        return (
            <>
                {/* 이거 조건부 스타일링 왜 안먹냐 */}
                <div className={`w-full grid h-fit gap-x-5 p-2 ${th === 3 ? "grid-cols-2 grid-flow-row " : "grid-rows-none"}`}>
                    {th !== 4 ? wholeCheck : null}
                    {checkBox}
                </div>
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

    // 다음 버튼
    const nextButton = (): ReactNode => {

        // 다음 버튼 누르면
        const nextClickHandler = (event: React.MouseEvent<HTMLElement>): void => {

            if (checkedKeywordList.length === 0) {
                alert("원하는 키워드를 선택해주세요.")
            } else {

                if (th < 3) {
                    setTh(th + 1)
                    setCategory(categorys[th])
                }
                else {
                    setTh(th + 1)
                    setCategory(firstCategory)
                }

                //현 카테고리의 key(placeType, distance, detail)
                const keyOfCategory = Object.keys(category)[0];

                //최종리스트에 key(카테고리):value(키워드)로 넣기
                setFinalList((finalList) => { return { ...finalList, [keyOfCategory]: checkedKeywordList } })

                //저장하고나면 빈 배열로 초기화
                console.log(checkedKeywordList)
                setCheckedKeywordList([]);
                console.log(finalList)
            }
        };


        return (
            <div>
                <p className="pl-8 text-sm font-medium text-gray-500 w-fit hover:-translate-y-1 hover:underline">
                    <label>
                        <span>Next</span>
                        <button type="button" name="nextButton" className="translate-y-2" onClick={(e) => {
                            nextClickHandler(e);
                        }}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#39AE68" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </label>
                </p>
            </div>
        )
    }


    // 이전 버튼
    const backButton = (): ReactNode => {
        const backClickHandler = (event: React.MouseEvent<HTMLElement>): void => {

            if (th === 1) {
                setTh(0)
                setCategory(categorys[th])
            }
            else {
                setTh(th - 1)
                setCategory(categorys[th])
            }

            //현 카테고리의 key(placeType, distance, detail)
            const keyOfCategory = Object.keys(category)[0];

            //최종리스트에 key(카테고리):value(키워드)로 넣기
            setFinalList((finalList) => { return { ...finalList, [keyOfCategory]: checkedKeywordList } })

            //저장하고나면 빈 배열로 초기화
            setCheckedKeywordList([]);

        };


        return (
            <>
                <p className="pr-8 text-sm font-medium text-gray-500 w-fit hover:-translate-y-1 hover:underline">
                    <label>
                        <button type="button" id="back" name="backButton" className="translate-y-2" onClick={(e) => backClickHandler(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#39AE68" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <span>Back</span>
                    </label>
                </p>
            </>
        )
    }





    return (
        <div className="pr-10">
            {/* 베이지 박스 */}
            <div className="bg-[#fff7e3] w-80 h-fit rounded-r-3xl px-5 drop-shadow-2xl">
                {/* whatever you want */}
                < img className="whatEverYouWant! -translate-y-8 h-36 w-36" src="./IMG/what ever you want!.png" alt="what ever you want!" />
                {/* 체크리스트랑(전체선택 포함) 다음 버튼 */}
                <div className="flex flex-wrap pt-3 -translate-y-8 h-fit">
                    <div className="content-start p-3 h-96">{keywordCheckBox(category)}</div>
                    <div className="flex justify-between w-full pt-10 pb-1 pr-2">
                        <div>{(th === 0 || th === 4) ? null : backButton()}</div>
                        <div>{th !== 4 ? nextButton() : null}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Check



