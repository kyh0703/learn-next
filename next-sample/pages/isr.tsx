import { GetStaticPaths, NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

type ISRProps = {
  message: string;
};

const ISR: NextPage<ISRProps> = (props) => {
  const { message } = props;
  const router = useRouter();

  if (router.isFallback) {
    // 풀백용 페이지를 반환한다.
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>이 페이지는 ISR을 통해 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps<ISRProps> = async (context) => {
  const timestamp = new Date().toLocaleString();
  const message = `현재 시각은 ${timestamp} 입니다.`;
  console.log(message);

  return {
    props: {
      message,
    },
    // 페이지의 유효기간을 초 단위로 지정한다.
    revalidate: 10,
  };
};

export default ISR;
