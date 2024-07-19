import ErpSystems from '@/layouts/erpSystems/ErpSystems';
import ItConsulting from '@/layouts/itConsulting/ItConsulting';
import MobileApps from '@/layouts/mobileApps/MobileApps';
import Optimization from '@/layouts/optimization/Optimization';
import Services from '@/layouts/services/Services';
import Team from '@/layouts/team/Team';
import Tools from '@/layouts/tools/Tools';
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
			<ItConsulting />
			<Tools />
		</main>
	);
}
