type TextProps = {
  title: string
  size?: 'mini' | 'small' | 'normal' | 'large' | 'huge' | string;
  weight?: number
  color?: string
}
export const TextComponent = (data: TextProps) => {
  const sizeMap: Record<string, string> = {
    mini: 'text-xs',
    small: 'text-sm',
    normal: 'text-base',
    large: 'text-lg',
    huge: 'text-xl',
    large1: 'text-2xl',
    large2: 'text-3xl',
    large3: 'text-4xl',
    large4: 'text-5xl',
    large5: 'text-6xl',
    large6: 'text-7xl',
    large7: 'text-8xl',
    large8: 'text-9xl',
    large9: 'text-10xl',
    large10: 'text-11xl',
    large11: 'text-12xl',
    large12: 'text-13xl',
    large13: 'text-14xl'
  }
  const sizeClass = data.size && sizeMap[data.size] ? sizeMap[data.size] : sizeMap.normal;
  return (
    <p className={`${sizeClass} text-center flex flex-wrap`} style={{fontWeight: data.weight, color: data.color}}>
      {data.title}
    </p>
  )
}
