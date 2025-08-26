import Link from "next/link";
import Image from 'next/image';

export default function NavLogo() {
    return (
        <Link href="/">
        <Image src="/ffrl.png" alt="FFRL Logo" width={80} height={80}/>
        </Link>
    );
}