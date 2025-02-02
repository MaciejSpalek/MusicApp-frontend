import { getSession } from "@/src/lib/session";

const Dashboard = async () => {
  const session = await getSession();
  console.log({ session });
  return <div>Dashboard</div>;
};

export default Dashboard;
