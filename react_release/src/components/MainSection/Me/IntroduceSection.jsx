import Title from '../../../utils/Title'
import { SlHome } from "react-icons/sl";
import useMediaQuery from '../../hook/UseMediaQuery';
import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';


export default function IntroduceSection() {

    const layout = useContext(LayoutContext);
    const isLargeScreen = useMediaQuery('(max-width: 807px)');

    return (
        <section style={layout} id='PRESENTATION'>
            <Title title={'PRESENTATION'}>
                <SlHome />
            </Title>
            <div style={{height: "max-content", display: "flex", justifyContent: "center", flexDirection: "column"}}>
                <p style={{fontSize: isLargeScreen? "3em" : "5em", color: "white", lineHeight: "1.5em"}}>
                    Salut, Je suis <span style={{color: "#FBBE6C"}}>Paul Valérie</span> étudiant en 4<sup>e </sup> 
                    année de cycle ingénieur à l&apos; <abbr title="Ecole Centrale d'Electronique" style={{textDecoration: "none"}}>ECE Paris. </abbr> 
                </p>
            </div>
            
        </section>
    )
}