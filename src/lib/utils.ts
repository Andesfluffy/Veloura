import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatCurrency(value: number, locale = "en-US", currency = "USD") {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    minimumFractionDigits: 0,
  }).format(value);
}

export function chunkArray<T>(items: T[], size: number) {
  return items.reduce<T[][]>((acc, item, index) => {
    if (index % size === 0) {
      acc.push([item]);
    } else {
      acc[acc.length - 1]?.push(item);
    }
    return acc;
  }, []);
}

export const prefersReducedMotion =
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
