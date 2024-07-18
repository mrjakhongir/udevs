import Services from '@/layouts/services/Services';
import Team from '@/layouts/team/Team';
import Welcome from '@/layouts/welcome/Welcome';

export default function Home() {
	return (
		<main>
			<Welcome />
			<Services />
			<Team />
		</main>
	);
}
