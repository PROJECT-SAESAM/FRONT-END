
const Footer = () => {


    // const [fruit, setFruit] = useState("");
    // const url = "http://127.0.0.1:8000/fruits"

    // [#316e4a]
    return (
        <div className='h-fit' >
            <div className="font-serif bg-[#316e4a] opacity-90">
                <p className=" flex justify-center pb-5 text-6xl font-thin text-[#eae7de] pt-16 font-serif">
                    {/* <img src="/IMG/새삼스러울, 서울.png" alt="새삼스러울, 서울" className="h-" /> */}
                    새삼스러울, 서울
                </p>
                <div className="flex place-content-between">
                    <div className="flex text-[#eae7de] pb-12 pt-10 font-sans">
                        <div className="pl-12">
                            <p className="p-3">Product Manager</p>
                            <p className="p-3">Data Analyst</p>
                        </div>
                        <div className="pt-1 pl-4 font-sans font-medium">
                            <p className="p-3">왕재준</p>
                            <p className="p-3">김가람</p>
                        </div>
                        <div className="pl-8 font-sans">
                            <p className="p-3">Frontend Engineer</p>
                            <p className="p-3">Backend Enginner</p>
                            <p className="p-3">Special Thanks to</p>
                        </div>
                        <div className="pt-1 pl-4 font-sans font-medium">
                            <p className="p-3">김효정</p>
                            <p className="p-3">왕재준</p>
                            <div className="p-3">
                                <p>빅데이터 15기 천재들</p>
                                <p>유정호 강사님</p>
                                <p>김광일 멘토님</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-end justify-end w-1/3 p-20">
                        <img className="h-36 w-36" src="./IMG/seasam_logo.png" alt="saesam logo" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
