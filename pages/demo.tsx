import Link from "next/link";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

const videos = [
  {
    name: "Estrella",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "The Steam Room",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Smooth Brew",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Wide Awake",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Retro",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Sight Glass",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "The Molecule Effect",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
  {
    name: "Hot & Fresh",
    img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
  },
];
export default function videoList() {
  const router = useRouter();
  const page = router.query.type;
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");
  console.log(page);

  return (
    <div className="h-screen overflow-hidden">
      <div className="flex  justify-center items-center p-2">
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered  md:w-1/3 rounded-full "
          onChange={(evt) => setText(evt.currentTarget.value)}
        />
        <button className="btn m-2">🔍</button>
      </div>

      <div className=" grid  sm:grid-col-1 md:grid-cols-[300px_2fr]">
        <ul className="menu hidden md:block bg-base-100 w-56 items-center  h-screen">
          <li>
            <Link
              href="/demo?type=adventure-stories"
              className={clsx({ "active ": page === "adventure-stories" })}
            >
              Adventure stories
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=classics"
              className={clsx({ "active ": page === "classics" })}
            >
              Classics
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=crime"
              className={clsx({ "active ": page === "crime" })}
            >
              Crime
            </Link>
          </li>

          <li>
            <Link
              href="/demo?type=fairy-tales"
              className={clsx({ "active ": page === "fairy-tales" })}
            >
              Fairy tales
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=fantasy"
              className={clsx({ "active ": page === "fantasy" })}
            >
              Fantasy
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=historical-fiction"
              className={clsx({ "active ": page === "historical-fiction" })}
            >
              Historical fiction
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=horror"
              className={clsx({ "active ": page === "horror" })}
            >
              Horror
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=humourandsatire"
              className={clsx({ "active ": page === "humourandsatire" })}
            >
              Humour and satire
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=mystery"
              className={clsx({ "active ": page === "mystery" })}
            >
              Mystery
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=romance"
              className={clsx({ "active ": page === "romance" })}
            >
              Romance
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=science-fiction"
              className={clsx({ "active ": page === "science-fiction" })}
            >
              Science fiction
            </Link>
          </li>
          <li>
            <Link
              href="/demo?type=thrillers"
              className={clsx({ "active ": page === "trillers" })}
            >
              Thrillers
            </Link>
          </li>
        </ul>
        <div className="h-screen p-8">
          <div className=" md:hidden flex text-xs w-screen overflow-auto ">
            <a
              href="/demo?type=adventure-stories"
              className={clsx("inline-block py-2 px-2 rounded-lg  ", {
                "bg-primary mary": page === "adventure-stories",
              })}
            >
              Adventure stories
            </a>
            <a
              href="/demo?type=classics"
              className={clsx(" inline-block py-2 px-2 rounded-lg ", {
                "bg-primary  ": page === "classics",
              })}
            >
              Classics
            </a>

            <a
              href="/demo?type=crime"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary   ": page === "crime",
              })}
            >
              Crime
            </a>

            <a
              href="/demo?type=fairy-tales"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary   ": page === "fairy-tales",
              })}
            >
              Fairy tales
            </a>

            <a
              href="/demo?type=fantasy"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary   ": page === "fantasy",
              })}
            >
              Fantasy
            </a>

            <a
              href="/demo?type=historical-fiction"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary   ": page === "historical-fiction",
              })}
            >
              Historical fiction
            </a>
            <a
              href="/demo?type=horror"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary   ": page === "horror",
              })}
            >
              Horror
            </a>

            <a
              href="demo?type=humourandsatire"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary  ": page === "humourandsatire",
              })}
            >
              Humour and satire
            </a>
            <a
              href="/demo?type=mystery"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary  ": page === "mystery",
              })}
            >
              Mystery
            </a>

            <a
              href="/demo?type=romance"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary  ": page === "romance",
              })}
            >
              Romance
            </a>

            <a
              href="/demo?type=science-fiction"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary  ": page === "science-fiction",
              })}
            >
              Science fiction
            </a>
            <a
              href="/demo?type=thrillers"
              className={clsx("inline-block py-2  px-2 rounded-lg ", {
                "bg-primary  ": page === "trillers",
              })}
            >
              Thrillers
            </a>
          </div>

          <div className="grid grid-col-1 md:grid-cols-4 gap-4 max-h-screen overflow-auto h-fit  p-8 pb-20">
            {videos
              .filter((v) => v.name.includes(text))
              .map((obj, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    if (!ref.current) return;
                    ref.current.checked = true;
                  }}
                  className="card card-compact w-full bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={obj.img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{obj.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">Buy Now</button>
                    </div>
                  </div>
                </div>
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
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">
            Congratulations random Internet user!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <label htmlFor="my-modal" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
