
import React from 'react';
import { AppRole, User } from '../types';

interface SidebarProps {
  role: AppRole;
  user: User | null;
  currentPage: string;
  onNavigate: (page: string) => void;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, user, currentPage, onNavigate, onLogout }) => {
  const isAdmin = role === AppRole.ADMIN;

  const adminLinks = [
    { id: 'dashboard', icon: 'dashboard', label: 'Dashboard' },
    { id: 'inventory', icon: 'inventory_2', label: 'Inventory' },
    { id: 'reservation-oversight', icon: 'event_available', label: 'Reservations' },
    { id: 'customers', icon: 'people', label: 'Customers' },
    { id: 'reports', icon: 'bar_chart', label: 'Reports' },
  ];

  const customerLinks = [
    { id: 'customer-dashboard', icon: 'dashboard', label: 'Home' },
    { id: 'catalog', icon: 'shopping_basket', label: 'Catalog' },
    { id: 'user-reservations', icon: 'schedule', label: 'My Holds' },
    { id: 'membership-signup', icon: 'star', label: 'Membership' },
  ];

  const links = isAdmin ? adminLinks : customerLinks;

  // For Customer UI, the sidebar is often styled differently (or not present as a fixed bar in the mobile view)
  // But based on provided HTML, the Admin has a fixed sidebar. Let's keep it mostly for Admin.
  if (!isAdmin) {
    // Customer typically has a top nav (already in layouts), but let's provide a slim mobile drawer or desktop bar if needed.
    // However, the customer designs shared use a top header mostly.
    return null; 
  }

  return (
    <aside className="w-64 bg-white dark:bg-zinc-900 border-r border-neutral-border dark:border-zinc-800 flex flex-col fixed h-full z-40">
      <div className="p-6 flex items-center gap-3">
        <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
          <span className="material-icons">storefront</span>
        </div>
        <span className="font-bold text-lg text-zinc-800 dark:text-white">Market Admin</span>
      </div>
      <nav className="flex-1 mt-4">
        {links.map((link) => (
          <button
            key={link.id}
            onClick={() => onNavigate(link.id)}
            className={`w-full flex items-center px-6 py-3 transition-colors ${
              currentPage === link.id
                ? 'bg-primary/10 border-r-4 border-primary text-primary'
                : 'text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800'
            }`}
          >
            <span className="material-icons mr-3">{link.icon}</span>
            <span className="font-medium text-sm">{link.label}</span>
          </button>
        ))}
        <div className="px-6 py-4 mt-4 uppercase text-xs font-bold text-zinc-400 tracking-wider">System</div>
        <button
          onClick={() => onNavigate('settings')}
          className="w-full flex items-center px-6 py-3 text-zinc-500 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
        >
          <span className="material-icons mr-3">settings</span>
          <span className="font-medium text-sm">Settings</span>
        </button>
        <button
          onClick={onLogout}
          className="w-full flex items-center px-6 py-3 text-danger hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors mt-auto"
        >
          <span className="material-icons mr-3">logout</span>
          <span className="font-medium text-sm">Logout</span>
        </button>
      </nav>
      <div className="p-6 border-t border-neutral-border dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <img className="w-10 h-10 rounded-full object-cover" src={user?.avatar} alt="User profile" />
          <div>
            <p className="text-sm font-semibold dark:text-white">{user?.name}</p>
            <p className="text-xs text-zinc-400">Inventory Manager</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
