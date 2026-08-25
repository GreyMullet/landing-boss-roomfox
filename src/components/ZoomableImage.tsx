'use client'

import { useLightbox } from './Lightbox'

interface ZoomableImageProps{
    src: string
    alt: string
    width: number
    height: number
    className?: string
    loading?: 'eager'|'lazy'
}

export default function ZoomableImage({
    src,
    alt,
    width,
    height,
    className='',
    loading='lazy',
}: ZoomableImageProps){
    const { open }=useLightbox()

    function handleActivate(){
        open(src, alt)
    }

    function handleKeyDown(e: React.KeyboardEvent){
        if(e.key==='Enter' || e.key===' '){
            e.preventDefault()
            handleActivate()
        }
    }

    return(
        <div
            role="button"
            tabIndex={0}
            onClick={handleActivate}
            onKeyDown={handleKeyDown}
            className="group relative block w-full cursor-zoom-in overflow-hidden rounded-xl"
            aria-label={`Развернуть изображение: ${alt}`}
        >
            <img
                src={src}
                alt={alt}
                width={width}
                height={height}
                loading={loading}
                className={className}
            />

            <span className="pointer-events-none absolute inset-0 flex items-center justify-center bg-slate-950/0 transition group-hover:bg-slate-950/20">
                <span className="flex h-11 w-11 scale-75 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition group-hover:scale-100 group-hover:opacity-100">
                    <svg viewBox="0 0 24 24" className="h-5 w-5 text-slate-700" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="11" cy="11" r="7" />
                        <path d="M21 21l-4.35-4.35" strokeLinecap="round" />
                        <path d="M11 8v6M8 11h6" strokeLinecap="round" />
                    </svg>
                </span>
            </span>
        </div>
    )
}