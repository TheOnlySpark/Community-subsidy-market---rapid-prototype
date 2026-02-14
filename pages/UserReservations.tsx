
import React from 'react';
import { Reservation } from '../types';

interface Props {
  reservations: Reservation[];
}

const UserReservations: React.FC<Props> = ({ reservations }) => {
  return (
    <main className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 mb-2">My Reservations</h2>
          <p className="text-slate-500 font-medium">You have <span className="text-primary font-bold">{reservations.length} active holds</span> ready for pickup.</p>
        </div>
        <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-dark transition-colors">
          <span className="material-symbols-outlined text-lg">history</span>
          View Past Orders
        </button>
      </div>

      <div className="space-y-4">
        {reservations.map((res) => (
          <div key={res.id} className="bg-white rounded-xl shadow-soft hover:shadow-hover border border-slate-100 p-5 transition-all duration-300">
            <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
              <div className="size-24 rounded-lg overflow-hidden bg-slate-100 shrink-0">
                <img src="https://picsum.photos/200/200?random=1" className="size-full object-cover" alt="Product"/>
              </div>
              <div className="flex-1 min-w-0 space-y-1">
                <div className="flex items-start justify-between">
                  <h3 className="text-lg font-bold text-slate-900 truncate pr-4">{res.productName}</h3>
                  <span className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${res.status === 'Expiring' ? 'bg-orange-50 text-orange-700' : 'bg-green-50 text-green-700'}`}>{res.status}</span>
                </div>
                <p className="text-sm text-slate-500 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-lg text-slate-400">store</span>
                  {res.location}
                </p>
                <p className="text-sm text-slate-500 flex items-center gap-1.5 pt-1">
                  <span className="material-symbols-outlined text-lg text-slate-400">payments</span>
                  Pay at pickup: <span className="font-mono font-bold text-slate-900">${res.price.toFixed(2)}</span>
                </p>
              </div>
              <div className="w-full sm:w-auto flex flex-row sm:flex-col items-center sm:items-end justify-between gap-4 border-t sm:border-t-0 sm:border-l border-slate-100 pt-4 sm:pt-0 sm:pl-5">
                <div className="text-right">
                  <p className="text-xs font-medium text-slate-500 uppercase mb-1">Expires In</p>
                  <div className={`font-mono text-xl font-bold flex items-center gap-2 ${res.status === 'Expiring' ? 'text-red-600 animate-pulse' : 'text-slate-900'}`}>
                    <span className="material-symbols-outlined">timer</span>
                    {res.timeRemainingSeconds > 0 ? '14:23:01' : 'Expired'}
                  </div>
                </div>
                <button className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary-dark text-white px-4 py-2.5 text-sm font-bold shadow-md shadow-primary/20">
                  <span className="material-symbols-outlined text-lg">qr_code_2</span>
                  Pickup Code
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default UserReservations;
