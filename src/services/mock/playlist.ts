import { MalinovSvet, Maturidade, MyWay, Myself, Overseas, PickMeUpLetMeFall, PrettyGirl, SalEPimenta, SeteK } from "@/assets/images";

export type PlaylistDataType = {
  id: number;
  artist: string;
  title: string;
  thumbnail: any;
  altThumbnail: string;
  ytLink: string;
  spotifyLink: string;
}

export const playlistData: PlaylistDataType[] = [
  {
    id: 1,
    artist: 'Kayblack',
    title: 'Sal e Pimenta',
    thumbnail: SalEPimenta,
    altThumbnail: 'sal-e-pimenta-thumb',
    ytLink: 'https://www.youtube.com/watch?v=f2JlAkmeB0M',
    spotifyLink: ''
  },
  {
    id: 2,
    artist: 'Frank Sinatra',
    title: 'My Way',
    thumbnail: MyWay,
    altThumbnail: 'my-way-thumb',
    ytLink: 'https://www.youtube.com/watch?v=qQzdAsjWGPg',
    spotifyLink: ''
  },
  {
    id: 3,
    artist: 'Young Buda',
    title: '7K',
    thumbnail: SeteK,
    altThumbnail: '7-k-thumb',
    ytLink: 'https://www.youtube.com/watch?v=-fKvcGd2zvQ',
    spotifyLink: ''
  },
  {
    id: 4,
    artist: 'Леша Свик',
    title: 'Malinov Svet',
    thumbnail: MalinovSvet,
    altThumbnail: 'malinov-svet-thumb',
    ytLink: 'https://www.youtube.com/watch?v=ct15n6_ppmY',
    spotifyLink: ''
  },
  {
    id: 5,
    artist: 'Central Cee',
    title: 'Overseas',
    thumbnail: Overseas,
    altThumbnail: 'overseas-thumb',
    ytLink: 'https://www.youtube.com/watch?v=I4Ra4z2Arqg',
    spotifyLink: ''
  },
  {
    id: 6,
    artist: 'Kayblack',
    title: 'Maturidade',
    thumbnail: Maturidade,
    altThumbnail: 'overseas-thumb',
    ytLink: 'https://www.youtube.com/watch?v=K9d5Tfdevt8',
    spotifyLink: ''
  },
  {
    id: 7,
    artist: 'Clairo',
    title: 'Pretty Girl',
    thumbnail: PrettyGirl,
    altThumbnail: 'Pretty-Girl-thumb',
    ytLink: 'https://www.youtube.com/watch?v=mngtcfcaVrI',
    spotifyLink: ''
  },
  {
    id: 8,
    artist: 'Lil Rae',
    title: 'Pick Me Up Let Me Fall',
    thumbnail: PickMeUpLetMeFall,
    altThumbnail: 'pick-me-up-let-me-fall-thumb',
    ytLink: 'https://www.youtube.com/watch?v=XFtNeMi-lKI',
    spotifyLink: ''
  },
]