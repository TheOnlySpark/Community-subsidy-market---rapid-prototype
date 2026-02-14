
import React from 'react';
import { Product } from '../types';

interface Props {
  products: Product[];
}

const InventoryManagement: React.FC<Props> = ({ products }) => {
  return (
    <main className="p-8">
      <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-zinc-800 dark:text-white">Inventory Management</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Manage community market stock, pricing and status.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">search</span>
            <input className="pl-10 pr-4 py-2 bg-white dark:bg-zinc-900 border border-neutral-border dark:border-zinc-800 rounded-lg text-sm focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all w-64" placeholder="Search items..." type="text"/>
          </div>
          <button className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-semibold flex items-center gap-2 transition-all shadow-sm">
            <span className="material-icons text-sm">add</span>
            Add New Item
          </button>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-neutral-border dark:border-zinc-800">
          <p className="text-xs font-semibold text-zinc-400 uppercase mb-1">Total Items</p>
          <p className="text-2xl font-bold text-zinc-800 dark:text-white">1,284</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-neutral-border dark:border-zinc-800">
          <p className="text-xs font-semibold text-zinc-400 uppercase mb-1">Low Stock</p>
          <p className="text-2xl font-bold text-warning">14</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-neutral-border dark:border-zinc-800">
          <p className="text-xs font-semibold text-zinc-400 uppercase mb-1">Active Reservations</p>
          <p className="text-2xl font-bold text-primary">86</p>
        </div>
        <div className="bg-white dark:bg-zinc-900 p-4 rounded-xl border border-neutral-border dark:border-zinc-800">
          <p className="text-xs font-semibold text-zinc-400 uppercase mb-1">Out of Stock</p>
          <p className="text-2xl font-bold text-danger">3</p>
        </div>
      </div>

      <div className="bg-white dark:bg-zinc-900 rounded-xl border border-neutral-border dark:border-zinc-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-zinc-50 dark:bg-zinc-800/50 border-b border-neutral-border dark:border-zinc-800">
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Item Details</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Category</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Stock Level</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Member Price</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-4 text-xs font-bold text-zinc-500 uppercase tracking-wider text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-border dark:divide-zinc-800">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-primary/5 transition-colors">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded bg-zinc-100 dark:bg-zinc-800 overflow-hidden flex-shrink-0">
                        <img className="w-full h-full object-cover" src={product.image} alt={product.name} />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">{product.name}</p>
                        <p className="text-xs text-zinc-400">SKU: {product.sku}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 text-xs font-medium rounded bg-primary/10 text-primary">{product.category}</span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <div className="w-16 h-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${product.status === 'Low Stock' ? 'bg-warning' : product.status === 'Out of Stock' ? 'bg-danger' : 'bg-primary'}`} 
                          style={{ width: `${(product.stockLevel / product.maxStock) * 100}%` }}
                        ></div>
                      </div>
                      <span className="text-sm font-medium">{product.stockLevel}/{product.maxStock}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-semibold text-zinc-800 dark:text-zinc-100">${product.memberPrice.toFixed(2)}</td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-1.5 ${product.status === 'Low Stock' ? 'text-warning' : product.status === 'Out of Stock' ? 'text-danger' : 'text-primary'}`}>
                      <span className={`w-2 h-2 rounded-full ${product.status === 'Low Stock' ? 'bg-warning' : product.status === 'Out of Stock' ? 'bg-danger' : 'bg-primary'}`}></span>
                      <span className="text-xs font-bold">{product.status}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-500 transition-colors">
                        <span className="material-icons text-lg">inventory</span>
                      </button>
                      <button className="p-1.5 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded text-zinc-500 transition-colors">
                        <span className="material-icons text-lg">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
};

export default InventoryManagement;
