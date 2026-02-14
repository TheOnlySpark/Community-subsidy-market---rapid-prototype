
import React from 'react';

interface Props {
  onComplete: () => void;
}

const MembershipSignup: React.FC<Props> = ({ onComplete }) => {
  return (
    <main className="flex-grow flex items-center justify-center p-4 py-12 bg-background-light">
      <div className="w-full max-w-[520px] mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-4xl font-black tracking-tight text-text-main mb-3">Join the family</h2>
          <p className="text-text-muted text-lg leading-relaxed">Unlock exclusive reservations and help us support the community.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <div className="bg-white border border-neutral-border rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            <div className="bg-surface-alt text-primary p-2 rounded-full mb-3">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <h3 className="font-bold text-sm text-text-main mb-1">24-hour holds</h3>
            <p className="text-xs text-text-muted">Reserve before pickup.</p>
          </div>
          <div className="bg-white border border-neutral-border rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            <div className="bg-surface-alt text-primary p-2 rounded-full mb-3">
              <span className="material-symbols-outlined">sell</span>
            </div>
            <h3 className="font-bold text-sm text-text-main mb-1">Extra 5% off</h3>
            <p className="text-xs text-text-muted">On weekly specials.</p>
          </div>
          <div className="bg-white border border-neutral-border rounded-xl p-4 flex flex-col items-center text-center shadow-sm">
            <div className="bg-surface-alt text-primary p-2 rounded-full mb-3">
              <span className="material-symbols-outlined">volunteer_activism</span>
            </div>
            <h3 className="font-bold text-sm text-text-main mb-1">Support local</h3>
            <p className="text-xs text-text-muted">Direct farmer aid.</p>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-neutral-border shadow-soft p-8">
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); onComplete(); }}>
            <div className="space-y-3">
              <label className="block text-sm font-bold text-text-main mb-2">Select a plan</label>
              <label className="relative flex cursor-pointer rounded-xl border border-primary bg-primary/5 p-4 transition hover:bg-primary/10">
                <input className="peer sr-only" name="plan" type="radio" value="monthly"/>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-text-main">Monthly</span>
                  <span className="text-sm text-text-muted">Cancel anytime</span>
                </div>
                <div className="ml-auto flex items-baseline">
                  <span className="font-mono text-2xl font-bold text-text-main">$5</span>
                  <span className="text-sm font-medium text-text-muted">/mo</span>
                </div>
              </label>
              <label className="relative flex cursor-pointer rounded-xl border border-neutral-border bg-white p-4 transition ring-2 ring-primary">
                <input checked className="peer sr-only" name="plan" type="radio" value="annual"/>
                <span className="absolute -right-2 -top-2 rounded-full bg-secondary px-3 py-1 text-[10px] font-bold uppercase text-white shadow-sm">Best Value</span>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-text-main">Annual</span>
                  <span className="text-sm text-secondary font-medium">Save $10 per year</span>
                </div>
                <div className="ml-auto flex items-baseline">
                  <span className="font-mono text-2xl font-bold text-text-main">$50</span>
                  <span className="text-sm font-medium text-text-muted">/yr</span>
                </div>
              </label>
            </div>
            <div className="space-y-4">
              <input className="w-full rounded-lg border-neutral-border bg-background-light px-4 py-3 text-text-main" placeholder="Sarah Jenkins" type="text"/>
              <input className="w-full rounded-lg border-neutral-border bg-background-light px-4 py-3 text-text-main" placeholder="sarah@example.com" type="email"/>
            </div>
            <button className="w-full bg-secondary hover:bg-orange-700 text-white font-bold py-4 rounded-xl shadow-md transition-all active:scale-95" type="submit">
              Start Saving Today
            </button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default MembershipSignup;
