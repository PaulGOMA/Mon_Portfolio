import Title from '../Title'
import { SlHome } from "react-icons/sl";

export default function IntroduceSection() {
    return (
        <section style={{display: "flex", flexDirection: "column", gap: "2em"}}>
            <Title title={'PRESENTATION'}>
                <SlHome />
            </Title>
            <p style={{fontSize: "60px", color: "white", lineHeight: "1.5em"}}>
                Salut, Je suis <span style={{color: "#FBBE6C"}}>Paul Valérie</span> étudiant en 4<sup>e </sup> 
                année de cycle ingénieur à l'<abbr title="Ecole Centrale d'Electronique" style={{textDecoration: "none"}}>ECE Paris. </abbr> 
            </p>
        </section>
    )
}