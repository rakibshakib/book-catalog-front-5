import Card from "../common/Card";
import NavBar from "../layout/NavBar";
import demoBooksImg from "../assets/demoBooksImg.png";
import Footer from "../layout/Footer";

/* interface HomeProps {
  children: React.ReactNode;
} */

const Home = () => {
  return (
    <div>
      <NavBar />
      <div className="container pt-20">
        <Card
          images={demoBooksImg}
          title="Growth Hacking"
          details="Growth hackers rely on continuous testing and experimentation to identify effective tactics and strategies for growth. They use A/B testing and data analysis to optimize their efforts"
          action={() => {
            console.log("Hello");
          }}
          actionTitle="Read More"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
