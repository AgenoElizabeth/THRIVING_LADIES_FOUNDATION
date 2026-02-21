import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Note: Authentication is now handled client-side with Supabase
// The middleware is kept for future server-side auth if needed
// Dashboard protection is handled by the client-side auth context

export function proxy(request: NextRequest) {
  // For now, let all routes pass through
  // Client-side authentication will handle protection
  return NextResponse.next()
}

// Configure which paths this middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|images|.*\\..*|$).*)',
  ],
}