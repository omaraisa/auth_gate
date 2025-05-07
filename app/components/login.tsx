"use client";

import { useActionState, useEffect } from "react";
import { login } from "../hooks/actions";
import { useState } from "react";
import { isArcgisTokenValid } from '../lib/authenticateArcGIS'
import { redirect } from 'next/navigation';

export function LoginForm() {
  const [state, loginAction, pending] = useActionState(login, undefined);
  const [showPopup, setShowPopup] = useState(false); 
  const [guestPending, setGuestPending] = useState(false);

  useEffect(() => {
    const checkTokenValidity = async () => {
      const isValid = await isArcgisTokenValid();
      if (isValid) {
        redirect(process.env.NEXT_PUBLIC_GEOPORTAL_URL || '/');
      }
    };
    checkTokenValidity();
  }, []);

  // Guest login logic
  const handleGuestLogin = async () => {
    setGuestPending(true);
    const formData = new FormData();
    formData.append("username", process.env.NEXT_PUBLIC_GUEST_USERNAME || "");
    formData.append("password", process.env.NEXT_PUBLIC_GUEST_PASSWORD || "");
    await login(undefined, formData);
    setGuestPending(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white/50 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300">
        <div className="px-8 py-6">
          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
              Welcome back!
            </h2>
          </div>
          <form action={loginAction} className="mt-8 space-y-6">
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="username" className="sr-only">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="appearance-none rounded-t-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm hover:border-blue-500 transition-colors duration-200"
                  placeholder="Username"
                />
                {state?.errors?.username && (
                  <div className="w-full mb-4">
                    <div className="bg-red-600 bg-opacity-90 text-white text-center rounded-md px-4 py-2 shadow-lg font-semibold border border-red-700 animate-pulse">
                      {state.errors.username}
                    </div>
                  </div>
                )}
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-b-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 text-sm hover:border-blue-500 transition-colors duration-200"
                  placeholder="Password"
                />
                {state?.errors?.password && (
                  <div className="w-full mb-4">
                    <div className="bg-red-600 bg-opacity-90 text-white text-center rounded-md px-4 py-2 shadow-lg font-semibold border border-red-700 animate-pulse">
                      {state.errors.password}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <SubmitButton pending={pending} />
          </form>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={handleGuestLogin}
              disabled={guestPending}
              className={`w-full px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium transition-colors duration-200 flex items-center justify-center ${
              guestPending ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {guestPending ? "Logging in as Guest..." : "Login as Guest"}
            </button>
          </div>
        </div>
        <div className="bg-gray-50 px-8 py-4 hover:bg-gray-100 transition-colors duration-200">
          <div className="text-sm">
            <button onClick={() => setShowPopup(true)} className="font-medium text-blue-600 hover:text-blue-500">
              <p>Don&apos;t have an account? Request access</p>
            </button>
          </div>
        </div>
      </div>
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
            <h3 className="text-lg font-semibold mb-4">Request Access</h3>
            <p className="mb-4 text-sm text-gray-700">
              Please send an email to{" "}
              <a href="mailto:fmelebary@jda.gov.sa" className="text-blue-600 underline">
                fmelebary@jda.gov.sa
              </a>{" "}
              including your name, department, and reason for access request.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function SubmitButton({ pending }: { pending: boolean }) {
  return (
    <div>
      <button
        type="submit"
        disabled={pending}
        className={`group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
          pending ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
          {pending ? (
            <svg
              className="animate-spin h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
          ) : null}
        </span>
        {pending ? "Logging in..." : "Log in"}
      </button>
    </div>
  );
}