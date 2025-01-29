import { baseApi } from '@/redux/api/baseApi';

export type TPassInfo = {
  currentPassword: string;
  newPassword: string;
};

interface IUserInfo {
  email: string;
  password: string;
}
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (userInfo: IUserInfo) => ({
        url: '/auth/login',
        method: 'POST',
        body: { data: userInfo },
      }),
    }),
    register: builder.mutation({
      query: (userInfo) => ({
        url: '/auth/register',
        method: 'POST',
        body: { data: userInfo },
      }),
    }),
    changePassword: builder.mutation({
      query: (passInfo: TPassInfo) => ({
        url: '/auth/change-password',
        method: 'POST',
        body: passInfo,
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useRegisterMutation,
  useChangePasswordMutation,
} = authApi;
