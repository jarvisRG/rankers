import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const TeacherTrio = () => {
  const teachers = [
    {
      name: "Er. Vinod Gangwar",
      subject: "Physics",
      avatar: "/images/jai-rai.jpg",
      achievements: {
        IITians: 100,
        NITians: 150,
        MBBS: 50
      }
    },
    {
      name: "Er. Bishan Gupta",
      subject: "Chemistry",
      avatar: "/images/anita-sharma.jpg",
      achievements: {
        IITians: 80,
        NITians: 200,
        MBBS: 100
      }
    },
    {
      name: "Er. Vipul Aggarwal",
      subject: "Mathematics",
      avatar: "/images/rajesh-kumar.jpg",
      achievements: {
        IITians: 120,
        NITians: 180,
        MBBS: 70
      }
    }
  ];

  return (
    <div className="bg-gradient-to-r from-red-700 to-red-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Our Star Teacher Trio</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teachers.map((teacher, index) => (
            <Card key={index} className="bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300 border-8 border-red-200">
              <CardHeader className="text-center bg-red-50">
                <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-red-500">
                  <AvatarImage src={teacher.avatar} alt={teacher.name} />
                  <AvatarFallback className="bg-red-200 text-red-700">{teacher.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold text-red-800">{teacher.name}</CardTitle>
                <p className="text-red-600 font-semibold">{teacher.subject} Expert</p>
              </CardHeader>
              <CardContent className="pt-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-sm border-red-500 text-red-700">IITians</Badge>
                    <span className="font-bold text-lg text-red-800">{teacher.achievements.IITians}+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-sm border-red-500 text-red-700">NITians</Badge>
                    <span className="font-bold text-lg text-red-800">{teacher.achievements.NITians}+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <Badge variant="outline" className="text-sm border-red-500 text-red-700">MBBS</Badge>
                    <span className="font-bold text-lg text-red-800">{teacher.achievements.MBBS}+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-12">
          <p className="text-2xl font-bold text-white">
            Total Success: {" "}
            <span className="text-yellow-300">
              100+ IITians,{" "}
              400+ NITians,{" "}
              200+ MBBS
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TeacherTrio;
