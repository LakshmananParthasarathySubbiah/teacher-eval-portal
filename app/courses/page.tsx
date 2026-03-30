"use client";

import { useState, useEffect } from "react";
import { Course } from "@/types";
import AddCourseForm from "@/components/AddCourseForm";
import Link from "next/link";

export default function CoursesPage() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const res = await fetch('/api/courses');
      if (res.ok) {
        const data = await res.json();
        setCourses(data);
      }
    } catch (error) {
      console.error('Failed to fetch courses', error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCourse = async (newCourse: Omit<Course, "id" | "createdAt">) => {
    try {
      const res = await fetch('/api/courses', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newCourse),
      });
      if (res.ok) {
        const addedCourse = await res.json();
        setCourses([...courses, addedCourse]);
        setShowAddForm(false);
      }
    } catch (error) {
      console.error('Failed to add course', error);
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Course Management</h1>
        <button
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
        >
          <span>+</span> Add New Course
        </button>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-bold text-gray-800">{course.name}</h3>
              <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full font-semibold">
                {course.code}
              </span>
            </div>
            
            <div className="space-y-2 text-sm text-gray-600 mb-4">
              {course.department && (
                <p><span className="font-medium">Department:</span> {course.department}</p>
              )}
              {course.semester && (
                <p><span className="font-medium">Semester:</span> {course.semester}</p>
              )}
            </div>
            
            <div className="flex gap-2">
              <Link href={`/courses/${course.id}/students`} className="text-blue-600 hover:underline text-sm">
                View Students
              </Link>
              <Link href={`/courses/${course.id}/exams`} className="text-blue-600 hover:underline text-sm">
                View Exams
              </Link>
            </div>
          </div>
        ))}
      </div>

      {showAddForm && (
        <AddCourseForm onAdd={handleAddCourse} onCancel={() => setShowAddForm(false)} />
      )}
    </div>
  );
}
                <p><span className="font-medium">Semester:</span> {course.semester}</p>
              )}
              <p>
                <span className="font-medium">Created:</span> {course.createdAt.split('T')[0]}
              </p>
            </div>

            <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
              <Link
                href={`/exams?courseId=${course.id}`}
                className="text-sm text-blue-600 hover:text-blue-800"
              >
                View Exams
              </Link>
              <Link
                href={`/students?courseId=${course.id}`}
                className="text-sm text-blue-600 hover:text-blue-800 ml-auto"
              >
                View Students
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Add Course Modal */}
      {showAddForm && (
        <AddCourseForm
          onAdd={handleAddCourse}
          onCancel={() => setShowAddForm(false)}
        />
      )}
    </div>
  );
}