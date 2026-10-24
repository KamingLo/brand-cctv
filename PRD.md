Product Requirements Document (PRD)

Project Name: NotaKu (Aphin Invoice System)
Version: 1.0
Target User: Internal Business (Ayah - Owner CCTV APHIN)

1. Ringkasan Eksekutif (Executive Summary)

NotaKu adalah aplikasi web manajemen invoice yang dirancang khusus untuk mempermudah operasional usaha "CCTV APHIN". Aplikasi ini memungkinkan pengguna untuk mengatur profil usaha (termasuk detail bank), mengelola database invoice, serta membuat dan mencetak invoice baru melalui antarmuka live-preview yang intuitif.

2. Tujuan (Objectives)

Menggantikan proses pembuatan invoice manual atau Microsoft Word menjadi sistem web dinamis.

Memusatkan data riwayat invoice klien (contoh: Kemenangan Galaxy Bekasi) di dalam satu database.

Menghadirkan pengalaman pengguna (UX) yang sangat mudah digunakan (terutama untuk orang tua) dengan alur kerja yang jelas.

3. Teknologi (Tech Stack)

Framework: Next.js (App Router)

Database: MongoDB

ORM / Database Interactor: Mongoose

State Management: Zustand (untuk form builder & live preview)

Data Fetching: Axios + Custom Hooks

Styling: Tailwind CSS

4. Fitur Utama (Core Features)

4.1. Autentikasi (Authentication)

Halaman login sederhana untuk admin.

Proteksi route sehingga hanya user yang login yang bisa mengakses dasbor.

4.2. Pengaturan Perusahaan (Company Settings)

Formulir statis untuk menyimpan informasi default yang akan muncul di semua invoice:

Nama Usaha (CCTV APHIN)

Catatan / Informasi Tambahan (Opsional)

Detail Bank (Bank BCA, No. Rek: 3351272846, a.n. Tju Chi Phin)

Nama Penandatangan (Aphin)

Kemampuan untuk mengunggah dan menyimpan foto tanda tangan atau stempel.

4.3. Dasbor Utama (Main Dashboard)

Statistik Cepat: Total Invoice Dibuat, Total Pendapatan, dan Status Menunggu Pembayaran.

Tabel Riwayat Invoice: Menampilkan daftar invoice terbaru dengan kolom: No. Invoice, Nama Klien, Tanggal, Total (Rp), dan Status.

Aksi: Tombol cepat untuk "Buat Invoice Baru", "Edit", "Hapus", dan "Download PDF".

4.4. Pembuat Invoice (Invoice Builder)

Tampilan Layar Terbelah (Split-View): Bagian kiri untuk input form, bagian kanan untuk Live Preview bentuk dokumen invoice.

Input Data Klien & Pekerjaan: Kolom "Kepada" dan "Pekerjaan".

Tabel Item Dinamis:

Bisa tambah/hapus baris.

Input: Nama Barang/Jasa, Kuantitas, Satuan, Harga Satuan.

Sistem menghitung "Harga Jumlah" dan "Grand Total" secara otomatis.

Tanggal & Catatan: Pemilih tanggal invoice dan kolom catatan khusus (contoh: rincian berdasarkan nota supplier).

Cetak & Simpan: Ekspor langsung ke format PDF atau Print Browser, serta menyimpan data tersebut ke MongoDB.

5. Struktur Data (Mongoose Schemas Concept)

User Model: Kredensial login admin.

Company Model: businessName, bankName, accountNumber, accountName, signeeName.

Invoice Model: invoiceNumber, clientName, jobTitle, items (array of objects), subTotal, notes, date, status, companyId.