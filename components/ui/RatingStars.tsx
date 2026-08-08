'use client';

import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
  rating: number;
  max?: number;
  size?: number;
  showNumber?: boolean;
  reviewsCount?: number;
}

export function RatingStars({
  rating,
  max = 5,
  size = 14,
  showNumber = true,
  reviewsCount,
}: RatingStarsProps) {
  return (
    <div className="flex items-center gap-1.5 font-mono text-xs">
      <div className="flex items-center text-amber-500">
        {Array.from({ length: max }).map((_, i) => (
          <Star
            key={i}
            size={size}
            className={`fill-amber-400 text-amber-400 ${
              i < Math.floor(rating) ? 'opacity-100' : 'opacity-30'
            }`}
          />
        ))}
      </div>
      {showNumber && (
        <span className="font-bold text-ink dark:text-neutral-200">
          {rating.toFixed(1)}
        </span>
      )}
      {reviewsCount !== undefined && (
        <span className="text-ink-soft dark:text-neutral-400 text-[11px]">
          ({reviewsCount} reviews)
        </span>
      )}
    </div>
  );
}
