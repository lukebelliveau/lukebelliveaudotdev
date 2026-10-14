import Head from 'next/head'
import Link from 'next/link'
import { Container } from '../components/Container'

export default function Home() {
  return (
    <>
      <Head>
        <title>Luke Belliveau - Platform Engineer</title>
        <meta
          name="description"
          content="Luke Belliveau is a platform engineer specializing in data platforms, infrastructure as code, and developer experience. Python, Terraform, Kubernetes, AWS, GCP."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/favicon.ico`} />
      </Head>
      <Container className="flex-column mt-36 flex font-mono">
        <div className="flex">
          <div className="w-full">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              tools
            </h1>

            <h2 className="mt-6 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              this website was built with
            </h2>
            <p className="mt-2 text-base text-zinc-600 dark:text-zinc-200">
              HTML, CSS, TypeScript, Tailwind, React, and Next.js, deployed on
              GitHub Pages. I use{' '}
              <Link
                href={'https://plausible.io'}
                className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                target="_blank"
              >
                Plausible.io
              </Link>{' '}
              for privacy focused analytics.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              languages
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              Python is my primary language for platform and backend work -
              FastAPI for APIs, SQLAlchemy for data access, and general
              scripting for automation. I also have years of experience with
              TypeScript/JavaScript, Java/Kotlin, and have worked with Golang
              professionally.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              infrastructure
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              Terraform is my go-to for infrastructure as code - I&apos;ve built
              multi-environment platforms on both AWS and GCP with reusable
              module patterns. Kubernetes for container orchestration, with Helm
              for packaging and ArgoCD for GitOps deployments. I design
              infrastructure with clear boundaries between foundation, shared
              services, and application-specific resources.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              ci/cd & automation
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              Very familiar with Buildkite, Argo, GitHub Actions, GitLab CI.
              Also familiar with Harness CI, but against my will. I&apos;ve
              worked extensively with Jenkins, Spinnaker, and GoCD at enterprise
              scale. Strong believer in GitOps - infrastructure
              state, application config, and secrets all tracked in Git with
              automated sync to clusters.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              data platforms
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              I design domain-driven data platforms with clear ownership
              boundaries. PostgreSQL for relational data, with per-domain
              schemas and bilateral API contracts. Experience with edge
              architectures - write buffering and read caching for offline
              operation with cloud sync. Focus on reducing coupling between
              domains so teams can evolve independently.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              testing
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              Test-first mentality is a cornerstone of my practice. pytest for
              Python, Vitest/Jest for JavaScript, JUnit for Java. I&apos;ve also
              spent a lot of time with Selenium and Cypress, but my favorite
              tool for browser automation is Playwright.
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              client-side
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              I&apos;ve loved working with React since it converted this
              aspiring backend engineer into a V8 lover in 2016. Though I find
              React&apos;s own Context API and Zustand suitable and pleasant to
              work with in most circumstances, I maintain a high opinion of
              Redux and it&apos;s my personal choice for medium to large scale
              projects. On the{' '}
              <Link
                href={'https://www.zuut.co/'}
                className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                target="_blank"
              >
                ZUUT
              </Link>{' '}
              project, I liked using Konva for smooth drag and drop interactions
              and animations.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              backend & apis
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              FastAPI is my framework of choice for Python APIs - type hints,
              automatic OpenAPI docs, async support. I&apos;ve also built
              platforms with Kotlin/Spring Boot and have deep experience with
              Java/Spring from my time on the Cloud Infrastructure team at
              GrubHub, where I worked on platform frameworks, API gateways, and
              service mesh architecture.
            </p>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              I focus on developer experience - CLI tools to scaffold new
              services, client libraries in multiple languages, safe
              self-service so engineers can create resources without impacting
              others.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              observability
            </h2>
            <p className="mt-2 w-full text-base text-zinc-600 dark:text-zinc-200">
              OpenTelemetry for distributed tracing - browser to database with a
              single trace ID. Jaeger for visualization. Experience
              instrumenting both frontend applications and backend services for
              end-to-end request tracing.
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              my workflow
            </h2>
            <p className="mt-2 w-full  text-base text-zinc-600 dark:text-zinc-200">
              Claude Code, git, GitHub, iTerm, Linear, macOS, Obsidian, VSCode
            </p>

            <h2 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-3xl">
              misc
            </h2>
            <p className="mt-2 w-full  text-base text-zinc-600 dark:text-zinc-200">
              Akai MPK Mini, CAPiTA DOA, Köves Telecaster, Logic Pro, Yamaha
              P-45, ZSA Moonlander
            </p>
          </div>
        </div>
      </Container>
    </>
  )
}
