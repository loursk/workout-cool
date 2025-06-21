"use client";

import React, { useState, useEffect } from "react";

const WorkoutStreakHeader = () => {

    // This component displays a workout streak header with the last 5 days of workouts.
    // Each day is represented by a box that shows the day name and number.
    const [workouts, setWorkouts] = useState<any[]>([]);

    useEffect(() => {
        const storedWorkouts = localStorage.getItem("workouts");
        if (storedWorkouts) {
            setWorkouts(JSON.parse(storedWorkouts));
        }
    }, []);


  return (
    <div className="hidden md:flex md:items-center md:justify-center md:gap-1">
            {Array.from({ length: 5 }, (_, index) => {
                const date = new Date();
                date.setDate(date.getDate() - (4 - index));
                const dayName = date.toLocaleDateString("en-US", { weekday: "short" });
                const dayNumber = date.getDate();
                
                return (
                    <div className="tooltip tooltip-bottom" data-tip={index === 4 ? "Today" : `${dayName} ${dayNumber}`} key={index}>
                        <button className={`flex flex-row items-center border-2 rounded-md transition-all duration-2000 ease-in-out 
                        ${index === 4 ? "animate-shine" : ""}
                            
                        ${
                        Math.random() > 0.5 
                            ? "border-emerald-400 dark:border-emerald-500 bg-emerald-100 dark:bg-emerald-800/20 shadow-emerald-200/50 dark:shadow-emerald-900/50 shadow-lg w-7 h-7 hover:bg-emerald-500 dark:hover:bg-emerald-600" 
                            : "bg-gray-500 border-none w-6 h-6 animate-shine"
                        }`}>
                            <span className="sr-only text-sm">{dayName}</span>
                            <span className="sr-only text-sm">{dayNumber}</span>
                        </button>
                    {/* <ShineBorder
                        borderRadius={6}
                        borderWidth={2}
                        className="min-h-0 min-w-0 w-7 h-7 p-0 bg-emerald-100 dark:bg-emerald-800/20 hover:bg-emerald-500 dark:hover:bg-emerald-600 transition-colors cursor-pointer"
                        color={["#10b981", "#059669"]} // emerald colors
                        duration={10}
                    >
                        <div className="w-full h-full flex items-center justify-center">
                            <span className="sr-only text-sm">{dayName}</span>
                            <span className="sr-only text-sm">{dayNumber}</span>
                        </div>
                    </ShineBorder> */}
                    </div>

                );
            })}
    </div>
    
  );
};


export { WorkoutStreakHeader };