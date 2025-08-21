"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  const isDark = resolvedTheme === "dark";
  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="rounded-2xl border px-3 py-1 text-sm shadow-sm hover:shadow transition"
      aria-label="Toggle theme"
      title="الوضع الليلي/النهاري"
    >
      {isDark ? "نهاري" : "ليلي"}
    </button>
  );
}
