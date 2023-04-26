import { NextApiRequest, NextApiResponse } from "next";

const categories: { value: string; category: string; src: string }[] = [
  {
    value: "agwgh",
    category: "Αγωγή",
    src: "/category-images/Αγωγή.png",
  },
  {
    value: "arxaioi-ellhnes-syggrafeis",
    category: "Αρχαίοι Έλληνες Συγγραφείς",
    src: "/category-images/Αρχαίοι Έλληνες Συγγραφείς.png",
  },
  {
    value: "arxaiologia",
    category: "Αρχαιολογία",
    src: "/category-images/Αρχαιολογία.png",
  },
  {
    value: "biografies",
    category: "Βιογραφίες",
    src: "/category-images/Βιογραφίες.png",
  },
  {
    value: "genika-8emata",
    category: "Γενικά Θέματα",
    src: "/category-images/Γενικά Θέματα.png",
  },
  {
    value: "gewlogia",
    category: "Γεωλογία",
    src: "/category-images/Γεωλογία.png",
  },
  {
    value: "glwssa",
    category: "Γλώσσα",
    src: "/category-images/Γλώσσα.png",
  },
  {
    value: "dokimia",
    category: "Δοκίμια",
    src: "/category-images/Δοκίμια.png",
  },
  {
    value: "egkyklopaideies",
    category: "Εγκυκλοπαίδειες",
    src: "/category-images/Εγκυκλοπαίδειες.png",
  },
  {
    value: "ellhnikh-logotexnia",
    category: "Ελληνική Λογοτεχνία",
    src: "/category-images/Ελληνική Λογοτεχνία.png",
  },
  {
    value: "efhbikh-logotexnia",
    category: "Εφηβική Λογοτεχνία",
    src: "/category-images/Εφηβική Λογοτεχνία.png",
  },
  {
    value: "8rhskeia",
    category: "Θρησκεία",
    src: "/category-images/Θρησκεία.png",
  },
  {
    value: "iatrikh",
    category: "Ιατρική",
    src: "/category-images/Ιατρική.png",
  },
  {
    value: "istoria",
    category: "Ιστορία",
    src: "/category-images/Ιστορία.png",
  },
  {
    value: "koinwniologia",
    category: "Κοινωνιολογία",
    src: "/category-images/Κοινωνιολογία.png",
  },
  {
    value: "komik",
    category: "Κόμικ",
    src: "/category-images/Κόμικ.png",
  },
  {
    value: "krhth-paradosh-istoria",
    category: "Κρήτη - Παράδοση - Ιστορία",
    src: "/category-images/Κρήτη - Παράδοση - Ιστορία.png",
  },
  {
    value: "laografia",
    category: "Λαογραφία",
    src: "/category-images/Λαογραφία.png",
  },
  {
    value: "le3ika",
    category: "Λεξικά",
    src: "/category-images/Λεξικά.png",
  },
  {
    value: "leykwmata",
    category: "Λευκώματα",
    src: "/category-images/Λευκωματα.png",
  },
  {
    value: "my8ologia",
    category: "Μυθολογία",
    src: "/category-images/Μυθολογία.png",
  },
  {
    value: "nomikh-episthmh",
    category: "Νομική Επιστήμη",
    src: "/category-images/Νομική Επιστήμη.png",
  },
  {
    value: "3enoglwssa",
    category: "Ξενόγλωσσα",
    src: "/category-images/Ξενόγλωσσα.png",
  },
  {
    value: "oikonomia",
    category: "Οικονομία",
    src: "/category-images/Οικονομία.png",
  },
  {
    value: "pagkosmia-logotexnia",
    category: "Παγκόσμια Λογοτεχνία",
    src: "/category-images/Παγκόσμια Λογοτεχνία.png",
  },
  {
    value: "paidika",
    category: "Παιδικά",
    src: "/category-images/Παιδικά.png",
  },
  {
    value: "pek",
    category: "ΠΕΚ",
    src: "/category-images/ΠΕΚ.png",
  },
  {
    value: "poihsh",
    category: "Ποίηση",
    src: "/category-images/Ποίηση.png",
  },
  {
    value: "politikh",
    category: "Πολιτική",
    src: "/category-images/Πολιτική.png",
  },
  {
    value: "sxolika",
    category: "Σχολικά",
    src: "/category-images/Σχολικά.png",
  },
  {
    value: "texnes",
    category: "Τέχνες",
    src: "/category-images/Τέχνες.png",
  },
  {
    value: "filosofia",
    category: "Φιλοσοφία",
    src: "/category-images/Φιλοσοφία.png",
  },
  {
    value: "psyxologia",
    category: "Ψυχολογία",
    src: "/category-images/Ψυχολογία.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categories);
}
