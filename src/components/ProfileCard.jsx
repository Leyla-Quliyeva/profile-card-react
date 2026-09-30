const ProfileCard = ({ data }) => {
  return (
    <div className="w- 75 h-75 m-40 flex justify-center items-center gap-10 border border-[#e8b4c4] shadow-2xl rounded-2xl bg-[#fff1f5]">
      {" "}
      <div>
        <img
          className="w-62.5 h-62.5 rounded-[150px] "
          src={data.image}
          alt={data.name}
        />
      </div>
      <div className="font-[Kalnia] text-[#8f5b6d] leading-12">
        <h3 className="text-[35px]">
          {data.name} {data.surname}
        </h3>
        <p className="text-[25px]">{data.profession}</p>
        <p className="text-[20px]" style={{ whiteSpace: "pre-line" }}>
          {data.bio}
        </p>
      </div>
    </div>
  );
};

export default ProfileCard;
