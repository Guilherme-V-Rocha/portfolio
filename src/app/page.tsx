import Github from '@/images/github.jpg'
import Linkedin from '@/images/linRetro.svg'
import PC from '@/images/pc.png'
import Image from 'next/image'
import { Card } from './card/card'

export default function Home() {
  return (
    <main>
      <div className="xl:flex gap-20 justify-between justify-self-center grid grid-cols-1 mb-10 w-7/12 items-center h-auto">
        <Image src={PC} alt="pc" className="w-96" />
        <div className="text-center flex flex-col bg-[#EAE2B7] xl:w-[48%] rounded-lg p-4 gap-4">
          <h1 className="font-semibold text-2xl">Guilherme Vieira Rocha</h1>

          <h3 className="font-medium">Front End Developer</h3>
          <p>
            Sou desenvolvedor front-end há dois anos, sempre focado em entregar
            interfaces de alta qualidade com atenção aos detalhes e código
            limpo, organizado e fácil de manter. Trabalho principalmente com
            React, TypeScript, Next.js, Tailwind e Styled Components, além de já
            ter experiência com Sass, Vite e projetos em React Native. Ao longo
            da minha trajetória, desenvolvi aplicações, incluindo um sistema
            completo para precatórios e plataformas de vendas internas. Busco
            constantemente minha evolução profissional, criando soluções
            sólidas. Amo ver codigos dando vida a sites e funcionando na
            pratica.
          </p>
          <div className="flex gap-4 justify-center">
            <a
              href="https://www.linkedin.com/in/guilherme-v-rocha-6310381b7/"
              target="_blank"
            >
              <Image src={Linkedin} alt="linkedin" className="w-8" />
            </a>
            <a href="https://github.com/Guilherme-V-Rocha" target="_blank">
              <Image src={Github} alt="github" className="w-8" />
            </a>
          </div>
        </div>
      </div>
      <Card />
    </main>
  )
}
