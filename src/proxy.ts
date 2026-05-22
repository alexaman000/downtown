import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { decrypt } from '@/lib/auth';

export default async function proxy(request: NextRequest) {
  const session = request.cookies.get('session')?.value;

  // Protect /admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Exclude /admin/login from the protection
    if (request.nextUrl.pathname === '/admin/login') {
      if (session) {
        try {
          await decrypt(session);
          return NextResponse.redirect(new URL('/admin', request.url));
        } catch (e) {
          return NextResponse.next();
        }
      }
      return NextResponse.next();
    }

    if (!session) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const parsed = await decrypt(session);
      if (!parsed.email) {
        throw new Error('Invalid session');
      }
    } catch (error) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
