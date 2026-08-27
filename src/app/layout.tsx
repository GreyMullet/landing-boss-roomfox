import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

const siteUrl = 'https://sanatory-nadezda-365.ru'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: 'Санаторий «Надежда» – бронирование, оплата, заселение онлайн в Анапе',
    template: '%s | Санаторий «Надежда»',
  },
  description:
    'Онлайн-бронирование номеров и услуг в санатории «Надежда» (Анапа). Оплата картой, заполнение документов для быстрого поселения, просмотр деталей лечения и отдыха. Удобный личный кабинет.',
  keywords: [
    'санаторий Надежда Анапа',
    'бронирование санатория',
    'оплата услуг онлайн',
    'быстрое заселение',
    'заполнение документов',
    'личный кабинет',
    'отдых в Анапе',
    'лечение в санатории',
  ],
  authors: [{ name: 'Санаторий «Надежда»' }],
  creator: 'Санаторий «Надежда»',
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    url: siteUrl,
    siteName: 'Санаторий «Надежда»',
    title: 'Санаторий «Надежда» – бронирование и оплата онлайн в Анапе',
    description:
      'Ищите и бронируйте номера, оплачивайте услуги, заполняйте документы для быстрого заселения в санатории «Надежда». Просматривайте детали лечения и отдыха.',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Санаторий Надежда – онлайн-бронирование',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Санаторий «Надежда» – бронирование и оплата онлайн',
    description:
      'Бронируйте номера, оплачивайте услуги, заполняйте документы для быстрого поселения. Удобно и быстро.',
    images: ['/logo.png'],
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
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'HealthAndBeautyBusiness',
  name: 'Санаторий «Надежда»',
  image: siteUrl + '/logo.png',
  description:
    'Онлайн-бронирование, оплата услуг, заполнение документов для быстрого поселения, просмотр деталей лечения и отдыха в санатории «Надежда» (Анапа).',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Пирогова, 10',
    addressLocality: 'Анапа',
    addressRegion: 'Краснодарский край',
    postalCode: '353440',
    addressCountry: 'RU',
  },
  telephone: '+7 (86133) 5-00-00',
  url: siteUrl,
  sameAs: [
    'https://vk.com/sanatoriy_nadezhda',
    'https://ok.ru/sanatoriy.nadezhda',
  ],
  priceRange: '₽₽–₽₽₽',
  openingHours: 'Mo-Su 08:00-20:00',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.5',
    reviewCount: '120',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Услуги санатория',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Бронирование номеров онлайн',
          description: 'Поиск доступных номеров, выбор дат, онлайн-оплата.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Заполнение документов для заселения',
          description: 'Электронная регистрация для ускоренного поселения.',
        },
      },
    ],
  },
}

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Как забронировать номер онлайн?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'На сайте выберите даты, количество гостей и номер. Заполните данные гостей и оплатите бронирование картой. После оплаты вы получите подтверждение на email.',
      },
    },
    {
      '@type': 'Question',
      name: 'Можно ли оплатить услуги санатория онлайн?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Да, вы можете оплатить любые дополнительные услуги (питание, лечение, экскурсии) прямо в личном кабинете после бронирования.',
      },
    },
    {
      '@type': 'Question',
      name: 'Что нужно для быстрого заселения?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Заполните все данные гостей и загрузите скан-копии документов (паспорт) заранее в личном кабинете. Это позволит пройти регистрацию за 5 минут по прибытии.',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />

        {children}
        <Footer />
      </body>
    </html>
  )
}