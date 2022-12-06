import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { FirstFloor } from "../components/FirstFoor";
import { GroundFloor } from "../components/GroundFloor";

const arr = [
  {
    title: "Ελληνικές Παραδοσιακές Φορεσιές",
    floor: "ground",
    bookshelf: "19a",
  },
  {
    title: "Ο Άγιος Νικόλαος και η Περιοχή του",
    floor: "ground",
    bookshelf: "19b",
  },
  {
    title: "Γεραγωτικοί Αντικατοπτρισμοί",
    floor: "ground",
    bookshelf: "20a",
  },
  {
    title: "Η Ψυχή του Τόπου ",
    floor: "ground",
    bookshelf: "20b",
  },
  {
    title: "Τα μετά Κεφάλων Κριών Κράνη",
    floor: "ground",
    bookshelf: "21a",
  },
  {
    title: "Οι Τάφοι του Μεγάλου Αλεξάνδρου",
    floor: "ground",
    bookshelf: "21b",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Α",
    floor: "ground",
    bookshelf: "22a",
  },
  {
    title: "Βασικό Βιογραφικό Λεξικό Τόμος Β",
    floor: "ground",
    bookshelf: "22b",
  },

  {
    title: "Ακρόπολη",
    floor: "first",
    bookshelf: "1",
  },
  {
    title: "Ο Πολιτικός Λόγος του Κ. Καραμανλή",
    floor: "first",
    bookshelf: "2a",
  },
  {
    title: "Κεντρί - Το Χωριό των Σταμνάδων",
    floor: "first",
    bookshelf: "2b",
  },
  {
    title: "Δρίμες",
    floor: "first",
    bookshelf: "3a",
  },
  {
    title: "Υπερκινητικότητα",
    floor: "first",
    bookshelf: "3b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "4a",
  },
  {
    title: "Ταξιδεύοντας στον χρόνο",
    floor: "first",
    bookshelf: "4b",
  },
  {
    title: "Περικλέους Επιτάφιος",
    floor: "first",
    bookshelf: "5a",
  },
  {
    title: "Μεσσολόγι",
    floor: "first",
    bookshelf: "5b",
  },
  {
    title: "Αιγαίο ο πολιτισμός του Αρχιπελάγους",
    floor: "first",
    bookshelf: "6a",
  },
  {
    title: "Αισθητική Ψυχολογία",
    floor: "first",
    bookshelf: "6b",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "7",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "8",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "9",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "10",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "11",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "12",
  },

  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "13",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "14",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "15",
  },
  {
    title: "Νερόμυλοι της Γεργέρης",
    floor: "first",
    bookshelf: "16",
  },
];

export default function Home() {
  const router = useRouter();
  const floor = router.query.floor;
  const bookshelf = router.query.bookshelf;
  const title = router.query.title;
  const [text, setText] = useState<string>("");
  const ref = useRef<HTMLInputElement>(null);
  console.log(ref.current?.checked);
  return (
    <div className="h-screen  grid place-items-center relative  overflow-hidden">
      <label
        onClick={() => {
          if (!ref.current) return;
          ref.current.checked = true;
        }}
        className="input-bordered input fixed top-4 left-4 flex items-center justify-center text-center rounded-none w-96 "
      >
        🔎 Search...
      </label>

      <input
        type="checkbox"
        ref={ref}
        checked={ref?.current?.checked}
        id="my-modal-4"
        className="modal-toggle z-50"
      />
      <div className="modal cursor-pointer">
        <div className="modal-box">
          <input
            placeholder="🔎 Search..."
            className="input-bordered input rounded-none w-full "
            onChange={(evt) => setText(evt.currentTarget.value)}
          />
          <div className="divider"></div>
          <div className="gap-y-4 grid grid-cols-1 w-full max-h-[600px] overflow-auto">
            {arr
              .filter((b) => b.title.includes(text))
              .map((b, idx) => (
                <Link
                  onClick={() => {
                    if (!ref.current) return;
                    ref.current.checked = false;
                  }}
                  key={idx}
                  href={`?title=${b.title}&floor=${b.floor}&bookshelf=${b.bookshelf}`}
                  className="stats h-20   border rounded-none"
                >
                  <label role="button" htmlFor="my-modal-4">
                    <div className="stat">
                      <div className="stat-title">
                        {b.title} {b.bookshelf}
                      </div>
                      <div className="stat-desc">Subtitle...</div>
                    </div>
                  </label>
                </Link>
              ))}
          </div>
        </div>
      </div>

      <div className="w-full absolute -z-50  left-0 h-fit">
        {floor === "ground" ? <GroundFloor /> : <FirstFloor />}
      </div>
    </div>
  );
}
