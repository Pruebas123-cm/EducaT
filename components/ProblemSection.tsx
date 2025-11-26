import React from 'react';
import { CircleHelp, Clock, TriangleAlert, ChartBar } from 'lucide-react';

export const ProblemSection: React.FC = () => {
  return (
    <section className="bg-slate-900 py-20 px-4 md:px-6 rounded-[3rem] my-10 mx-2 md:mx-6 shadow-2xl">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tight mb-4 leading-tight">
                ¿Por qué es tan difícil<br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-lime-300">elegir carrera?</span>
             </h2>
             <p className="text-slate-400 text-lg font-medium max-w-2xl mx-auto">
                No eres tú. Es un sistema desconectado de la realidad que genera ansiedad y malas decisiones.
             </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
             {/* Left Column: Pain Points */}
             <div className="space-y-6">
                <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-5 hover:bg-white/10 transition-colors">
                    <div className="bg-blue-500/20 p-3 rounded-xl h-fit text-blue-300">
                       <CircleHelp size={28} />
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-xl">Bloqueo Inicial</h4>
                       <p className="text-slate-400 text-sm mt-2 leading-relaxed">"Sé que tengo que elegir, pero no sé por dónde empezar ni qué opciones reales existen hoy en día".</p>
                    </div>
                 </div>

                 <div className="bg-white/5 border border-white/10 p-6 rounded-2xl flex gap-5 hover:bg-white/10 transition-colors">
                    <div className="bg-orange-500/20 p-3 rounded-xl h-fit text-orange-300">
                       <Clock size={28} />
                    </div>
                    <div>
                       <h4 className="font-bold text-white text-xl">Padres sin Tiempo</h4>
                       <p className="text-slate-400 text-sm mt-2 leading-relaxed">Métodos anticuados que generan presión familiar en lugar de ser una guía empática y moderna.</p>
                    </div>
                 </div>
            </div>

            {/* Right Visual (Stats Card) */}
             <div className="bg-white text-slate-900 rounded-[2.5rem] p-6 md:p-10 shadow-xl border border-white/10">
                 <div className="flex items-center gap-3 mb-8">
                     <div className="bg-slate-100 p-2.5 rounded-xl">
                        <ChartBar className="text-slate-900" size={24} />
                     </div>
                     <h3 className="font-black text-xl uppercase tracking-tight">El Ciclo de la Deserción</h3>
                 </div>

                 <div className="space-y-8">
                     {/* Stat 1 */}
                     <div>
                         <div className="flex justify-between mb-2 font-bold text-sm">
                             <span className="text-slate-500">Interés en Secundaria</span>
                             <span>100%</span>
                         </div>
                         <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                             <div className="bg-slate-900 h-full w-full rounded-full"></div>
                         </div>
                     </div>

                     {/* Stat 2 */}
                     <div>
                         <div className="flex justify-between mb-2 font-bold text-sm">
                             <span className="text-slate-500">Acceso Ed. Superior</span>
                             <span>~30%</span>
                         </div>
                         <div className="w-full bg-slate-100 h-4 rounded-full overflow-hidden">
                             <div className="bg-blue-500 h-full w-[30%] rounded-full relative">
                             </div>
                         </div>
                     </div>

                     {/* Stat 3 - Critical */}
                     <div className="relative">
                         <div className="flex justify-between mb-2 font-bold text-sm">
                             <span className="text-red-500">Abandono 1er Semestre</span>
                             <span className="text-red-600">42%</span>
                         </div>
                         <div className="w-full bg-red-50 h-6 rounded-full overflow-hidden border border-red-100">
                             <div className="bg-red-500 h-full w-[42%] rounded-full flex items-center justify-end px-2">
                                 <TriangleAlert size={12} className="text-white" />
                             </div>
                         </div>
                         <div className="mt-4 bg-red-50 text-red-600 text-xs font-bold p-3 rounded-xl border border-red-100">
                             "Muchos abandonan por falta de recursos o dudas vocacionales."
                         </div>
                     </div>
                 </div>
                 
                 <div className="mt-8 pt-6 border-t border-slate-100 text-center">
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Fuente: SUNEDU / MINEDU</p>
                 </div>
             </div>

          </div>
      </div>
    </section>
  );
};