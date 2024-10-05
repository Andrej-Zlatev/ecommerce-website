import HomeBanner from "./components/common/HomeBanner";

export default async function Home() {
  const response = await fetch("http://localhost:3001/products");
  const data = await response.json();
  console.log(data);

  return (
    <>
      <HomeBanner products={data} />
    </>
  );
}
