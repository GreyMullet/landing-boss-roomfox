const steps=[
    {
        step: '01',
        title: 'Подключаем ваш 1C:Отель',
        description:
            'Вы передаёте адрес HTTP-сервиса и учётные данные — мы настраиваем соединение с шифрованием на своей стороне. Ничего менять в вашей базе 1C не нужно.',
    },
    {
        step: '02',
        title: 'Выдаём доступ директору',
        description:
            'Личный пароль на вход — дашборд открывается на любом устройстве: рабочем компьютере, планшете администратора, личном телефоне.',
    },
    {
        step: '03',
        title: 'Смотрите цифры в реальном времени',
        description:
            'Каждое открытие дашборда — свежий запрос к вашей базе 1C, без задержек, без ручного обновления, без ожидания отчёта от сотрудников.',
    },
]

export default function HowItWorks(){
    return(
        <section id="how-it-works" className="py-24">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                        Запуск за один день
                    </h2>
                    <p className="mt-4 text-lg text-slate-600">
                        Не требует установки на сервер отеля и не трогает вашу учётную систему — только чтение данных через уже существующий HTTP-сервис 1C.
                    </p>
                </div>
        
                <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
                    {steps.map((item)=>(
                        <div key={item.step}>
                            <span className="text-5xl font-extrabold text-indigo-100">{item.step}</span>
                            <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                            <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}