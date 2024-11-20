import React from 'react';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({
  href,
  children,
  className = 'text-white hover:text-blue-200 font-semibold text-md',
  onClick,
}) => {
  return (
    <>
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    </>
  );
};

export default NavLink;
