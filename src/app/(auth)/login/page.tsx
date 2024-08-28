'use client';

import { ButtonContained } from '@/components/ui/buttons';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa6';

type Inputs = {
  email: string;
  password: string;
};

const SignIn = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const onSubmit = async (e: Inputs) => {
    setIsLoading(true);
    try {
      const res = await signIn('credentials', { ...e, redirect: false });

      if (!res?.ok) {
        return null;
      }
      alert('Welcome');
      window.location.href = '/';
    } catch (error) {
      alert(String(error));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="form-container sign-in">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Login</h1>
        <div className="social-icons">
          <a href="#" className="icon">
            <FaGooglePlusG size={18} />
          </a>
          <a href="#" className="icon">
            <FaFacebookF size={18} />
          </a>
          <a href="#" className="icon">
            <FaLinkedinIn size={18} />
          </a>
        </div>
        <span>or Login with Your Email</span>
        <input type="email" placeholder="Email" />
        <div className="password">
          <input
            type={isPasswordVisible ? 'text' : 'password'}
            id="password"
            placeholder="Password"
            required
            maxLength={22}
          />
          <i
            onClick={togglePasswordVisibility}
            className={`reveal-password fa ${
              isPasswordVisible ? 'fa-eye-slash' : 'fa-eye'
            }`}
            style={{ cursor: 'pointer' }}
          />
        </div>

        <Link className="Forget" href="/forgot-password">
          Forget Your Password?
        </Link>
        <ButtonContained
          loading={isLoading}
          disabled={!!(errors.email || errors.password)}
        >
          Log In
        </ButtonContained>
      </form>
      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Hello, Crypto Brothers!</h1>
            <p>To Login</p>
            <Link href={'/login'}>
              <ButtonContained className="hidden" id="register">
                Sign Up
              </ButtonContained>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
