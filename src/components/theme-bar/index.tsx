import { FC } from "react";
import { init, Button, ButtonType } from "./helper";

interface ThemeBarProps {
  buttons: ButtonType[];
}
const ThemeBar: FC<ThemeBarProps> = ({ buttons }) => {
  init();
  return (
    <div className="top-0 right-0 flex justify-end">
      {buttons?.map((e) => (
        <Button key={e.text} callback={e.callback} icon={e.icon} />
      ))}
    </div>
  );
};

export default ThemeBar;
