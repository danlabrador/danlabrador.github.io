export default function Navigation() {
  return (
    <nav className="mt-8 lg:hidden">
      <ul className="list-none ml-0">
        <li className="text-xs">
          <a
            href="#about"
            className="inline-flex items-center font-figtree font-semibold py-4 pr-4 pl-0 no-underline uppercase group hover:text-slate-100 active:text-accent-orange"
          >
            <span className="h-px mr-2 w-8 bg-slate-100 transition-all duration-200 group-hover:w-16"></span>
            <span className="text-slate-400 transition-colors duration-200 group-hover:text-slate-100 group-hover:font-bold group-active:text-accent-orange group-active:font-bold">
              About
            </span>
          </a>
        </li>
        <li className="text-xs">
          <a
            href="#projects"
            className="inline-flex items-center font-figtree font-semibold py-4 pr-4 pl-0 no-underline uppercase group hover:text-slate-100 active:text-accent-orange"
          >
            <span className="h-px mr-2 w-8 bg-slate-100 transition-all duration-200 group-hover:w-16"></span>
            <span className="text-slate-400 transition-colors duration-200 group-hover:text-slate-100 group-hover:font-bold group-active:text-accent-orange group-active:font-bold">
              Projects
            </span>
          </a>
        </li>
        <li className="text-xs">
          <a
            href="#experience"
            className="inline-flex items-center font-figtree font-semibold py-4 pr-4 pl-0 no-underline uppercase group hover:text-slate-100 active:text-accent-orange"
          >
            <span className="h-px mr-2 w-8 bg-slate-100 transition-all duration-200 group-hover:w-16"></span>
            <span className="text-slate-400 transition-colors duration-200 group-hover:text-slate-100 group-hover:font-bold group-active:text-accent-orange group-active:font-bold">
              Experience
            </span>
          </a>
        </li>
        <li className="text-xs">
          <a
            href="#articles"
            className="inline-flex items-center font-figtree font-semibold py-4 pr-4 pl-0 no-underline uppercase group hover:text-slate-100 active:text-accent-orange"
          >
            <span className="h-px mr-2 w-8 bg-slate-100 transition-all duration-200 group-hover:w-16"></span>
            <span className="text-slate-400 transition-colors duration-200 group-hover:text-slate-100 group-hover:font-bold group-active:text-accent-orange group-active:font-bold">
              Articles
            </span>
          </a>
        </li>
        <li className="text-xs">
          <a
            href="#contact"
            className="inline-flex items-center font-figtree font-semibold py-4 pr-4 pl-0 no-underline uppercase group hover:text-slate-100 active:text-accent-orange"
          >
            <span className="h-px mr-2 w-8 bg-slate-100 transition-all duration-200 group-hover:w-16"></span>
            <span className="text-slate-400 transition-colors duration-200 group-hover:text-slate-100 group-hover:font-bold group-active:text-accent-orange group-active:font-bold">
              Contact
            </span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
