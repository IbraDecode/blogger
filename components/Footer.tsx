import React, { useState, useEffect } from 'react';
import { GithubIcon, InstagramIcon, TelegramIcon, ArrowUpIcon } from './Icons';

interface FooterProps {
    visitCount: number | null;
}

export const Footer: React.FC<FooterProps> = ({ visitCount }) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <footer id="kontak" className="bg-slate-100 dark:bg-dark-navy/90 border-t border-slate-200 dark:border-slate-800 relative">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                    <div>
                        <a href="#" className="font-poppins text-xl font-bold text-dark-navy dark:text-clean-white">
                            Dunia<span className="text-neon-blue">Programmer</span>
                        </a>
                        <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-xs mx-auto md:mx-0">
                            Menjelajahi dunia web, satu baris kode pada satu waktu.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-poppins font-bold text-lg text-dark-navy dark:text-clean-white mb-4">Tautan</h4>
                        <ul className="space-y-2">
                            <li><a href="#artikel" className="text-slate-600 dark:text-slate-400 hover:text-neon-blue transition-colors">Artikel</a></li>
                            <li><a href="#tentang" className="text-slate-600 dark:text-slate-400 hover:text-neon-blue transition-colors">Tentang</a></li>
                            <li><a href="#" className="text-slate-600 dark:text-slate-400 hover:text-neon-blue transition-colors">Kebijakan Privasi</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 id="tentang" className="font-poppins font-bold text-lg text-dark-navy dark:text-clean-white mb-4">Ikuti Kami</h4>
                        <div className="flex justify-center md:justify-start space-x-5">
                            <a href="https://github.com/IbraDecpde" target="_blank" rel="noopener noreferrer" aria-label="Github" className="text-slate-500 dark:text-slate-400 hover:text-neon-blue transition-colors hover:scale-110 transform duration-300">
                                <GithubIcon className="w-7 h-7" />
                            </a>
                            <a href="https://www.instagram.com/ibramdn78_" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-slate-500 dark:text-slate-400 hover:text-neon-blue transition-colors hover:scale-110 transform duration-300">
                                <InstagramIcon className="w-7 h-7" />
                            </a>
                            <a href="https://t.me/ibradecode" target="_blank" rel="noopener noreferrer" aria-label="Telegram" className="text-slate-500 dark:text-slate-400 hover:text-neon-blue transition-colors hover:scale-110 transform duration-300">
                                <TelegramIcon className="w-7 h-7" />
                            </a>
                        </div>
                        {visitCount !== null && (
                             <div className="mt-6 text-center md:text-left">
                                <p className="text-sm text-slate-500 dark:text-slate-400">Total Kunjungan:</p>
                                <p className="text-2xl font-poppins font-bold text-dark-navy dark:text-clean-white">{visitCount.toLocaleString()}</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 text-center text-slate-500 dark:text-slate-400 text-sm space-y-2">
                    <p>&copy; {new Date().getFullYear()} Dunia Programmer. All rights reserved.</p>
                    <p>
                        Developed by <a href="https://github.com/IbraDecpde" target="_blank" rel="noopener noreferrer" className="font-semibold text-slate-600 dark:text-slate-300 hover:text-neon-blue transition-colors">Ibra Decode</a>
                        <span className="mx-2">|</span>
                        Siswa SMPN 19 MATARAM
                    </p>
                </div>
            </div>
            
            <button
                onClick={scrollToTop}
                className={`fixed bottom-8 right-8 bg-neon-blue text-dark-navy w-14 h-14 rounded-full shadow-lg hover:bg-opacity-80
                           flex items-center justify-center transition-all duration-300 ease-in-out z-40
                           hover:scale-110
                           ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}
                aria-label="Scroll to top"
            >
                <ArrowUpIcon className="w-7 h-7" />
            </button>
        </footer>
    );
};