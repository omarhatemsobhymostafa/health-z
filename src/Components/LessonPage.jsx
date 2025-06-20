
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import lessons from './lessons';

export default function LessonPage() {
  const { day } = useParams();
  const lessonIndex = parseInt(day, 10) - 1;
  const lesson = lessons[lessonIndex];

  if (!lesson || lessonIndex < 0 || lessonIndex >= lessons.length) {
    return <p className="text-center mt-10 text-red-600">الدرس غير موجود</p>;
  }

  return (
    <div className="max-w-3xl mx-auto py-32 px-4">
      <Link to="/" className="text-blue-600 hover:underline">⬅️ رجوع</Link>
      <h2 className="text-2xl font-bold mb-4">درس اليوم {day}</h2>
      <p className="text-md leading-loose whitespace-pre-line">{lesson}</p>
    </div>
  );
}
