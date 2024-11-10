import { NextApiRequest, NextApiResponse } from "next";

const categories: {
  value: string;
  category: string;
  categoryEn: string;
  src: string;
}[] = [
  {
    value: "krhth-paradosh-istoria",
    category: "Κρήτη - Παράδοση - Ιστορία",
    categoryEn: "Crete - Tradition - History",
    src: "/category-images/Κρήτη - Παράδοση - Ιστορία.png",
  },
  {
    value: "panepisthmiakes-ekdoseis",
    category: "Πανεπιστημιακές εκδόσεις",
    categoryEn: "University Publications",
    src: "/category-images/Πανεπιστημιακές εκδόσεις.png",
  },
  {
    value: "leykwmata",
    category: "Λευκώματα",
    categoryEn: "Albums",
    src: "/category-images/Λευκωματα.png",
  },
  {
    value: "ellhnikh-logotexnia",
    category: "Ελληνική Λογοτεχνία",
    categoryEn: "Greek Literature",
    src: "/category-images/Ελληνική Λογοτεχνία.png",
  },
  {
    value: "arxaiologia",
    category: "Αρχαιολογία",
    categoryEn: "Archaeology",
    src: "/category-images/Αρχαιολογία.png",
  },
  {
    value: "dokimia",
    category: "Δοκίμια",
    categoryEn: "Essays",
    src: "/category-images/Δοκίμια.png",
  },
  {
    value: "glwssa",
    category: "Γλώσσα",
    categoryEn: "Language",
    src: "/category-images/Γλώσσα.png",
  },
  {
    value: "psyxologia",
    category: "Ψυχολογία",
    categoryEn: "Psychology",
    src: "/category-images/Ψυχολογία.png",
  },
  {
    value: "koinwniologia",
    category: "Κοινωνιολογία",
    categoryEn: "Sociology",
    src: "/category-images/Κοινωνιολογία.png",
  },
  {
    value: "genika-8emata",
    category: "Γενικά Θέματα",
    categoryEn: "General Topics",
    src: "/category-images/Γενικά Θέματα.png",
  },
  {
    value: "pagkosmia-logotexnia",
    category: "Παγκόσμια Λογοτεχνία",
    categoryEn: "World Literature",
    src: "/category-images/Παγκόσμια Λογοτεχνία.png",
  },
  {
    value: "3enoglwssa",
    category: "Ξενόγλωσσα",
    categoryEn: "Foreign Languages",
    src: "/category-images/Ξενόγλωσσα.png",
  },
  {
    value: "poihsh",
    category: "Ποίηση",
    categoryEn: "Poetry",
    src: "/category-images/Ποίηση.png",
  },
  {
    value: "mageirikh",
    category: "Μαγειρική",
    categoryEn: "Cooking",
    src: "/category-images/Μαγειρική.png",
  },
  {
    value: "texnes",
    category: "Τέχνες",
    categoryEn: "Arts",
    src: "/category-images/Τέχνες.png",
  },
  {
    value: "gewlogia",
    category: "Γεωλογία",
    categoryEn: "Geology",
    src: "/category-images/Γεωλογία.png",
  },
  {
    value: "iatrikh",
    category: "Ιατρική",
    categoryEn: "Medicine",
    src: "/category-images/Ιατρική.png",
  },
  {
    value: "laografia",
    category: "Λαογραφία",
    categoryEn: "Folklore",
    src: "/category-images/Λαογραφία.png",
  },
  {
    value: "biografies",
    category: "Βιογραφίες",
    categoryEn: "Biographies",
    src: "/category-images/Βιογραφίες.png",
  },
  {
    value: "palies-spanies-ekdoseis",
    category: "Παλιές Σπάνιες Εκδόσεις",
    categoryEn: "Old Rare Editions",
    src: "/category-images/Παλιές Σπάνιες Εκδόσεις.png",
  },
  {
    value: "oikonomia",
    category: "Οικονομία",
    categoryEn: "Economy",
    src: "/category-images/Οικονομία.png",
  },
  {
    value: "politikh",
    category: "Πολιτική",
    categoryEn: "Politics",
    src: "/category-images/Πολιτική.png",
  },
  {
    value: "le3ika",
    category: "Λεξικά",
    categoryEn: "Dictionaries",
    src: "/category-images/Λεξικά.png",
  },
  {
    value: "istoria",
    category: "Ιστορία",
    categoryEn: "History",
    src: "/category-images/Ιστορία.png",
  },
  {
    value: "arxaioi-ellhnes-syggrafeis",
    category: "Αρχαίοι Έλληνες Συγγραφείς",
    categoryEn: "Ancient Greek Authors",
    src: "/category-images/Αρχαίοι Έλληνες Συγγραφείς.png",
  },
  {
    value: "filosofia",
    category: "Φιλοσοφία",
    categoryEn: "Philosophy",
    src: "/category-images/Φιλοσοφία.png",
  },
  {
    value: "egkyklopaideies",
    category: "Εγκυκλοπαίδειες",
    categoryEn: "Encyclopedias",
    src: "/category-images/Εγκυκλοπαίδειες.png",
  },
  {
    value: "nomikh-episthmh",
    category: "Νομική Επιστήμη",
    categoryEn: "Legal Science",
    src: "/category-images/Νομική Επιστήμη.png",
  },
  {
    value: "8rhskeia",
    category: "Θρησκεία",
    categoryEn: "Religion",
    src: "/category-images/Θρησκεία.png",
  },
  {
    value: "dwrea-filo8eoy-boyzoynerakh",
    category: "Δωρεά Φιλόθεου Βουζουνεράκη",
    categoryEn: "Donation of Filotheou Bouzounerakis",
    src: "/category-images/Δωρεά Φιλόθεου Βουζουνεράκη.png",
  },
  {
    value: "diafora",
    category: "Διάφορα",
    categoryEn: "Miscellaneous",
    src: "/category-images/Διάφορα.png",
  },
  {
    value: "dwrea-man-papadakh",
    category: "Δωρεά Μαν Παπαδάκη",
    categoryEn: "Donation of Man Papadakis",
    src: "/category-images/Δωρεά Μαν Παπαδάκη.png",
  },
  {
    value: "dwrea-zwh",
    category: "Δωρεά Ζώη",
    categoryEn: "Donation of Zoe",
    src: "/category-images/Δωρεά Ζώη.png",
  },
  {
    value: "paidikh-logotexnia-my8ologia",
    category: "Παιδική Λογοτεχνία - Μυθολογία",
    categoryEn: "Children's Literature - Mythology",
    src: "/category-images/Παιδική Λογοτεχνία.png",
  },
  {
    value: "efhbikh-logotexnia",
    category: "Εφηβική Λογοτεχνία",
    categoryEn: "Young Adult Literature",
    src: "/category-images/Εφηβική Λογοτεχνία.png",
  },
  {
    value: "paidikes-egkyklopedies",
    category: "Παιδικές Εγκυκλοπαίδιες",
    categoryEn: "Children's Encyclopedias",
    src: "/category-images/Παιδικές Εγκυκλοπαίδιες.png",
  },
  {
    value: "agwgh",
    category: "Αγωγή",
    categoryEn: "Education",
    src: "/category-images/Αγωγή.png",
  },
  {
    value: "komik",
    category: "Κόμικ",
    categoryEn: "Comics",
    src: "/category-images/Κόμικ.png",
  },
  {
    value: "my8ologia",
    category: "Μυθολογία",
    categoryEn: "Mythology",
    src: "/category-images/Μυθολογία.png",
  },
  {
    value: "x.k.",
    category: "Χ.Κ.",
    categoryEn: "X.K.",
    src: "/category-images/Χ.Κ..png",
  },
  {
    value: "sxolika",
    category: "Σχολικά",
    categoryEn: "School",
    src: "/category-images/Σχολικά.png",
  },
  {
    value: "astynomika",
    category: "Αστυνομικά",
    categoryEn: "Detective",
    src: "/category-images/Αστυνομικά.png",
  },
  {
    value: "pek",
    category: "ΠΕΚ",
    categoryEn: "PEK",
    src: "/category-images/ΠΕΚ.png",
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  res.json(categories);
}
