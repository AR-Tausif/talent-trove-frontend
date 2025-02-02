import { ICreateJobBody } from '@/interface/job';
import { baseApi } from '@/redux/api/baseApi';

const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (jobInfo: ICreateJobBody) => ({
        url: '/jobs/create-job',
        method: 'POST',
        body: { data: jobInfo },
      }),
      invalidatesTags: ['job'],
    }),
    getAlljobs: builder.query({
      query: () => '/jobs',
      providesTags: ['job'],
    }),
    getAlljobsByLoggedInEmployer: builder.query({
      query: () => '/jobs/employee/all',
      providesTags: ['job'],
    }),
    getJobDetailsById: builder.query({
      query: (jobId) => `/jobs/${jobId}`,
      providesTags: ['job'],
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
  }),
});

export const {
  useCreateJobMutation,
  useGetAlljobsQuery,
  useGetAlljobsByLoggedInEmployerQuery,
  useGetJobDetailsByIdQuery,
  useUpdateStudentDataMutation,
  useDeleteStudentByIdMutation,
} = jobsApi;
