const rows=[
    { label: 'Актуальность данных', old: 'Отчёт по запросу, раз в день', roomfox: 'В реальном времени, при каждом открытии' },
    { label: 'Кто готовит отчёт', old: 'Администратор или бухгалтер вручную', roomfox: 'Никто — данные приходят из 1C автоматически' },
    { label: 'Доступ с телефона', old: 'Нужно писать в мессенджер или звонить', roomfox: 'Приложение на экране телефона' },
    { label: 'Прогноз загрузки', old: 'Не считается или считается вручную', roomfox: 'Готовый прогноз на завтра и неделю вперёд' },
    { label: 'Сравнение с прошлым годом', old: 'Отдельная выгрузка и сведение в Excel', roomfox: 'Один переключатель в настройках' },
    { label: 'Несколько отелей сети', old: 'Разные файлы и звонки в каждый отель', roomfox: 'Отдельный защищённый доступ на каждый объект' },
]

export default function Comparison(){
    return(
        <section className="py-24">
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Как принимают решения без Boss RoomFox — и с ним
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Управлять отелем по звонкам и отчётам раз в сутки — можно. Но решения на устаревших цифрах стоят денег.
                    </p>
                </div>

                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200">
                    <table className="w-full text-left text-sm">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="px-6 py-4 font-semibold text-slate-500">Задача</th>
                                <th className="px-6 py-4 font-semibold text-slate-500">Без Boss RoomFox</th>
                                <th className="px-6 py-4 font-semibold text-indigo-600">С Boss RoomFox</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, i)=>(
                                <tr key={row.label} className={i%2===0 ? 'bg-white' : 'bg-slate-50/50'}>
                                <td className="px-6 py-4 font-medium text-slate-900">{row.label}</td>
                                <td className="px-6 py-4 text-slate-500">{row.old}</td>
                                <td className="px-6 py-4 font-medium text-slate-900">{row.roomfox}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}