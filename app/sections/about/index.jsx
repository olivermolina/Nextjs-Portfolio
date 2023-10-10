"use client";

import {useRef} from "react";
import {LazyMotion, domAnimation, useInView} from "framer-motion";
import {HeadingDivider} from "components";
import {TimeLine} from "./TimeLine";

export function AboutSection() {
	const ref = useRef(null);
	const isInView = useInView(ref, {once: true});
	const name = 'Oliver Molina';
	const jobTitle = 'Full-Stack Developer';
	const location = 'Philippines';

	return (
		<LazyMotion features={domAnimation}>
			<section id="about" className="section">
				<HeadingDivider title="About me"/>
				<div className="pt-10 pb-16 max-w-5xl flex flex-col gap-3">
					<div
						tabIndex="0"
						ref={ref}
						className="text-xl font-light leading-relaxed"
						style={{
							transform: isInView ? "none" : "translateX(-200px)",
							opacity: isInView ? 1 : 0,
							transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
						}}
					>
						<p>Hello, I'm {name}, a {jobTitle} based in {location}.</p>

						<p className={'my-3.5'}>
							My journey as full-stack developer began with a spark of curiosity, leading me to
							embrace a world of dynamic web development. Proficient in React/Typescript and NextJS for front-end development,
							I've honed my skills in crafting modular, responsive interfaces and managing application state. On the
							back end, Node.js serves as my foundation, allowing me to create robust server-side applications, manage
							databases, and ensure data security.
						</p>
						<p className={'my-3.5'}>
							Problem-solving is at the core of my work, and a commitment to
							lifelong learning keeps me at the forefront of this ever-evolving field. Collaborative teamwork and
							effective communication are essential as I strive to create impactful digital experiences that improve
							processes, enhance user interactions, and contribute to positive change in the digital world.
						</p>
						<p>
							I thoroughly enjoy working with ReactJS, NextJS, NodeJS, ExpressJS, MongoDB, and PostgreSQL.
							I'm also familiar with React Native, Redux, and GraphQL. I'm currently learning Swift and SwiftUI for iOS development.
							I'm always open to learning new technologies and frameworks.
						</p>
					</div>
				</div>

				<TimeLine/>
			</section>
		</LazyMotion>
	);
}
