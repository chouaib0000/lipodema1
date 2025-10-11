import { useEffect, useState } from 'react';

interface SplashScreenProps {
  onComplete: () => void;
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 1000);
    }, 4500);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-gradient-to-br from-sky-600 via-blue-700 to-sky-900 transition-opacity duration-800 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        perspective: '1000px',
      }}
    >
      <div className="relative w-full max-w-5xl px-8">
        <div
          className="relative"
          style={{
            animation: 'fadeInUp 1.5s ease-out forwards, float 4s ease-in-out infinite',
            transformStyle: 'preserve-3d',
          }}
        >
          <div className="mb-16 flex justify-center">
            <div
              className="relative"
              style={{
                animation: 'logoReveal 2s ease-out forwards, rotate3D 6s ease-in-out infinite',
                transformStyle: 'preserve-3d',
              }}
            >
              <div
                className="absolute inset-0 bg-white/30 blur-[100px]"
                style={{
                  animation: 'pulse 3s ease-in-out infinite',
                }}
              />
              <div
                className="absolute inset-0 bg-sky-300/40 blur-[80px]"
                style={{
                  animation: 'pulse 2.5s ease-in-out infinite 0.5s',
                }}
              />
              <img
                src="/2027/logo.png"
                alt="Logo"
                className="relative h-40 md:h-48 w-auto object-contain"
                style={{
                  filter: 'drop-shadow(0 0 40px rgba(255, 255, 255, 0.8)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))',
                }}
              />
            </div>
          </div>

          <div
            className="text-center"
            style={{
              animation: 'fadeInUp 1.8s ease-out 0.5s forwards',
              opacity: 0,
            }}
          >
            <h1
              className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-8 leading-tight px-4"
              style={{
                textShadow: '0 8px 30px rgba(0, 0, 0, 0.5), 0 0 60px rgba(255, 255, 255, 0.3), 0 0 100px rgba(135, 206, 235, 0.2)',
                letterSpacing: '0.01em',
              }}
            >
             Centre de Référence du traitement
              <br />
              <span className="text-sky-100 inline-block" style={{
                animation: 'shimmer 2s ease-in-out infinite',
              }}>du Lipœdème au Maroc</span>
            </h1>
          </div>

          <div
            className="mt-10 text-center"
            style={{
              animation: 'fadeInUp 1.8s ease-out 0.8s forwards, glow 3s ease-in-out infinite',
              opacity: 0,
            }}
          >
            <div className="inline-block bg-white/15 backdrop-blur-xl px-10 py-5 rounded-2xl border-2 border-white/30 shadow-2xl">
              <p className="text-2xl md:text-3xl text-white font-light tracking-wide">
                Dr Tawfik Sefrioui
              </p>
            </div>
          </div>
        </div>

        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            animation: 'bounce 2s ease-in-out infinite',
          }}
        >
          <div className="w-1 h-16 bg-gradient-to-b from-white/60 to-transparent rounded-full" />
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) translateZ(0);
          }
          to {
            opacity: 1;
            transform: translateY(0) translateZ(0);
          }
        }

        @keyframes logoReveal {
          from {
            opacity: 0;
            transform: scale(0.3) translateZ(-200px) rotateY(-360deg);
          }
          to {
            opacity: 1;
            transform: scale(1) translateZ(0) rotateY(0deg);
          }
        }

        @keyframes rotate3D {
          0%, 100% {
            transform: rotateY(0deg) rotateX(0deg) translateZ(30px);
          }
          25% {
            transform: rotateY(8deg) rotateX(-8deg) translateZ(40px);
          }
          50% {
            transform: rotateY(0deg) rotateX(0deg) translateZ(30px);
          }
          75% {
            transform: rotateY(-8deg) rotateX(8deg) translateZ(40px);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }

        @keyframes bounce {
          0%, 100% {
            transform: translateX(-50%) translateY(0);
          }
          50% {
            transform: translateX(-50%) translateY(12px);
          }
        }

        @keyframes shimmer {
          0%, 100% {
            filter: brightness(1);
          }
          50% {
            filter: brightness(1.3);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
          }
          50% {
            box-shadow: 0 0 40px rgba(255, 255, 255, 0.6), 0 0 60px rgba(135, 206, 235, 0.4);
          }
        }
      `}</style>
    </div>
  );
}
