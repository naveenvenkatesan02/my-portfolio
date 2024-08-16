import React from 'react'

const BackEnd = () => {
  return (
    <div className="ml-[100px] mr-[100px] pt-5">
    <h1 className="text-[#00df9a] uppercase text-2xl">Back-end</h1>
    <table className="w-full">
      <tr>
        <div className="flex items-center">
          <td className="w-[200px]">
            <h1 className=" font-bold text-[20px] max-w-full">Spring-boot</h1>
          </td>
          <td className="w-full">
            <div class="w-[70%] rounded-full h-[15px]  ml-2 bg-gray-700 ">
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

export default BackEnd