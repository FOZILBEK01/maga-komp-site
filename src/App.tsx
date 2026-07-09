import { motion } from 'motion/react';
import { 
  Monitor, 
  Wrench, 
  Cpu, 
  Download, 
  ShieldCheck, 
  Zap, 
  Wallet, 
  MapPin, 
  Clock, 
  Phone, 
  Send,
  ChevronRight
} from 'lucide-react';

export default function App() {
  const services = [
    {
      title: "Kompyuter va Noutbuklar Ta'mirlash",
      description: "Barcha turdagi nosozliklarni aniqlash va sifatli ta'mirlash xizmatlari.",
      icon: <Wrench className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Dasturlar va Windows O'rnatish",
      description: "Operatsion tizimlarni o'rnatish, antivirus va kerakli dasturlar bilan ta'minlash.",
      icon: <Download className="w-8 h-8 text-blue-500" />
    },
    {
      title: "Butlovchi Qismlar Savdosi",
      description: "Eng so'nggi avlod protsessorlar, videokartalar, xotira va boshqa ehtiyot qismlar.",
      icon: <Cpu className="w-8 h-8 text-cyan-400" />
    },
    {
      title: "Yangi va Ishlatilgan Texnikalar",
      description: "Hamyonbop narxlarda ishonchli kompyuter va noutbuklar xaridi.",
      icon: <Monitor className="w-8 h-8 text-blue-500" />
    }
  ];

  const stats = [
    {
      title: "Sifatli Kafolat",
      description: "Barcha ta'mirlash ishlari va qismlar uchun to'liq kafolat beramiz.",
      icon: <ShieldCheck className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
    },
    {
      title: "Tezkor Xizmat",
      description: "Muammolarni qisqa fursatda, kuttirmasdan hal qilib beramiz.",
      icon: <Zap className="w-10 h-10 text-blue-500 mx-auto mb-4" />
    },
    {
      title: "Hamyonbop Narx",
      description: "Olmaliq shahrida eng maqbul narxlar va yuqori sifat kafolati.",
      icon: <Wallet className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-100 relative overflow-hidden">
      
      {/* Background Neon Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyan-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-[40%] right-[-10%] w-[30%] h-[50%] bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[40%] h-[40%] bg-indigo-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Monitor className="w-8 h-8 text-cyan-400" />
            <span className="text-xl sm:text-2xl font-display font-bold text-white tracking-tight">
              MaGa<span className="text-cyan-400">-</span>KoMp
            </span>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#xizmatlar" className="hover:text-cyan-400 transition-colors">Xizmatlar</a>
            <a href="#afzalliklar" className="hover:text-cyan-400 transition-colors">Afzalliklarimiz</a>
            <a href="#aloqa" className="hover:text-cyan-400 transition-colors">Aloqa</a>
          </nav>

          <div className="flex items-center gap-4">
            <a 
              href="tel:+998946105566" 
              className="hidden sm:flex items-center gap-2 text-sm font-medium hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +998 94 610 55 66
            </a>
            <a 
              href="https://t.me/MaGaAlmaliK" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all shadow-[0_0_15px_rgba(6,182,212,0.3)] hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Telegram</span>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 pt-20">
        
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-8"
          >
            <Zap className="w-4 h-4" />
            Olmaliq shahridagi ishonchli IT markaz
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight mb-8 leading-tight"
          >
            Texnikangiz <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ishonchli Qo'llarda
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl max-w-2xl text-slate-400 mb-10 leading-relaxed"
          >
            MaGa-KoMp-Olmaliq – kompyuterlar va noutbuklar savdosi, professional ta'mirlash xizmati va yuqori sifatli ehtiyot qismlar do'koni.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
          >
            <a 
              href="#xizmatlar" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-slate-950 font-semibold hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              Xizmatlar bilan tanishish
            </a>
            <a 
              href="#aloqa" 
              className="w-full sm:w-auto px-8 py-4 rounded-xl border border-slate-700 hover:border-slate-500 hover:bg-slate-800 transition-all flex items-center justify-center gap-2 text-white font-medium"
            >
              Bog'lanish <ChevronRight className="w-4 h-4" />
            </a>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="xizmatlar" className="py-24 bg-slate-900/50 border-y border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Bizning Xizmatlar</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Texnikangizning uzluksiz va tezkor ishlashini ta'minlash uchun barcha turdagi xizmatlarni taklif etamiz.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-slate-950 border border-slate-800 hover:border-cyan-500/50 rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">{service.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Info/Stats Section */}
        <section id="afzalliklar" className="py-24 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Nega Aynan Biz?</h2>
              <p className="text-slate-400 max-w-2xl mx-auto">Mijozlarimiz bizni ishonchli hamkor sifatida tanlashadi, chunki biz quyidagilarni kafolatlaymiz:</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center p-8 rounded-3xl bg-slate-900/40 border border-slate-800"
                >
                  {stat.icon}
                  <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
                  <p className="text-slate-400">{stat.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacts Section */}
        <section id="aloqa" className="py-24 bg-slate-900/50 border-t border-white/5 relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Biz Bilan Bog'lanish</h2>
                <p className="text-slate-400 mb-10 text-lg">Savollaringiz bormi yoki texnik yordam kerakmi? Manzilimizga tashrif buyuring yoki qo'ng'iroq qiling.</p>
                
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <MapPin className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Manzilimiz</h4>
                      <p className="text-slate-400 leading-relaxed">Amir Temur xiyoboni, 24,<br />Olmaliq shahri</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <Clock className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Ish Vaqti</h4>
                      <p className="text-slate-400">Dushanba – Shanba: 10:00 - 19:00</p>
                      <p className="text-slate-400">Yakshanba: 09:00 - 13:00</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0 border border-cyan-500/20">
                      <Phone className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-lg mb-1">Telefon Raqam</h4>
                      <a href="tel:+998946105566" className="text-slate-400 hover:text-cyan-400 transition-colors text-lg">+998 94 610 55 66</a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 p-2 shadow-2xl group transition-transform hover:scale-[1.02]">
                  <div className="block aspect-square rounded-2xl overflow-hidden relative">
                    {/* Interactive Yandex Map Embedded */}
                    <iframe 
                      src="https://yandex.uz/map-widget/v1/?ll=69.598216%2C40.850952&mode=search&oid=173672360524&ol=biz&z=17" 
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      title="MaGa-KoMp Yandex Maps"
                      className="absolute inset-0 z-0"
                    ></iframe>
                  </div>
                </div>
                
                {/* Button for direct link moved below the map */}
                <a 
                  href="https://yandex.uz/maps/org/maga_komp/173672360524/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-slate-900 border border-slate-800 text-white hover:bg-cyan-400 hover:text-slate-950 px-6 py-4 rounded-xl font-bold transition-all w-full shadow-lg"
                >
                  <MapPin className="w-5 h-5" />
                  Xaritani dasturda ochish
                </a>
              </div>

            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950 py-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Monitor className="w-6 h-6 text-cyan-400" />
            <span className="text-lg font-display font-bold text-white tracking-tight">
              MaGa<span className="text-cyan-400">-</span>KoMp
            </span>
          </div>
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} MaGa-KoMp-Olmaliq. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </footer>
    </div>
  );
}
