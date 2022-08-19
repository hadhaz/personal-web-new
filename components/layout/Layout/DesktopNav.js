import Link from "next/link";

export default function DesktopNav() {
  return (
    <header className="flex px-8 md:px-[7vw] lg:px-[10vw] xl:px-[14vw] py-6 bg-primary">
      <h1 className="tracking-[0.16em] basis-1/3 font-bold"><Link href="/">HADZAMI</Link></h1>
      <nav className="basis-1/3 flex justify-center">
        <ul className="flex gap-8 sm:gap-12">
          <li className="hover:font-semibold">
            <Link href='projects'>Projects</Link>
          </li>
          <li className="hover:font-semibold">
            <Link href='journals'>Journals</Link>
          </li>
          <li className="hover:font-semibold">
            <Link href='resume'>Resume</Link>
          </li>
        </ul>
      </nav>
      <h3 className="font-semibold basis-1/3 text-right">Contact</h3>
    </header>
  );
}
