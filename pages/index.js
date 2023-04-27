import Accordion from "../components/accordion";

function HomePage() {
  const styles = {
    fontFamily: "Roboto"
  };

  return (
    <div style={styles}>
      <Accordion title="Click Me!" content="this is content 1" />
      <Accordion title="Click Me!" content="this is content 2" />
    </div>
  );
}

export default HomePage;
