
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

    // DB에서 받았다 친 카테고리
    // ex) { 'firstKeyword': ['맛집', '카페', '술집', '문화공간']}
    // , { 'mood': ['힐링', '신나는', '편안한', '포근한']}
    // , { 'etc': ['가성비', '데이트', '친구', '가족']}

    interface CategoryType {
        [key: string]: string[]
    };

    const firstKeyword: CategoryType = { 'placeType': ['맛집', '카페', '술집'] };
    // DB에서 두번째로 반환된 키워드리스트
    const secondKeyword: CategoryType = { 'case': ['카공', '커피맛집', '대화', '힐링'] };
    // 세번째 반환
    const thirdKeyword: CategoryType = { 'etc': ['가성비', '데이트', '친구', '가족'] };

    // 더미들 리스트
    const categoryList: CategoryType[] = [firstKeyword, secondKeyword, thirdKeyword];

    // 카테고리 리스트가 새로 들어올때마다 같은이름으로 쓸래
    const [keywordOptions, setKeywordOptions] = useState<CategoryType>(firstKeyword);


    // 체크된 keyword를 담을 리스트
    const [checkedKeywordList, setCheckedKeywordList] = useState<string[]>([]);

    const keywordCheckBox = (category: CategoryType): ReactNode => {

        // 카테고리(key)
        const key: string = Object.keys(category)[0];
        // 키워드 리스트(value)
        const values: string[] = category[key];

        console.log({ key, values });

        // 키워드 리스트 돌려서 체크박스 생성 
        const checkBox =
            values.map((value) => {
                return (//체크박스 디자인 바꾸기
                    // className = "w-4 h-4 border-2 rounded-sm appearance-none border-slate-700"
                    <><p className="p-2"><label><input type="checkbox" name={key} id={value} value={value} onChange={(e) => singleCheck(e.target.checked, e.target.value)}
                        checked={checkedKeywordList.includes(value) ? true : false} />{value}</label>
                    </p></>
                )
            })


        return (
            <>
                <p className="w-full p-2 h-fit">
                    <label>
                        <input type="checkbox" onChange={(e) => allCheck(e.target.checked)} checked={checkedKeywordList.length === values.length ? true : false} />
                        전체선택
                    </label>
                </p>
                {checkBox}
            </>
        );

    }



    // 전체선택이 체크되면
    const allCheck = (checked: boolean) => {
        if (checked) {
            const allKeywordList: string[] = firstKeyword['firstKeyword'];
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
            setCheckedKeywordList(checkedKeywordList.filter((firstKeyword) => firstKeyword !== id))
        }
    }

    console.log(checkedKeywordList)

    // 이전 버튼
    const backButton = () => {
        return (
            <>
                <p className="flex w-5 p-2 pl-8 place-content-center ">
                    <label>
                        <button type="button" name="backButton" >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#39AE68" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <span className="text-[#39AE68] font-medium hover:underline">Back</span>
                    </label>
                </p>
            </>
        )
    }

    // 다음 버튼
    const nextButton = (n: number): ReactNode => {
        // console.log("현재 n은 : " + n);
        // n++
        // console.log("현재 n은 : " + n);

        return (
            <>
                <p className="flex w-5 p-2 pr-8 place-content-center">
                    <label>
                        <button type="button" name="nextButton" onClick={() => { setKeywordOptions(categoryList[n]) }} >
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#39AE68" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                        <span className="text-[#39AE68] font-medium hover:underline">Next</span>
                    </label>
                </p>
            </>
        )
    }

    return (
        <div>
            {/* 베이지 박스 */}
            <div className="bg-[#fff7e3] w-72 h-full rounded-r-3xl px-5 drop-shadow-2xl">
                {/* whatever you want */}
                < img className="whatEverYouWant! -translate-y-8 h-36 w-36" src="./IMG/what ever you want!.png" alt="what ever you want!" />
                {/* 체크리스트랑(전체선택 포함) 다음 버튼 */}
                <div className="flex flex-wrap pt-3 -translate-y-8 h-fit">
                    <div className="flex flex-row flex-wrap content-start justify-start gap-4 p-3 h-96">{keywordCheckBox(keywordOptions)}</div>
                    <div className="flex flex-row justify-between w-full pb-1 pr-2">
                        <div>{backButton()}</div>
                        <div>{nextButton(0)}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Check



