// /pages/policy.tsx
import Head from 'next/head';
import PrivacyPolicy from '../components/PrivacyPolicy'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Policy() {
  return (
    <>
      <Head>
        <title>Valid Protocol - Privacy and Policy</title>
        <meta name="description" content="XDCS official website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <PrivacyPolicy />
      <Footer />
    </>
  );
}
