import EducationItem from './EducationItem';
import Title from '../Title'
import { IoSchoolOutline } from "react-icons/io5";

export default function EducationSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em"}}>
            <Title title={'ETUDES & EXPERIENCE PROFESSIONNELLE'}>
                <IoSchoolOutline />
            </Title>
            <article>
                <EducationItem year={"2023 - 2025"} establishment={"ECE Paris"} schoolUrl={"https://www.ece.fr/"}>
                    <p style={{fontSize: "18px", fontWeight: "bold"}}>Ingénieur Product Engineering and Innovation (en cours)</p>
                </EducationItem> 
                <EducationItem year={"2018 - 2023"} establishment={"Ecole Nationale Superieure Polytechnique-Université Marien NGOUABI-Congo Brazzaville"}>
                    <p style={{fontSize: "18px", fontWeight: "bold"}}>
                        Master en Mécanique Energétique et Ingeniérie (2023)<br/><br/>
                        Licence en Maintenance Industrielle (2021)
                    </p>
                </EducationItem> 
                <EducationItem year={"2021"} establishment={"Port autonome de Pointe-Noire"} schoolUrl={"http://www.papn-cg.org/fr/accueil/"}>
                    <p style={{fontSize: "18px", fontWeight: "bold"}}>Stage au Port autonome de Pointe-Noire (Congo Brazaville) à la direction
                            des équipements et infrastructures (3 mois)
                    </p>
                </EducationItem>
                <EducationItem year={"2018"} establishment={"Lycée Charlemagne"} schoolUrl={"https://lycee-charlemagne-pnr.com/"}>
                    <p style={{fontSize: "18px", fontWeight: "bold"}}>Baccalauréat scientifique série S </p> 
                </EducationItem>                  
            </article>
        </section>
    )
}