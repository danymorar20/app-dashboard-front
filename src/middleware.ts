import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value;

    if (!token) return NextResponse.redirect(new URL('/auth/login', request.url));

    try {
        const decodedToken = JSON.parse(atob(token.split('.')[1]));

        if (decodedToken.exp * 1000 < Date.now()) return NextResponse.redirect(new URL('/auth/login', request.url));

        return NextResponse.next();
    } catch (error) {
        return NextResponse.redirect(new URL('/auth/login', request.url));
    }
}

export const config = {
    matcher: [
        '/dashboard/:path*',
        '/',
    ],
};
