import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import Link from 'next/link';

const Contact2 = () => {
  return (
    <section className="py-32 bg-gradient-to-r from-red-500 to-red-600 min-h-screen">
      <div className="container max-md:w-80 max-md:ml-8 ">
        <div className="mx-auto bg-white py-10 max-sm:rounded-xl px-2 rounded-2xl flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20 ">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                Contact Us
              </h1>
              <p className="text-muted-foreground">
                We are available for questions, feedback, or collaboration
                opportunities. Let us know how we can help!
              </p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                Contact Details
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">Phone: </span>
                  <Link href="tel:+917508017339" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                    (+91) 75080-17339
                  </Link>
                </li>
                <li>
                  <span className="font-bold">Whatsapp: </span>
                  <Link href="https://wa.me/+917508017339" target="_blank" rel="noopener noreferrer" className="hover:underline text-blue-600">
                    (+91) 75080-17339
                  </Link>
                </li>
                <li>
                  <span className="font-bold">Email: </span>
                  <Link href="mailto:learnatrankersacademy@gmail.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-blue-600">
                    learnatrankersacademy@gmail.com
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">First Name</Label>
                <Input type="text" id="firstname" placeholder="First Name" />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">Last Name</Label>
                <Input type="text" id="lastname" placeholder="Last Name" />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">Email</Label>
              <Input type="email" id="email" placeholder="Email" />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">Subject</Label>
              <Input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">Message</Label>
              <Textarea placeholder="Type your message here." id="message" />
            </div>
            <Button className="w-full bg-black text-white hover:bg-zinc-900 rounded-xl">Send Message</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact2;
