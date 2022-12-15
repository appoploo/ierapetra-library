import { NextApiRequest, NextApiResponse } from "next";

const books: {
  title: string;
  category: string;
  floor: string;
  bookshelf: string;
}[] = [
  {
    title: "Ελληνικές Παραδοσιακές Φορεσιές",
    category: "Αρχαιολογία",
    floor: "ground",
    bookshelf: "19a",
  },
  {
    title: "Ο Άγιος Νικόλαος και η Περιοχή του",
    category: "Θρησκεία",
    floor: "ground",
    bookshelf: "19b",
  },
  {
    title: "Γεραγωτικοί Αντικατοπτρισμοί",
    category: "Ιστορία",
    floor: "ground",
    bookshelf: "20a",
  },
  {
    title: "Η Ψυχή του Τόπου ",
    category: "Λαογραφία",
    floor: "ground",
    bookshelf: "20b",
  },
  {
    title: "Τα μετά Κεφάλων Κριών Κράνη",
    category: "Ελληνική Λογοτεχνία",
    floor: "ground",
    bookshelf: "21a",
  },
  {
    title: "Οι Τάφοι του Μεγάλου Αλεξάνδρου",
    category: "Ιστορία",
    floor: "ground",
    bookshelf: "21b",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Α",
    category: "Λεξικά",
    floor: "ground",
    bookshelf: "22a",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Β",
    category: "Λεξικά",
    floor: "ground",
    bookshelf: "22b",
  },

  {
    title: "Ακρόπολη",
    category: "Ιστορία",
    floor: "first",
    bookshelf: "1",
  },
  {
    title: "Ο Πολιτικός Λόγος του Κ. Καραμανλή",
    category: "Πολιτική",
    floor: "first",
    bookshelf: "2a",
  },
  {
    title: "Κεντρί - Το Χωριό των Σταμνάδων",
    category: "Λαογραφία",
    floor: "first",
    bookshelf: "2b",
  },
  {
    title: "Δρίμες",
    floor: "first",
    category: "Λαογραφία",
    bookshelf: "3a",
  },
  {
    title: "Υπερκινητικότητα",
    category: "Γενικά Θέματα",
    floor: "first",
    bookshelf: "3b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "4a",
  },
  {
    title: "Ταξιδεύοντας στον χρόνο",
    category: "Ιστορία",
    floor: "first",
    bookshelf: "4b",
  },
  {
    title: "Περικλέους Επιτάφιος",
    category: "Αρχαίοι Έλληνες Συγγραφείς",
    floor: "first",
    bookshelf: "5a",
  },
  {
    title: "Μεσσολόγι",
    category: "Γενικά Θέματα",
    floor: "first",
    bookshelf: "5b",
  },
  {
    title: "Αιγαίο ο πολιτισμός του Αρχιπελάγους",
    category: "Γενικά Θέματα",
    floor: "first",
    bookshelf: "6a",
  },
  {
    title: "Αισθητική Ψυχολογία",
    category: "Ψυχολογία",
    floor: "first",
    bookshelf: "6b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "7",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "8",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "9",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "10",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "11",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "12",
  },

  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "13",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "14",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "15",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    category: "Αρχαιολογία",
    floor: "first",
    bookshelf: "16",
  },
];
export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { category, title } = req.query;
  let str = title as string;
  const lowerCaseTitle = str?.toLowerCase();
  res.status(200).json(
    books.filter((book) => {
      const sameCategory = category ? book.category === category : true;
      const sameTitle = title
        ? title === ""
          ? true
          : book.title?.toLowerCase().includes(lowerCaseTitle)
        : true;
      return sameCategory && sameTitle;
    })
  );
}
