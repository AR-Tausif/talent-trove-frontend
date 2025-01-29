export type TUserRole = 'employee' | 'job_seeker' | 'user';

// Define a type for the roles
export type Role = 'employee' | 'job_seeker' | 'user';
export type TTokenPayload = {
  userId: string;
  role: TUserRole;
  exp: number;
};

// Define a type for the role-based routes
export type RoleBasedRoutes = {
  [key in Role]: string[];
};
