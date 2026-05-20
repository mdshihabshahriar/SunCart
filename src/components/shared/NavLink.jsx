'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ href, children }) => {
    const pathName = usePathname();
    const isActive = pathName === href;

    return (
        <Link href={href} className={isActive ? 'border-b-2 text-orange-400 font-bold text-[16px] hover:bg-transparent' : 'font-bold text-[16px] hover:bg-transparent'}>
            {children}
        </Link>
    );
};

export default NavLink;