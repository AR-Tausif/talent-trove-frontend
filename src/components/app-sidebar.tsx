'use client';

import * as React from 'react';
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  LayoutDashboard,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { NavProjects } from '@/components/nav-projects';
import { NavUser } from '@/components/nav-user';
import { TeamSwitcher } from '@/components/team-switcher';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';
import Link from 'next/link';
import { useAppSelector } from '@/redux/hooks';
import { Button } from './ui';

// This is sample data.

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = useAppSelector((state) => state.auth);
  console.log({ user });
  if (!user) {
    return (
      <div className="h-screen w-screen flex justify-center items-center">
        <p className="font-bold text-3xl">
          You are not authorized, please login again
        </p>
        <Link href="/">
          <Button className="bg-black">Back to Home</Button>
        </Link>
      </div>
    );
  }

  const employe_data = {
    user: {
      name: user.userId,
      email: user.role,
      avatar: '/avatars/profile.jpg',
    },
    teams: {
      name: 'Acme Inc',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    navMain: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
        isActive: true,
        items: [{ title: 'Employer Dashboard', url: '/dashboard/employer' }],
      },
      {
        title: 'Jobs',
        url: '',
        icon: SquareTerminal,
        items: [
          {
            title: 'Create job post',
            url: '/dashboard/employer/create-job',
          },
          {
            title: 'Get posted jobs',
            url: '/dashboard/employer/posted-jobs',
          },
        ],
      },
      {
        title: 'Applications',
        url: '#',
        icon: Bot,
        items: [
          {
            title: 'All applications',
            url: '/dashboard/employer/applications',
          },
        ],
      },
      {
        title: 'Settings',
        url: '#',
        icon: Settings2,
        items: [
          {
            title: 'General',
            url: '#',
          },
          {
            title: 'Team',
            url: '#',
          },
          {
            title: 'Billing',
            url: '#',
          },
          {
            title: 'Limits',
            url: '#',
          },
        ],
      },
    ],
  };
  const seeker_data = {
    user: {
      name: user.userId,
      email: user.role,
      avatar: '/avatars/profile.jpg',
    },
    teams: {
      name: 'Talent Trove',
      logo: GalleryVerticalEnd,
      plan: 'Enterprise',
    },
    navMain: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: LayoutDashboard,
        isActive: true,
        items: [
          {
            title: 'Job Seeker Dashboard',
            url: '/dashboard/job_seeker',
          },
        ],
      },
      {
        title: 'Jobs',
        url: '',
        icon: SquareTerminal,
        items: [
          {
            title: 'All applied jobs',
            url: '/dashboard/job_seeker/applied-jobs',
          },
        ],
      },

      {
        title: 'Settings',
        url: '#',
        icon: Settings2,
        items: [
          {
            title: 'General',
            url: '#',
          },
          {
            title: 'Privacy',
            url: '#',
          },
          {
            title: 'Billing',
            url: '#',
          },
          {
            title: 'Limits',
            url: '#',
          },
        ],
      },
    ],
  };
  let data;
  if (user.role == 'job_seeker') {
    data = seeker_data;
  }
  data = employe_data;
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} role={user.role!} />
        {/* <NavProjects projects={data.projects} /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
