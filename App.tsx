
import React, { useState, useEffect } from 'react';
import { AppRole, User, Product, Reservation } from './types';
import { MOCK_PRODUCTS, MOCK_RESERVATIONS } from './constants';
import Sidebar from './components/Sidebar';
import InventoryManagement from './pages/InventoryManagement';
import ReservationOversight from './pages/ReservationOversight';
import LoginPortal from './pages/LoginPortal';
import AdminLogin from './pages/AdminLogin';
import CustomerDashboard from './pages/CustomerDashboard';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import MembershipSignup from './pages/MembershipSignup';
import UserReservations from './pages/UserReservations';

const App: React.FC = () => {
  const [role, setRole] = useState<AppRole>(AppRole.GUEST);
  const [user, setUser] = useState<User | null>(null);
  const [currentPage, setCurrentPage] = useState<string>('login');
  const [products, setProducts] = useState<Product[]>(MOCK_PRODUCTS);
  const [reservations, setReservations] = useState<Reservation[]>(MOCK_RESERVATIONS);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Simple Router based on role and path
  useEffect(() => {
    if (role === AppRole.GUEST) {
      if (currentPage !== 'admin-login') setCurrentPage('login');
    } else if (role === AppRole.ADMIN) {
      if (currentPage === 'login' || currentPage === 'admin-login') setCurrentPage('inventory');
    } else if (role === AppRole.CUSTOMER) {
      if (currentPage === 'login') setCurrentPage('customer-dashboard');
    }
  }, [role, currentPage]);

  const handleLogout = () => {
    setRole(AppRole.GUEST);
    setUser(null);
    setCurrentPage('login');
  };

  const handleLogin = (newRole: AppRole) => {
    setRole(newRole);
    if (newRole === AppRole.ADMIN) {
      setUser({
        id: 'admin-1',
        name: 'Alex Rivera',
        email: 'alex@market.com',
        role: AppRole.ADMIN,
        isMember: false,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB5d84_Y1A0aA5uWTPo2Nbm55ghdM4XynyPMyG19AJqdpyL6hLOwIz-9VzQgUuAyV9_kyFeUXkZHv_OCTtSwldIz7CMHOyTtnU-6pCZ01Zk5Yg4cro8W66GFIRvfQbizRB6dQ3VpSqd6GnUJmL_nS0d6SYIH6qFCVB1aQXhmc7BN2Mw1YrXhPlyFejjW4GCOLMv3fM_pTXXmg5l9XiH2OJKo9QbJjqhCcrcogSj99p1LMocNei8JAtb_LqftjtIZ9CK31KOtguXLZM'
      });
    } else {
      setUser({
        id: 'usr-42',
        name: 'Sarah Chen',
        email: 'sarah@market.com',
        role: AppRole.CUSTOMER,
        isMember: true,
        avatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAr2RzUxS8yxxj--BZW-3uaJevAfSsvssWA26Lid4VWPuHTBYV7u-IIfsehHGympuDa3Fx5RzlxLVsfHfG7YZ07_53FmTcL4weXHF2GUyCyvqS-78_gmxL2F4rACggRCmh9yM-FTbMPRaTZ3aWF840MKOw1OtLSPhVYE1yZHrltGSawiR4xGnTc9VX4GX4_zPs3H6msDZTu0rYeiPu3pbFgOX4SrAh0EKt7BDwYiNvRY7-MRx_wG1qtuhuuawsJvSTszkTWQt6ZSE8'
      });
    }
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <LoginPortal onLogin={handleLogin} onGoAdmin={() => setCurrentPage('admin-login')} />;
      case 'admin-login':
        return <AdminLogin onLogin={() => handleLogin(AppRole.ADMIN)} onBack={() => setCurrentPage('login')} />;
      case 'inventory':
        return <InventoryManagement products={products} />;
      case 'reservation-oversight':
        return <ReservationOversight reservations={reservations} />;
      case 'customer-dashboard':
        return <CustomerDashboard user={user} onNavigate={setCurrentPage} onSelectProduct={(p) => { setSelectedProduct(p); setCurrentPage('product-detail'); }} />;
      case 'catalog':
        return <ProductCatalog products={products} onSelectProduct={(p) => { setSelectedProduct(p); setCurrentPage('product-detail'); }} />;
      case 'product-detail':
        return <ProductDetail product={selectedProduct} onBack={() => setCurrentPage('catalog')} onNavigate={setCurrentPage} />;
      case 'membership-signup':
        return <MembershipSignup onComplete={() => { if(user) setUser({...user, isMember: true}); setCurrentPage('customer-dashboard'); }} />;
      case 'user-reservations':
        return <UserReservations reservations={reservations.filter(r => r.memberId === user?.id)} />;
      default:
        return <div className="p-10">Page Not Found</div>;
    }
  };

  const isAdminView = role === AppRole.ADMIN;
  const isCustomerView = role === AppRole.CUSTOMER;
  const showSidebar = isAdminView || (isCustomerView && currentPage !== 'login' && currentPage !== 'membership-signup');

  return (
    <div className="flex min-h-screen">
      {showSidebar && (
        <Sidebar 
          role={role} 
          user={user} 
          currentPage={currentPage} 
          onNavigate={setCurrentPage} 
          onLogout={handleLogout} 
        />
      )}
      <div className={`flex-1 ${showSidebar ? (isAdminView ? 'ml-64' : '') : ''}`}>
        {renderPage()}
      </div>
    </div>
  );
};

export default App;
