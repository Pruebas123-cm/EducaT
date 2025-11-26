import React from 'react';
import { Instagram, Youtube, Twitter, MessageCircle, GraduationCap } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contacto" className="bg-[#111] text-slate-400 py-16 rounded-t-[3rem] mt-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
            
            <div className="col-span-1 md:col-span-2 space-y-6">
                <div className="flex items-center gap-2 text-white">
                    <div className="bg-blue-600 p-1.5 rounded-lg">
                        <GraduationCap size={20} />
                    </div>
                    <span className="text-2xl font-black tracking-tight">EducaT</span>
                </div>
                <p className="max-w-xs text-slate-500 font-medium">
                    Ayudamos a los jóvenes a encontrar su camino profesional combinando pasión, talento y oportunidades reales.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-white">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-white">
                        <Youtube size={20} />
                    </a>
                    <a href="#" className="bg-white/10 p-3 rounded-full hover:bg-white/20 transition-colors text-white">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Enlaces</h4>
                <ul className="space-y-4 font-medium">
                    <li><a href="#inicio" className="hover:text-white transition-colors">Inicio</a></li>
                    <li><a href="#programa" className="hover:text-white transition-colors">Programa</a></li>
                    <li><a href="#planes" className="hover:text-white transition-colors">Planes</a></li>
                    <li><a href="#nosotros" className="hover:text-white transition-colors">Nosotros</a></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-white mb-6 uppercase text-sm tracking-wider">Contacto</h4>
                <button className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-2xl transition-colors w-full md:w-auto font-bold shadow-lg shadow-green-900/20">
                    <MessageCircle size={20} fill="white" className="text-transparent" />
                    <span>WhatsApp Asesor</span>
                </button>
            </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm font-medium">© 2024 EducaT. Todos los derechos reservados.</p>
            
            <div className="flex gap-3">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md cursor-help hover:scale-110 transition-transform" title="ODS 4: Educación de Calidad">4</div>
                <div className="w-10 h-10 bg-[#A21942] rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md cursor-help hover:scale-110 transition-transform" title="ODS 8: Trabajo Decente">8</div>
                <div className="w-10 h-10 bg-[#DD1367] rounded-lg flex items-center justify-center text-white font-black text-sm shadow-md cursor-help hover:scale-110 transition-transform" title="ODS 10: Reducción de Desigualdades">10</div>
            </div>
        </div>
      </div>
    </footer>
  );
};