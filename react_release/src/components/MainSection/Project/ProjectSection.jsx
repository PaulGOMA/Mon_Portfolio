import Title from '../../../utils/Title'
import { GrProjects } from "react-icons/gr";
import ProjectItem from './ProjectItem';

export default function ProjectSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em", width: "100%", minHeight: "auto"}} id='project'>
            <Title title={'PROJETS'}>
                <GrProjects />
            </Title>
            <div className="grid-container" style={{display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gridAutoRows: "250px", gap: "2em"}}>
                <ProjectItem 
                    image={"src/assets/Dashboard.png"}
                    tools={["React", "Node JS", "Mongo Db"]}
                    title={"Dasboard admin app"}
                    content={"Lorem ipsum... 25785 fkrnl,e,pero,orjirjfivrijruhtijeçe"}
                    typePath={"link"}
                    path={"https://paulgoma.github.io/Dashboard-admin/"}
                />
                <ProjectItem 
                    image={"src/assets/toss_a_coin.png"}
                    tools={["Unity"]}
                    title={"TOSS A COIN"}
                    content={"Lorem ipsum... 25785 fkrnl,e,pero,orjirjfivrijruhtijeçe"}
                    typePath={"video"}
                    path={"src/assets/toss_a_coin.mp4"}
                />
                <ProjectItem 
                    image={"src/assets/comic_vine.png"}
                    tools={["Flutter", "Dart"]}
                    title={"ECE Comic Vine"}
                    content={"Lorem ipsum... 25785 fkrnl,e,pero,orjirjfivrijruhtijeçe"}
                    typePath={"video"}
                    path={"src/assets/Flutter_project.mp4"}
                />
                <ProjectItem 
                    image={"src/assets/cao.png"}
                    tools={["Solidworks", "Fusion 360"]}
                    title={"Modélisation 3D"}
                    content={"Lorem ipsum... 25785 fkrnl,e,pero,orjirjfivrijruhtijeçe"}
                    typePath={"link"}
                    path={"https://viewer.autodesk.com/designviews"}
                />
                <ProjectItem 
                    image={"src/assets/notion_app.png"}
                    tools={["Notion"]}
                    title={"LE FALAF"}
                    content={"Lorem ipsum... 25785 fkrnl,e,pero,orjirjfivrijruhtijeçe"}
                    typePath={"link"}
                    path={"https://www.notion.so/Dashboard-7715dc88aeed4455a59c9832c6ff508c"}
                />
                <ProjectItem 
                    image={"src/assets/tesla_cycles.png"}
                    tools={["Figma", "React"]}
                    title={"TESLA CYCLES"}
                    content={"Lorem ipsum... 25785 fkrnl,e,pero,orjirjfivrijruhtijeçe"}
                    typePath={"link"}
                    path={"https://www.figma.com/file/7Ja1c882wUCJoKV0Zxzd9z/Maquette-Tesla-Cycles?type=design&node-id=14-71&mode=design&t=2SBcbvKdTofCx1LH-0"}
                />
            </div>
        </section>
    )
}

// src/assets/Flutter_project.mp4
//https://paulgoma.github.io/Dashboard-admin/