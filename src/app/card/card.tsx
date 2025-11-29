import { datas } from '@/mock/data'
import Image from 'next/image'

export function Card() {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 justify-self-center h-full w-7/12 gap-10 mb-10">
      {datas.map((value, index) => (
        <div
          key={index}
          className="flex gap-8 mb-4 flex-col bg-[#EAE2B7] text-[#A41623] justify-around rounded-lg box-border pt-5 h-auto  p-4"
        >
          <Image src={value.img} alt={value.title} />
          <div className="gap-4 flex flex-col">
            <h3 className="font-semibold text-lg">{value.title}</h3>
            <p>{value.text}</p>
          </div>
          <div className="flex gap-4">
            <a href={value.acess} target="_blank">
              <button className="bg-[#710627] rounded-lg text-[#EAE2B7] px-4 py-1.5 font-medium">
                Acessar
              </button>
            </a>
            <a href={value.redirect} target="_blank">
              <button className="bg-[#003049] rounded-lg text-[#EAE2B7] px-4 py-1.5 font-medium">
                Repositorio
              </button>
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}
