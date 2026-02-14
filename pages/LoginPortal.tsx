
import React from 'react';
import { AppRole } from '../types';

interface Props {
  onLogin: (role: AppRole) => void;
  onGoAdmin: () => void;
}

const LoginPortal: React.FC<Props> = ({ onLogin, onGoAdmin }) => {
  return (
    <div className="bg-background-light min-h-screen font-jakarta antialiased relative">
      <div className="fixed inset-0 z-0 overflow-hidden">
        <img alt="Local market fresh produce" className="w-full h-full object-cover scale-105 blur-sm opacity-40" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqB2MF-93vEYTx1-n18LXWYsEwXjVPhdJ4h80g7yZ6rGA0Zj88Q2ElTEZ9t2qPsXzKOCZhBVzrLwh9wPXn_eup8niWWd3bUT2u4aRch0zIVdKDzhGrsAiWbjyDcLDXKOlZ1WvY7A2fbXYSLjaMX6wdS9q6qjEuzzkhgKMPWsUvPovwyhfwiJUgNgTIvY-CHtTnzQ9LQb1aN1htU30sa3z3V49dxUKsD0k8C-pbJ_HebXurpwIpMchHmwkmnQuX_TwUlP4d02A2St4"/>
      </div>
      <main className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-[480px]">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-xl mb-4 shadow-lg shadow-primary/20">
              <span className="material-icons text-white text-3xl">storefront</span>
            </div>
            <h1 className="text-3xl font-bold text-gray-900">Community Value Market</h1>
            <p className="text-gray-600 mt-2">Connecting locals with fresh quality</p>
          </div>

          <div className="bg-white/80 glass-effect border border-white/20 rounded-xl shadow-2xl overflow-hidden">
            <div className="flex border-b border-gray-100">
              <button className="flex-1 py-4 text-sm font-semibold border-b-2 border-primary text-gray-900">Sign In</button>
              <button className="flex-1 py-4 text-sm font-semibold border-b-2 border-transparent text-gray-500 hover:text-gray-700 transition-colors">Create Account</button>
            </div>
            <div className="p-8">
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(AppRole.CUSTOMER); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <div className="relative">
                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">mail_outline</span>
                    <input className="w-full pl-11 pr-4 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" defaultValue="sarah@example.com" type="email"/>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">Password</label>
                    <a className="text-sm font-semibold text-primary hover:underline" href="#">Forgot password?</a>
                  </div>
                  <div className="relative">
                    <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">lock_open</span>
                    <input className="w-full pl-11 pr-11 py-3 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all" defaultValue="password123" type="password"/>
                  </div>
                </div>
                <button type="submit" className="w-full py-3.5 bg-primary hover:bg-primary-dark text-white font-bold rounded-lg shadow-lg shadow-primary/30 transition-all transform active:scale-[0.98]">
                  Sign In to Portal
                </button>
              </form>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="bg-primary/5 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3">
                      <span className="material-icons text-primary">badge</span>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900">Staff Member?</h4>
                      <p className="text-xs text-gray-500">Access dashboard</p>
                    </div>
                  </div>
                  <button onClick={onGoAdmin} className="px-4 py-2 bg-white border border-primary/20 rounded-lg text-xs font-bold text-primary hover:bg-primary hover:text-white transition-all">
                    Staff Login
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default LoginPortal;
