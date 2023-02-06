
const Footer = () => {
    return (
        <div className='h-fit' >
            <div className="font-serif bg-green-700">
                {/* 폰트 바꿔야됨 */}
                <p className=" flex justify-center p-16 pb-12 text-7xl font-thin text-[#eae7de]">
                    새삼스러울, 서울
                </p>
                <div className="flex place-content-between">
                    <div className="flex text-[#eae7de] pb-12 pt-10">
                        <div className="pl-12">
                            <p className="p-3">Product Manager</p>
                            <p className="p-3">DB Engineer</p>
                            <p className="p-3">Data Analyst</p>
                            <p className="p-3">ML Engineer</p>
                        </div>
                        <div className="pt-1 pl-4 font-medium">
                            <p className="p-3">왕재준</p>
                            <p className="p-3">김가람 | 왕재준 | 김다함</p>
                            <p className="p-3">김가람</p>
                            <p className="p-3">왕재준</p>
                        </div>
                        <div className="pl-8">
                            <p className="p-3">Frontend Engineer</p>
                            <p className="p-3">Backend Enginner</p>
                            <p className="p-3">Designer</p>
                            <p className="p-3">Special Thanks to</p>
                        </div>
                        <div className="pt-1 pl-4 font-medium">
                            <p className="p-3">김효정</p>
                            <p className="p-3">김다함</p>
                            <p className="p-3">김효정</p>
                            <p className="p-3">
                                <p>빅데이터 15기 천재들</p>
                                <p>유정호 강사님</p>
                                <p>김광일 멘토님</p>
                            </p>
                        </div>
                    </div>
                    <div className="flex items-end justify-end w-1/3 p-20">
                        {/* 새삼 로고 */}
                        <img className="h-36 w-36" src="./IMG/seasam_logo.png" alt="saesam logo" />

                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;

export { }