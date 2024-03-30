import CertificateItem from './CertificateItem';
import Title from '../Title'
import { LiaCertificateSolid } from "react-icons/lia";


export default function CertificateSection() {

    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em"}}>
            <Title title={'CERTIFICATS'}>
                <LiaCertificateSolid />
            </Title>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "2em"}}>
                <CertificateItem 
                    title={"PRODUCT OWNER"} 
                    academy={"Dthinking academy"} 
                    link={"https://www.procertif.com/paul-valerie-goma-657438fd2b46b-check-2312paugom055"}
                    imagePath={"src/assets/PO.png"}
                />
                <CertificateItem 
                    title={"UX / UI DESIGNER"} 
                    academy={"Dthinking academy"} 
                    link={"https://www.procertif.com/paul-valerie-goma-657438fd2b46b-check-2312paugom055"}
                    imagePath={"src/assets/UXUI.png"}
                />
                <CertificateItem 
                    title={"CERTIFIED DATA SCIENTEST"} 
                    academy={"DataScientest.com"} 
                    link={"https://files.datascientest.com/certification/8b92f273-ad14-488b-97ed-2e4c32ad0ef5.pdf"}
                    imagePath={"src/assets/DS.png"}
                />                
            </div>
        </section>
    )
}