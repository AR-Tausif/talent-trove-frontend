import type { Application } from '@/data/mockApplications';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

interface ApplicationDetailsProps {
  application: Application;
  onClose: () => void;
}

export function ApplicationDetails({
  application,
  onClose,
}: ApplicationDetailsProps) {
  const getStatusColor = (status: Application['status']) => {
    switch (status) {
      case 'in_progress':
        return 'bg-blue-500';
      case 'selected':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      case 'on_hold':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarImage
              src={application.userProfilePicture}
              alt={application.userName}
            />
            <AvatarFallback>{application.userName.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{application.userName}</CardTitle>
            <p className="text-sm text-muted-foreground">
              {application.userEmail}
            </p>
          </div>
        </div>
        <Badge className={`${getStatusColor(application.status)} text-white`}>
          {application.status.replace('_', ' ')}
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold">Job Title</h3>
          <p>{application.jobTitle}</p>
        </div>
        <div>
          <h3 className="font-semibold">Applied Date</h3>
          <p>{new Date(application.appliedDate).toLocaleDateString()}</p>
        </div>
        <div>
          <h3 className="font-semibold">Resume</h3>
          <Button variant="outline" asChild>
            <a
              href={application.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
          </Button>
        </div>
        <div>
          <h3 className="font-semibold">Cover Letter</h3>
          <p className="whitespace-pre-wrap">{application.coverLetter}</p>
        </div>
        <Button onClick={onClose} className="w-full">
          Close
        </Button>
      </CardContent>
    </Card>
  );
}
