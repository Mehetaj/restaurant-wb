import { showToast } from '@/components/ui/toast-manager';

// Simple toast utility functions that don't rely on hooks
export const toast = {
  success: (title: string, description?: string) => {
    showToast({
      title,
      description,
      variant: 'default',
      duration: 5000,
    });
  },
  error: (title: string, description?: string) => {
    showToast({
      title,
      description,
      variant: 'destructive',
      duration: 5000,
    });
  },
  info: (title: string, description?: string) => {
    showToast({
      title,
      description,
      variant: 'default',
      duration: 5000,
    });
  },
  // Generic toast function for backward compatibility
  show: (options: { title?: string; description?: string; variant?: 'default' | 'destructive' }) => {
    showToast({
      title: options.title,
      description: options.description,
      variant: options.variant || 'default',
      duration: 5000,
    });
  },
};