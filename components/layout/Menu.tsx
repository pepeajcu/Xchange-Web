import Link from "next/link"

export default function Menu() {

	return (
		<>

			<div className="d-none d-lg-flex">
				<ul className="navbar-nav mx-auto gap-4 align-items-lg-center">
					<li className="nav-item dropdown menu-item-has-children">
						<Link className="fw-bold d-flex align-items-center" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Home
						</Link>						
					</li>

					<li className="nav-item dropdown menu-item-has-children">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Solutions
						</Link>
						<div className="dropdown-menu p-4 fix">
							<ul className="list-unstyled">
								<li className="position-relative border-bottom z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/marketers">
										Marketers
									</Link>
								</li>
								<li className="position-relative z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/owners">
										Media Owners
									</Link>
								</li>
							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
						</div>
					</li>

					<li className="nav-item dropdown menu-item-has-children">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Knowledge Center
						</Link>
						<div className="dropdown-menu p-4 fix">
							<ul className="list-unstyled">
								<li className="position-relative border-bottom z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/blog-archive">
										Blog
									</Link>
								</li>
								<li className="position-relative z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/news">
										News
									</Link>
								</li>
							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
						</div>
					</li>

					<li className="nav-item dropdown menu-item-has-children">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							About
						</Link>
						<div className="dropdown-menu p-4 fix">
							<ul className="list-unstyled">
								<li className="position-relative border-bottom z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/marketers">
										Our Story
									</Link>
								</li>
								<li className="position-relative z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/owners">
										Our Team
									</Link>
								</li>
							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
						</div>
					</li>

					<li className="nav-item">
						<Link className="nav-link fw-bold d-flex align-items-center" href="/page-contact-1">Contact</Link>
					</li>

					<li className="nav-item dropdown menu-item-has-children">
						<Link className="nav-link fw-bold d-flex align-items-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Login
						</Link>
						<div className="dropdown-menu p-4 fix">
							<ul className="list-unstyled">
								<li className="position-relative border-bottom z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/marketers">
										Y.O.D.A
									</Link>
								</li>
								<li className="position-relative z-1">
									<Link className="dropdown-item position-relative z-1 d-flex align-items-start" href="/owners">
										SSP Y.O.D.A
									</Link>
								</li>
							</ul>
							<div className="ellipse-rotate-success-sm position-absolute top-0 start-0 translate-middle z-0" />
							<div className="ellipse-rotate-primary-sm position-absolute bottom-0 end-0 translate-middle z-0" />
						</div>
					</li>
	
					
					

				</ul>
			</div>
		</>
	)
}
