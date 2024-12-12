import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const headers = new Headers(request.headers);
  headers.set('x-middleware-next', '1');

  // Check if the route is `/collections/[variant]`
  if (url.pathname.startsWith('/collections/')) {
    const variant = url.pathname.split('/')[2]; // Extract `variant` from the path

    // Validate `variant`
    if (!['men', 'women'].includes(variant)) {
      // Redirect to a safe page if `variant` is invalid
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Pass through for other routes
  return NextResponse.next({
    request: {
      headers: headers,
    },
  });
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
