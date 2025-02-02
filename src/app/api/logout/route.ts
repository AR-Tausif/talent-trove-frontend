import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.json({ message: 'Logged out successfully' });

  // Clear the cookie
  response.cookies.set('accessToken', '', {
    path: '/',
    expires: new Date(0), // Expire immediately
  });

  return response;
}
