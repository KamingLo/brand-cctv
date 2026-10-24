import Link from "next/link";
import {
  ShieldCheck,
  CreditCard,
  FileText,
  Phone,
  MessageCircle,
  MapPin,
  Heart,
  ExternalLink,
} from "lucide-react";

export default function AboutFooter() {
  return (
    <footer id="kontak" className="border-t border-[#E5E5EA] bg-[#F5F5F7] pt-12 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Kenapa Memilih CCTV APHIN */}
        <div id="keunggulan" className="mb-12">
          <div className="rounded-2xl border border-[#E5E5EA] bg-white p-6 sm:p-8 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#1D1D1F]">
              Kenapa Memilih CCTV APHIN?
            </h3>
            <p className="mt-1 text-sm text-[#86868B]">
              Komitmen kami memberikan perlindungan dan ketenangan pikiran untuk
              usaha serta keluarga Anda.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Item 1 */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-[#0071E3]">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F]">
                    Teknisi Berpengalaman
                  </h4>
                  <p className="mt-1 text-xs text-[#86868B] leading-relaxed">
                    Dikerjakan langsung dengan teliti oleh Pak Aphin. Penarikan
                    kabel rapi, sudut kamera presisi, tanpa merusak estetika
                    bangunan.
                  </p>
                </div>
              </div>

              {/* Item 2 */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-[#34C759]">
                  <FileText className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F]">
                    Nota Digital & Garansi Jelas
                  </h4>
                  <p className="mt-1 text-xs text-[#86868B] leading-relaxed">
                    Setiap pengerjaan dilengkapi bukti nota resmi sistem digital
                    agar riwayat pembelian barang dan klaim garansi Anda aman
                    tercatat.
                  </p>
                </div>
              </div>

              {/* Item 3 */}
              <div className="flex gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                  <CreditCard className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#1D1D1F]">
                    Rekening Pembayaran Resmi
                  </h4>
                  <p className="mt-1 text-xs text-[#86868B] leading-relaxed">
                    Transaksi aman dan jelas:
                    <br />
                    <span className="font-semibold text-[#1D1D1F]">
                      Bank BCA: 3351272846
                    </span>
                    <br />
                    a.n. <span className="font-semibold text-[#1D1D1F]">Tju Chi Phin</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Informasi Usaha & Kontak */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-[#E5E5EA]">
          {/* Kolom 1: Profil Brand */}
          <div className="md:col-span-2">
            <span className="text-lg font-bold text-[#1D1D1F]">CCTV APHIN</span>
            <p className="mt-2 text-xs sm:text-sm text-[#86868B] max-w-md leading-relaxed">
              Jasa spesialis instalasi, setting online, dan perbaikan kamera CCTV
              bergaransi resmi. Melayani wilayah Jabodetabek dan sekitarnya
              dengan standar pemasangan terbaik.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-[#86868B]">
              <MapPin className="h-4 w-4 text-[#0071E3]" />
              <span>Jabodetabek & Sekitarnya • Siap Survey Lokasi</span>
            </div>
          </div>

          {/* Kolom 2: Kontak Langsung */}
          <div>
            <h4 className="text-sm font-bold text-[#1D1D1F]">Hubungi Langsung</h4>
            <ul className="mt-3 space-y-2.5 text-xs sm:text-sm">
              <li>
                <a
                  href="https://wa.me/6281234567890?text=Halo%20Pak%20Aphin,%20saya%20ingin%20tanya%20pemasangan%20CCTV"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#1D1D1F] hover:text-[#0071E3] transition-colors"
                >
                  <MessageCircle className="h-4 w-4 text-[#25D366]" />
                  <span>WhatsApp: Pak Aphin</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-[#86868B]">
                <Phone className="h-4 w-4" />
                <span>Telepon / Panggilan Konsultasi</span>
              </li>
            </ul>
          </div>

          {/* Kolom 3: Administrasi / Khusus Usaha */}
          <div>
            <h4 className="text-sm font-bold text-[#1D1D1F]">Sistem Usaha</h4>
            <ul className="mt-3 space-y-2 text-xs sm:text-sm">
              <li>
                <Link
                  href="/dashboard"
                  className="inline-flex items-center gap-1.5 font-medium text-[#0071E3] hover:underline"
                >
                  <span>Buka NotaKu (Admin)</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Link>
              </li>
              <li className="text-xs text-[#86868B]">
                Pencatatan nota, invoice pelanggan, dan laporan otomatis.
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#86868B]">
          <p>© 2026 CCTV APHIN. Hak cipta dilindungi.</p>
          <div className="flex items-center gap-1">
            <span>Dibuat khusus dengan</span>
            <Heart className="h-3.5 w-3.5 fill-red-500 text-red-500" />
            <span>untuk Papa (Tju Chi Phin)</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
