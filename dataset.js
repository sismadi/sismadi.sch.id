const pages = {

    home: [
        {
            section: 'hero',
            title: 'Sismadi Edu',
            tagline: 'Portal Edukasi Teknologi Informasi',
            description: 'Portal edukasi TI yang fokus pada pembekalan skill praktis: pemrograman web, desain web, dan pemrograman mobile. Kurikulum berbasis skema kompetensi BNSP, diasuh oleh instruktur bersertifikat nasional.',
            imgClass: 'di-edu',

            badges: ['Pemrograman Web', 'Desain Web', 'Pemrograman Mobile'],
            cta: { text: 'Lihat Program &raquo;', link: 'program' }
        },
        {
            section: 'features',
            items: [
                {
                    icon: 'di-code',
                    title: 'Kurikulum Praktis',
                    content: 'Materi disusun berbasis kebutuhan industri nyata — bukan sekadar teori. Setiap kursus menghasilkan proyek yang bisa langsung masuk portofolio.',
                    linkText: 'Lihat Program',
                    linkTarget: 'program'
                },
                {
                    icon: 'di-edu',
                    title: 'Pengajar Berpengalaman',
                    content: 'Diajarkan oleh dosen aktif dan praktisi industri. Kombinasi perspektif akademis dan pengalaman lapangan nyata.',
                    linkText: 'Kenali Pengajar',
                    linkTarget: 'profile'
                },
                {
                    icon: 'di-person',
                    title: 'Fleksibel & Terstruktur',
                    content: 'Kelas reguler dengan jadwal tetap dan jalur mandiri. Cocok untuk pelajar, mahasiswa, maupun profesional yang ingin naik level.',
                    linkText: 'Daftar Sekarang',
                    linkTarget: 'pendaftaran'
                }
            ]
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Tentang Kami',
                lines: [
                    '### Lembaga',
                    '**Sismadi Edu** beroperasi di bawah naungan PT Sismadi Langit Solusi.',
                    '---',
                    '### Fokus',
                    '**Pemrograman Web** &mdash; dari fundamental HTML/CSS hingga arsitektur aplikasi.',
                    '**Desain Web** &mdash; UI/UX, pengalaman pengguna, dan arsitektur antarmuka.',
                    '**Pemrograman Mobile** &mdash; dasar hingga pengembangan aplikasi mobile network.'
                ]
            },
            rightCol: {
                subtitle: 'Program Tersedia',
                lines: [
                    'table:table'
                ],
                table: [
                    { 'Program': 'Pengantar Pemrograman', 'Level': 'Pemula', 'Durasi': '8 Pertemuan' },
                    { 'Program': 'Pemrogram Web', 'Level': 'Menengah', 'Durasi': '16 Pertemuan' },
                    { 'Program': 'Desainer Web', 'Level': 'Menengah–Lanjutan', 'Durasi': '12 Pertemuan' },
                    { 'Program': 'Pemrogram Mobile', 'Level': 'Menengah', 'Durasi': '16 Pertemuan' }
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Metode Belajar',
                lines: [
                    'skill:90%:Sesi Langsung (Live Session)',
                    'skill:85%:Proyek & Studi Kasus',
                    'skill:80%:Materi Tertulis & Dokumentasi',
                    'skill:80%:Evaluasi & Umpan Balik'
                ]
            },
            rightCol: {
                subtitle: 'Untuk Siapa?',
                lines: [
                    '**Pelajar / Mahasiswa** yang ingin memulai karir di bidang TI.',
                    '**Profesional** yang ingin memperluas kompetensi teknis.',
                    '**Pendidik** yang ingin memperbarui referensi pengajaran berbasis praktik.',
                    '---',
                    'Tidak ada prasyarat untuk program level pemula. Cukup bawa laptop dan kemauan belajar.'
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Hubungi Kami',
                lines: [
                    'contact:di-envelope|Email|info@sismadi.sch.id|mailto:info@sismadi.sch.id',
                    'contact:di-instagram|Instagram|instagram.com/sismadiedu|https://instagram.com/sismadiedu',
                    'contact:di-geo|Lokasi|Jakarta Timur, Indonesia'
                ]
            },
            rightCol: {
                subtitle: 'Tanya & Konsultasi',
                lines: ['form:contact'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama Lengkap', placeholder: 'Nama Anda' },
                    { type: 'text', name: 'kontak', label: 'Email / WhatsApp', placeholder: 'email@domain.com atau 08xx...' },
                    { type: 'text', name: 'perihal', label: 'Perihal', placeholder: 'Misal: Info kursus JavaScript' },
                    { type: 'textarea', name: 'pesan', label: 'Pesan', rows: 4, placeholder: 'Ada yang bisa kami bantu?' }
                ],
                submitText: 'Kirim Pesan'
            }
        }
    ],

    about: [
        {
            section: 'titleHero',
            title: 'Tentang Sismadi Edu',
            description: 'Sismadi Edu adalah portal edukasi teknologi dari PT Sismadi Langit Solusi. Didirikan untuk menjembatani kesenjangan antara kurikulum formal dan kebutuhan skill praktis di industri digital.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Latar Belakang',
                lines: [
                    'Banyak lulusan TI yang memiliki ijazah namun belum siap mengerjakan proyek nyata.',
                    'Sismadi Edu hadir bukan untuk menggantikan pendidikan formal — melainkan untuk **melengkapi** gap antara teori dan praktik.',
                    '---',
                    'Kurikulum dikembangkan dari pengalaman langsung mengajar di kampus dan mengerjakan proyek industri.'
                ]
            },
            rightCol: {
                subtitle: 'Identitas Lembaga',
                lines: [
                    '**Nama**: Sismadi Edu',
                    '**Pengelola**: PT Sismadi Langit Solusi',
                    '**Platform LMS**: DonatJS LMS (produk internal PT Sismadi Langit Solusi)',
                    '**Fokus**: Teknologi Informasi & Rekayasa Perangkat Lunak',
                    '---',
                    'contact:di-web|Website|sismadi.co.id|https://sismadi.co.id',
                    'contact:di-envelope|Email|wawan@sismadi.co.id|mailto:wawan@sismadi.co.id',
                    'contact:di-geo|Lokasi|Jakarta Timur, Indonesia'
                ]
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Nilai Utama',
                lines: [
                    '**Jujur** &mdash; Kami tidak menjanjikan hasil instan. Belajar butuh waktu dan konsistensi.',
                    '**Praktis** &mdash; Setiap sesi menghasilkan sesuatu yang bisa dijalankan, bukan hanya dipahami.',
                    '**Terbuka** &mdash; Materi inti dapat diakses dan diverifikasi. Tidak ada kotak hitam dalam pengajaran kami.',
                    '**Relevan** &mdash; Kurikulum diperbarui mengikuti perkembangan industri, bukan kalender akademik.'
                ]
            },
            rightCol: {
                subtitle: 'Ekosistem',
                lines: [
                    'Sismadi Edu adalah bagian dari ekosistem yang lebih besar:',
                    '**sismadi.com** &mdash; Lab riset & pengembangan framework.',
                    '**sismadi.co.id** &mdash; Produk dan layanan untuk industri.',
                    '**sismadi.sch.id** &mdash; Portal produk LMS untuk institusi.',
                    '---',
                    'Platform LMS yang digunakan merupakan produk internal berbasis **DonatJS LMS**, dikembangkan dan dikelola sendiri.'
                ]
            }
        }
    ],

    profile: [
        {
            section: 'titleHero',
            title: 'Profil',
            description: 'Kenali tim pengajar dan staf yang mengelola Sismadi Edu.'
        },

        // --- GURU ---
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Pengajar · Wawan Sismadi, M.Kom.',
                lines: [
                    '**Jabatan**: Instruktur Utama & Kurikulum Director',
                    '**Latar Belakang**: Dosen Tetap Universitas IPWIJA, PhD Student UAD, Owner PT Sismadi Langit Solusi.',
                    '---',
                    '**Sertifikasi BNSP**:',
                    '&bull; Asesor Kompetensi &mdash; No. MET.000.004772 2024',
                    '&bull; Pemrogram Web &mdash; LSP Telematika (No. 72202 2132 00009 2024)',
                    '&bull; Pemrogram Mobile &mdash; LSP Telematika (No. 72202 2132 00009 2024)',
                    '&bull; Desainer Web &mdash; LSP Telematika (No. 72202 2132 00009 2024)',
                    '---',
                    'contact:di-envelope|Email|wawan@sismadi.com|mailto:wawan@sismadi.com',
                    'contact:di-web|Website|wawan.sismadi.com|https://wawan.sismadi.com',
                    'contact:di-github|GitHub|github.com/sismadi|https://github.com/sismadi'
                ]
            },
            rightCol: {
                subtitle: 'Spesialisasi',
                lines: [
                    'skill:95%:Pemrograman Web (JS / PHP / HTML / CSS)',
                    'skill:90%:Desain Web (UI/UX & Arsitektur Antarmuka)',
                    'skill:85%:Pemrograman Mobile (Android / Mobile API)',
                    'skill:90%:Asesmen & Evaluasi Kompetensi'
                ]
            }
        },

        // --- ADMIN ---
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Staf Admin · Koordinator Akademik',
                lines: [
                    '**Jabatan**: Koordinator Akademik & Pendaftaran',
                    '**Tugas**: Mengelola jadwal kursus, data peserta, dan komunikasi administratif.',
                    '---',
                    'contact:di-envelope|Email|admin@sismadi.sch.id|mailto:admin@sismadi.sch.id',
                    'contact:di-geo|Lokasi|Jakarta Timur, Indonesia'
                ]
            },
            rightCol: {
                subtitle: 'Tanggung Jawab',
                lines: [
                    '&bull; Registrasi dan verifikasi peserta baru.',
                    '&bull; Penjadwalan sesi kelas reguler dan mandiri.',
                    '&bull; Koordinasi antara instruktur dan peserta.',
                    '&bull; Pengelolaan dokumentasi dan laporan kegiatan.'
                ]
            }
        },

        // --- SISWA (Profil Umum) ---
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Profil Peserta · Umum',
                lines: [
                    'Setiap peserta yang terdaftar mendapatkan akses ke:',
                    '&bull; Materi kursus sesuai program yang diikuti.',
                    '&bull; Rekaman sesi (jika tersedia).',
                    '&bull; Forum tanya-jawab per kursus.',
                    '&bull; Sertifikat penyelesaian setelah lulus evaluasi.',
                    '---',
                    'Akun peserta dikelola melalui platform **DonatJS LMS**.'
                ]
            },
            rightCol: {
                subtitle: 'Hak & Kewajiban Peserta',
                lines: [
                    'table:table'
                ],
                table: [
                    { 'Hak': 'Akses materi kursus', 'Kewajiban': 'Mengikuti sesi sesuai jadwal' },
                    { 'Hak': 'Konsultasi dengan instruktur', 'Kewajiban': 'Menyelesaikan tugas per sesi' },
                    { 'Hak': 'Sertifikat penyelesaian', 'Kewajiban': 'Mengikuti evaluasi akhir' },
                    { 'Hak': 'Rekaman sesi (jika ada)', 'Kewajiban': 'Menjaga etika komunitas belajar' }
                ]
            }
        },

        // --- SISWA1 (Contoh Peserta Aktif) ---
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Contoh Peserta · Budi Santoso',
                lines: [
                    '**Status**: Peserta Aktif',
                    '**Program**: Pengantar Pemrograman & Pemrogram Web',
                    '**Bergabung**: 2025',
                    '---',
                    'Mahasiswa semester 5 Teknik Informatika yang mengambil kursus untuk melengkapi praktik dari mata kuliah formal.',
                    '---',
                    '**Progress**:',
                    'skill:100%:Pengantar Pemrograman',
                    'skill:55%:Pemrogram Web'
                ]
            },
            rightCol: {
                subtitle: 'Catatan Instruktur',
                lines: [
                    'Budi menunjukkan pemahaman yang baik pada topik HTML/CSS struktural.',
                    'Sedang dalam proses penyelesaian proyek akhir modul Pemrogram Web: membangun aplikasi CRUD berbasis JavaScript dengan struktur kode modular.',
                    '---',
                    '**Evaluasi Terakhir**: Lulus — Pengantar Pemrograman (Nilai: B+)'
                ]
            }
        }
    ],
    program: [
        {
            section: 'titleHero',
            title: 'Program Kursus',
            description: 'Program kursus di Sismadi Edu mengacu pada skema kompetensi BNSP. Setiap program memiliki unit kompetensi yang terukur, output proyek yang jelas, dan instruktur bersertifikat di bidangnya.'
        },

        // Kursus 1 — Pengantar Pemrograman (entry point)
        {
            section: 'article',
            layout: 'split',
            rightCol: {
                subtitle: 'Pengantar Pemrograman',
                lines: [
                    '**Level**: Pemula',
                    '**Durasi**: 8 Pertemuan (@ 90 menit)',
                    '**Format**: Kelas reguler (tatap muka / online)',
                    '---',
                    'Program masuk bagi peserta yang belum memiliki latar belakang pemrograman. Membangun fondasi logika, struktur kode, dan pemahaman tools sebelum masuk ke program spesialisasi.',
                    '---',
                    '**Prasyarat**: Tidak ada. Cukup bawa laptop.',
                    '**Output Akhir**: Aplikasi sederhana berbasis logika kondisi dan perulangan, lengkap dengan dokumentasi dasar.'
                ]
            },
            leftCol: {
                subtitle: 'Topik yang Dibahas',
                lines: [
                    '&bull; Pengenalan dan analisis tools pemrograman.',
                    '&bull; Struktur data dasar: array, objek, dan tipe primitif.',
                    '&bull; Logika eksekusi: kondisi, perulangan, dan fungsi.',
                    '&bull; Instalasi dan konfigurasi software tools pemrograman.',
                    '&bull; Penerapan metode reusable subrutin.',
                    '&bull; Penulisan kode mengikuti guidelines dan best practices.',
                    '---',
                    '**Cocok untuk**: Pelajar SMA/SMK, mahasiswa semester awal, atau siapa saja yang ingin memulai dari nol.'
                ]
            }
        },

        // Kursus 2 — Pemrogram Web (BNSP LSP Telematika — 18 unit J.620100)
        {
            section: 'article',
            layout: 'split',
            rightCol: {
                subtitle: 'Pemrogram Web',
                lines: [
                    '**Level**: Menengah',
                    '**Durasi**: 16 Pertemuan (@ 90 menit)',
                    '**Skema BNSP**: Pemrogram & Pengembangan Piranti Lunak — Pemrogram Web',
                    '**Lembaga**: LSP Telematika &middot; No. 72202 2132 00009 2024',
                    '---',
                    'Program ini mengacu pada 18 unit kompetensi skema Pemrogram Web LSP Telematika BNSP. Peserta dibekali kemampuan membangun aplikasi web mulai dari analisis kebutuhan hingga deployment.',
                    '---',
                    '**Prasyarat**: Pengantar Pemrograman atau setara.',
                    '**Output Akhir**: Aplikasi web CRUD lengkap dengan dokumentasi kode, pengujian unit, dan paket instalasi.'
                ]
            },
            leftCol: {
                subtitle: 'Unit Kompetensi (Ringkasan)',
                lines: [
                    '&bull; Menganalisis tools dan skalabilitas perangkat lunak.',
                    '&bull; Identifikasi library, komponen, dan framework yang diperlukan.',
                    '&bull; Menerapkan struktur data dan algoritma pemrograman.',
                    '&bull; Pemrograman berorientasi objek (OOP).',
                    '&bull; Menulis kode sesuai guidelines dan best practices.',
                    '&bull; Penggunaan library / komponen pre-existing.',
                    '&bull; Membuat dokumentasi kode program.',
                    '&bull; Melakukan debugging dan pengujian unit.',
                    '&bull; Pengujian oleh pengguna (UAT).',
                    '&bull; Membuat paket instalasi perangkat lunak.',
                    '&bull; Melakukan logging aplikasi.',
                    '---',
                    '**Referensi**: Skema BNSP J.620100 (18/18 unit kompetensi).'
                ]
            }
        },

        // Kursus 3 — Pemrogram Mobile (BNSP LSP Telematika — 18 unit J.612000)
        {
            section: 'article',
            layout: 'split',
            rightCol: {
                subtitle: 'Pemrogram Mobile',
                lines: [
                    '**Level**: Menengah',
                    '**Durasi**: 16 Pertemuan (@ 90 menit)',
                    '**Skema BNSP**: Mobilitas TI & Internet Untuk Segala — Pemrogram Mobile',
                    '**Lembaga**: LSP Telematika &middot; No. 72202 2132 00009 2024',
                    '---',
                    'Mengacu pada 18 unit kompetensi skema Pemrogram Mobile LSP Telematika BNSP. Peserta membangun aplikasi mobile dari perancangan antarmuka hingga integrasi API dan keamanan dasar.',
                    '---',
                    '**Prasyarat**: Pengantar Pemrograman atau setara.',
                    '**Output Akhir**: Aplikasi mobile fungsional dengan database lokal, antarmuka yang dirancang, dan dokumentasi API.'
                ]
            },
            leftCol: {
                subtitle: 'Unit Kompetensi (Ringkasan)',
                lines: [
                    '&bull; Menganalisis tools dan identifikasi framework mobile.',
                    '&bull; Pemrograman terstruktur dan berorientasi objek.',
                    '&bull; Implementasi algoritma pemrograman.',
                    '&bull; Platform OS dan bahasa pemrograman dalam perangkat lunak.',
                    '&bull; Merancang mobile network programming.',
                    '&bull; Merancang database dan data persistence pada mobile.',
                    '&bull; Membuat multimedia messaging application.',
                    '&bull; Merancang mobile location based service dan navigasi GPS.',
                    '&bull; Merancang mobile interface.',
                    '&bull; Dasar-dasar mobile security.',
                    '&bull; Merancang penggunaan dan pengembangan mobile API.',
                    '---',
                    '**Referensi**: Skema BNSP J.612000 (18/18 unit kompetensi).'
                ]
            }
        },

        // Kursus 4 — Desainer Web (BNSP LSP Telematika — 10 unit J.620100)
        {
            section: 'article',
            layout: 'split',
            rightCol: {
                subtitle: 'Desainer Web',
                lines: [
                    '**Level**: Menengah–Lanjutan',
                    '**Durasi**: 12 Pertemuan (@ 90 menit)',
                    '**Skema BNSP**: Pemrogram & Pengembangan Piranti Lunak — Desainer Web',
                    '**Lembaga**: LSP Telematika &middot; No. 72202 2132 00009 2024',
                    '---',
                    'Mengacu pada 10 unit kompetensi skema Desainer Web LSP Telematika BNSP. Fokus pada implementasi UI, perancangan UX, arsitektur aplikasi, dan pengelolaan konfigurasi lingkungan development hingga production.',
                    '---',
                    '**Prasyarat**: Pemrogram Web atau pengalaman web development yang setara.',
                    '**Output Akhir**: Aplikasi web terarsitektur dengan konfigurasi multi-environment (dev/staging/production) dan dokumentasi UX.'
                ]
            },
            leftCol: {
                subtitle: 'Unit Kompetensi (Ringkasan)',
                lines: [
                    '&bull; Mengimplementasikan user interface.',
                    '&bull; Merancang user experience (UX).',
                    '&bull; Merancang arsitektur aplikasi.',
                    '&bull; Instalasi dan pengaturan software tools pemrograman.',
                    '&bull; Melakukan migrasi ke teknologi baru.',
                    '&bull; Membuat paket instalasi perangkat lunak.',
                    '&bull; Konfigurasi perangkat lunak (development, staging, production).',
                    '&bull; Menganalisis dampak perubahan terhadap aplikasi.',
                    '&bull; Melakukan pembaharuan perangkat lunak.',
                    '---',
                    '**Referensi**: Skema BNSP J.620100 (10/10 unit kompetensi).'
                ]
            }
        },

        // Ringkasan & Jalur Belajar
        {
            section: 'article',
            layout: 'split',
            rightCol: {
                subtitle: 'Perbandingan Program',
                lines: [
                    'table:table'
                ],
                table: [
                    { 'Program': 'Pengantar Pemrograman', 'Level': 'Pemula', 'Durasi': '8 Sesi', 'Prasyarat': 'Tidak ada' },
                    { 'Program': 'Pemrogram Web', 'Level': 'Menengah', 'Durasi': '16 Sesi', 'Prasyarat': 'Pengantar / setara' },
                    { 'Program': 'Pemrogram Mobile', 'Level': 'Menengah', 'Durasi': '16 Sesi', 'Prasyarat': 'Pengantar / setara' },
                    { 'Program': 'Desainer Web', 'Level': 'Menengah–Lanjutan', 'Durasi': '12 Sesi', 'Prasyarat': 'Pemrogram Web' }
                ]
            },
            leftCol: {
                subtitle: 'Jalur Belajar yang Disarankan',
                lines: [
                    '**Jalur Web Developer**:',
                    'Pengantar Pemrograman &rarr; Pemrogram Web &rarr; Desainer Web',
                    '---',
                    '**Jalur Mobile Developer**:',
                    'Pengantar Pemrograman &rarr; Pemrogram Mobile',
                    '---',
                    '**Jalur Full Stack**:',
                    'Pengantar &rarr; Pemrogram Web &rarr; Pemrogram Mobile &rarr; Desainer Web',
                    '---',
                    'Tidak yakin mulai dari mana? Hubungi kami untuk konsultasi gratis.',
                    'link:Konsultasi via Email:mailto:info@sismadi.sch.id'
                ]
            }
        }
    ],

    pendaftaran: [
        {
            section: 'titleHero',
            title: 'Pendaftaran',
            description: 'Daftarkan diri Anda ke program kursus Sismadi Edu. Proses pendaftaran sederhana — isi formulir, pilih program, dan tim kami akan menghubungi Anda dalam 1x24 jam kerja.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Cara Mendaftar',
                lines: [
                    '### Langkah Pendaftaran',
                    '**1.** Isi formulir pendaftaran di halaman ini.',
                    '**2.** Tim admin akan menghubungi untuk konfirmasi jadwal dan biaya.',
                    '**3.** Lakukan pembayaran sesuai instruksi yang dikirim via email/WA.',
                    '**4.** Akses LMS dan materi akan diberikan setelah pembayaran terkonfirmasi.',
                    '---',
                    '**Catatan**: Kuota per kelas terbatas. Pendaftaran belum dianggap sah sebelum konfirmasi dari admin.'
                ]
            },
            rightCol: {
                subtitle: 'Formulir Pendaftaran',
                lines: ['form:contact'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama Lengkap', placeholder: 'Nama sesuai identitas' },
                    { type: 'text', name: 'kontak', label: 'Email / WhatsApp', placeholder: 'email@domain.com atau 08xx...' },
                    { type: 'text', name: 'program', label: 'Program yang Dipilih', placeholder: 'Misal: Web Fundamental' },
                    { type: 'text', name: 'latar', label: 'Latar Belakang Singkat', placeholder: 'Misal: Mahasiswa TI semester 3' },
                    { type: 'textarea', name: 'tujuan', label: 'Tujuan Mengikuti Kursus', rows: 4, placeholder: 'Apa yang ingin Anda capai?' }
                ],
                submitText: 'Kirim Pendaftaran'
            }
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Yang Perlu Disiapkan',
                lines: [
                    '&bull; Laptop dengan koneksi internet stabil.',
                    '&bull; Browser modern (Chrome / Firefox / Edge).',
                    '&bull; Akun email aktif untuk akses LMS.',
                    '&bull; Kemauan belajar — tidak ada prasyarat teknis untuk kursus level pemula.'
                ]
            },
            rightCol: {
                subtitle: 'Pertanyaan Umum',
                lines: [
                    '**Apakah ada sertifikat?**',
                    'Ya. Sertifikat penyelesaian diberikan setelah peserta lulus evaluasi akhir.',
                    '---',
                    '**Apakah sesi direkam?**',
                    'Sebagian sesi tersedia dalam bentuk rekaman. Ketersediaan rekaman tergantung format kelas.',
                    '---',
                    '**Bagaimana jika tidak bisa hadir di satu sesi?**',
                    'Peserta dapat menghubungi admin untuk penjadwalan ulang, tergantung ketersediaan slot.'
                ]
            }
        }
    ],

    contact: [
        {
            section: 'titleHero',
            title: 'Kontak',
            description: 'Punya pertanyaan tentang program, jadwal, atau hal lainnya? Hubungi kami — tim admin siap merespons dalam 1x24 jam kerja.'
        },
        {
            section: 'article',
            layout: 'split',
            leftCol: {
                subtitle: 'Saluran Komunikasi',
                lines: [
                    'contact:di-envelope|Email|info@sismadi.sch.id|mailto:info@sismadi.sch.id',
                    'contact:di-instagram|Instagram|instagram.com/sismadiedu|https://instagram.com/sismadiedu',
                    'contact:di-web|Website|sismadi.sch.id|https://sismadi.sch.id',
                    'contact:di-geo|Lokasi|Jakarta Timur, Indonesia',
                    '---',
                    '**Jam Operasional**:',
                    'Senin–Jumat, 09.00–17.00 WIB.',
                    'Respons di luar jam kerja mungkin tertunda.'
                ]
            },
            rightCol: {
                subtitle: 'Kirim Pesan',
                lines: ['form:contact'],
                fields: [
                    { type: 'text', name: 'nama', label: 'Nama Lengkap', placeholder: 'Nama Anda' },
                    { type: 'text', name: 'kontak', label: 'Email / WhatsApp', placeholder: 'email@domain.com atau 08xx...' },
                    { type: 'text', name: 'perihal', label: 'Perihal', placeholder: 'Misal: Konsultasi program kursus' },
                    { type: 'textarea', name: 'pesan', label: 'Pesan', rows: 5, placeholder: 'Tulis pertanyaan atau pesan Anda di sini...' }
                ],
                submitText: 'Kirim Pesan'
            }
        }
    ]

};
