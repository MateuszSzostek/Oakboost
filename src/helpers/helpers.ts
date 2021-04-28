export interface IHeadProps {
  title?: string
  description?: string
  keywords?: string
  author?: string
}

export interface IButtonProps {
  isAnimated?: boolean
  slug?: string
}

export interface IFormButtonProps {
  slug?: string
}

export interface IPostCardProps {
  title: string
  slug: string
  shortDesc: string
}

export interface IBubbleProps {
  bubbles: {
    id: number
    img: string
    left?: string
    right?: string
    top?: string
    bottom?: string
    zIndex?: number
  }[]
}
