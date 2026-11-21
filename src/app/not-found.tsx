import Link from "next/link";

export default function NotFound() {
  return <main className="not-found shell"><span className="section-kicker">404 — NOT FOUND</span><h1>That page is<br />out of context.</h1><Link className="button button-primary" href="/">Back to portfolio ↗</Link></main>;
}
