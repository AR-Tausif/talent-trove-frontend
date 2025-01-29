'use client';

import Link from 'next/link';

import { useForm } from 'react-hook-form';

import { Button } from '@/components/ui';
import { Icons } from '@/components/icons';
import { loginSchema, LoginSchemaType } from './login.yup-schema';
import { yupResolver } from '@hookform/resolvers/yup';
import { InputCombo, InputComboForPassword } from '@/components/forms';
import { Fragment } from 'react';
import { toast } from 'sonner';
import { useLoginMutation } from '@/redux/features/auth/authApi';
import { useAppDispatch } from '@/redux/hooks';
import { useRouter } from 'next/navigation';
import { VerifyToken } from '@/utils/verifyToken';
import { setUser } from '@/redux/features/auth/authSlice';
import { JwtPayload } from 'jwt-decode';

import Cookies from 'js-cookie';
import { Loader } from 'lucide-react';

interface IUser extends JwtPayload {
  role?: string;
}
export default function LoginForm() {
  const [login, { data, error, isLoading }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (loginData: LoginSchemaType) => {
    console.log({ data, loginData });
    const userInfo = {
      email: loginData.email,
      password: loginData.password,
    };
    const toastId = toast.loading('Please wait for moments');
    console.log('hllo');
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const loginResponse: any = await login(userInfo).unwrap();

      const user: IUser = VerifyToken(loginResponse.data.token);
      console.log({ user, loginResponse });
      dispatch(setUser({ user, token: loginResponse.data.token }));
      toast.success(loginResponse.message, { id: toastId });
      Cookies.set('accessToken', loginResponse.data.token);

      // Corrected Redirection Logic
      if (user.role === 'job_seeker') {
        router.push(`/dashboard/job_seeker`);
      } else if (user.role === 'employee') {
        router.push(`/dashboard/employee`);
      } else {
        // Redirect to unauthorized or login page for unknown roles
        router.push('/unauthorized');
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong!', {
        id: toastId,
      });
    }
  };

  return (
    <Fragment>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your email below to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-6">
              <div>
                <div className="space-y-2">
                  <InputCombo
                    register={register('email')}
                    error={errors.email?.message}
                    labelName="Email"
                    placeholder="name@example.com"
                    type="email"
                  />
                  <InputComboForPassword
                    register={register('password')}
                    error={errors.password?.message}
                    labelName="password"
                    placeholder="*****"
                  />
                </div>

                <Button
                  className="w-full"
                  disabled={isLoading ? true : false}
                  type="submit"
                >
                  {isLoading ? (
                    <Loader className="animate-spin" />
                  ) : (
                    'Sign I n with Email'
                  )}
                </Button>
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or continue with
                  </span>
                </div>
              </div>
              <Button variant="outline" type="button">
                <Icons.gitHub className="mr-2 h-4 w-4" />
                GitHub
              </Button>
            </div>
          </form>
          <p className="px-8 text-center text-sm text-muted-foreground">
            By clicking continue, you agree to our{' '}
            <Link
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </div>
    </Fragment>
  );
}
