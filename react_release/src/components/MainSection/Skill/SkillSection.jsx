import Title from '../../../utils/Title'
import { VscTools } from "react-icons/vsc";
import SkillItem from './SkillItem';
import { RiCodeSSlashFill } from "react-icons/ri";
import { FaUsersGear, FaComputer } from "react-icons/fa6";
import {Innovation, Programmation, Software} from '../../../utils/SkillInfo';
import useMediaQuery from '../../hook/UseMediaQuery';


export default function SkillSection() {

    const isLargeScreen = useMediaQuery('(max-width: 806px)');

    return(
        <section style={{display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh", justifyContent: "start"}} id='skill'>
            <Title title={'COMPETENCES'}>
                <VscTools />
            </Title>
            <article style={{height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column"}} >
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