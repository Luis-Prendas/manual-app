import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

const Home = () => {
  const { data } = useSWR("/api/hechizos", fetcher);
  if (!data) return <div>Loading...</div>;
  if (data) {
    console.log(data);
    return (
      <>
        <section>
          {data.map((item) => (
            <div key={item.name}>{item.name}</div>
          ))}
        </section>
      </>
    );
  }
};

export default Home;
