
import React from 'react';

interface Props {
  onLogin: () => void;
  onBack: () => void;
}

const AdminLogin: React.FC<Props> = ({ onLogin, onBack }) => {
  return (
    <div className="bg-background-light min-h-screen flex items-center justify-center font-manrope antialiased text-slate-800">
      <div className="w-full max-w-md px-6 py-12">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-xl mb-4">
            <span className="material-icons text-primary text-3xl">storefront</span>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">Staff & Admin Access</h1>
          <p className="text-sm text-slate-500 mt-2">Secure portal for Community Value Market backend management.</p>
        </div>

        <div className="bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden">
          <div className="p-8">
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">Staff Email Address</label>
                <div className="relative">
                  <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">alternate_email</span>
                  <input className="block w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" defaultValue="alex@communitymarket.com" type="email"/>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500">Admin Security Key</label>
                  <a className="text-xs font-medium text-primary hover:underline" href="#">Forgot Admin Password?</a>
                </div>
                <div className="relative">
                  <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">lock</span>
                  <input className="block w-full pl-10 pr-3 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all" defaultValue="********" type="password"/>
                </div>
              </div>
              <button type="submit" className="w-full flex justify-center items-center py-3.5 px-4 border border-transparent rounded-lg shadow-sm text-sm font-bold text-white bg-primary hover:bg-primary-dark transition-colors">
                <span className="material-icons mr-2 text-lg">admin_panel_settings</span>
                Access Dashboard
              </button>
            </form>
            <div className="mt-8 flex items-start space-x-3 p-4 bg-amber-50 border border-amber-100 rounded-lg">
              <span className="material-icons text-amber-600 text-xl">info</span>
              <p className="text-xs text-amber-800 leading-relaxed">Authorized access only. All login attempts and session activities are monitored.</p>
            </div>
          </div>
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-200 flex justify-center">
            <button onClick={onBack} className="inline-flex items-center text-xs font-semibold text-slate-500 hover:text-primary transition-colors">
              <span className="material-icons text-sm mr-1">arrow_back</span>
              Back to Customer Market
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
