import React from 'react';
import { CommentState } from './types';

export const usernames = [
  // Male (Indonesia / Social Media Style)
  'Budi Santoso', 'Andi Firmansyah', 'Reza Hidayat', 'Arya Wirawan', 'Fajar Sidik', 
  'Hendra Pratama', 'Rizky Fadillah', 'Agus Susanto', 'Aditya Putra', 'Dimas Prasetyo',
  'Kevin Sanjaya', 'Bayu Saputra', 'Rangga Wijaya', 'Suryo Baskoro', 'Aris Munandar',
  'Dedi Setiawan', 'Bagus Pamungkas', 'Bima Sakti', 'Candra Gunawan', 'Dani Ramadhan',
  'Eko Yulianto', 'Ferry Irawan', 'Gatot Sugiarto', 'Hasan Basri', 'Irwan Syahputra',
  'Joko Purwanto', 'Rizal Fahmi', 'Kiki Setiawan', 'Lukman Hakim', 'Muhammad Rizki',
  'Nugroho Adi', 'Oki Saputra', 'Pandu Dewanata', 'Qori Akbar', 'Ricky Ahmad',
  
  // Female (Indonesia / Social Media Style)
  'Siti Rahmawati', 'Lestari Indah', 'Ayu Ningsih', 'Nisa Fitriani', 'Rina Marlina',
  'Sari Wulandari', 'Amalia Nisa', 'Ratna Galih', 'Tasya Kirana', 'Salma Fauziah',
  'Nanda Putri', 'Hani Khairunnisa', 'Cinta Permata', 'Dian Pratiwi', 'Rani Mulyani',
  'Sari Wulandari', 'Ria Astuti', 'Maudy Kusuma', 'Riska Yuliana', 'Intan Permatasari',
  'Tiara Agustin', 'Lidia Natalia', 'Citra Maharani', 'Maya Sari', 'Mira Lestari',
  'Ghea Saraswati', 'Bella Safitri', 'Annisa Fitri', 'Putri Dina', 'Lesti Handayani',
  'Dinda Shafira', 'Syifa Azzahra', 'Natasha Aurelia', 'Febby Rahma', 'Siska Noviana',
  'Desy Ratnawati', 'Eka Putri', 'Fitriani R', 'Gita Maharani', 'Hana Pertiwi',

  // Aesthetic / Gen Z / Short names
  'zxuan', 'kyra', 'luna.rx', 'nana.aest', 'kuroko.x', 
  'rara.ly', 'adit.zip', 'denis.raw', 'bila.png', 'tara.jpg',
  'dika.exe', 'sari.mp4', 'rani.gif', 'bima.sys', 'bayu.bat',
  'fika_ootd', 'riri_daily', 'putri_vlogs', 'sinta_cooks', 'nana_draws',
  'andi.dev', 'budi.code', 'reza.js', 'dani.ts', 'fajar.py',
  
  // Random combinations
  'kang.cilok', 'bocah.kentang', 'anak.warnet', 'kang.parkir', 'bucin.akut',
  'jagoan.neon', 'pemburu.diskon', 'kaum.rebahan', 'sobat.misqueen', 'warga.62',
  'netizen.budiman', 'pakar.cinta', 'dukun.cinta', 'suhu.coding', 'master.mabar'
];
const comments = [
  'Wah, kontennya bermanfaat banget kak!',
  'Info loker bang? 🙏',
  'Gila sih ini epic banget! 🔥🔥🔥',
  'Makasih infonya kak...',
  'Ada yang tau judul lagunya?',
  'Bisa dijelasin lebih detail nggak bagian akhirnya?'
];

export function getRandomAvatarUrl(): string {
  const id = Math.floor(Math.random() * 1000);
  return `https://loremflickr.com/150/150/indonesian,selfie/all?lock=${id}`;
}

export function getRandomState(currentState: CommentState): CommentState {
  const name = usernames[Math.floor(Math.random() * usernames.length)];
  const comment = comments[Math.floor(Math.random() * comments.length)];
  
  return {
    ...currentState,
    username: name,
    handle: `@${name.replace(/\s+/g, '').toLowerCase()}${Math.floor(Math.random() * 100)}`,
    avatarUrl: getRandomAvatarUrl(),
    isVerified: Math.random() > 0.5,
    commentText: comment,
    likeCount: Math.floor(Math.random() * 1000) + (Math.random() > 0.5 ? 'K' : ''),
    timestamp: `${Math.floor(Math.random() * 24) + 1}j lalu`
  };
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M';
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K';
  }
  return num.toString();
}

export function renderFormattedText(text: string) {
  const parts = text.split(/(\[(?:highlight|blur|cut)\].*?\[\/(?:highlight|blur|cut)\])/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('[highlight]') && part.endsWith('[/highlight]')) {
      const content = part.substring(11, part.length - 12);
      return <mark key={index} className="bg-yellow-300 text-black px-0.5 rounded">{content}</mark>;
    }
    if (part.startsWith('[blur]') && part.endsWith('[/blur]')) {
      const content = part.substring(6, part.length - 7);
      return <span key={index} className="blur-[4px] select-none text-transparent">{content}</span>;
    }
    if (part.startsWith('[cut]') && part.endsWith('[/cut]')) {
      const content = part.substring(5, part.length - 6);
      return <span key={index} className="opacity-0 select-none">-</span>;
    }
    return <React.Fragment key={index}>{part}</React.Fragment>;
  });
}
