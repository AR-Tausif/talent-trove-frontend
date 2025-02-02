import { JobPostForm } from './components/job-post-form';

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Create a Job Post</h1>
      <JobPostForm />
    </main>
  );
}
