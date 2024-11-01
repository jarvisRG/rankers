import { Menu } from 'lucide-react';
import { Button, buttonVariants } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const Navbar = () => {
  return (
    <section className="py-6 bg-gradient-to-r from-red-600 to-red-800">
      <div className="container">
        <nav className="hidden justify-between lg:flex w-screen px-8">
          <div className="flex items-center gap-2">
            <img
              src="https://www.shadcnblocks.com/images/block/block-1.svg"
              className="w-8"
              alt="logo"
            />
            <span className="text-2xl font-bold text-white">Rankers Academy</span>
          </div>
          <div className="flex items-center gap-4">
            <Link
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'text-white hover:text-red-200 text-lg'
              )}
              href="/"
            >
              Home
            </Link>
            <Link
              className={cn(
                buttonVariants({
                  variant: 'ghost',
                }),
                'text-white hover:text-red-200 text-lg'
              )}
              href="/contact-us"
            >
              Contact Us
            </Link>
          </div>
        </nav>
        <div className="block lg:hidden">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <img
                src="https://www.shadcnblocks.com/images/block/block-1.svg"
                className="w-8"
                alt="logo"
              />
              <span className="text-xl font-bold text-white">Rankers Academy</span>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={'ghost'} size={'icon'} className="text-white hover:bg-red-700">
                  <Menu className="size-6" />
                </Button>
              </SheetTrigger>
              <SheetContent className="w-[300px] sm:w-[400px] bg-white">
                <SheetHeader>
                  <SheetTitle>
                    <div className="flex items-center gap-2">
                      <img
                        src="https://www.shadcnblocks.com/images/block/block-1.svg"
                        className="w-8"
                        alt="logo"
                      />
                      <span className="text-xl font-bold text-red-800">Rankers Academy</span>
                    </div>
                  </SheetTitle>
                </SheetHeader>
                <div className="my-8 flex flex-col gap-4">
                  <Link href="/" className="font-semibold text-red-800 hover:text-red-600 text-lg py-2 border-b border-red-200">
                    Home
                  </Link>
                  <Link href="/contact-us" className="font-semibold text-red-800 hover:text-red-600 text-lg py-2 border-b border-red-200">
                    Contact Us
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
