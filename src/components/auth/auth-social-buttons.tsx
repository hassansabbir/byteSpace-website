import * as React from 'react';

export function AuthSocialButtons() {
  return (
    <div className="w-full">
      <div className="relative my-7 sm:my-8 flex items-center justify-center">
        <div className="w-full border-t border-slate-200" />
        <span className="absolute bg-white px-3 text-xs sm:text-sm text-slate-400 font-normal">
          or
        </span>
      </div>

      <div className="flex items-center justify-center gap-4 mb-8 sm:mb-9">
        <button
          type="button"
          aria-label="Sign in with Facebook"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border border-slate-200/90 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
          </svg>
        </button>

        <button
          type="button"
          aria-label="Sign in with Google"
          className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl border border-slate-200/90 bg-white flex items-center justify-center text-slate-900 hover:bg-slate-50 hover:border-slate-300 transition-colors shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12 2a9.99 9.99 0 0 0-7.07 2.93A10 10 0 0 0 2 12a10 10 0 0 0 10 10c5.52 0 10-4.48 10-10 0-.68-.06-1.35-.18-2H12v4.18h5.68c-.37 1.84-1.92 3.19-3.68 3.19-2.21 0-4-1.79-4-4s1.79-4 4-4c.95 0 1.83.33 2.51.89l2.97-2.97A9.97 9.97 0 0 0 12 2z" />
          </svg>
        </button>
      </div>
    </div>
  );
}
