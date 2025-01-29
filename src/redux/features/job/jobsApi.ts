import { ICreateJobBody } from '@/interface/job';
import { baseApi } from '@/redux/api/baseApi';

const jobsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createJob: builder.mutation({
      query: (jobInfo: ICreateJobBody) => ({
        url: '/jobs/create-job',
        method: 'POST',
        body: jobInfo,
      }),
      invalidatesTags: ['job'],
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
  useCreateJobMutation,
  useUpdateStudentDataMutation,
  useDeleteStudentByIdMutation,
  useGetAlljobsQuery,
  useGetJobDetailsByIdQuery,
} = jobsApi;
