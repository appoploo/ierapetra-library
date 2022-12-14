import { NextApiRequest, NextApiResponse } from "next";

const categories: { category: string; src: string }[] = [
  {
    category: "Αγωγή",
    src: "/category-images/Αγωγή.png",
  },
  {
    category: "Αρχαίοι Έλληνες Συγγραφείς",
    src: "/category-images/Αρχαίοι Έλληνες Συγγραφείς.png",
  },
  {
    category: "Αρχαιολογία",
    src: "/category-images/Αρχαιολογία.png",
  },
  {
    category: "Βιογραφίες",
    src: "/category-images/Βιογραφίες.png",
  },
  {
    category: "Γενικά Θέματα",
    src: "/category-images/Γενικά Θέματα.png",
  },
  {
    category: "Γεωλογία",
    src: "/category-images/Γεωλογία.png",
  },
  {
    category: "Γλώσσα",
    src: "/category-images/Γλώσσα.png",
  },
  {
    category: "Δοκίμια",
    src: "/category-images/Δοκίμια.png",
  },
  {
    category: "Εγκυκλοπαίδειες",
    src: "/category-images/Εγκυκλοπαίδειες.png",
  },
  {
    category: "Ελληνική Λογοτεχνία",
    src: "/category-images/Ελληνική Λογοτεχνία.png",
  },
  {
    category: "Εφηβική Λογοτεχνία",
    src: "/category-images/Εφηβική Λογοτεχνία.png",
  },
  {
    category: "Θρησκεία",
    src: "/category-images/Θρησκεία.png",
  },
  {
    category: "Ιατρική",
    src: "/category-images/Ιατρική.png",
  },
  {
    category: "Ιστορία",
    src: "/category-images/Ιστορία.png",
  },
  {
    category: "Κοινωνιολογία",
    src: "/category-images/Κοινωνιολογία.png",
  },
  {
    category: "Κόμικ",
    src: "/category-images/Κόμικ.png",
  },
  {
    category: "Κρήτη - Παράδοση - Ιστορία",
    src: "/category-images/Κρήτη - Παράδοση - Ιστορία.png",
  },
  {
    category: "Λαογραφία",
    src: "/category-images/Λαογραφία.png",
  },
  {
    category: "Λεξικά",
    src: "/category-images/Λεξικά.png",
  },
  {
    category: "Λευκώματα",
    src: "/category-images/Λευκώματα.png",
  },
  {
    category: "Μυθολογία",
    src: "/category-images/Μυθολογία.png",
  },
  {
    category: "Νομική Επιστήμη",
    src: "/category-images/Νομική Επιστήμη.png",
  },
  {
    category: "Ξενόγλωσσα",
    src: "/category-images/Ξενόγλωσσα.png",
  },
  {
    category: "Οικονομία",
    src: "/category-images/Οικονομία.png",
  },
  {
    category: "Παγκόσμια Λογοτεχνία",
    src: "/category-images/Παγκόσμια Λογοτεχνία.png",
  },
  {
    category: "Παιδικά",
    src: "/category-images/Παιδικά.png",
  },
  {
    category: "ΠΕΚ",
    src: "/category-images/ΠΕΚ.png",
  },
  {
    category: "Ποίηση",
    src: "/category-images/Ποίηση.png",
  },
  {
    category: "Πολιτική",
    src: "/category-images/Πολιτική.png",
  },
  {
    category: "Σχολικά",
    src: "/category-images/Σχολικά.png",
  },
  {
    category: "Τέχνες",
    src: "/category-images/Τέχνες.png",
  },
  {
    category: "Φιλοσοφία",
    src: "/category-images/Φιλοσοφία.png",
  },
  {
    category: "Ψυχολογία",
    src: "/category-images/Ψυχολογία.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categories);
}
