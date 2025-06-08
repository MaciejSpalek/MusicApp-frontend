import { getProfile } from "@/src/lib/actions";

export const Profile = async () => {
  const res = await getProfile();

  console.log({ res });

  function hello(name: string) {
    return function (day: string) {
      console.log(`${day}`);
    };
  }

  return (
    <div className="grid md:grid-cols-[400px_1fr] gap-8 h-full p-8">
      <div className="flex flex-col items-start rounded-xl border border-gray-200 min-h-[600px] shadow-xl p-8">
        <div className="rounded-xl w-[200px] h-[200px] border border-gray-200 bg-gray-50"></div>
      </div>
      <div className="rounded-xl border border-gray-200 min-h-[600px] shadow-xl p-8">
        <p className="font-medium text-xl mb-8">Your beats</p>
        <div className="grid gap-4">
          <div className="rounded-xl w-full h-[100px] border border-gray-200 bg-gray-50"></div>
          <div className="rounded-xl w-full h-[100px] border border-gray-200 bg-gray-50"></div>
          <div className="rounded-xl w-full h-[100px] border border-gray-200 bg-gray-50"></div>
        </div>
      </div>
    </div>
  );
};
