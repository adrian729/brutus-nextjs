import Link from "next/link";
import { TransitionLink } from "../utils/TransitionLink";
export const Sidebar = () => {
  return (
    <nav className='p-4 w-fit h-full bg-blue-400'>
      <div className='flex flex-col items-center gap-6'>
        <Link href='/'>Home</Link>
        <TransitionLink href='/about'>About</TransitionLink>
        <TransitionLink href='/contact'>Contact</TransitionLink>
      </div>
    </nav>
  );
};
