import React, { FC } from "react";
import { PageRendererProps } from "gatsby";

import { Button, ChangeLanguage, Form } from "../components";

import "../assets/css/index.css";

const IndexPageRu: FC<PageRendererProps> = ({ location }) => {
	return (
		<main className="main">
			<title>Landing Lambda</title>
			<header className="header">
				<div className="header__language">
					<ChangeLanguage location={location} />
				</div>
				<h1 className="header__title">Build your startup for 200$ per week? RU</h1>
				<p className="header__text">
					<s>It’s not possible</s> Yes you can ✅
				</p>
				<Button additionalClass="header__btn" type="button" id="headerBtn">
					Get in touch
				</Button>
				<div className="line"></div>
			</header>
			<section className="section">
				<h2 className="section__title">How?</h2>
				<p className="section__text">
					lambda.direct - is a team(40 people) of highly experienced backend and frontend developers. We have an ongoing
					flow of hiring and teaching new developers. Here you can hire them at an extremely low rate so they can build
					projects for you while they’re actively learning and get mentored by a highly experienced engineers.
				</p>
			</section>
			<section className="section">
				<h2 className="section__title">How much does it cost?</h2>
				<p className="section__text">
					It’ll cost you <b>400$</b> per week per developer.
				</p>
			</section>
			<section className="section">
				<h2 className="section__title">What can you do with us on a frontend?</h2>
				<ul>
					<li>Landing page with multiple pages</li>
					<li>Admin panel with API integrations</li>
					<li>Multipage SPA / SSR</li>
					<li>iOS / Android with CapacitorJS</li>
				</ul>
			</section>
			<section className="section">
				<h2 className="section__title">Tech stack on frontend:</h2>
				<ul>
					<li>
						ReactJs / NextJs / GatsbyJS / VueJs. It can be a landing page with a static, multipage website or an admin
						panel with a fully dynamic content.
					</li>
					<li>Web applications using external REST or GraphQL apis.</li>
					<li>Web-based iOS/Android applications using CapacitorJs</li>
				</ul>
			</section>
			<section className="section">
				<h2 className="section__title">What can you do with us on a backend?</h2>
				<ul>
					<li>Web server with REST/GraphQL APIs with persistent storage and database and cache</li>
					<li>Monolith or microservices</li>
					<li>Chatbots</li>
					<li>Automations</li>
				</ul>
			</section>
			<section className="section">
				<h2 className="section__title">Tech stack on backend:</h2>
				<ul>
					<li>JavaScript / TypeScript / Python</li>
					<li>ExpressJs for JS/TS or Flask for Python</li>
					<li>Monolithic application hosted on a VPS like DigitalOcean</li>
					<li>MongoDB or PostgreSQL or MySQL</li>
					<li>Micro-services on AWS with DynamoDB, S3, Cognito, API gateway and Lambdas using ServerlessJs</li>
					<li>Chatbots for Telegram, Slack and Discord</li>
					<li>Automations using Robocorp framework</li>
				</ul>
			</section>
			<section className="section">
				<h2 className="section__title">Calculate your costs</h2>
				<p className="section__text">
					💡If you need to build both website and a backend with database for storing and providing user data with REST
					apis — you’ll need 1 frontend trainee and 1 backend trainee, it’ll cost you <b>400$</b> per week.
				</p>
			</section>
			<Form />
		</main>
	);
};

export default IndexPageRu;
