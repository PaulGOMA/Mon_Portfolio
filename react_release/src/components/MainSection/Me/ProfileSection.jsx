import Title from '../Title'
import { FaRegUser } from "react-icons/fa6";

export default function ProfileSection() {
    return(
        <section style={{display: "flex", flexDirection: "column", gap: "2em"}}>
            <Title title={'PROFIL'}>
                <FaRegUser />
            </Title>
            <p style={{fontSize: "16px", textAlign: "justify"}}>
            Actuellement en 4<sup>e</sup> année dans la majeure Product Engineering and Innovation, mon parcours universitaire m'a fait découvrir le monde merveilleux et passionnant de la conception des systèmes mécaniques, électroniques, 
            du developpement web, de l'UI/UX design, du l'IHM me permettant ainsi d'avoir une vue sur le processus de concpeption d'un produit depuis sa phase de recherche jusqu'à sa phase de réalisation.<br /><br />
            Pour avoir plus d'infos sur ma majeure, veuillez cliquez sur la video ci-dessous
            </p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/fXx3W6-DRao?si=mV6zN0WjHwYZt22X" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style={{alignSelf: "start"}}></iframe>
        </section>
    )
}