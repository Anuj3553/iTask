import { useState } from "react";

const Navbar = () => {
  const data = [
    { id: 1, name: "anuj", email: "anuj@gmail.com" },
    { id: 2, name: "manoj", email: "manoj@gmail.com" }
  ];

  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState([...data]);

  const handleChangeSearch = (e) => {
    const text = e.target.value.toLowerCase();
    setSearchText(text);
    const filtered = data.filter((item) => 
      item.name.toLowerCase().includes(text) || item.email.toLowerCase().includes(text)
    );
    setFilteredData(filtered);
  };

  return (
    <nav className="flex justify-between bg-indigo-900 text-white py-2">
      <div className="logo">
        <span className="font-bold text-xl mx-8">iTask</span>
      </div>
      <ul className="flex gap-8 mx-9">
        <li className="cursor-pointer hover:font-bold transition-all">Home</li>
        <li className="cursor-pointer hover:font-bold transition-all">Your Tasks</li>
        <div className="flex gap-2 items-center">
          <li>
            <input
              type="text"
              className="text-black"
              onChange={handleChangeSearch}
              value={searchText}
            />
          </li>
          <button>Search</button>
          {searchText.length > 0 && filteredData.map((item) => (
            <div className="flex flex-col" key={item.id}>
              <div>{item.email}</div>
            </div>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
