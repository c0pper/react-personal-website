import React, { useState, useEffect } from 'react'



const Testimonial = ({testimonial}) => {
  const [imageSrc, setImageSrc] = useState('');

  useEffect(() => {
    import(`${testimonial.pic}`).then(image => setImageSrc(image.default));/* @vite-ignore */
  }, [testimonial.pic]);

  return (
    <div className="max-w-md py-4 px-8 mb-20 mr-20 border-card relative">
      <div>
        <p className="text-primary">{testimonial.text}</p>
      </div>
      <div className="flex flex-col justify-end items-start mt-4">
        <div className="text-xl font-medium text-primary">{testimonial.name}</div>
        <p className="text-ll font-medium text-secondary indent-border-left mt-2">{testimonial.role}</p>
        <a href={testimonial.institution.url} target='_blank' className="text-ll font-medium text-secondary indent-border-left">{testimonial.institution.name}</a>
      </div>
      <div className="flex justify-center md:justify-end absolute -bottom-10 -right-10">
        <img className="w-20 h-20 object-cover  border-[1px] border-primary" src={imageSrc} />
      </div>
    </div>
  )
}

export default Testimonial