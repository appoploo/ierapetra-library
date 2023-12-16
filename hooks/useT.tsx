import { useRouter } from "next/router";
type Locale = "en" | "el";

type Key =
  | "characteristics"
  | "author"
  | "publisher"
  | "year"
  | "category"
  | "location"
  | "floor"
  | "title"
  | "all"
  | "shelf"
  | "nameofapp"
  | "Loading"
  | "noresults";

const translations: Record<Locale, Record<Key, string>> = {
  en: {
    Loading: "Loading",
    noresults: "No results",
    all: "All",
    characteristics: "Characteristics",
    author: "Author",
    publisher: "Publisher",
    year: "Year",
    category: "Category",
    title: "Title",
    location: "Location",
    floor: "Floor",
    shelf: "Shelf",
    nameofapp: "Ierapetra Library",
  },
  el: {
    all: "Όλες",
    Loading: "Φόρτωση",
    noresults: "Δεν βρέθηκαν αποτελέσματα",
    characteristics: "Χαρακτηριστικα",
    author: "Συγγραφεας",
    publisher: "Εκδοσεις",
    year: "Ετος",
    category: "Κατηγορια",
    title: "Τιτλος",
    location: "Θεση",
    floor: "Οροφος",
    shelf: "Ραφι",
    nameofapp: "Βιβλιοθήκη Ιεράπετρας",
  },
};

export function useT() {
  const router = useRouter();
  const locale = router.locale as "el" | "en";
  const t = (key: Key) =>
    translations[locale][key] === ""
      ? `to be translated: ${key}`
      : translations[locale][key];
  return t;
}
