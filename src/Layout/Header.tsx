import { ReactNode } from "react";

const Header = () => {

    //깃허브 baseURL
    const baseURL: string = "https://github.com/";
    //팀원들 깃헙 아이디
    const teamInfo: string[] = ["jayarnim", "kim-garam", "erua0919", "410am"];

    //깃허브+아이디=깃허브 주소
    const githubInfo: string[] = teamInfo.map(teamInfo => `${baseURL}${teamInfo}`);

    const visitGithub = (arr: string[]): ReactNode => {
        const github =
            arr.map((git_id) => {
                return (
                    <a className="flex github_link" href={`${baseURL}${git_id}`} >
                        <img className="w-4 h-4 mr-2" src="./IMG/kisspng-github-computer-icons-clip-art-gits-5b4d20ab4d91f7.4085637115317812913177.png" alt="github icon" />
                        {git_id}
                    </a>
                )
            })
        return github
    }



    return (
        <div>
            {/* <video src="./video/coffee_shop.mp4" loop autoPlay muted /> */}
            <div className="flex p-3 space-x-8 text-xs">
                {visitGithub(teamInfo)}
            </div>
            <div className="grid pt-24 place-content-center">
                <div>
                    <img className="translate-x-12 h-3/6" src="./IMG/seasam_logo.png" alt="saesam logo" />
                    <img className="h-32 pt-4 -translate-x-6" src="./IMG/saesam_text_logo.png" alt="saesam text logo" />
                    <p className="pt-2 text-xl font-medium tracking-widest text-center -translate-x-9">
                        {/* todo : 각 폰트사이 여백 더 크게 */}
                        새삼스러울, 서울
                    </p>
                </div>
            </div>
        </div>
    )
};
export default Header;