"use client"

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const ACTIVE_ROUTE = "py-1 px-2 text-gray-300 bg-gray-700";
const INACTIVE_ROUTE = "py-1 px-2 text-gray-500 hover:text-gray-300 hover:bg-gray-700";

const AuthButton = () => {
    const { data: session } = useSession();

    if (session) {
        return (
            <>
                {session?.user?.name}<br />
                <button className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900" onClick={() => signOut()}>Sign Out</button>
            </>
        );
    }

    return (
        <>
            Not signed in <br />
            <button
                className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                onClick={() => signIn()}>Sign In</button>
        </>
    );
}

export default function NavMenu() {
    const pathname = usePathname();
    return (
        <div>
            <AuthButton />
            <hr className="my-4" />
            <ul>
                <Link href="/">
                    <li className={pathname === "/" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Home</li>
                </Link>
                <Link href="/protected">
                    <li className={pathname === "/protected" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>Protected Route</li>
                </Link>
                <Link href="/serverAction">
                    <li className={pathname === "/serverAction" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>ServerAction</li>
                </Link>
                <Link href="/apiFromClient">
                    <li className={pathname === "/apiFromClient" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>API From Client</li>
                </Link>
                <Link href="/apiFromServer">
                    <li className={pathname === "/apiFromServer" ? ACTIVE_ROUTE : INACTIVE_ROUTE}>API From Server</li>
                </Link>
            </ul>
        </div>
    );
}

