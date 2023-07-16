import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';

type SSRProps = {
  message: string;
};

const SSR: NextPage<SSRProps> = (props) => {
  const { message } = props;

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>이 페이지는 서버사이드 렌더링을 통해 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<SSRProps> = async (
  context
) => {
  const timestamp = new Date().toLocaleString();
  const message = `현재 시각은 ${timestamp} 입니다.`;
  console.log(message);

  return {
    props: {
      message,
    },
  };
};

export default SSR;
