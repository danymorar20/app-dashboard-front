"use client"

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from 'js-cookie';

export default function Page() {
    const router = useRouter();

    useEffect(() => {
        const token = Cookies.get('token');
        router.push(token ? '/dashboard' : '/auth/login');
    }, [router]);

    return <div>Redirigiendo...</div>;
}
