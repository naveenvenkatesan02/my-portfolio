import React from 'react'

const FrontEnd = () => {
  return (
    <div className="ml-[100px] mr-[100px] pt-5">
    <h1 className="text-[#00df9a] uppercase text-2xl">Front-end</h1>
    <table className="w-full">
      <tr>
        <div className="flex items-center">
          <td className="w-[200px]">
            <h1 className=" font-bold text-[20px] max-w-full">HTML</h1>
          </td>
          <td className="w-full">
            <div class="w-[80%] rounded-full h-[15px]  ml-2 bg-gray-700 ">
              <div class=" bg-[#5bc8af] h-full rounded-full w-[95%] text-black font-medium p-0.5 text-xs ">
                <p className="text-center pb-2">95%</p>
              </div>
            </div>
          </td>
        </div>
      </tr>
      <tr>
        <div className="flex items-center">
          <td className="w-[200px]">
            <h1 className=" font-bold text-[20px] max-w-full">CSS</h1>
          </td>
          <td className="w-full">
            <div class="w-[80%] rounded-full h-[15px]  ml-2 bg-gray-700 ">
              <div class=" bg-[#5bc8af] h-full rounded-full w-[75%] text-black font-medium p-0.5 text-xs ">
                <p className="text-center pb-2">75%</p>
              </div>
            </div>
          </td>
        </div>
      </tr>
      <tr>
        <div className="flex items-center">
          <td className="w-[200px]">
            <h1 className=" font-bold text-[20px] max-w-full">Tailwind CSS</h1>
          </td>
          <td className="w-full">
            <div class="w-[80%] rounded-full h-[15px]  ml-2 bg-gray-700 ">
              <div class=" bg-[#5bc8af] h-full rounded-full w-[70%] text-black font-medium p-0.5 text-xs ">
                <p className="text-center pb-2">70%</p>
              </div>
            </div>
          </td>
        </div>
      </tr>
      <tr>
        <div className="flex items-center">
          <td className="w-[200px]">
            <h1 className=" font-bold text-[20px] max-w-full">Javascript</h1>
          </td>
          <td className="w-full">
            <div class="w-[80%] rounded-full h-[15px]  ml-2 bg-gray-700 ">
              <div class=" bg-[#5bc8af] h-full rounded-full w-[80%] text-black font-medium p-0.5 text-xs ">
                <p className="text-center pb-2">80%</p>
              </div>
            </div>
          </td>
        </div>
      </tr>
      <tr>
        <div className="flex items-center">
          <td className="w-[200px]">
            <h1 className=" font-bold text-[20px] max-w-[50px]">React.js</h1>
          </td>
          <td className="w-full">
            <div class="w-[80%] rounded-full h-[15px]  ml-2 bg-gray-700 ">
              <div class=" bg-[#5bc8af] h-full rounded-full w-[70%] text-black font-medium p-0.5 text-xs ">
                <p className="text-center pb-2">70%</p>
              </div>
            </div>
          </td>
        </div>
      </tr>
    </table>
  </div>
  )
}

export default FrontEnd