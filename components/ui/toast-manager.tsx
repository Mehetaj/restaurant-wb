'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from '@/components/ui/toast';

type ToastType = {
  id: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive';
  duration?: number;
};

type ToastContextType = {
  toasts: ToastType[];
  showToast: (toast: Omit<ToastType, 'id'>) => void;
  dismissToast: (id: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

// Function to show toast without hooks
export const toastUtils = (() => {
  let showToastFn: ToastContextType['showToast'] | null = null;

  return {
    setShowToast: (fn: ToastContextType['showToast'] | null) => {
      showToastFn = fn;
    },
    toast: (props: Omit<ToastType, 'id'>) => {
      if (showToastFn) {
        showToastFn(props);
      } else {
        console.error('Toast manager not initialized');
      }
    },
  };
})();

// Re-export the toast function for convenience
export const showToast = toastUtils.toast;

export function ToastManager({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const showToastFn = (toast: Omit<ToastType, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    const newToast = { ...toast, id };
    setToasts((prev) => [...prev, newToast]);

    // Auto dismiss after duration
    if (toast.duration !== Infinity) {
      setTimeout(() => {
        dismissToast(id);
      }, toast.duration || 5000);
    }
  };

  const dismissToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  // Initialize the toast utility when the component mounts
  useEffect(() => {
    toastUtils.setShowToast(showToastFn);
    return () => {
      // Clean up
      toastUtils.setShowToast(null);
    };
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, showToast: showToastFn, dismissToast }}>
      {children}
      <ToastProvider>
        {toasts.map(({ id, title, description, variant }) => (
          <Toast key={id} variant={variant}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && <ToastDescription>{description}</ToastDescription>}
            </div>
            <ToastClose onClick={() => dismissToast(id)} />
          </Toast>
        ))}
        <ToastViewport />
      </ToastProvider>
    </ToastContext.Provider>
  );
}

// Custom hook to use toast outside of components
export function useToastManager() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToastManager must be used within a ToastManager');
  }
  return context;
}