import { BiPhoneCall } from 'react-icons/bi'
import { FiMail } from 'react-icons/fi'
import { PiBuildingsFill } from 'react-icons/pi'

const Footer = () => {
  return (
    <footer className="py-20 footer-gradient">
      <div className="w-[1024px] px-6 mx-auto flex justify-between">
        <div className="flex flex-col justify-between h-32">
          <div className="h-12 w-[175px] rounded-lg bg-[#57FFAE]"></div>
          <span className="text-[#FCFCFC] text-[10px] font-bold leading-4">
            Copyright 2022 SKY ICT PCL., All rights reserved.
          </span>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-2 w-[148px] text-[#FCFCFC]">
            <h3 className="font-bold leading-[25px]">About US</h3>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold leading-4">About Us</span>
              <span className="text-[10px] font-bold leading-4">FAQs</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-[148px] text-[#FCFCFC]">
            <h3 className="font-bold leading-[25px]">Terms of Use</h3>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] font-bold leading-4">
                Terms and Conditions
              </span>
              <span className="text-[10px] font-bold leading-4">Private Policy</span>
              <span className="text-[10px] font-bold leading-4">Cookie Policy</span>
            </div>
          </div>
          <div className="text-[#FCFCFC] flex flex-col gap-2 w-[314px] pr-7">
            <h3 className="font-bold leading-[25px]">
              SKY ICT Public Company Limited
            </h3>
            <div className="flex flex-col gap-1">
              <span className="text-[10px] text-[#FCFCFC] font-bold leading-4">
                55, A.A. Capital Ratchada Building, 5th-7th Floor Ratchadapisek Road,
                Dindaeng, Dindaeng Bangkok 10400 Tax ID: 0107553000182
              </span>
              <div className="flex">
                <div className="flex flex-col">
                  <div className="flex gap-2 text-[#FCFCFC]">
                    <span className="text-base">
                      <BiPhoneCall />
                    </span>
                    <span className="text-[10px] font-bold leading-4">020297888</span>
                  </div>
                  <div className="flex gap-2 text-[#FCFCFC]">
                    <span className="text-base">
                      <FiMail />
                    </span>
                    <span className="text-[10px] font-bold leading-4">
                      info@skyict.co.th
                    </span>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 text-[#FCFCFC]">
                    <span className="text-base">
                      <PiBuildingsFill />
                    </span>
                    <span className="text-[10px] font-bold leading-4">020297879</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
