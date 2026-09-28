export const TITLE_STYLE_VERSION = 6;
export const WORLDWIDE_POLICY = `Pilih perubahan yang menarik untuk audiens nasional Indonesia, bukan kumpulan berita daerah dari berbagai kota. Media asal tidak menentukan kelayakan.
Sertakan: kemajuan infrastruktur dan transportasi, temuan ilmiah atau arkeologi di Indonesia, konservasi satwa dan lingkungan, kebijakan nasional yang benar-benar berlaku (bukan sekadar wacana), bencana dan responsnya yang berdampak luas, pencapaian sains/teknologi, dan perubahan ekonomi yang dirasakan lintas daerah.
Kabar baik dan buruk sama-sama boleh masuk. Kabar buruk harus ditulis gaya incident-report yang faktual, bukan bercanda.
Kecualikan: gosip selebritas, Liga 1/sepak bola rutin, politik seremonial (reshuffle, kunjungan, kampanye), kriminal harian kecil, berita daerah mikro (satu jalan kampung, satu penangkapan lokal, bazar RT), konten promosi, dan berita tanpa perubahan yang bisa diidentifikasi. Lokasi di Indonesia, angka besar, atau kata 'pertama' saja tidak membuat berita layak masuk.
Pertahankan fokus kewarasan: jangan mengejek korban bencana atau penderita. Cerita dengan korban jiwa boleh masuk hanya jika dampaknya nasional, dan titlenya faktual dan tenang.
Kalibrasi kelayakan: kebijakan atau instruksi pemerintah pusat, skandal atau investigasi lembaga negara, indeks dan pasar nasional, bencana lintas provinsi, program nasional, dan isu yang diberitakan media nasional lintas daerah otomatis layak masuk (worldwide: true). Keraguan kecil BUKAN alasan mengecualikan — kecualikan hanya jika berita jelas-jelas mikro lokal (satu kampung, satu sekolah, satu acara), gosip selebritas, atau tanpa perubahan yang bisa diidentifikasi.`;

export function isPublishedWorldwide(article) {
 return article.titleStyleVersion === TITLE_STYLE_VERSION && article.worldwide === true;
}
