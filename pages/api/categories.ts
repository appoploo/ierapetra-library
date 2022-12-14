import { NextApiRequest, NextApiResponse } from "next";

const categories: { label: string; category: string; src: string }[] = [
  {
    label: "Αγωγή",
    category: "Αγωγή",
    src: "/images/Αγωγή.png",
  },
  {
    label: "Αρχαίοι Έλληνες Συγγραφείς",
    category: "Αρχαίοι Έλληνες Συγγραφείς",
    src: "/images/Αρχαίοι Έλληνες Συγγραφείς.png",
  },
  {
    label: "Αρχαιολογία",
    category: "Αρχαιολογία",
    src: "/images/Αρχαιολογία.png",
  },
  {
    label: "Βιογραφίες",
    category: "Βιογραφίες",
    src: "/images/Βιογραφίες.png",
  },
  {
    label: "Γενικά Θέματα",
    category: "Γενικά Θέματα",
    src: "/images/Γενικά Θέματα.png",
  },
  {
    label: "Γεωλογία",
    category: "Γεωλογία",
    src: "/images/Γεωλογία.png",
  },
  {
    label: "Γλώσσα",
    category: "Γλώσσα",
    src: "/images/Γλώσσα.png",
  },
  {
    label: "Δοκίμια",
    category: "Δοκίμια",
    src: "/images/Δοκίμια.png",
  },
  {
    label: "Εγκυκλοπαίδειες",
    category: "Εγκυκλοπαίδειες",
    src: "/images/Εγκυκλοπαίδειες.png",
  },
  {
    label: "Ελληνική Λογοτεχνία",
    category: "Ελληνική Λογοτεχνία",
    src: "/images/Ελληνική Λογοτεχνία.png",
  },
  {
    label: "Εφηβική Λογοτεχνία",
    category: "Εφηβική Λογοτεχνία",
    src: "/images/Εφηβική Λογοτεχνία.png",
  },
  {
    label: "Θρησκεία",
    category: "Θρησκεία",
    src: "/images/Θρησκεία.png",
  },
  {
    label: "Ιατρική",
    category: "Ιατρική",
    src: "/images/Ιατρική.png",
  },
  {
    label: "Ιστορία",
    category: "Ιστορία",
    src: "/images/Ιστορία.png",
  },
  {
    label: "Κοινωνιολογία",
    category: "Κοινωνιολογία",
    src: "/images/Κοινωνιολογία.png",
  },
  {
    label: "Κόμικ",
    category: "Κόμικ",
    src: "/images/Κόμικ.png",
  },
  {
    label: "Κρήτη - Παράδοση - Ιστορία",
    category: "Κρήτη - Παράδοση - Ιστορία",
    src: "/images/Κρήτη - Παράδοση - Ιστορία.png",
  },
  {
    label: "Λαογραφία",
    category: "Λαογραφία",
    src: "/images/Λαογραφία.png",
  },
  {
    label: "Λεξικά",
    category: "Λεξικά",
    src: "/images/Λεξικά.png",
  },
  {
    label: "Λευκώματα",
    category: "Λευκώματα",
    src: "/images/Λευκώματα.png",
  },
  {
    label: "Μυθολογία",
    category: "Μυθολογία",
    src: "/images/Μυθολογία.png",
  },
  {
    label: "Νομική Επιστήμη",
    category: "Νομική Επιστήμη",
    src: "/images/Νομική Επιστήμη.png",
  },
  {
    label: "Ξενόγλωσσα",
    category: "Ξενόγλωσσα",
    src: "/images/Ξενόγλωσσα.png",
  },
  {
    label: "Οικονομία",
    category: "Οικονομία",
    src: "/images/Οικονομία.png",
  },
  {
    label: "Παγκόσμια Λογοτεχνία",
    category: "Παγκόσμια Λογοτεχνία",
    src: "/images/Παγκόσμια Λογοτεχνία.png",
  },
  {
    label: "Παιδικά",
    category: "Παιδικά",
    src: "/images/Παιδικά.png",
  },
  {
    label: "ΠΕΚ",
    category: "ΠΕΚ",
    src: "/images/ΠΕΚ.png",
  },
  {
    label: "Ποίηση",
    category: "Ποίηση",
    src: "/images/Ποίηση.png",
  },
  {
    label: "Πολιτική",
    category: "Πολιτική",
    src: "/images/Πολιτική.png",
  },
  {
    label: "Σχολικά",
    category: "Σχολικά",
    src: "/images/Σχολικά.png",
  },
  {
    label: "Τέχνες",
    category: "Τέχνες",
    src: "/images/Τέχνες.png",
  },
  {
    label: "Φιλοσοφία",
    category: "Φιλοσοφία",
    src: "/images/Φιλοσοφία.png",
  },
  {
    label: "Ψυχολογία",
    category: "Ψυχολογία",
    src: "/images/Ψυχολογία.png",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categories);
}
