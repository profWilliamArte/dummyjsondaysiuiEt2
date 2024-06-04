import React from 'react'

const Paginador = ({total, skip, setSkip}) => {
  return (
    <div className="join">
        <button className="join-item btn" onClick={() => {
          if (skip >= 20) {
            setSkip(skip - 20);
          }
        }}>«</button>
        <button className="join-item btn">{skip/20+1} / {(total/20).toFixed(0)}</button>
        <button className="join-item btn" onClick={() => {
          if (skip + 20 < total) {
            setSkip(skip + 20);
          }
        }}>»</button>
    </div>
  )
}

export default Paginador