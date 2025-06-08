import { getSession } from "../lib/session";

export default async function Home() {
  const session = await getSession();

  return (
    <div>
      <main>Homepage</main>
    </div>
  );
}
