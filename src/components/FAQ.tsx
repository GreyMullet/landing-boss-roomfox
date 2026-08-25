'use client'

import { useState } from 'react'

const faq=[
    {
        q: 'Нужно ли что-то менять в самой 1C?',
        a: 'Да, но по минимуму: на сторону 1C нужно поставить небольшое расширение — это занимает около 5 минут и не требует остановки работы базы. Никаких других модулей или доработок не нужно.',
    },
    {
        q: 'Данные точно защищены?',
        a: 'Да. Пароли от 1C и пароль для входа директора хранятся в зашифрованном виде (AES-256), доступ к дашборду — только по личному паролю, у каждого отеля свой изолированный доступ.',
    },
    {
        q: 'Можно ли подключить несколько отелей сети?',
        a: 'Да, для каждого отеля заводится отдельная лицензия и отдельный пароль — данные одного отеля никогда не пересекаются с данными другого.',
    },
    {
        q: 'Работает ли на телефоне?',
        a: 'Да, Boss RoomFox — PWA-приложение: устанавливается на экран телефона как обычное приложение и работает без постоянного подключения к компьютеру.',
    },
    {
        q: 'Сколько времени занимает подключение?',
        a: 'От 5 до 10 минут: ставим расширение в 1C, передаёте адрес HTTP-сервиса и учётные данные для чтения отчётов — дальше настройку берём на себя мы.',
    },
    {
        q: 'Что если истечёт срок лицензии?',
        a: 'Дашборд заранее показывает предупреждение о приближающемся окончании срока — можно продлить лицензию до того, как доступ ограничится.',
    },
]

export default function FAQ(){
    const [openIndex, setOpenIndex]=useState<number|null>(0)

    return(
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-3xl px-6">
                <h2 className="text-center text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                    Частые вопросы
                </h2>

                <div className="mt-12 space-y-3">
                    {faq.map((item, index)=>{
                        const isOpen=openIndex===index
                        return(
                            <div
                                key={item.q}
                                className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                            >
                                <button
                                    onClick={()=>setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between px-6 py-4 text-left"
                                    aria-expanded={isOpen}
                                >
                                    <span className="font-semibold text-slate-900">{item.q}</span>
                                    <span
                                        className={`ml-4 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500 transition-transform ${
                                        isOpen ? 'rotate-45' : ''
                                        }`}
                                    >
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ${
                                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                                    }`}
                                >
                                    <div className="overflow-hidden px-6">
                                        <p className="pb-5 text-sm leading-6 text-slate-600">{item.a}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}