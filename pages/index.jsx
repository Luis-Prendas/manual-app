export const getStaticProps = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_URL;
  const response = await fetch(baseUrl + "/api/hechizos");
  const res = await response.json();
  return {
    props: {
      data: res,
    },
    revalidate: 30,
  };
};

const Home = ({ data }) => {
  return (
    <section>
      {data.map((item) => (
        <p className="text-xl" key={item._id}>
          {item.name}
        </p>
      ))}
    </section>
  );
};

export default Home;
