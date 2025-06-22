
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const username = usernameRef.current.value.trim();
    const password = passwordRef.current.value;
    const users = JSON.parse(localStorage.getItem("userInfo")) || [];

    const matchedUser = users.find(
      user => user.username === username && user.password === password
    );

    if (matchedUser) {
      setError('');
      localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
      navigate('/dashboard');
    } else {
      setError(' اسم المستخدم أو الباسورد غير صحيح');
    }
  };

  return (
    <div className='min-h-screen bg-slate-200 flex items-center justify-center'>
      <form
        onSubmit={handleLogin}
        className='bg-white p-8 rounded-2xl shadow-xl w-full max-w-sm flex flex-col gap-5'
      >
        <h2 className='text-2xl font-bold text-center text-green-700'>تسجيل الدخول</h2>

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
          دخول
        </button>

        <p className='text-center text-sm'>معندكش حساب؟ <a href='/signup' className='text-green-700 underline'>سجّل هنا</a></p>
      </form>
    </div>
  );
}

export default Login;
