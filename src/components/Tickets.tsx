import Search from './Search'
import { useMemo } from 'react'
import Ticket, { TicketProps } from './Ticket'

const Tickets: React.FC = () => {
  const tickets = useMemo<TicketProps[]>(
    () => [
      {
        id: 0,
        title: 'Arrival Butler +Buggy',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nulla a velit cursus.',
        price: 'THB2,700',
      },
      {
        id: 1,
        title: 'Arrival Butler',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nulla a velit cursus.',
        price: 'THB2,700',
      },
      {
        id: 2,
        title: 'Departure Butler',
        desc: 'Lorem ipsum dolor sit amet consectetur. Nulla a velit cursus.',
        price: 'THB2,700',
      },
    ],
    []
  )

  return (
    <section className="flex flex-col items-center">
      <div className="translate-y-[-52px]">
        <Search />
      </div>
      <div className="w-[1024px] pb-16">
        <div className="flex gap-4 px-6">
          {tickets?.map((ticket) => (
            <Ticket key={ticket?.id} {...ticket} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tickets
