import { useState } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {loginPelanggan} from '../Redux/action/user.action';

function LoginPage() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
      email: '',
      password: '',
  });

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (email && password) {
  //     navigate('/'); 
  //   } else {
  //     alert('Mohon masukkan email dan password');
  //   }
  // };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
          const pelangganLogin ={
          email:userData.email,
          password:userData.password,
        };
      dispatch(loginPelanggan(pelangganLogin))
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="w-full max-w-4xl flex p-6 bg-white rounded-lg">
        <div className="w-1/2 p-6">
          <h2 className="text-3xl font-semibold mb-6 text-center text-pink-300">Halaman Admin</h2>
          <form className="flex flex-col gap-4" onSubmit={handleLogin}>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={userData.email}
                onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                placeholder="Masukkan email"
                className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={userData.password}
                onChange={(e) => setUserData({...userData, [e.target.name]: e.target.value})}
                placeholder="Masukkan password"
                className="mt-1 w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-200"
              />
            </div>

            <div className="flex justify-between items-center mt-3">
              <div className="text-sm text-gray-600">
                <Link to="/forgot-password" className="hover:underline">
                  Dapatkan Password?
                </Link>
              </div>
            </div>
            <div className="text-center mt-4">
  <span className="text-gray-600">Belum punya akun? </span>
  <Link to="/register" className="text-pink-600 hover:underline">
    Register
  </Link>
</div>

            <button
              type="submit"
              className="w-full bg-pink-300 text-white p-3 rounded-md mt-4 hover:bg-pink-400 focus:outline-none focus:ring-2 focus:ring-pink-200"
            >
              Masuk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
