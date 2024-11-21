import Layout from "@/components/layout/Layout"
import Features12 from "@/components/sections/Features12"
import Hero1 from "@/components/sections/Hero1"
import Services1 from "@/components/sections/Services1"
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