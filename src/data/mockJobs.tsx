export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: 'Full-time' | 'Part-time';
  postedDate: string;
  applicationDeadline: string;
}

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Senior React Developer',
    company: 'TechCorp',
    location: 'San Francisco, CA',
    salary: '$120,000 - $160,000',
    type: 'Full-time',
    postedDate: '2023-06-01',
    applicationDeadline: '2023-07-15',
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'DesignHub',
    location: 'New York, NY',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    postedDate: '2023-06-03',
    applicationDeadline: '2023-07-17',
  },
  {
    id: '3',
    title: 'Data Scientist',
    company: 'AI Innovations',
    location: 'Boston, MA',
    salary: '$110,000 - $150,000',
    type: 'Full-time',
    postedDate: '2023-06-05',
    applicationDeadline: '2023-07-20',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    company: 'CloudSolutions',
    location: 'Seattle, WA',
    salary: '$100,000 - $140,000',
    type: 'Full-time',
    postedDate: '2023-06-07',
    applicationDeadline: '2023-07-22',
  },
  {
    id: '5',
    title: 'Marketing Specialist',
    company: 'GrowthMarketing',
    location: 'Chicago, IL',
    salary: '$60,000 - $80,000',
    type: 'Full-time',
    postedDate: '2023-06-09',
    applicationDeadline: '2023-07-24',
  },
  {
    id: '6',
    title: 'Frontend Developer',
    company: 'WebWizards',
    location: 'Austin, TX',
    salary: '$80,000 - $110,000',
    type: 'Full-time',
    postedDate: '2023-06-11',
    applicationDeadline: '2023-07-26',
  },
  {
    id: '7',
    title: 'Product Manager',
    company: 'InnovateTech',
    location: 'Los Angeles, CA',
    salary: '$100,000 - $130,000',
    type: 'Full-time',
    postedDate: '2023-06-13',
    applicationDeadline: '2023-07-28',
  },
  {
    id: '8',
    title: 'Content Writer',
    company: 'ContentKing',
    location: 'Remote',
    salary: '$50,000 - $70,000',
    type: 'Part-time',
    postedDate: '2023-06-15',
    applicationDeadline: '2023-07-30',
  },
  {
    id: '9',
    title: 'Mobile App Developer',
    company: 'AppMasters',
    location: 'Miami, FL',
    salary: '$90,000 - $120,000',
    type: 'Full-time',
    postedDate: '2023-06-17',
    applicationDeadline: '2023-08-01',
  },
  {
    id: '10',
    title: 'Sales Representative',
    company: 'SalesPro',
    location: 'Denver, CO',
    salary: '$60,000 - $100,000',
    type: 'Full-time',
    postedDate: '2023-06-19',
    applicationDeadline: '2023-08-03',
  },
];
