import { useState } from "react";

const Check = () => {

    // DB에서 받았다 친 카테고리
    const placeType: { [key: string]: string[] } = { 'placeType': ['맛집', '카페', '술집', '문화공간'] };

    // 키워드 리스트 상태셋팅
    const [checkedArr, setCheckedArr] = useState<Array<string>>([]);

    // 카테고리(key) 키워드 리스트(value)
    const check = (category: { [key: string]: string[] }) => {

        // 카테고리(key)
        const key: string = Object.keys(category)[0];
        // 키워드 리스트(value)
        const values: string[] = category[key];

        // 키워드 리스트 돌려서 체크박스 생성 
        const checkList =
            values.map((value) => {

                return (
                    // 이거 추가 onChange = { doSave() }
                    <p><label><input type="checkbox" name={key} value={value} />{value}</label></p>
                )
            })

        // 키워드 리스트 상태 리스트
        const checkArr = document.querySelectorAll("." + { key });

        const checkedAll = () => {

            // 전체선택 체크리스트 상태
            const checkAll = document.querySelector(".checkAll")


            return (
                <form method="GET">
                    {/* TODO : 전체선택 버튼 만들기 
                    체크박스 상태 배열에 저장해서 바로바로 결과 뜨게*/}
                    <p><label><input type="checkbox" name="checkAll" />전체 선택</label></p>
                    {checkList}
                    {/* SUBMIT 부분은 반환타입에 따라 고칠 예정,  그냥 확인용으로 해둔거임 */}
                </form>
            )
        }
    }

    return (
        <div className="h-screen">
            <div className="Rectangle-7 bg-[#fff7e3] h-3/5 w-96">
                <p>공간유형</p>
                {check(placeType)}
                <button type="button">다음</button>
            </div>
        </div>

    )


}
