import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: '404 | Łukasz Duda',
};

export default function CatchAllPage() {
  notFound();
}
