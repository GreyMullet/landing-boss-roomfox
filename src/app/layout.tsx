import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { LightboxProvider } from '@/components/Lightbox'

const inter=Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' })

const siteUrl='https://present-boss.roomfox.ru'

export const metadata: Metadata={
    metadataBase: new URL(siteUrl),
    title: {
        default: 'Boss RoomFox — сводка для директора отеля в реальном времени',
        template: '%s | Boss RoomFox',
    },
    description:
        'Boss RoomFox показывает директору отеля загрузку номеров, доходы и прогнозы в реальном времени прямо из 1C:Отель. Устанавливается как приложение на телефон, работает без лишних кликов.',
    keywords: [
        'сводка для директора отеля',
        'дашборд отеля',
        '1C Отель интеграция',
        'загрузка номеров онлайн',
        'RoomFox',
        'управление гостиницей',
    ],
    authors: [{ name: 'RoomFox' }],
    creator: 'RoomFox',
    alternates: {
        canonical: siteUrl,
    },
    openGraph: {
        type: 'website',
        locale: 'ru_RU',
        url: siteUrl,
        siteName: 'Boss RoomFox',
        title: 'Boss RoomFox — сводка для директора отеля в реальном времени',
        description:
            'Загрузка номеров, доходы и прогнозы из 1C:Отель — на одном экране, обновляется мгновенно.',
        images: [
            {
                url: '/og-image.jpg',
                width: 1200,
                height: 630,
                alt: 'Boss RoomFox — дашборд для директора отеля',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Boss RoomFox — сводка для директора отеля',
        description: 'Загрузка номеров и доходы отеля в реальном времени из 1C:Отель.',
        images: ['/og-image.jpg'],
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    icons: {
        icon: '/icon-192.png',
        apple: '/icon-192.png',
    },
}

const jsonLd={
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Boss RoomFox',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web, iOS, Android (PWA)',
    description:
        'Сводка для директора отеля в реальном времени: загрузка номеров, доходы, прогнозы из 1C:Отель.',
    brand: {
        '@type': 'Brand',
        name: 'RoomFox',
    },
    offers: {
        '@type': 'Offer',
        priceCurrency: 'RUB',
        availability: 'https://schema.org/InStock',
    },
}

const faqJsonLd={
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
      {
          '@type': 'Question',
          name: 'Нужно ли что-то менять в самой 1C?',
          acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да, но по минимуму: на сторону 1C нужно поставить небольшое расширение — это занимает около 5 минут и не требует остановки работы базы.',
          },
      },
      {
          '@type': 'Question',
          name: 'Сколько времени занимает подключение?',
          acceptedAnswer: {
              '@type': 'Answer',
              text: 'От 5 до 10 минут: ставим расширение в 1C, передаёте адрес HTTP-сервиса и учётные данные для чтения отчётов.',
          },
      },
      {
          '@type': 'Question',
          name: 'Работает ли на телефоне?',
          acceptedAnswer: {
              '@type': 'Answer',
              text: 'Да, Boss RoomFox — PWA-приложение, устанавливается на экран телефона как обычное приложение.',
          },
      },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }){
    return(
        <html lang="ru">
            <body className={inter.className}>
              <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
              />

              <script
                  type="application/ld+json"
                  dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
              />

              <LightboxProvider>{children}</LightboxProvider>
            </body>
        </html>
    )
}