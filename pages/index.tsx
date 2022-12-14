import Link from "next/link";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";
import { GroundFloor } from "../components/GroundFloor";
import { FirstFloor } from "../components/FirstFoor";
import axios from "axios";
import useSWR from "swr";
import Image from "next/image";

const fetcher = (url: string) => axios.get(url).then((r) => r.data);

type Book = {
  title: string;
  category: string;
  floor: string;
  bookshelf: string;
};

const useBooks = (title?: string, category?: string) => {
  const { data, error } = useSWR<Book[]>(
    `/api/books?category=${category ? category : ""}&title=${
      title ? title : ""
    }`,
    fetcher
  );
  return {
    data: data ?? ([] as Book[]),
    isLoading: !error && !data,
    isError: error,
  };
};

type Category = { label: string; category: string; src: string };

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
  const category = router.query.category as string;
  const title = router.query.title as string;
  const ref = useRef<HTMLInputElement>(null);
  const [selectedBook, setSelectedBook] = useState<Book>({
    title: "",
    category: "",
    floor: "",
    bookshelf: "",
  });
  const { data: books } = useBooks(title, category);
  const { data: categories } = useCategories();

  const getCategorySrc = (category: string) => {
    return categories.find((e) => e.category === category)?.src;
  };
  return (
    <div className="h-screen overflow-hidden">
      <div className="flex   border justify-center items-center p-2 shadow">
        <input
          type="text"
          placeholder="🔍 Search..."
          className="input input-bordered  w-full md:w-1/3 rounded-full "
          onChange={(evt) =>
            router.push({
              query: {
                ...router.query,
                title: evt.target.value,
              },
            })
          }
        />
      </div>

      <div className=" grid   sm:grid-col-1 md:grid-cols-[300px_2fr]">
        <ul className="fixed-height menu h-screen border-r  mt-0.5  hidden md:block bg-base-100 w-72 justify-items-center  overflow-y-auto ">
          <li>
            <Link href={"/"}>Όλες</Link>
          </li>
          {categories.map((sm, idx) => (
            <li key={idx}>
              <Link
                href={`/?category=${sm.category}`}
                className={clsx("whitespace-nowrap", {
                  "active ": category === sm.category,
                })}
              >
                {sm.category}
              </Link>
            </li>
          ))}
        </ul>
        <div className="h-screen md:p-8  p-0">
          <div className=" md:hidden  gap-x-3 flex text-sm font-bold w-screen overflow-x-auto  ">
            <Link className="w-full h-full flex  items-center" href={"/"}>
              <span className="py-3 whitespace-nowrap w-fit px-4 my-6 border text-center  rounded-lg  ">
                Όλες
              </span>
            </Link>

            {categories.map((t, idx) => (
              <Link
                key={idx}
                href={`/?category=${t.category}`}
                className="w-full h-full flex  items-center"
              >
                <span
                  className={clsx(
                    "py-3 whitespace-nowrap w-fit px-4 my-6 border text-center  rounded-lg  ",
                    {
                      "bg-primary": category === t.category,
                    }
                  )}
                >
                  {t.category}
                </span>
              </Link>
            ))}
          </div>

          <div className="grid grid-col-1 lg:grid-cols-2 xl:grid-cols-4 gap-4 max-h-screen overflow-auto h-fit  p-8 pb-20">
            {books.map((obj, idx) => (
              <Link
                href={`/?category=${category}&title=${obj.title}&floor=${obj.floor}&bookshelf=${obj.bookshelf}`}
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
                        className="h-40"
                        src={getCategorySrc(obj.category)}
                        alt="Book"
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
