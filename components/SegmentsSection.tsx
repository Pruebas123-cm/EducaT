import React, { useState } from 'react';
import { User, Users, School, ArrowRight } from 'lucide-react';
import { SegmentType } from '../types';

export const SegmentsSection: React.FC = () => {
  const [activeSegment, setActiveSegment] = useState<SegmentType>(SegmentType.STUDENT);

  const renderContent = () => {
    switch (activeSegment) {
      case SegmentType.STUDENT:
        return (
          <div className="animate-fade-in space-y-6">
             <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-black uppercase tracking-wider rounded-full mb-2">Para ti</div>
             <h3 className="text-3xl font-black text-slate-900 uppercase leading-none">Descubre tu futuro<br/>a tu ritmo</h3>
             <p className="text-slate-600 text-lg font-medium">
                Sin exámenes aburridos. Usa chatbot y juegos para investigar lo que te gusta.
             </p>
             <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Investiga sin estrés</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Habla con mentores reales</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Resultados visuales</span>
                </li>
             </div>
          </div>
        );
      case SegmentType.PARENT:
        return (
          <div className="animate-fade-in space-y-6">
             <div className="inline-block px-4 py-1.5 bg-green-100 text-green-700 text-xs font-black uppercase tracking-wider rounded-full mb-2">Para Familias</div>
             <h3 className="text-3xl font-black text-slate-900 uppercase leading-none">Apoyo efectivo<br/>y no invasivo</h3>
             <p className="text-slate-600 text-lg font-medium">
                Herramientas para padres ocupados. Guía sin presionar.
             </p>
             <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Reportes ejecutivos mensuales</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Económico y desde casa</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Metodología validada</span>
                </li>
             </div>
          </div>
        );
      case SegmentType.SCHOOL:
        return (
          <div className="animate-fade-in space-y-6">
             <div className="inline-block px-4 py-1.5 bg-purple-100 text-purple-700 text-xs font-black uppercase tracking-wider rounded-full mb-2">Para Colegios</div>
             <h3 className="text-3xl font-black text-slate-900 uppercase leading-none">Potencia tu<br/>departamento</h3>
             <p className="text-slate-600 text-lg font-medium">
                Datos reales de alumnos para dirigir clases eficientes.
             </p>
             <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm space-y-4">
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Recursos pedagógicos listos</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Reportes grupales visuales</span>
                </li>
                <li className="flex items-center gap-3 text-slate-700 font-bold text-sm">
                    <div className="w-6 h-6 rounded-full bg-purple-500 text-white flex items-center justify-center text-xs">✓</div>
                    <span>Gestión con evidencia</span>
                </li>
             </div>
          </div>
        );
    }
  };

  return (
    <section className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-black text-center mb-12 uppercase text-slate-900">
            Soluciones por Rol
        </h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          {/* Navigation - Styled as a vertical stack of pill buttons */}
          <div className="flex md:flex-col gap-4 md:w-1/3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
             
             <button 
                onClick={() => setActiveSegment(SegmentType.STUDENT)}
                className={`flex items-center gap-4 px-6 py-5 rounded-3xl text-left transition-all border-2 shrink-0 ${activeSegment === SegmentType.STUDENT ? 'bg-blue-600 border-blue-600 text-white shadow-xl scale-105' : 'bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100'}`}
             >
                <div className={`p-3 rounded-2xl ${activeSegment === SegmentType.STUDENT ? 'bg-white/20' : 'bg-blue-100 text-blue-600'}`}>
                    <User size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <span className="block font-black text-lg uppercase">Estudiantes</span>
                    <span className={`text-xs font-bold ${activeSegment === SegmentType.STUDENT ? 'text-blue-100' : 'text-slate-400'}`}>15-18 Años</span>
                </div>
             </button>
             
             <button 
                onClick={() => setActiveSegment(SegmentType.PARENT)}
                className={`flex items-center gap-4 px-6 py-5 rounded-3xl text-left transition-all border-2 shrink-0 ${activeSegment === SegmentType.PARENT ? 'bg-green-600 border-green-600 text-white shadow-xl scale-105' : 'bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100'}`}
             >
                <div className={`p-3 rounded-2xl ${activeSegment === SegmentType.PARENT ? 'bg-white/20' : 'bg-green-100 text-green-600'}`}>
                    <Users size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <span className="block font-black text-lg uppercase">Padres</span>
                    <span className={`text-xs font-bold ${activeSegment === SegmentType.PARENT ? 'text-green-100' : 'text-slate-400'}`}>Guía Familiar</span>
                </div>
             </button>
             
             <button 
                onClick={() => setActiveSegment(SegmentType.SCHOOL)}
                className={`flex items-center gap-4 px-6 py-5 rounded-3xl text-left transition-all border-2 shrink-0 ${activeSegment === SegmentType.SCHOOL ? 'bg-purple-600 border-purple-600 text-white shadow-xl scale-105' : 'bg-slate-50 border-slate-100 text-slate-500 hover:bg-slate-100'}`}
             >
                <div className={`p-3 rounded-2xl ${activeSegment === SegmentType.SCHOOL ? 'bg-white/20' : 'bg-purple-100 text-purple-600'}`}>
                    <School size={24} strokeWidth={2.5} />
                </div>
                <div>
                    <span className="block font-black text-lg uppercase">Colegios</span>
                    <span className={`text-xs font-bold ${activeSegment === SegmentType.SCHOOL ? 'text-purple-100' : 'text-slate-400'}`}>Docentes</span>
                </div>
             </button>
          </div>

          {/* Content Display - Styled as a large card */}
          <div className="md:w-2/3 bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-100 shadow-xl flex flex-col justify-center min-h-[400px] relative overflow-hidden">
             {/* Decorative element */}
             <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-bl-[3rem] -z-0"></div>
             
             <div className="relative z-10">
                {renderContent()}
             </div>
             
             <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
                 <button className="flex items-center gap-2 font-black text-slate-900 hover:gap-4 transition-all">
                     LEER MÁS <ArrowRight size={20} />
                 </button>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};