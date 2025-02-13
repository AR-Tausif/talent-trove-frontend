'use client';

import { useState } from 'react';
import { ApplicationList } from './components/application-list';
import { ApplicationDetails } from './components/application-details';
import { applications, type Application } from '@/data/mockApplications';

export default function ApplicationPage() {
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);

  const handleViewDetails = (application: Application) => {
    setSelectedApplication(application);
  };

  const handleCloseDetails = () => {
    setSelectedApplication(null);
  };

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-8">Job Applications</h1>
      <ApplicationList
        applications={applications}
        onViewDetails={handleViewDetails}
      />
    </main>
  );
}
