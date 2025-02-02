// import { Metadata } from 'next';

import { LogoIcon } from '@/components/icons';
import Logo from '@/components/icons/Logo';

interface Props extends React.ComponentPropsWithoutRef<'div'> {}

// export const metadata: Metadata = {
//   title: 'Authentication',
//   description: 'Authentication forms built using the components.',
// };

function AuthenticationPage({ children }: Props) {
  return (
    <div className="container relative  p-4 lg:p-0 h-screen lg:max-h-screen lg:min-h-[95vh]  flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 ">
      <div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
        <div className="absolute inset-0 bg-zinc-900" />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <div className="bg-white p-2 rounded-md">
            <Logo />
          </div>
          <span className="ml-4">Talent Trove</span>
        </div>

        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;Talent Trove: Unlocking opportunities, bridging talent with
              ambition. We empower job seekers and recruiters with seamless
              hiring solutions, smart automation, and data-driven insights.
              Redefining recruitment with innovation, efficiency, and
              transparency—because finding the right fit should be effortless.
              Your career, your future, your Trove!.&rdquo;
            </p>
            <footer className="text-sm">Sofia Davis</footer>
          </blockquote>
        </div>
      </div>

      {children}
    </div>
  );
}

export default AuthenticationPage;
