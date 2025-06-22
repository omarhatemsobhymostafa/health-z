import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaHandHoldingHeart } from "react-icons/fa6";

const lessons = [
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
  `تختار كربوهيدرات أحسن" يعني إنك تركز على إنك تاكل كربوهيدرات جودتها أحسن...`,
];




function HabitTracker() {
  const [habitState, setHabitState] = useState(Array(14).fill(null));
  const [lessonReadState, setLessonReadState] = useState(Array(14).fill(null));
  const [currentDay, setCurrentDay] = useState(0);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const startDate = new Date("2025-06-20");
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    const dayDiff = Math.floor(diffTime / (1000 * 60 * 60 * 24)) % 14;
    setCurrentDay(dayDiff);
   


  }, []);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    if (user) {
      setCurrentUser(user);
      const progress = JSON.parse(localStorage.getItem("progress_" + user.username));
      if (progress) {
        setHabitState(progress.habits || Array(14).fill(null));
        setLessonReadState(progress.lessons || Array(14).fill(null));
      }
    }
  }, []);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem(
        "progress_" + currentUser.username,
        JSON.stringify({ habits: habitState, lessons: lessonReadState })
      );
    }
  }, [habitState, lessonReadState, currentUser]);

  const handleHabitSubmit = (index, value) => {
    if (index !== currentDay) {
      setError(" لا يمكنك تعديل يوم غير اليوم الحالي");
      return;
    }
    const updated = [...habitState];
    updated[index] = value;
    setHabitState(updated);
    setError('');
  };

  const handleLessonSubmit = (index, value) => {
    if (index !== currentDay) {
      setError(" لا يمكنك تعديل يوم غير اليوم الحالي");
      return;
    }
    const updated = [...lessonReadState];
    updated[index] = value;
    setLessonReadState(updated);
    setError('');
  };

if (!currentUser) {
  return (
    <div className="text-center h-[100vh] py-32">
      <p className="text-xl mb-4 text-[#bb3e03] font-semibold"> سجل الان  </p>
      <Link to="/login">
        <button className="bg-[#0a5d89] text-white px-6 py-2 rounded text-lg hover:bg-[#083b5c] transition">
          تسجيل الدخول
        </button>
      </Link>
      <p className="mt-3">
        أو <Link to="/signup" className="underline text-green-600 hover:text-green-800">سجّل حساب جديد</Link>
      </p>
    </div>
  );
}


  return (
    <div className="p-4 max-w-6xl mx-auto py-60">
      <h2 className="mb-20 font-bold text-3xl   ">مرحباً، {currentUser.username} , <span className=' '>ازاي الصحة ؟  </span></h2>

      <div className='w-full flex justify-center ' >
        <div className='bg-[#fec5bb] rounded-3xl habit-name  h-52 w-52 text-center px-5 py-5 mb-5 content-center z-0'><h2 className="text-xl font-semibold text-center mb-5 "> هل تناولتي الكربوهيدرات  الكاملة علي طبيعتها ؟</h2></div>
      </div>
      <div className="flex   flex-wrap mb-10">
        {habitState.map((status, index) => (
          <div key={index} className="w-1/2  lg:w-1/6 border p-4 rounded shadow text-center ${lessonReadState[index] ? 'opacity-50 text-gray-500' : ''}  p-4 rounded  border-[1px]  bg-[#d0cde1]  text-center hover:shadow-md hover:translate-y-[-1px] shadow-lg shadow-[#87fff980]">
            <h2 className="font-semibold">اليوم {index + 1}</h2>
            {status === true && <p className="text-green-600 font-bold"> تم</p>}
            {status === false && <p className="text-red-600 font-bold"> لم يتم</p>}
            {status === null && index === currentDay && (
              <div className="mt-2 flex gap-2 justify-center">
                <button
                  onClick={() => handleHabitSubmit(index, true)}
                  className="bg-[#023047] text-white px-3 py-1 rounded "
                >
                  نعم
                </button>
                <button
                  onClick={() => handleHabitSubmit(index, false)}
                  className="bg-[#9b2226] text-white px-3 py-1 rounded"
                >
                  لا
                </button>
              </div>
            )}
            {status === null && index !== currentDay && (
              <p className="text-gray-400 mt-2">  غير متاح</p>
            )}
          </div>
        ))}
      </div>
      

      <h2 className="text-xl font-semibold text-center mb-2">الدروس</h2>
      <div className="flex  flex-wrap">
        {lessons.map((lesson, index) => (
          <div
            key={index}
            className={`w-1/2  lg:w-1/6 border p-4 rounded shadow text-center ${lessonReadState[index] ? 'opacity-50 text-gray-500' : ''}  p-4 rounded  border-[1px]  bg-[#d0cde1]  text-center hover:shadow-md hover:translate-y-[-1px] shadow-lg shadow-[#87fff980]`}
          >
            <h2 className="font-semibold">اليوم {index + 1}</h2>

            <Link
              to={`/lesson/${index + 1}`}
              className="text-blue-700 underline hover:text-blue-900"
             onClick={() => window.scrollTo({ top: 0 })}

            >
              عرض الدرس كامل
            </Link>
          
          <br />
            {lessonReadState[index] === true && <p className="text-green-600 font-bold">✔️ تم قراءته</p>}
            {lessonReadState[index] === null && index === currentDay && (
              <button
                onClick={() => handleLessonSubmit(index, true)}
                className="bg-[#023047] text-white px-3 py-1 rounded  mt-2"
              >
                تم قراءته
              </button>
            )}
            {lessonReadState[index] === null && index > currentDay && (
              <p className="text-gray-400 mt-2">غير متاح</p>
            )}
          </div>
        ))}
      </div>

      {error && <p className="text-center text-red-500 mt-4">{error}</p>}

      <div className="mt-6 text-center bg-[#ffddd2] py-3 ">
        <p>العادات المنجزة: {habitState.filter((v) => v === true).length} من 14</p>
        <p>الدروس المقروءة: {lessonReadState.filter((v) => v === true).length} من 14</p>
      </div>
    </div>
  );
}

export default HabitTracker;
