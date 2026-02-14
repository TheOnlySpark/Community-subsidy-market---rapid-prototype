
import React from 'react';
import { Reservation } from '../types';

interface Props {
  reservations: Reservation[];
}

const ReservationOversight: React.FC<Props> = ({ reservations }) => {
  const formatTime = (seconds: number) => {
    const absSec = Math.abs(seconds);
    const hrs = Math.floor(absSec / 3600);
    const mins = Math.floor((absSec % 3600) / 60);
    const secs = absSec % 60;
    const prefix = seconds < 0 ? '-' : '';
    return `${prefix}${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <main className="p-8 overflow-y-auto">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Reservation Oversight</h1>
          <p className="text-neutral-500">Monitor and manage real-time inventory holds</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border border-neutral-border rounded-lg hover:bg-white transition-all">
            <span className="material-icons text-sm">download</span>
            <span>Export CSV</span>
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all shadow-sm">
            <span className="material-icons text-sm">add</span>
            <span>New Manual Hold</span>
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-neutral-border shadow-sm">
          <p className="text-sm text-neutral-500 font-medium mb-1 text-zinc-500">Active Holds</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold">42</h3>
            <span className="text-xs text-primary font-bold">+12% vs yesterday</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-neutral-border shadow-sm">
          <p className="text-sm text-neutral-500 font-medium mb-1 text-zinc-500">Items Reserved</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold">156</h3>
            <span className="text-xs text-neutral-400">Total units</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-l-4 border-l-orange-500 shadow-sm border-neutral-border">
          <p className="text-sm text-neutral-500 font-medium mb-1 text-zinc-500">Expiring Soon</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-orange-600">8</h3>
            <span className="text-xs text-neutral-400">Next 15 mins</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-l-4 border-l-red-500 shadow-sm border-neutral-border">
          <p className="text-sm text-neutral-500 font-medium mb-1 text-zinc-500">Overdue Holds</p>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-red-600">3</h3>
            <span className="text-xs text-neutral-400">Needs release</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-neutral-border shadow-sm overflow-hidden">
        <table className="w-full text-left">
          <thead className="bg-background-light border-b border-neutral-border">
            <tr>
              <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Member</th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Reserved Item</th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Time Remaining</th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider">Status</th>
              <th className="px-6 py-4 text-xs font-bold text-neutral-500 uppercase tracking-wider text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-border">
            {reservations.map((res) => (
              <tr key={res.id} className="hover:bg-primary/5 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img className="w-8 h-8 rounded-full object-cover" src={res.memberAvatar} alt={res.memberName} />
                    <div>
                      <p className="text-sm font-bold">{res.memberName}</p>
                      <p className="text-xs text-neutral-500">#MBR-{res.memberId.slice(-4)}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium">{res.productName}</span>
                    <span className="text-xs text-neutral-500">SKU: {res.sku}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`text-sm font-bold ${res.status === 'Overdue' ? 'text-red-600' : res.status === 'Expiring' ? 'text-orange-600' : 'text-zinc-900'}`}>
                    {formatTime(res.timeRemainingSeconds)}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-bold ${
                    res.status === 'Overdue' ? 'bg-red-100 text-red-800' : 
                    res.status === 'Expiring' ? 'bg-orange-100 text-orange-800' : 'bg-primary/10 text-primary'
                  }`}>
                    {res.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex justify-end gap-2">
                    <button className="px-3 py-1.5 text-xs font-bold text-neutral-600 hover:text-primary transition-colors">Extend</button>
                    <button className="px-3 py-1.5 text-xs font-bold bg-red-600 text-white rounded hover:bg-red-700 transition-colors shadow-sm">Release</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default ReservationOversight;
