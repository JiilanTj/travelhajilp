"use client"

import Image from "next/image";
import { ChevronDown, Users, Award, Building2, Clock, CheckCircle2, Hotel, CreditCard, UserCheck, Star, MessageCircle, Quote, Phone, Mail, MapPinIcon, Plus } from "lucide-react";
import { FaKaaba, FaWhatsapp } from "react-icons/fa";
import Navbar from "@/components/Navbar";
import CounterAnimation from "@/components/CounterAnimation";
import NewsSection from '@/components/NewsSection';
import PackageList from "./components/PackageList";

interface StatItem {
  icon: React.ReactNode;
  number: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    icon: <Users className="w-8 h-8" />,
    number: "15,000+",
    label: "Jamaah Terlayani"
  },
  {
    icon: <Clock className="w-8 h-8" />,
    number: "15+",
    label: "Tahun Pengalaman"
  },
  {
    icon: <Award className="w-8 h-8" />,
    number: "20+",
    label: "Penghargaan"
  },
  {
    icon: <Building2 className="w-8 h-8" />,
    number: "10+",
    label: "Kantor Cabang"
  }
];

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="min-h-screen">
        {/* Hero Section */}
        <section id="beranda" className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background dengan parallax effect dan overlay gradient */}
          <div className="absolute inset-0">
            <Image
              src="/hero-hajj.jpg"
              alt="Masjidil Haram"
              fill
              className="object-cover scale-110 animate-subtle-zoom"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"></div>
          </div>

          {/* Hero Content dengan animasi */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
            <div className="space-y-6 animate-fade-up">
              {/* Subtitle dengan line decoration */}
              <div className="flex items-center justify-center space-x-4 opacity-90">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/80"></div>
                <span className="text-white/90 uppercase tracking-[0.2em] text-sm font-light">
                  Bismillahirrahmanirrahim
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/80"></div>
              </div>

              {/* Main Title dengan gradient dan animasi */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80 animate-gradient">
                  Wujudkan Perjalanan
                </span>
                <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-300 animate-gradient delay-300">
                  Suci Anda
                </span>
              </h1>

              {/* Description dengan fade in */}
              <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed animate-fade-up delay-500">
                Layanan Haji & Umroh Terpercaya dengan Pengalaman Terbaik untuk Perjalanan Ibadah yang Khusyuk
              </p>

              {/* CTA Buttons dengan hover effects */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8 animate-fade-up delay-700">
                <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5)] transition-all duration-300">
                  <span className="relative z-10 font-semibold">Konsultasi Sekarang</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                <button className="group px-8 py-3 rounded-full border-2 border-white/30 text-white hover:border-white transition-all duration-300">
                  <span className="font-semibold">Pelajari Paket</span>
                </button>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center">
            <span className="text-white/80 text-sm mb-2 animate-fade-in-up translate-x-6">
              Scroll Kebawah
            </span>
            <div className="relative translate-x-6">
              <ChevronDown className="w-6 h-6 text-white/80 animate-bounce-slow" />
              <ChevronDown className="w-6 h-6 text-white/50 absolute top-1 left-0 animate-bounce-slow delay-150" />
              <ChevronDown className="w-6 h-6 text-white/30 absolute top-2 left-0 animate-bounce-slow delay-300" />
            </div>
          </div>
        </section>

        {/* Stats Section dengan design yang lebih modern dan horizontal */}
        <section className="py-16 bg-gradient-to-r from-green-50 via-white to-green-50 relative">
          {/* Background subtle pattern */}
          <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.02]"></div>

          <div className="max-w-7xl mx-auto px-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-green-100 rounded-full blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-emerald-100 rounded-full blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2"></div>

              <div className="flex flex-wrap lg:flex-nowrap items-center justify-between gap-8">
                {statsData.map((stat, index) => (
                  <div 
                    key={index}
                    className="flex-1 group"
                  >
                    <div className="flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:bg-green-50/50">
                      {/* Icon */}
                      <div className="relative flex-shrink-0">
                        <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 text-green-600 group-hover:scale-110 transition-all duration-300">
                          {stat.icon}
                        </div>
                      </div>

                      {/* Number & Label */}
                      <div>
                        <CounterAnimation 
                          end={stat.number} 
                          duration={2000} 
                          suffix={stat.number.includes('+') ? '+' : ''}
                        />
                        <p className="text-gray-600 font-medium">
                          {stat.label}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Keunggulan Travel Section */}
        <section id="tentang" className="py-24 bg-white relative select-text overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute left-0 top-1/4 w-96 h-96 bg-green-100 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-[90px] opacity-20 animate-pulse delay-1000"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-green-500/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-emerald-500/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-green-500/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-20 w-3 h-3 bg-emerald-500/10 rounded-full animate-ping delay-700"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Section Header dengan animasi */}
            <div className="text-center max-w-3xl mx-auto mb-20 animate-fade-up">
              {/* Subtitle dengan line decoration */}
              <div className="flex items-center justify-center space-x-4 opacity-90 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-600/50"></div>
                <span className="text-green-600/80 uppercase tracking-[0.2em] text-sm font-light">
                  Keunggulan Kami
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-600/50"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 select-text text-green-600 animate-fade-up">
                Mengapa Memilih Kami?
              </h2>
              <p className="text-gray-600 leading-relaxed select-text animate-fade-up delay-200">
                Kami berkomitmen memberikan pelayanan terbaik dengan standar kualitas tinggi untuk memastikan ibadah Anda khusyuk dan berkesan
              </p>
            </div>

            {/* Features Grid dengan stagger animation */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Feature 1 - Berizin Resmi */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle2 className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Berizin Resmi Kemenag
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Travel haji dan umroh resmi berizin dari Kementerian Agama Republik Indonesia.
                  </p>
                </div>
              </div>

              {/* Feature 2 - Pendamping */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.2s_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <UserCheck className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Pendamping Berpengalaman
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Pembimbing ibadah yang ahli dan berpengalaman mendampingi perjalanan spiritual Anda.
                  </p>
                </div>
              </div>

              {/* Feature 3 - Harga */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.3s_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <CreditCard className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Harga Transparan
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Biaya perjalanan yang jelas dan terperinci tanpa ada biaya tersembunyi.
                  </p>
                </div>
              </div>

              {/* Feature 4 - Hotel */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.4s_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Hotel className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Hotel Dekat Masjid
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Akomodasi premium dengan lokasi strategis dekat dengan Masjidil Haram.
                  </p>
                </div>
              </div>

              {/* Feature 5 - Fasilitas */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.5s_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Star className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Fasilitas Eksklusif
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Layanan premium dan fasilitas eksklusif untuk kenyamanan ibadah Anda.
                  </p>
                </div>
              </div>

              {/* Feature 6 - Konsultasi */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.6s_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MessageCircle className="w-7 h-7 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">
                    Konsultasi Gratis
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Dapatkan konsultasi gratis seputar perjalanan haji dan umroh dari tim ahli kami.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Paket Haji & Umroh Section */}
        <section id="paket-haji-umroh" className="py-24 bg-white relative select-text overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-green-500/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-emerald-500/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-green-500/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-20 w-3 h-3 bg-emerald-500/10 rounded-full animate-ping delay-700"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeUp_0.8s_ease-out_forwards]">
              <div className="flex items-center justify-center space-x-4 opacity-90 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-600/50"></div>
                <span className="text-green-600/80 uppercase tracking-[0.2em] text-sm font-light">
                  Pilihan Paket
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-600/50"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 select-text text-green-600">
                Paket Haji & Umroh
              </h2>
              <p className="text-gray-600 leading-relaxed select-text">
                Pilih paket perjalanan sesuai dengan kebutuhan Anda dengan fasilitas terbaik dan harga yang kompetitif
              </p>
            </div>

            {/* Paket Cards */}
            <PackageList />
          </div>
        </section>

        {/* Testimoni Jamaah Section */}
        <section className="py-24 bg-white relative select-text overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-green-500/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-emerald-500/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-green-500/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-20 w-3 h-3 bg-emerald-500/10 rounded-full animate-ping delay-700"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeUp_0.8s_ease-out_forwards]">
              {/* Subtitle dengan line decoration */}
              <div className="flex items-center justify-center space-x-4 opacity-90 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-600/50"></div>
                <span className="text-green-600/80 uppercase tracking-[0.2em] text-sm font-light">
                  Testimoni Jamaah
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-600/50"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 select-text text-green-600">
                Apa Kata Jamaah Kami?
              </h2>
              <p className="text-gray-600 leading-relaxed select-text">
                Pengalaman langsung dari jamaah yang telah merasakan pelayanan kami dalam perjalanan ibadah mereka
              </p>
            </div>

            {/* Testimonial Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <div className="group bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    &ldquo;Alhamdulillah, pelayanan sangat memuaskan. Hotel dekat dengan Masjidil Haram, pembimbing sangat sabar dan informatif. Insya Allah akan menggunakan jasa travel ini lagi.&rdquo;
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-lg">H</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">H. Ahmad Sutrisno</h4>
                      <p className="text-sm text-gray-500">Umroh Plus - Batch Februari 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="group bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.2s_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    &ldquo;MasyaAllah, pengalaman yang tak terlupakan. Semua diurus dengan profesional, dari keberangkatan sampai kepulangan. Pembimbing sangat membantu dalam pelaksanaan ibadah.&rdquo;
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-lg">H</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Hj. Siti Aminah</h4>
                      <p className="text-sm text-gray-500">Umroh Ramadhan - Batch April 2024</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="group bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300 select-text relative overflow-hidden animate-[fadeUp_0.8s_ease-out_0.4s_forwards] hover:-translate-y-1">
                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  {/* Quote Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                      <Quote className="w-6 h-6 text-green-600" />
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic">
                    &ldquo;Sangat terkesan dengan pelayanan yang diberikan. Tour ke Turki sangat berkesan, hotelnya nyaman, dan yang paling penting dekat dengan Masjidil Haram. Terima kasih!&rdquo;
                  </p>

                  {/* Profile */}
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                      <span className="text-green-600 font-semibold text-lg">M</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">M. Rizki Hidayat</h4>
                      <p className="text-sm text-gray-500">Umroh Plus Turki - Batch Maret 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* View More Button */}
            <div className="text-center mt-12 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
              <button className="group relative px-8 py-3 rounded-full bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.5)] transition-all duration-300">
                <span className="relative z-10 font-semibold">Lihat Testimoni Lainnya</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 bg-white relative select-text overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          
          {/* Gradient Orbs */}
          <div className="absolute left-0 top-1/4 w-96 h-96 bg-green-100 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
          <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-emerald-100 rounded-full blur-[90px] opacity-20 animate-pulse delay-1000"></div>
          
          {/* Decorative Elements */}
          <div className="absolute top-20 right-10 w-24 h-24 border-2 border-green-500/10 rounded-full"></div>
          <div className="absolute bottom-20 left-10 w-32 h-32 border-2 border-emerald-500/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-20 w-3 h-3 bg-green-500/20 rounded-full animate-ping"></div>
          <div className="absolute top-1/3 left-20 w-3 h-3 bg-emerald-500/10 rounded-full animate-ping delay-700"></div>

          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeUp_0.8s_ease-out_forwards]">
              <div className="flex items-center justify-center space-x-4 opacity-90 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-600/50"></div>
                <span className="text-green-600/80 uppercase tracking-[0.2em] text-sm font-light">
                  FAQ
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-600/50"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 select-text text-green-600">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-gray-600 leading-relaxed select-text">
                Temukan jawaban dari pertanyaan-pertanyaan umum seputar layanan haji dan umroh kami
              </p>
            </div>

            {/* FAQ Items */}
            <div className="max-w-3xl mx-auto space-y-4">
              {/* FAQ Item 1 */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
                <button className="w-full flex items-center justify-between gap-4">
                  <h3 className="text-left text-lg font-semibold text-gray-800">
                    Berapa DP minimal untuk pendaftaran?
                  </h3>
                  <Plus className="w-5 h-5 text-green-600 transform transition-transform group-hover:rotate-45" />
                </button>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  DP minimal untuk pendaftaran adalah Rp 5 juta per jamaah. Pembayaran dapat dilakukan secara tunai atau transfer ke rekening perusahaan.
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
                <button className="w-full flex items-center justify-between gap-4">
                  <h3 className="text-left text-lg font-semibold text-gray-800">
                    Dokumen apa saja yang perlu disiapkan?
                  </h3>
                  <Plus className="w-5 h-5 text-green-600 transform transition-transform group-hover:rotate-45" />
                </button>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  Dokumen yang perlu disiapkan antara lain: Paspor, KTP, Kartu Keluarga, Akta Kelahiran, Buku Nikah (untuk suami istri), dan pas foto dengan latar putih.
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="group bg-white p-6 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
                <button className="w-full flex items-center justify-between gap-4">
                  <h3 className="text-left text-lg font-semibold text-gray-800">
                    Apakah ada pembimbing yang mendampingi?
                  </h3>
                  <Plus className="w-5 h-5 text-green-600 transform transition-transform group-hover:rotate-45" />
                </button>
                <div className="mt-4 text-gray-600 leading-relaxed">
                  Ya, setiap grup akan didampingi oleh pembimbing berpengalaman yang akan memandu ibadah dan perjalanan Anda selama di tanah suci.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* News Section */}
        <NewsSection />

        {/* Kontak Section */}
        <section className="py-24 bg-white relative select-text overflow-hidden">
          {/* Background Decorations */}
          <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.03] pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 relative">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 animate-[fadeUp_0.8s_ease-out_forwards]">
              <div className="flex items-center justify-center space-x-4 opacity-90 mb-6">
                <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-green-600/50"></div>
                <span className="text-green-600/80 uppercase tracking-[0.2em] text-sm font-light">
                  Hubungi Kami
                </span>
                <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-green-600/50"></div>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-6 select-text text-green-600">
                Konsultasikan Perjalanan Anda
              </h2>
              <p className="text-gray-600 leading-relaxed select-text">
                Tim kami siap membantu mewujudkan perjalanan ibadah yang Anda impikan
              </p>
            </div>

            {/* Contact Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Contact Info Card */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
                {/* Contact Header */}
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">Mari Terhubung</h3>
                  <p className="text-gray-600">Kami siap membantu mewujudkan perjalanan ibadah Anda</p>
                </div>

                <div className="space-y-6">
                  {/* Contact Info Groups */}
                  <div className="space-y-6 mb-8">
                    {/* Phone & WhatsApp Group */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-50/50 to-transparent border border-green-100">
                      <div className="space-y-4">
                        {/* Phone */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center flex-shrink-0">
                            <Phone className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Telepon</h4>
                            <p className="text-gray-600 text-sm mt-1">+62 812-3456-7890</p>
                            <p className="text-gray-600 text-sm">+62 821-9876-5432</p>
                          </div>
                        </div>

                        {/* WhatsApp */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center flex-shrink-0">
                            <MessageCircle className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">WhatsApp</h4>
                            <p className="text-gray-600 text-sm mt-1">+62 812-3456-7890</p>
                            <a href="https://wa.me/628123456789?text=Halo%2C%20saya%20mau%20bertanya%20tentang%20Grasindo%20Travel" className="inline-flex items-center gap-1 text-sm text-green-600 hover:text-green-700 font-medium mt-1 group">
                              Chat Sekarang 
                              <ChevronDown className="w-4 h-4 rotate-[-90deg] transition-transform group-hover:translate-x-1" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Email & Address Group */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-green-50/50 to-transparent border border-green-100">
                      <div className="space-y-4">
                        {/* Email */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center flex-shrink-0">
                            <Mail className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Email</h4>
                            <p className="text-gray-600 text-sm mt-1">info@travelhaji.com</p>
                            <p className="text-gray-600 text-sm">cs@travelhaji.com</p>
                          </div>
                        </div>

                        {/* Address */}
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center flex-shrink-0">
                            <MapPinIcon className="w-5 h-5 text-green-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-gray-800">Alamat Kantor</h4>
                            <p className="text-gray-600 text-sm mt-1">Jl. Ahmad Yani No. 123</p>
                            <p className="text-gray-600 text-sm">Jakarta Pusat, 10150</p>
                            <p className="text-gray-600 text-sm">Indonesia</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="pt-6 border-t border-gray-100">
                    <h4 className="font-medium text-gray-800 mb-4">Ikuti Kami di Media Sosial</h4>
                    <div className="flex gap-3">
                      <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center hover:scale-110 transition-transform group">
                        <svg className="w-5 h-5 text-green-600 transition-transform group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center hover:scale-110 transition-transform group">
                        <svg className="w-5 h-5 text-green-600 transition-transform group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center hover:scale-110 transition-transform group">
                        <svg className="w-5 h-5 text-green-600 transition-transform group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center hover:scale-110 transition-transform group">
                        <svg className="w-5 h-5 text-green-600 transition-transform group-hover:-rotate-12" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/></svg>
                      </a>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-6">
                    <button className="w-full group relative px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)] transition-all duration-300">
                      <span className="relative z-10">Berlangganan</span>
                      <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="bg-white p-8 rounded-2xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] hover:shadow-lg transition-all duration-300">
                <div className="w-full h-[500px] rounded-xl overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.666466440523!2d106.83773231476167!3d-6.175392395527974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5d2e764b12d%3A0x3d2ad6e1e0e9bcc8!2sJl.%20Jend.%20Ahmad%20Yani%2C%20Jakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1635000000000!5m2!1sen!2sid" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 bg-[url('/pattern-islamic.png')] bg-repeat opacity-[0.02] pointer-events-none"></div>
        
        {/* Gradient Orbs */}
        <div className="absolute left-0 top-1/4 w-96 h-96 bg-green-900 rounded-full blur-[120px] opacity-10 animate-pulse"></div>
        <div className="absolute right-0 bottom-1/4 w-72 h-72 bg-emerald-900 rounded-full blur-[90px] opacity-10 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4">
          {/* Main Footer */}
          <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                  <FaKaaba className="w-6 h-6 text-white" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-white font-bold text-xl">Grasindo Travel</h3>
                  <span className="text-gray-400 text-sm">Melayani dengan Amanah</span>
                </div>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Melayani perjalanan ibadah haji dan umroh Anda dengan pengalaman yang khusyuk dan berkesan.
              </p>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"/></svg>
                </a>
                <a href="#" className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors group">
                  <svg className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd"/></svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-4">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Paket Umroh</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Paket Haji</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Galeri</a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">Blog</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-white font-semibold mb-6">Kontak</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">+62 812-3456-7890</p>
                    <p className="text-gray-400">+62 821-9876-5432</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">info@travelhaji.com</p>
                    <p className="text-gray-400">cs@travelhaji.com</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-gray-400 mt-0.5" />
                  <div>
                    <p className="text-gray-400">Jl. Ahmad Yani No. 123</p>
                    <p className="text-gray-400">Jakarta Pusat, 10150</p>
                    <p className="text-gray-400">Indonesia</p>
                  </div>
                </li>
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-white font-semibold mb-6">Newsletter</h4>
              <p className="text-gray-400 text-sm mb-4">
                Dapatkan info terbaru dan promo menarik dari kami
              </p>
              <form className="space-y-3">
                <div className="relative">
                  <input 
                    type="email" 
                    placeholder="Masukkan email Anda" 
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 text-gray-300 placeholder:text-gray-500 focus:outline-none focus:border-green-500/50 focus:ring-1 focus:ring-green-500/50"
                  />
                </div>
                <button className="w-full group relative px-4 py-2.5 rounded-lg bg-gradient-to-r from-green-600 to-emerald-500 text-white text-sm hover:shadow-[0_0_30px_-5px_rgba(52,211,153,0.3)] transition-all duration-300">
                  <span className="relative z-10">Berlangganan</span>
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="py-6 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex flex-col items-center md:items-start gap-1">
                <p className="text-gray-400 text-sm text-center md:text-left">
                  © {new Date().getFullYear()} Grasindo Travel. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs">
                  Powered by <a href="#" className="hover:text-gray-400 transition-colors">Erazorre Technology Bandung</a>
                </p>
              </div>
              <div className="flex items-center gap-6">
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
                <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/628123456789?text=Halo%2C%20saya%20mau%20bertanya%20tentang%20Grasindo%20Travel"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 group"
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        <div className="absolute -top-12 right-0 bg-black/80 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
          Chat on WhatsApp
        </div>
      </a>
    </main>
  );
}
