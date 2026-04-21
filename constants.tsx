import React from 'react';
import type { Article } from './types';
import { BrowserIcon, DnsIcon, FrontendBackendIcon, ServerIcon } from './components/Icons';

const mainArticleContent = (
    <div className="space-y-8">
        <p>Pernahkah Anda bertanya-tanya apa yang sebenarnya terjadi saat Anda mengetik alamat website seperti `google.com` dan menekan Enter? Dalam sekejap mata, sebuah halaman penuh informasi muncul di layar Anda. Proses ini tampak seperti sihir, tetapi sebenarnya adalah serangkaian langkah teknologi yang terkoordinasi dengan sempurna. Mari kita bongkar "sihir" ini!</p>

        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Analogi Sederhana: Memesan Pizza</h3>
            <p>Bayangkan memesan pizza. Anda (<strong>pengguna</strong>) tahu nama restoran pizza (<strong>nama domain</strong>), tetapi Anda tidak tahu alamat dapurnya. Anda menelepon direktori (<strong>DNS</strong>) untuk mendapatkan alamatnya (<strong>IP Address</strong>). Setelah dapat, Anda mengirim pesanan (<strong>request</strong>) ke dapur (<strong>server</strong>). Dapur memasak pizza sesuai pesanan dan mengirimkannya kembali (<strong>response</strong>) ke rumah Anda (<strong>browser</strong>), siap untuk dinikmati.</p>
        </div>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Langkah 1: Anda Memulai Perjalanan (Input URL)</h2>
        <p>Semuanya dimulai di browser Anda (Chrome, Firefox, Safari). Anda mengetik nama domain, misalnya <strong>duniaprogrammer.com</strong>, ke dalam address bar. Ini adalah perintah pertama Anda ke dunia internet.</p>
        <img src="https://picsum.photos/seed/step1/1200/600" alt="Typing URL in browser" className="rounded-3xl shadow-soft w-full" />


        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Langkah 2: Mencari Alamat dengan DNS</h2>
        <p>Komputer tidak mengerti nama seperti "duniaprogrammer.com". Mereka berkomunikasi menggunakan angka yang disebut <strong>IP Address</strong> (misalnya, 172.217.166.46). Di sinilah <strong>DNS (Domain Name System)</strong> berperan. Anggap saja DNS adalah buku telepon raksasa internet.</p>
        <p>Browser Anda akan bertanya ke server DNS, "Hei, di mana alamat untuk duniaprogrammer.com?" Server DNS akan mencari dan menjawab, "Tentu, alamatnya di 172.217.166.46."</p>
        <div className="flex justify-center my-6">
            <DnsIcon className="w-24 h-24 text-neon-blue" />
        </div>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Langkah 3: Mengirim Permintaan ke Server</h2>
        <p>Setelah mendapatkan IP Address, browser Anda tahu ke mana harus mengirim permintaan. Ia mengirimkan sebuah <strong>HTTP Request</strong> ke server yang berlokasi di IP tersebut. Permintaan ini seperti surat yang isinya, "Tolong berikan saya file untuk halaman utama website ini."</p>
        <img src="https://picsum.photos/seed/step3/1200/600" alt="Server room" className="rounded-3xl shadow-soft w-full" />

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Langkah 4: Server Bekerja Keras</h2>
        <p>Server adalah komputer super kuat yang hidup 24/7. Ketika menerima permintaan Anda, server akan memprosesnya. Ia akan mencari file yang diminta (HTML, CSS, JavaScript, gambar) dan mengumpulkannya. Jika website tersebut dinamis (seperti media sosial), server mungkin perlu mengambil data dari database terlebih dahulu.</p>
        <div className="flex justify-center my-6">
            <ServerIcon className="w-24 h-24 text-neon-blue" />
        </div>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Langkah 5: Server Mengirim Balasan (Response)</h2>
        <p>Setelah semua file siap, server mengirimkannya kembali ke browser Anda dalam bentuk <strong>HTTP Response</strong>. Respons ini tidak hanya berisi file website, tetapi juga kode status (seperti '200 OK' yang berarti berhasil, atau '404 Not Found' yang berarti halaman tidak ditemukan).</p>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Langkah 6: Browser Merakit Halaman</h2>
        <p>Browser Anda menerima paket file dari server dan mulai bekerja. Ia seperti seorang arsitek yang merakit puzzle:</p>
        <ul className="list-disc list-inside space-y-3 pl-4">
            <li><strong>HTML (HyperText Markup Language):</strong> Membangun struktur dasar halaman—seperti kerangka sebuah rumah.</li>
            <li><strong>CSS (Cascading Style Sheets):</strong> Memberikan gaya visual—mengecat dinding, menata perabotan, dan mendekorasi.</li>
            <li><strong>JavaScript:</strong> Menambahkan interaktivitas—membuat tombol bisa diklik, memunculkan animasi, dan lain-lain.</li>
        </ul>
        <p>Browser membaca semua kode ini dan "merendernya" menjadi halaman visual yang indah dan interaktif yang Anda lihat di layar.</p>
        <div className="flex justify-center my-6">
            <BrowserIcon className="w-24 h-24 text-neon-blue" />
        </div>

        <div className="p-8 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-3xl border border-neon-blue/30 text-center">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Kesimpulan</h3>
            <p>Jadi, di balik satu klik sederhana, ada tarian kompleks antara browser, DNS, dan server. Proses ini, yang terjadi dalam hitungan milidetik, adalah fondasi dari seluruh pengalaman kita di dunia web. Keren, bukan?</p>
        </div>
    </div>
);

const dnsArticleContent = (
    <div className="space-y-8">
        <p>Kita menggunakan nama seperti `google.com` atau `instagram.com` setiap hari, tapi komputer tidak memahaminya. Komputer berkomunikasi menggunakan alamat numerik yang disebut IP Address. Di sinilah DNS (Domain Name System) masuk sebagai pahlawan tanpa tanda jasa, menerjemahkan nama yang mudah kita ingat menjadi alamat yang dimengerti mesin.</p>

        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Analogi: Buku Telepon Internet</h3>
            <p>Bayangkan DNS sebagai buku telepon raksasa untuk internet. Ketika Anda ingin menelepon teman, Anda mencari nama mereka di kontak untuk mendapatkan nomor teleponnya. Demikian pula, ketika Anda ingin mengunjungi sebuah website, browser Anda mencari nama domain di DNS untuk mendapatkan IP Address-nya.</p>
        </div>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Bagaimana Proses Pencarian DNS Bekerja?</h2>
        <p>Proses ini disebut "DNS Resolution" dan terjadi dalam beberapa langkah super cepat:</p>
        <img src="https://picsum.photos/seed/dns-flow/1200/600" alt="DNS Resolution Flow" className="rounded-3xl shadow-soft w-full" />
        <ol className="list-decimal list-inside space-y-4 pl-4">
            <li><strong>Cache Check:</strong> Pertama, browser Anda memeriksa "ingatannya" sendiri (cache) untuk melihat apakah ia sudah tahu IP address untuk domain tersebut dari kunjungan sebelumnya. Jika ya, proses selesai di sini!</li>
            <li><strong>OS & Router Check:</strong> Jika tidak ada di cache browser, ia bertanya pada sistem operasi (Windows, macOS) dan router Anda. Mereka juga memiliki cache sendiri.</li>
            <li><strong>Recursive DNS Server:</strong> Jika masih tidak ditemukan, permintaan dikirim ke server DNS ISP (Internet Service Provider) Anda. Server ini disebut Recursive Resolver. Tugasnya adalah mencari jawaban untuk Anda.</li>
            <li><strong>Root, TLD, dan Authoritative Servers:</strong> Resolver akan memulai pencarian berantai. Ia bertanya pada Root Server (puncak hierarki DNS), yang akan mengarahkannya ke TLD (Top-Level Domain) server (misalnya, server untuk `.com`). TLD server kemudian akan mengarahkannya ke Authoritative Name Server, yaitu server yang memegang catatan resmi untuk domain spesifik tersebut dan memberikan jawaban akhir: IP Address-nya.</li>
        </ol>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Mengapa DNS Sangat Penting?</h2>
        <div className="flex justify-center my-6">
            <DnsIcon className="w-24 h-24 text-neon-blue" />
        </div>
        <ul className="list-disc list-inside space-y-3 pl-4">
            <li><strong>Kenyamanan:</strong> Jauh lebih mudah mengingat `duniaprogrammer.com` daripada `192.0.2.1`.</li>
            <li><strong>Fleksibilitas:</strong> Sebuah website bisa pindah server dan mengubah IP Address-nya tanpa harus mengubah nama domain. DNS cukup diperbarui, dan pengguna tidak akan merasakan perbedaannya.</li>
            <li><strong>Efisiensi:</strong> Dengan sistem caching, proses pencarian tidak harus diulang dari awal setiap saat, membuat browsing lebih cepat.</li>
        </ul>
        
        <div className="p-8 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-3xl border border-neon-blue/30 text-center">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Kesimpulan</h3>
            <p>Tanpa DNS, internet tidak akan seramah yang kita kenal sekarang. Sistem terdistribusi yang luar biasa ini adalah tulang punggung yang memastikan kita dapat menavigasi dunia digital dengan mudah, menghubungkan nama ke angka dalam sekejap mata.</p>
        </div>
    </div>
);

const serverHostingArticleContent = (
    <div className="space-y-8">
        <p>Jika sebuah website adalah rumah, maka semua file yang membangunnya—kode, gambar, teks, video—adalah perabotan di dalamnya. Tapi di mana rumah ini "berdiri"? Jawabannya ada pada server dan layanan hosting, fondasi digital yang membuat website Anda dapat diakses oleh siapa pun di dunia.</p>

        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Analogi Properti</h3>
            <p>Bayangkan Anda ingin membuka toko. <strong>Server</strong> adalah tanah tempat Anda akan membangun toko. <strong>Hosting</strong> adalah layanan yang menyewakan tanah itu kepada Anda, lengkap dengan utilitas seperti listrik dan air (koneksi internet, keamanan, dll.). Anda tidak bisa punya toko tanpa tanah, kan?</p>
        </div>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Apa Itu Server?</h2>
        <p>Secara sederhana, server adalah komputer yang sangat kuat yang dirancang untuk selalu menyala dan terhubung ke internet. Tugas utamanya adalah menyimpan semua file website Anda dan "menyuguhkannya" (serve) kepada browser pengguna saat mereka memintanya. Server fisik biasanya disimpan di fasilitas khusus yang disebut data center.</p>
        <div className="flex justify-center my-6">
            <ServerIcon className="w-24 h-24 text-neon-blue" />
        </div>
        
        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Apa Itu Hosting?</h2>
        <p>Hosting adalah layanan yang disediakan oleh perusahaan yang memiliki dan mengelola server-server ini. Anda membayar biaya sewa kepada perusahaan hosting untuk menempatkan file website Anda di server mereka. Mereka yang bertanggung jawab atas pemeliharaan, keamanan, dan konektivitas server.</p>
        <img src="https://picsum.photos/seed/datacenter/1200/600" alt="Data Center" className="rounded-3xl shadow-soft w-full" />
        
        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Jenis-Jenis Hosting Populer</h2>
        <p>Sama seperti properti, ada berbagai jenis hosting untuk kebutuhan yang berbeda:</p>
        <ul className="list-disc list-inside space-y-4 pl-4">
            <li><strong>Shared Hosting (Apartemen):</strong> Anda berbagi satu server dengan banyak website lain. Ini adalah pilihan paling ekonomis dan bagus untuk pemula, tetapi performanya bisa terpengaruh oleh "tetangga" Anda.</li>
            <li><strong>VPS Hosting (Townhouse/Rumah Kopel):</strong> Anda masih berbagi server fisik, tetapi Anda mendapatkan bagian virtual yang terisolasi dengan sumber daya (CPU, RAM) yang didedikasikan. Lebih banyak kontrol dan performa lebih baik dari shared hosting.</li>
            <li><strong>Dedicated Server (Rumah Pribadi):</strong> Anda menyewa seluruh server fisik untuk diri sendiri. Performa maksimal, kontrol penuh, tetapi juga paling mahal. Cocok untuk website dengan lalu lintas sangat tinggi.</li>
            <li><strong>Cloud Hosting (Kompleks Modern):</strong> Website Anda berjalan di jaringan server yang terhubung (cloud). Sangat fleksibel dan skalabel—jika lalu lintas tiba-tiba melonjak, sistem dapat secara otomatis mengalokasikan lebih banyak sumber daya.</li>
        </ul>
        
        <div className="p-8 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-3xl border border-neon-blue/30 text-center">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Kesimpulan</h3>
            <p>Memilih server dan hosting yang tepat adalah langkah krusial dalam membangun kehadiran online. Ini adalah investasi pada "rumah digital" Anda, memastikan fondasinya kuat, aman, dan siap menyambut pengunjung kapan saja, dari mana saja.</p>
        </div>
    </div>
);

const febeArticleContent = (
    <div className="space-y-8">
        <p>Dalam dunia pengembangan web, Anda akan sering mendengar istilah "Frontend" dan "Backend". Keduanya adalah dua sisi dari koin yang sama yang membentuk sebuah aplikasi web yang fungsional. Memahami perbedaan keduanya adalah kunci untuk mengerti bagaimana sebuah website dibangun dari awal hingga akhir.</p>

        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Analogi Restoran</h3>
            <p>Bayangkan sebuah restoran. <strong>Frontend</strong> adalah semua yang dilihat dan dialami pelanggan: ruang makan yang didekorasi dengan indah, menu yang mudah dibaca, dan pelayan yang ramah. Sementara itu, <strong>Backend</strong> adalah dapurnya: koki, resep, bahan baku, dan sistem pemesanan yang bekerja di balik layar untuk menyiapkan hidangan yang lezat.</p>
        </div>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Frontend: Wajah Aplikasi (Client-Side)</h2>
        <p>Frontend adalah segala sesuatu yang berinteraksi langsung dengan pengguna di browser mereka. Ini adalah presentasi visual dan interaktivitas dari sebuah website. Tujuannya adalah untuk menciptakan pengalaman pengguna (User Experience) yang mulus dan menarik.</p>
        <img src="https://picsum.photos/seed/frontend-ui/1200/600" alt="User Interface Design" className="rounded-3xl shadow-soft w-full" />
        <h4 className="font-poppins font-bold text-xl text-dark-navy dark:text-clean-white">Teknologi Utama:</h4>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>HTML (HyperText Markup Language):</strong> Memberikan struktur dan konten dasar halaman.</li>
            <li><strong>CSS (Cascading Style Sheets):</strong> Mengatur gaya, tata letak, warna, dan semua aspek visual.</li>
            <li><strong>JavaScript:</strong> Menambahkan interaktivitas, seperti tombol yang bisa diklik, form validasi, animasi, dan memuat data secara dinamis.</li>
        </ul>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Backend: Otak Aplikasi (Server-Side)</h2>
        <p>Backend adalah mesin yang bekerja di balik layar. Ia tidak terlihat oleh pengguna, tetapi bertanggung jawab atas semua logika bisnis, pemrosesan data, dan komunikasi dengan database. Backend memastikan bahwa semua yang terjadi di frontend berjalan dengan benar.</p>
         <img src="https://picsum.photos/seed/backend-code/1200/600" alt="Backend Code on Screen" className="rounded-3xl shadow-soft w-full" />
        <h4 className="font-poppins font-bold text-xl text-dark-navy dark:text-clean-white">Tanggung Jawab Utama:</h4>
        <ul className="list-disc list-inside space-y-2 pl-4">
            <li><strong>Server:</strong> Menjalankan aplikasi dan menanggapi permintaan dari frontend.</li>
            <li><strong>Database:</strong> Menyimpan, mengambil, dan mengelola data penting seperti informasi pengguna, postingan blog, atau produk.</li>
            <li><strong>Logika Aplikasi:</strong> Memproses input dari pengguna, menjalankan aturan bisnis, dan mengelola otentikasi (login/logout).</li>
            <li><strong>API (Application Programming Interface):</strong> Jembatan komunikasi yang memungkinkan frontend dan backend "berbicara" satu sama lain.</li>
        </ul>

        <div className="flex justify-center my-6">
            <FrontendBackendIcon className="w-24 h-24 text-neon-blue" />
        </div>

        <div className="p-8 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-3xl border border-neon-blue/30 text-center">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Kesimpulan</h3>
            <p>Frontend adalah tentang "bagaimana tampilannya", sementara backend adalah tentang "bagaimana cara kerjanya". Keduanya sangat penting dan saling membutuhkan. Tanpa backend, frontend hanyalah sebuah desain statis. Tanpa frontend, backend adalah mesin kuat tanpa cara untuk berinteraksi dengan dunia.</p>
        </div>
    </div>
);

const browserArticleContent = (
    <div className="space-y-8">
        <p>Web browser (seperti Chrome, Firefox, atau Safari) adalah gerbang kita menuju dunia internet. Kita menggunakannya setiap hari, tetapi jarang sekali kita berhenti sejenak untuk memikirkan betapa canggihnya perangkat lunak ini. Browser lebih dari sekadar jendela; ia adalah mesin penerjemah, seniman, dan manajer konstruksi yang bekerja sama untuk mengubah baris-baris kode menjadi pengalaman web yang kaya dan interaktif.</p>

        <div className="p-6 bg-slate-100 dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Analogi: Arsitek dan Pembangun</h3>
            <p>Bayangkan browser adalah tim konstruksi super cepat. Ia menerima blueprint (kode HTML, CSS, JavaScript) dari server. Pertama, arsitek (<strong>parser</strong>) membaca blueprint untuk memahami struktur (DOM) dan gaya (CSSOM). Kemudian, manajer proyek membuat rencana tata letak (<strong>Layout</strong>). Akhirnya, tim pelukis dan dekorator (<strong>Painting</strong>) mewujudkan semuanya di layar, pixel demi pixel.</p>
        </div>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Proses Rendering: Dari Kode ke Pixel</h2>
        <p>Ketika Anda mengunjungi sebuah halaman, browser melakukan serangkaian langkah yang dikenal sebagai "Critical Rendering Path" untuk menampilkan konten.</p>
        <img src="https://picsum.photos/seed/browser-render/1200/600" alt="Browser Rendering Process" className="rounded-3xl shadow-soft w-full" />
        <ol className="list-decimal list-inside space-y-4 pl-4">
            <li><strong>Parsing HTML & Membangun DOM:</strong> Browser membaca kode HTML dari atas ke bawah dan membangun struktur pohon yang disebut Document Object Model (DOM). DOM adalah representasi logis dari halaman web.</li>
            <li><strong>Parsing CSS & Membangun CSSOM:</strong> Secara bersamaan, browser memproses kode CSS dan membangun struktur pohon lain yang disebut CSS Object Model (CSSOM). Pohon ini berisi semua informasi gaya untuk setiap elemen di DOM.</li>
            <li><strong>Membuat Render Tree:</strong> Browser menggabungkan DOM dan CSSOM untuk membuat Render Tree. Pohon ini hanya berisi node yang akan ditampilkan di layar (misalnya, elemen dengan `display: none` tidak akan dimasukkan).</li>
            <li><strong>Layout (Tata Letak):</strong> Pada tahap ini, browser menghitung dimensi dan posisi pasti dari setiap objek di Render Tree di dalam viewport (area yang terlihat di layar). Proses ini juga dikenal sebagai "Reflow".</li>
            <li><strong>Painting (Melukis):</strong> Akhirnya, browser mengubah informasi dari tahap Layout menjadi pixel-pixel aktual di layar. Proses ini melibatkan penggambaran teks, warna, gambar, border, dan shadow untuk setiap elemen.</li>
        </ol>

        <h2 className="text-3xl font-poppins font-bold text-dark-navy dark:text-clean-white pt-6 border-t border-slate-200 dark:border-slate-700">Peran Mesin JavaScript</h2>
        <div className="flex justify-center my-6">
            <BrowserIcon className="w-24 h-24 text-neon-blue" />
        </div>
        <p>Di mana JavaScript masuk? Browser memiliki komponen khusus yang disebut <strong>JavaScript Engine</strong> (misalnya, V8 di Chrome). Ketika browser menemukan tag &lt;script&gt;, ia akan menghentikan parsing HTML sejenak dan menyerahkan tugas kepada engine ini. JavaScript dapat secara dinamis mengubah DOM dan CSSOM (misalnya, menambahkan elemen baru saat tombol diklik), yang seringkali akan memicu proses Layout dan Painting ulang untuk memperbarui tampilan halaman.</p>
        
        <div className="p-8 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-3xl border border-neon-blue/30 text-center">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Kesimpulan</h3>
            <p>Setiap kali Anda memuat sebuah halaman web, browser melakukan orkestrasi yang rumit ini dalam hitungan milidetik. Dari sekadar teks dan tag, ia menciptakan antarmuka visual yang berfungsi penuh. Memahami proses ini tidak hanya memuaskan rasa ingin tahu, tetapi juga membantu developer menulis kode yang lebih efisien untuk website yang lebih cepat dan responsif.</p>
        </div>
    </div>
);

const placeholderContent = (
    <div className="space-y-8">
        <p>Konten untuk artikel ini sedang dalam persiapan dan akan segera tersedia.</p>
        <p>Kami sedang bekerja keras untuk menyajikan penjelasan yang mendalam, mudah dipahami, dan relevan dengan topik ini. Pantau terus halaman kami untuk pembaruan terbaru!</p>
        <div className="p-8 bg-neon-blue/10 dark:bg-neon-blue/20 rounded-3xl border border-neon-blue/30 text-center">
            <h3 className="font-poppins text-2xl font-bold text-dark-navy dark:text-clean-white mb-3">Segera Hadir</h3>
            <p>Terima kasih atas kesabaran Anda.</p>
        </div>
    </div>
);

export const ARTICLES: Article[] = [
  {
    id: 1,
    title: 'Bagaimana Cara Kerja Website di Balik Layar',
    summary: 'Dari mengetik URL hingga halaman muncul, jelajahi proses ajaib yang membuat internet bekerja.',
    imageUrl: 'https://picsum.photos/seed/article1/800/600',
    content: mainArticleContent,
  },
  {
    id: 2,
    title: 'Apa Itu DNS dan Fungsinya di Internet',
    summary: 'Kenali DNS, buku telepon raksasa internet yang menerjemahkan nama domain menjadi alamat IP.',
    imageUrl: 'https://picsum.photos/seed/article2/800/600',
    content: dnsArticleContent,
  },
  {
    id: 3,
    title: 'Server dan Hosting: Rumah Bagi Website',
    summary: 'Pahami peran server dan hosting sebagai rumah digital tempat semua data website Anda tinggal.',
    imageUrl: 'https://picsum.photos/seed/article3/800/600',
    content: serverHostingArticleContent,
  },
  {
    id: 4,
    title: 'Frontend vs Backend: Siapa yang Mengatur Apa',
    summary: 'Bedah dua sisi pengembangan web: tampilan yang Anda lihat (Frontend) dan mesin di baliknya (Backend).',
    imageUrl: 'https://picsum.photos/seed/article4/800/600',
    content: febeArticleContent,
  },
  {
    id: 5,
    title: 'Browser: Mesin yang Menampilkan Dunia Web',
    summary: 'Selami cara kerja browser dalam menerjemahkan kode HTML, CSS, dan JavaScript menjadi halaman interaktif.',
    imageUrl: 'https://picsum.photos/seed/article5/800/600',
    content: browserArticleContent,
  },
  // New Articles Start Here
  {
    id: 6,
    title: 'Mengenal React: Library JavaScript untuk UI',
    summary: 'Pelajari dasar-dasar React, library populer dari Facebook untuk membangun antarmuka pengguna yang interaktif.',
    imageUrl: 'https://picsum.photos/seed/article6/800/600',
    content: placeholderContent,
  },
  {
    id: 7,
    title: 'Pengenalan Node.js untuk Backend',
    summary: 'Jelajahi Node.js dan bagaimana ia memungkinkan JavaScript berjalan di sisi server untuk aplikasi yang cepat.',
    imageUrl: 'https://picsum.photos/seed/article7/800/600',
    content: placeholderContent,
  },
  {
    id: 8,
    title: 'Database SQL vs NoSQL: Mana yang Dipilih?',
    summary: 'Bandingkan dua jenis database utama dan pahami kapan harus menggunakan database relasional atau non-relasional.',
    imageUrl: 'https://picsum.photos/seed/article8/800/600',
    content: placeholderContent,
  },
  {
    id: 9,
    title: 'Apa Itu API? Jembatan Antar Aplikasi',
    summary: 'Pahami konsep Application Programming Interface (API) dan perannya yang krusial dalam dunia perangkat lunak.',
    imageUrl: 'https://picsum.photos/seed/article9/800/600',
    content: placeholderContent,
  },
  {
    id: 10,
    title: 'Dasar-dasar Git & GitHub untuk Kolaborasi',
    summary: 'Kuasai Git, sistem kontrol versi yang esensial, dan GitHub untuk bekerja dalam tim secara efisien.',
    imageUrl: 'https://picsum.photos/seed/article10/800/600',
    content: placeholderContent,
  },
  {
    id: 11,
    title: 'Menata Layout Modern dengan CSS Flexbox',
    summary: 'Pelajari cara membuat tata letak yang fleksibel dan responsif dengan mudah menggunakan CSS Flexbox.',
    imageUrl: 'https://picsum.photos/seed/article11/800/600',
    content: placeholderContent,
  },
  {
    id: 12,
    title: 'Membangun Grid Kompleks dengan CSS Grid',
    summary: 'Selami CSS Grid Layout untuk menciptakan tata letak dua dimensi yang kuat dan kompleks untuk halaman web Anda.',
    imageUrl: 'https://picsum.photos/seed/article12/800/600',
    content: placeholderContent,
  },
  {
    id: 13,
    title: 'JavaScript Modern: Fitur ES6+ yang Wajib Diketahui',
    summary: 'Tingkatkan skill JavaScript Anda dengan fitur-fitur modern seperti Arrow Functions, Promises, dan async/await.',
    imageUrl: 'https://picsum.photos/seed/article13/800/600',
    content: placeholderContent,
  },
  {
    id: 14,
    title: 'Pengenalan Vue.js: Framework Progresif',
    summary: 'Jelajahi Vue.js, framework JavaScript yang mudah dipelajari dan sangat kuat untuk membangun antarmuka web.',
    imageUrl: 'https://picsum.photos/seed/article14/800/600',
    content: placeholderContent,
  },
  {
    id: 15,
    title: 'Keamanan Web: Mengapa HTTPS Itu Penting?',
    summary: 'Pahami apa itu HTTPS dan bagaimana sertifikat SSL/TLS melindungi data antara pengguna dan server.',
    imageUrl: 'https://picsum.photos/seed/article15/800/600',
    content: placeholderContent,
  },
  {
    id: 16,
    title: 'Optimasi Performa: Strategi Caching Web',
    summary: 'Pelajari berbagai teknik caching (browser, server, CDN) untuk mempercepat waktu muat website Anda.',
    imageUrl: 'https://picsum.photos/seed/article16/800/600',
    content: placeholderContent,
  },
  {
    id: 17,
    title: 'Mengenal Docker: Kontainer untuk Developer',
    summary: 'Temukan bagaimana Docker menyederhanakan pengembangan dan deployment dengan teknologi kontainer.',
    imageUrl: 'https://picsum.photos/seed/article17/800/600',
    content: placeholderContent,
  },
  {
    id: 18,
    title: 'REST API vs GraphQL: Pendekatan Berbeda',
    summary: 'Bandingkan arsitektur REST yang populer dengan GraphQL yang fleksibel untuk membangun API modern.',
    imageUrl: 'https://picsum.photos/seed/article18/800/600',
    content: placeholderContent,
  },
  {
    id: 19,
    title: 'Manajemen State di Frontend',
    summary: 'Pelajari pentingnya manajemen state dan jelajahi tools populer seperti Redux, Zustand, atau Pinia.',
    imageUrl: 'https://picsum.photos/seed/article19/800/600',
    content: placeholderContent,
  },
  {
    id: 20,
    title: 'Mengenal TypeScript: JavaScript dengan Tipe',
    summary: 'Tingkatkan kualitas kode Anda dengan TypeScript, yang menambahkan sistem tipe statis ke JavaScript.',
    imageUrl: 'https://picsum.photos/seed/article20/800/600',
    content: placeholderContent,
  },
  {
    id: 21,
    title: 'CI/CD: Otomatisasi Proses Development',
    summary: 'Pahami konsep Continuous Integration & Continuous Deployment untuk merilis perangkat lunak lebih cepat dan andal.',
    imageUrl: 'https://picsum.photos/seed/article21/800/600',
    content: placeholderContent,
  },
  {
    id: 22,
    title: 'Progressive Web Apps (PWA): Masa Depan Web',
    summary: 'Ubah website Anda menjadi pengalaman seperti aplikasi native dengan teknologi PWA.',
    imageUrl: 'https://picsum.photos/seed/article22/800/600',
    content: placeholderContent,
  },
  {
    id: 23,
    title: 'Keamanan: Mencegah Serangan XSS',
    summary: 'Pelajari apa itu Cross-Site Scripting (XSS) dan bagaimana cara melindungi aplikasi Anda dari serangan umum ini.',
    imageUrl: 'https://picsum.photos/seed/article23/800/600',
    content: placeholderContent,
  },
  {
    id: 24,
    title: 'Arsitektur Serverless & Cloud Functions',
    summary: 'Jelajahi masa depan backend tanpa mengelola server dengan arsitektur Serverless seperti AWS Lambda atau Google Cloud Functions.',
    imageUrl: 'https://picsum.photos/seed/article24/800/600',
    content: placeholderContent,
  },
  {
    id: 25,
    title: 'WebSockets untuk Komunikasi Real-time',
    summary: 'Bangun aplikasi interaktif seperti chat atau game online dengan komunikasi dua arah menggunakan WebSockets.',
    imageUrl: 'https://picsum.photos/seed/article25/800/600',
    content: placeholderContent,
  },
  {
    id: 26,
    title: 'Database MongoDB untuk Pemula',
    summary: 'Mulai perjalanan Anda dengan MongoDB, database NoSQL berbasis dokumen yang populer dan fleksibel.',
    imageUrl: 'https://picsum.photos/seed/article26/800/600',
    content: placeholderContent,
  },
  {
    id: 27,
    title: 'Mengenal Nginx sebagai Web Server & Reverse Proxy',
    summary: 'Pahami peran ganda Nginx sebagai web server performa tinggi dan reverse proxy yang kuat.',
    imageUrl: 'https://picsum.photos/seed/article27/800/600',
    content: placeholderContent,
  },
  {
    id: 28,
    title: 'Aksesibilitas Web (A11Y): Web untuk Semua',
    summary: 'Pelajari praktik terbaik untuk membuat website yang dapat diakses dan digunakan oleh semua orang, termasuk penyandang disabilitas.',
    imageUrl: 'https://picsum.photos/seed/article28/800/600',
    content: placeholderContent,
  },
  {
    id: 29,
    title: 'Optimasi Gambar untuk Performa Web',
    summary: 'Temukan teknik untuk mengompresi dan menyajikan gambar secara efisien tanpa mengorbankan kualitas visual.',
    imageUrl: 'https://picsum.photos/seed/article29/800/600',
    content: placeholderContent,
  },
  {
    id: 30,
    title: 'Pengenalan WebAssembly (WASM)',
    summary: 'Jelajahi bagaimana WebAssembly memungkinkan kode berkinerja tinggi (seperti C++ atau Rust) berjalan di browser.',
    imageUrl: 'https://picsum.photos/seed/article30/800/600',
    content: placeholderContent,
  },
  {
    id: 31,
    title: 'Arsitektur Microservices: Pro dan Kontra',
    summary: 'Pahami konsep memecah aplikasi besar menjadi layanan-layanan kecil yang independen.',
    imageUrl: 'https://picsum.photos/seed/article31/800/600',
    content: placeholderContent,
  },
  {
    id: 32,
    title: 'Autentikasi dengan JWT (JSON Web Tokens)',
    summary: 'Pelajari cara kerja JWT untuk mengamankan API dan mengelola sesi pengguna secara stateless.',
    imageUrl: 'https://picsum.photos/seed/article32/800/600',
    content: placeholderContent,
  },
  {
    id: 33,
    title: 'Mengenal Kubernetes (K8s) untuk Orkestrasi Kontainer',
    summary: 'Selami Kubernetes, platform standar industri untuk mengelola dan menskalakan aplikasi dalam kontainer.',
    imageUrl: 'https://picsum.photos/seed/article33/800/600',
    content: placeholderContent,
  },
  {
    id: 34,
    title: 'Code Splitting untuk Aplikasi Lebih Cepat',
    summary: 'Pelajari cara memecah kode JavaScript Anda menjadi bagian-bagian kecil untuk dimuat sesuai kebutuhan.',
    imageUrl: 'https://picsum.photos/seed/article34/800/600',
    content: placeholderContent,
  },
  {
    id: 35,
    title: 'HTTP/2 & HTTP/3: Evolusi Protokol Web',
    summary: 'Pahami peningkatan kecepatan dan efisiensi yang dibawa oleh versi terbaru dari protokol HTTP.',
    imageUrl: 'https://picsum.photos/seed/article35/800/600',
    content: placeholderContent,
  },
  {
    id: 36,
    title: 'Peran Content Delivery Network (CDN)',
    summary: 'Temukan bagaimana CDN mendistribusikan konten Anda secara global untuk mempercepat akses bagi pengguna di seluruh dunia.',
    imageUrl: 'https://picsum.photos/seed/article36/800/600',
    content: placeholderContent,
  },
  {
    id: 37,
    title: 'Pengujian Aplikasi: Unit, Integrasi, dan End-to-End',
    summary: 'Pahami berbagai tingkatan pengujian perangkat lunak untuk memastikan kualitas dan keandalan kode Anda.',
    imageUrl: 'https://picsum.photos/seed/article37/800/600',
    content: placeholderContent,
  },
  {
    id: 38,
    title: 'Bekerja dengan Form di Web: Validasi & UX',
    summary: 'Pelajari praktik terbaik untuk membangun form HTML yang ramah pengguna, aman, dan mudah divalidasi.',
    imageUrl: 'https://picsum.photos/seed/article38/800/600',
    content: placeholderContent,
  },
  {
    id: 39,
    title: 'Prinsip Desain Web Responsif',
    summary: 'Kuasai teknik media queries dan layout fleksibel untuk membuat website yang tampil sempurna di semua ukuran layar.',
    imageUrl: 'https://picsum.photos/seed/article39/800/600',
    content: placeholderContent,
  },
  {
    id: 40,
    title: 'Mempercepat Development dengan Tailwind CSS',
    summary: 'Jelajahi framework CSS utility-first yang memungkinkan Anda membangun desain kustom dengan cepat tanpa meninggalkan HTML.',
    imageUrl: 'https://picsum.photos/seed/article40/800/600',
    content: placeholderContent,
  },
  {
    id: 41,
    title: 'Web Workers untuk Multithreading di Browser',
    summary: 'Jalankan skrip di latar belakang menggunakan Web Workers untuk menjaga antarmuka pengguna tetap responsif.',
    imageUrl: 'https://picsum.photos/seed/article41/800/600',
    content: placeholderContent,
  },
  {
    id: 42,
    title: 'Dasar-dasar SEO Teknis untuk Developer',
    summary: 'Pelajari bagaimana struktur HTML, kecepatan situs, dan data terstruktur dapat meningkatkan peringkat pencarian Anda.',
    imageUrl: 'https://picsum.photos/seed/article42/800/600',
    content: placeholderContent,
  },
  {
    id: 43,
    title: 'Mengenal OAuth 2.0 untuk Delegasi Akses',
    summary: 'Pahami cara kerja OAuth 2.0, standar industri untuk otorisasi aman yang digunakan oleh Google, Facebook, dan lainnya.',
    imageUrl: 'https://picsum.photos/seed/article43/800/600',
    content: placeholderContent,
  },
  {
    id: 44,
    title: 'Membangun Aplikasi Web Modern dengan Next.js',
    summary: 'Jelajahi Next.js, framework React yang kuat untuk membangun aplikasi full-stack dengan rendering sisi server dan lainnya.',
    imageUrl: 'https://picsum.photos/seed/article44/800/600',
    content: placeholderContent,
  },
  {
    id: 45,
    title: 'Dasar Bahasa Go (Golang) untuk Backend',
    summary: 'Kenali Go, bahasa pemrograman dari Google yang terkenal dengan kesederhanaan dan performa tingginya untuk layanan backend.',
    imageUrl: 'https://picsum.photos/seed/article45/800/600',
    content: placeholderContent,
  },
  {
    id: 46,
    title: 'Pengembangan Web dengan Python (Django & Flask)',
    summary: 'Bandingkan dua framework web Python paling populer dan temukan mana yang cocok untuk proyek Anda berikutnya.',
    imageUrl: 'https://picsum.photos/seed/article46/800/600',
    content: placeholderContent,
  },
  {
    id: 47,
    title: 'Caching Cerdas dengan Service Workers',
    summary: 'Buat aplikasi web yang dapat diakses secara offline dan memuat lebih cepat dengan mengontrol cache menggunakan Service Workers.',
    imageUrl: 'https://picsum.photos/seed/article47/800/600',
    content: placeholderContent,
  },
  {
    id: 48,
    title: 'Mengamankan Situs dengan Content Security Policy (CSP)',
    summary: 'Pelajari cara menerapkan CSP untuk mengurangi risiko serangan injeksi kode seperti XSS di situs web Anda.',
    imageUrl: 'https://picsum.photos/seed/article48/800/600',
    content: placeholderContent,
  },
  {
    id: 49,
    title: 'Edge Computing: Membawa Komputasi Lebih Dekat',
    summary: 'Pahami bagaimana Edge Computing dan Edge Functions (seperti di Vercel/Cloudflare) mengubah cara kita membangun aplikasi global.',
    imageUrl: 'https://picsum.photos/seed/article49/800/600',
    content: placeholderContent,
  },
  {
    id: 50,
    title: 'Visualisasi Data Interaktif dengan D3.js',
    summary: 'Selami D3.js, library JavaScript yang kuat untuk membuat visualisasi data dinamis dan interaktif di web.',
    imageUrl: 'https://picsum.photos/seed/article50/800/600',
    content: placeholderContent,
  },
];