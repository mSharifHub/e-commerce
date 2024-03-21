import { Link } from "react-router-dom";

export default function ModalMenu({ title, links }) {
  return (
    <div className="bg-white w-[14rem] h-[17rem] flex flex-col  rounded-sm  cursor-pointer animate-slide-down">
      <h1 className="flex justify-start items-center  mt-4 ml-4 text-lg font-semibold  text-slate-600">
        {title}
      </h1>
      <ul className="flex flex-col space-y-3 mt-8 mx-2 ">
        {links.map((link) => (
          <li
            className="text-slate-600 hover:text-slate-900  hover:font-semibold"
            key={link.name}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
