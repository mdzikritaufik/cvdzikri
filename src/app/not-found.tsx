import Link from "next/link";

export default function NotFound() {
  return (
    <section className="px-5 py-20 md:px-8">
      <div className="label mb-6 text-accent">404</div>
      <h1 className="display mb-6 text-[clamp(36px,6vw,88px)]">Page not found.</h1>
      <Link href="/" className="btn btn-primary">
        BACK TO START
      </Link>
    </section>
  );
}
