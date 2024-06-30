type SubMenuItemProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const SubMenuItem: React.FC<SubMenuItemProps> = (props) => {
  return (
    <button
      className="flex gap-4 items-center font-normal text-left py-2 pl-3 pr-8 duration-100 hover:bg-gray-opacity hover:text-main active:bg-gray-opacity active:text-main"
      {...props}
    />
  );
};
