import Link from "next/link";
import Image from 'next/image';

export default function NavLogo() {
    return (
        <Link href="/">
        <Image className="-mt-5 hover:opacity-70" src="/ffrl.png" alt="FFRL Logo" width={80} height={80}/>
        </Link>
    );
}