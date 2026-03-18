import CollageImage from "./CollageImage"

export default function CollageCanvas() {

  return (

    <div className="absolute inset-0 pointer-events-none">

      <CollageImage
        src="/paper.png"
        x={200}
        y={100}
        rotate={-6}
      />

    </div>

  )
}