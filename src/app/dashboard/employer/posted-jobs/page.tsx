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
import { Job, jobs } from '@/data/mockJobs';
import { JobList } from './components/job-list';

interface JobListProps {
  jobs: Job[];
}

export default function PostedJobsPage() {
  return <JobList jobs={jobs} />;
}
