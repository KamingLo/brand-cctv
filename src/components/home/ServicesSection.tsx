import { Video, Wrench, Smartphone, Check, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
      icon: <Video className="h-6 w-6 text-[#0071E3]" />,
      badge: "Paling Populer",
      badgeColor: "bg-blue-50 text-[#0071E3] border-blue-200",
      title: "Pemasangan Paket CCTV Baru",
      desc: "Paket lengkap kamera indoor & outdoor (Hikvision / Dahua), mesin DVR perekam, harddisk, kabel, dan instalasi sampai tuntas.",
      features: [
        "Kamera jernih 2MP / 5MP Full HD (Infrared malam hari)",
        "Rekaman 24 jam nonstop tersimpan otomatis",
        "Kabel instalasi dipasang rapi dan aman",
        "Paket 2, 4, 8, hingga 16 titik kamera",
      ],
      idealFor: "Cocok untuk: Toko emas, ruko, gudang, & rumah tinggal",
    },
    {
      icon: <Wrench className="h-6 w-6 text-[#FF9500]" />,
      badge: "Layanan Cepat",
      badgeColor: "bg-amber-50 text-[#FF9500] border-amber-200",
      title: "Service & Perbaikan CCTV",
      desc: "Solusi cepat untuk CCTV yang mati total, gambar goyang/buram, lupa password DVR, atau harddisk tidak mau merekam.",
      features: [
        "Pengecekan kamera mati & kabel putus/rusak",
        "Ganti power supply / adaptor sentral yang drop",
        "Penggantian & upgrade harddisk rekaman",
        "Pindah posisi titik kamera lama ke lokasi baru",
      ],
      idealFor: "Biaya transparan, dicek dulu sebelum dikerjakan",
    },
    {
      icon: <Smartphone className="h-6 w-6 text-[#34C759]" />,
      badge: "Praktis & Modern",
      badgeColor: "bg-emerald-50 text-[#34C759] border-emerald-200",
      title: "Setting Online Pantau via HP",
      desc: "Bisa memantau kondisi rumah atau tempat usaha kapan saja dari jarak jauh langsung melalui layar smartphone Anda.",
      features: [
        "Aplikasi resmi di Android & iPhone (Hik-Connect / DMSS)",
        "Bisa dipantau bersama keluarga atau staf terpercaya",
        "Putar ulang rekaman (playback) langsung dari HP",
        "Dipandu cara pemakaiannya sampai lancar",
      ],
      idealFor: "Tenang bepergian ke luar kota tanpa rasa was-was",
    },
  ];

  return (
    <section id="layanan" className="py-12 sm:py-16 border-t border-[#E5E5EA] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#F5F5F7] px-3.5 py-1 text-xs font-semibold text-[#86868B] border border-[#E5E5EA]">
            <Sparkles className="h-3.5 w-3.5 text-[#0071E3]" />
            <span>Katalog Layanan</span>
          </div>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1D1F]">
            Layanan Utama CCTV APHIN
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#86868B]">
            Pilih kebutuhan sistem kamera keamanan Anda. Dikerjakan dengan teliti,
            rapi, dan harga bersahabat.
          </p>
        </div>

        {/* 3 Services Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between rounded-2xl border border-[#E5E5EA] bg-[#F5F5F7]/50 p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-[#0071E3]/30 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white border border-[#E5E5EA] shadow-xs">
                    {item.icon}
                  </div>
                  <span
                    className={`text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}
                  >
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#1D1D1F]">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[#86868B] leading-relaxed">
                  {item.desc}
                </p>

                <ul className="mt-5 space-y-2.5">
                  {item.features.map((feat, fIdx) => (
                    <li
                      key={fIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-[#1D1D1F]"
                    >
                      <Check className="h-4 w-4 text-[#34C759] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E5EA]">
                <p className="text-xs font-medium text-[#86868B] italic">
                  {item.idealFor}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
