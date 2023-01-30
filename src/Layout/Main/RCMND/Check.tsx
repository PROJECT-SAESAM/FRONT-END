import { useState } from "react";
import { ReactNode } from "react";
import { JsxElement } from "typescript";


// 키워드 리스트 받아서 체크리스트로 만들어서 보여주고 done
// 체크박스 상태 바뀌면 리스트에 업데이트
// 선택된 체크박스 value들 모인 리스트 DB에 보내기
// 전체 체크박스 만들기

const Check = () => {

    // DB에서 받았다 친 카테고리
    const placeType: { [key: string]: string[] } = { 'placeType': ['맛집', '카페', '술집', '문화공간'] };

    const showCheckBox = (category: { [key: string]: string[] }): JSX.Element[] => {

        // 카테고리(key)
        const key: string = Object.keys(category)[0];
        // 키워드 리스트(value)
        const values: string[] = category[key];

        // 키워드 리스트 돌려서 체크박스 생성 
        const checkBox =
            values.map((value) => {
                return <p><label><input type="checkbox" name={key} value={value} />{value}</label></p>
            })

        return checkBox
    }

    // 키워드 리스트 상태셋팅
    const [checkedItems, setCheckedItems] = useState(new Set());

    const updateCheckBox = () => {

        let b = [Array.from(a)]

    }



    return (
        <div className="h-screen">
            <div className="Rectangle-7 bg-[#fff7e3] h-3/5 w-96">
                <p><label><input type="checkbox" />전체선택</label></p>
                {showCheckBox(placeType)}
                <button type="button">다음</button>
            </div>
        </div>
    )
}

export default Check




// const Check = (arr: string[]): ReactNode => {

    // // 키워드 리스트 상태셋팅
    // const [checkedArr, setCheckedArr] = useState<string[]>([]);

//     // 카테고리(key) 키워드 리스트(value)
//     const showCheckList = (category: { [key: string]: string[] }) => {

        // // 키워드 리스트 상태 리스트
        // const checkArr = document.querySelectorAll("." + { key });

//         const checkedAll = () => {

//             // 전체선택 체크리스트 상태
//             const checkAll = document.querySelector(".checkAll")


//             return (
//                 <form method="GET">
//                     {/* TODO : 전체선택 버튼 만들기
//                     체크박스 상태 배열에 저장해서 바로바로 결과 뜨게*/}
//                     <p><label><input type="checkbox" name="checkAll" />전체 선택</label></p>
//                     {checkList}
//                 </form>
//             )
//         }
//     }
// }
