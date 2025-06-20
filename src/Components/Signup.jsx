
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value;
    if (!username || !password) {
      setError('❌ يجب ملء كل الحقول');
      return;
    }

    const users = JSON.parse(localStorage.getItem('userInfo')) || [];

    const usernameExists = users.some((user) => user.username === username);
    if (usernameExists) {
      setError('❌ اسم المستخدم موجود بالفعل');
      return;
    }

    const newUser = { username, password };
    const updatedUsers = [...users, newUser];
    localStorage.setItem('userInfo', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(newUser));

    navigate('/');
  };

  return (
    <div className='min-h-screen bg-slate-200 flex items-center justify-center'>
      <form
        onSubmit={handleSignup}
        className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-5'
      >
        <h2 className='text-2xl font-bold text-center text-green-700'>إنشاء حساب</h2>

        <input
          ref={usernameRef}
          type='text'
          placeholder='اسم المستخدم'
          className='border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
        />

        <input
          ref={passwordRef}
          type='password'
          placeholder='كلمة السر'
          className='border px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500'
        />

        {error && <p className='text-red-600 text-sm text-center'>{error}</p>}

        <button
          className='bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-200'
        >
          تسجيل
        </button>

        <p className='text-center text-sm'>عندك حساب؟ <a href='/login' className='text-green-700 underline'>سجّل دخول</a></p>
      </form>
    </div>
  );
}

export default Signup;