export const FoodContentCardSizeList = ['md', 'lg'] as const;
export const SocialBadgeList = ['youtube', 'naverBlog', undefined] as const;

export type FoodContentCardSize = (typeof FoodContentCardSizeList)[number];
export type SocialBadge = (typeof SocialBadgeList)[number];
