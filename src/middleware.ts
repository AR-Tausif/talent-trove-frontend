// middleware.ts
import { jwtDecode } from 'jwt-decode';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { RoleBasedRoutes, TTokenPayload } from './tyeps';

const seekerRoutes = [
  '/',
  '/jobs',
  '/dashboard/seeker',
  '/dashboard/seeker/:path*',
];
// Define the roles and their respective routes
const roleBasedRoutes: RoleBasedRoutes = {
  job_seeker: seekerRoutes,
  employee: ['*'], // Allow all routes for superAdmin
  user: [],
};

export function middleware(req: NextRequest) {
  // Check if the requested path is "/"
  //   if (req.nextUrl.pathname === '/') {
  //     return NextResponse.redirect(new URL('/dashboard', req.url));
  //   }
  const cookies = req.cookies;
  const myCookie = cookies.get('accessToken');
  const token = myCookie?.value;

  if (token) {
    try {
      const payload = jwtDecode<TTokenPayload>(token);

      const path = req.nextUrl.pathname;
      const role = payload.role;
      if (role === 'user') {
        return NextResponse.redirect(new URL('/login', req.url));
      }

      // Function to check if the path matches any route patterns
      const isPathAllowed = (routes: string[], path: string) => {
        return routes.some((route) => {
          if (route === '*') return true;
          const regex = new RegExp(`^${route.replace(/:\w+/g, '\\w+')}$`);
          return regex.test(path);
        });
      };

      if (isPathAllowed(roleBasedRoutes[role] || [], path)) {
        return NextResponse.next();
      } else {
        // if (role === "user") {
        //   return NextResponse.redirect(new URL('/login', req.url));
        // }
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

export const config = {
  matcher: ['/dashboard/:path*'],
};
