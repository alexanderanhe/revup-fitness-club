const Stats = () => {
  return (
    <section>
      <h3>Weekly stats</h3>
      <div className="grid grid-cols-2 grid-rows-3 gap-2">
        <div className="grid grid-rows-subgrid row-span-2 shadow-md bg-blue-200/60 text-black rounded-3xl place-items-center p-4">
          <div className="flex bg-white size-9 text-xl rounded-full items-center justify-center self-end">🔥</div>
          <div>
            <div className="text-xl font-bold text-center">2,154</div>
            <div className="stat-title">kcal burnt</div>
          </div>
          {/* <div className="stat-desc">From January 1st to February 1st</div> */}
        </div>
        
        <div className="grid grid-cols-2 shadow-md bg-green-200/60 text-black rounded-3xl place-items-center p-4">
          <div className="flex bg-white size-9 text-xl rounded-full items-center justify-center">⌛️</div>
          <div className="text-left justify-start">
            <div className="text-xl font-bold">16h</div>
            <div className="stat-title">total time</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 shadow-md bg-zinc-300/60 text-black rounded-3xl place-items-center p-4">
          <div className="flex bg-white size-9 text-xl rounded-full items-center justify-center">💪</div>
          <div className="text-left justify-start">
            <div className="text-xl font-bold">107</div>
            <div className="stat-title">excercises</div>
          </div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>

        <div className="grid grid-cols-subgrid shadow-md bg-base text-base-content-100 rounded-3xl place-items-center col-span-2">
          <div>
            <div className="stat-title">most active</div>
            <div className="text-xl font-bold text-center">Thursday</div>
          </div>
          <div className="">
            <div className="flex space-x-2">
              <div className="flex flex-col flex-nowrap justify-end w-3 h-20 overflow-hidden">
                <div className="overflow-hidden bg-gray-300/30" style={{"height": "25%"}}></div>
                <span className="text-xs font-bold">L</span>
              </div>

              <div className="flex flex-col flex-nowrap justify-end w-3 h-20 overflow-hidden">
                <div className="overflow-hidden bg-gray-300/30" style={{"height": "50%"}}></div>
                <span className="text-xs font-bold">M</span>
              </div>

              <div className="flex flex-col flex-nowrap justify-end w-3 h-20 overflow-hidden">
                <div className="overflow-hidden bg-gray-300/30" style={{"height": "75%"}}></div>
                <span className="text-xs font-bold">M</span>
              </div>

              <div className="flex flex-col flex-nowrap justify-end w-3 h-20 overflow-hidden">
                <div className="overflow-hidden bg-gray-300/70" style={{"height": "90%"}}></div>
                <span className="text-xs font-bold">J</span>
              </div>

              <div className="flex flex-col flex-nowrap justify-end w-3 h-20 overflow-hidden">
                <div className="overflow-hidden bg-gray-300/30" style={{"height": "17%"}}></div>
                <span className="text-xs font-bold">V</span>
              </div>
              
              <div className="flex flex-col flex-nowrap justify-end w-3 h-20 overflow-hidden">
                <div className="overflow-hidden bg-gray-300/30" style={{"height": "80%"}}></div>
                <span className="text-xs font-bold">S</span>
              </div>

              <div className="flex flex-col flex-nowrap justify-end w-3 h-20 overflow-hidden">
                <div className="overflow-hidden bg-gray-300/30" style={{"height": "17%"}}></div>
                <span className="text-xs font-bold">D</span>
              </div>
            </div>
          </div>
          {/* <div className="stat-desc">↘︎ 90 (14%)</div> */}
        </div>
        
      </div>
    </section>
  )
}

export default Stats