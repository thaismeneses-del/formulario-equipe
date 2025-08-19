import React from 'react';
import { Bot } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>
      
      <div className="relative">
        {/* Top Bar - Removed text content */}
        <div className="bg-blue-950/50 py-2">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center">
              {/* Empty space for visual balance */}
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              {/* Logo Area */}
              <div className="flex justify-center items-center mb-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl">
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-left">
                      <h1 className="text-2xl font-bold text-white">RPA</h1>
                      <p className="text-blue-200 text-sm">Automação Robótica de Processos</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Title */}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Formulário para Presente
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Queremos deixar o seu aniversário do seu jeito. Responda rapidinho e nos ajude a escolher um presente que combine com você.
              </p>

              {/* Progress Indicator */}
              <div className="mt-8 flex justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-full p-1 border border-white/20">
                  <div className="flex space-x-1">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((step) => (
                      <div
                        key={step}
                        className="w-3 h-3 rounded-full bg-white/30 border border-white/50"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
