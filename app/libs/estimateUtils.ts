export const parsePercent = (raw: string) => {
  // handles "10", "10%", "Estimated: 10%", etc.
  const m = raw?.match(/(\d{1,2}(?:\.\d+)?)/);
  if (!m) return null;
  const n = Number(m[1]);
  if (Number.isNaN(n)) return null;
  return n;
};

export const getCategory = (p: number) => {
  // generic labels (not gendered)
  if (p <= 10) return "Very lean";
  if (p <= 15) return "Lean";
  if (p <= 20) return "Athletic / Average";
  if (p <= 25) return "Average";
  return "Higher body fat";
};

export const getRange = (p: number) => {
  const low = Math.max(3, Math.round(p - 10));
  const high = Math.min(60, Math.round(p + 10));
  return { low, high };
};

