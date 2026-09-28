import Link from "next/link";
import localFont from "next/font/local";
import { Navbar } from "@/components/navbar";

const nothing = localFont({src:"../../public/fonts/nothing/Ndot57-Regular.otf",display:"swap",weight:"400"});
export const metadata = {title:"Tentang | changelog.indonesia",description:"Kenapa Indonesia punya patch notes tidak resmi."};

export default function AboutPage() {
 return <div className="site-shell">
  <Navbar/>
  <main className="about-page">
   <h1 className={nothing.className}>Tentang</h1>
   <p className="about-lead">changelog.indonesia melacak perubahan yang gampang terlewat di berita harian — tol yang terbuka, stat yang di-nerf, known issue yang belum di-patch.</p>
   <p>Patch notes game ternyata cara yang seru untuk ceritakan berita itu. Setiap hari beberapa update asli, dengan tautan ke pemberitaan aslinya. Berita baik dan buruk sama-sama masuk; yang buruk ditulis gaya incident report, tanpa mengejek korban.</p>
   <p>Terinspirasi dari <a href="https://www.changelog.earth">changelog.earth</a> buatan <a href="https://alex.codes">Alex</a> — kodenya open source di <a href="https://github.com/byalex33/changelog.earth" target="_blank" rel="noreferrer">GitHub</a>.</p>
   <Link className="github-pill" href="/">Kembali ke patch notes ↗</Link>
  </main>
 </div>;
}
