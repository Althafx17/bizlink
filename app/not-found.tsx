import Link from "next/link";

export default function NotFound() {
  return (
    <main id="main-content" className="mx-auto min-h-[68svh] max-w-6xl px-5 pt-32 pb-16">
      <p className="text-cyan-300">404</p>
      <h1 className="mt-3 text-5xl font-black">Page not found</h1>
      <Link href="/" className="mt-6 inline-flex rounded-full bg-amber-400 px-6 py-3 font-bold text-[#142443]">
        Back to home
      </Link>
      <nav aria-label="Find a page" className="mt-6 flex flex-wrap gap-5">
        <Link href="/about">About</Link>
        <Link href="/services">Services</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </main>
  );
}
