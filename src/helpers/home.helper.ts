export const card_type = {
  boycott: {
    title: 'Boycott elections',
    color: '#75B3FF80'
  },
  newupdate: {
    title: 'News update',
    color: '#FF7A00B2'
  },
  event: {
    title: 'Event',
    color: '#FF0000B2'
  }
} as const;

export type CardTypeKey = keyof typeof card_type;
