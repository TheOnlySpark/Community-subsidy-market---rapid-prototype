
import React from 'react';
import { Product } from '../types';

interface Props {
  product: Product | null;
  onBack: () => void;
  onNavigate: (page: string) => void;
}

const ProductDetail: React.FC<Props> = ({ product, onBack, onNavigate }) => {
  if (!product) return <div>No product selected</div>;

  return (
    <main className="flex-1 w-full max-w-7xl mx-auto px-4 md:px-10 py-6 md:py-10">
      <nav className="flex flex-wrap items-center gap-2 mb-8 text-sm">
        <button onClick={onBack} className="text-text-muted hover:text-primary font-medium">Catalog</button>
        <span className="text-text-muted material-symbols-outlined text-sm">chevron_right</span>
        <span className="text-text-main font-semibold">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7">
          <div className="relative w-full aspect-square md:aspect-[4/3] bg-white rounded-lg overflow-hidden shadow-soft border border-gray-100 group">
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                {product.discount || '-10% Savings'}
              </span>
            </div>
            <img src={product.image} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" alt={product.name}/>
          </div>
          <div className="mt-6 prose prose-stone max-w-none">
            <h3 className="text-lg font-bold text-text-main mb-2">Description</h3>
            <p className="text-text-muted leading-relaxed">{product.description || 'Farm-fresh quality staples delivered from community producers to your neighborhood market.'}</p>
            <div className="flex gap-4 mt-4">
              <div className="flex items-center gap-2 bg-surface-alt px-3 py-1.5 rounded-md text-primary">
                <span className="material-symbols-outlined text-sm">eco</span>
                <span className="text-xs font-semibold">Organic Certified</span>
              </div>
              <div className="flex items-center gap-2 bg-surface-alt px-3 py-1.5 rounded-md text-primary">
                <span className="material-symbols-outlined text-sm">local_shipping</span>
                <span className="text-xs font-semibold">Locally Sourced</span>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="sticky top-24 bg-white rounded-lg shadow-soft p-6 border border-gray-100">
            <div className="mb-6">
              <p className="text-sm font-semibold text-primary mb-1 uppercase">Local Co-op Selection</p>
              <h1 className="text-3xl font-bold text-text-main leading-tight mb-2">{product.name}</h1>
              <p className="text-text-muted text-lg">Unit: {product.sku}</p>
            </div>

            <div className="bg-background-light rounded-lg p-5 mb-8 border border-gray-100">
              <h3 className="text-sm font-bold text-text-main mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">savings</span>
                Member Price Comparison
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-sm font-bold text-text-main">Community Price</span>
                    <span className="font-mono text-2xl font-bold text-primary">${product.memberPrice.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div className="bg-primary h-3 rounded-full" style={{ width: '45%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between items-end mb-1">
                    <span className="text-xs font-medium text-text-muted uppercase tracking-wide">Retail Avg.</span>
                    <span className="font-mono text-lg font-medium text-text-muted line-through">${product.nonMemberPrice.toFixed(2)}</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                    <div className="bg-gray-400 h-2 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-text-main mb-2">Pickup Location</label>
              <select className="block w-full border-gray-300 rounded-lg bg-white shadow-sm cursor-pointer py-3 pl-4">
                <option>Downtown Branch (0.8 mi)</option>
                <option>Westside Community Center (2.4 mi)</option>
              </select>
            </div>

            <button onClick={() => onNavigate('user-reservations')} className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold text-lg py-4 px-6 rounded-lg shadow-lg transition-all transform hover:-translate-y-0.5">
              <span className="material-symbols-outlined">shopping_bag</span>
              Reserve for 24 Hours
            </button>
            <p className="text-center text-xs text-text-muted mt-3">
              No payment required now. Pay securely at pickup.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductDetail;
