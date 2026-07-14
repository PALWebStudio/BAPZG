type Props = {
  options: string[];
  active: string;
  onChange: (value: string) => void;
  label: string;
};

export default function FilterBar({ options, active, onChange, label }: Props) {
  return (
    <div role="group" aria-label={label} className="flex flex-wrap gap-2">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onChange(option)}
          aria-pressed={active === option}
          className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-burgundy ${
            active === option
              ? "border-burgundy bg-burgundy text-white"
              : "border-black/[0.08] bg-cream text-muted/70 hover:border-burgundy/40 hover:text-ink"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
