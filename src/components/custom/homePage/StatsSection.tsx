"use client"

import React from 'react'
import { stats} from '@/lib/data';
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";


const StatsSection = () => {
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  return (
    <section ref={ref} className="py-16 bg-gray-50 my-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col items-center">
                <Icon className="w-10 h-10 text-blue-600 mb-2" />
                <p className="text-4xl font-bold text-blue-600">
                  {inView ? (
                    <CountUp
                      end={stat.value}
                      duration={stat.duration}
                      decimals={stat.decimals}
                      suffix={stat.suffix}
                    />
                  ) : (
                    0
                  )}
                </p>
                <p className="mt-1 text-sm text-gray-700">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default StatsSection