export interface Application {
  id: string;
  userName: string;
  userEmail: string;
  userProfilePicture: string;
  status: 'in_progress' | 'selected' | 'rejected' | 'on_hold';
  jobTitle: string;
  appliedDate: string;
  resumeUrl: string;
  coverLetter: string;
}

export const applications: Application[] = [
  {
    id: '1',
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    userProfilePicture: '/placeholder.svg?height=40&width=40',
    status: 'in_progress',
    jobTitle: 'Senior React Developer',
    appliedDate: '2023-06-20',
    resumeUrl: '/john_doe_resume.pdf',
    coverLetter:
      'I am excited to apply for the Senior React Developer position...',
  },
  {
    id: '2',
    userName: 'Jane Smith',
    userEmail: 'jane.smith@example.com',
    userProfilePicture: '/placeholder.svg?height=40&width=40',
    status: 'selected',
    jobTitle: 'UX Designer',
    appliedDate: '2023-06-21',
    resumeUrl: '/jane_smith_resume.pdf',
    coverLetter: 'As a passionate UX Designer with 5 years of experience...',
  },
  {
    id: '3',
    userName: 'Mike Johnson',
    userEmail: 'mike.johnson@example.com',
    userProfilePicture: '/placeholder.svg?height=40&width=40',
    status: 'on_hold',
    jobTitle: 'Data Scientist',
    appliedDate: '2023-06-22',
    resumeUrl: '/mike_johnson_resume.pdf',
    coverLetter:
      'I am writing to express my strong interest in the Data Scientist role...',
  },
  {
    id: '4',
    userName: 'Emily Brown',
    userEmail: 'emily.brown@example.com',
    userProfilePicture: '/placeholder.svg?height=40&width=40',
    status: 'rejected',
    jobTitle: 'Marketing Specialist',
    appliedDate: '2023-06-23',
    resumeUrl: '/emily_brown_resume.pdf',
    coverLetter:
      'I am thrilled to apply for the Marketing Specialist position...',
  },
  {
    id: '5',
    userName: 'David Lee',
    userEmail: 'david.lee@example.com',
    userProfilePicture: '/placeholder.svg?height=40&width=40',
    status: 'in_progress',
    jobTitle: 'Frontend Developer',
    appliedDate: '2023-06-24',
    resumeUrl: '/david_lee_resume.pdf',
    coverLetter:
      'As a Frontend Developer with a passion for creating intuitive user interfaces...',
  },
];
