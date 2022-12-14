import { NextApiRequest, NextApiResponse } from "next";

const categories: { label: string; type: string }[] = [
  { label: "Αγωγή", type: "Agogi" },
  { label: "Αρχαίοι Έλληνες Συγγραφείς", type: "Arhaioi Ellines Siggrafeis" },
  { label: "Αρχαιολογία", type: "Arhaiologia" },
  { label: "Βιογραφίες", type: "Viografies" },
  { label: "Γενικά Θέματα", type: "Genika Themata" },
  { label: "Γεωλογία", type: "Geologia" },
  { label: "Γλώσσα", type: "Glossa" },
  { label: "Δοκίμια", type: "Dokimia" },
  { label: "Εγκυκλοπαίδειες", type: "Egkiklopaidies" },
  { label: "Ελληνική Λογοτεχνία", type: "Elliniki Logotehnia" },
  { label: "Εφηβική Λογοτεχνία", type: "Efiviki Logotehnia" },
  { label: "Θρησκεία", type: "Thriskeia" },
  { label: "Ιατρική", type: "Iatriki" },
  { label: "Ιστορία", type: "Istoria" },
  { label: "Κοινωνιολογία", type: "Koinoniologia" },
  { label: "Κόμικ", type: "Comic" },
  { label: "Κρήτη - Παράδοση - Ιστορία", type: "Crete-Paradosi-Istoria" },
  { label: "Λαογραφία", type: "Laografia" },
  { label: "Λεξικά", type: "Lexika" },
  { label: "Λευκώματα", type: "Lefkomata" },
  { label: "Μυθολογία", type: "Mithologia" },
  { label: "Νομική Επιστήμη", type: "Nomiki Epistimi" },
  { label: "Ξενόγλωσσα", type: "Xenoglossa" },
  { label: "Οικονομία", type: "Oikonomia" },
  { label: "Παγκόσμια Λογοτεχνία", type: "Pagkosmia Logotehnia" },
  { label: "Παιδικά", type: "Paidika" },
  { label: "ΠΕΚ", type: "PEK" },
  { label: "Ποίηση", type: "Pioisi" },
  { label: "Πολιτική", type: "Politiki" },
  { label: "Σχολικά", type: "Sholika" },
  { label: "Τέχνες", type: "Tehnes" },
  { label: "Φιλοσοφία", type: "Filosofia" },
  { label: "Ψυχολογία", type: "Psihologia" },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(categories);
}
