import Clients from '@/layouts/clients/Clients';
import Delever from '@/layouts/delever/Delever';
import ErpSystems from '@/layouts/erpSystems/ErpSystems';
import Goodzone from '@/layouts/goodzone/Goodzone';
import Iman from '@/layouts/iman/Iman';
import ItConsulting from '@/layouts/itConsulting/ItConsulting';
import MobileApps from '@/layouts/mobileApps/MobileApps';
import Optimization from '@/layouts/optimization/Optimization';
import Services from '@/layouts/services/Services';
import Smsuz from '@/layouts/smsuz/Smsuz';
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
			<Clients />
			<Delever />
			<Smsuz />
			<Goodzone />
			<Iman />
		</main>
	);
}
