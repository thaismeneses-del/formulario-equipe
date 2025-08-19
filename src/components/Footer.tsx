import React from 'react';
import { Bot, Shield, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white mt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          
          {/* Seção principal */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-xl">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold">RPA</h3>
            </div>
            <p className="text-blue-200 leading-relaxed text-lg max-w-2xl mx-auto">
              Transformando processos através da automação inteligente. 
              Inovação e tecnologia para o futuro dos negócios.
            </p>
          </div>

          {/* Linha divisória */}
          <div className="border-t border-blue-600 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-blue-200 text-sm">
                © 2024 RPA - Automação Robótica de Processos
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <div className="flex items-center space-x-2 text-blue-200 text-sm">
                  <Shield className="w-4 h-4" />
                  <span>Dados Protegidos</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-200 text-sm">
                  <Heart className="w-4 h-4" />
                  <span>Feito com ❤️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
