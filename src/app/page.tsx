'use client'

import React from 'react';
import AppLayout from '@/components/AppLayout';
import { AppProvider } from '@/contexts/AppContext';

// Force dynamic rendering for this page
export const dynamic = 'force-dynamic'

export default function HomePage() {
  return (
    <AppProvider>
      <AppLayout />
    </AppProvider>
  );
}
