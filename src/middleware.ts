// middleware.ts
import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { RoleBasedRoutes, TTokenPayload } from './tyeps';

// Public routes accessible to everyone
const publicRoutes = ['/', '/jobs', '/jobs/:id'];

// Define role-based access control
const roleBasedRoutes: RoleBasedRoutes = {
  job_seeker: [
    ...publicRoutes,
    '/dashboard/job_seeker',
    '/dashboard/job_seeker/:path*',
  ],
  employer: [
    ...publicRoutes,
    '/dashboard/employer',
    '/dashboard/employer/:path*',
  ],
};

// Middleware function
export function middleware(req: NextRequest) {
  const cookies = req.cookies;
  const myCookie = cookies.get('accessToken');
  const token = myCookie?.value;

  if (token) {
    try {
      const payload = jwtDecode<TTokenPayload>(token);
      const role = payload.role;
      const path = req.nextUrl.pathname;
      console.log({ token, payload });

      if (role === 'user') {
        return NextResponse.redirect(new URL('/login', req.url));
      }

      // Check if path is allowed for the user's role
      const isPathAllowed = (routes: string[], path: string) => {
        return routes.some((route) => {
          if (route === '*') return true;
          const regex = new RegExp(`^${route.replace(/:path\\*/g, '.*')}$`);
          return regex.test(path);
        });
      };

      // Allow access if the path is in the role's allowed routes
      if (isPathAllowed(roleBasedRoutes[role] || [], path)) {
        return NextResponse.next();
      } else {
        return NextResponse.redirect(new URL('/unauthorized', req.url));
      }
    } catch (error) {
      console.error('Token verification failed:', error);
      return NextResponse.redirect(new URL('/auth/login', req.url));
    }
  } else {
    console.log('No token found');
    return NextResponse.redirect(new URL('/auth/login', req.url));
  }
}

// Apply middleware only to protected dashboard routes
export const config = {
  matcher: ['/dashboard/:path*'],
};
