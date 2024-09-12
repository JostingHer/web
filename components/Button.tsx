import React from 'react';

type PropsButton = {
  children?: React.ReactNode; 
  label: string;             
  type?: "dark" | "light";     
  className?: string;          
  iconPosition?: "left" | "right"; 
  href?: string;             
  isExternal?: boolean;        
  as?: "button" | "a";         
  onClick?: () => void;      
};

const Button = (props: PropsButton) => {
  const {
    children,
    label,
    type = "dark",
    className,
    iconPosition = "left",
    href,
    isExternal = false,
    as = "button",
    onClick
  } = props;

  const renderContent = () => (
    <>
      {iconPosition === "left" && children && (
        <span className="mr-2 inline-flex align-middle">{children}</span>
      )}
      {label}
      {iconPosition === "right" && children && (
        <span className="ml-2 inline-flex align-middle">{children}</span>
      )}
    </>
  );

  const commonClasses = `font-semibold border-solid border-2 py-2 px-10 flex items-center justify-center duration-500 ${className}`;

  // Estilo para tipo light
  const lightClasses = `bg-white text-xl border-white text-black hover:bg-gray-300 hover:border-gray-300 ${commonClasses}`;

  // Estilo para tipo dark
  const darkClasses = `bg-black text-white border-black hover:opacity-80 hover:border-opacity-80 ${commonClasses}`;

  if (as === "a" && href) {
    return (
      <a
        href={href}
        target={isExternal ? "_blank" : "_self"} // Abre en nueva pestaña si isExternal es true
        rel={isExternal ? "noopener noreferrer" : undefined} // Seguridad adicional si es external
        className={type === "light" ? lightClasses : darkClasses}
      >
        {renderContent()}
      </a>
    );
  }

  // Renderiza un botón si no es un enlace
  return (
    <button
      onClick={onClick}
      className={type === "light" ? lightClasses : darkClasses}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
