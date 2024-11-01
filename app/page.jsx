import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Navbar from '@/components/Navbar';
import AlumniScroll from '@/components/AlumniScroll';
import Hero from '@/components/Hero';
import TeacherTrio from '@/components/TeacherTrio';

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white text-gray-800">
      {/* Header */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <Hero />


      <AlumniScroll />
      <TeacherTrio />

      {/* Course Offerings */}
      <section className="py-16">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-800">Our Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['JEE Preparation', 'NEET Preparation', 'Board Exam Excellence'].map((course, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-red-500 to-red-600 text-white">
                  <CardTitle>{course}</CardTitle>
                  <CardDescription className="text-red-100">
                    {index === 0 && "Comprehensive coaching for JEE Main & Advanced"}
                    {index === 1 && "Focused training for medical entrance exams"}
                    {index === 2 && "Boost your performance in Class 11 & 12 board exams"}
                  </CardDescription>
                </CardHeader>
                <CardContent className="mt-4">
                  <ul className="list-disc list-inside">
                    <li>Physics</li>
                    <li>Chemistry</li>
                    <li>{index === 1 ? 'Biology' : 'Mathematics'}</li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-red-800">Student Testimonials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'Priya Sharma', text: 'Rankers Academy helped me secure a top rank in JEE Advanced. The teachers are exceptional!', avatar: 'PS' },
              { name: 'Rahul Verma', text: 'Thanks to Rankers Academy, I aced my NEET exam. Their study material is unparalleled.', avatar: 'RV' },
              { name: 'Ananya Gupta', text: 'I scored 95% in my board exams. Rankers Academy\'s guidance was crucial to my success.', avatar: 'AG' }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="flex flex-col items-center text-center pt-6">
                  <Avatar className="w-20 h-20 mb-4">
                    <AvatarFallback className="bg-red-200 text-red-800">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <p className="mb-4 italic">"{testimonial.text}"</p>
                  <p className="font-bold text-red-800">{testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-red-600 to-red-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Rankers Academy. All rights reserved.</p>
          <p className="mt-2">Empowering students to achieve their academic goals.</p>
        </div>
      </footer>
    </div>
  )
}
