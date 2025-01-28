'use client';

import { Button } from '@/components/ui';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { LayoutDashboard } from 'lucide-react';
interface IProps {
  params: {
    slug: string;
  };
}

function ProfilePage({ params }: IProps) {
  const { slug } = params;
  console.log(slug);
  return (
    <div className="container max-w-none flex h-full w-full flex-col items-center gap-6 bg-default-background py-12 overflow-auto">
      <div className="flex w-full max-w-[768px] flex-col items-start gap-12">
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-start justify-between">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
              {/* src="https://res.cloudinary.com/subframe/image/upload/v1723780655/uploads/302/vacffcy0kwezmeps1tbv.png" */}
            </Avatar>
            <div className="flex items-center justify-end gap-2">
              <Button
                variant="default"
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Message
              </Button>
              <Button
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
              >
                Connect
              </Button>
            </div>
          </div>
          <div className="flex w-full flex-col items-start gap-2">
            <div className="flex items-center gap-2">
              <span className="text-heading-2 font-heading-2 text-default-font">
                Aisha Patel
              </span>
              <LayoutDashboard
                className="text-heading-3 font-heading-3 text-default-font"
                name="FeatherVerified"
              />
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-caption font-caption text-default-font">
                @aisha_innovates
              </span>
              <span className="text-caption font-caption text-default-font">
                •
              </span>
              <span className="text-caption font-caption text-default-font">
                AI Ethics Researcher @ DeepMind
              </span>
              <span className="text-caption font-caption text-default-font">
                •
              </span>
              <span className="text-caption font-caption text-default-font">
                London, UK
              </span>
            </div>
          </div>
          {/* <div className="flex flex-wrap items-start gap-2">
                        <LayoutDashboard >AI Ethics</LayoutDashboard>
                        <LayoutDashboard >Machine Learning</LayoutDashboard>
                        <LayoutDashboard >Tech Policy</LayoutDashboard>
                        <LayoutDashboard >Diversity in Tech</LayoutDashboard>
                        <LayoutDashboard >STEM Education</LayoutDashboard>
                        <LayoutDashboard >Future of Work</LayoutDashboard>
                        <LayoutDashboard >+6</LayoutDashboard>
                    </div> */}
        </div>
        <div className="flex flex-col items-start gap-4">
          <span className="text-body font-body text-default-font">
            Aisha is a passionate AI Ethics Researcher, bridging the gap between
            technology and social responsibility. With a background in Computer
            Science and Philosophy, she leads initiatives at DeepMind to ensure
            AI systems are developed with fairness, transparency, and
            accountability. Aisha is a renowned speaker on AI ethics and has
            been featured in TED Talks and major tech conferences worldwide.
            She&#39;s the founder of &quot;CodeForAll&quot;, a non-profit
            organization promoting diversity in tech through mentorship and free
            coding workshops for underrepresented communities.
          </span>
          {/* <div className="flex w-full flex-wrap items-center gap-1">
                        <LayoutDashboard
                        />
                        <LayoutDashboard
                        />
                        <LayoutDashboard
                        />
                        <LayoutDashboard
                        />
                        <LayoutDashboard
                        />
                        <LayoutDashboard
                        />
                    </div> */}
        </div>
        <div className="flex w-full flex-col items-start gap-4">
          <div className="flex w-full items-center justify-between">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Featured Projects
            </span>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              View all
            </Button>
          </div>
          <div className="flex w-full flex-wrap items-start gap-4">
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <img
                className="h-40 w-full flex-none rounded-md object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1723780559/uploads/302/tkyvdicnwbc5ftuyysc0.png"
              />
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    AI Ethics Dashboard
                  </span>
                </div>
                <span className="line-clamp-3 text-body font-body text-subtext-color">
                  An interactive tool for assessing the ethical implications of
                  AI systems in real-time.
                </span>
              </div>
            </div>
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <img
                className="h-40 w-full flex-none rounded-md object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1723780568/uploads/302/lhjnvjqbfep7ar3v3fry.png"
              />
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    DiversiTech Connect
                  </span>
                </div>
                <span className="line-clamp-3 text-body font-body text-subtext-color">
                  A mobile app connecting underrepresented individuals with
                  mentors in the tech industry.
                </span>
              </div>
            </div>
            <div className="flex min-w-[240px] grow shrink-0 basis-0 flex-col items-start gap-4">
              <img
                className="h-40 w-full flex-none rounded-md object-cover"
                src="https://res.cloudinary.com/subframe/image/upload/v1723780577/uploads/302/hhmv6ey0yajkadnmcp0a.png"
              />
              <div className="flex w-full flex-col items-start gap-2">
                <div className="flex w-full items-center justify-between">
                  <span className="text-body-bold font-body-bold text-default-font">
                    AI Policy Simulator
                  </span>
                </div>
                <span className="line-clamp-3 text-body font-body text-subtext-color">
                  A platform for policymakers to simulate the impact of AI
                  regulations on various sectors.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full items-center justify-between">
            <span className="text-heading-3 font-heading-3 text-default-font">
              Experience
            </span>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              View all
            </Button>
          </div>
          <div className="flex w-full grow shrink-0 basis-0 flex-col items-start">
            <div className="flex w-full items-center gap-4 border-b border-solid border-neutral-border px-4 py-4">
              <div className="flex items-start gap-2">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780611/uploads/302/lbaowphtt6gfvgjr10b4.png"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start">
                <span className="w-full text-caption font-caption text-default-font">
                  January 2022 – present
                </span>
                <span className="w-full text-body-bold font-body-bold text-default-font">
                  AI Ethics Researcher at DeepMind
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 border-b border-solid border-neutral-border px-4 py-4">
              <div className="flex items-start gap-2">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780624/uploads/302/sxocuez05safdpfaztiz.png"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start">
                <span className="w-full text-caption font-caption text-default-font">
                  March 2019 – December 2021
                </span>
                <span className="w-full text-body-bold font-body-bold text-default-font">
                  Senior Policy Analyst at Ethics in AI Institute
                </span>
              </div>
            </div>
            <div className="flex w-full items-center gap-4 border-b border-solid border-neutral-border px-4 py-4">
              <div className="flex items-start gap-2">
                <img
                  className="h-8 w-8 flex-none rounded-md object-cover"
                  src="https://res.cloudinary.com/subframe/image/upload/v1723780638/uploads/302/r5hu6dtwogip7jl2gtbw.png"
                />
              </div>
              <div className="flex grow shrink-0 basis-0 flex-col items-start">
                <span className="w-full text-caption font-caption text-default-font">
                  June 2017 – February 2019
                </span>
                <span className="w-full text-body-bold font-body-bold text-default-font">
                  Project Lead at Tech for Good Foundation
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-start gap-2">
          <div className="flex w-full items-center gap-2">
            <span className="grow shrink-0 basis-0 text-heading-3 font-heading-3 text-default-font">
              Featured Publications
            </span>
            <Button
              onClick={(event: React.MouseEvent<HTMLButtonElement>) => {}}
            >
              View all
            </Button>
          </div>
          <div className="flex w-full flex-col items-start">
            <div className="flex w-full flex-wrap items-center gap-2 border-b border-solid border-neutral-border px-4 py-4">
              <span className="text-body-bold font-body-bold text-default-font">
                The Future of AI Governance: A Global Perspective
              </span>
              <span className="text-body font-body text-subtext-color">
                nature.com
              </span>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 border-b border-solid border-neutral-border px-4 py-4">
              <span className="text-body-bold font-body-bold text-default-font">
                Ethical Considerations in Machine Learning Bias
              </span>
              <span className="text-body font-body text-subtext-color">
                arxiv.org
              </span>
            </div>
            <div className="flex w-full flex-wrap items-center gap-2 border-b border-solid border-neutral-border px-4 py-4">
              <span className="text-body-bold font-body-bold text-default-font">
                Diversity as a Catalyst for Innovation in AI
              </span>
              <span className="text-body font-body text-subtext-color">
                acm.org
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
