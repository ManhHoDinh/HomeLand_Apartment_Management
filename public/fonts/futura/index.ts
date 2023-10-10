import CustomFont from 'next/font/local'

export const futuna = CustomFont({
    src: [
      {
        path: './Futura Book font.ttf',
        weight: '100',
        style: 'normal',
      },
      {
        path: './Futura Book Italic font.ttf',
        weight: '100',
        style: 'italic',
      },
    ],
  })
