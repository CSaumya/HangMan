const HEAD = (
  <div className="absolute top-[50px] -right-[15px] h-[40px] w-[40px] rounded-full border-[10px] border-[#F3F4F4]" />
)

const BODY = (
  <div className="absolute top-[80px] right-0 h-[80px] w-[10px] bg-[#F3F4F4]" />
)

const RIGHT_ARM = (
  <div className="absolute top-[110px] -right-[80px] h-[10px] w-[80px] origin-[left_bottom] rotate-[-30deg] bg-[#F3F4F4]" />
)

const LEFT_ARM = (
  <div className="absolute top-[110px] right-[10px] h-[10px] w-[80px] origin-[right_bottom] rotate-[30deg] bg-[#F3F4F4]" />
)

const RIGHT_LEG = (
  <div className="absolute top-[150px] -right-[70px] h-[10px] w-[80px] origin-[left_bottom] rotate-[60deg] bg-[#F3F4F4]" />
)

const LEFT_LEG = (
  <div className="absolute top-[150px] right-0 h-[10px] w-[80px] origin-[right_bottom] rotate-[-60deg] bg-[#F3F4F4]" />
)

const BODY_PARTS = [
  HEAD,
  BODY,
  RIGHT_ARM,
  LEFT_ARM,
  RIGHT_LEG,
  LEFT_LEG,
]

type HangmanDrawingProps = {
  numberOfGuesses: number
}

export function HangmanDrawing({
  numberOfGuesses,
}: HangmanDrawingProps) {
  return (
    <div className="relative mt-3">
      {BODY_PARTS.slice(0, numberOfGuesses)}

      <div className="absolute top-0 right-0 h-[50px] w-[10px] bg-[#F3F4F4]" />

      <div className="ml-[80px] h-[10px] w-[200px] bg-[#F3F4F4]" />

      <div className="ml-[80px] h-[250px] w-[10px] bg-[#F3F4F4]" />

      <div className="h-[10px] w-[150px] bg-[#F3F4F4]" />
    </div>
  )
}
