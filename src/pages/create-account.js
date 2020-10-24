import Head from 'next/head';
import styles from '../styles/Home.module.css';
import AppBar from '../components/AppBar'
import SignComponent from '../components/Sign'

export default function Home() {
  return (
    <div>
      <AppBar />
      <SignComponent />
    </div>
  );
}
