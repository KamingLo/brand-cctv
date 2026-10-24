import Link from "next/link";
import { Video, MessageCircle, FileSpreadsheet } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[#E5E5EA] bg-white/80 backdrop-blur-md transition-all">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand / Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0071E3] text-white shadow-sm transition-transform group-hover:scale-105">
            <Video className="h-5 w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base font-bold tracking-tight text-[#1D1D1F] sm:text-lg">
              CCTV APHIN
            </span>
            <span className="text-[11px] font-medium text-[#86868B] -mt-0.5">
              Spesialis Pemasangan & Perbaikan
            </span>
          </div>
        </Link>

        {/* Navigation Menu */}
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#layanan"
            className="text-sm font-medium text-[#1D1D1F]/80 hover:text-[#0071E3] transition-colors"
          >
            Layanan Kami
          </a>
          <a
            href="#keunggulan"
            className="text-sm font-medium text-[#1D1D1F]/80 hover:text-[#0071E3] transition-colors"
          >
            Kenapa Pilih Kami?
          </a>
          <a
            href="#kontak"
            className="text-sm font-medium text-[#1D1D1F]/80 hover:text-[#0071E3] transition-colors"
          >
            Kontak & Lokasi
          </a>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          <a
            href="https://wa.me/6281234567890?text=Halo%20Pak%20Aphin,%20saya%20ingin%20tanya%20pemasangan%20/%20service%20CCTV"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-white shadow-sm hover:bg-[#20ba59] transition-all active:scale-95"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline">WhatsApp</span>
            <span className="sm:hidden">Chat</span>
          </a>

          <Link
            href="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F7] px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-[#1D1D1F] border border-[#E5E5EA] hover:bg-[#E5E5EA] transition-all"
            title="Sistem Invoice & Nota Digital CCTV APHIN"
          >
            <FileSpreadsheet className="h-4 w-4 text-[#0071E3]" />
            <span>Sistem Nota</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
