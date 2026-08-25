import type { Metadata } from 'next'

const posts=[
    {
        slug: 'kak-schitat-revpar',
        title: 'Как считать RevPAR отеля и зачем он нужен директору',
        description: 'Формула RevPAR, примеры расчёта и как эта метрика связана с загрузкой номеров.',
    }
]

export function generateStaticParams(){
    return posts.map((post)=>({ slug: post.slug }))
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata{
    const post=posts.find((p)=>p.slug===params.slug)
    if(!post) return {}

    return {
        title: post.title,
        description: post.description,
    }
}

export default function BlogPost({ params }: { params: { slug: string } }){
    const post=posts.find((p)=>p.slug === params.slug)
    if(!post) return <p>Статья не найдена</p>

    return(
        <article className="mx-auto max-w-2xl px-6 py-24">
            <h1 className="text-3xl font-bold text-slate-900">{post.title}</h1>
            {/* текст статьи */}
        </article>
    )
}