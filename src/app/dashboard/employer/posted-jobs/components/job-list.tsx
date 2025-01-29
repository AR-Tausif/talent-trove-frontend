'use client';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, DollarSign, Clock, Loader } from 'lucide-react';
import { useGetAlljobsQuery } from '@/redux/features/job/jobsApi';
import { IJob } from '@/interface/job';

export function JobList() {
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
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs?.data.map((job: IJob) => (
        <Card key={job.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">company</p>
              </div>
              <Badge
                variant={
                  job?.employmentType.toLocaleLowerCase() === 'full-time'
                    ? 'default'
                    : 'secondary'
                }
              >
                {job?.employmentType}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {job?.location}
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                {job?.salaries?.minSalary} - {job?.salaries?.maxSalary}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Posted on {new Date(job.createdAt).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Apply by{' '}
                {new Date(job?.applicationDeadline).toLocaleDateString()}
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full">View More</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
