import { NextApiRequest, NextApiResponse } from "next";

const categories: { label: string; category: string; src: string }[] = [
  {
    label: "Αγωγή",
    category: "Agogi",
    src: "public/category-images/image1.png",
  },
  {
    label: "Αρχαίοι Έλληνες Συγγραφείς",
    category: "Arhaioi Ellines Siggrafeis",
    src: "public/category-images/image2.png",
  },
  {
    label: "Αρχαιολογία",
    category: "Arhaiologia",
    src: "public/category-images/image3.png",
  },
  {
    label: "Βιογραφίες",
    category: "Viografies",
    src: "public/category-images/image4.png",
  },
  {
    label: "Γενικά Θέματα",
    category: "Genika Themata",
    src: "public/category-images/image5.png",
  },
  {
    label: "Γεωλογία",
    category: "Geologia",
    src: "public/category-images/image6.png",
  },
  {
    label: "Γλώσσα",
    category: "Glossa",
    src: "public/category-images/image7.png",
  },
  {
    label: "Δοκίμια",
    category: "Dokimia",
    src: "public/category-images/image8.png",
  },
  {
    label: "Εγκυκλοπαίδειες",
    category: "Egkiklopaidies",
    src: "public/category-images/image9.png",
  },
  {
    label: "Ελληνική Λογοτεχνία",
    category: "Elliniki Logotehnia",
    src: "public/category-images/image10.png",
  },
  {
    label: "Εφηβική Λογοτεχνία",
    category: "Efiviki Logotehnia",
    src: "public/category-images/image11.png",
  },
  {
    label: "Θρησκεία",
    category: "Thriskeia",
    src: "public/category-images/image12.png",
  },
  {
    label: "Ιατρική",
    category: "Iatriki",
    src: "public/category-images/image13.png",
  },
  {
    label: "Ιστορία",
    category: "Istoria",
    src: "public/category-images/image14.png",
  },
  {
    label: "Κοινωνιολογία",
    category: "Koinoniologia",
    src: "public/category-images/image15.png",
  },
  {
    label: "Κόμικ",
    category: "Comic",
    src: "public/category-images/image16.png",
  },
  {
    label: "Κρήτη - Παράδοση - Ιστορία",
    category: "Crete-Paradosi-Istoria",
    src: "public/category-images/image17.png",
  },
  {
    label: "Λαογραφία",
    category: "Laografia",
    src: "public/category-images/image18.png",
  },
  {
    label: "Λεξικά",
    category: "Lexika",
    src: "public/category-images/image19.png",
  },
  {
    label: "Λευκώματα",
    category: "Lefkomata",
    src: "public/category-images/image20.png",
  },
  {
    label: "Μυθολογία",
    category: "Mithologia",
    src: "public/category-images/image21.png",
  },
  {
    label: "Νομική Επιστήμη",
    category: "Nomiki Epistimi",
    src: "public/category-images/image22.png",
  },
  {
    label: "Ξενόγλωσσα",
    category: "Xenoglossa",
    src: "public/category-images/image23.png",
  },
  {
    label: "Οικονομία",
    category: "Oikonomia",
    src: "public/category-images/image24.png",
  },
  {
    label: "Παγκόσμια Λογοτεχνία",
    category: "Pagkosmia Logotehnia",
    src: "public/category-images/image25.png",
  },
  {
    label: "Παιδικά",
    category: "Paidika",
    src: "public/category-images/image26.png",
  },
  { label: "ΠΕΚ", category: "PEK", src: "public/category-images/image27.png" },
  {
    label: "Ποίηση",
    category: "Pioisi",
    src: "public/category-images/image28.png",
  },
  {
    label: "Πολιτική",
    category: "Politiki",
    src: "public/category-images/image29.png",
  },
  {
    label: "Σχολικά",
    category: "Sholika",
    src: "public/category-images/image30.png",
  },
  {
    label: "Τέχνες",
    category: "Tehnes",
    src: "public/category-images/image31.png",
  },
  {
    label: "Φιλοσοφία",
    category: "Filosofia",
    src: "public/category-images/image32.png",
  },
  {
    label: "Ψυχολογία",
    category: "Psihologia",
    src: "public/category-images/image33.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categories);
}
