import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageListComponent() {
  return (
    <ImageList sx={{ width: 'auto', height: 'auto' }} cols={3} rowHeight={'auto'}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}`}
            alt=""
            srcSet={`${item.img}`}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: 'https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/84734282_2663863890509710_7462370381035208704_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=_qHdl3b0vScAX9sEhQt&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT92lwTU-5aPVGeZfD9KMeGGeu0jHBlDVDQid7GXPV-18w&oe=624AAB02',
  },
  {
    img: 'https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/90677431_2663862980509801_2324294364810969088_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=cdbe9c&_nc_ohc=ntp5zJQJ2LMAX_F7eTm&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT-fPURWSdwLTpVUzIk6tXMAkkcq6GygMXPqv7L_h__YiQ&oe=624C5F87',
  },
  {
    img: 'https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/109083299_2761893307373434_8785052153290208178_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_ohc=hgLPKmcU5ZgAX9uImIR&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT-rv-hJ36Z1_6ht69pGnO-qm2WV-FFCIimqqbIH4hI0Ng&oe=624B3D55',
  },
  {
    img: 'https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/69620163_2488681734694594_623205488430940160_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=8bfeb9&_nc_ohc=L6gMqtE4AmwAX8U8Dwf&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT-SAnl6M8lTaBfXcOzKgFJdf3HMYXJbNeVsWTzUk9FqLQ&oe=624A9384',
  },
  {
    img: 'https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/107773901_2761892737373491_7590743598733037720_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_ohc=lrYNMIIqBCMAX_SaQkB&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT8XoGB-nUIYIS2X5bVXxRw63gE5rffs6VfwIOO8Soqnlw&oe=624BFBF3',
  },
  {
    img: 'https://scontent.ftlv18-1.fna.fbcdn.net/v/t1.6435-9/109133194_2761893337373431_6460557960384342763_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_ohc=LHncMtRwrI4AX9sEk86&_nc_ht=scontent.ftlv18-1.fna&oh=00_AT84Jz_y4Gr4jBud4hZJRXaeK0Qabjf7o0YiSseyYazEvw&oe=624ABBD1',
  }
];