import CertificateItem from './CertificateItem';
import Title from '../../../utils/Title'
import { LiaCertificateSolid } from "react-icons/lia";
import { CertificateInfo } from '../../../utils/CertificateInfo';
import { LayoutContext } from '../../../context/LayoutContext';
import { useContext } from 'react';

export default function CertificateSection() {

    const layout = useContext(LayoutContext);

    return(
        <section style={layout} id='CERTIFICATS'>
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