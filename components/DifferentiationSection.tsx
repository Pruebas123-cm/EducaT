import React from 'react';
import { CircleCheck, CircleX } from 'lucide-react';

export const DifferentiationSection: React.FC = () => {
  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight mb-4">¿Por qué EducaT?</h2>
            <p className="text-slate-500 font-medium">Comparativa frente a opciones tradicionales</p>
        </div>

        <div className="bg-white rounded-[2.5rem] p-4 md:p-8 shadow-2xl border border-slate-100">
            {/* Header */}
            <div className="grid grid-cols-3 mb-6 px-4">
                <div className="col-span-1 text-xs font-bold text-slate-400 uppercase tracking-widest">Característica</div>
                <div className="col-span-1 text-center text-xs font-bold text-slate-400 uppercase tracking-widest">Tradicional</div>
                <div className="col-span-1 text-center text-xs font-bold text-blue-600 uppercase tracking-widest">EducaT</div>
            </div>

            <div className="space-y-3">
                {[
                    { label: 'Dudas / Info Universidades', trad: true, educat: true },
                    { label: 'Neurociencia Aplicada', trad: false, educat: true },
                    { label: 'Retos Prácticos (30 min)', trad: false, educat: true },
                    { label: 'Comunidad y Mentoría', trad: 'partial', educat: true },
                    { label: 'IA Conversacional', trad: false, educat: true },
                    { label: 'Seguimiento Constante', trad: false, educat: true },
                ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 items-center bg-[#F9F9F9] rounded-2xl p-4 hover:bg-slate-100 transition-colors">
                        <div className="col-span-1 text-slate-800 font-bold text-sm md:text-base leading-tight">
                            {row.label}
                        </div>
                        <div className="col-span-1 flex justify-center">
                            {row.trad === true ? (
                                <CircleCheck className="text-slate-400" size={24} />
                            ) : row.trad === 'partial' ? (
                                <div className="w-6 h-6 rounded-full border-2 border-slate-300"></div>
                            ) : (
                                <CircleX className="text-slate-300" size={24} />
                            )}
                        </div>
                        <div className="col-span-1 flex justify-center">
                             <div className="bg-[#D9F99D] p-1 rounded-full text-slate-900 shadow-sm transform hover:scale-110 transition-transform">
                                <CircleCheck size={24} strokeWidth={3} />
                             </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-8 text-center">
                <button className="bg-slate-900 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:scale-105 transition-transform uppercase tracking-wider">
                    Empezar Ahora
                </button>
            </div>
        </div>
      </div>
    </section>
  );
};