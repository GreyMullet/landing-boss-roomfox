'use client'

import { useEffect, useState } from 'react'

const links=[
    { href: '#features', label: 'Возможности' },
    { href: '#how-it-works', label: 'Как это работает' },
    { href: '#pricing', label: 'Стоимость' },
    { href: '#faq', label: 'Вопросы' },
]

export default function StickyNav(){
    const [progress, setProgress]=useState(0)
    const [visible, setVisible]=useState(false)

    useEffect(()=>{
        function handleScroll(){
            const scrolled=window.scrollY
            const height=document.documentElement.scrollHeight-window.innerHeight
            setProgress(height>0 ? (scrolled/height)*100 : 0)
            setVisible(scrolled>400)
        }

        window.addEventListener('scroll', handleScroll, { passive: true })
        return ()=>window.removeEventListener('scroll', handleScroll)
    }, [])

    return(
        <div
            className={`fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur transition-transform duration-300 ${
                visible ? 'translate-y-0' : '-translate-y-full'
            }`}
        >
            <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
                <span className="text-sm font-bold text-slate-900">Boss RoomFox</span>

                <div className="hidden gap-6 sm:flex">
                    {links.map((link)=>(
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm font-medium text-slate-600 transition hover:text-indigo-600"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                
                <a href="#cta"
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-indigo-500"
                >
                    Получить доступ
                </a>
            </nav>

            <div className="h-0.5 bg-slate-100">
                <div
                    className="h-full bg-indigo-600 transition-[width] duration-150"
                    style={{ width: `${progress}%` }}
                />
            </div>
        </div>
    )
}