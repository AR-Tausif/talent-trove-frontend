export type TUserRole = 'employer' | 'job_seeker' | 'user';

// Define a type for the roles
export type Role = 'employer' | 'job_seeker';

// Define a type for the JWT token payload
export type TTokenPayload = {
  userId: string;
  role: TUserRole;
  exp: number;
};

// Define a type for role-based routes (excluding 'user' since they are redirected)
export type RoleBasedRoutes = {
  [key in Role]: string[];
};
