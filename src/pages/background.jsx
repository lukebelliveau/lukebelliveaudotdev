import Image from '../components/Image'
import Head from 'next/head'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '../components/Container'
import { GitHubIcon, LinkedInIcon, MailIcon } from '../components/SocialIcons'

export function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
        target="_blank"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>About - Luke Belliveau</title>
        <meta
          name="description"
          content="Background page for Luke Belliveau, a platform engineer specializing in data platforms, infrastructure as code, and developer experience. Python, Terraform, Kubernetes, AWS, GCP."
        />
      </Head>
      <Container className="mt-16 sm:mt-36">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="flex place-content-center lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none ">
              <Image
                unoptimized
                src={'/images/portrait.png'}
                alt="A portrait of Luke drinking a smoothie with a cat."
                aria-label="A portrait of Luke drinking a smoothie with a cat."
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800 lg:aspect-auto lg:rotate-3"
                height="600"
                width="400"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              me, in a nutshell
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-200">
              <p className="italic">
                Check out my{' '}
                <Link
                  href={'/projects'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                >
                  recent platform engineering work
                </Link>
                .
              </p>
              <p>
                Welcome to my corner of the internet! My name is Luke. I&apos;m
                a platform engineer from the USA, currently splitting time
                between Budapest and the Boston area.
              </p>
              <p>
                After getting my Computer Science degree from UCONN in 2016, I
                spent a couple of years in Chicago working at{' '}
                <Link
                  href={'https://www.thoughtworks.com/en-us'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                  target="_blank"
                >
                  ThoughtWorks
                </Link>{' '}
                in domains like insurance administration, e-commerce, and
                cybersecurity. On my teams I tended to steward our test
                automation and CI/CD pipelines, getting early exposure to
                infrastructure and developer experience work.
              </p>
              <p>
                I went on to work on the Cloud Infrastructure team at GrubHub in
                NYC.{' '}
                <Link
                  href={
                    'https://bytes.grubhub.com/cloud-infrastructure-at-grubhub-94db998a898a'
                  }
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                  target="_blank"
                >
                  Migrating to a custom-built infrastructure platform
                </Link>{' '}
                reminiscent of the systems at Netflix, they needed somebody with
                system design & architecture chops. I worked on the Java
                frameworks & services consumed by application developers to
                build, test & deploy their applications. I also built GUIs for
                Site Reliability Engineers to expose network controls and
                insights during outages. My last major project was the
                architecture proposal for a new notifications platform -
                Java backend, TypeScript frontend, Cassandra database - which
                was approved by the org-wide architecture review council.
              </p>
              <p>
                In January 2020, I took a sabbatical and went backpacking around
                Europe, blissfully unaware of how the year would unfold. I spent
                a few months volunteering at a hostel in Hungary until the
                pandemic happened. Hunkered down in Budapest, I took on shorter
                term contracts - including rebuilding the website for{' '}
                <Link
                  href={'https://www.selenium.dev/'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                  target="_blank"
                >
                  Selenium
                </Link>
                , the popular open source browser automation tool.
              </p>
              <p>
                In 2021, I dove back into software as an independent consultant.
                I worked with{' '}
                <Link
                  href={'https://www.nuwavetech.com/'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                  target="_blank"
                >
                  Nuwave Technologies
                </Link>{' '}
                on their API gateway product and built{' '}
                <Link
                  href={'https://www.zuut.co'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                  target="_blank"
                >
                  ZUUT
                </Link>
                , a CAD tool for cannabis cultivation planning.
              </p>
              <p>
                Since 2022, I&apos;ve focused on platform engineering. At{' '}
                <Link
                  href={'https://www.wendys.com'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                  target="_blank"
                >
                  Wendy&apos;s
                </Link>
                , I served as liaison between web and platform teams during
                their AWS to GCP migration, implemented GitOps deployments with
                ArgoCD, and contributed to{' '}
                <Link
                  href={'https://www.wendys.com/blog/drive-thru-innovation-wendys-freshai'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                  target="_blank"
                >
                  FreshAI
                </Link>
                , their AI-driven drive-thru ordering system now deployed at
                160+ restaurants.
              </p>
              <p>
                I then led the architecture of a data platform for an autonomous
                robotics company. Their welding robots generate massive amounts
                of data from laser scanners and computer vision systems - I
                built the platform that lets their AI teams focus on robotics
                instead of debugging data pipelines. Python, FastAPI,
                PostgreSQL, Terraform, delivered over ~8 months.
              </p>
              <p>
                After that, I built the cloud-native platform on GCP behind a
                large enterprise&apos;s gamification product - Terraform,
                Kubernetes, GitOps with ArgoCD, dual-region delivery, and
                end-to-end observability. The product launched in June 2026,
                with the platform serving 5.8 million requests at a 99.986%
                success rate in its first week.
              </p>
              <p>
                Today I&apos;m building an agentic infrastructure platform.
                Applications declare what they need, the platform generates and
                runs their infrastructure and delivery, and an engineering agent
                investigates alerts and prepares tested fixes for review.
              </p>
              <p>
                When I&apos;m not coding, you might find me snowboarding or
                noodling on my beginner&apos;s keyboard or sky-pink telecaster.
                I am currently open to contract, part time and full time work.
                If you think we may be a good fit, I&apos;d love to{' '}
                <Link
                  href={'/contact'}
                  className="underline underline-offset-4 hover:text-orange-500 dark:hover:text-orange-400"
                >
                  hear from you!
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://github.com/lukebelliveau"
                icon={GitHubIcon}
                className="mt-4"
              >
                GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/lukebelliveau/"
                icon={LinkedInIcon}
                className="mt-4"
              >
                LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:hi@lukebelliveau.dev"
                icon={MailIcon}
                className="mt-4"
              >
                hi@lukebelliveau.dev
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
