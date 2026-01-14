import TomiImage from "./assets/Tomi.webp"

const Image = {
  TomiImage,
}

export default Image

import Tools1 from "./assets/tools/vscode.png"
import Tools2 from "./assets/tools/reactjs.png"
import Tools3 from "./assets/tools/js.png"
import Tools4 from "./assets/tools/tailwind.png"
import Tools5 from "./assets/tools/flowbite.png"
import Tools6 from "./assets/tools/bootstrap.png"
import Tools7 from "./assets/tools/typescript.png"
import Tools8 from "./assets/tools/nodejs.png"
import Tools9 from "./assets/tools/github.png"
import Tools10 from "./assets/tools/python.png"
import Tools11 from "./assets/tools/canva.png"
import Tools12 from "./assets/tools/figma.png"

export const listTools = [
  {
    id: 1,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: 200,
  },
  {
    id: 2,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: 300,
  },
  {
    id: 3,
    gambar: Tools3,
    nama: "JavaScript",
    ket: "Language",
    dad: 400,
  },
  {
    id: 4,
    gambar: Tools4,
    nama: "Tailwind CSS",
    ket: "Framework",
    dad: 500,
  },
  {
    id: 5,
    gambar: Tools5,
    nama: "Flowbite",
    ket: "Library UI",
    dad: 600,
  },
  {
    id: 6,
    gambar: Tools6,
    nama: "Bootstrap",
    ket: "Framework",
    dad: 700,
  },
  {
    id: 7,
    gambar: Tools7,
    nama: "TypeScript",
    ket: "Language",
    dad: 800,
  },
  {
    id: 8,
    gambar: Tools8,
    nama: "Node JS",
    ket: "Javascript Runtime",
    dad: 900,
  },
  {
    id: 9,
    gambar: Tools9,
    nama: "Github",
    ket: "Repository",
    dad: 1000,
  },
  {
    id: 10,
    gambar: Tools10,
    nama: "Python",
    ket: "Language",
    dad: 1100,
  },
  {
    id: 11,
    gambar: Tools11,
    nama: "Canva",
    ket: "Design App",
    dad: 1200,
  },
  {
    id: 12,
    gambar: Tools12,
    nama: "Figma",
    ket: "Design App",
    dad: 1300,
  },
]

import Proyek1 from "./assets/proyek/MovieList.jpg"
import Proyek2 from "./assets/proyek/Skripsi.jpg"
import Proyek3 from "./assets/proyek/notesWeb.png"

export const listProject = [
  {
    id: 1,
    gambar: Proyek1,
    nama: "MovieList",
    desc: "MovieList is a movie catalog website that provides a curated listing of films from around the world.",
    tools: ["Vite", "ReactJS", "TaildwindCSS", "Flowbite", "HeadlessUI", "TMDB"],
    link: "https://movielist-verse.vercel.app/",
    dad: 100,
  },
  {
    id: 2,
    gambar: Proyek2,
    nama: "Thesis Project",
    desc: "Implementasi Algoritma Random Forest untuk Prediksi Penjualan Produk Toko Retail.",
    tools: ["Machine Learning", "Supervised Learning", "Random Forest", "IQR", "RandomizedSearchCV", "Streamlit"],
    link: "https://drive.google.com/file/d/1a__kSdcd079Stmo095wEkn4pnV14IpAH/view?usp=sharing",
    dad: 300,
  },
  {
    id: 3,
    gambar: Proyek3,
    nama: "Simple Notes Web-App",
    desc: "This is a simple web application that provides a basic notes feature using only frontend technologies.",
    tools: ["Vite", "React", "CSS", "JavaScript"],
    link: "https://notes-web-neon.vercel.app/",
    dad: 200,
  },
]
