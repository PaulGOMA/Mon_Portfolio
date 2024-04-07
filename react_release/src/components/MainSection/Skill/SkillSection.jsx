import Title from '../Title'
import { VscTools } from "react-icons/vsc";
import Programmation from './Programmation';
import ProductLeadership from './ProductLeadership';
import Software from './Software';

export default function SkillSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em"}}>
            <Title title={'COMPETENCES'}>
                <VscTools />
            </Title>  
            <article style={{display: "flex",flexDirection: "row", justifyContent: "center", alignItems: "start", gap: "1.5em"}}>
                <Programmation/>
                <ProductLeadership/>
                <Software/>
            </article>
        </section>
    )
}