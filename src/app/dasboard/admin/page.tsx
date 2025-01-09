import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-2 flex-col md:flex-row">
      {/*LEFT */}
      <div className="w-full lg:w-2/3">
        {/* USER CARDS */}
        <div className="flex gap-4 justify-between">
          <UserCard type="students" />
          <UserCard type="teacher" />
          <UserCard type="Parent" />
          <UserCard type="Staff" />
        </div>
      </div>
      {/*RIGHT */}
      <div className="w-full lg:w-1/3">r</div>
    </div>
  );
};

export default AdminPage;
