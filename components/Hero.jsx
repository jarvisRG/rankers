import React from 'react'
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-4 shadow-text max-md:text-3xl">Excel in JEE, NEET & Board Exams</h2>
          <p className="text-2xl mb-8 shadow-text max-md:text-xl">Expert tutoring for Class 11 & 12 in Physics, Chemistry, and Mathematics</p>
          <Button size="lg" className="bg-white text-red-600 hover:bg-red-100 rounded-xl">Enroll Now</Button>
        </div>
      </section>
  )
}
