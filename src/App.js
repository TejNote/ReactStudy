import CatFriends from "./ref/CatFriends";

function App() {
  const catList = [];
  for (let i = 0; i < 10; i++) {
    catList.push({
      id: i,
      imageUrl: "https://loremflickr.com/250/200/cat?lock=" + i,
    });
  }

  console.log(catList);

  return (
    <>
      <CatFriends catList={catList} />
    </>
  );
}

export default App;
