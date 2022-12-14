import { NextApiRequest, NextApiResponse } from "next";

const booksCatigories: { label: string; type: string }[] = [
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

function getRandomCategory() {
  return booksCatigories[Math.floor(Math.random() * booksCatigories.length)]
    .type;
}

const books: {
  title: string;
  src: string;
  category: string;
  floor: string;
  bookshelf: string;
}[] = [
  {
    title: "Ελληνικές Παραδοσιακές Φορεσιές",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "19a",
  },
  {
    title: "Ο Άγιος Νικόλαος και η Περιοχή του",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "19b",
  },
  {
    title: "Γεραγωτικοί Αντικατοπτρισμοί",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "20a",
  },
  {
    title: "Η Ψυχή του Τόπου ",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "20b",
  },
  {
    title: "Τα μετά Κεφάλων Κριών Κράνη",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "21a",
  },
  {
    title: "Οι Τάφοι του Μεγάλου Αλεξάνδρου",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "21b",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Α",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "22a",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Β",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "ground",
    bookshelf: "22b",
  },

  {
    title: "Ακρόπολη",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "1",
  },
  {
    title: "Ο Πολιτικός Λόγος του Κ. Καραμανλή",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "2a",
  },
  {
    title: "Κεντρί - Το Χωριό των Σταμνάδων",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "2b",
  },
  {
    title: "Δρίμες",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "3a",
  },
  {
    title: "Υπερκινητικότητα",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "3b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "4a",
  },
  {
    title: "Ταξιδεύοντας στον χρόνο",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "4b",
  },
  {
    title: "Περικλέους Επιτάφιος",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "5a",
  },
  {
    title: "Μεσσολόγι",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "5b",
  },
  {
    title: "Αιγαίο ο πολιτισμός του Αρχιπελάγους",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "6a",
  },
  {
    title: "Αισθητική Ψυχολογία",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "6b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "7",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "8",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "9",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "10",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "11",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "12",
  },

  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "13",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "14",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "15",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: getRandomCategory(),
    floor: "first",
    bookshelf: "16",
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, title } = req.query;
  res.status(200).json(
    books.filter((book) => {
      const sameCategory = category ? book.category === category : true;
      const sameTitle = title
        ? title === ""
          ? true
          : book.title.includes(title as string)
        : true;
      return sameCategory && sameTitle;
    })
  );
}
