import NavbarItem from "../NavbarItem/NavbarItem";
const navbarItemsData = [
	{ text: "Home", to: "/" },
	{ text: "Movies", to: "/Movies" },
	{ text: "Series", to: "/Series" },
];
const NavbarItems = ({ className }) => {
	return (
		<div className={className}>
			<ul>
				{navbarItemsData.map((element) => (
					<NavbarItem to={element.to} text={element.text} />
				))}
			</ul>
		</div>
	);
};
export default NavbarItems;