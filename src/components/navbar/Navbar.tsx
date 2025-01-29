'use client';

import { FaBarsStaggered } from 'react-icons/fa6';
import { IoCloseSharp } from 'react-icons/io5';
import { useState } from 'react';
import Link from 'next/link';
import MobileMenu from './MobileMenu';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { initialItems } from '@/data';
import Logo from '../icons/Logo';

import { Button } from '../ui';
import { useAppSelector } from '@/redux/hooks';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import { SidebarMenuAction } from '../ui/sidebar';
import { ArrowUpRight, StarOff, Trash2 } from 'lucide-react';

const NavItems = () => {
  return (
    <ul className="hidden md:flex space-x-8">
      {initialItems.map((item) => (
        <li key={item.id} className=" hover:text-blue-300">
          <Link href={item.path}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

const Navbar = () => {
  const [isActive, setIsActive] = useState(false);
  const { user } = useAppSelector((state) => state.auth);
  return (
    <header className="p-3 fixed w-[100vw] top-0 z-50">
      <div className="container mx-auto  max-w-[1104px]  rounded-3xl  px-5 py-4 mt-5   opacity-[90%]   glass-effect">
        <nav className="flex justify-between items-center ">
          {/* <div className="text-2xl font-bold">Logo</div> */}
          <Logo />
          <NavItems />
          <div className="flex gap-4 space-x-2 mx-5 items-center">
            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <SidebarMenuAction showOnHover>
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <span className="sr-only">More</span>
                  </SidebarMenuAction>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                  className="w-56 rounded-lg"
                  // side={useIsMobile ? "bottom" : "right"}
                  // align={isMobile ? "end" : "start"}
                >
                  <DropdownMenuItem>
                    <StarOff className="text-muted-foreground" />
                    <span>Remove from Favorites</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <link className="text-muted-foreground" />
                    <span>Copy Link</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <ArrowUpRight className="text-muted-foreground" />
                    <span>Open in New Tab</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Trash2 className="text-muted-foreground" />
                    <span>Delete</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="md:flex hidden gap-4 space-x-2">
                <Link href="/auth/login">
                  <Button variant="outline">Login</Button>
                </Link>
                <Link href="/auth/register">
                  <Button>Register</Button>
                </Link>
              </div>
            )}

            <div className="md:hidden">
              <Popover>
                <PopoverTrigger>
                  {isActive ? (
                    <IoCloseSharp
                      className="text-3xl"
                      onClick={() => setIsActive(!isActive)}
                    />
                  ) : (
                    <FaBarsStaggered
                      className="text-3xl"
                      onClick={() => setIsActive(!isActive)}
                    />
                  )}
                </PopoverTrigger>
                <PopoverContent className="max-w-52  data-[side=left]:slide-in-from-right-10 -translate-x-6">
                  <MobileMenu />
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
