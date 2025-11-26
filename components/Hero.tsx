import React from 'react';
import { ArrowRight, Sparkles, MoveRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-12 pb-20 md:pt-20 md:pb-32 overflow-hidden">
      
      {/* Decorative Floating Elements matching reference style */}
      <div className="absolute top-20 left-10 text-blue-600 hover:animate-pulse hidden lg:block transition-all duration-300">
        <Sparkles size={48} strokeWidth={1.5} />
      </div>
      <div className="absolute top-40 right-20 text-lime-500 hover:animate-bounce hidden lg:block transition-all duration-300">
        <Sparkles size={32} strokeWidth={2} className="fill-lime-200" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-5xl mx-auto space-y-10">
          
          {/* Main Headline Block - Styled like "LEVEL UP YOUR DESIGN" */}
          <div className="flex flex-col items-center gap-3 md:gap-6">
            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
                 {/* Blue Star Decoration */}
                <div className="hidden md:flex bg-blue-100 p-2 rounded-full rotate-12 hover:rotate-45 transition-transform duration-500">
                    <Sparkles className="text-blue-600" size={32} />
                </div>
                
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                  Transforma
                </h1>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3 md:gap-6 w-full justify-center">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.9]">
                  Tu Futuro
                </h1>
                
                {/* Lime Green Pill with Arrow - Matches the "-> WITH OUR" pill */}
                <div className="bg-[#D9F99D] px-6 py-2 md:py-4 rounded-full flex items-center gap-3 border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transform -rotate-2 hover:rotate-0 transition-transform cursor-pointer">
                    <MoveRight className="text-slate-900 w-6 h-6 md:w-8 md:h-8" strokeWidth={3} />
                    <span className="font-black text-lg md:text-2xl text-slate-900 uppercase">Con IA</span>
                </div>
            </div>

            <div className="relative">
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-blue-600 tracking-tighter uppercase leading-[0.9]">
                  Sin Miedo
                </h1>
                <div className="absolute -bottom-2 w-full h-3 bg-lime-300 -z-10 rotate-1 rounded-full"></div>
            </div>
          </div>
            
          <h2 className="text-lg md:text-xl font-medium text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Somos una plataforma que combina <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">neurociencia</span>, <span className="font-bold text-slate-900 bg-white px-2 py-0.5 rounded-md border border-slate-200">retos prácticos</span> y análisis de datos para ayudarte a descubrir verdadera vocación.
          </h2>

          <div className="flex flex-col sm:flex-row gap-4 items-center pt-4">
             {/* "Join us" style button */}
             <div className="bg-white p-1.5 rounded-full border border-slate-200 shadow-sm flex items-center gap-4 pl-6 pr-2">
                 <div className="flex flex-col items-start text-left">
                     <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">Empieza a estudiar</span>
                     <span className="text-sm font-bold text-slate-900">con otros estudiantes</span>
                 </div>
                 <button className="bg-[#D9F99D] hover:bg-lime-300 text-slate-900 px-6 py-3 rounded-full text-base font-bold transition-all flex items-center gap-2 border border-slate-900/10">
                    Únete ahora
                    <ArrowRight size={18} strokeWidth={3} />
                 </button>
             </div>
          </div>

          {/* Hero Image / Cards Visual - Rounded aesthetic */}
          <div className="w-full mt-12 relative max-w-4xl mx-auto">
              {/* Background Blob */}
              <div className="absolute inset-0 bg-blue-100 rounded-[3rem] transform rotate-2 scale-105 z-0"></div>
              
              <div className="relative z-10 bg-white p-4 md:p-6 rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden grid md:grid-cols-2 gap-6 items-center">
                  <img 
                    src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1532&auto=format&fit=crop" 
                    alt="Adolescentes estudiando en su colegio" 
                    className="w-full h-64 md:h-80 object-cover rounded-[2rem] border border-slate-100"
                  />
                  <div className="p-4 text-left space-y-6">
                      <div className="inline-block bg-purple-100 text-purple-700 font-bold px-4 py-1.5 rounded-full text-sm">
                          ✨ Validación Científica
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 leading-tight">
                          "Cada joven tiene un talento único."
                      </h3>
                      <div className="bg-[#F4F4F0] p-4 rounded-2xl flex items-center gap-4">
                          <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">95%</div>
                          <div>
                              <p className="font-bold text-slate-900">Match Vocacional</p>
                              <p className="text-xs text-slate-500">Basado en Rueda Estratégica</p>
                          </div>
                      </div>
                  </div>
              </div>
          </div>

        </div>
      </div>
    </section>
  );
};