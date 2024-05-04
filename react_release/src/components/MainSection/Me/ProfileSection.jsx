import Title from '../../../utils/Title'
import { FaRegUser } from "react-icons/fa6";

export default function ProfileSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", width: "100%", minHeight: "100vh", justifyContent: "start"}} id='profile'>
            <Title title={'PROFIL'}>
                <FaRegUser />
            </Title>
            <div style={{height: "100vh", display: "flex", justifyContent: "center", flexDirection: "column", gap: "2rem"}}>
                <p style={{fontSize: "1.7rem", textAlign: "justify"}}>
                Actuellement en 4<sup>e</sup> année dans la majeure Product Engineering and Innovation, mon parcours universitaire m&apos;a fait découvrir le monde merveilleux et passionnant de la conception des systèmes mécaniques, électroniques, 
                du developpement web, de l&apos;UI/UX design, du l&apos;IHM me permettant ainsi d&apos;avoir une vue sur le processus de concpeption d&apos;un produit depuis sa phase de recherche jusqu&apos;à sa phase de réalisation.<br /><br />
                Pour avoir plus d&apos;infos sur ma majeure, veuillez cliquez sur la video ci-dessous
                </p>
                <iframe 
                    width="560" 
                    height="315" 
                    src="https://www.youtube.com/embed/fXx3W6-DRao?si=mV6zN0WjHwYZt22X" 
                    title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    allowFullScreen 
                    style={{alignSelf: "center"}}
                />

            </div>
        </section>
    )
}