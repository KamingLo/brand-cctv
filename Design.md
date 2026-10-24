Design Specifications (UI/UX)

Project Name: NotaKu (Aphin Invoice System)
Design Theme: Apple Human Interface Guidelines (HIG) Minimalist

1. Filosofi Desain

Aplikasi harus terasa seperti aplikasi bawaan ekosistem Apple (macOS/iPadOS). Ciri utamanya adalah penggunaan white space (ruang kosong) yang lega, warna netral yang menenangkan mata, sudut membulat (rounded corners), dan efek kaca buram (glassmorphism). Tidak ada elemen desain yang berlebihan (bebas dari garis tebal atau warna yang mencolok kecuali untuk Call to Action).

2. Palet Warna (Color Palette)

Background Utama (Body): #F5F5F7 (Light Apple Gray)

Permukaan (Cards, Modal, Sidebar): #FFFFFF (Pure White)

Teks Utama (Headings, Body): #1D1D1F (Dark Grayish Black)

Teks Sekunder (Labels, Placeholders): #86868B (Muted Gray)

Warna Aksen (Tombol Utama, Focus, Aktif): #0071E3 (Apple Blue)

Garis Batas (Borders / Dividers): #E5E5EA (Subtle Light Gray)

Status Positif / Lunas: #34C759 (Apple Green)

Status Peringatan / Belum Lunas: #FF9500 (Apple Orange)

Status Bahaya / Hapus: #FF3B30 (Apple Red)

3. Tipografi (Typography)

Font Family: San Francisco (SF Pro Display & SF Pro Text). Jika font ini tidak tersedia di lingkungan web standar, gunakan alternatif Inter (dari Google Fonts).

Hierarchy:

H1 (Page Title): Semi-Bold, 24px - 28px, warna #1D1D1F.

H2 (Section/Card Title): Medium, 18px - 20px, warna #1D1D1F.

Body Text: Regular, 14px, warna #1D1D1F.

Muted Text / Catatan: Regular, 12px, warna #86868B.

4. Komponen UI (Tailwind CSS Guidelines)

Cards & Container: Gunakan bg-white, rounded-2xl (radius sekitar 16px), dan bayangan sangat lembut shadow-sm atau custom shadow (box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05)).

Inputs: border border-[#E5E5EA], rounded-lg (radius 8px), px-3 py-2. Saat sedang diketik (focus), border berubah menjadi #0071E3 dan ring biru tipis (focus:ring-2 focus:ring-blue-500/20).

Buttons: Bentuk pill (rounded-full atau rounded-lg).

Primary: bg-[#0071E3] text-white hover:opacity-90 transition-all.

Secondary/Cancel: bg-[#F5F5F7] text-[#1D1D1F] hover:bg-[#E5E5EA] transition-all.

Glassmorphism (Sidebar / Top Navbar): Transparan dengan efek blur bg-white/70 backdrop-blur-md border-r border-[#E5E5EA].

5. Tata Letak (Layouts)

5.1. Dashboard View

Sidebar Kiri: Lebar statis (sekitar 250px), efek glassmorphism, berisi navigasi (Dashboard, Invoices, Company Settings) dan profil admin.

Area Konten Utama (Kanan): Latar belakang #F5F5F7. Menampilkan deretan 3 kartu metrik di atas, diikuti tabel berdesain bersih (border-bottom tipis antar baris, tanpa garis vertikal) di bawahnya.

5.2. Invoice Builder View (Halaman Kunci)

Halaman ini meniadakan Sidebar atau membuatnya bisa diciutkan (collapsible) agar ruang kerja maksimal.

Kolom Kiri (Lebar 40%): Area form scrollable. Menggunakan desain form modern. Item barang dikelompokkan dalam kartu terpisah per baris (Item Name, Qty, Unit, Price).

Kolom Kanan (Lebar 60%): Area Live Preview. Latar belakang abu-abu #F5F5F7, dan di tengahnya terdapat kontainer putih berukuran A4 (aspek rasio dokumen, aspect-[1/1.414]) dengan box-shadow. Dokumen di dalam kertas A4 ini mengikuti format asli dari "Invoice Kemenangan Galaxy.docx.pdf".

Header Preview diposisikan mengambang (floating) di atas dokumen dengan tombol "Download PDF" atau "Simpan".

6. Referensi Format Cetak (PDF Output)

Output dokumen fisik/PDF harus mengikuti referensi yang ada:

Header tebal di atas: "CCTV APHIN" dan "INVOICE"

Informasi meta (Kepada, Pekerjaan).

Tabel terstruktur dengan border abu-abu gelap/hitam tipis berisi No, Nama Barang, Kuantitas, Satuan, Harga Satuan, Harga Jumlah.

Bagian bawah tabel: Total Keseluruhan.

Di bawah tabel sebelah kiri: "Catatan: ..."

Di bawah tabel sebelah kiri bawah: Informasi Pembayaran (BCA, No Rekening, a.n.).

Di bawah tabel sebelah kanan bawah: Tanggal, Tanda tangan, dan Nama "Aphin".