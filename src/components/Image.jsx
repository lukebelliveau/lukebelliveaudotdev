import NextImage from 'next/image'

export default function Image({ src, ...props }) {
  const path =
    typeof src === 'string' && src.startsWith('/')
      ? `${process.env.NEXT_PUBLIC_BASE_PATH || ''}${src}`
      : src

  return <NextImage src={path} {...props} />
}
