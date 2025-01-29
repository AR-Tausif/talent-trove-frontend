'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
// import { DatePicker } from "@/components/ui/date-picker"
import { useState } from 'react';
import { RequirementsList } from './requirements-list';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui';
import { cn } from '@/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { Calendar } from '@/components/ui/calendar';
import { useCreateJobMutation } from '@/redux/features/job/jobsApi';
import { toast } from 'sonner';

const formSchema = z.object({
  jobTitle: z.string().min(2, {
    message: 'Job title must be at least 2 characters.',
  }),
  jobType: z.enum(['full-time', 'part-time'], {
    required_error: 'You need to select a job type.',
  }),
  jobDescription: z.string().min(10, {
    message: 'Job description must be at least 10 characters.',
  }),
  officeLocation: z.string().min(2, {
    message: 'Office location must be at least 2 characters.',
  }),
  salaryRangeMin: z.string().regex(/^\d+$/, {
    message: 'Please enter a valid number for minimum salary.',
  }),
  salaryRangeMax: z.string().regex(/^\d+$/, {
    message: 'Please enter a valid number for maximum salary.',
  }),
  applicationDeadline: z.date({
    required_error: 'Please select an application deadline.',
  }),
});

export function JobPostForm() {
  const [requirements, setRequirements] = useState<string[]>([]);
  const [createJob, { data, error, isLoading }] = useCreateJobMutation();
  // const dispatch = useDispatch();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      jobTitle: '',
      jobType: 'full-time',
      jobDescription: '',
      officeLocation: '',
      salaryRangeMin: '',
      salaryRangeMax: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('holla shit');
    console.log(values);
    console.log('Requirements:', requirements);
    const job = {
      title: values.jobTitle,
      employmentType: values.jobType,
      description: values.jobDescription,
      location: values.officeLocation,
      applicationDeadline: values.applicationDeadline,
    };
    const jobInfo = {
      job: job,
      requirements,
      salary: {
        minSalary: Number(values.salaryRangeMin),
        maxSalary: Number(values.salaryRangeMax),
        // currency: string,
      },
    };
    const toastId = toast.loading('Please wait for moments');
    try {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const createJobResponse: any = await createJob(jobInfo).unwrap();

      console.log(createJobResponse);
      toast.success(createJobResponse.message, { id: toastId });
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error: any) {
      toast.error(error?.data?.message || 'Something went wrong!', {
        id: toastId,
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="jobTitle"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Title</FormLabel>
              <FormControl>
                <Input placeholder="e.g. Senior React Developer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="jobType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Job Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="full-time" />
                    </FormControl>
                    <FormLabel className="font-normal">Full-time</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="part-time" />
                    </FormControl>
                    <FormLabel className="font-normal">Part-time</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="jobDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Job Description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Describe the job role and responsibilities"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <RequirementsList
          requirements={requirements}
          setRequirements={setRequirements}
        />
        <FormField
          control={form.control}
          name="officeLocation"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Office Location</FormLabel>
              <FormControl>
                <Input placeholder="e.g. New York, NY" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="salaryRangeMin"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Minimum Salary</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 50000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="salaryRangeMax"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Maximum Salary</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 80000" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="applicationDeadline"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Date of birth</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant={'outline'}
                      className={cn(
                        'w-[240px] pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground'
                      )}
                    >
                      {field.value ? (
                        format(field.value, 'PPP')
                      ) : (
                        <span>Pick a date</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) =>
                      date > new Date() || date < new Date('1900-01-01')
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
              <FormDescription>
                Your date of birth is used to calculate your age.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit Job Post</Button>
      </form>
    </Form>
  );
}
