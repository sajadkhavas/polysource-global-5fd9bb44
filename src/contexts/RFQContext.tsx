import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export interface RFQProduct {
  id: string;
  name: string;
  type: string;
  grade?: string;
}

interface RFQContextType {
  products: RFQProduct[];
  addProduct: (product: RFQProduct) => void;
  removeProduct: (id: string) => void;
  clearProducts: () => void;
  clearStorage: () => void;
}

const RFQContext = createContext<RFQContextType | undefined>(undefined);

const RFQ_STORAGE_VERSION = 'v1';
const RFQ_STORAGE_KEY = `rfq_products_${RFQ_STORAGE_VERSION}`;

const loadStoredProducts = (): RFQProduct[] => {
  if (typeof window === 'undefined') return [];

  try {
    const raw = localStorage.getItem(RFQ_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    return parsed.filter(
      (item): item is RFQProduct =>
        typeof item?.id === 'string' &&
        typeof item?.name === 'string' &&
        typeof item?.type === 'string' &&
        (item?.grade === undefined || typeof item?.grade === 'string'),
    );
  } catch {
    return [];
  }
};

export function RFQProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState<RFQProduct[]>(() => loadStoredProducts());

  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      localStorage.setItem(RFQ_STORAGE_KEY, JSON.stringify(products));
    } catch {
      // Silent fallback for storage errors.
    }
  }, [products]);

  const addProduct = (product: RFQProduct) => {
    setProducts((prev) => {
      if (prev.some((p) => p.id === product.id)) {
        return prev;
      }
      return [...prev, product];
    });
  };

  const removeProduct = (id: string) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const clearProducts = () => {
    setProducts([]);
  };

  const clearStorage = () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(RFQ_STORAGE_KEY);
    }
    setProducts([]);
  };

  return (
    <RFQContext.Provider value={{ products, addProduct, removeProduct, clearProducts, clearStorage }}>
      {children}
    </RFQContext.Provider>
  );
}

export function useRFQ() {
  const context = useContext(RFQContext);
  if (context === undefined) {
    throw new Error('useRFQ must be used within an RFQProvider');
  }
  return context;
}
