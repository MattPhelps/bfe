"use client";

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function toPct(n: number, min: number, max: number) {
  if (max === min) return 0;
  return ((n - min) / (max - min)) * 100;
}

export default function ConfidenceBand({
  estimate,
  low,
  high,
  min = 3,
  max = 60,
}: {
  estimate: number;
  low: number;
  high: number;
  min?: number;
  max?: number;
}) {
  const e = clamp(estimate, min, max);
  const lo = clamp(low, min, max);
  const hi = clamp(high, min, max);

  const left = toPct(lo, min, max);
  const width = Math.max(0, toPct(hi, min, max) - left);
  const marker = toPct(e, min, max);

  return (
    <div className="mt-4">
      {/* labels */}
      <div className="flex justify-between text-xs text-gray-500 mb-2 mt-8">
        <span>{lo}%</span>
        <span>{hi}%</span>
      </div>

      {/* bar */}
      <div className="relative h-3 rounded-full bg-base-200 overflow-hidden">
        {/* highlight band */}
        <div
          className="absolute top-0 h-full bg-green-200"
          style={{
            left: `${left}%`,
            width: `${width}%`,
          }}
        />

        {/* marker */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-600 shadow"
          style={{ left: `calc(${marker}% - 8px)` }}
          aria-label={`Estimate ${e}%`}
        />
      </div>

      {/* range text */}
      <p className="mt-2 text-sm text-gray-600">
        Estimated range:{" "}
        <span className="font-semibold">
          {lo}–{hi}%
        </span>
      </p>
    </div>
  );
}
