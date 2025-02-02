import { IJob } from '@/interface/job';
import { JobCard } from '../cards/JobCard';
import { SectionHeader } from '../shared';

interface Props extends React.ComponentProps<'div'> {}

export const FeatureJob = ({ ...props }: Props) => {
  const job: IJob = {
    id: 1,
    title: 'Senior Engineer',
    employmentType: 'Full-Time',
    description: 'Senior Engineer is the play role of the infinity',
    location: 'Bangladesh',
    applicationDeadline: '2024-10-20',
    createdBy: 1,
    createdAt: '2024-25-20',
    updatedAt: '2024-25-20',
    requirements: [{ id: 1, jobId: 1, requirement: 'string' }],
    salaries: {
      id: 1,
      jobId: 1,
      minSalary: 10,
      maxSalary: 100,
      currency: 'usd',
    },
  };
  return (
    <div {...props}>
      <SectionHeader
        title="Featured Jobs"
        subtitle="Top Opportunities Await"
        description="Know your worth and find the job that qualifies your life"
      />

      <div className="  grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6 px-12">
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
        <JobCard job={job} />
      </div>
    </div>
  );
};
