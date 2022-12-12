import Link from "next/link";
import { useRef, useState } from "react";
import clsx from "clsx";
import { useRouter } from "next/router";

const books: { name: string; img: string }[] = [
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

const booksCatigories: { label: string; href: string }[] = [
  { label: " Adventure stories", href: "/demo?type=adventure-stories" },
  { label: " Classics", href: "/demo?type=classics" },
  { label: " Crime", href: "/demo?type=crime" },
  { label: "Fairy tales", href: "/demo?type=fairy-tales" },
  { label: "Fantasy", href: "/demo?type=fantasy" },
  { label: "Historical fiction", href: "/demo?type=historical-fiction" },
  { label: "Horror", href: "/demo?type=horror" },
  { label: "Humour and satire", href: "/demo?type=humourandsatire" },
  { label: "Mystery", href: "/demo?type=mystery" },
  { label: "Romance", href: "/demo?type=romance" },
  { label: "Science fiction", href: "/demo?type=science-fiction" },
  { label: "Thrillers", href: "/demo?type=thrillers" },
];
export default function Demo() {
  const router = useRouter();
  const page = router.query.type;
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState<string>("");
  console.log(page);

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
        <ul className="menu border-r  mt-0.5 hidden md:block bg-base-100 w-56 items-center  h-screen">
          {booksCatigories.map((sm, idx) => (
            <li key={idx}>
              <Link
                href={sm.href}
                className={clsx({
                  "active ": `/demo?type=${page}` === sm.href,
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
                href={t.href}
                className="w-full h-full flex  items-center"
              >
                <span
                  className={clsx(
                    "py-3 whitespace-nowrap w-fit px-4 my-6 border text-center  rounded-lg  ",
                    {
                      "bg-primary": `/demo?type=${page}` === t.href,
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
              .filter((v) => v.name.includes(text))
              .map((obj, idx) => (
                <div
                  key={idx}
                  className="card card-compact w-full bg-base-100 shadow-xl"
                >
                  <figure>
                    <img src={obj.img} alt="Shoes" />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{obj.name}</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                      <button
                        onClick={() => {
                          if (!ref.current) return;
                          ref.current.checked = true;
                        }}
                        className="btn btn-primary normal-case"
                      >
                        More info
                      </button>
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
            You have been selected for a chance to get one year of subscription
            to use Wikipedia for free!
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
