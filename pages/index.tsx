import Link from "next/link";
import { useRouter } from "next/router";
import { FirstFloor } from "../components/FirstFoor";
import { GroundFloor } from "../components/GroundFloor";

const arr = [
  {
    floor: "ground",
    bookshelf: "19a",
  },
  {
    floor: "ground",
    bookshelf: "19b",
  },
  {
    floor: "ground",
    bookshelf: "20a",
  },
  {
    floor: "ground",
    bookshelf: "20b",
  },
  {
    floor: "ground",
    bookshelf: "21a",
  },
  {
    floor: "ground",
    bookshelf: "21b",
  },
  {
    floor: "ground",
    bookshelf: "22a",
  },
  {
    floor: "ground",
    bookshelf: "22b",
  },

  {
    floor: "first",
    bookshelf: "1",
  },
  {
    floor: "first",
    bookshelf: "2a",
  },
  {
    floor: "first",
    bookshelf: "2b",
  },
  {
    floor: "first",
    bookshelf: "3a",
  },
  {
    floor: "first",
    bookshelf: "3b",
  },
  {
    floor: "first",
    bookshelf: "4a",
  },
  {
    floor: "first",
    bookshelf: "4b",
  },
  {
    floor: "first",
    bookshelf: "5a",
  },
  {
    floor: "first",
    bookshelf: "5b",
  },
  {
    floor: "first",
    bookshelf: "6a",
  },
  {
    floor: "first",
    bookshelf: "6b",
  },
  {
    floor: "first",
    bookshelf: "7",
  },
  {
    floor: "first",
    bookshelf: "8",
  },
  {
    floor: "first",
    bookshelf: "9",
  },
  {
    floor: "first",
    bookshelf: "10",
  },
  {
    floor: "first",
    bookshelf: "11",
  },
  {
    floor: "first",
    bookshelf: "12",
  },

  {
    floor: "first",
    bookshelf: "13",
  },
  {
    floor: "first",
    bookshelf: "14",
  },
  {
    floor: "first",
    bookshelf: "15",
  },
  {
    floor: "first",
    bookshelf: "16",
  },
];

export default function Home() {
  const router = useRouter();
  const floor = router.query.floor;
  return (
    <div className="grid grid-cols-[400px_1fr] h-screen overflow-hidden">
      <div className="p-4 max-h-screen overflow-y-scroll">
        <input
          placeholder="🔎 Search..."
          className="input-bordered input rounded-none w-full  gap-y-4 "
        />
        <div className="divider"></div>
        <div className="gap-y-4  grid">
          {arr.map((e, idx) => (
            <Link
              key={idx}
              href={`?bookshelf=${e.bookshelf}&floor=${e.floor}`}
              className="stats border rounded-none"
            >
              <div className="stat">
                <div className="stat-title">Title {e.bookshelf}</div>
                <div className="stat-desc">Subtitle...</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="border grid place-items-center p-4 w-full h-full">
        {floor === "ground" ? <GroundFloor /> : <FirstFloor />}
      </div>
    </div>
  );
}
