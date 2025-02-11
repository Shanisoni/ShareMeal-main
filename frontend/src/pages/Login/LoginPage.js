import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { FaGoogle, FaFacebook } from 'react-icons/fa';
import classes from './loginPage.module.css';
import loginImage from "./svg.png"; // Import image

export default function LoginPage() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const { user, login } = useAuth();
  const [params] = useSearchParams();
  const returnUrl = params.get('returnUrl');

  useEffect(() => {
    if (!user) return;
    returnUrl ? navigate(returnUrl) : navigate('/');
  }, [navigate, returnUrl, user]);

  const submit = async ({ email, password }) => {
    await login(email, password);
  };

  return (
    <div className={classes.container}>
      {/* Left Side Image */}
      <div className={classes.imageContainer}>
        <img src={loginImage} alt="Login Illustration" className={classes.image} />
      </div>

      {/* Right Side Login Box */}
      <div className={classes.loginBox}>
        <h2 className={classes.title}>Sign in</h2>

        <form onSubmit={handleSubmit(submit)} noValidate>
          <label className={classes.label}>Email</label>
          <input
            type="email"
            placeholder="your@email.com"
            {...register('email', { required: true })}
            className={classes.input}
          />
          {errors.email && <p className={classes.error}>Email is required</p>}

          <label className={classes.label}>Password</label>
          <input
            type="password"
            placeholder="••••••••"
            {...register('password', { required: true })}
            className={classes.input}
          />
          {errors.password && <p className={classes.error}>Password is required</p>}

          {/* <div className={classes.checkboxContainer}>
            <input type="checkbox" id="updates" className={classes.checkbox} />
            <label htmlFor="updates"> I want to receive updates via email</label>
          </div> */}

          <button type="submit" className={classes.button}>Sign in</button>
          <div className={classes.register}>
            Don't have an account? <Link to={`/register${returnUrl ? '?returnUrl=' + returnUrl : ''}`}>Sign up</Link>
          </div>

          {/* <div className={classes.divider}>or</div> */}

          {/* Google Login */}
          {/* <button type="button" className={`${classes.socialButton} ${classes.google}`}> */}
            {/* <FaGoogle className={classes.icon} /> */}
            {/* Sign in with Google */}
          {/* </button> */}

          {/* Facebook Login */}
          {/* <button type="button" className={`${classes.socialButton} ${classes.facebook}`}> */}
            {/* <FaFacebook className={classes.icon} /> */}
            {/* Sign in with Facebook */}
          {/* </button> */}

          
        </form>
      </div>
    </div>
  );
}
