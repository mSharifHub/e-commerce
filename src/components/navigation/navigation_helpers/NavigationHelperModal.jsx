import { Link } from "react-router-dom";

export default function NavigationHelperModal({ title, links }) {
  return (
    <div>
      <h1 className="flex justify-center items-center  mt-4 ml-4 text-lg font-semibold  text-slate-600 ">
        {title}
      </h1>
      <ul className="flex flex-col space-y-3 mt-8 mx-2 ">
        {links.map((link) => (
          <li
            className=" mx-10 text-slate-600 transisition duration-75 ease-out hover:text-slate-900  hover:font-semibold cursor-pointer"
            key={link.name}
          >
            <Link to={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
