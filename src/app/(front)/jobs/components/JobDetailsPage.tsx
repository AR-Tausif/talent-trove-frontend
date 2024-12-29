import Link from 'next/link';
import React from 'react';

export default function JobDetailsPage() {
  return (
    <React.Fragment>
      <div className="bg-gray-50/90 py-6 w-full">
        <div className="container flex items-center justify-center px-4 text-center md:px-6">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Senior Product Designer
            </h1>
            <div className="inline-flex items-center gap-2 text-sm font-medium md:gap-4">
              <p className="text-gray-500">at</p>
              <img
                src="/placeholder.svg"
                width="120"
                height="40"
                alt="Logo"
                className="aspect-[3/1] overflow-hidden rounded-lg object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container grid gap-10 px-4 py-8 text-base md:gap-16 md:px-6 lg:grid-cols-4 lg:gap-12 xl:gap-20">
        <div className="space-y-4 lg:col-start-2 lg:col-span-3 xl:space-y-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
              Senior Product Designer
            </h2>
            <p className="text-gray-500 dark:text-gray-400">Full-Time</p>
          </div>
          <div className="space-y-4 text-lg/relaxed lg:space-y-6 xl:text-xl/relaxed">
            <div>
              <h3 className="text-xl font-semibold">Description</h3>
              <p>
                We are looking for a Senior Product Designer who will be
                responsible for delivering the best online user experience,
                which makes your role extremely important for our success and
                ensuring customer satisfaction and loyalty. The ideal candidate
                will have experience in working with numerous different design
                platforms such as mobile and desktop. The candidate will also
                have experience in working with complex backend and frontend
                systems.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Requirements</h3>
              <ul className="list-disc list-inside">
                <li>5+ years of experience as a Product Designer</li>
                <li>
                  Proficient in design software such as Figma, Sketch, or Adobe
                  XD
                </li>
                <li>Experience with user interface design</li>
                <li>Strong understanding of usability principles</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="space-y-4 border-gray-200 border rounded-lg border-gray-200 lg:col-start-1 lg:row-start-1 lg:space-y-6 dark:border-gray-800">
          <div className="p-4">
            <h3 className="text-xl font-semibold">Location</h3>
            <p className="text-sm font-normal">San Francisco, CA</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Salary Range</h3>
            <p className="text-sm font-normal">$120,000 - $150,000</p>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold">Application Deadline</h3>
            <p className="text-sm font-normal">April 30, 2023</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row lg:col-start-4 lg:gap-4 justify-center">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
            prefetch={false}
          >
            Apply for this job
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}
