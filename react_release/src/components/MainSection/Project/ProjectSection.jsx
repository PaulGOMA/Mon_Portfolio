import Title from '../../../utils/Title'
import { GrProjects } from "react-icons/gr";
import ProjectItem from './ProjectItem';
import { ProjectInfo } from '../../../utils/ProjectInfo';
import useMediaQuery from '../../hook/UseMediaQuery';

export default function ProjectSection() {

    const isLargeScreen = useMediaQuery('(max-width: 806px)');

    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em", width: "100%", minHeight: "auto", marginBottom: "2rem"}} id='project'>
            <Title title={'PROJETS'}>
                <GrProjects />
            </Title>
            <div className="grid-container" style={{display: "grid", gridTemplateColumns: isLargeScreen ? "1fr" : "repeat(2, 1fr)", gridAutoRows: "250px", gap: "2em"}}>
                {
                    ProjectInfo.map((project) => (
                        <ProjectItem 
                            key={project.id}
                            image={project.image}
                            tools={project.tools}
                            title={project.title}
                            content={project.content}
                            typePath={project.typePath}
                            path={project.path}
                        />                        
                    ))
                }
            </div>
        </section>
    )
}
