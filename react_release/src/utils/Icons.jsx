import { SlHome } from "react-icons/sl";
import { FaRegUser } from "react-icons/fa6";
import { IoSchoolOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { LiaCertificateSolid } from "react-icons/lia";
import { GrProjects } from "react-icons/gr";
import { BsTelephone } from "react-icons/bs";

import { MdOutlineFacebook } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaLinkedin } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


export const NavIcons = [
    {id: "introduce", icon : <SlHome />},
    {id: "profile", icon : <FaRegUser />},
    {id: "education", icon : <IoSchoolOutline />},
    {id: "skill", icon : <VscTools />},
    {id: "certificate", icon : <LiaCertificateSolid />},
    {id: "project", icon : <GrProjects />},
    {id: "contact", icon : <BsTelephone />}
]

export const InfocardIcons = [
    {url: "https://github.com/PaulGOMA", icon : <FaGithub />},
    {url: "https://www.facebook.com/paul.goma.50/", icon : <MdOutlineFacebook/>},
    {url: "https://www.instagram.com/paul_valerie_goma/", icon : <PiInstagramLogoFill />},
    {url: "https://www.linkedin.com/in/paul-valerie-goma-1a9a2a143/", icon : <FaLinkedin />},
    {url: "https://www.pinterest.fr/gomapaul/", icon : <FaPinterest />}
]