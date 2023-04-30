import React, { useState, useEffect } from 'react'



const Testimonial = ({testimonial}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`${testimonial.pic}`).then(image => setImageSrc(image.default));/* @vite-ignore */
  }, [testimonial.pic]);

  return (
    <div class="max-w-md py-4 px-8 bg-white mt-20">
      <div class="flex justify-center md:justify-end -mt-16">
        <img class="w-20 h-20 object-cover rounded-full border-2 border-white" src={imageSrc} />
      </div>
      <div>
        <p class="mt-2 text-gray-600">{testimonial.text}</p>
      </div>
      <div class="flex flex-col justify-end items-end mt-4">
        <div class="text-xl font-medium text-gray-600">{testimonial.name}</div>
        <a href={testimonial.institution.url} target='_blank' class="text-ll font-medium text-gray-400">{testimonial.institution.name}</a>
      </div>
    </div>
  )
}

export default Testimonial