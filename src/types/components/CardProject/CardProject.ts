import { LocalesType } from '@/types/LocalesType';

export type CardProjectProps = {
  img: string;
  stack: string[];
  live?: string;
  code?: string;
  translations: {
    [key in LocalesType]: string;
  };
};
