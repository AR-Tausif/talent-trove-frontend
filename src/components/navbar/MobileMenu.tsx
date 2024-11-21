import { initialItems } from '@/data';
import Link from 'next/link';
import { Button } from '../ui';

const MobileMenu = () => {
  return (
    <div className="md:hidden ">
      <ul className="flex flex-col flex-start px-5 bg-white h-full rounded-3xl leading-[0.4px] p-5 mt-[0.2px]">
        {initialItems.map((item) => (
          <li
            key={item.id}
            className=" hover:bg-slate-100 p-[8px] hover:rounded-[10px] py-4"
          >
            <Link href={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className="flex  gap-4 space-x-2">
        <Button variant="outline">Login</Button>
        <Button>Register</Button>
      </div>
    </div>
  );
};
export default MobileMenu;
