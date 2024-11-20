import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Features12 from "@/components/sections/Features12"
import Features2 from "@/components/sections/Features2"
import Features3 from "@/components/sections/Features3"
import Hero1 from "@/components/sections/Hero1"
import LogoCloud1 from "@/components/sections/LogoCloud1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Pricing1 from "@/components/sections/Pricing1"
import Services1 from "@/components/sections/Services1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Static1 from "@/components/sections/Static1"
export default function Home() {

	return (
		<>

			<Layout headerStyle={1} footerStyle={1}>
				
				<Hero1 />
				<Services1 />
				<Static1 />
				<Features12 />

				
				{/* Components used in this page:
					<Hero1 />
					<LogoCloud1 />
					<Features1 />
					<Features2 />
					<Features3 />
					<Services1 />
					<Team1 />
					<Pricing1 />
					<Testimonial1 />
					<Blog1 />
					<Newsletter1 />
				*/}
				

			</Layout>
		</>
	)
}