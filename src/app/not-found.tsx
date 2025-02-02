import { Button } from '@/components/ui/button';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="h-screen">
      <div className="flex justify-center items-center mb-16 ">
        <Link href={`/`}>
          <Button className=" bg-blue-500">
            <ArrowLeftIcon />
            Go to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
