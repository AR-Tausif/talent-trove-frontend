import { baseApi } from '@/redux/api/baseApi';

const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createStudent: builder.mutation({
      query: (studentInfo) => ({
        url: '/student/create-student',
        method: 'POST',
        body: studentInfo,
      }),
      invalidatesTags: ['students'],
    }),
    updateStudentData: builder.mutation({
      query: (studentInfo) => ({
        url: `/student/${studentInfo.studentId}`,
        method: 'PUT',
        body: studentInfo.updatedData,
      }),
      invalidatesTags: ['singleStudent'],
    }),
    deleteStudentById: builder.mutation({
      query: (studentId) => ({
        url: `student/${studentId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['students'],
    }),
    getAlljobs: builder.query({
      query: () => '/jobs',
      providesTags: ['job'],
    }),
    getJobDetailsById: builder.query({
      query: (jobId) => `/jobs/${jobId}`,
      providesTags: ['job'],
    }),
  }),
});

export const {
  useCreateStudentMutation,
  useUpdateStudentDataMutation,
  useDeleteStudentByIdMutation,
  useGetAlljobsQuery,
  useGetJobDetailsByIdQuery,
} = jobsApi;
