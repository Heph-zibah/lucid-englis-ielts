import React from 'react'
import { GraduationCap, Clock, Users } from "lucide-react";

const WhyChooseUs = () => {
  return (
    <section className=" container py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6">Why Choose Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="flex flex-col items-center space-y-2 rounded-lg shadow-lg p-3 drop-shadow-2xl border border-gray-200">
          <GraduationCap className="h-8 w-8 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Expert Tutors</h3>
          <p>
            Learn from industry professionals with years of real-world
            experience.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg shadow-lg p-3 drop-shadow-2xl border border-gray-200">
          <Clock className="h-8 w-8 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Flexible Learning</h3>
          <p>
            Study at your own pace, anytime and anywhere with our online
            resources.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg shadow-lg p-3 drop-shadow-2xl border border-gray-200">
          <Users className="h-8 w-8 text-primary mx-auto" />
          <h3 className="text-xl font-semibold">Community Support</h3>
          <p>
            Join a thriving community of learners and mentors to support your
            journey.
          </p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs