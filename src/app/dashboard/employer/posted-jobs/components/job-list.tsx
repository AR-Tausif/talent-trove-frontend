import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Calendar, DollarSign, Clock } from 'lucide-react';
import { Job } from '@/data/mockJobs';

interface JobListProps {
  jobs: Job[];
}

export function JobList({ jobs }: JobListProps) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {jobs?.map((job) => (
        <Card key={job.id} className="flex flex-col">
          <CardHeader>
            <CardTitle className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-sm text-muted-foreground">{job.company}</p>
              </div>
              <Badge
                variant={job.type === 'Full-time' ? 'default' : 'secondary'}
              >
                {job.type}
              </Badge>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-grow">
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <MapPin className="mr-2 h-4 w-4" />
                {job.location}
              </div>
              <div className="flex items-center">
                <DollarSign className="mr-2 h-4 w-4" />
                {job.salary}
              </div>
              <div className="flex items-center">
                <Clock className="mr-2 h-4 w-4" />
                Posted on {new Date(job.postedDate).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Calendar className="mr-2 h-4 w-4" />
                Apply by{' '}
                {new Date(job.applicationDeadline).toLocaleDateString()}
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
