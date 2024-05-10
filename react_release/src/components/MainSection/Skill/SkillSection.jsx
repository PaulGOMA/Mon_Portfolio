import Title from '../../../utils/Title'
import { VscTools } from "react-icons/vsc";
import SkillItem from './SkillItem';
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaUsersGear, FaComputer } from "react-icons/fa6";
import {Innovation, Programmation, Software} from '../../../utils/SkillInfo';
import useMediaQuery from '../../hook/UseMediaQuery';
import { useContext } from 'react';
import { LayoutContext } from '../../../context/LayoutContext';

export default function SkillSection() {

    const layout = useContext(LayoutContext);
    const isLargeScreen = useMediaQuery('(max-width: 806px)');

    return(
        <section style={layout} id='COMPETENCES'>
            <Title title={'COMPETENCES'}>
                <VscTools />
            </Title>
            <article style={{height: "max-content", display: "flex", justifyContent: "center", flexDirection: "column"}} >
                <div style={{display: "flex",flexDirection: isLargeScreen ? "column" : "row", justifyContent: isLargeScreen ? "space-between" : "center", alignItems: isLargeScreen ? "center" : "start", gap: "1.5em"}}>
                    <SkillItem title={"PROGRAMMATION"} SkillList={Programmation} hasListIcon={true}>
                        <RiCodeSSlashFill />
                    </SkillItem>
                    <SkillItem title={"INNOVATION"} SkillList={Innovation} hasListIcon={false}>
                        <FaUsersGear />
                    </SkillItem>
                    <SkillItem title={"SOFTWARE"} SkillList={Software} hasListIcon={true}>
                        <FaComputer  />
                    </SkillItem>
                </div>  
            </article>
        </section>
    )
}