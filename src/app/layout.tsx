"use client";

import CustomHeader from '@/components/customHeader/customHeader'
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS

import './globals.css'
import { Inter } from 'next/font/google'
import { useEffect } from 'react';
import { ringift } from '../../public/fonts/Ringift';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);
  const ringgift_font = ringift;

  return (
    <html lang="en">
      <body className={ringgift_font.className}><CustomHeader></CustomHeader>{children}</body>
    </html>
  )
}
  