import Head from 'next/head'
import { Container, Heading, Text, VStack, Link } from '@chakra-ui/react'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sharrr. Share end-to-end encrypted files.</title>
        <meta
          name="description"
          content="Pirates don't share, pirates sharrr. Share end-to-end encrypted files."
        />
        <meta
          name="keywords"
          content="pirates, share file, end-to-end encrypted file sharing, pirates sharrr, arrr"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container
          centerContent
          sx={{ minHeight: '100vh' }}
          maxW="container.xl"
        >
          <VStack
            spacing={4}
            sx={{ height: '100vh' }}
            alignItems="center"
            justifyContent={'center'}
          >
            <Heading
              fontSize="6xl"
              as="h1"
              mb={3}
              textAlign={'center'}
            >{`Pirates don't share, pirates sharrr.`}</Heading>

            <Text fontSize="3xl" fontWeight={400} textAlign={'center'}>
              End-to-end encrypted file transfer.
            </Text>

            <Text
              pt={10}
              textAlign={'center'}
              color={'gray.500'}
              maxWidth={'container.sm'}
            >
              This project is in development. Follow{' '}
              <Link
                color="pink.500"
                href="https://twitter.com/stophecom"
                isExternal
              >
                @stophecom
              </Link>{' '}
              for updates. <br />
              Need to send a secret file? Use{' '}
              <Link color="pink.500" href="https://scrt.link" isExternal>
                scrt.link
              </Link>{' '}
              for now.
            </Text>
          </VStack>
        </Container>
      </main>
    </div>
  )
}