import { useRouter } from "next/router";
import UserContent from "../../components/user/UserContent";

const Story = () => {
  const router = useRouter();
  const DUMMY_DATA = {
    2022: [
      { title: "my last story", story: "bla bla", date: "1 mei", id: "key" },
      { title: "my mid story", story: "Yeah yeah", date: "1 mei", id: "hai" },
      { title: "my past story", story: "Test", date: "1 mei", id: "hel" },
    ],
    2021: [
      { title: "papaaa", story: "bla bla", date: "1 mei", id: "key" },
      { title: "nostalgic", story: "bla bla", date: "1 mei", id: "hai" },
      { title: "papaaa", story: "bla bla", date: "1 mei", id: "hel" },
    ],
  };

  return (
    <div>
      <UserContent data={DUMMY_DATA}/>
    </div>
  );
};

export default Story;
