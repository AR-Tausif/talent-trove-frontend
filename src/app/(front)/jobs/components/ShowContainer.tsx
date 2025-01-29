'use client';

import { JobCard } from '@/components/cards/JobCard';
import { JobSearch } from './JobSearch';
import { JobFilters } from './JobFilters';
import Link from 'next/link';
import { useGetAlljobsQuery } from '@/redux/features/student/jobsApi';
import { Loader } from 'lucide-react';
import { number, string } from 'yup';
import { IJob } from '../../../../../interface/job';

interface Props extends React.ComponentProps<'div'> {}

export const ShowJobs = ({ ...props }: Props) => {
  const { data: jobs, isLoading } = useGetAlljobsQuery('');
  if (isLoading) {
    return (
      <div className="flex gap-2 items-center h-[50%] justify-center">
        <p className="text-xl text-blue-500 mr-4">Please Wait...</p>
        <Loader className="animate-spin" />
      </div>
    );
  }
  return (
    <div
      className=" pt-16 pb-12 flex justify-between p-6 lg:p-0  flex-col-reverse mx-auto  max-w-7xl lg:flex-row"
      {...props}
    >
      <div className="w-full   ">
        <JobSearch className=" w-full mx-2" />

        <h1 className="px-4 text-3xl font-bold mb-6 mt-7">Latest Jobs</h1>

        <div id="job container" className="space-y-3">
          {jobs?.data?.map((job: IJob) => (
            <Link href={`/jobs/${job.id}`} key={job.id}>
              <JobCard job={job} />
            </Link>
          ))}
        </div>
      </div>

      <JobFilters />
    </div>
  );
};
