export type TrackType = {
  _id: string;
  src: string;
  name: string;
  tags: string[];
  artists: string[];
  followers: number;
  duration: number;
  releaseDate: Date;
};
