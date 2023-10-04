const Explore: React.FC = () => {
  return (
    <section className="flex justify-center py-20">
      <div className="w-[1024px] mx-auto">
        <div className="flex flex-col gap-8 px-6">
          <h2 className="text-[#04304B] text-[32px] font-semibold leading-[34px]">
            More to explore
          </h2>
          <div className="h-72 w-[976px] rounded-2xl explore-gradient overflow-hidden flex">
            <div className="flex flex-col justify-between h-full py-8 w-80 pl-9 pr-9">
              <div className="flex flex-col gap-1">
                <h3 className="text-[#57FFAE] text-[32px] font-bold">Headline1</h3>
                <span className="w-[214px] text-[#FCFCFC] leading-6">
                  Lorem ipsum dolor sit amet consectetur. Nulla a velit cursus.
                </span>
              </div>
              <div className="h-[35px] flex justify-between gap-[10px]">
                <img className="h-full" src="/images/ggPlay.png" alt="Google Play" />
                <img className="h-full" src="/images/appStore.png" alt="App Store" />
              </div>
            </div>
            <div className="flex items-end flex-1 translate-y-[-96px] justify-between pr-9">
              <div className="relative flex justify-center w-48 bg-center bg-no-repeat bg-contain h-max ">
                <img
                  className="object-cover w-full"
                  src="/images/phone.png"
                  alt="Phone"
                />
              </div>
              <div className="relative flex justify-center w-48 bg-center bg-no-repeat bg-contain h-max translate-y-72">
                <img
                  className="object-cover w-full"
                  src="/images/phone.png"
                  alt="Phone"
                />
              </div>
              <div className="relative flex justify-center w-48 bg-center bg-no-repeat bg-contain h-max ">
                <img
                  className="object-cover w-full"
                  src="/images/phone.png"
                  alt="Phone"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore
