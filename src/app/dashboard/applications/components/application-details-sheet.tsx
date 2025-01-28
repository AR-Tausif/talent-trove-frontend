import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ApplicationDetails } from './application-details';
import { Application } from '@/data/mockApplications';
interface ApplicationDetailsProps {
  application: Application;
}
export function ApplicationDetailsSheet({
  application,
}: ApplicationDetailsProps) {
  return (
    <SheetContent side="bottom" className="bg-gray-200">
      <ApplicationDetails application={application} />
      <SheetFooter>
        <SheetClose asChild>
          <Button type="button">Close</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  );
}
