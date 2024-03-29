import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { GroundFloor } from "../components/GroundFloor";
import { FirstFloor } from "../components/FirstFoor";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";
import { Res } from "./api/books";
import Pagination from "../components/Pagination";
import { useT } from "../hooks/useT";
import { Book } from "./api/book";

const uuidToMap = {
  author: "36451f30-6339-4195-be6f-c6983fce0135",
  title: "36226e92-62e5-486d-8845-8a29bc0308e1",
  ISBN: "e68c884f-66f6-483d-a2e4-04e8c981f857",
  publisher: "74b5ce69-f1c4-49d7-9a0a-499bc0cee052",
  category: "9d6a626f-b57d-43ae-b00c-77cd7a962384",
  floor: "bc0751b0-9231-4f19-8c39-197aa77cdb86",
  shelf: "e9ec22ac-882a-4a6e-ad6f-e4491c2d4305",
  year: "4b13aeda-53af-4044-95ac-b48d8a839120",
};

const mapFirstLetterToCategoryIdx: Record<string, any> = {
  // English letters
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
  i: 8,
  j: 9,
  k: 10,
  l: 11,
  m: 12,
  n: 13,
  o: 14,
  p: 15,
  q: 16,
  r: 17,
  s: 18,
  t: 19,
  u: 20,
  v: 21,
  w: 22,
  x: 23,
  y: 24,
  z: 25,

  // Greek letters
  α: 26,
  β: 27,
  γ: 28,
  δ: 29,
  ε: 30,
  ζ: 31,
  η: 32,
  θ: 33,
  ι: 34,
  κ: 35,
  λ: 36,
  μ: 37,
  ν: 38,
  ξ: 39,
  ο: 40,
  π: 41,
  ρ: 42,
  σ: 43,
  τ: 44,
  υ: 45,
  φ: 46,
  χ: 47,
  ψ: 48,
  ω: 49,

  // Numbers
  "0": 50,
  "1": 51,
  "2": 52,
  "3": 53,
  "4": 54,
  "5": 55,
  "6": 56,
  "7": 57,
  "8": 58,
  "9": 59,

  // Symbols
  "-": 60,
  _: 61,
  ".": 62,
  ",": 63,
  ":": 64,
  ";": 65,
  "!": 66,
  "?": 67,
  "@": 68,
  "#": 69,
  $: 70,
  "%": 71,
  "&": 72,
  "*": 73,
  "+": 74,
  "=": 75,
  "/": 76,
  "\\": 77,
  "|": 78,
  "~": 79,
  "`": 80,
  "^": 81,
  "(": 82,
  ")": 83,
  "{": 84,
  "}": 85,
  "[": 86,
  "]": 87,
  "<": 88,
  ">": 89,
  '"': 90,
  "'": 91,
  "’": 92,
  "‘": 93,
  "“": 94,
  "”": 95,
};

const fetcher = (url: string) => axios.get(url).then((r) => r.data);

const useBooks = (title?: string, category?: string) => {
  const router = useRouter();

  const { data, error } = useSWR<Res>(
    `/api/books?category=${category ? category : ""}&title=${
      title ? title : ""
    }&page=${router.query.page}&searchTerm=${router.query.searchTerm ?? ""}`,
    fetcher
  );
  return {
    data: data ?? ({} as Res),
    isLoading: !error && !data,
    isError: error,
  };
};

function useBook() {
  const router = useRouter();
  const id = router.query.id as string;
  const { data, error } = useSWR<Book>(id && `/api/book?id=${id}`, fetcher);
  return {
    data: data ?? ({} as Book),
    isLoading: !error && !data,
    isError: error,
  };
}

type Category = {
  value: string;
  label: string;
  categoryEn: string;
  category: string;
  src: string;
};

const useCategories = () => {
  const { data, error } = useSWR<Category[]>("/api/categories", fetcher);
  return {
    data: data ?? ([] as Category[]),
    isLoading: !error && !data,
    isError: error,
  };
};

export default function Demo() {
  const router = useRouter();
  const category = (router.query.category as string) ?? "agwgh";
  const searchTerm = router.query.searchTerm as string;
  const ref = useRef<HTMLInputElement>(null);
  const [total, setTotal] = useState(0);

  const { data: books, isLoading } = useBooks(searchTerm, category);
  const { data: book } = useBook();
  const { data: categories } = useCategories();

  const getCategorySrc = (category: string) => {
    const firstLetter = category[0].toLocaleLowerCase();
    const idx = mapFirstLetterToCategoryIdx[firstLetter] % categories.length;
    return (
      categories[idx]?.src ?? "/category-images/Αρχαίοι Έλληνες Συγγραφείς.png"
    );
  };

  const author =
    book.properties?.find((p) => p.propertyUuid === uuidToMap["author"])
      ?.value ?? "-";
  const title =
    book.properties?.find((p) => p.propertyUuid === uuidToMap["title"])
      ?.value ?? "-";
  const cat = book.properties?.find(
    (p) => p.propertyUuid === uuidToMap["category"]
  )?.value;

  const isbn =
    book.properties?.find((p) => p.propertyUuid === uuidToMap["ISBN"])?.value ??
    "-";
  const publisher =
    book.properties?.find((p) => p.propertyUuid === uuidToMap["publisher"])
      ?.value ?? "-";
  const floor =
    book.properties?.find((p) => p.propertyUuid === uuidToMap["floor"])
      ?.value ?? "-";
  const shelf =
    book.properties?.find((p) => p.propertyUuid === uuidToMap["shelf"])
      ?.value ?? "-";
  const year =
    book.properties?.find((p) => p.propertyUuid === uuidToMap["year"])?.value ??
    "-";

  useEffect(() => {
    if (books.totalPages) setTotal(books.totalPages - 1 ?? 0);
  }, [books]);

  const t = useT();
  const locale = router.locale;
  const setLang = (e: string) => {
    if (typeof window !== "undefined") localStorage.setItem("lang", e);
  };

  function catToLabel(cat?: string) {
    if (!cat) return "-";
    const obj = categories.find((c) => c.value === cat);
    return router.locale === "en" ? obj?.categoryEn : obj?.category;
  }

  return (
    <div className="h-screen">
      <div className="flex z-50 sticky top-0 bg-white gap-4 md:items-center border p-2 shadow">
        <div className=" flex gap-2 md:mr-6 lg:mr-14 xl:mr-40 2xl:mr-72">
          <picture>
            <img
              src="ierapetra-logo.png"
              alt="ierapetra-logo"
              width={60}
              height={60}
            />
          </picture>
          <h2 className=" hidden  md:block text-base  2xl:text-xl font-medium text-center p-4 ">
            {t("nameofapp")}
          </h2>
        </div>

        <input
          type="text"
          value={searchTerm ?? ""}
          placeholder="🔍 Search..."
          className="input  input-bordered  w-full md:w-1/3  rounded-full   "
          onChange={(evt) =>
            router.push({
              query: {
                ...router.query,
                searchTerm: evt.target.value,
              },
            })
          }
        />
        <select
          value={locale}
          onChange={(evt) => {
            const locale = evt.currentTarget.value;
            setLang(locale);
            router.push("/", "/", { locale });
          }}
          className="w-fit  right-0  bottom-0 md:top-0  fixed h-16 border"
        >
          <option value="en">
            🇬🇧 &nbsp; {(locale === "el" ? "ΑΓΓΛΙΚΑ" : `English`).toUpperCase()}
          </option>
          <option value="el">
            🇬🇷 &nbsp;{(locale === "el" ? "ΕΛΛΗΝΙΚΑ" : `Greek`).toUpperCase()}
          </option>
        </select>
      </div>

      <div className=" grid  sm:grid-col-1 md:grid-cols-[300px_2fr]">
        <ul className="h-full menu  border-r  mt-0.5  hidden md:block bg-base-100 w-72 justify-items-center  ">
          {categories.map((sm, idx) => (
            <li key={idx}>
              <Link
                href={`/?category=${sm.value}`}
                className={clsx("whitespace-nowrap", {
                  "active ": category === sm.value,
                })}
              >
                {catToLabel(sm?.value)}
              </Link>
            </li>
          ))}
        </ul>
        <div className="md:p-4 md:pb-0 h-fit">
          <div className=" md:hidden  gap-x-3 flex text-sm font-bold w-screen overflow-x-auto  ">
            {categories.map((t, idx) => (
              <Link
                key={idx}
                href={`/?category=${t.value}`}
                className="w-full h-full flex  items-center"
              >
                <span
                  className={clsx(
                    "py-3 whitespace-nowrap w-fit px-4 my-6 border text-center  rounded-lg  ",
                    {
                      "bg-primary": category === t.value,
                    }
                  )}
                >
                  {t.category}
                </span>
              </Link>
            ))}
          </div>
          <div className="flex flex-col h-full ">
            {books?.content?.length === 0 && (
              <div className="w shadow w-full bg-base-100 border h-full grid place-items-center">
                <div className="card-body h-40">
                  <h2 className="card-title  h-full grid place-items-center xl:text-sm 2xl:text-lg">
                    {t("noresults")}
                  </h2>
                </div>
              </div>
            )}
            {isLoading && (
              <div className="w shadow w-full bg-base-100 border h-full grid place-items-center">
                <div className="card-body h-40 flex">
                  <div className="relative">
                    <div className="h-12 w-12 rounded-full border-t-8 border-b-8 border-gray-200"></div>
                    <div className="absolute top-0 left-0 h-12 w-12 rounded-full border-t-8 border-b-8 border-blue-500 animate-spin"></div>
                  </div>
                  <h2 className="  h-full grid place-items-center xl:text-sm 2xl:text-lg">
                    {t("Loading")}
                  </h2>
                </div>
              </div>
            )}
            <div className="grid grid-col-1 h-full  lg:grid-cols-2 xl:grid-cols-4 gap-4 ">
              {books?.content?.map((obj, idx) => (
                <Link
                  href={{
                    query: {
                      ...router.query,
                      id: obj.uuid,
                    },
                  }}
                  key={idx}
                >
                  <div
                    onClick={() => {
                      if (!ref.current) return;
                      ref.current.checked = true;
                    }}
                    className="card card-compact shadow w-full bg-base-100 border h-fit"
                  >
                    <picture>
                      <img
                        className="h-40 w-full rounded-t-lg"
                        src={getCategorySrc(obj.label)}
                        alt="Book"
                      />
                    </picture>
                    <div className="card-body h-40">
                      <h2 className="card-title  xl:text-sm 2xl:text-lg">
                        {obj.label}
                      </h2>
                      <div className="font-medium xl:sticky xl:mb-8">
                        <span className="underline">{t("location")} </span>
                        <br />
                        <div className="flex gap-x-2">
                          {/* <span>όροφος:{obj.floor}</span> */}
                          {/* <span>ράφι:{obj.bookshelf}</span> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {books?.content?.length > 1 && (
              <div className="mt-4 w-full flex">
                <Pagination
                  currentPage={
                    router.query.page ? Number(router.query.page) : 1
                  }
                  onPageChange={(page) => {
                    router.push({
                      query: {
                        ...router.query,
                        page: page,
                      },
                    });
                  }}
                  totalPages={total}
                />
              </div>
            )}
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
        <div className="modal-box   lg:max-w-4xl xl:max-w-full ">
          <label
            onClick={() => {
              if (!ref.current) return;
              ref.current.checked = false;
              router.replace({
                query: {
                  ...router.query,
                  id: null,
                },
              });
            }}
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold flex justify-center items-center text-center border-b pb-4 mb-4 md:text-xl lg:text-lg xl:text-xl h-20   md:h-36 lg:h-20   lg:max-w-full  ">
            <span>
              {t("title")} : <br /> {title}
            </span>
          </h3>

          <div className=" grid lg:grid-cols-[15vw_1fr] gap-2 h-full">
            <ul className="lg:max-w-md uppercase h-full w-fit text-xs md:text-lg lg:text-sm xl:text-lg">
              <li className="font-semibold">{t("characteristics")}</li>
              <li className="grid grid-cols-[1fr_2fr] mt-2 w-full ">
                <span className="text-md mr-2">{t("author")}:&nbsp; </span>

                <span className="font-bold">{author}</span>
              </li>
              <li className="grid grid-cols-[1fr_2fr] mt-2 w-full ">
                <span className="text-md mr-2">{t("publisher")}:&nbsp; </span>
                <span className="font-bold">{publisher}</span>
              </li>{" "}
              <li className="grid grid-cols-[1fr_2fr] mt-2 w-full ">
                <span className="text-md mr-2">{t("year")}:&nbsp; </span>

                <span className="font-bold">{year}</span>
              </li>
              <li className="grid grid-cols-[1fr_2fr] mt-2 w-full ">
                ISBN:
                <span className="font-bold">{isbn}</span>
              </li>
              <li className="grid grid-cols-[1fr_2fr] mt-2 w-full ">
                {t("category")}:&nbsp;
                <span className="font-bold">{catToLabel(cat?.at(0))}</span>
              </li>
              <li className="font-semibold pt-4">
                <span className="font-bold">{t("location")}</span>
              </li>
              <li className="grid grid-cols-[1fr_2fr] mt-2 w-full ">
                <span className="text-md mr-2">{t("floor")}:&nbsp; </span>

                <span className="font-bold">{floor} </span>
              </li>
              <li className="grid grid-cols-[1fr_2fr] mt-2 w-full ">
                <span className="text-md mr-2">{t("shelf")}:&nbsp; </span>

                <span className="font-bold">{shelf}</span>
              </li>
            </ul>

            <div className="lg:border-l border-t lg:border-t-0 p-8 flex items-center overflow-hidden lg:h-[75vh]">
              {floor === "1" ? (
                <GroundFloor bookshelf={shelf as string} />
              ) : (
                <FirstFloor bookshelf={shelf as string} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
