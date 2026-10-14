import Image from '../components/Image'
import Head from 'next/head'
import Link from 'next/link'

import { Card } from '../components/Card'
import { Container } from '../components/Container'

const projects = [
  {
    name: 'ZUUT',
    description:
      "Full featured computer-aided-design tool for planning & executing cannabis grow operations. Features smooth, deep canvas interactions and broad account management features.  Check out the builder, it's pretty fun to play around with.",
    link: { href: 'https://www.zuut.co', label: 'zuut.co' },
    logo: '/images/logos/zuut.jpg',
    year: '2022',
  },
  {
    name: 'Prizm API Gateway',
    description:
      'A comprehensive API Gateway built to run on Nonstop servers. I handled the development for all front-end, test automation, and deployment code - from our inception in early 2021 to our successful launch in 2022. The console product itself is proprietary, but the link below provides some more context on what this tool does.',
    link: {
      href: 'https://www.nuwavetech.com/prizm-gateway',
      label: 'nuwavetech.com',
    },
    logo: '/images/logos/nuwave.jpg',
    year: '2021',
  },
  {
    name: 'Selenium.dev',
    description:
      'Given a set of mockups, I delivered a speedy static website for Selenium, a popular browser automation tool. Built with Jekyll and Hugo.',
    link: { href: 'https://www.selenium.dev', label: 'selenium.dev' },
    logo: '/images/logos/selenium.png',
    year: '2019',
  },
  {
    name: "Devil's Dice",
    description:
      'I was hired to build this exciting party game in 2018, where users place a phone on the table and face various challenges based on the roll of the dice. This app has a special place in my heart - a year after its release, I was staying at a hostel in Slovakia, and I noticed a group of people were playing the game in the kitchen! It remains active today, and enjoys a 4.5 star rating on the Google Play Store with over 10,000 downloads.',
    link: {
      href: 'https://play.google.com/store/apps/details?id=com.devilsdicegame.devilsdice&ref=producthunt',
      label: 'play.google.com',
    },
    logo: '/images/logos/devilsdice.png',
    year: '2018',
  },
  {
    name: 'SATURATION',
    description:
      'Official application for world-famous boyband BROCKHAMPTON, designed to release music videos and other exclusive goodies before their general release to external platforms.  With over 10,000 downloads, SATURATION enjoyed a rating of 5 stars on the Google Play store, where it was active from 2017-2019.',
    link: {
      href: 'https://www.brckhmptn.com',
      label: 'brckhmptn.com',
    },
    logo: '/images/logos/brockhampton.png',
    year: '2017',
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

function FeaturedProject({
  title,
  year,
  tech,
  children,
}: {
  title: string
  year: string
  tech: string
  children: React.ReactNode
}) {
  return (
    <div className="mb-16">
      <div className="flex items-baseline gap-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
          {title}
        </h2>
        <span className="text-sm text-zinc-500 dark:text-zinc-400">{year}</span>
      </div>
      <div className="mt-4 space-y-4 text-base text-zinc-600 dark:text-zinc-300">
        {children}
      </div>
      <p className="mt-4 text-sm italic text-zinc-500 dark:text-zinc-400">
        {tech}
      </p>
    </div>
  )
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects - Luke Belliveau</title>
        <meta
          name="description"
          content="Luke Belliveau's project page. Platform engineering work including data platforms, cloud infrastructure, and enterprise web applications."
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <header className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            selected works
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-200">
            Recent platform engineering engagements, plus a few smaller projects
            from my consulting work.
          </p>
        </header>

        <div className="mt-16 max-w-3xl">
          <FeaturedProject
            title="Gamification Platform"
            year="2024-present"
            tech="Terraform, GCP, Kubernetes, Istio, Harness, ArgoCD, Helm, GitOps, Workload Identity, Cloud SQL, Python, FastAPI, Liquibase"
          >
            <p>
              What started as a greenfield Platform in a Box — a portable
              developer platform that takes one terraform apply to bootstrap,
              with pipelines handling everything after — has spent the last
              several months being grafted onto the live infrastructure of a
              large enterprise. The platform now powers their gamification
              initiative, with the developer contract intact.
            </p>
            <p>
              The platform is built around a single principle: app teams
              declare what they need in a platform-manifest.yml, and the
              platform produces everything else. Database, KMS keys, secrets,
              service account, DNS, ingress, dual-region rollout, GitOps state
              — all derived from one file in their repo. Push to main and the
              full path-to-prod runs: tests, build, scan, provision infra,
              deploy, e2e. No tickets, no waiting, no asking other teams.
            </p>
            <p>
              The integration challenge was preserving that contract while the
              substrate underneath got replaced. The original was mine — GCP
              projects, clusters, DNS, Harness org, Artifact Registry, built
              greenfield. The replacement is theirs: shared multi-tenant
              clusters, mandatory image registry, Harness runner identity,
              Bitbucket, Istio mesh policies, security scanners (Mend SCA,
              Falcon IaC, Gitleaks), OPA policy gates, shared Helm charts,
              public ingress on a shared host. A pod now runs in one GCP
              project, authenticates via Workload Identity to a service account
              in a second, and pulls its image from a third. App teams have to
              know none of this.
            </p>
            <p>
              The platform absorbed every constraint the enterprise imposed:
              cross-project Workload Identity for cluster/identity/image
              separation, dual-region delivery across us-central1 and us-east4,
              an NGINX preview-auth sidecar for the shared public host, a
              custom path-based public router that owns one VirtualService per
              env/region (replacing an earlier per-app model that caused live
              host collisions), local forks of two shared Helm charts to work
              around upstream bugs in Workload Identity templating and Istio
              API versioning, a constrained ArgoCD AppProject so config-repo
              changes can&apos;t escape gamification namespaces, and a small
              FastAPI service for runtime secret management. The
              platform-manifest.yml an app team writes today does what it did
              before — they just get more for free.
            </p>
            <p>
              Today the platform runs a fleet of services through the same
              shared pipeline, all defined by the same manifest contract:
              Kotlin services for auth, game sessions, e-commerce gateway,
              rewards, and gaming experience orchestration; a Node.js BFF; and
              a browser game.
            </p>
            <p>
              The migration ran zero-downtime on both sides — the original
              platform kept serving its existing apps throughout, and the
              enterprise&apos;s existing infrastructure was never disrupted.
              Apps already running on the original platform onboarded to the
              integrated one with no manifest changes.
            </p>
            <p>
              The product launched in June 2026. In its first week, the
              platform served 5.8 million HTTP requests through the service
              mesh at a 99.986% success rate, peaking at 9,850 requests per
              minute — 97,000 game sessions from nearly 90,000 unique
              customers, with all 14 production deployments healthy across
              both regions throughout. Reported CRM data showed tens of
              thousands of game interactions and measurable purchase
              conversion after game engagement.
            </p>
          </FeaturedProject>

          <FeaturedProject
            title="Robotics Data Platform"
            year="2023-2024"
            tech="Python, FastAPI, PostgreSQL, RabbitMQ, Terraform, AWS, GitHub Actions"
          >
            <p>
              Led architecture of a domain-driven data platform for autonomous
              welding robots. The client&apos;s robots use 7-DoF arms with
              arc-welders and computer vision, generating massive amounts of
              data from laser scanners that produce point clouds and 3D models.
            </p>
            <p>
              The core problem: as the company scaled, data management evolved
              organically into tightly coupled &quot;scraper-style&quot;
              pipelines. Teams faced a false choice between brittle systems that
              break on schema changes, or slow systems requiring cross-team
              coordination for every change. AI and robotics experts were
              spending more time debugging pipelines than advancing core
              technologies.
            </p>
            <p>
              The solution was a platform organized around domains with clear
              ownership, bilateral API contracts (consumer-specific APIs rather
              than one shared API), and abstraction layers freeing domain owners
              from infrastructure concerns. The platform includes an edge proxy
              with write buffering and read caching for offline factory floor
              operation, syncing to cloud when bandwidth allows.
            </p>
            <p>
              Delivered via 3-week POC, 6-month build, and 3-month extension.
              The platform now powers production robotics operations.
            </p>
          </FeaturedProject>

          <FeaturedProject
            title="Wendy's Digital"
            year="2022-2023"
            tech="React, Next.js 14, TypeScript, Redux, Zustand, Docker, Kubernetes, ArgoCD, GitLab CI, GCP"
          >
            <p>
              Full stack engineer on the web ordering platform for Wendy&apos;s,
              one of the world&apos;s largest quick service restaurant chains
              with 7,000+ locations globally.
            </p>
            <p>
              Served as liaison between the web development and platform
              engineering teams during AWS to GCP migration. Implemented a
              dual-repository sync pattern where the AWS repo remained source of
              truth for application code while the GCP repo maintained
              platform-specific configurations. The migration used single-image
              multi-environment deployments with runtime configuration
              injection, ArgoCD for GitOps, and template-based Nginx
              configuration.
            </p>
            <p>
              Contributed to{' '}
              <Link
                href="https://www.wendys.com/blog/drive-thru-innovation-wendys-freshai"
                className="underline underline-offset-4 hover:text-orange-500"
                target="_blank"
              >
                FreshAI
              </Link>
              , Wendy&apos;s AI-driven drive-thru ordering system built with
              Google Cloud. FreshAI processes tens of thousands of orders
              daily across hundreds of restaurants with 99% accuracy.
            </p>
            <p>
              Kickstarted a modern Next.js 14 rewrite of the 318K-line ordering
              application, introducing Server Components, Zustand state
              management, and domain-driven architecture.
            </p>
          </FeaturedProject>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
            Other Projects
          </h2>
          <ul
            role="list"
            className="mt-8 grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <Card as="li" key={project.name} className="justify-between">
                <div>
                  {project.logo && (
                    <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                      <Image
                        src={project.logo}
                        alt={`Logo for ${project.name}`}
                        className="h-8 w-8"
                        fill
                      />
                    </div>
                  )}
                  <h3
                    className={`text-base font-semibold text-zinc-800 dark:text-zinc-100 ${project.logo ? 'mt-6' : ''}`}
                  >
                    <Card.Link href={project.link.href} target="_blank">
                      {project.name}
                    </Card.Link>
                  </h3>
                  <Card.Description>{project.year}</Card.Description>
                  <Card.Description>{project.description}</Card.Description>
                </div>
                <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-orange-500 dark:text-zinc-200">
                  <LinkIcon className="h-6 w-6 flex-none" />
                  <span className="ml-2">{project.link.label}</span>
                </p>
              </Card>
            ))}
          </ul>
        </div>
      </Container>
    </>
  )
}
