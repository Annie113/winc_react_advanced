import { Link } from '@chakra-ui/react';

const SocialButton = ({ href, icon, ...rest }) => (
  <Link href={href} isExternal variant="social" {...rest}>
    {icon}
  </Link>
);

export default SocialButton;
