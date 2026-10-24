import { ShieldCheck, Smartphone, CheckCircle2, MessageCircle, ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-8 pb-12 sm:pt-14 sm:pb-16 lg:pb-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Badge Pengenal */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/70 px-4 py-1.5 text-xs sm:text-sm font-medium text-[#0071E3] backdrop-blur-sm">
            <ShieldCheck className="h-4 w-4" />
            <span>Spesialis CCTV & Keamanan Usaha Terpercaya</span>
          </div>

          {/* Headline Utama */}
          <h1 className="mt-6 max-w-3xl text-3xl font-bold tracking-tight text-[#1D1D1F] sm:text-5xl sm:leading-[1.15]">
            Jasa Pasang & Perbaikan CCTV Rapi, Jernih, dan Bergaransi
          </h1>

          {/* Deskripsi Singkat */}
          <p className="mt-5 max-w-2xl text-base sm:text-lg text-[#86868B] leading-relaxed">
            Dikerjakan langsung oleh teknisi berpengalaman{" "}
            <strong className="font-semibold text-[#1D1D1F]">
              (Pak Aphin)
            </strong>
            . Solusi kamera pengawas untuk toko emas, ruko, pabrik, hingga rumah
            pribadi. Bisa langsung dipantau dari layar HP Anda setiap saat.
          </p>

          {/* Tombol Aksi Langsung */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 w-full max-w-md">
            <a
              href="https://wa.me/6281234567890?text=Halo%20Pak%20Aphin,%20saya%20ingin%20konsultasi%20pemasangan%20CCTV"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0071E3] px-6 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-[#0077ED] active:scale-95 transition-all"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Konsultasi via WhatsApp</span>
            </a>

            <a
              href="#layanan"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-[#E5E5EA] bg-white px-6 py-3.5 text-base font-semibold text-[#1D1D1F] shadow-sm hover:bg-[#F5F5F7] active:scale-95 transition-all"
            >
              <span>Lihat Paket Layanan</span>
              <ArrowDown className="h-4 w-4 text-[#86868B]" />
            </a>
          </div>

          {/* 3 Keunggulan Singkat (Pills) */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl">
            <div className="flex items-center justify-center gap-2 rounded-xl bg-white/90 border border-[#E5E5EA] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#1D1D1F] shadow-xs">
              <CheckCircle2 className="h-4 w-4 text-[#34C759]" />
              <span>Instalasi Kabel Rapi & Aman</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-white/90 border border-[#E5E5EA] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#1D1D1F] shadow-xs">
              <Smartphone className="h-4 w-4 text-[#0071E3]" />
              <span>Online HP Android & iPhone</span>
            </div>
            <div className="flex items-center justify-center gap-2 rounded-xl bg-white/90 border border-[#E5E5EA] px-4 py-2.5 text-xs sm:text-sm font-medium text-[#1D1D1F] shadow-xs">
              <ShieldCheck className="h-4 w-4 text-[#FF9500]" />
              <span>Garansi Alat & Purna Jual</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
