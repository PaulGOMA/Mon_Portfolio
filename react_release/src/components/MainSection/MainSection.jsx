import IntroduceSection from './Me/IntroduceSection'
import './MainSection.css'
import ProfileSection from './Me/ProfileSection'
import EducationSection from './Education/EducationSection'
import SkillSection from './Skill/SkillSection'
import CertificateSection from './Certificate/CertificateSection'
import ProjectSection from './Project/ProjectSection'



export default function MainSection() {
    return (
        <main className="main-container">
            <IntroduceSection/>
            <ProfileSection/>
            <EducationSection/>
            <SkillSection/>  
            <CertificateSection/>  
            <ProjectSection/>        
        </main>
    )
}