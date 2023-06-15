import Nav from 'react-bootstrap/Nav';

function Footer() {
  return (
    <div className="bg-light">
      <Nav className="justify-content-center" activeKey="/">
        <Nav.Item>
          <Nav.Link href="/">Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Contacts</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">About us</Nav.Link>
        </Nav.Item>
      </Nav>
      <p className="text-center mt-4 mb-4 pb-2">Cookies 2023</p>
    </div>
  );
}

export default Footer


