import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { colors, spacing } from "../styleVariables.stylex";
import { NavLink } from "react-router-dom";

const styles = stylex.create({
  root: {
    padding: `${spacing.md} ${spacing.lg}`,
    backgroundColor: "black",
    color: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  logoContainer: {
    display: "flex",
    alignItems: "center",
    gap: spacing.md,
  },
  appName: {
    fontSize: spacing.lg,
    fontWeight: 500,
    color: colors.primary,
  },
  nav: {
    display: "flex",
    gap: spacing.md,
    alignItems: "center",
    justifyContent: "space-around",
    flex: 1,
  },
  navLink: {
    fontSize: spacing.lg,
    ":hover": {
      color: colors.primary,
    },
  },
  activeStyle: {
    color: colors.primary,
  },
});

const routes = [
  { label: "Accueil", route: "/" },
  { label: "Profil", route: "/profile" },
  { label: "Réglage", route: "/settings" },
  { label: "Communauté", route: "/community" },
];

const Link: FC<{ label: string; route: string }> = ({ label, route }) => (
  <NavLink
    {...stylex.props(styles.navLink)}
    style={({ isActive }) => ({
      ...(isActive && {
        color: colors.primary,
        textDecoration: "underline",
      }),
    })}
    to={route}
  >
    {label}
  </NavLink>
);

const Header: FC = () => (
  <header {...stylex.props(styles.root)}>
    <div {...stylex.props(styles.logoContainer)}>
      <img src="/sportsee_icon.svg" />
      <span {...stylex.props(styles.appName)}>SportSee</span>
    </div>
    <nav {...stylex.props(styles.nav)}>
      {routes.map((route) => (
        <Link key={route.route} label={route.label} route={route.route} />
      ))}
    </nav>
  </header>
);
export default Header;
