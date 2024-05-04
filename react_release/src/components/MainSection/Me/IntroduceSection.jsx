import Title from '../../../utils/Title'
import { SlHome } from "react-icons/sl";

export default function IntroduceSection() {
    return (
        <section style={{display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh", justifyContent: "start"}} id='introduce'>
            <Title title={'PRESENTATION'}>
                <SlHome />
            </Title>
            <div style={{height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <p style={{fontSize: "5rem", color: "white", lineHeight: "1.5em"}}>
                    Salut, Je suis <span style={{color: "#FBBE6C"}}>Paul Valérie</span> étudiant en 4<sup>e </sup> 
                    année de cycle ingénieur à l&apos; <abbr title="Ecole Centrale d'Electronique" style={{textDecoration: "none"}}>ECE Paris. </abbr> 
                </p>
            </div>
            
        </section>
    )
}