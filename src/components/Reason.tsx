import { useMemo } from 'react'
import ReasonCard, { ReasonCardProps } from './ReasonCard'

const Reason: React.FC = () => {
  const reasons = useMemo<ReasonCardProps[]>(
    () => [
      {
        id: 0,
        title: 'Title 1',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nulla a velit cursus ante ',
      },
      {
        id: 1,
        title: 'Title 2',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nulla a velit cursus ante ',
      },
      {
        id: 2,
        title: 'Title 3',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nulla a velit cursus ante ',
      },
    ],
    []
  )

  return (
    <section className="bg-[#EEF5FE] py-20">
      <div className="w-[1024px] mx-auto">
        <div className="flex flex-col gap-8 px-6">
          <h2 className="text-[#04304B] text-[32px] font-semibold leading-[34px]">
            Why choose SAWASDEE Pass
          </h2>
          <div className="flex justify-between">
            {reasons?.map((reason) => (
              <ReasonCard key={reason?.id} {...reason} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Reason
