import Container from './Container.jsx';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t border-black/5">
      <Container className="py-6">
        <p className="text-sm text-slateInk">© {year} Calvin Salsali</p>
      </Container>
    </footer>
  );
}
