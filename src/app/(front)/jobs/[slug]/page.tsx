import JobDetailsPage from '../components/JobDetailsPage';
type TParams = {
  slug: string;
};
const Page = ({ params }: { params: TParams }) => {
  const { slug } = params;
  console.log(slug);
  return (
    <div className="mt-14 ">
      <JobDetailsPage slug={slug} />
    </div>
  );
};

export default Page;
