export interface TicketProps {
  id: number
  title: string
  desc: string
  price: string
}

const Ticket: React.FC<TicketProps> = ({ desc, price, title }) => {
  return (
    <div className="flex flex-col gap-3 h-[410px] rounded-xl overflow-hidden border-[1px] border-[#DEE6F6] bg-[#FCFCFC]">
      <div className="h-60 bg-[#04304B]"></div>
      <div className="flex flex-col px-3 pb-4">
        <h3 className="text-black text-xl font-semibold leading-7 tracking-[0.4px]">
          {title}
        </h3>
        <span className="text-[#37444F] leading-6 mt-2">{desc}</span>
        <div className="flex justify-between mt-6">
          <div className="flex flex-col">
            <span className="text-[#9BA2AE] text-xs leading-4">From</span>
            <span className="text-[#0FC48F] text-xl font-semibold leading-6">
              {price}
            </span>
          </div>
          <button className="flex justify-center items-center w-[136px] h-9 py-2 rounded-lg ticket-button-gradient overflow-hidden">
            <span className="text-[#04304B] font-semibold leading-5">Book Now</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Ticket
