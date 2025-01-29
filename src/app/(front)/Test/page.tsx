import { JobCard } from '@/components/cards/JobCard';
import { CategoryOfJob } from '@/components/cards/JobCategoryCards';
import { IJob } from '@/interface/job';

const Text = () => {
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
    <div>
      <CategoryOfJob />
      <JobCard job={job} />
    </div>
  );
};

export default Text;
