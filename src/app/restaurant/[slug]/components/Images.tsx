import React from 'react'

export default function Images() {
  return (
    <div>
        {/* IMAGES */}
        <div className="border-b pb-2 mb-2">
            <h2 className="font-bold text-3xl mt-5 ml-2 ">5 photos</h2>
          </div>

          <div className="flex flex-wrap p-2 ">
            <img
              className="w-56 h-44 mr-1 mb-1"
              src="https://resizer.otstatic.com/v2/photos/xlarge/3/41701449.jpg"
              alt=""
            />
            <img
              className="w-56 h-44 mr-1"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701450.jpg"
              alt=""
            />
            <img
              className="w-56 h-44"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701452.jpg"
              alt=""
            />
            <img
              className="w-56 h-44 mr-1"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701453.jpg"
              alt=""
            />
            <img
              className="w-56 h-44"
              src="https://resizer.otstatic.com/v2/photos/xlarge/2/41701454.jpg"
              alt=""
            />
          </div>

          {/* IMAGES */}
    </div>
  )
}
