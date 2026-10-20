import "./header.css"
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <>
            <div className="header">
             <div className="logo">
               <Image src="/img/logo.png" alt="Logo" width={150} height={90} />
             </div>
             <div className="links">
               <ul>
                 <li><Link href="/"><i className="fa-solid fa-house icone-menu"></i>Home</Link></li>
                 <li><Link href="/figurinha"><i className="fa-solid fa-images icone-menu"></i>Figurinhas</Link></li>
               </ul>
             </div>
           </div>
        </>
    )
}