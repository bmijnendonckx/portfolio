import { Container, Row } from 'react-bootstrap'

const Panel = ({ id, className = '', height, colorFlag, title, children }) => {
  const titleElement = title ? (
    <>
      <h1>{title}</h1>
      <hr />
    </>
  ) : null;

  return (
    <section
      id={id}
      className={`${className} panel`}
      style={{
        height: height === "landing" ? "100vh" : "auto",
        backgroundColor: colorFlag === "1" ? "#343434" : "#444444",
      }}
    >
      <Container style={{ height: "100%" }}>
        {titleElement}
        <Row style={{ height: height === "landing" ? "100%" : "auto" }}>
          {children}
        </Row>
      </Container>
    </section>
  );
};

export default Panel;