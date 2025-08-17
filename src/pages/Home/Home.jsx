import React from "react";

export default function Hey() {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="h-screen flex items-center justify-center bg-indigo-400 rounded-b-3xl">
        <h1 className="text-white text-5xl font-bold">University Name</h1>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 flex justify-center">
        <div className="bg-white p-8 max-w-4xl rounded-3xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">
            About Our University
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our university is committed to excellence in education, research, and
            innovation. With a vibrant campus community, diverse programs, and a
            rich history of academic success, we empower students to reach their
            full potential and shape the future.
          </p>
        </div>
      </section>

      {/* Alternating Sections */}
      <section className="px-6 py-16 space-y-16">
        {/* Section 1 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              World-Class Facilities
            </h3>
            <p className="text-gray-600">
              Our campus features modern laboratories, advanced libraries, and
              state-of-the-art classrooms designed for immersive learning.
            </p>
          </div>
          <div className="bg-blue-300 h-64 rounded-3xl"></div>
        </div>

        {/* Section 2 (Swapped) */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-green-300 h-64 rounded-3xl"></div>
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Diverse Academic Programs
            </h3>
            <p className="text-gray-600">
              Offering a wide range of courses in science, technology, arts, and
              humanities, our curriculum is designed to prepare students for
              global careers.
            </p>
          </div>
        </div>

        {/* Section 3 */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-bold mb-3 text-gray-800">
              Vibrant Campus Life
            </h3>
            <p className="text-gray-600">
              From cultural festivals to sports events, our campus is a hub of
              activities that foster personal growth and lifelong friendships.
            </p>
          </div>
          <div className="bg-pink-300 h-64 rounded-3xl"></div>
        </div>
      </section>
    </div>
  );
}