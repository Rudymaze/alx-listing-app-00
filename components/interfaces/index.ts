export interface CardProps {
  title?: string;

  children?: React.ReactNode;

  className?: string;

  [key: string]: any;
}

export interface ButtonProps {
  label?: string;

  type?: "button" | "submit" | "reset";

  disabled?: boolean;

  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;

  className?: string;

  [key: string]: any;
}
