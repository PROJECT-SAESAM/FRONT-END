
import { useState } from "react";
import { ReactNode } from "react";
import { JsxElement } from "typescript";


// 키워드 리스트 받아서 체크리스트로 만들어서 보여주고 done
// 체크박스 상태 바뀌면 리스트에 업데이트 done
// 선택된 체크박스 value들 모인 리스트 DB에 보내기
// 전체 체크박스 만들기 done
// DB에서 반환된 결과 오른쪽 화면에 띄우기
// 전체동작로직

const Check = () => {

    // DB에서 받았다 친 카테고리
    // ex) { 'firstType': ['맛집', '카페', '술집', '문화공간']}
    // , { 'mood': ['힐링', '신나는', '편안한', '포근한']}
    // , { 'etc': ['가성비', '데이트', '친구', '가족']}
    const firstType: { [key: string]: string[] } = { 'firstType': ['맛집', '카페', '술집'] };
    // DB에서 두번째로 반환된 키워드리스트
    const secondType: { [key: string]: string[] } = { 'mood': ['힐링', '신나는', '편안한', '포근한'] };
    // 세번째 반환
    const thirdType: { [key: string]: string[] } = { 'etc': ['가성비', '데이트', '친구', '가족'] };

    const category = new Array(firstType, secondType, thirdType);

    console.log(category);

    // 체크된 keyword를 담을 리스트
    const [keywordList, setKeywordList] = useState<string[]>([]);

    const keywordCheckBox = (category: { [key: string]: string[] }): ReactNode => {

        // 카테고리(key)
        const key: string = Object.keys(category)[0];
        // 키워드 리스트(value)
        const values: string[] = category[key];

        console.log({ key, values });

        // 키워드 리스트 돌려서 체크박스 생성 
        const checkBox =
            values.map((value) => {
                return (
                    <><p><label><input type="checkbox" name={key} value={value} onChange={(e) => singleCheck(e.target.checked, e.target.value)}
                        checked={keywordList.includes(value) ? true : false} />{value}</label></p></>
                )
            })


        return (
            <>
                <p>
                    <label>
                        <input type="checkbox" onChange={(e) => allCheck(e.target.checked)} checked={keywordList.length === values.length ? true : false} />
                        전체선택
                    </label>
                </p>
                {checkBox}
            </>
        );

    }


    // 다음 버튼
    const nextButton = (): ReactNode => {

        return (
            // TODO : 화살표 이미지로 변경
            <><p>
                <label>
                    <button type="button" name="nextButton" onClick={() => { keywordCheckBox(secondType) }} >다음</button>
                </label>
            </p>
            </>
        )
    }

    // 전체선택이 체크되면
    const allCheck = (checked: boolean) => {
        if (checked) {
            const allKeywordList: string[] = firstType['firstType'];
            setKeywordList(allKeywordList)
        } else {
            setKeywordList([])
        }
    }

    // 체크박스 하나하나 체크되면
    const singleCheck = (checked: boolean, id: string) => {
        if (checked) {
            setKeywordList([...keywordList, id])
        } else {
            setKeywordList(keywordList.filter((firstType) => firstType !== id))
        }
    }

    console.log(keywordList)



    return (
        <div className="h-screen">
            <div className="Rectangle-7 bg-[#fff7e3] h-3/5 w-96">
                {keywordCheckBox(category)}
                {nextButton()}
            </div>
        </div>
    )
}


export default Check



