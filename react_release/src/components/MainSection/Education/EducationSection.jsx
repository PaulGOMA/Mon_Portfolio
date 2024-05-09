import EducationItem from './EducationItem';
import Title from '../../../utils/Title'
import { IoSchoolOutline } from "react-icons/io5";
import { EducationInfos } from '../../../utils/EducationInfos';
import { LayoutContext } from '../../../context/LayoutContext';
import { useContext } from 'react';


export default function EducationSection() {

    const layout = useContext(LayoutContext);

    return(
        <section style={layout} id='education'>
            <Title title={'ETUDES & EXPERIENCE PROFESSIONNELLE'}>
                <IoSchoolOutline />
            </Title>
            <article style={{height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                {
                    EducationInfos.map((education) => (
                        <EducationItem key={education.year} year={education.year} establishment={education.establishment} schoolUrl={education.url} info={education.info}/>
                    ))
                }
            </article>
        </section>
    )
}