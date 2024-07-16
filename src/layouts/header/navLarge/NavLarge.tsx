import ContactBtn from '../ContactBtn';
import NavLargeItems from './navLargeItems/NavLargeItems';

function NavLarge() {
	return (
		<nav className='flex items-center gap-10'>
			<NavLargeItems />
			<ContactBtn />
		</nav>
	);
}

export default NavLarge;
