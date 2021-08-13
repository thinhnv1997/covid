import { Dropdown, Menu } from "antd";
import { Switch } from "antd";
import { useTranslation } from "react-i18next";
import i18n from "../../translation/index";
import { useHistory } from "react-router-dom";
import { SettingOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { GlobalAction } from "../../redux/rootActions";

import darkVars from "./theme/dark.json";
import lightVars from "./theme/light.json";

function MainLayout(props) {
  const { t } = useTranslation();
  const history = useHistory();
  const dispatch = useDispatch();

  const handleLanguageChange = (isChecked) => {
    if (isChecked) {
      i18n.changeLanguage("vi");
    } else {
      i18n.changeLanguage("en");
    }
  };

  const handleModeChange = (isChecked) => {
    if (isChecked) {
      window.less.modifyVars(darkVars);
      dispatch(GlobalAction.changeTheme("dark"));
    } else {
      window.less.modifyVars(lightVars);
      dispatch(GlobalAction.changeTheme("light"));
    }
  };

  const handleLogIn = () => {
    history.push("/login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("user");
    history.push("/news");
  };

  const menu = (
    <Menu>
      <Menu.Item key="1">
        <Switch onChange={handleLanguageChange} />
        {"  "}VietNamese
      </Menu.Item>
      <Menu.Item key="2">
        <Switch onChange={handleModeChange} />
        {"  "}Dark Mode
      </Menu.Item>
      {localStorage.getItem("user") ? (
        <Menu.Item key="3">
          <p onClick={handleLogOut}>{t("header.logout")}</p>
        </Menu.Item>
      ) : (
        <Menu.Item key="3">
          <p onClick={handleLogIn}>{t("header.login")}</p>
        </Menu.Item>
      )}
    </Menu>
  );

  return (
    <div style={{ minHeight: "100vh" }}>
      <Menu mode="horizontal" style={{ justifyContent: "flex-end" }}>
        <Menu.Item
          key="overView"
          onClick={() => {
            history.push("/");
          }}
        >
          <h3>{t("header.overView")}</h3>
        </Menu.Item>
        <Menu.Item
          key="table"
          onClick={() => {
            history.push("/table");
          }}
        >
          <h3>{t("header.table")}</h3>
        </Menu.Item>

        <Menu.Item
          key="news"
          onClick={() => {
            history.push("/news");
          }}
        >
          <h3>{t("header.news")}</h3>
        </Menu.Item>
        <Menu.Item key="dropdownMenu">
          <Dropdown overlay={menu} trigger={["click"]}>
            <SettingOutlined style={{ fontSize: "20px", width: "50px" }} />
          </Dropdown>
        </Menu.Item>
      </Menu>
      {props.children}
    </div>
  );
}

export default MainLayout;
