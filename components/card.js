export default function Card ({img, title, date, tags}) {
    return (
        <div className="rounded-2xl overflow-hidden dark:bg-dark-content bg-white shadow-xl">
            <img className="object-cover aspect-[4/3]" src={img} />
            <div className="p-6">
                <div className="flex gap-2">
                    {tags.map((e, i) => (
                        <div key={i} className="whitespace-nowrap cursor-pointer p-1 bg-off-white text-dark-gray dark:text-light-gray hover:text-pink transition-all text-xs rounded-lg font-bold">
                            {e}
                        </div>
                    ))}
                </div>
                <div className="text-black dark:text-white font-bold hover:underline mt-6 cursor-pointer h-8">{title}</div>
                <div className="dark:text-off-white text-light-gray text-xs mt-6">{date}</div>
            </div>
        </div>
    )
}