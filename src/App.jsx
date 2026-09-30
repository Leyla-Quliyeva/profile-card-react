import { useState } from "react";
import ProfileCard from "./components/ProfileCard";

const App = () => {
  const [userdata] = useState({
    name: "Leyla",
    surname: "Quliyeva",
    profession: "Frontend Developer",
    bio: "HTML, CSS, JavaScript və  üzrə bacarıqlara  \n sahib Junior Frontend Developerəm.",
    image:
      "https://png.pngtree.com/thumb_back/fh260/background/20250208/pngtree-flowers-cherry-blossoms-spring-dreamy-pink-background-image_16992647.jpg",
  });
  return (
    <div>
      <ProfileCard data={userdata} />
    </div>
  );
};

export default App;
