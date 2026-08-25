'use client'

import { useEffect, useRef, useState } from 'react'

const stats=[
    { value: 20, suffix: ' сек', label: 'Чтобы открыть и увидеть загрузку номеров' },
    { value: 1, suffix: ' день', label: 'На подключение к вашей 1C' },
    { value: 8, suffix: '', label: 'Настраиваемых параметров отчёта' },
    { value: 100, suffix: '%', label: 'Данных — напрямую из вашей базы, без ручного ввода' },
]

function Counter({ value, suffix }: { value: number; suffix: string }){
    const [display, setDisplay]=useState(0)
    const ref=useRef<HTMLSpanElement>(null)
    const started=useRef(false)

    useEffect(()=>{
        const el=ref.current
        if (!el) return

        const observer=new IntersectionObserver(
            ([entry])=>{
                if (entry.isIntersecting && !started.current){
                started.current=true
                const duration=900
                const start=performance.now()

                function tick(now: number){
                    const progress=Math.min((now-start)/duration, 1)
                    const eased=1-Math.pow(1-progress, 3)
                    setDisplay(Math.round(value*eased))
                    if (progress<1) requestAnimationFrame(tick)
                }
                requestAnimationFrame(tick)
                }
            },
            { threshold: 0.5 },
        )

        observer.observe(el)
        return ()=>observer.disconnect()
    }, [value])

    return(
        <span ref={ref} className="text-4xl font-extrabold text-slate-900">
            {display}
            {suffix}
        </span>
    )
}

export default function StatsBar(){
    return(
        <section className="border-y border-slate-100 bg-white py-14">
            <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 sm:grid-cols-4">
                {stats.map((stat)=>(
                    <div key={stat.label} className="text-center">
                        <Counter value={stat.value} suffix={stat.suffix} />
                        <p className="mt-2 text-sm leading-5 text-slate-500">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}