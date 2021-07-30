import { Menu } from "antd";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../../translation/index";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

const { SubMenu } = Menu;

function MainLayout(props) {
  const { t } = useTranslation();
  const history = useHistory();
  const [theme, setTheme] = useState("light");

  const handleLanguageChange = (isChecked) => {
    if (isChecked) {
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("vi");
    }
  };

  const handleModeChange = (isChecked) => {
    if (isChecked) {
      document
        .getElementById("root")
        .setAttribute("style", "background-color: rgba(255,255,255,0.5);");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      setTheme("dark");
    } else {
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      setTheme("light");
    }
  };

  const handleLogIn = () => {
    history.push("/login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    history.push("/login");
  };

  return (
    <div style={{ minHeight: "100vh" }}>
      <Menu mode="horizontal" theme={theme} style={{ height: "59px" }}>
        <Menu.Item key="menu1">
          <Link to="/">{t("header.overView")}</Link>
        </Menu.Item>
        <Menu.Item key="menu2">
          <Link to="/table">{t("header.table")}</Link>
        </Menu.Item>
        <Menu.Item key="menu3">
          <Link to="/news">{t("header.news")}</Link>
        </Menu.Item>
        <SubMenu key="sub" title={t("header.setting")}>
          <Menu.Item key="1">
            English? <Switch defaultChecked onChange={handleLanguageChange} />
          </Menu.Item>
          <Menu.Item key="2">
            Dark Mode? <Switch onChange={handleModeChange} />
          </Menu.Item>
        </SubMenu>
        {localStorage.getItem("user") ? (
          <Menu.Item key="menu5">
            <p onClick={handleLogOut}>{t("header.logout")}</p>
          </Menu.Item>
        ) : (
          <Menu.Item key="menu5">
            <p onClick={handleLogIn}>{t("header.login")}</p>
          </Menu.Item>
        )}
      </Menu>
      {props.children}
    </div>
  );
}

export default MainLayout;
