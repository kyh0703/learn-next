import { GetStaticProps, NextPage, NextPageContext } from 'next';
import Head from 'next/head';

type SSGProps = {
  message: string;
};

const SSG: NextPage<SSGProps> = (props) => {
  const { message } = props;
  return (
    <div>
      <Head>
        <title>SSG</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
        <p>이 페이지는 정적사이트 생성을 통해빌드 시 생성된 페이지입니다.</p>
        <p>{message}</p>
      </main>
    </div>
  );
};

export default SSG;
