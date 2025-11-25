import React, { useRef } from "react";
import { Button } from "./ui/Button";
import {
  MapPin,
  ChevronLeft,
  ChevronRight,
  Check,
  Star,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { LocationData, Plan } from "../types";

interface PlansProps {
  locationData: LocationData;
  onCtaClick: () => void;
}

export const PlansSection: React.FC<PlansProps> = ({
  locationData,
  onCtaClick,
}) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth =
        scrollContainerRef.current.firstElementChild?.clientWidth || 350;
      const gap = 24;
      const scrollAmount = cardWidth + gap;

      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      className="py-24 bg-brand-dark relative overflow-hidden"
    >
      {/* Clean Matte Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-dark pointer-events-none"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 backdrop-blur-sm">
            <ShieldCheck className="w-4 h-4 text-brand-accent" />
            <span className="text-brand-accent text-xs font-bold tracking-widest uppercase">
              Medicina Preventiva
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Planos pensados para a <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-primary">
              sua melhor fase
            </span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Cobertura completa, hospitais próprios e o cuidado que você merece.
          </p>
        </div>

        {locationData.plans.length > 0 ? (
          <div className="relative group/container">
            {/* Navigation Buttons */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 lg:-ml-12 z-30 bg-white/5 hover:bg-white/10 text-white p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/container:opacity-100 disabled:opacity-0 border border-white/10 hover:scale-105 active:scale-95 hidden md:flex items-center justify-center"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 lg:-mr-12 z-30 bg-white/5 hover:bg-white/10 text-white p-4 rounded-full backdrop-blur-md transition-all opacity-0 group-hover/container:opacity-100 border border-white/10 hover:scale-105 active:scale-95 hidden md:flex items-center justify-center"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <div
              ref={scrollContainerRef}
              className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 -mx-4 px-4 sm:mx-0 sm:px-4 scrollbar-hide items-stretch"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {locationData.plans.map((plan, index) => {
                const isInfinite = plan.name === "Infinite";
                const isPlanBlack = plan.name.toLowerCase().includes("black");
                const isBlack = (plan.highlight && !isInfinite) || isPlanBlack;

                return (
                  <PlanCard
                    key={plan.id}
                    plan={plan}
                    isInfinite={isInfinite}
                    isBlack={isBlack}
                    onCtaClick={onCtaClick}
                    index={index}
                  />
                );
              })}
            </div>
          </div>
        ) : (
          <div className="text-center text-white/60 py-20 bg-white/5 rounded-3xl border border-white/10 backdrop-blur-sm">
            <Sparkles className="w-12 h-12 mx-auto text-brand-accent/50 mb-4" />
            <p className="text-xl font-medium mb-6">
              Planos para {locationData.name} em breve.
            </p>
            <Button
              onClick={onCtaClick}
              variant="primary"
              className="px-8 bg-brand-primary hover:bg-brand-dark text-white border-none"
            >
              Fale com um consultor
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

interface PlanCardProps {
  plan: Plan;
  isInfinite: boolean;
  isBlack: boolean;
  onCtaClick: () => void;
  index: number;
}

const PlanCard: React.FC<PlanCardProps> = ({
  plan,
  isInfinite,
  isBlack,
  onCtaClick,
  index,
}) => {
  // Exact Layout Calculation:
  // lg: min-w-[calc(33.333%-16px)] allows 3 cards to fit perfectly in the container with 24px gap.
  // sm: min-w-[calc(50%-12px)] allows 2 cards.
  // mobile: min-w-[85vw] standard peek.
  const baseClasses =
    "relative flex flex-col min-w-[85vw] sm:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] snap-center rounded-[2rem] transition-all duration-300 h-auto";

  // Shared Button Class
  const buttonClass =
    "w-full py-4 rounded-xl font-medium text-white bg-brand-primary hover:bg-brand-dark border border-transparent transition-all duration-300";

  // 1. INFINITE CARD DESIGN
  if (isInfinite) {
    return (
      <div
        className={`${baseClasses} bg-gradient-to-br from-[#133b32] to-[#05110e] border border-white/10 overflow-hidden group hover:border-brand-primary/30`}
      >
        {/* Elegant Dark Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none opacity-50"></div>

        <div className="p-6 sm:p-10 flex flex-col h-full relative z-10">
          {/* Top Label - Subtle & Elegant */}
          <div className="mb-6 text-center">
            <span className="text-emerald-400 text-[10px] font-bold uppercase tracking-[0.25em]">
              O Novo Plano MedSênior
            </span>
          </div>

          {/* Title Area */}
          <div className="mb-8 text-center">
            <h4 className="text-4xl font-light text-white tracking-wide mb-3">
              {plan.name}
            </h4>
            {/* Thin separator */}
            <div className="h-[1px] w-16 bg-emerald-500/30 mx-auto"></div>
          </div>

          {/* Icon / Visual */}
          <div className="flex-grow flex flex-col justify-center items-center text-center space-y-8 my-4">
            <div className="w-20 h-20 flex items-center justify-center rounded-full border border-white/5 bg-white/[0.02]">
              <Sparkles className="w-8 h-8 text-emerald-400 stroke-[0.75]" />
            </div>

            <div className="space-y-4 max-w-[240px]">
              <p className="text-gray-300 leading-relaxed font-light text-base">
                Descubra um novo conceito de{" "}
                <span className="text-white font-medium">exclusividade</span>.
              </p>
              <p className="text-emerald-400/90 font-medium text-xs uppercase tracking-widest pt-4 border-t border-white/5">
                O mais completo plano MedSênior
              </p>
            </div>
          </div>

          {/* Footer Action */}
          <div className="mt-auto pt-8">
            <Button onClick={onCtaClick} className={buttonClass}>
              Descobrir o Infinite
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 2. BLACK CARD DESIGN
  if (isBlack) {
    return (
      <div
        className={`${baseClasses} bg-white border border-gray-200 hover:border-gray-300 group`}
      >
        {/* Badge */}
        <div className="absolute top-8 right-8">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-200 text-[10px] font-bold uppercase tracking-widest">
            <Star className="w-3 h-3 fill-gray-400 stroke-gray-400" />
            Premium
          </span>
        </div>

        <div className="p-6 sm:p-10 flex flex-col h-full">
          <div className="mb-8">
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
              {plan.badge}
            </div>
            <h4 className="text-3xl font-bold text-gray-900 mb-3 tracking-tight">
              {plan.name}
            </h4>
            <p className="text-gray-500 text-xs font-medium border-l border-gray-300 pl-3 leading-tight py-0.5">
              {plan.priceDesc}
            </p>
          </div>

          <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-light">
            {plan.description}
          </p>

          <div className="space-y-4 mb-8">
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>
                Rede credenciada{" "}
                <strong className="text-gray-900 font-medium">
                  selecionada
                </strong>
              </span>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Apartamento individual</span>
            </div>
            <div className="flex items-start gap-3 text-sm text-gray-600">
              <Check className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
              <span>Reembolso diferenciado</span>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-100 mt-auto">
            {plan.area && (
              <div className="flex flex-col gap-2 mb-6 text-gray-400">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-[10px] uppercase font-bold tracking-wide">
                    ÁREA DE ATUAÇÃO
                  </span>
                </div>
                <span className="text-[10px] leading-tight pl-5.5">
                  {plan.area}
                </span>
              </div>
            )}

            <Button onClick={onCtaClick} className={buttonClass}>
              Cotar Black
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // 3. STANDARD CARD DESIGN
  return (
    <div
      className={`${baseClasses} bg-white border border-gray-200 hover:border-brand-primary/30 group`}
    >
      <div className="p-6 sm:p-10 flex flex-col h-full">
        <div className="mb-8">
          <span className="inline-block px-3 py-1 rounded-full bg-gray-50 text-gray-500 border border-gray-100 text-[10px] font-bold uppercase tracking-wide mb-4">
            {plan.badge}
          </span>
          <h4 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
            {plan.name}
          </h4>
          <p className="text-gray-400 text-xs">{plan.priceDesc}</p>
        </div>

        <div className="w-8 h-[1px] bg-gray-200 mb-6"></div>

        <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow font-light">
          {plan.description}
        </p>

        <div className="space-y-4 mb-8">
          {/* Generic features */}
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-1 h-1 rounded-full bg-brand-primary"></div>
            <span>Sem coparticipação</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-1 h-1 rounded-full bg-brand-primary"></div>
            <span>Oficinas de saúde</span>
          </div>
          <div className="flex items-center gap-3 text-sm text-gray-600">
            <div className="w-1 h-1 rounded-full bg-brand-primary"></div>
            <span>Telemedicina 24h</span>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 mt-auto">
          {plan.area && (
            <div className="flex items-start gap-2 mb-6 text-gray-400 min-h-[2.5em]">
              <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
              <span className="text-[10px] uppercase font-bold tracking-wide leading-tight line-clamp-2">
                {plan.area}
              </span>
            </div>
          )}

          <Button onClick={onCtaClick} className={buttonClass}>
            Cotar {plan.name}
          </Button>
        </div>
      </div>
    </div>
  );
};
