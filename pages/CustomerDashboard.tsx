
import React from 'react';
import { User, Product } from '../types';
import { MOCK_PRODUCTS } from '../constants';

interface Props {
  user: User | null;
  onNavigate: (page: string) => void;
  onSelectProduct: (product: Product) => void;
}

const CustomerDashboard: React.FC<Props> = ({ user, onNavigate, onSelectProduct }) => {
  const freshItems = MOCK_PRODUCTS.slice(0, 4);

  return (
    <div className="bg-background-light min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-neutral-border px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
              <span className="material-symbols-outlined text-3xl">storefront</span>
            </div>
            <h2 className="text-text-moss text-xl font-bold leading-none tracking-tight">Community<br/><span className="text-primary font-bold">Pantry</span></h2>
          </div>
          <nav className="hidden md:flex items-center gap-8">
            <button onClick={() => onNavigate('customer-dashboard')} className="text-text-moss font-semibold hover:text-primary transition-colors">Shop</button>
            <button className="text-text-muted font-medium hover:text-primary transition-colors">Our Mission</button>
            <button className="text-text-muted font-medium hover:text-primary transition-colors">Locations</button>
          </nav>
          <div className="flex items-center gap-4">
            <button className="relative size-10 flex items-center justify-center rounded-full hover:bg-surface-mint text-text-moss">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 size-2 bg-secondary rounded-full border-2 border-white"></span>
            </button>
            <button onClick={() => onNavigate('user-reservations')} className="size-10 flex items-center justify-center rounded-full hover:bg-surface-mint text-text-moss">
              <span className="material-symbols-outlined">shopping_bag</span>
            </button>
            <div className="h-8 w-px bg-gray-200 mx-1 hidden sm:block"></div>
            <div className="flex items-center gap-3 pl-2 pr-1 py-1 rounded-full hover:bg-surface-mint transition-colors cursor-pointer">
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold text-text-moss leading-tight">{user?.name}</p>
                <p className="text-[10px] text-primary font-bold uppercase tracking-wide">Member</p>
              </div>
              <div className="size-9 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-soft">
                {user?.name.slice(0, 2).toUpperCase()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto w-full px-6 py-8">
        <section className="flex flex-col lg:flex-row gap-8 mb-12 items-end">
          <div className="flex-1 w-full space-y-6">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] font-bold text-text-moss leading-[1.1] mb-2">Good morning, {user?.name.split(' ')[0]}.</h1>
              <p className="text-text-muted text-lg">Fresh inventory just arrived at the Downtown Branch.</p>
            </div>
            <div className="relative w-full max-w-2xl group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-text-muted">search</span>
              <input className="w-full h-16 pl-14 pr-6 rounded-2xl border-2 border-neutral-border bg-white text-lg focus:ring-4 focus:ring-primary/10 transition-all shadow-sm" placeholder="Search for essentials..." />
              <button onClick={() => onNavigate('catalog')} className="absolute right-3 top-3 h-10 px-6 bg-primary hover:bg-primary-dark text-white rounded-xl font-bold text-sm shadow-soft transition-colors">Search</button>
            </div>
          </div>
          <div className="w-full lg:w-auto min-w-[320px]">
            <div className="bg-surface-mint rounded-2xl p-6 flex flex-col gap-3 shadow-soft border border-primary/10 relative overflow-hidden">
              <div className="absolute -right-6 -top-6 text-primary/10 rotate-12">
                <span className="material-symbols-outlined text-[140px]">savings</span>
              </div>
              <div className="relative z-10 flex items-center gap-3 mb-1">
                <div className="bg-white p-2 rounded-lg text-primary shadow-sm">
                  <span className="material-symbols-outlined">account_balance_wallet</span>
                </div>
                <span className="text-text-moss font-bold text-sm uppercase tracking-wide">Your Impact</span>
              </div>
              <div className="relative z-10">
                <p className="text-text-muted text-sm font-medium mb-1">Total saved this month</p>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-bold text-primary font-mono">$142.50</span>
                  <span className="text-sm font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded-full">+12%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-hide -mx-6 px-6 sm:mx-0 sm:px-0">
            <button className="flex-shrink-0 px-6 py-3 bg-text-moss text-white rounded-full font-bold text-sm shadow-soft">Fresh Today</button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-neutral-border text-text-moss hover:border-primary hover:text-primary rounded-full font-bold text-sm">🥬 Produce</button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-neutral-border text-text-moss hover:border-primary hover:text-primary rounded-full font-bold text-sm">🥛 Dairy & Eggs</button>
            <button className="flex-shrink-0 px-6 py-3 bg-white border border-neutral-border text-text-moss hover:border-primary hover:text-primary rounded-full font-bold text-sm">🍞 Bakery</button>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-text-moss">Fresh Today</h2>
            <button onClick={() => onNavigate('catalog')} className="text-primary font-bold text-sm flex items-center gap-1 hover:underline">
              View all items
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {freshItems.map((product) => (
              <div key={product.id} onClick={() => onSelectProduct(product)} className="group bg-white rounded-2xl border border-neutral-border overflow-hidden hover:shadow-soft-hover transition-all duration-300 cursor-pointer">
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name}/>
                  {product.discount && (
                    <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                      {product.discount}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold text-text-moss mb-1 leading-tight">{product.name}</h3>
                  <p className="text-text-muted text-xs font-medium mb-4">{product.sku}</p>
                  <div className="flex items-end gap-3 mb-4">
                    <div>
                      <p className="text-[10px] uppercase font-bold text-text-muted mb-0.5">Our Price</p>
                      <p className="text-2xl font-bold text-primary font-mono leading-none">${product.memberPrice.toFixed(2)}</p>
                    </div>
                    <div className="pb-0.5">
                      <p className="text-xs text-text-muted line-through font-mono">${product.nonMemberPrice.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div className={`flex items-center gap-1.5 text-xs font-medium ${product.status === 'Low Stock' ? 'text-orange-600' : 'text-primary'}`}>
                      <span className={`size-2 rounded-full ${product.status === 'Low Stock' ? 'bg-orange-500 animate-pulse' : 'bg-primary'}`}></span>
                      {product.status}
                    </div>
                    <button className="size-8 rounded-lg bg-surface-mint text-primary hover:bg-primary hover:text-white flex items-center justify-center transition-colors">
                      <span className="material-symbols-outlined text-[20px]">add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 bg-primary rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-white">
              <h2 className="text-3xl font-bold mb-4">Join the community. Lock in your savings.</h2>
              <p className="opacity-80 text-lg">Members can reserve high-demand items for 24 hours before pickup. Never miss out on essentials again.</p>
            </div>
            <button onClick={() => onNavigate('membership-signup')} className="bg-white text-primary hover:bg-surface-mint text-lg font-bold py-4 px-8 rounded-xl shadow-lg transition-colors flex items-center gap-2">
              View Membership Plans
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
        </section>
      </main>
      <footer className="bg-white border-t border-neutral-border py-12 mt-12 text-center text-text-muted">
        <div className="flex items-center justify-center gap-2 mb-4 text-primary opacity-80">
          <span className="material-symbols-outlined">eco</span>
          <span className="font-bold">Community Pantry</span>
        </div>
        <p className="text-sm">© 2024 Community Value Market. Feeding the neighborhood together.</p>
      </footer>
    </div>
  );
};

export default CustomerDashboard;
