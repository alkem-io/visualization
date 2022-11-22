export interface MyButtonProps {
  title: string;
}

export const MyButton = ({ title }: MyButtonProps) => {
  const className = 'MyButton';

  return (
    `<button class="${className}">${title}</button>`
  );
};

