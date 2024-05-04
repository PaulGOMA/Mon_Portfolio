import EducationItem from './EducationItem';
import Title from '../../../utils/Title'
import { IoSchoolOutline } from "react-icons/io5";
import { EducationInfos } from '../../../utils/EducationInfos';

export default function EducationSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh", justifyContent: "start"}} id='education'>
            <Title title={'ETUDES & EXPERIENCE PROFESSIONNELLE'}>
                <IoSchoolOutline />
            </Title>
            <article style={{height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                {
                    EducationInfos.map((education) => (
                        <EducationItem key={education.year} year={education.year} establishment={education.establishment} schoolUrl={education.url}>
                            {education.info}
                        </EducationItem>
                    ))
                }
            </article>
        </section>
    )
}