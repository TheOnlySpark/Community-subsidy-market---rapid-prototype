
import { Product, Reservation } from './types';

export const MOCK_PRODUCTS: Product[] = [
  {
    id: '1',
    sku: 'HON-001',
    name: 'Organic Wildflower Honey',
    category: 'Pantry',
    stockLevel: 42,
    maxStock: 50,
    memberPrice: 8.50,
    nonMemberPrice: 11.00,
    status: 'In Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCnpzCJ1J-Std-upFjP2n9E8ONSHYhjN0q6NE3Lkz5I94gW7gPavMUSDRCRzSXXjSo4XGHihuYXOCS-UX54o1P_S1ah7M3285qW-MBO5DJF7heTJU9b5eOIo1MrldEFU5iV_55AqV9ELPhuC9uzmErbvUS1P7FjzhB_6xNJW4jjCYCDgD5ERkHhCA6TOopMlFuoyM7F8d7FqirOqbOVKLjseBqhxJdwAxU1IrNTgZjXH2BP3_MWBq2wQ5neQiwkqSqUpBDzaGz5GHs',
    discount: '-22%',
    description: 'Farm-fresh wildflower honey harvested from local meadows. Pure and unpasteurized.'
  },
  {
    id: '2',
    sku: 'BAK-012',
    name: 'Artisan Sourdough Loaf',
    category: 'Bakery',
    stockLevel: 3,
    maxStock: 20,
    memberPrice: 5.00,
    nonMemberPrice: 6.50,
    status: 'Low Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3s88QvJY8Wx02AMmiMOObh0yVlPLekdMhlkoKXvl1sSJIxgAooXaedAC3uj3bgDW9EvEG-tFu9NtdWkZXBVa0CA7gk7nto316NMK7gVOMwouJGHVUP1bBeN9ETxRcNpl5MEEjyh5Hsb4UrUxeDsv7XKmawX7sB7i609afTRexWQzexBhdK-nG7KKGrZsS9mt9i4HFw08lPMA1S0vJJho19aHQJ67rQXmiEHL-Cg2U5PcLI6ZLmHdza3-J28mj2vitxEopd5h6MWc',
    discount: '-15%',
    description: 'Freshly baked every morning using traditional long-fermentation methods.'
  },
  {
    id: '3',
    sku: 'PRD-044',
    name: 'Weekly Veggie Box (L)',
    category: 'Produce',
    stockLevel: 18,
    maxStock: 30,
    memberPrice: 24.00,
    nonMemberPrice: 32.00,
    status: 'In Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCi9deP2fZouZXU3vTi1F1FLzOMiLsG4muDhpLnOWKfWLz8HH8TsNvIaKYkRUImZPNm1kQBIzFaoItn08xsOew1D9fmd-wKxFXxCuRRK2Kzt4A-GjTqoJKUcjsjVmJ086jNeL_1u_Rgtv7m-rNWB1kwspHoUem4Yqv49OVnxHQffv3saUQXhkeExa9UrNfyS3eJEvfENPt9nsickgB72R7LXuFVMs_5IrVeaZ6saMzjApiWohSlhbj3lHSSXyNcyKAE63aLfBZ298s',
    description: 'A seasonal selection of fresh, local vegetables delivered weekly.'
  },
  {
    id: '4',
    sku: 'DAI-005',
    name: 'Free Range Eggs (Dozen)',
    category: 'Dairy',
    stockLevel: 0,
    maxStock: 100,
    memberPrice: 4.50,
    nonMemberPrice: 6.00,
    status: 'Out of Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCp2WjyEnn6XgP0BxMZyxCO06GkSy8c1fJHZ9bxKEh-UXk9O8ST_iP_GYyldkp8BclmMfe5tzOGjhw_Oibx6TkNqDlvDCD2dCrhhFZNNvO_inlfNqIISclWkf42HDo_Um-y1FB4Q1Ra8a9BFwNWI568yBOi8h1wlfyXb4inuaycL93ySkKfFI2GLIY3uLMX7NjlL-sXVMuXMOUwdxQtFhtasIn48Y6CDzK6sZCGqZLIGAqJdRNThptO5B3acRrT6ZVqH6yx3BKTtz4',
    description: 'Local free-range eggs from happy hens. Rich yolks and sturdy shells.'
  },
  {
    id: '5',
    sku: 'MILK-01',
    name: 'Organic Whole Milk',
    category: 'Dairy',
    stockLevel: 4,
    maxStock: 25,
    memberPrice: 2.50,
    nonMemberPrice: 5.99,
    status: 'Low Stock',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDL5KqK50T1llYibaKJdIbl_snmDgVmCSVLur1XaOLpNbuescu7iiDDZPt7SchDlzRDEL8peseS0zNWfbOUiFdYvRFRa6sf9dDIFfnaX8ACfEY1JgoP_LVoeGKKtMAApwsAy1QjMLGnjURIT1N4PX9a0xCxTlorlpntFFXe7-owFGyTWK8GVADkmjn7vqEcXLz06HeEb-pRfkotUHKmh_A4nscz2qcvCkGpkr2nqf41XUk4AWSvovEPTG3CUJtx5vH2TfgNz70TxQw',
    discount: '-58% OFF',
    description: 'Rich and creamy organic milk sourced from Hudson Valley Farms.'
  }
];

export const MOCK_RESERVATIONS: Reservation[] = [
  {
    id: 'res-1',
    memberId: 'usr-1',
    memberName: 'Marcus Johnson',
    memberAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZwovChBQK9zepVRo-MErEEd5hy-Yf5tLMWDnV6YU4l_Wdz0Pf3ybTWwPpI9Y0cOmP4B-Wp2HvDxosPs7lap35UOGDcXeSUIOjPEIVHjRuVTQnG1LYmTC_FLzLxeHyiWuqywDt8dznOz8dvL_kmjlte-cDkzSWbMOCT3HgjtyeQs0N2zzTn2plUOt9E7SWElVVBV3InTJ8Bxg9NBOGzHT9q_0XVRBUOElkyN6g54SaZy1kwQk5wyvu5Jx1qn91gFBg-_gs9n9Ad-g',
    productId: '3',
    productName: 'Family Produce Box (XL)',
    sku: 'FRT-001',
    timeRemainingSeconds: -765,
    status: 'Overdue',
    price: 32.00,
    location: 'Downtown Branch'
  },
  {
    id: 'res-2',
    memberId: 'usr-2',
    memberName: 'Elena Rodriguez',
    memberAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwwSp2e1m2vW8taXhLjrbu_VpsSjTzM0yAYSgPcLsqaNaS4P_zKgtWJob-qe19oUnjd-NLTVEPuQ9Eu2Ebw7ixqSr3TF9HEddfVL_LRICPgDSLlXHc68Q45zvJ0oIXyP-ZWr8TLg8ilCPXlsdlJ7fmAtmwLfzhpWlZenUPeTkWyK1i1mdiQf7WSQMEQUvyHX5s_wcdhC6hGtz3qYqCtfnmqk2AWYGkQwaKqavMZgb1t19rFDU7BrZttJFnXNhXRJZjhMwz6tyI1w4',
    productId: '5',
    productName: 'Organic Dairy Set',
    sku: 'DRY-054',
    timeRemainingSeconds: 502,
    status: 'Expiring',
    price: 18.50,
    location: 'Westside Hub'
  },
  {
    id: 'res-3',
    memberId: 'usr-3',
    memberName: 'David Smith',
    memberAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCHKlT9Ow4Uke16n0Y2ptZ2sDSlYaDYwv65-ifsV-K-tk2hT_GvBtMRYWLU3M6ZcDuUu_QtA23KmSywRwTXNOkwz-76qzdXKQMWtlJe0yRmXj6QJv-dlwtWUD4D4v8lrY_R0bN5MvzlpeGno4Ja4AFg5E2qRFHHDKio8Iunt7PPZkBPoJ9Gcakuo3nlmylCLQkYGvlRbdCniBJKLlnhmtC_mQoH_jBGDekOz7YWr1jSorSppsxdzg5bUQ1K7GS0_89GN2nBXNSL7Io',
    productId: '1',
    productName: 'Local Honey (1kg)',
    sku: 'PNY-009',
    timeRemainingSeconds: 2712,
    status: 'Active',
    price: 8.50,
    location: 'Downtown Branch'
  }
];
