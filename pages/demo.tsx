import Link from "next/link";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { GroundFloor } from "../components/GroundFloor";
import { FirstFloor } from "../components/FirstFoor";
import Image from "next/image";

const books: {
  title: string;
  src: string;
  floor: string;
  bookshelf: string;
}[] = [
  {
    title: "Ελληνικές Παραδοσιακές Φορεσιές",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "19a",
  },
  {
    title: "Ο Άγιος Νικόλαος και η Περιοχή του",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "19b",
  },
  {
    title: "Γεραγωτικοί Αντικατοπτρισμοί",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "20a",
  },
  {
    title: "Η Ψυχή του Τόπου ",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "20b",
  },
  {
    title: "Τα μετά Κεφάλων Κριών Κράνη",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "21a",
  },
  {
    title: "Οι Τάφοι του Μεγάλου Αλεξάνδρου",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "21b",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Α",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "22a",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Β",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "ground",
    bookshelf: "22b",
  },

  {
    title: "Ακρόπολη",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "1",
  },
  {
    title: "Ο Πολιτικός Λόγος του Κ. Καραμανλή",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "2a",
  },
  {
    title: "Κεντρί - Το Χωριό των Σταμνάδων",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "2b",
  },
  {
    title: "Δρίμες",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "3a",
  },
  {
    title: "Υπερκινητικότητα",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "3b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "4a",
  },
  {
    title: "Ταξιδεύοντας στον χρόνο",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "4b",
  },
  {
    title: "Περικλέους Επιτάφιος",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "5a",
  },
  {
    title: "Μεσσολόγι",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "5b",
  },
  {
    title: "Αιγαίο ο πολιτισμός του Αρχιπελάγους",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "6a",
  },
  {
    title: "Αισθητική Ψυχολογία",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "6b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "7",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "8",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "9",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "10",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "11",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "12",
  },

  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "13",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "14",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "15",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    src: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    floor: "first",
    bookshelf: "16",
  },
];

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
export default function Demo() {
  const router = useRouter();
  const page = router.query.type;
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");
  const [selectedBook, setSelectedBook] = useState<{
    title: string;
    src: string;
    floor: string;
    bookshelf: string;
  }>({ title: "", src: "", floor: "", bookshelf: "" });

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex   border justify-center items-center p-2 shadow">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="input input-bordered  w-full md:w-1/3 rounded-full "
          onChange={(evt) => setText(evt.currentTarget.value)}
        />
      </div>

      <div className=" grid   sm:grid-col-1 md:grid-cols-[300px_2fr]">
        <ul className="menu h-screen border-r fixed-height mt-0.5  hidden md:block bg-base-100 w-72 justify-items-center  overflow-y-auto ">
          {booksCatigories.map((sm, idx) => (
            <li key={idx}>
              <Link
                href={`/demo?type=${sm.type}`}
                className={clsx("whitespace-nowrap", {
                  "active ": `/demo?type=${page}` === `/demo?type=${sm.type}`,
                })}
              >
                {sm.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-screen md:p-8  p-0">
          <div className=" md:hidden  gap-x-3 flex text-sm font-bold w-screen overflow-x-auto  ">
            {booksCatigories.map((t, idx) => (
              <Link
                key={idx}
                href={`/demo?type=${t.type}`}
                className="w-full h-full flex  items-center"
              >
                <span
                  className={clsx(
                    "py-3 whitespace-nowrap w-fit px-4 my-6 border text-center  rounded-lg  ",
                    {
                      "bg-primary":
                        `/demo?type=${page}` === `/demo?type=${t.type}`,
                    }
                  )}
                >
                  {t.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 max-h-screen overflow-auto h-fit  p-8 pb-20">
            {books
              .filter((v) => v.title.includes(text))
              .map((obj, idx) => (
                <Link
                  href={`/demo?type=${page}&title=${obj.title}&floor=${obj.floor}&bookshelf=${obj.bookshelf}`}
                  key={idx}
                >
                  <div
                    onClick={() => {
                      if (!ref.current) return;
                      ref.current.checked = true;
                      setSelectedBook(obj);
                    }}
                    className="card card-compact w-full h-full bg-base-100 shadow-xl"
                  >
                    <figure>
                      <picture>
                        <img
                          src={obj.src}
                          alt="Book"
                          width={800}
                          height={500}
                        />
                      </picture>
                    </figure>
                    <div className="card-body">
                      <h2 className="card-title  xl:text-sm 2xl:text-lg">
                        {obj.title}
                      </h2>
                      <div className="font-medium xl:sticky xl:mb-8">
                        <span className="underline">Τοποθεσία </span>
                        <br />
                        <div className="flex gap-x-2  ">
                          <span>όροφος:{obj.floor}</span>
                          <span>ράφι:{obj.bookshelf}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <input
        ref={ref}
        checked={ref?.current?.checked}
        type="checkbox"
        id="my-modal"
        className="modal-toggle"
      />
      <div className="modal ">
        <div className="modal-box relative w-  max-w-6xl lg:max-w-2xl xl:max-w-4xl ">
          <label
            onClick={() => {
              if (!ref.current) return;
              ref.current.checked = false;
            }}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <div className="">
            <h3 className="font-bold text-center text-lg  gap-3 h-14 mb-3 ">
              <span>{selectedBook.title}</span>
              <br />
              <span>{selectedBook.floor} </span>
              <span>{selectedBook.bookshelf}</span>
            </h3>
            <div className="divider"></div>

            <div className="flex justify-center  items-center ">
              {selectedBook.floor === "ground" ? (
                <GroundFloor />
              ) : (
                <FirstFloor />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
