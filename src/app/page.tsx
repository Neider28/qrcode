'use client'
import styles from './page.module.css'
import QRCodePage from '@/components/QRCodeGenerator'

export default function Home() {
  return (
    <main className={styles.main}>
      <QRCodePage />
    </main>
  )
}
