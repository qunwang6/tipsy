import { FaGithub } from 'react-icons/fa';
import { useMatch } from 'react-router-dom';

function Footer() {
  const onHomePage = useMatch({ path: '/', end: true });

  if (onHomePage) {
    return (
      <footer className="flex items-center justify-center p-6">

      </footer>
    );
  }

  return <footer />;
}

export default Footer;
