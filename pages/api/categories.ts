import { NextApiRequest, NextApiResponse } from "next";

const categories: {
  value: string;
  category: string;
  categoryEn: string;
  src: string;
}[] = [
  {
    value: "agwgh",
    category: "Αγωγή",
    categoryEn: "Education",
    src: "/category-images/Αγωγή.png",
  },
  {
    value: "arxaioi-ellhnes-syggrafeis",
    category: "Αρχαίοι Έλληνες Συγγραφείς",
    categoryEn: "Ancient Greek Authors",
    src: "/category-images/Αρχαίοι Έλληνες Συγγραφείς.png",
  },
  {
    value: "arxaiologia",
    category: "Αρχαιολογία",
    categoryEn: "Archaeology",
    src: "/category-images/Αρχαιολογία.png",
  },
  {
    value: "biografies",
    category: "Βιογραφίες",
    categoryEn: "Biographies",
    src: "/category-images/Βιογραφίες.png",
  },
  {
    value: "genika-8emata",
    category: "Γενικά Θέματα",
    categoryEn: "General Topics",
    src: "/category-images/Γενικά Θέματα.png",
  },
  {
    value: "gewlogia",
    category: "Γεωλογία",
    categoryEn: "Geology",
    src: "/category-images/Γεωλογία.png",
  },
  {
    value: "glwssa",
    category: "Γλώσσα",
    categoryEn: "Language",
    src: "/category-images/Γλώσσα.png",
  },
  {
    value: "dokimia",
    category: "Δοκίμια",
    categoryEn: "Essays",
    src: "/category-images/Δοκίμια.png",
  },
  {
    value: "egkyklopaideies",
    category: "Εγκυκλοπαίδειες",
    categoryEn: "Encyclopedias",
    src: "/category-images/Εγκυκλοπαίδειες.png",
  },
  {
    value: "ellhnikh-logotexnia",
    category: "Ελληνική Λογοτεχνία",
    categoryEn: "Greek Literature",
    src: "/category-images/Ελληνική Λογοτεχνία.png",
  },
  {
    value: "efhbikh-logotexnia",
    category: "Εφηβική Λογοτεχνία",
    categoryEn: "Young Adult Literature",
    src: "/category-images/Εφηβική Λογοτεχνία.png",
  },
  {
    value: "8rhskeia",
    category: "Θρησκεία",
    categoryEn: "Religion",
    src: "/category-images/Θρησκεία.png",
  },
  {
    value: "iatrikh",
    category: "Ιατρική",
    categoryEn: "Medicine",
    src: "/category-images/Ιατρική.png",
  },
  {
    value: "istoria",
    category: "Ιστορία",
    categoryEn: "History",
    src: "/category-images/Ιστορία.png",
  },
  {
    value: "koinwniologia",
    category: "Κοινωνιολογία",
    categoryEn: "Sociology",
    src: "/category-images/Κοινωνιολογία.png",
  },
  {
    value: "komik",
    category: "Κόμικ",
    categoryEn: "Comics",
    src: "/category-images/Κόμικ.png",
  },
  {
    value: "krhth-paradosh-istoria",
    category: "Κρήτη - Παράδοση - Ιστορία",
    categoryEn: "Crete - Tradition - History",
    src: "/category-images/Κρήτη - Παράδοση - Ιστορία.png",
  },
  {
    value: "laografia",
    category: "Λαογραφία",
    categoryEn: "Folklore",
    src: "/category-images/Λαογραφία.png",
  },
  {
    value: "le3ika",
    category: "Λεξικά",
    categoryEn: "Dictionaries",
    src: "/category-images/Λεξικά.png",
  },
  {
    value: "leykwmata",
    category: "Λευκώματα",
    categoryEn: "Albums",
    src: "/category-images/Λευκωματα.png",
  },
  {
    value: "my8ologia",
    category: "Μυθολογία",
    categoryEn: "Mythology",
    src: "/category-images/Μυθολογία.png",
  },
  {
    value: "nomikh-episthmh",
    category: "Νομική Επιστήμη",
    categoryEn: "Legal Science",
    src: "/category-images/Νομική Επιστήμη.png",
  },
  {
    value: "3enoglwssa",
    category: "Ξενόγλωσσα",
    categoryEn: "Foreign Languages",
    src: "/category-images/Ξενόγλωσσα.png",
  },
  {
    value: "oikonomia",
    category: "Οικονομία",
    categoryEn: "Economy",
    src: "/category-images/Οικονομία.png",
  },
  {
    value: "pagkosmia-logotexnia",
    category: "Παγκόσμια Λογοτεχνία",
    categoryEn: "World Literature",
    src: "/category-images/Παγκόσμια Λογοτεχνία.png",
  },
  {
    value: "paidikh-logotexnia-my8ologia",
    category: "Παιδικά",
    categoryEn: "Children's",
    src: "/category-images/Παιδικά.png",
  },
  {
    value: "pek",
    category: "ΠΕΚ",
    categoryEn: "PEK",
    src: "/category-images/ΠΕΚ.png",
  },
  {
    value: "poihsh",
    category: "Ποίηση",
    categoryEn: "Poetry",
    src: "/category-images/Ποίηση.png",
  },
  {
    value: "politikh",
    category: "Πολιτική",
    categoryEn: "Politics",
    src: "/category-images/Πολιτική.png",
  },
  {
    value: "sxolika",
    category: "Σχολικά",
    categoryEn: "School",
    src: "/category-images/Σχολικά.png",
  },
  {
    value: "texnes",
    category: "Τέχνες",
    categoryEn: "Arts",
    src: "/category-images/Τέχνες.png",
  },
  {
    value: "filosofia",
    category: "Φιλοσοφία",
    categoryEn: "Philosophy",
    src: "/category-images/Φιλοσοφία.png",
  },
  {
    value: "psyxologia",
    category: "Ψυχολογία",
    categoryEn: "Psychology",
    src: "/category-images/Ψυχολογία.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categories);
}
