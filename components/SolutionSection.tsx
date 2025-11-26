import React from 'react';
import { Target, Check, Brain } from 'lucide-react';

export const SolutionSection: React.FC = () => {
  return (
    <section id="programa" className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
            <div className="bg-blue-100 text-blue-700 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest border border-blue-200">
                Método Propio
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 uppercase tracking-tight max-w-4xl">
               La Rueda Estratégica <br/><span className="text-blue-600">de Ecodiseño</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 font-medium max-w-2xl">
               Olvídate de los tests tradicionales. Usamos situaciones reales y un balotario validado por psicólogos.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24">
          
          {/* Visual Representation of Radar Chart - Styled as a Card */}
          <div className="relative w-full max-w-md aspect-square bg-white rounded-[3rem] shadow-2xl border-4 border-white p-8">
             {/* Decorative sticker */}
             <div className="absolute -top-6 -right-6 bg-[#D9F99D] text-slate-900 w-24 h-24 rounded-full flex flex-col items-center justify-center transform rotate-12 shadow-lg z-10 border-2 border-slate-900">
                 <span className="text-3xl font-black">95%</span>
                 <span className="text-xs font-bold uppercase">Match</span>
             </div>

             {/* Chart Container */}
             <div className="w-full h-full relative bg-slate-50 rounded-[2rem] border border-slate-100 overflow-hidden">
                {/* Simulated Radar Chart */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[80%] h-[80%] border border-slate-200 rounded-full opacity-50"></div>
                    <div className="w-[60%] h-[60%] border border-slate-200 rounded-full opacity-50 absolute"></div>
                    <div className="w-[40%] h-[40%] border border-slate-200 rounded-full opacity-50 absolute"></div>
                    
                    {/* The Polygon */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full p-8 drop-shadow-xl animate-pulse">
                        <polygon points="50,10 90,35 80,80 20,80 10,35" className="fill-blue-500/30 stroke-blue-600 stroke-[3]" />
                        <circle cx="50" cy="10" r="3" className="fill-slate-900" />
                        <circle cx="90" cy="35" r="3" className="fill-slate-900" />
                        <circle cx="80" cy="80" r="3" className="fill-slate-900" />
                        <circle cx="20" cy="80" r="3" className="fill-slate-900" />
                        <circle cx="10" cy="35" r="3" className="fill-slate-900" />
                    </svg>
                </div>
                
                {/* Labels as Pill Tags */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold border border-slate-200 z-10">Informática</div>
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold border border-slate-200 z-10">Humanidades</div>
                <div className="absolute top-1/2 right-2 translate-y-[-50%] bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold border border-slate-200 z-10">Ciencias</div>
                <div className="absolute top-1/2 left-2 translate-y-[-50%] bg-white px-3 py-1 rounded-full shadow-sm text-xs font-bold border border-slate-200 z-10">Arte</div>
             </div>
          </div>

          {/* Feature List */}
          <div className="flex-1 space-y-8 max-w-lg">
             <div className="space-y-4">
                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-5 items-start">
                    <div className="bg-blue-100 p-3 rounded-2xl text-blue-600 min-w-fit">
                        <Brain size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-900 text-lg uppercase mb-1">Balotario Situacional</h4>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">
                            "Isla desierta: ¿Telescopio, kit médico o mapa?" Tus elecciones revelan tu perfil subconsciente.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-5 items-start">
                    <div className="bg-lime-100 p-3 rounded-2xl text-lime-700 min-w-fit">
                        <Check size={28} strokeWidth={3} />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-900 text-lg uppercase mb-1">Validado por Expertos</h4>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">
                            Metodología revisada por 2 psicólogos vocacionales y probada con estudiantes reales.
                        </p>
                    </div>
                </div>

                <div className="bg-white p-5 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-all flex gap-5 items-start">
                    <div className="bg-purple-100 p-3 rounded-2xl text-purple-600 min-w-fit">
                        <Target size={28} strokeWidth={2.5} />
                    </div>
                    <div>
                        <h4 className="font-black text-slate-900 text-lg uppercase mb-1">Resultados Visuales</h4>
                        <p className="text-slate-600 text-sm font-medium leading-relaxed">
                            Gráfica personalizada en 8 áreas clave. Simple de entender, fácil de aplicar.
                        </p>
                    </div>
                </div>
             </div>
             
             <div className="bg-[#D9F99D]/50 p-6 rounded-3xl border border-[#D9F99D] text-center">
                 <div className="flex justify-center mb-2">
                     <div className="flex -space-x-2">
                         {[1,2,3].map(i => (
                             <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
                         ))}
                     </div>
                 </div>
                 <p className="text-slate-900 font-bold text-sm">
                    "Verificado por 23 de 25 estudiantes como superior a un test estándar."
                 </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};