import dim from '../assets/Service/dimond.svg'
import { useLocation, useNavigate } from 'react-router-dom'
import backBtn from '../assets/arrow-ios-back.svg'
import { services } from '../data/services'

export default function ServiceHeader() {
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const slug = pathname.replace(/\/+$/, '').split('/').pop()
  const service = services.find((s) => s.slug === slug)
  const header = { part1: 'NOS', part2: 'SERVICES' }

  return (
    <div className="relative top-3 ml-0 w-full bg-cover bg-no-repeat">
      <img src={service?.headerImage} alt="" className="h-[400px] w-full" />
      <div className="inset-0 absolute">
        <button
          className="bg-transparent hover:border-secondary hover:border-2 border-2 relative p-1 top-6 mb-2 left-28 border-gray-200"
          onClick={() => navigate('/service')}
          aria-label="Retour aux services"
        >
          <img src={backBtn} alt="" className="w-10" />
        </button>
        <div className="flex items-center mt-4">
          <div className="md:w-40 xs:w-24 xs:h-24 md:h-40 inline-block bg-secondary"></div>
          <div className="mt-5 md:text-5xl xs:text-3.5xl">
            <p className="text-primary inline-block relative ml-4 mt-4 m-2">{header.part1}</p>
            <p className="text-white mb-10 block relative font-semibold ml-4">{header.part2}</p>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-6 ml-14">
          <p className="text-lg text-white font-meduim col-start-2 col-span-full flex items-center gap-x-2">
            <img src={dim} alt="" className="inline-block w-5" />
            {service?.title}
          </p>
        </div>
      </div>
    </div>
  )
}
