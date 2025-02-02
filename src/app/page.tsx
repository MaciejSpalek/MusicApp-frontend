import { getSession } from "../lib/session";

export default async function Home() {
    const session = await getSession();
    console.log(session);
  return (
    <div>
      <main>Homepage</main>
    </div>
  );
}
