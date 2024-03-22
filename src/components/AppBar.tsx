import { FC } from "react";
import * as stylex from "@stylexjs/stylex";
import { spacing, typography } from "../styleVariables.stylex";
import { NavLink } from "react-router-dom";
import yogaIcon from "../assets/appBarIcon_yoga.svg";
import swimmingIcon from "../assets/appBarIcon_swimming.svg";
import bikeRidingIcon from "../assets/appBarIcon_bikeRiding.svg";
import liftingIcon from "../assets/appBarIcon_lifting.svg";

const styles = stylex.create({
  root: {
    padding: `0 ${spacing.lg}`,
    backgroundColor: "black",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    gap: spacing.md,
    position: "relative",
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    gap: spacing.md,
  },
  copyrightContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "33%",
    width: "64px",
    paddingBottom: "110px",
  },
  copyright: {
    color: "white",
    fontSize: typography.sm,
    textWrap: "nowrap",
    transform: "rotate(-90deg)",
  },
});

const Link: FC<{ image: string; route: string }> = ({ image, route }) => (
  <NavLink to={route}>
    <img src={image} alt="icon" />
  </NavLink>
);

const routes = [
  { image: yogaIcon, route: "/" },
  { image: swimmingIcon, route: "/" },
  { image: bikeRidingIcon, route: "/" },
  { image: liftingIcon, route: "/" },
];

const AppBar: FC = () => {
  return (
    <div {...stylex.props(styles.root)}>
      <div {...stylex.props(styles.icons)}>
        {routes.map((route, index) => (
          <Link key={index} image={route.image} route={route.route} />
        ))}
      </div>
      <div {...stylex.props(styles.copyrightContainer)}>
        <span {...stylex.props(styles.copyright)}>
          Copyright, SportSee 2020
        </span>
      </div>
    </div>
  );
};

export default AppBar;
