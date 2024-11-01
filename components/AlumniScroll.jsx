import React from 'react';
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from 'next/image';

const alumni = [
  { name: 'Priya Sharma', institute: 'IIT Delhi', year: '2023', image: '/alumni/priya.jpg' },
  { name: 'Rahul Verma', institute: 'IIIT Hyderabad', year: '2022', image: '/alumni/rahul.jpg' },
  { name: 'Ananya Gupta', institute: 'NIT Trichy', year: '2023', image: '/alumni/ananya.jpg' },
  { name: 'Arjun Patel', institute: 'IIT Bombay', year: '2022', image: '/alumni/arjun.jpg' },
  { name: 'Neha Singh', institute: 'IIIT Allahabad', year: '2023', image: '/alumni/neha.jpg' },
  { name: 'Vikram Reddy', institute: 'NIT Surathkal', year: '2022', image: '/alumni/vikram.jpg' },
  // Add more alumni as needed
];

const AlumniScroll = () => {
  return (
    <div className="bg-red-50 py-12">
      <h2 className="text-3xl font-bold text-center text-red-800 mb-8">Our Successful Alumni</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex animate-scroll">
          {[...alumni, ...alumni].map((alum, index) => (
            <div key={index} className="inline-block w-64 p-4 ">
              <div className="bg-white rounded-2xl shadow-md p-4 text-center">
                <Image
                  src={alum.image}
                  alt={alum.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
                <h3 className="font-semibold text-lg">{alum.name}</h3>
                <p className="text-red-600">{alum.institute}</p>
                <p className="text-sm text-gray-500">Batch of {alum.year}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default AlumniScroll;
