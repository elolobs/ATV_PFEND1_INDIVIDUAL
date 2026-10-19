import "./header.css"
import Image from "next/image";
import Link from "next/link";
export default function Header() {
    return (
        <>
            <div className="header">
             <div className="logo">
               <Image src="/img/logo.png" alt="Logo" width={100} height={50} />
             </div>
             <div className="links">
               <ul>
                 <li><Link href="/">Home</Link></li>
                 <li><Link href="/figurinha">Figurinhas</Link></li>
               </ul>
             </div>
           </div>
        </>
    )
}