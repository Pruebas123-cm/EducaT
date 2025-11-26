import React from 'react';
import { Bot, Target, ChartPie, Users, BookOpen, ArrowUpRight } from 'lucide-react';
import { Feature } from '../types';

const features: Feature[] = [
  {
    title: "IA Conversacional",
    description: "Un asesor virtual que responde tus dudas 24/7 y aprende de tus intereses.",
    icon: Bot,
  },
  {
    title: "Retos Prácticos",
    description: "Prueba programar en 30 min y valida si realmente disfrutas el área.",
    icon: Target,
  },
  {
    title: "Historias & Mentorías",
    description: "Conecta con expertos de diversas carreras y recibe mentoría real.",
    icon: Users,
  },
  {
    title: "Rueda Estratégica",
    description: "Visualiza tus resultados y aptitudes de forma gráfica e interactiva.",
    icon: ChartPie,
  },
  {
    title: "Base de Datos",
    description: "Información actualizada, realista y curada por IA sobre carreras.",
    icon: BookOpen,
  },
];

export const FeaturesSection: React.FC = () => {
  return (
    <section id="planes" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        
        {/* Container looking like the grey section in the reference */}
        <div className="bg-[#E5E5E5] rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden">
             
             <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                 <div>
                    <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tight mb-4 leading-none">
                        Nuestras<br/>Herramientas
                    </h2>
                    <p className="text-slate-600 font-medium max-w-md">
                        Todo lo que necesitas para decidir tu futuro con seguridad y datos reales.
                    </p>
                 </div>
                 <div className="hidden md:block">
                     <div className="bg-white px-6 py-2 rounded-full border border-slate-200 shadow-sm text-sm font-bold text-slate-500">
                         SCROLL PARA VER MÁS ↓
                     </div>
                 </div>
             </div>

             {/* Grid layout similar to "Beginner/Expert Class" cards */}
             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col h-full group hover:shadow-lg transition-all">
                        
                        <div className="flex justify-between items-start mb-4">
                            {/* Icon Container */}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-transform group-hover:translate-x-1 group-hover:translate-y-1 group-hover:shadow-none ${
                                idx % 3 === 0 ? 'bg-blue-200' : idx % 3 === 1 ? 'bg-lime-200' : 'bg-purple-200'
                            }`}>
                                <feature.icon className="text-slate-900" size={32} strokeWidth={2} />
                            </div>
                            
                            {/* Arrow Button */}
                            <button className="bg-slate-900 text-white p-2 rounded-full hover:bg-blue-600 transition-colors">
                                <ArrowUpRight size={20} />
                            </button>
                        </div>

                        <div>
                            <h3 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{feature.title}</h3>
                            <p className="text-slate-500 font-medium text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    </div>
                ))}

                {/* Call to action card */}
                <div className="bg-blue-600 p-6 rounded-[2rem] shadow-lg flex flex-col justify-center items-center text-center text-white relative overflow-hidden group h-full min-h-[220px]">
                    <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                    <div className="relative z-10 space-y-4">
                        <h3 className="text-2xl font-black uppercase">¿Listo para empezar?</h3>
                        <p className="text-blue-100 text-sm font-medium">Únete a más de 150 estudiantes validados.</p>
                        <button className="bg-[#D9F99D] text-slate-900 px-6 py-3 rounded-full font-bold shadow-lg transform group-hover:scale-105 transition-transform border border-slate-900/10 w-full">
                            Iniciar Ahora
                        </button>
                    </div>
                </div>
             </div>
        </div>
      </div>
    </section>
  );
};