import Title from '../Title'
import { GrProjects } from "react-icons/gr";
import ProjectItem from './ProjectItem';


export default function ProjectSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em"}}>
            <Title title={'PROJETS'}>
                <GrProjects />
            </Title>
            <ProjectItem 
                image={"src/assets/Dashboard.png"}
                tool={"React"}
                title={"Dasboard admin app"}
                content={"Lorem ipsum... 25785 fkrnl,e,pero,orjirjfivrijruhtijeçe"}
                typePath={"video"}
                path={"src/assets/Flutter_project.mp4"}
            />
        </section>
    )
}