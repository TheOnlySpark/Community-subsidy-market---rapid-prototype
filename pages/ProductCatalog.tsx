
import React from 'react';
import { Product } from '../types';

interface Props {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const ProductCatalog: React.FC<Props> = ({ products, onSelectProduct }) => {
  return (
    <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 py-8">
      <div className="mb-8">
        <nav className="flex text-sm text-text-muted mb-3 font-medium">
          <span className="hover:text-primary cursor-pointer">Home</span>
          <span className="mx-2">/</span>
          <span className="text-text-main">Catalog</span>
        </nav>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-text-main mb-2">Fresh Savings</h2>
            <p className="text-text-muted">High quality staples at community prices.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-text-muted">Sort by:</span>
            <select className="border-none bg-white py-2 pl-3 pr-8 rounded-lg text-sm font-bold shadow-sm ring-1 ring-gray-200">
              <option>Recommended</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <aside className="w-full lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl p-6 shadow-soft border border-gray-100">
            <h3 className="font-bold text-lg text-text-main flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">filter_list</span>
              Filters
            </h3>
            <div className="space-y-8">
              <div>
                <h4 className="font-bold text-sm text-text-main mb-4 uppercase tracking-wider">Categories</h4>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="form-checkbox text-primary rounded border-gray-300" type="checkbox"/>
                    <span className="text-text-main group-hover:text-primary">Produce</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="form-checkbox text-primary rounded border-gray-300" type="checkbox"/>
                    <span className="text-text-main group-hover:text-primary">Dairy & Eggs</span>
                  </label>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-sm text-text-main mb-4 uppercase tracking-wider">Price Range</h4>
                <input className="w-full h-2 bg-gray-200 rounded-lg accent-primary" type="range" max="50" min="0" defaultValue="25"/>
              </div>
            </div>
          </div>
        </aside>

        <div className="flex-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <article key={product.id} onClick={() => onSelectProduct(product)} className="group relative bg-white rounded-xl shadow-soft hover:shadow-hover hover:-translate-y-1 transition-all duration-300 flex flex-col h-full overflow-hidden border border-transparent hover:border-primary/10 cursor-pointer">
                <div className="relative h-[180px] w-full overflow-hidden bg-gray-100">
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={product.name}/>
                  {product.discount && (
                    <div className="absolute top-3 right-3 bg-secondary text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md z-10">
                      {product.discount}
                    </div>
                  )}
                  {product.status === 'Out of Stock' && (
                    <div className="absolute inset-0 bg-white/60 z-20 flex items-center justify-center">
                      <span className="bg-gray-800 text-white px-3 py-1 rounded text-xs font-bold uppercase tracking-wide">Out of Stock</span>
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-text-main line-clamp-2">{product.name}</h3>
                      <button className="text-gray-300 hover:text-secondary transition-colors">
                        <span className="material-symbols-outlined">favorite</span>
                      </button>
                    </div>
                    <p className="text-sm text-text-muted mb-4">{product.sku}</p>
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="text-2xl font-mono font-bold text-primary">${product.memberPrice.toFixed(2)}</span>
                      <span className="text-sm text-text-muted line-through">${product.nonMemberPrice.toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100 mt-auto">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`size-2.5 rounded-full ${product.status === 'Low Stock' ? 'bg-yellow-500 animate-pulse' : product.status === 'Out of Stock' ? 'bg-danger' : 'bg-primary'}`}></span>
                      <span className="text-xs font-medium text-text-main">{product.status}</span>
                    </div>
                    <button className={`w-full font-bold py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2 ${product.status === 'Out of Stock' ? 'bg-gray-100 text-text-muted' : 'bg-primary hover:bg-primary-dark text-white'}`}>
                      {product.status === 'Out of Stock' ? 'Notify Me' : 'Reserve Now'}
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
