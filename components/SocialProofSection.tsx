import React from 'react';
import { BadgeCheck, Star, School } from 'lucide-react';

export const SocialProofSection: React.FC = () => {
  return (
    <section id="comunidad" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl text-center">
        <h2 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-12">Resultados Validados</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
            
            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                 <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-blue-600 shadow-inner">
                    <School size={36} strokeWidth={2.5} />
                 </div>
                 <h3 className="text-5xl font-black text-slate-900 mb-2">150+</h3>
                 <p className="text-slate-800 font-bold text-lg uppercase tracking-tight">Alumnos Validados</p>
                 <p className="text-slate-500 text-sm mt-3 font-medium leading-relaxed">
                   Piloto exitoso en colegios públicos y privados.
                 </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                 <div className="bg-lime-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-lime-600 shadow-inner">
                    <Star size={36} strokeWidth={2.5} />
                 </div>
                 <h3 className="text-5xl font-black text-slate-900 mb-2">92%</h3>
                 <p className="text-slate-800 font-bold text-lg uppercase tracking-tight">Satisfacción</p>
                 <p className="text-slate-500 text-sm mt-3 font-medium leading-relaxed">
                   23 de 25 estudiantes prefieren la Rueda Estratégica.
                 </p>
            </div>

            <div className="bg-white p-8 rounded-[2rem] border border-slate-100 shadow-lg flex flex-col items-center hover:-translate-y-2 transition-transform duration-300">
                 <div className="bg-purple-100 w-20 h-20 rounded-full flex items-center justify-center mb-6 text-purple-600 shadow-inner">
                    <BadgeCheck size={36} strokeWidth={2.5} />
                 </div>
                 <h3 className="text-5xl font-black text-slate-900 mb-2">100%</h3>
                 <p className="text-slate-800 font-bold text-lg uppercase tracking-tight">Interés Total</p>
                 <p className="text-slate-500 text-sm mt-3 font-medium leading-relaxed">
                   Deseo de continuar con mentorías y plataforma.
                 </p>
            </div>
        </div>
      </div>
    </section>
  );
};