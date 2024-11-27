import Link from 'next/link'

export default function Footer1() {
	return (
		<>
			<footer>
				<div className="section-footer position-relative">
					<div className="container-fluid bgft-1">
						<div className="container position-relative z-2">
							<div className="row py-90">
								<div className="col-lg-4 pe-12" data-aos="fade-zoom-in" data-aos-delay={100}>
									<Link href="/"><img src="/assets/imgs/template/xchange-logo-blanco.svg" alt="infinia" /></Link>
									<p className="text-white fw-medium mt-3 mb-6 opacity-50">Xchange is a global leader in Out-of-Home (OOH) and Digital Out-of-Home (DOOH) advertising. We connect brands with target audiences worldwide through innovative, data-driven campaigns in key locations like airports, shopping centers, and transit hubs.</p>
									<div className="d-flex social-icons">
										{/* 
										<Link href="https://www.facebook.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<svg xmlns="http://www.w3.org/2000/svg" width={10} height={17} viewBox="0 0 10 17" fill="none">
												<path d="M8.84863 9.20312H6.5415V16.0938H3.46533V9.20312H0.942871V6.37305H3.46533V4.18896C3.46533 1.72803 4.94189 0.34375 7.1875 0.34375C8.26416 0.34375 9.40234 0.559082 9.40234 0.559082V2.98926H8.14111C6.91064 2.98926 6.5415 3.72754 6.5415 4.52734V6.37305H9.2793L8.84863 9.20312Z" fill="white" />
											</svg>
										</Link>
										*/}
										{/*
										<Link href="https://twitter.com/" className=" text-white border border-end-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-twitter-x" />
										</Link>
										*/}
										<Link href="https://www.linkedin.com/company/xchange-global-ooh/posts/" className=" text-white border border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-linkedin" />
										</Link>
										{/*
										<Link href="https://www.behance.net/" className=" text-white border border-start-0 border-light border-opacity-10 icon-shape icon-md">
											<i className="bi bi-behance" />
										</Link>
										*/}
									</div>
								</div>
								<div className="col-lg-8">
									<div className="row">
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={200}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Solutions</h3>
											<div className="d-flex flex-column align-items-start">

												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">For Marketers</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">For Media Owners</Link>
											
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={300}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Knowledege Center</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Blog</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">News</Link>
												
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={400}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Company</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Story</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Our Team</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Contact</Link>
		
											</div>
										</div>
										<div className="col-lg-3 col-md-4 col-6" data-aos="fade-zoom-in" data-aos-delay={500}>
											<h3 className="text-white opacity-50 fs-6 fw-black text-uppercase pb-3 pt-5">Login</h3>
											<div className="d-flex flex-column align-items-start">
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">Y.O.D.A</Link>
												<Link className="hover-effect text-white mb-2 fw-medium fs-6" href="#">SSP Y.O.D.A</Link>
												
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="row text-center py-4 border-top border-white border-opacity-10">
								<span className="text-white opacity-50" data-aos="fade-zoom-in" data-aos-delay={200}>Copyright © 2024 Xchange OOH</span>
							</div>
						</div>
					</div>
					<div className="position-absolute top-0 start-50 translate-middle-x z-0">
						<img src="/assets/imgs/footer-1/line-bg.png" alt="infinia" />
					</div>
					<div className="position-absolute top-0 start-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-left.png" alt="infinia" />
					</div>
					<div className="position-absolute top-0 end-0 z-0">
						<img src="/assets/imgs/footer-1/ellipse-right.png" alt="infinia" />
					</div>
				</div>
			</footer>

		</>
	)
}
