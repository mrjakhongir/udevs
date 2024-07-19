import ErpSystems from '@/layouts/erpSystems/ErpSystems';
import MobileApps from '@/layouts/mobileApps/MobileApps';
import Optimization from '@/layouts/optimization/Optimization';
import Services from '@/layouts/services/Services';
import Team from '@/layouts/team/Team';
import UiUx from '@/layouts/ui/ux/UiUx';
import Welcome from '@/layouts/welcome/Welcome';

export default function Home() {
	return (
		<main>
			<Welcome />
			<Services />
			<Team />
			<MobileApps />
			<ErpSystems />
			<UiUx />
			<Optimization />
		</main>
	);
}
