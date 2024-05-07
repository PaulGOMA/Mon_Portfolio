import CertificateItem from './CertificateItem';
import Title from '../../../utils/Title'
import { LiaCertificateSolid } from "react-icons/lia";
import { CertificateInfo } from '../../../utils/CertificateInfo';

export default function CertificateSection() {

    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em", width: "100%", minHeight: "100vh"}} id='certificate'>
            <Title title={'CERTIFICATS'}>
                <LiaCertificateSolid />
            </Title>
            <div style={{display: "flex", justifyContent: "space-around", alignItems: "center", gap: "2em", flexDirection: "column"}}>
                {
                    CertificateInfo.map((certificate) => (
                        <CertificateItem 
                            key={certificate.id}
                            title={certificate.title} 
                            academy={certificate.academy} 
                            link={certificate.link}
                            imagePath={certificate.imagePath}
                            alt={certificate.title}
                        />
                    ))
                }               
            </div>
        </section>
    )
}