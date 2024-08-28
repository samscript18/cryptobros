'use client';
import { useRouter } from 'next/navigation';
import { FaFacebookF, FaGooglePlusG, FaLinkedinIn } from 'react-icons/fa6';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import * as authService from '@/lib/services/auth.service';
import { SignUpDto } from '@/lib/schema/dtos';
import { ButtonContained } from '@/components/ui/buttons';

type Inputs = {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};

const SignUp = () => {
  const { push } = useRouter();
  const handleSignupClick = () => {
    push('/');
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<Inputs>();

  const { mutateAsync, isPending: signUpPending } = useMutation({
    mutationKey: ['useRegister'],
    mutationFn: async (e: SignUpDto) => authService.signUp(e),
    onSuccess() {
      console.log('sign up successful');
    },
  });

  const onSubmit = async (e: Inputs) => {
    await mutateAsync(e);
  };

  return (
    <div className="form-container sign-up">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>Create Account</h1>
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
        <span>Or Sign-Up with Your Email</span>
        <input
          type="text"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        <input
          type="email"
          placeholder="Email Address"
          {...register('email', { required: true })}
        />
        <input
          type="password"
          placeholder="Password"
          {...register('password', { required: true })}
        />
        <input
          type="password"
          placeholder="Confirm password"
          {...register('confirmPassword', { required: true })}
        />
        <ButtonContained
          disabled={
            !!(
              errors.name ||
              errors.email ||
              errors.confirmPassword ||
              errors.password
            )
          }
          loading={signUpPending}
        >
          Sign Up
        </ButtonContained>
      </form>

      <div className="toggle-container">
        <div className="toggle">
          <div className="toggle-panel toggle-right">
            <h1>Hello, Crypto Brothers!</h1>
            <p>To Create an Account</p>
            <button
              className="hidden"
              id="register"
              onClick={handleSignupClick}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
