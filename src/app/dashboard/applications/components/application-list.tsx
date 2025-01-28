'use client';

import type { Application } from '@/data/mockApplications';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useState } from 'react';

interface ApplicationListProps {
  applications: Application[];
  onViewDetails: (application: Application) => void;
}

export function ApplicationList({
  applications,
  onViewDetails,
}: ApplicationListProps) {
  const [sortColumn, setSortColumn] =
    useState<keyof Application>('appliedDate');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const sortedApplications = [...applications].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === 'asc' ? -1 : 1;
    if (a[sortColumn] > b[sortColumn]) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  });

  const handleSort = (column: keyof Application) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

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
    <div className="w-full overflow-auto">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Profile</TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort('userName')}
            >
              Name
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort('userEmail')}
            >
              Email
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort('jobTitle')}
            >
              Job Title
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort('status')}
            >
              Status
            </TableHead>
            <TableHead
              className="cursor-pointer"
              onClick={() => handleSort('appliedDate')}
            >
              Applied Date
            </TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedApplications.map((application) => (
            <TableRow key={application.id}>
              <TableCell>
                <Avatar>
                  <AvatarImage
                    src={application.userProfilePicture}
                    alt={application.userName}
                  />
                  <AvatarFallback>
                    {application.userName.charAt(0)}
                  </AvatarFallback>
                </Avatar>
              </TableCell>
              <TableCell className="font-medium">
                {application.userName}
              </TableCell>
              <TableCell>{application.userEmail}</TableCell>
              <TableCell>{application.jobTitle}</TableCell>
              <TableCell>
                <Badge
                  className={`${getStatusColor(application.status)} text-white`}
                >
                  {application.status.replace('_', ' ')}
                </Badge>
              </TableCell>
              <TableCell>
                {new Date(application.appliedDate).toLocaleDateString()}
              </TableCell>
              <TableCell className="text-right">
                <Button onClick={() => onViewDetails(application)}>
                  View Details
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
