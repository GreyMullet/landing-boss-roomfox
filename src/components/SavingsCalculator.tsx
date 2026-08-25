'use client'

import { useState } from 'react'

export default function SavingsCalculator(){
    const [hotels, setHotels]=useState(1)
    const [callsPerDay, setCallsPerDay]=useState(3)

    const minutesPerCall=4
    const minutesSavedPerMonth=hotels*callsPerDay*minutesPerCall*30
    const hoursSavedPerMonth=Math.round(minutesSavedPerMonth/60)

    return(
        <section className="bg-slate-50 py-24">
            <div className="mx-auto max-w-3xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Сколько времени вы тратите на сбор отчётов сейчас
                    </h2>

                    <p className="mt-4 text-lg text-slate-600">
                        Передвиньте ползунки под свою ситуацию — увидите примерную экономию в месяц.
                    </p>
                </div>

                <div className="mt-12 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
                    <div className="space-y-8">
                        <div>
                            <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                                <span>Количество отелей</span>
                                <span>{hotels}</span>
                            </div>

                            <input
                                type="range"
                                min={1}
                                max={10}
                                value={hotels}
                                onChange={(e)=>setHotels(Number(e.target.value))}
                                className="mt-3 w-full accent-indigo-600"
                            />
                        </div>

                        <div>
                            <div className="flex items-center justify-between text-sm font-semibold text-slate-700">
                                <span>Звонков/сверок за отчётами в день</span>
                                <span>{callsPerDay}</span>
                            </div>

                            <input
                                type="range"
                                min={1}
                                max={15}
                                value={callsPerDay}
                                onChange={(e)=>setCallsPerDay(Number(e.target.value))}
                                className="mt-3 w-full accent-indigo-600"
                            />
                        </div>
                    </div>

                    <div className="mt-10 rounded-xl bg-indigo-50 p-6 text-center">
                        <p className="text-sm font-semibold text-indigo-600">Экономия в месяц</p>

                        <p className="mt-2 text-4xl font-extrabold text-slate-900">
                            ≈ {hoursSavedPerMonth} ч
                        </p>

                        <p className="mt-2 text-sm text-slate-500">
                            Время, которое сейчас уходит на звонки и сверку цифр вручную
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}