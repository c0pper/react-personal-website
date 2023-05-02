import React from 'react'

function SectionContent({ children }) {
    return (
        <>
            <p className="text-3xl text-secondary mb-6">{"{"}</p>
            <div className="section-content">
                {children}
            </div>
            <p className="text-3xl text-secondary mt-6">{"}"}</p>
        </>
    );
  }

export default SectionContent