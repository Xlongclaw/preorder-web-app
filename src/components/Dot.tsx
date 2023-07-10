import React from 'react'

const Dot:React.FC<{selected?:boolean}> = (props) => {
    const style = {
        selected:"bg-customorange w-3 h-3 rounded-full",
        default:"w-2 h-2 rounded-full bg-gray-300"
    }
  return (
    <div className={props.selected?style.selected:style.default}/>
  )
}

export default Dot
