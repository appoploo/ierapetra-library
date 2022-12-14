import { NextApiRequest, NextApiResponse } from "next";

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
    category: "Arhaiologia",
    floor: "ground",
    bookshelf: "19a",
  },
  {
    title: "Ο Άγιος Νικόλαος και η Περιοχή του",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Thriskeia",
    floor: "ground",
    bookshelf: "19b",
  },
  {
    title: "Γεραγωτικοί Αντικατοπτρισμοί",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Istoria",
    floor: "ground",
    bookshelf: "20a",
  },
  {
    title: "Η Ψυχή του Τόπου ",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Laografia",
    floor: "ground",
    bookshelf: "20b",
  },
  {
    title: "Τα μετά Κεφάλων Κριών Κράνη",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Elliniki Logotehnia",
    floor: "ground",
    bookshelf: "21a",
  },
  {
    title: "Οι Τάφοι του Μεγάλου Αλεξάνδρου",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Istoria",
    floor: "ground",
    bookshelf: "21b",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Α",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Lexika",
    floor: "ground",
    bookshelf: "22a",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Β",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Lexika",
    floor: "ground",
    bookshelf: "22b",
  },

  {
    title: "Ακρόπολη",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Istoria",
    floor: "first",
    bookshelf: "1",
  },
  {
    title: "Ο Πολιτικός Λόγος του Κ. Καραμανλή",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Politiki",
    floor: "first",
    bookshelf: "2a",
  },
  {
    title: "Κεντρί - Το Χωριό των Σταμνάδων",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Laografia",
    floor: "first",
    bookshelf: "2b",
  },
  {
    title: "Δρίμες",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    category: "Laografia",
    bookshelf: "3a",
  },
  {
    title: "Υπερκινητικότητα",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Genika Themata",
    floor: "first",
    bookshelf: "3b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "4a",
  },
  {
    title: "Ταξιδεύοντας στον χρόνο",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Istoria",
    floor: "first",
    bookshelf: "4b",
  },
  {
    title: "Περικλέους Επιτάφιος",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaioi Ellines Siggrafeis",
    floor: "first",
    bookshelf: "5a",
  },
  {
    title: "Μεσσολόγι",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Genika Themata",
    floor: "first",
    bookshelf: "5b",
  },
  {
    title: "Αιγαίο ο πολιτισμός του Αρχιπελάγους",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Genika Themata",
    floor: "first",
    bookshelf: "6a",
  },
  {
    title: "Αισθητική Ψυχολογία",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Psihologia",
    floor: "first",
    bookshelf: "6b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "7",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "8",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "9",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "10",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "11",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "12",
  },

  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "13",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "14",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
    floor: "first",
    bookshelf: "15",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    category: "Arhaiologia",
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
