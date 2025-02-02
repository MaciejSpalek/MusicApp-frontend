import { getProfile } from "@/src/lib/actions";

const Profile = async () => {
  const res = await getProfile();
  return (
    <div>
      Profile <p>{JSON.stringify(res)}</p>
    </div>
  );
};

export default Profile;
