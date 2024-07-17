import ContactBtn from '../ContactBtn';
import NavLargeItems from './navLargeItems/NavLargeItems';

function NavLarge() {
	return (
		<nav className='hidden min-[900px]:flex items-center gap-10'>
			<NavLargeItems />
			<ContactBtn />
		</nav>
	);
}

export default NavLarge;
