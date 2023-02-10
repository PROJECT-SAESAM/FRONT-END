
import { log } from "console";
import { ChangeEvent, ChangeEventHandler, useState } from "react";
import { ReactNode } from "react";




const Check = () => {

    interface CategoryType {
        [key: string]: string[]
    };

    // 테스트용 카테고리 더미
    const firstCategory: CategoryType = { 'placeType': ['맛집', '카페', '술집'] };
    const secondCategoryOne: CategoryType = { 'station': ['성수역', '뚝섬역', '서울숲역'] };
    const secondCategoryTwo: CategoryType = { 'distance': ['도보 5분 이내', '도보 5분~10분', '도보10분~15분', '도보 15분 이상'] };//(categorys[1])['distance']
    const thirdCategory: CategoryType = { 'details': ['혼밥혼술', '맛있는', '신선한', '다양한', '가성비', '가심비', '인테리어', '이색적인', '작업공간', '데이트', '모임', '서비스', '편의성', '선물하기 좋은', '깨끗한', '주차가능', '반려동물동반', '가족끼리'] }

    // 체크된 keyword를 담을 리스트
    const [checkedKeywordList, setCheckedKeywordList] = useState<string[]>([]);

    //최종 리스트 만들기
    const [finalList, setFinalList] = useState<CategoryType>({});

    //카테고리들 리스트
    const categorys: CategoryType[] = [secondCategoryOne, secondCategoryTwo, thirdCategory];

    // 현재 카테고리
    let [th, setTh] = useState<number>(0);
    const [category, setCategory] = useState<CategoryType>(firstCategory);

    // 체크박스 컴포넌트
    const keywordCheckBox = (category: CategoryType): ReactNode => {

        // 카테고리(key)
        let key: string = Object.keys(category)[0];//바꿔야됨
        // 키워드 리스트(value)
        let values: string[] = category[key];

        if (th === 2) {

        }

        // 키워드 리스트 돌려서 체크박스 생성 
        const checkBox =
            values.map((value) => {
                return (//체크박스 디자인 바꾸기
                    <>
                        <p className="p"><label><input type="checkbox" id={value} value={value} name={key} onChange={(e) => singleCheck(e.target.checked, e.target.value)}
                            checked={checkedKeywordList.includes(value) ? true : false} />{value}</label>
                        </p>
                    </>

                    // <>
                    //     <div className="p">
                    //         <input type="checkbox" id={value} value={value} name={key} onChange={(e) => singleCheck(e.target.checked, e.target.value)}
                    //             checked={checkedKeywordList.includes(value) ? true : false} />
                    //         {value}
                    //     </div>
                    //     <label htmlFor={value}><img src={e.target.checked ? "/IMG/checkBox_true" : "/IMG/checkBox_false"} alt="" /></label>

                    // </>
                )
            })

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

    // 체크박스 하나하나 체크되면 //아 여기다 이미지 넣어버리면 되겟다
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

            //3번째 카테고리면 멈춰야돼서 이전까지만 돌려돌려
            if (th < 3) {
                setTh(th + 1)
                setCategory(categorys[th])
            }

            //현 카테고리의 key(placeType, distance, detail)
            const keyOfCategory = Object.keys(category)[0];

            //최종리스트에 key(카테고리):value(키워드)로 넣기
            setFinalList((finalList) => { return { ...finalList, [keyOfCategory]: checkedKeywordList } })
            console.log(finalList)

            //저장하고나면 빈 배열로 초기화
            setCheckedKeywordList([]);
        };

        return (
            <div>
                <p className="pl-8 text-sm font-medium text-gray-500 w-fit hover:-translate-y-1 hover:underline">
                    <label>
                        <span>Next</span>
                        <button type="button" name="nextButton" className="translate-y-2" onClick={(e) => nextClickHandler(e)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#39AE68" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </label>
                </p>
            </div>
        )
    }

    //이전이랑 다음버튼 겹치는부분 함수로 빼기 - 미완료

    // // 이전이나 다음 누르면
    // const checkMoveHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    //     const target = e.target as Element;
    //     console.log(th + "번째")
    //     //3번째 카테고리면 멈춰야돼서 이전까지만 돌려돌려
    //     if (th < 3) {
    //         if (e.currentTarget.id === "next") {
    //             setTh(th + 1)
    //             console.log(th + "더함")
    //         } else {
    //             setTh(th - 1)
    //             console.log(th + "뺌")
    //             console.log("엥 이건ㄴ데" + e.currentTarget.id)
    //         }

    //         setCategory(categorys[th])
    //     }

    //     //현 카테고리의 key(placeType, distance, detail)
    //     const keyOfCategory = Object.keys(category)[0];

    //     //최종리스트에 key(카테고리):value(키워드)로 넣기
    //     setFinalList((finalList) => { return { ...finalList, [keyOfCategory]: checkedKeywordList } })
    //     console.log(finalList)

    //     //저장하고나면 빈 배열로 초기화
    //     setCheckedKeywordList([]);
    // };

    // 이전 버튼
    const backButton = (): ReactNode => {

        // 다음 버튼 누르면
        const backClickHandler = (event: React.MouseEvent<HTMLElement>): void => {

            //3번째 카테고리면 멈춰야돼서 이전까지만 돌려돌려
            if (th < 3) {
                setTh(th - 1)
                setCategory(categorys[th])
            }

            //현 카테고리의 key(placeType, distance, detail)
            const keyOfCategory = Object.keys(category)[0];

            //최종리스트에 key(카테고리):value(키워드)로 넣기
            setFinalList((finalList) => { return { ...finalList, [keyOfCategory]: checkedKeywordList } })
            console.log(finalList)

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
                    <div className="flex flex-row flex-wrap content-start justify-start gap-4 p-3 h-96">{keywordCheckBox(category)}</div>
                    <div className="flex flex-row justify-between w-full pt-10 pb-1 pr-2">
                        <div>{backButton()}</div>
                        <div>{nextButton()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Check



