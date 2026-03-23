interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionTitle({ title, subtitle, centered = true }: SectionTitleProps) {
  return (
    <div className={`mb-10 md:mb-16 ${centered ? "text-center" : "text-left"}`}>
      {subtitle && (
        <span className="text-gold-400 font-semibold tracking-widest uppercase text-sm sm:text-base mb-4 block">
          {subtitle}
        </span>
      )}
      <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white relative inline-block">
        {title}
        {/* Decorative underlines */}
        <div className={`absolute -bottom-4 h-1 bg-gradient-to-r from-gold-600 via-gold-400 to-gold-600 rounded-full w-20 md:w-24 ${centered ? "left-1/2 -translate-x-1/2" : "left-0"}`} />
        <div className={`absolute -bottom-6 h-[1px] bg-gold-500/30 w-32 md:w-48 ${centered ? "left-1/2 -translate-x-1/2" : "left-0"}`} />
      </h2>
    </div>
  );
}
