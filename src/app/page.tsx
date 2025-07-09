import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1>Studienplaner</h1>
      <Link href="/dashboard">Zum Dashboard</Link>
    </div>
  );
}
