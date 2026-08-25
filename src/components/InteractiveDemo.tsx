'use client'

import { useState } from 'react'
import ZoomableImage from './ZoomableImage'

const tabs=[
    {
        id: 'today',
        label: 'Сегодня',
        title: 'Что происходит прямо сейчас',
        description:
        'Занятость номеров, продажи, средний чек и доход за сегодняшний день — обновляется при каждом открытии.',
    },
    {
        id: 'month',
        label: 'Месяц',
        title: 'Динамика за текущий месяц',
        description:
        'Сравнивайте загрузку и доход месяц к месяцу, отслеживайте сезонность и планируйте акции заранее.',
    },
    {
        id: 'forecast',
        label: 'Прогноз',
        title: 'Заезды и выезды на завтра и неделю вперёд',
        description:
        'Гарантированные и негарантированные продажи на ближайшие 7 дней и 4 недели — видно заранее, а не по факту заезда.',
    },
]

export default function InteractiveDemo(){
    const [active, setActive]=useState(tabs[0].id)
    const current=tabs.find((t)=>t.id===active)!

    return(
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Один дашборд — три взгляда на бизнес
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Переключайтесь между периодами одним касанием, не пересчитывая ничего вручную.
                    </p>
                </div>

                <div className="mt-10 flex justify-center gap-2">
                    {tabs.map((tab)=>(
                        <button
                            key={tab.id}
                            onClick={()=>setActive(tab.id)}
                            className={`rounded-lg px-5 py-2.5 text-sm font-semibold transition ${
                                active===tab.id
                                ? 'bg-indigo-600 text-white shadow-sm'
                                : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                            }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>

                <div className="mt-10 grid grid-cols-1 items-center gap-10 rounded-2xl border border-slate-100 bg-slate-50 p-8 sm:grid-cols-2">
                    <div>
                        <h3 className="text-xl font-bold text-slate-900">{current.title}</h3>
                        <p className="mt-3 text-slate-600">{current.description}</p>
                    </div>
                    <ZoomableImage
                        src={`/demo-${current.id}.png`}
                        alt={current.title}
                        width={560}
                        height={400}
                        className="shadow-lg"
                    />
                </div>
            </div>
        </section>
    )
}