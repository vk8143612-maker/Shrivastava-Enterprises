'use client';
import Image, { ImageProps } from 'next/image';
import { useState } from 'react';
export default function SmartImage({ alt, className, ...props }: ImageProps) {
  const [error, setError] = useState(false);
  if (error) {
    return (
      <div
        className={`h-full w-full bg-gradient-to-br from-charcoal via-coal to-ink ${className ?? ''}`}
        aria-label={alt} role="img"
      />
    );
  }
  return <Image alt={alt} className={className} onError={() => setError(true)} {...props} />;
}
